---
title: Training a Generally Curious Agent
title_zh: 训练通用好奇智能体
authors: "Fahim Tajwar, Yiding Jiang, Abitha Thankaraj, Sumaita Sadia Rahman, J Zico Kolter, Jeff Schneider, Russ Salakhutdinov"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=UeB3Hdrhda"
tags: ["query:fla"]
score: 8.0
evidence: 通过合成交互数据微调LLM使其成为通用好奇智能体
tldr: 现有语言模型在需要战略信息收集的场景中探索能力不足。本文提出Paprika微调方法，通过在不同任务上训练合成交互数据，使模型能够根据环境反馈探索和调整行为。实验表明，经Paprika微调的模型可以将学到的决策能力迁移到全新任务，无需额外梯度更新。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1588, \"height\": 642, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1767, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1770, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1755, \"height\": 525, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1759, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1766, \"height\": 524, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1767, \"height\": 1088, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1767, \"height\": 529, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1769, \"height\": 529, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1761, \"height\": 1084, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1765, \"height\": 565, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1767, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1769, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1326, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1324, \"height\": 444, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1327, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1762, \"height\": 842, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1749, \"height\": 509, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ueb3hdrhda/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1748, \"height\": 523, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1769, \"height\": 556, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 855, \"height\": 553, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1625, \"height\": 195, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1814, \"height\": 2137, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1252, \"height\": 113, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 941, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 420, \"height\": 290, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 332, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 330, \"height\": 246, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1679, \"height\": 1471, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1700, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1736, \"height\": 95, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1427, \"height\": 599, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1765, \"height\": 1058, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1410, \"height\": 1850, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1759, \"height\": 2140, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ueb3hdrhda/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1237, \"height\": 2093, \"label\": \"Table\"}]"
motivation: 增强语言模型的通用探索和决策能力。
method: 提出Paprika微调方法，使用合成交互数据训练模型在不同任务中探索。
result: 模型可将其决策能力迁移至未见任务，无需额外训练。
conclusion: Paprika为训练通用决策智能体提供了有效范式。
---

## Abstract
Efficient exploration is essential for intelligent systems interacting with their environment, but existing language models often fall short in scenarios that require strategic information gathering. In this paper, we present **Paprika**, a fine-tuning approach that enables language models to develop general decision-making capabilities that are not confined to particular environments. By training on synthetic interaction data from different tasks that require diverse strategies, Paprika teaches models to explore and adapt their behavior on a new task based on environment feedback in-context without more gradient updates. Experimental results show that models fine-tuned with Paprika can effectively transfer their learned decision-making capabilities to entirely unseen tasks without additional training. Unlike traditional training, our approach's primary bottleneck lies in sampling useful interaction data instead of model updates. To improve sample efficiency, we propose a curriculum learning strategy that prioritizes sampling trajectories from tasks with high learning potential. These results suggest a promising path towards AI systems that can autonomously solve novel sequential decision-making problems that require interactions with the external world.

---

## 论文详细总结（自动生成）

好的，请看以下对论文《Training a Generally Curious Agent》的结构化总结。

### 1. 论文的核心问题与整体含义

*   **研究背景与动机**：
    *   现有的大语言模型在需要与外部环境进行多轮交互、策略性信息收集（Strategic Information Gathering）的序列决策任务（Sequential Decision-Making Problems）中表现不佳。
    *   解决这一问题面临两大挑战：首先，自然发生的交互数据缺乏结构；其次，在真实世界中部署模型进行试错交互成本高昂且充满风险。
    *   一种替代方案是使用合成数据，但为所有可能的任务生成数据不现实。因此，目标转变为训练模型具备**上下文强化学习**的能力，使其能将学到的探索和决策策略**泛化**到未见过的任务上，而非仅针对特定任务进行训练。

*   **核心问题与目标**：
    *   本文旨在探索一种可扩展的方法，赋予大语言模型**通用的、如好奇心般的信息收集能力**。
    *   具体目标是训练一个能够通过上下文学习，将策略性探索和决策能力泛化到全新任务的“通用好奇智能体”（Generally Curious Agent）。
    *   本文提出的“好奇心”不同于传统的“内在动机”，而是指智能体为了完成特定任务，在与全新环境交互时，能够高效地收集完成任务所需信息的能力，这可以被视为一种**摊销式探索**。

### 2. 论文提出的方法论：PAPRIKA

*   **核心思想**：
    *   该方法被命名为 **PAPRIKA**，其核心是设计一套多样化的文本序列决策任务组，让语言模型在这些任务的自生成交互轨迹上进行微调，学习通用的探索与决策策略，并期望这些策略能零样本迁移到未见过的任务中。

*   **关键技术细节与流程**：
    1.  **任务设计**：
        *   设计了**10个多样化的文本任务组**，这些任务必须是纯文本、多轮交互、部分可观察且需要不同策略的。例如：二十个问题、猜城市、Wordle、细胞自动机、扫雷、战舰、多臂老虎机最佳臂识别等。
        *   任务环境由另一个大语言模型（如GPT-4o-mini）模拟，或由硬编码程序生成，以提供观察反馈和最终奖励。为防止环境被攻击，还引入了一个额外的裁判模型来验证任务是否成功。
    2.  **数据集构建**：
        *   使用初始模型在各项任务上，通过**高温度和Min-p采样**生成大量多样化轨迹。
        *   基于轨迹表现（如是否成功、所用回合数）构建偏好对数据集 \( \mathcal{D} \)。对于每个任务，选择表现最好的轨迹作为“胜者” \( h_w \)，并从表现较差的轨迹中随机抽取一个作为“败者” \( h_l \)。
    3.  **模型优化**：
        *   采用两阶段微调。首先进行**监督微调**，最大化“胜者”轨迹中动作标记的似然概率。
        *   然后采用一种**多轮对话版本的直接偏好优化**进行微调，该损失函数仅在模型生成的动作标记上计算对数概率比，鼓励模型增加生成“胜者”轨迹相对于“败者”轨迹的倾向。
        *   最终，结合SFT和DPO损失形成**RPO损失**（公式3），以缓解DPO中可能出现的“无意识非对齐”问题。
    4.  **可扩展的在线课程学习**：
        *   为解决数据生成的计算瓶颈，提出了一种基于**变异系数**的课程学习策略。
        *   **学习潜力度量**：定义一个任务的学习潜力 \( \nu_{\pi}(\tau) \) 为标准差与平均奖励之比（变异系数），该值高意味着任务能产生区分度更高的正负样本。
        *   **任务选择算法**：将任务组视为**多臂老虎机**问题，使用**上置信界算法**动态选择下一轮要采样数据的任务组，优先选择学习潜力高的任务组，从而提高数据采样效率。

### 3. 实验设计

*   **数据集 / 场景**：
    *   采用了10个定制的任务组，每个任务组包含数百至上千个特定任务实例（如，在“猜城市”中，一个特定的城市就是一个任务）。
    *   训练集和测试集在任务实例上是分离的。
*   **基准模型与对比方法**：
    *   **基座模型**：主要使用 `Llama-3.1-8B-Instruct` 和 `Gemma-3-12B-IT`。
    *   **主要对比**：将 **PAPRIKA 微调后的模型**与**原始指令基座模型**、**仅在单一任务组上微调的模型**以及**GPT-4o-mini**进行对比。
    *   还对比了**仅在通用多轮对话数据集（WildChat）上微调的模型**，以证明并非所有多轮训练都能提升决策能力。
*   **评估指标**：
    *   **成功率**：平均成功率和Pass@k成功率。
    *   **任务效率**：完成任务所需的平均交互回合数（越少越好）。
    *   **常规能力**：通过MT-Bench， AlpacaEval， GPQA等标准基准评估微调是否损害模型通用能力。

### 4. 资源与算力

*   **硬件资源**：
    *   **训练**：`Llama-3.1-8B-Instruct` 模型使用单节点 **8 x NVIDIA L40S** GPU。`Gemma-3-12B-IT` 模型使用单节点 **8 x NVIDIA H100** GPU。
    *   **推理与数据生成**：使用单块 **NVIDIA A40** GPU。
*   **计算成本**：
    *   论文明确提到，整个项目的API调用成本约为 **20,000 美元**。
    *   运行所有实验一次的API成本估计不超过 **1,000** 美元。
    *   并未明确提及具体的总训练时长。

### 5. 实验数量与充分性

*   **实验数量**：
    *   **主要实验**：在10个任务组上对两个不同基座模型（Llama-3.1-8B, Gemma-3-12B）进行了全面的成功率与效率评估。
    *   **泛化性实验**：进行了**留一法实验**（在9个任务上训练，在第10个上测试），并对比了**仅在单一任务组上训练**的效果，以验证跨任务泛化能力。
    *   **消融实验**：对比了**仅SFT**与 **SFT+RPO** 的训练效果，证明RPO阶段的必要性。
    *   **效率收益实验**：对比了**课程学习**与**均匀采样**在多轮训练中的效果。
    *   **通用能力影响实验**：在6个标准NLP基准上测试了模型微调前后的能力。
    *   **辅助实验**：还包括在LMRL-Gym基准、修改版Wordle、标准Bandit任务上的评估，以及与其他小参数模型（Qwen， Mistral）的性能对比。
*   **实验充分性与公平性**：
    *   实验设计较为全面和客观。通过在不同任务组、不同模型、不同方法之间的交叉验证，以及标准基准测试，充分支持了论文的论点。对比基线选择合理，评估指标多样。

### 6. 论文的主要结论与发现

1.  **PAPRIKA显著提升大语言模型的决策能力**：在训练数据有限（约2.2万条轨迹）的情况下，PAPRIKA微调能将`Llama-3.1-8B-Instruct`在所有10个任务组上的平均成功率提升约**47%**，且不损害模型的通用基准能力。
2.  **学到的策略具备跨任务泛化性**：在**留一法实验**中，未在目标任务组上训练的PAPRIKA模型，其性能可以**匹配甚至超越**仅在目标任务组上训练的模型，证明了真正的零样本策略迁移。
3.  **课程学习提升数据效率**：提出的基于变异系数的课程学习策略，相比均匀采样，能在相同的训练轮次下获得更高的成功率，有效缓解了数据采样瓶颈。
4.  **通用多轮数据训练无效**：仅在WildChat这类通用多轮对话数据上微调，不仅无法提升，反而会**显著降低**模型在决策任务上的性能，凸显了任务特定合成数据的必要性。

### 7. 优点

*   **通用性**：方法不局限于特定任务，而是教导大语言模型通用的“解决问题过程”，使其具备上下文强化学习能力。
*   **泛化能力**：核心亮点在于展示了零样本跨任务策略泛化的潜力，即使在复杂的决策任务中也能观察到。
*   **训练方法务实**：采用基于自生成数据的离线偏好优化（RPO），将数据收集与策略更新解耦，对算力要求相对较低。
*   **高效的数据利用**：创新的课程学习算法能够动态识别并优先采样高学习潜力的任务，提升了数据效率。

### 8. 不足与局限

*   **依赖强大的基座模型**：该方法依赖于基座模型通过多样性采样能生成一部分成功的交互轨迹。如果初始模型在任务上表现完全随机，自生成数据的训练范式可能无效。
*   **环境攻击风险**：在开放文本任务中，使用另一个语言模型模拟环境存在被攻击的风险，可能导致不准确的反馈或奖励，影响训练质量。
*   **计算成本**：尽管训练本身对算力要求不高，但通过API生成大规模合成训练数据（约2万美元成本）可能成为该方法推广的障碍之一。
*   **课程学习的局限性**：课程学习的性能依赖于任务相似性分组的质量，如何在没有先验知识的情况下进行高效分组是一个挑战。
*   **未使用在线强化学习**：受限于资源，实验未采用在线RL方法（如PPO），根据CoT领域的最新进展，这可能是一个进一步提升性能的方向。

（完）
