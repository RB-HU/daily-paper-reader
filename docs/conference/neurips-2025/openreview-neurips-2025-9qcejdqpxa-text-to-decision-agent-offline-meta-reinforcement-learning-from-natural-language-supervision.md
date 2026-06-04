---
title: "Text-to-Decision Agent: Offline Meta-Reinforcement Learning from Natural Language Supervision"
title_zh: 文本到决策代理：从自然语言监督学习离线元强化学习
authors: "Shilin Zhang, Zican Hu, Wenhao Wu, Xinyi Xie, Jianxiang Tang, Chunlin Chen, Daoyi Dong, Yu Cheng, Zhenhong Sun, Zhi Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=9qCejdqPXa"
tags: ["query:fla"]
score: 8.0
evidence: 通过离线元强化学习从文本训练决策代理，可迁移至金融任务
tldr: 离线元强化学习通常依赖高质量样本或暖启动探索来推断任务信念，限制了其在新任务上的泛化性和易用性。本文提出T2DA（Text-to-Decision Agent），一个从自然语言监督中学习离线元RL的简洁可扩展框架。它首先利用广义世界模型将多任务决策数据编码为动态感知嵌入，然后受CLIP启发进行文本-嵌入对齐，使智能体能够根据从未见过任务的文本描述作出决策，在多个基准上展示了快速适应和泛化。该范式为构建任务导向型代理提供了低成本、可扩展的训练方案，可应用于金融等决策密集领域。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 870, \"height\": 600, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1412, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1417, \"height\": 385, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1420, \"height\": 401, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1420, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 866, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 871, \"height\": 604, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9qcejdqpxa/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 872, \"height\": 426, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1371, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1457, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1408, \"height\": 319, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1356, \"height\": 669, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1450, \"height\": 476, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1328, \"height\": 569, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1310, \"height\": 1082, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1431, \"height\": 317, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1169, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1218, \"height\": 367, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1398, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 762, \"height\": 170, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1089, \"height\": 171, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1065, \"height\": 132, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1402, \"height\": 136, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9qcejdqpxa/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1429, \"height\": 210, \"label\": \"Table\"}]"
motivation: 离线元RL通常依赖高质量样本或暖启动，限制了其在新任务上的泛化能力。
method: 提出T2DA，利用自然语言监督离线元RL，通过世界模型编码多任务数据，并基于CLIP进行任务对齐。
result: 智能体能从文本描述中泛化到未见决策任务。
conclusion: 为任务导向型代理的训练提供了可扩展且低成本的范式，可桥接自然语言与决策推理，适用于金融等领域。
---

## Abstract
Offline meta-RL usually tackles generalization by inferring task beliefs from high-quality samples or warmup explorations. The restricted form limits their generality and usability since these supervision signals are expensive and even infeasible to acquire in advance for unseen tasks. Learning directly from the raw text about decision tasks is a promising alternative to leverage a much broader source of supervision. In the paper, we propose **T**ext-to-**D**ecision **A**gent (**T2DA**), a simple and scalable framework that supervises offline meta-RL with natural language. We first introduce a generalized world model to encode multi-task decision data into a dynamics-aware embedding space. Then, inspired by CLIP, we predict which textual description goes with which decision embedding, effectively bridging their semantic gap via contrastive language-decision pre-training and aligning the text embeddings to comprehend the environment dynamics. After training the text-conditioned generalist policy, the agent can directly realize zero-shot text-to-decision generation in response to language instructions. Comprehensive experiments on MuJoCo and Meta-World benchmarks show that T2DA facilitates high-capacity zero-shot generalization and outperforms various types of baselines. Our code is available at [https://github.com/NJU-RL/T2DA](https://github.com/NJU-RL/T2DA).

---

## 论文详细总结（自动生成）

好的，以下是对论文《Text-to-Decision Agent: Offline Meta-Reinforcement Learning from Natural Language Supervision》的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：当前的离线元强化学习（Offline Meta-RL）方法在泛化到新任务时，通常依赖于高质量的专家示范轨迹或在线预热探索来推断任务特性。这种监督信号（高质量数据/探索）对于未见过的任务是昂贵甚至不可行的，严重限制了通用智能体的构建。
*   **研究动机**：探索一种更易获取、更广泛的监督来源。受到大规模语言模型（LLM）通过海量文本预训练获得强大语义和迁移能力的启发，本文旨在利用**自然语言**作为监督信号，训练能够直接根据文本指令进行零样本泛化的通用决策智能体。
*   **整体含义**：提出了一个名为T2DA的框架，旨在桥接自然语言的“感知级”表征与决策领域的“动态级”表征之间的语义鸿沟，让智能体不仅能“读懂”任务指令，还能理解指令背后对应的环境动态和物理规律，从而实现从文本到决策的直接生成。

### 2. 论文提出的方法论

T2DA框架分为三个核心阶段：

*   **阶段一：动态感知的决策嵌入 (Dynamics-Aware Decision Embedding)**
    *   **核心思想**：让智能体理解环境的底层动态（即状态转移和奖励函数）。
    *   **技术细节**：设计一个**广义世界模型**。
        1.  **轨迹编码器 (Trajectory Encoder ϕ)**：利用双向Transformer将多任务交互轨迹（状态、动作、奖励序列）编码成紧凑的、任务特定的隐含嵌入（embedding）`z`。
        2.  **动态解码器 (Decoder φ)**：包含奖励模型和状态转移模型，它们以嵌入`z`为条件，预测即时奖励和下一状态。
        3.  **训练**：通过最小化奖励和状态转移的预测误差来联合训练编码器和解码器。训练时，用一条轨迹生成嵌入`z`，去解码**同任务下另一条轨迹**的动态，以避免模型“作弊”。

*   **阶段二：对比语言-决策预训练 (Contrastive Language-Decision Pre-training)**
    *   **核心思想**：受CLIP模型启发，通过对比学习桥接文本和决策两种模态的语义鸿沟，并将世界模型学到的动态知识“蒸馏”到文本编码器中。
    *   **技术细节**：
        1.  **文本编码器**：初始化一个预训练语言模型（如CLIP, BERT, T5）。
        2.  **对比学习**：给定一个批次内的 (N) 个 (轨迹, 文本描述) 对，任务是真假配对预测。
        3.  **相似度计算**：计算决策嵌入 `z` 和文本嵌入 `zT` 的余弦相似度，并通过一个可学习温度参数 `α` 和线性投影（WD, WT）进行缩放和映射。
        4.  **损失函数**：优化一个对称的交叉熵损失，最大化 `N` 个真实配对的相似度，最小化 `N² - N` 个错误配对的相似度。
        5.  **高效微调**：使用LoRA（低秩适配）技术对文本编码器进行轻量级参数高效微调，使其适应决策模态。

*   **阶段三：通才策略训练 (Generalist Policy Training)**
    *   **核心思想**：将第二阶段训练好的、能理解环境动态的文本嵌入作为任务条件，训练一个跨任务共享的通才策略。
    *   **公式化**：策略被建模为 `π(a | s; ψ(l))`，其中 `ψ(l)` 是对任务文本描述 `l` 编码后的对齐文本嵌入。
    *   **可扩展实现**：
        *   **T2DA-D (Text-to-Decision Diffuser)**：基于扩散模型，将策略建模为以目标回报和对齐文本嵌入为条件的轨迹生成过程。
        *   **T2DA-T (Text-to-Decision Transformer)**：基于因果Transformer，将对齐文本嵌入作为任务提示符（prompt），与历史轨迹信息（状态、动作、回报）串联，自回归地预测动作。

### 3. 实验设计

*   **数据集/场景**：
    *   **Point-Robot**：2D导航环境，任务是导航到不同的目标点。
    *   **MuJoCo**：多任务运动控制，包括 **Cheetah-Vel**（猎豹以不同速度奔跑）和 **Ant-Dir**（蚂蚁向不同方向行走）。
    *   **Meta-World**：机器人操作平台（Saebo机械臂），包含开门、按按钮等多种操作任务。
    *   每个领域都生成了 **Mixed（混合质量）**、**Medium（中等质量）** 和 **Expert（专家质量）** 三种不同质量的离线数据集。

*   **对比方法（Benchmark）**：覆盖了解决RL泛化问题的三大主流范式。
    *   **上下文离线元RL**：CSRO, UNICORN。
    *   **上下文RL**：AD (Algorithm Distillation)。
    *   **语言条件策略学习**：BC-Z, BAKU。
    *   **其他OMRL基线**：与Meta-DT、MetaDiffuser、Prompt-DT也进行了对比。

### 4. 资源与算力

*   **硬件**：训练使用**单个NVIDIA RTX 4080 GPU**。
*   **时长**：
    *   动态感知决策嵌入和对比预训练约需 **0.5 小时**。
    *   通才策略训练根据环境复杂度，约为 **0.5 到 3 小时**。
*   这表明该方法是一个**相对轻量级**的框架。

### 5. 实验数量与充分性

*   **主要实验**：在4个环境（Point-Robot, Cheetah-Vel, Ant-Dir, Meta-World）上，于Mixed数据集设置下，将2个T2DA变体（T2DA-D, T2DA-T）与5个基线方法进行了全面对比。实验充分。
*   **消融研究**：对T2DA-T和T2DA-D分别进行了消融实验，移除：“世界模型预训练”、“对比对齐”和“文本监督”三个组件，验证了每个组件的必要性。实验到位。
*   **鲁棒性分析**：
    *   **数据质量**：在Expert和Medium数据集上重复了主要实验，证明T2DA在不同数据质量下均表现稳健且优于基线。
    *   **文本编码器**：测试了使用CLIP、BERT、T5三种不同语言模型初始化文本编码器的效果，表现出对架构的不敏感性。
*   **可视化分析**：通过t-SNE可视化，直观展示了“动态感知嵌入”能区分不同任务，以及“对齐文本嵌入”能形成与物理量（如方向/速度）一致的分布，有力支撑了方法论。
*   **公平性**：所有基线方法都在统一的零样本设定下评估（无预热数据），并且作者为了公平比较，对部分方法（如BC-Z）的架构进行了适应性调整。

### 6. 论文的主要结论与发现

*   T2DA能够实现**高容量的零样本泛化**，智能体可直接根据未见过的自然语言指令执行任务。
*   在MuJoCo和Meta-World等基准上，T2DA（无论是基于Diffuser还是Transformer）的性能**一致性地显著优于**各类离线元RL、上下文RL和语言条件策略基线。
*   通过对比预训练，文本嵌入成功“理解”了环境动态，其表征结构与物理规律高度一致，证明了**知识对齐的有效性**。
*   T2DA对**数据质量和底层语言模型架构不敏感**，表现出良好的鲁棒性和普适性。

### 7. 优点

*   **创新的知识对齐机制**：受CLIP启发，首次在离线元RL中系统地桥接了“语言”和“决策动态”的语义鸿沟，并通过可视化提供了有力的定性证据。
*   **模块化、可扩展的框架**：三阶段（编码、对齐、策略训练）的设计清晰、模块化，并基于Diffuser和Transformer两种主流架构给出了可扩展的实现方案。
*   **高效的监督利用**：摆脱了对昂贵专家数据和在线探索的依赖，利用易获取的自然语言作为监督信号，更接近通用智能体的构建目标。
*   **出色的鲁棒性**：对数据质量和文本编码器的鲁棒性测试，表明了该方法在实际应用（数据往往非最优）中的潜力。
*   **计算高效**：仅需单张消费级GPU进行训练，使其对学术界和资源有限的团队非常友好。

### 8. 不足与局限

*   **数据集规模有限**：论文中明确指出现有训练采用的是轻量级数据集，与当前大模型的海量预训练数据规模相去甚远，尚未验证“规模效应（Scaling Law）”带来的潜力。
*   **任务描述相对结构化**：实验中使用的文本描述（如 "Please run at the target velocity of vg"）较为规范和模板化，虽然附录H测试了非结构化指令，但距离真实世界中开放、模糊、多样的人类指令仍有差距。
*   **应用环境相对简单**：基准测试局限于模拟器环境（MuJoCo， Meta-World），尚未在更复杂的、视觉输入的机器人任务或现实世界中进行验证。
*   **未见与VLM/VLA的直接结合**：论文提到未来方向是将知识对齐思想部署到视觉-语言-动作（VLA）模型，这也是其当前版本的局限。
*   **安全与伦理风险未探讨**：作为决策智能体，论文未讨论当智能体被给定危险或恶意指令时的安全对齐问题。

（完）
