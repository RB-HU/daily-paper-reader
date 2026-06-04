---
title: "Quadratic Coreset Selection: Certifying and Reconciling Sequence and Token Mining for Efficient Instruction Tuning"
title_zh: 二次核集选择：为高效指令微调认证并调和序列与令牌挖掘
authors: "Ziliang Chen, Yongsen Zheng, Zhao-Rong Lai, Zhanfu Yang, Cuixi Li, Yang Liu, Liang Lin"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=btZm6DUaDO"
tags: ["query:fla"]
score: 8.0
evidence: 用于大规模语言模型高效指令微调的核集选择方法
tldr: 针对指令微调中仅关注序列层面而忽视令牌影响的不足，提出二次核集选择（QCS）方法，同时考虑序列和令牌的贡献以筛选最优数据。理论证明更优的数据选择可提升LLM的表达能力，实验表明QCS在多个基准上以更少指令数据达到了与全量微调相当或更好的效果。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-btzm6duado/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 253, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-btzm6duado/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1059, \"height\": 364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-btzm6duado/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1433, \"height\": 384, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-btzm6duado/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 672, \"height\": 179, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-btzm6duado/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 766, \"height\": 301, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-btzm6duado/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1319, \"height\": 855, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-btzm6duado/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 754, \"height\": 222, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-btzm6duado/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1071, \"height\": 172, \"label\": \"Table\"}]"
motivation: 现有指令微调数据筛选主要基于序列级别，忽略了关键令牌的影响。
method: 基于双层核集选择，整合序列和令牌影响力贡献，推导理论上更有表达力的数据选择。
result: QCS在保持性能的同时显著减少所需指令数据量。
conclusion: 为指令微调提供了原则性的数据高效选择方法。
---

## Abstract
Instruction-Tuning (IT) was recently found the impressive data efficiency in post-training large language models (LLMs). While the pursuit of efficiency predominantly focuses on sequence-level curation, often overlooking the nuanced impact of critical tokens and the inherent risks of token noise and biases. Drawing inspiration from bi-level coreset selection, our work provides the principled view of the motivation behind selecting instructions' responses. It leads to our approach Quadratic Coreset Selection (QCS) that reconciles sequence-level and token-level influence contributions, deriving more expressive LLMs with established theoretical result. Despite the original QCS framework challenged by prohibitive computation from inverted LLM-scale Hessian matrices, we overcome this barrier by proposing a novel QCS probabilistic variant, which relaxes the original formulation through re-parameterized densities. This innovative solver is efficiently learned using hierarchical policy gradients without requiring back-propagation, achieving provable convergence and certified asymptotic equivalence to the original objective. Our experiments demonstrate QCS's superior sequence-level data efficiency and reveal how strategically leveraging token-level influence elevates the performance ceiling of data-efficient IT. Furthermore, QCS's adaptability is showcased through its successes in regular IT and challenging targeted IT scenarios, particularly in the cases of free-form complex instruction-following and CoT reasoning. They underscore QCS's potential for a wide array of versatile post-training applications.

---

## 论文详细总结（自动生成）

好的，这是根据你提供的论文内容，按要求生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究动机**: 指令微调（Instruction Tuning, IT）是让大语言模型（LLM）遵循指令、提升性能的关键步骤。现有研究表明，通过筛选高质量的指令-响应数据子集，可以达到甚至超越使用全量数据的微调效果，从而实现数据高效（data-efficient）的指令微调。
*   **核心问题**: 当前主流的数据筛选方法主要关注**序列级别**（即选择哪些完整的指令-响应对），这种粗粒度的筛选方式平等对待响应中的所有令牌（token），忽视了关键令牌的独特贡献，同时也对令牌中的噪声和偏差敏感。尽管**令牌级别**的筛选理论上更优，但其计算开销巨大且在实际中难以独立实现内存节省（因为被修剪的令牌仍需作为上下文）。
*   **整体含义**: 本文旨在填补这一空白，提出一个统一的框架，将序列级别和令牌级别的筛选有机结合，以更低的计算成本实现更高效、性能更强的指令微调数据选择。

### 2. 论文提出的方法论

*   **核心思想 – 二次核集选择**:
    *   论文从双层核集选择（bi-level coreset selection）的视角出发，统一了序列选择和令牌选择的目标。二者的目标都是寻找一个数据子集，使得在该子集上训练的模型与在全量数据上训练的模型性能一致。
    *   基于此，作者提出了**二次核集选择（Quadratic Coreset Selection, QCS）**框架，其核心是同时优化两个选择变量：序列选择权重 **`w`** 和令牌选择权重 **`v`**。目标是让使用由 `w` 和 `v` 共同筛选出的数据子集训练的模型，其性能不低于单独使用序列或令牌筛选训练的模型。理论证明（定理1），QCS的解空间是序列级和令牌级核集选择解空间的子集，表明其能衍生出表达能力更强的模型。

*   **关键技术细节 – 概率重参数化求解器**:
    *   **挑战**: 传统的核集选择算法需要计算海森矩阵（Hessian matrix）的逆，其维度与LLM参数量相关，计算成本过高。
    *   **解决方案**: 提出一种概率变体来规避海森矩阵逆的计算。
        1.  **概率松弛**: 将离散的核集权重 `w` 和 `v` 重新参数化为连续的伯努利分布（Bernoulli distribution）的概率参数 `w` 和 `v`。数据的选择（`w`, `v`）被视为从这些分布中采样的随机变量。
        2.  **目标重构**: 原始的目标函数转化为最小化在这些分布下期望损失 `Φ(w, v)`。理论证明（定理2），当样本量足够大时，该期望目标与原目标渐近等价。
        3.  **层级策略梯度优化**: 将优化概率参数 `w` 和 `v` 的过程视为一个策略学习（Policy Learning）问题，训练一个采样器（sampler）。
            *   **梯度估计**: 使用层级策略梯度估计器（Hierarchical Policy Gradient Estimators, HPGE）来计算目标函数 `Φ(w, v)` 对 `w`和 `v`的梯度。该梯度估计是损失 `L` 乘以对数概率的梯度 `∇ ln p`，无需通过模型反向传播，大大简化了计算。
            *   **投影梯度下降**: 使用投影随机梯度下降（projected stochastic gradient decent）在概率约束（如稀疏性）下更新 `w` 和 `v`，并证明了该求解器的收敛性（命题3）。

*   **算法流程**:
    *   **内循环（模型训练）**: 使用根据当前 `w` 和 `v` 采样的数据子集 `w`, `v` 来微调 LLM（为高效采用LoRA）。为了训练的稳定性，令牌的权重会被平滑（elastic token coreset），即将二值 `{0, 1}` 替换为 `{ϵ, 1-ϵ}`。
    *   **外循环（核集更新）**: 固定模型参数，使用策略梯度更新采样器的概率参数 `w` 和 `v`。
    *   **迁移学习变体**: 为实现从源训练集到目标任务的迁移，方法训练两个基于LLaMA的小型LoRA模块作为分类头，一个从指令-响应对预测序列权重 `w_i`，另一个从上下文令牌预测令牌权重 `v_{i,j}`。在目标任务上，通过基于熵的测试时适应（test-time adaptation）快速调整选择概率。

### 3. 实验设计

*   **数据集 / 场景**:
    *   **训练数据**: 采用由FLAN V2、CoT、Dolly、Open Assistant组成的混合指令微调语料库（共270K条序列）。
    *   **评估任务与基准**:
        1.  **目标指令微调**: 在4个综合性基准上评估，包括 **MMLU**（多任务语言理解）、**TYDIQA**（多语言问答）、**BBH**（复杂推理）和 **GSM8K**（数学推理）。
        2.  **常规指令微调**: 采用自指令（self-instruct）范式构建训练数据，并在 **ARC**、**TruthfulQA**、**MMLU**（Open LLM Leaderboard v1）和 **AlpacaEval**（评估自由形式生成能力）上进行评估。
    *   **基础模型**: 使用 **LLaMA-2**（7B, 13B）、LLaMA-3（8B）和 **Pythia** 系列（14m-12b）模型。

*   **对比方法**:
    *   **FULL**: 使用全量训练数据。
    *   **RAND**: 随机选取数据子集。
    *   **LESS**: 当前最先进的目标指令微调数据选择方法（基于影响函数）。
    *   **IFD (Instruction-Following Difficulty)** 和 **DQ (Dataset Quantization)**: 用于常规指令微调对比的先进数据筛选方法。

### 4. 资源与算力

*   **算力说明**: 论文在脚注中提到，所有实验的训练和推理阶段均在**单个A-100x8 SXM服务器**上完成。未提供具体到每个实验的GPU卡数和使用时长。

### 5. 实验数量与充分性

*   **实验数量**: 实验设计相对全面，涵盖了多个维度：
    *   **主实验**: 在4个基准上使用多个LLaMA和Pythia家族模型进行测试。
    *   **消融与分析实验**: 对令牌级选择的弹性系数（`ϵ`）、选择比例（`α`）、令牌噪声鲁棒性、关键令牌识别能力等进行了深入分析。
    *   **场景扩展**: 不仅在标准的目标IT和常规IT上验证，还在附录中探索了在持续指令微调（continual IT）和数学推理任务上的应用。
    *   **对比实验**: 与多个先进基线（LESS, IFD, DQ）及简单基线（FULL, RAND）进行了充分对比。
*   **公平性**: 实验设置（如数据比例、微调参数）与对比基线协调一致，确保了对比的公平性。例如，与LESS的对比中，两者都选取5%的数据，并使用相同的LLM基底和LoRA配置。

### 6. 论文的主要结论与发现

*   QCS能在严格的数据预算下（如仅使用5%-15%的数据），实现优于或媲美现有数据筛选方法的性能，特别是在对长形式、推理密集型的任务（如BBH, GSM8K, AlpacaEval）上优势显著。
*   QCS的计算和内存成本远低于基于梯度特征的LESS方法。
*   令牌级别的筛选是关键：QCS能够有效识别和利用关键令牌，提升数据效率。对令牌的选择比例（`α`）和弹性系数（`ϵ`）的分析表明，适度的令牌筛选（`α=0.5`）和较小的弹性权重（`ϵ=0.1`）能达到最佳的性能与鲁棒性平衡。
*   QCS框架具有良好的适应性，可以成功迁移到目标IT和持续IT等不同场景。

### 7. 优点

*   **理论坚实**: 从双层优化的数学框架出发，将序列和令牌选择统一，理论证明了统一框架的优越性，并为概率求解器提供了收敛性和渐近等价性保证。
*   **方法创新**: 通过概率重参数化和层级策略梯度巧妙地规避了海森矩阵求逆的计算难题，实现了高效的求解。
*   **性能卓越**: 在多个基准、多种模型规模上，尤其是在需要长响应和复杂推理的任务上，显著优于现有方法，展现了极强的数据效率。
*   **分析深入**: 对令牌级选择的各种因素（权重、比例、鲁棒性、关键令牌）进行了细致的实验分析，为理解方法为何有效提供了有力的实证支持。
*   **泛化性好**: 不仅在标准场景下有效，还能灵活扩展和应用于目标微调和持续微调等多样化场景。

### 8. 不足与局限

*   **计算效率的实际收益有限**: 尽管QCS比LESS快，但令牌级选择并未带来实际的内存节省，因为被“修剪”的令牌仍需作为生成下一个令牌的上下文。
*   **超参数敏感性**: 方法性能对超参数（如数据预算、令牌比例 `α`、弹性权重 `ϵ`、策略学习率）较为敏感，可能需要针对不同任务进行调整。
*   **训练流程复杂**: 层级策略梯度优化、投影、选择器训练和重复采样等步骤增加了工程实现的复杂度和潜在的IO开销。
*   **迁移学习头的脆弱性**: 用于跨任务迁移的序列/令牌选择器在面临域偏移时可能不够鲁棒，其选择概率可能失准。
*   **理论假设**: 理论保证依赖于平滑性、有界性和大样本等假设，在实际的LLM训练（如混合精度、优化器动量）中可能不完全满足，导致理论边界的松弛。

（完）
