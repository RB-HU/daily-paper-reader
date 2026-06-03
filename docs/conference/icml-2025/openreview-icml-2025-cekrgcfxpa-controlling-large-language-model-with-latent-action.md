---
title: Controlling Large Language Model with Latent Action
title_zh: 通过潜在动作控制大语言模型
authors: "Chengxing Jia, Ziniu Li, Pengyuan Wang, Yi-Chen Li, Zhenyu Hou, Yuxiao Dong, Yang Yu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=cEKrGCFXPA"
tags: ["query:fla"]
score: 9.0
evidence: 通过潜在动作空间增强LLM在RL后训练中的可控性
tldr: 现有LLM后训练中缺乏明确的动作空间定义，限制了强化学习的可控性和探索效率。本文提出CoLA框架，通过逆动力学模型从未来令牌中提取潜在动作，在预训练LLM中集成紧凑的潜在动作空间，部分影响下一令牌预测。实验表明，该方法在下游任务中提升了模型的可控性，并且无需额外梯度更新即可适应新任务。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1567, \"height\": 814, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 725, \"height\": 553, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1575, \"height\": 625, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1593, \"height\": 632, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1715, \"height\": 696, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1401, \"height\": 870, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1589, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1611, \"height\": 629, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1243, \"height\": 955, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1592, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 725, \"height\": 542, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cekrgcfxpa/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1706, \"height\": 285, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-cekrgcfxpa/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 873, \"height\": 297, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cekrgcfxpa/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1772, \"height\": 641, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cekrgcfxpa/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1771, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cekrgcfxpa/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1572, \"height\": 375, \"label\": \"Table\"}]"
motivation: 增强LLM在RL后训练中的可控性和探索能力。
method: 提出CoLA框架，利用逆动力学模型从未来令牌中提取潜在动作，融入预训练LLM。
result: 实验表明，CoLA提升了模型在多种下游任务上的性能。
conclusion: CoLA为LLM的RL训练提供了有效的动作空间解决方案，具有普适性。
---

## Abstract
Adapting Large Language Models (LLMs) to downstream tasks using Reinforcement Learning (RL) has proven to be an effective approach. However, LLMs do not inherently define the structure of an agent for RL training, particularly in terms of specifying the action space. This paper studies learning a compact latent action space to enhance the controllability and exploration of RL for LLMs. Inspired by reinforcement learning from observations, we propose **Co**ntrolling Large Language Models with **L**atent **A**ctions **CoLA**, a framework that integrates a latent action space into pre-trained LLMs. **CoLA** employs an \emph{inverse dynamics model} to extract latent actions conditioned on future tokens, ensuring that the next token prediction is partially influenced by these actions. Simultaneously, **CoLA** fine-tunes the pre-trained LLM to function as a \emph{language world model}, capable of incorporating latent actions as inputs. Additionally, **CoLA** trains a \emph{policy model} to generate actions within this language world model. The policy model can be trained via behavior cloning to mimic a standard language model or through RL to maximize task-specific rewards. In this work, we apply **CoLA** to the Llama-3.1-8B model. Our experiments demonstrate that, compared to RL with token-level actions, **CoLA**'s latent actions enable greater semantic diversity. For enhancing downstream tasks, we show that **CoLA** with RL achieves a score of 42.4 on the \emph{math500} benchmark, surpassing the baseline score of 38.2, and reaches 68.2 when augmented with a Monte Carlo Tree Search variant. Furthermore, **CoLA** with RL consistently improves performance on agent-based tasks without degrading the pre-trained LLM's capabilities, unlike the baseline. Finally, **CoLA** reduces computation time by half in tasks involving enhanced thinking prompts for LLMs via RL. These results highlight **CoLA**'s potential to advance RL-based adaptation of LLMs for downstream applications. The CoLA model is available at  \url{https://huggingface.co/LAMDA-RL/Llama-3.1-CoLA-10B}.

---

## 论文详细总结（自动生成）

好的，这是对论文《Controlling Large Language Model with Latent Action》的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：当前将强化学习应用于大语言模型时，通常采用“一个令牌一个动作”的设定，这导致动作空间（即词表大小，如12.8万）过于庞大，给RL的探索效率、计算成本和训练可行性带来了巨大挑战。论文旨在解决如何为LLM的RL训练设计一个更优、更紧凑的动作空间。
*   **研究动机**：受“仅从观测中学习”领域的启发，论文认为通过从纯文本序列中学习**潜在动作**，可以构建一个更小、更高层次的决策空间，从而提升LLM在RL训练中的**可控性、探索效率和泛化能力**，并避免直接调整整个模型参数可能带来的“对齐税”或知识遗忘问题。
*   **整体含义**：论文提出一种新的LLM架构和训练框架，将传统的单一语言模型分解为“高层潜在动作策略”和“低层语言世界模型”的双层结构，旨在以更高效、更稳健的方式实现LLM的对齐和任务适应。

### 2. 论文提出的方法论

论文提出了名为 **CoLA** 的框架，核心思想是构建一个紧凑的离散潜在动作空间，并基于此改造LLM。该框架包含三个核心组件和相应的训练流程：

*   **核心思想与关键组件**：
    *   **逆动力学模型**：这是一个辅助训练模型，其输入是当前状态和历史状态，目标是提取出导致未来令牌生成的“潜在动作”。该动作从一个大小为`N`（例如64）的可学习代码本中选取，本质上是一个离散分类变量。
    *   **语言世界模型**：在预训练LLM的基础上，插入一个“合并模块”。该模块将LLM的嵌入表示与一个选定的潜在动作 合并，共同预测下一个令牌。这使得原本自回归的LLM转变为一个可由动作控制的状态转移模型。
    *   **策略模型**：一个轻量级的Transformer，负责根据当前上下文状态，输出潜在动作的概率分布。在推理时，由策略模型决定“高层意图”（潜在动作），再由语言世界模型根据该意图生成具体的“低层文本”（令牌）。
*   **训练与推理流程**：
    1.  **潜在动作空间构建**：在大规模语料库上，联合训练逆动力学模型和世界模型。使用类似VQ-VAE的目标，但采用Gumbel-Softmax直接分配动作，以解决传统VQ-VAE的“代码本坍塌”问题。此阶段还包括通过行为克隆初始化策略模型。
    2.  **下游任务微调**：提出**动作引导微调**，即在固定潜在动作（来自逆动力学模型或策略模型）的条件下，仅微调世界模型的基础LLM部分，以适应特定任务格式。
    3.  **潜在动作级强化学习**：固定世界模型参数，仅使用RL（如PPO等）优化策略模型。动作空间从数万令牌缩小到几十个潜在动作，极大提升了探索效率。
    4.  **推理**：生成每个令牌时，先由策略模型给出潜在动作 ，再由世界模型基于 和上下文生成下一个令牌。

### 3. 实验设计

论文进行了多类实验以验证CoLA的有效性，基准模型均为Llama-3.1-8B。

*   **数据集与场景**：
    *   **预训练**：使用Slimpajama、Starcoder、Proof-Pile2、WuDao等混合数据集（总计1.1T tokens），随机选取200B tokens进行训练。
    *   **数学推理**：在NuminaMath数据集上进行监督微调，在MATH等任务的提示集上进行RL训练，并在`math500`、`gsm8k`、AIME等多个基准上评估。
    *   **智能体任务**：在`Countdown Game`中测试格式奖励学习效率；在`Alfworld`和`Scienceworld`两个多轮交互式环境中测试。
    *   **偏好对齐**：在四个不同领域（学术、商业、娱乐、文学）的偏好数据上进行RLHF，评估对齐效果和抗奖励攻击能力。
*   **对比方法**：
    *   **主要基线**：未经修改的Llama-3.1-8B模型，同样使用标记级RL或SFT（监督微调）。
    *   **特定对比**：在数学任务中，对比了不同模型（CoLA vs. 基线）上的MCTS（蒙特卡洛树搜索）及其变体（MCTS-Q）的性能。

### 4. 资源与算力

*   **模型参数**：CoLA在8B的Llama基础上增加了约2B参数（逆动力学模型约1B，策略模型约2B，合并模块很小），总计约10B参数。
*   **训练算力**：论文明确提到，由于资源限制，仅从1.1T tokens的数据集中随机选取了**200G（2000亿）tokens**进行预训练，其中100G用于训练策略模型。**论文未明确提及使用的GPU型号、数量及总训练时长**。

### 5. 实验数量与充分性

*   **实验数量**：实验设计较为全面，覆盖了从语义多样性验证、多种下游任务微调（数学、智能体）、到RL对齐和抗攻击性的测试。此外，还包含了多项消融研究。
*   **消融实验与公平性分析**：
    *   **组件有效性**：验证了潜在动作控制相比标记级生成在语义多样性上的优势。
    *   **训练稳定性**：对比了直接分配动作与VQ-VAE，证明前者能有效避免代码本坍塌。
    *   **参数与数据影响**：通过控制变量实验（仅在基线上增加训练数据/参数），排除了性能提升仅仅由额外参数或预训练数据带来的可能性。
    *   **公平性**：在对比中，CoLA和基线模型在同等条件下（如相同RL算法、相同微调数据）进行训练和评估，尽力做到了客观公平。

### 6. 论文的主要结论与发现

1.  **语义多样性增强**：CoLA构建的潜在动作空间能引导模型生成比标准模型和随机标记采样更具多样性的文本。
2.  **下游任务性能提升**：CoLA在数学推理（`math500`得分42.4 vs. 38.2）和智能体任务（`Alfworld`得分+7.1）上均超越了标记级 RL 或 SFT 的基线。结合MCTS时，优势更为明显（`math500`达68.2）。
3.  **学习效率提高**：在`Countdown Game`的格式奖励学习中，CoLA的效率是基线的两倍，大幅缩短了计算时间。
4.  **更稳健的对齐**：在RLHF中，CoLA能有效防止奖励攻击，即使在无KL散度约束下也不会出现性能崩塌，而基线模型则完全失败，表明CoLA的两层架构更好地保护了预训练语言能力。

### 7. 优点

*   **创新性架构**：提出了将LLM的控制流与生成流分离的双层结构，为LLM的后训练提供了一个新颖且有效的视角。
*   **高效探索**：通过构建紧凑的离散动作空间，极大地缓解了RL在巨大动作空间中探索困难的问题，提升了样本效率和学习速度。
*   **稳健性**：显著缓解了RL对齐过程中的“对齐税”和奖励攻击问题，保护了基础模型的核心能力。
*   **可解释性**：通过词云可视化，发现学习到的潜在动作具有一定的语义含义，如有的对应编程术语，有的对应时间/地点。

### 8. 不足与局限

*   **资源与普适性验证**：训练仅在200B tokens上进行（远少于原始LLM的预训练数据），且未在除Llama-3.1-8B以外的其他基座模型上进行充分验证，其方法的泛化性有待证明。
*   **端到端推理成本**：虽然策略模型参数量不大，但在推理时，每生成一个令牌都需要额外运行策略模型和合并模块，增加了推理开销（论文指出是1.25倍），这可能影响在高吞吐量场景下的部署。
*   **代码本大小**：论文将潜在动作空间大小固定为64，对于极其复杂的任务，这个固定的、相对较小的动作空间是否足够，缺乏讨论和实验。
*   **算力信息缺失**：缺少对GPU资源和具体训练时长的说明，让读者难以评估该方法的实际落地成本。

（完）
