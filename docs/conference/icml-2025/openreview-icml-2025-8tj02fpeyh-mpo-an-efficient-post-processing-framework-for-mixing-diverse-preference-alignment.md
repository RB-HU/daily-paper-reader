---
title: "MPO: An Efficient Post-Processing Framework for Mixing Diverse Preference Alignment"
title_zh: MPO：一种高效的混合多样化偏好对齐后处理框架
authors: "Tianze Wang, Dongnan Gui, Yifan Hu, Shuhang Lin, Linjun Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=8Tj02fPeYH"
tags: ["query:fla"]
score: 7.0
evidence: MPO是一种混合多种偏好对齐策略的后处理框架，扩展RLHF处理多维反馈，适用于金融领域适配
tldr: 传统RLHF依赖单一奖励模型，难以捕捉多样的人类偏好。本文提出MPO，一个后处理框架，通过聚合单目标策略来混合多种偏好，替代多目标RLHF。实验表明，MPO能有效平衡不同偏好并降低训练成本，为金融领域大模型的对齐适配提供了灵活方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1691, \"height\": 835, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1344, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1356, \"height\": 553, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 853, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1369, \"height\": 602, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1765, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1763, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8tj02fpeyh/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1612, \"height\": 459, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 840, \"height\": 688, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 852, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1762, \"height\": 2098, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 911, \"height\": 956, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1615, \"height\": 643, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1611, \"height\": 707, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8tj02fpeyh/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1611, \"height\": 709, \"label\": \"Table\"}]"
motivation: 单一奖励模型无法捕捉人类偏好的多样性，多目标RLHF成本高。
method: 提出MPO后处理框架，聚合单目标RLHF策略以实现偏好混合。
result: 在多样偏好下MPO比多目标RLHF更高效且稳定。
conclusion: MPO为金融大模型的多样化需求对齐提供了经济高效的方案。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) has shown promise in aligning large language models (LLMs). Yet its reliance on a singular reward model often overlooks the diversity of human preferences. Recent approaches address this limitation by leveraging multi-dimensional feedback to fine-tune corresponding reward models and train LLMs using reinforcement learning. However, the process is costly and unstable, especially given the competing and heterogeneous nature of human preferences. In this paper, we propose Mixing Preference Optimization (MPO), a post-processing framework for aggregating single-objective policies as an alternative to both multi-objective RLHF (MORLHF) and MaxMin-RLHF. MPO avoids alignment from scratch. Instead, it log-linearly combines existing policies into a unified one with the weight of each policy computed via a batch stochastic mirror descent. Empirical results demonstrate that MPO achieves balanced performance across diverse preferences, outperforming or matching existing models with significantly reduced computational costs.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

本论文《MPO: 一种高效的混合多样化偏好对齐后处理框架》旨在解决大语言模型对齐中的一个核心挑战：**如何高效、稳定地使模型对齐多样化且可能相互冲突的人类偏好**。

-   **背景与动机**：传统的基于人类反馈的强化学习 (RLHF) 通常是训练一个单一的奖励模型来代表所有人类偏好，这隐含地假设了偏好的同质性，容易忽略少数群体的需求。为应对此问题，业界提出了**多目标RLHF (MORLHF)** 和 **MaxMin-RLHF**，通过分别训练多个奖励模型并进行聚合来捕捉偏好多样性。然而，这些方法存在显著缺陷：
    - **计算成本高昂**：需要训练多个奖励模型并进行多次强化学习 (PPO) 训练，过程复杂且资源消耗大。
    - **训练不稳定**：在平衡多个竞争性目标时，强化学习过程容易不稳定。
    - **奖励估计偏差**：依赖的奖励模型本身可能带有错误估计（奖励黑客），导致非预期的模型行为。

-   **核心思想**：本文提出了一种全新的、轻量级的后处理框架——**混合偏好优化 (MPO)**，作为一种替代方案。其核心见解是**奖励聚合与策略聚合之间存在内在的闭式关系**。MPO 完全绕过了从零开始进行多目标强化学习的过程，转而直接对已经在单一偏好上对齐好的多个“专家”策略进行逻辑线性组合，从而得到一个能够平衡多种偏好的统一策略。

### 2. 方法论：核心思想与技术细节

MPO 的核心是后处理预训练的单目标策略，通过优化非强化学习的方式找到最优的策略混合权重。

-   **核心原理与推导**：
    - **奖励函数归一化**：为平衡不同奖励函数，MPO 采用了一种基于参考策略 πref 的归一化算子 Pπref，确保不同奖励信号在统一尺度上可比。
    - **目标函数转换**：论文证明，MaxMin-RLHF 的最大-最小化问题等价于一个最小-最大优化问题，而该问题的最优解可以通过对单目标策略进行逻辑线性组合获得。
    - **核心定理 (Theorem 3.4)**：对于 MaxMin-RLHF 问题，其最优策略 π*(y|x) 可以表示为多个单目标策略 πk(y|x) 的乘积形式：
        ```
        π∗(y|x) ∝ ∏_{k=1}^K (πk(y|x))^{λ∗_k}
        ```
        其中，最优权重 λ∗ 通过最小化一个对数配分函数的期望得到。这意味着，只要找到最优的混合权重 λ∗，就能直接组合现有模型，无需重新进行 RL 训练。

-   **权重优化：批量随机镜像下降 (BSMD)**：
    - 为求解最优权重 λ∗，论文提出使用**批量随机镜像下降 (Algorithm 2)**。该方法通过在迭代过程中采样提示和响应，计算梯度并更新 λ，自然地满足单纯形约束（权重和为1且非负），避免了传统投影梯度下降的高计算成本。
    - 论文从理论上证明了该优化算法的收敛性 (Theorem 3.7) 以及最终混合策略与真实最优策略之间的KL散度误差界 (Theorem 3.8)。

-   **推广至 MORLHF**：当偏好权重向量 λ 是人为预设而非需要学习时（即 MORLHF 场景），MPO 可以简化，直接根据给定权重组合单目标策略 (Lemma 3.9)，提供了一种高效、可解释的策略定制方法。

### 3. 实验设计

论文设计了两个主要实验场景来验证 MPO 的有效性：

-   **实验一：探索性实验（情感与简洁性对齐）**
    - **数据集/场景**：使用 IMDB 电影评论数据集，任务是在生成评论时平衡“正面情感”和“简洁性”两个目标。
    - **基座模型**：LLaMA 3.2-3B。
    - **Benchmark 与对比方法**：
        - 单一奖励 RLHF（在合并数据集 D1∪D2 上训练）。
        - 预定义不同权重的策略混合，以验证 MPO 学到的最优权重确实实现了最佳平衡。

-   **实验二：扩展性实验（有用助手任务）**
    - **数据集/场景**：使用 HH-RLHF 数据集，任务是同时优化“有用性”、“无害性”和“幽默感”三个目标。
    - **基座模型**：Qwen 2.5-7B。
    - **Benchmark 与对比方法**：
        - 三个单一目标策略 (`πHelpful`, `πHarmless`, `πHumorous`)。
        - **Reward Soups**：以均匀权重线性组合单目标模型。
        - **MaxMin-RLHF**：直接实现的多目标强化学习方法。
        - **MORLHF** 和 **Weighted RS**（加权的 Reward Soups，使用 MPO 学到的权重）。
    - **评估指标**：使用 GPT-3.5/4 作为代理，评估生成回复在三个维度上相对于参考模型的胜率（Win Rate），以及 Z 归一化后的奖励值。

### 4. 资源与算力

论文在计算成本方面提供了清晰的对比数据：

-   **传统多目标方法成本**：使用 MORLHF 或 MaxMin-RLHF 训练一个策略大约需要 **10 个 A100 GPU 小时**。
-   **MPO 成本**：MPO 完全消除了强化学习训练，仅需通过 BSMD 算法求解最优权重，该过程大约需要 **2.5 个 A100 GPU 小时**。
-   **成本对比结论**：MPO 将训练成本降低了约 **4 倍**，在计算效率上具有显著优势。

> **注意**：文末虽未明确说明具体的 GPU 卡数，但给出了总 GPU 小时数（10 与 2.5 小时），足以进行相对效率的评估。

### 5. 实验数量与充分性

-   **实验组数**：论文涵盖了多个层面的实验。
    - **两个不同任务**：情感-简洁性双目标任务，以及有用助手三目标任务。
    - **两个不同的 KL 惩罚系数 (β)**：β = 0.1（低约束）和 β = 0.5（高约束），以考察模型在不同自由度下的表现。
    - **多个对比方法**：在每个任务下，与单一策略、Reward Soup、MaxMin-RLHF 等多种基准进行了详尽对比。
    - **消融实验**：在有用助手任务上进行了消融研究，移除单个单目标模型，量化其对整体混合策略性能的影响。
    - **收敛性分析**：通过图示展示了 BSMD 算法优化权重 λ 的收敛过程。
-   **实验充分性评估**：实验设计**相当充分、客观且公平**。它不仅在多个任务、多个超参数设置下与当前最先进的方法（MaxMin-RLHF）进行了正面比较，还通过消融实验和收敛性分析增强了结论的可信度。使用 GPT-4/3.5 作为评价者增强了结果的可复现性（尽管承认了提示设计的敏感性）。

### 6. 主要结论与发现

-   **性能优越或匹配**：MPO 在实现多目标平衡方面，性能**超越了或至少匹配**了成本高昂的 MaxMin-RLHF。尤其在有用助手任务中，MPO 在低和高 KL 约束下均取得了最高的“最低胜率”，完美契合了 Max-Min 目标。
-   **计算效率高**：MPO 作为一个后处理框架，**显著降低了计算开销**（约为传统方法的 1/4），无需进行多目标强化学习。
-   **有效平衡**：与只擅长单一目标的策略相比，MPO 能有效地在所有目标上取得平衡，不会因过度优化某一目标而严重损害其他目标。
-   **权重可解释性**：学习到的权重 λ 揭示了不同单目标策略对最终混合策略的贡献，例如，在 β=0.1 时，幽默的权重几乎为 0，因为无害模型已能产生足够幽默的回复。

### 7. 优点

-   **方法新颖且高效**：MPO 的核心思想——通过后处理策略聚合替代多目标 RL 训练——非常巧妙，极大地简化了多偏好对齐的流程，并显著降低了成本。
-   **理论坚实**：论文为 MPO 提供了清晰的推导和理论证明，包括与 MinMax、MORLHF 的内在联系，以及 BSMD 算法的收敛性与误差界分析。
-   **即插即用**：MPO 可以与现有的 RLHF 或 DPO 流程无缝集成，直接利用已训练好的单目标模型，实用性极强。
-   **实验全面**：对比了多种基准方法，包含消融研究，并考察了关键超参数的影响，论证具有较强的说服力。

### 8. 不足与局限

-   **内存开销增加**：由于需要同时加载和操作多个单目标策略模型，MPO 在部署时的**内存需求更高**，尤其是在处理更大规模的模型时。
-   **偏好维度动态扩展性**：当需要加入新的偏好目标时，必须**重新优化混合权重 λ**，这增加了在动态变化的偏好环境中的复杂性。
-   **评估偏差风险**：实验主要依赖 ChatGPT (GPT-3.5/4) 进行胜率评估，论文自身也承认，这种方法对**提示设计非常敏感**，可能引入评估偏差。
-   **偏好可观测性假设**：当前实验假设偏好标注者可被明确划分为特定类别（正面情感、简洁等）。在真实场景中，用户偏好可能是隐式且分布未知的，如何将 MPO 扩展到未观测到的偏好分布是未来的研究方向。

（完）
