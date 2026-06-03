---
title: Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models
title_zh: 面向大语言模型监督微调的数据混合优化
authors: "Yuan Li, Zhengzhong Liu, Eric P. Xing"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=19kqoNoc2N"
tags: ["query:fla"]
score: 8.0
evidence: 优化监督微调数据混合，利用缩放定律最小化验证损失。
tldr: 将大模型监督微调的数据混合问题建模为优化问题，通过参数化有效数据量和缩放定律推导最优权重。实验证明算法能提升各领域整体性能，为通用模型开发提供了高效数据选择方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-19kqonoc2n/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 847, \"height\": 381, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-19kqonoc2n/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 751, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-19kqonoc2n/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1668, \"height\": 821, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-19kqonoc2n/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 840, \"height\": 357, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 844, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 632, \"height\": 606, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 640, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1733, \"height\": 564, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 746, \"height\": 167, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1339, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 769, \"height\": 615, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1078, \"height\": 634, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1265, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 704, \"height\": 943, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-19kqonoc2n/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 753, \"height\": 914, \"label\": \"Table\"}]"
motivation: 监督微调中如何优化数据混合比例以最大化模型性能尚不明确。
method: 提出将数据混合视为优化问题，建模有效数据转移并利用微调缩放定律拟合参数，得到最优混合权重。
result: 算法在所有领域均取得优异的整体和单项性能，验证了其有效性。
conclusion: 该数据混合优化方法为LLM微调提供了一种系统化、可扩展的数据选择策略。
---

## Abstract
Optimizing data mixtures for supervised fine-tuning (SFT) of large language models (LLMs) is critical for developing general-purpose models, yet this area remains underexplored. In this paper, we frame data mixing as an optimization problem and introduce a novel method designed to minimize validation loss. Our approach parametrizes the loss by modeling effective data transferred and leveraging scaling laws for fine-tuning. By experimenting with various small-scale data mixtures, we fit these parameters and derive the optimal weights. We provide both mathematical proofs and empirical results demonstrating that our algorithm achieves excellent overall and individual performance across all domains. Through controlled experiments, we show that models trained with our optimized weights perform on par with those using optimal weights determined via grid search, with per-domain loss only 0.66\% higher than the best domain loss from grid search on average. Additionally, we show that reweighting popular SFT datasets using our method improves both validation loss and downstream performance. Finally, we discuss how our method can generalize to guide data selection for domain-specific models and provide insights into SFT.

---

## 论文详细总结（自动生成）

### 一、论文的核心问题与研究动机
- **核心问题**：在监督微调（SFT）大语言模型（LLM）时，如何**优化训练数据中不同领域（domain）的混合比例（数据混合）**，从而在给定数据预算下最小化验证损失，训练出性能均衡的通用模型。
- **研究动机**：
  - 数据混合对模型性能影响显著，但在预训练阶段研究较多，SFT阶段却**欠探索**。
  - 预训练的数据混合方法（如DoReMi、DoGE、RegMix等）存在局限：小模型优化的权重可能不适用于大模型；对领域间的相互作用和缩放效应的建模不足，导致权重失衡。
  - SFT不仅是风格对齐，还能注入知识、增强能力，因此亟需一种**系统化的SFT数据混合优化方法**。

### 二、方法论：核心思想与关键技术细节
- **整体框架**：将数据混合建模为一个**优化问题**，目标是最小化总验证损失（各领域损失之和），约束条件为各领域权重在0到1之间且总和为1。
- **参数化验证损失**：核心在于将验证损失表示为领域权重和有效数据量的函数，从而避免对大型模型的昂贵重训练。
  - **有效数据转移（Effective Data from Transfer）**：借鉴迁移学习中的有效数据概念，对领域 $i$，其总有效数据量 $|D_i^E| = N_i + k_i \cdot (N - N_i)^{\alpha_i}$，其中 $N_i$ 是该领域原生数据量，后一项代表从其他领域转移过来的等效数据量。$k_i$ 和 $\alpha_i$ 是领域特定参数。
  - **微调缩放定律（Scaling Law for Fine-tuning）**：利用损失随数据量呈幂律关系 $L(D) \approx C \cdot |D|^{-\beta} + E$，将验证损失表示为有效数据量的函数，即 $\tilde{L}_i \approx C_i \big( N_i + k_i (N - N_i)^{\alpha_i} \big)^{-\beta_i} + E_i$。
  - **参数拟合**：通过**小规模扰动实验**拟合五个参数（$C_i, k_i, \alpha_i, \beta_i, E_i$）。对每个领域，保持其他领域数据量不变，将该领域数据量分别调整为原始量的 $1/3, 1/2, 1, 2, 3$ 倍，训练小型代理模型并记录对应损失，然后用 Huber 损失和 Trust Region 方法求解参数，约束条件确保有效转移数据量不超过原始数据量。
  - **权重优化**：得到各领域参数后，针对任意数据预算 $N_0$，通过最小化 $\sum_{i=1}^K \big[ C_i ( w_i N_0 + k_i (N_0 - w_i N_0)^{\alpha_i} )^{-\beta_i} + E_i \big]$ 求解最优权重 $w$。该目标函数被证明为**凸函数**，使用**序列最小二乘规划（SLSQP）** 进行求解。
- **算法流程（Algorithm 1）**：
  1. 初始化：从各领域采样少量数据，训练初始模型，记录验证损失。
  2. 对每个领域进行4次扰动实验，训练对应模型，记录验证损失。
  3. 利用所有损失值，通过 Trust Region 拟合每个领域的参数。
  4. 设定数据预算 $N_0$，通过 SLSQP 求解最优权重 $w^*$。
- **“不留一个领域落后”（No Domains Left Behind）**：理论证明该优化问题的最优解会自然平衡各领域的边际收益，避免某些领域被严重忽视，因为幂律关系保证了边际收益递减，使得权重分配趋于均衡。

### 三、实验设计
- **数据集与领域划分**：
  - **场景一（混合三个领域）**：通用指令遵循（IF，来自Infinity-Instruct）、数学（来自OpenMathInstruct-2）、代码（来自OpenCoder）。验证集来自对应源领域的预留数据。
  - **场景二（重加权SFT集合）**：Tulu3（按技能划分：general, knowledge recall, math, code, precise IF, safety）和Orca（按来源划分：T0, CoT, FLAN, Niv）。验证集为各领域的预留数据。
  - **场景三（领域专用模型）**：医疗问答，混合通用指令数据（Alpaca-GPT4）和医疗数据（PubMedQA），验证和测试均使用PubMedQA的验证/测试集。
- **评价指标**：
  - **主指标**：词元级困惑度（PPL），在预留验证集上计算。
  - **下游任务**：AGIEval, IFEval, MMLU, GSM8K, HumanEval, Safety（ToxiGen+TruthfulQA），HellaSwag 等。
- **基线方法**：
  - **网格搜索（Grid Search）**：在 {0.125, 0.25, …, 0.75}^3 共21种组合中寻找最优混合。
  - **原始权重（Original）**：保持原始数据集的token比例。
  - **等Token（Equal T）**：各领域token数量相等。
  - **等实例数（Equal I）**：各领域样本数量相等。
- **模型型号**：Qwen2.5（0.5B, 1.5B, 32B）、Llama（3.2-3B, 3.1-8B, 3.1-70B）。

### 四、资源与算力
- **训练硬件**：所有实验均在 **NVIDIA H100 GPU** 上进行。
- **超参数细节**：采用余弦学习率调度，批次大小256，序列长度4096 tokens。对扰动实验，训练3个epoch并选最低验证损失模型；对Tulu3和Orca实验，最大训练步数为6000。不同模型的学习率见表6（范围在1e-5到2e-6）。
- **总计算量**：论文未给出具体GPU小时数或总能耗，但涉及大量扰动实验（每个领域多次训练）和最终权重训练，总体算力需求较大，但相比于枚举所有混合比例（grid search）已大幅降低成本。

### 五、实验数量与充分性
- **实验规模**：
  - 场景一：3个数据预算（5M, 20M, 200M tokens）×4种模型 ×21种网格搜索混合 + 本方法混合，合计衍生大量训练。
  - 场景二：2个SFT集合（Tulu3, Orca）×3种模型 ×4种权重策略（含本方法）训练，并进一步做了多种下游评测。
  - 场景三：1个领域专用医疗案例，对比本方法混合与纯医疗数据。
  - 额外还包括消融探索（参数分析、不同预算的权重变化等）。
- **充分性与公平性**：
  - 对比基线丰富，包括穷举网格搜索（视为理论上界）和多种启发式策略。
  - 跨模型家族和规模验证（0.5B到70B），提供了对方法普适性的证据。
  - 下游任务评测覆盖通用能力、知识、数学、代码、安全等多个维度。
  - 公平性：网格搜索在相同数据预算下进行，本方法权重通过优化求解，比较时均在其他条件保持一致。
  - 潜在不足：仅在有限几个SFT集合上测试，且未与所有已有的数据混合方法（如SMART）进行对比，但这是因为SMART是唯一直接比较对象，而本文强调其方法依赖模型/尺度不变假设，故未直接基准比较。

### 六、主要结论与发现
- 本文提出的 **Data Mixing Optimization** 方法能够有效优化SFT数据混合，且所得权重在验证损失上接近网格搜索最优值（平均仅高出0.66%），但计算成本极低。
- 通过参数估计发现，**最优权重依赖于数据规模（scale-dependent）**，并且权重随数据量增大趋于稳定，不会出现极端失衡。
- 方法能保证**所有领域均获得合理权重**，避免个别领域性能严重下滑（No Domains Left Behind）。
- 对Tulu3集合的重加权在验证损失和大多数下游任务上优于原始权重及等比例策略，证明了方法的实用价值。
- 当领域被明确任务定义（如数学、代码）时，方法可以指导领域专用模型的数据选择（如医学问答中引入通用指令数据有利于提升医学任务性能）。
- 同一模型类（如Qwen系列或Llama系列）在不同尺寸上表现出相似的损失-权重曲面，暗示预训练数据分布的影响，未来可能利用小模型推导大模型权重。

### 七、优点
- **理论扎实**：创新性地将有效数据转移与微调缩放定律结合，建立损失参数化模型，并证明目标函数凸性，保证求解的唯一性和全局最优。
- **计算高效**：仅通过少量、小规模的扰动实验即可拟合参数，避免对每种候选混合进行完整训练，大幅降低实验成本。
- **自适应与通用性**：权重依赖模型和数据规模，克服了预训练数据混合方法中“最优权重尺度/模型不变”的假设，适合SFT阶段。
- **实验严谨**：与穷举网格搜索进行对比，在多尺寸、多家族模型上验证，并涵盖多个下游任务，说服力强。
- **实践价值**：可直接应用于已有SFT集合的重新加权，甚至扩展至领域专用模型训练，提供可操作的指导。

### 八、不足与局限
- **领域定义的依赖性**：在Orca集合（按数据源定义领域）的实验中，验证损失的改善未能完全转化为下游任务的提升，因为验证集与测试任务分布存在差异。方法性能依赖于“验证集与真实应用同分布”这一假设。
- **数据重复采样问题**：当优化结果对某领域分配高权重但该领域原始数据不足时，需重复采样，可能导致过拟合（如Tulu3实验中IFEval分数下降）。未被充分讨论的缓解策略，如合成数据生成，仍有待探索。
- **对比方法有限**：未与现有SFT专用的数据混合方法（如SMART）进行直接比较，尽管论文讨论了差异，但缺乏实证对比可能削弱结论的优越性。
- **跨尺度迁移性验证不足**：虽然观察到同模型家族内表面相似，但并未实验验证用小模型权重直接放大模型的可行性，这仍是未来工作。
- **资源信息不透明**：未报告 GPU 小时数或总能耗，难以评估实际落地成本。
- **扰动实验仍消耗资源**：虽然避免了网格搜索，但仍需多次训练小模型（每个领域4次扰动+初始），当领域数量增多时，成本线性增长。

（完）
