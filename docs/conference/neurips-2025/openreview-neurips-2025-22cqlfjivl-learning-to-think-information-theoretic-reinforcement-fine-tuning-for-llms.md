---
title: "Learning to Think: Information-Theoretic Reinforcement Fine-Tuning for LLMs"
title_zh: 学会思考：基于信息论的LLM强化微调
authors: "Jingyao Wang, Wenwen Qiang, Zeen Song, Changwen Zheng, Hui Xiong"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=22CqLfjiVl"
tags: ["query:fla"]
score: 6.0
evidence: 提出L2T，一种基于信息论的强化微调框架，可提升LLM推理效率，适用于智能体后训练。
tldr: 本文针对LLM推理中有效性与效率的权衡问题，提出基于信息论的学习思考（L2T）强化微调框架。通过将查询-响应视为分层会话，定义通用的稠密过程奖励，量化参数的信息增益，无需额外标注。实验表明L2T在保持或提升推理性能的同时大幅减少令牌消耗，为智能体高效推理后训练提供了新方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1437, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1441, \"height\": 299, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 535, \"height\": 320, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1449, \"height\": 332, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 896, \"height\": 312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1449, \"height\": 979, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1456, \"height\": 913, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 741, \"height\": 516, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1431, \"height\": 306, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1437, \"height\": 843, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-22cqlfjivl/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1385, \"height\": 2161, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-22cqlfjivl/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 465, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-22cqlfjivl/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1454, \"height\": 628, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-22cqlfjivl/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 672, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-22cqlfjivl/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 714, \"height\": 229, \"label\": \"Table\"}]"
motivation: 现有LLM推理方法忽略有效性与效率的权衡，常产生不必要的长链，浪费令牌。
method: 提出L2T，将交互视为多回合会话，用信息增益作为稠密过程奖励进行强化微调。
result: 在多个推理任务上，L2T以更少令牌达到或超越基准性能。
conclusion: L2T实现了高效推理，为资源受限场景下的LLM后训练提供了有效途径。
---

## Abstract
Large language models (LLMs) excel at complex tasks thanks to advances in their reasoning abilities. However, existing methods overlook the trade-off between reasoning effectiveness and efficiency, often encouraging unnecessarily long reasoning chains and wasting tokens. To address this, we propose Learning to Think (L2T), an information-theoretic reinforcement fine-tuning framework for LLMs to make the models achieve optimal reasoning with fewer tokens. Specifically, L2T treats each query-response interaction as a hierarchical session of multiple episodes and proposes a universal dense process reward, i.e., quantifies the episode-wise information gain in parameters, requiring no extra annotations or task-specific evaluators. We propose a method to quickly estimate this reward based on PAC-Bayes bounds and the Fisher information matrix. Theoretical analyses show that it significantly reduces computational complexity with high estimation accuracy. By immediately rewarding each episode's contribution and penalizing excessive updates, L2T optimizes the model via reinforcement learning to maximize the use of each episode and achieve effective updates. Empirical results on various reasoning benchmarks and base models demonstrate the advantage of L2T across different tasks, boosting both reasoning effectiveness and efficiency.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将基于提供的论文内容，以中文和Markdown格式，对这篇论文进行结构化、深入、客观的总结。

# 《学会思考：基于信息论的LLM强化微调》论文总结

## 1. 论文的核心问题与整体含义

*   **研究背景与现状**：当前的大语言模型（LLM）在复杂推理任务中表现卓越，这得益于思维链（CoT）和基于结果奖励的强化学习（RL）微调等方法。这些方法通过扩展推理链来探索解空间，从而提升最终答案的准确性。
*   **核心问题与动机**：然而，现有方法**忽略了推理有效性（Effectiveness）和效率（Efficiency）之间的权衡**。
    *   **效率低下**：基于最终结果（Outcome Reward）的反馈机制是延迟的，无法中间步骤的优劣进行评估。这导致模型倾向于生成不必要的长推理链，即使微小的准确率提升也可能被当作正向信号，从而**造成严重的计算和令牌（Token）浪费**。
    *   **泛化能力差**：实验发现（见Figure 1），冗长的推理链不仅浪费资源，有时甚至会**降低推理有效性**（尤其是在简单问题上）。不同难度的任务对推理链长度有着不同的最优需求，没有一个普适的固定长度。
    *   **整体含义**：因此，本文旨在设计一种通用的、稠密的中间过程奖励（Dense Process Reward），用于评估每一步推理的贡献，从而指导LLM用最少的令牌预算实现最佳的推理效果，即**同时提升推理的有效性与效率**。

## 2. 论文提出的方法论

*   **核心思想**：提出名为 **Learning to Think (L2T)** 的框架，其核心是设计一个**基于信息论的、通用的、稠密的过程奖励函数**。该奖励不依赖外部标注或特定任务评估器，而是通过模型内部信号——即模型参数的**信息增益（Information Gain）**——来量化每个推理步骤的进展。

*   **关键技术细节与流程**：
    1.  **问题重构 (Problem Reformulation - Section 4.1)**：将每个查询-响应对视为一个由多个回合（Episode）组成的层次化会话。通过在推理链中插入`<think>...</think>`标记，将连贯的推理过程分解为K个回合。这样，整个推理过程被建模为一个长度为K的马尔可夫决策过程（MDP），可以在每个回合结束后立即分配过程奖励。
    2.  **信息论过程奖励设计 (Reward Design - Section 4.2 & Definition 4.1)**：提出的奖励函数 `r_prg_k` 由两部分构成，旨在确保有效性和效率：
        *   **拟合信息增益 (Fitting Information Gain)**：衡量在当前回合后，模型对正确答案的预测不确定性减少了多少。实践中，用模型预测正确答案概率的增量来近似，即 `Jr(π_θ(· | s_k, z_k)) - Jr(π_θ(· | s_k))`。该项鼓励模型捕获对正确性至关重要的信息。
        *   **参数压缩惩罚 (Parameter Compression Penalty)**：惩罚模型在该回合中吸收的冗余信息，防止过度更新。它被定义为模型参数 `θ` 与历史上下文 `s_k` 之间互信息增量 `I(θ_k; s_k) - I(θ_{k-1}; s_{k-1})`。互信息越大，代表参数中存储了越多的任务特异性特征，有过拟合和低效的风险。
    3.  **奖励的快速估计 (Theorem 4.2)**：直接计算大规模参数下的互信息是不可行的。理论分析提出了一种高效近似方法：
        *   **低秩近似**：利用奇异值分解（SVD）将模型参数 `θ` 投影到低维空间，得到代理参数 `θ̃`。
        *   **高斯假设**：假设 `θ̃` 服从高斯分布。
        *   **费雪信息矩阵**：利用PAC-Bayes界限和费雪信息矩阵（Fisher Information Matrix）来近似计算参数增量的二次型，从而简化计算 `I(θ̃_k; s_k) - I(θ̃_{k-1}; s_{k-1})`。理论证明，该方法能**显著降低计算复杂度（Theorem D.2）且逼近误差有界（Theorem D.3）**。
    4.  **强化学习优化 (Optimization - Section 4.3)**：在实践实现中，L2T结合了**群体相对策略优化（GRPO）**。每个回合的奖励 `R_i,k` 由最终结果奖励和过程奖励加权组合而成。该回合奖励通过“对数概率惊喜度”作为权重，分配到每个令牌上，最后使用GRPO的剪裁策略梯度目标进行策略优化。

## 3. 实验设计

*   **数据集/场景 (Benchmarks)**：
    *   **数学推理**：**AIME24-25**, **AMC**, **MATH500**, **MinervaMATH**, **Omni-MATH**。这些基准覆盖了从简单算术到奥林匹克级别竞赛的多个难度。
    *   **代码生成**：**HumanEval**。

*   **基座模型 (Base Models)**：
    *   **DeepScaleR-1.5B-Preview**
    *   **DeepSeek-R1-Distill-Qwen-1.5B**
    *   **DeepSeek-R1-Distill-Qwen-7B**
    *   **Qwen2-7B-Instruct** (用于代码生成任务)

*   **对比方法 (Baselines)**：
    *   **基于结果奖励的RL方法**：GRPO（主要对比对象）。
    *   **关注测试时计算的方法**：长度惩罚（Length Penalty），基于过程奖励模型的方法如 **ReST-MCTS** 和 **MRT**。

## 4. 资源与算力

*   论文明确提到，所有实验均运行在 **A100 GPU集群** 上。
*   **未明确说明**的是：具体使用了**多少块GPU**以及详细的**训练总时长**。文中仅给出了训练配置（如批大小、学习率等），但未报告最终训练的时间或总计算量（GPU小时）。

## 5. 实验数量与充分性

*   **实验组数**：实验设计较为全面，可以视为多组实验。
    1.  **主要性能对比实验**：在不同基座模型（1.5B, 7B等）和多个数学推理基准上，对比了L2T与多种基线方法的 **Pass@1准确率**（Table 1, Table 2）。
    2.  **效率分析实验**：对比了不同方法在各种基准上**令牌预算与准确率**的关系（Figure 2, Figure 3, Figure 7, Figure 8），证明了L2T的令牌效率。
    3.  **跨任务泛化实验**：除了数学任务，还在**代码生成**（HumanEval）任务上进行了验证（Figure 8）。
    4.  **消融实验**：设计了三种变体（替换信息增益、移除压缩惩罚、替换低秩近似），以验证L2T各组件的有效性（Figure 4, Figure 9）。
    5.  **参数敏感性分析**：对超参数 `α` 和 `β` 进行了网格搜索，并分析了其影响（Figure 5）。
    6.  **补充实验**：包括将L2T与MCTS搜索结合、将L2T用作仅推理时的重排序信号等（Table 3, Table 4）。
*   **充分性与公平性评价**：实验设计**充分且公平**。从多个维度（不同模型、不同难度任务、不同评估指标、消融研究）验证了方法的有效性。对比的基线方法具有代表性，遵循的标准测试协议（如Pass@1）是公平的。

## 6. 论文的主要结论与发现

*   **L2T在有效性和效率上均实现显著提升**：相比于仅使用结果奖励的GRPO，L2T在多个推理基准上平均**准确率提升约3.7%**，同时**令牌效率提升近一倍**。相较于其他过程奖励方法，准确率提升约2%，效率提升约1.3倍。
*   **L2T能更智能地使用测试时计算**：在相同的令牌预算下，L2T能达到更高的准确率；达到相同性能时，L2T消耗的令牌远少于基线和传统方法（约为GRPO的50%）。
*   **模型学会了自适应推理深度**：L2T使模型能够根据问题难度动态分配计算资源，在简单问题上避免“过度思考”，在复杂问题上进行充分推理，从而在不同基准上实现稳定的性能提升。
*   **提出的信息论过程奖励是关键**：消融实验证明，拟合信息增益和压缩惩罚两个组件缺一不可，共同保证了方法的有效性。

## 7. 优点

*   **创新性强，视角新颖**：从信息论的角度出发，将LLM的推理过程量化为参数的信息增益，定义了一个**通用、稠密的过程奖励**，为解决推理效率问题提供了新的理论框架。
*   **通用性高**：该方法定义的奖励函数不依赖于任务特定的标签、评估模型或人工标注，是一种**纯基于模型内部信号**的通用方法，理论上可无缝应用于多种推理任务。
*   **理论与实证结合紧密**：不仅提出了概念，还通过PAC-Bayes和费雪信息矩阵给出了**可计算、有理论保障**的近似算法，并通过大量实验验证了其卓越的性能和效率。
*   **实验扎实、全面**：在多种主流基准、不同规模的模型和跨任务场景下进行了详尽的实验和消融研究，论证充分，结果具有说服力。

## 8. 不足与局限

*   **模型规模覆盖不全**：实验主要基于开源模型（1.5B-7B），如作者所述，由于资源和开放性问题，未在更大规模的模型（如72B及以上）上进行验证。L2T在超大规模模型上的效果和额外计算开销仍有待观察。
*   **计算代价未明确比较**：虽然证明了令牌效率的提升，但L2T在训练过程中每一步都引入了额外的计算（如费雪矩阵的近似计算），这增加了训练时的计算负担。论文未将此部分开销与基线方法进行详细的对比分析。
*   **对提示模板（Prompt）的依赖**：L2T的核心依赖于通过`<think>`标记将推理链分割为回合，这需要一个良好的初始提示模板设计。不同的模板可能会影响分割的粒度与质量，从而影响奖励计算的准确性和最终的模型表现。
*   **理论假设的普适性**：低秩高斯假设是快速估计压缩惩罚的关键，尽管论文论证了其合理性，但在某些参数更新模式剧烈或模型结构特殊的情况下，该假设的精确度及其对性能的潜在影响需要进一步探讨。

（完）
