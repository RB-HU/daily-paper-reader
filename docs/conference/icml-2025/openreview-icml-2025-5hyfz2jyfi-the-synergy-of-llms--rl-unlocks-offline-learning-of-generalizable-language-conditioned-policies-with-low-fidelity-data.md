---
title: "The Synergy of LLMs & RL Unlocks Offline Learning of Generalizable Language-Conditioned Policies with Low-fidelity Data"
title_zh: 大语言模型与强化学习协同解锁低质量数据下可泛化语言条件策略的离线学习
authors: "Thomas Pouplin, Kasia Kobalczyk, Hao Sun, Mihaela van der Schaar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=5hyfZ2jYfI"
tags: ["query:fla"]
score: 9.0
evidence: 提出用于自主智能体离线语言条件策略学习的训练流水线，以提升泛化能力
tldr: 针对自主智能体在自然语言指定复杂多步决策任务中泛化难的问题，本文提出TEDUO，一种利用未标记数据集离线学习语言条件策略的训练流水线。通过协同大语言模型的语义理解与强化学习的决策能力，该方法在符号环境中有效提升了智能体对未见目标与状态的零样本泛化性能，验证了低资源离线训练在构建通用策略中的实用性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1713, \"height\": 524, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1647, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 802, \"height\": 210, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 975, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 776, \"height\": 353, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 492, \"height\": 364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1339, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 886, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 717, \"height\": 712, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1689, \"height\": 1767, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1757, \"height\": 840, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1672, \"height\": 833, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5hyfz2jyfi/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1736, \"height\": 1007, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1724, \"height\": 634, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 862, \"height\": 311, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 795, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 810, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1779, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1781, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1465, \"height\": 275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1781, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1780, \"height\": 427, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1752, \"height\": 820, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1780, \"height\": 704, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 935, \"height\": 455, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1775, \"height\": 365, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1078, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5hyfz2jyfi/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 900, \"height\": 381, \"label\": \"Table\"}]"
motivation: 自主智能体面临标记数据稀缺、泛化性不足的挑战，现有RL方法难以应对未见目标。
method: 提出TEDUO训练流水线，结合LLM语义理解与离线RL，从无标注数据学习语言条件策略。
result: 在符号环境中实现零样本泛化，显著优于传统方法。
conclusion: TEDUO为自主智能体的离线泛化训练提供了有效框架，降低了对标注数据的依赖。
---

## Abstract
Developing autonomous agents capable of performing complex, multi-step decision-making tasks specified in natural language remains a significant challenge, particularly in realistic settings where labeled data is scarce and real-time experimentation is impractical. Existing reinforcement learning (RL) approaches often struggle to generalize to unseen goals and states, limiting their applicability. In this paper, we introduce $\textit{TEDUO}$, a novel training pipeline for offline language-conditioned policy learning in symbolic environments. Unlike conventional methods, $\textit{TEDUO}$ operates on readily available, unlabeled datasets and addresses the challenge of generalization to previously unseen goals and states. Our approach harnesses large language models (LLMs) in a dual capacity: first, as automatization tools augmenting offline datasets with richer annotations, and second, as generalizable instruction-following agents. Empirical results demonstrate that $\textit{TEDUO}$ achieves data-efficient learning of robust language-conditioned policies, accomplishing tasks beyond the reach of conventional RL frameworks or out-of-the-box LLMs alone.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **核心问题**：如何仅利用无标注的离线状态-动作转移数据（即未记录每个动作对应哪个目标、也没有奖励信号），训练出能够理解自然语言指令、并在全新目标和环境状态下仍能泛化执行多步决策任务的自主智能体。
- **研究动机**：现有语言条件强化学习方法通常依赖大量人工标注或在线交互，这在现实场景中成本高甚至不可行；同时，传统RL方法在新目标和未见状态上的泛化能力有限。论文旨在将大语言模型（LLM）的语义理解与强化学习的决策能力结合，突破数据稀缺和泛化瓶颈。
- **整体含义**：提出一种既不需要昂贵标注、也不依赖在线实验的离线训练流水线，使智能体在仅拥有低质量观测数据时就能学到可泛化的语言条件策略，为实际部署提供可能。

### 2. 论文提出的方法论

- **整体框架**：TEDUO（Teaching the Environment Dynamics from Unlabeled Observations）包含三个串行步骤：
  1. 构建可解的马尔可夫决策过程（MDP）：对每个训练目标 \( g \)，利用LLM进行后见之明的标注（判断状态是否达成目标）和可选的状态抽象，得到一个带标签的抽象状态转移数据集。
  2. 离线策略学习：对每个目标 \( g \)，基于得到的抽象MDP，利用离线RL算法（如表格型Q-learning或Deep Q-learning）学习最优目标条件策略 \( \pi_g \)。
  3. LLM监督微调：将学到的每条最优动作序列与对应的目标描述和初始抽象状态组成监督数据集，微调预训练LLM，使其内化环境动力学，从而在面对新目标和未见状态时能输出正确的动作序列。

- **关键技术细节**：
  - **LLM作为数据增强器**：通过提示LLM判断某一抽象状态是否满足目标 \( g \)，生成奖励标签；为降低成本，训练轻量神经网络（代理奖励模型）来逼近LLM的判断。状态抽象则通过LLM生成代码函数 \( F(x;g) \)，剔除与当前目标无关的环境特征，压缩状态空间。
  - **离线策略学习**：在抽象MDP上应用表格Q-learning或DQN，获得针对训练目标的最优策略；这一步不要求泛化到新状态，因为泛化由后续微调LLM实现。
  - **监督微调**：构建数据集 \( D_{SFT} = \{ (g, s^g_0, [a^{*,g}_0, \dots, a^{*,g}_{n_g}]) \} \)，其中动作序列来自步骤2的策略，序列终止于代理奖励模型认为目标达成的状态。使用LoRA微调Llama-3-8B-Instruct。

- **公式/算法流程示意**：
  - 目标达成奖励：\( R_{\phi}(x_t, a_t, x_{t+1}; g) = \mathbf{1}[x_{t+1} \in \phi(g)] \)；代理奖励模型 \( R_{\theta}(\cdot; g) \) 近似 \( \mathbf{1}[g \text{ 在 } s^g \text{ 中达成}] \)。
  - 策略学习：\( \pi_g(a | s^g) \) 通过最大化累积折扣回报学习。
  - 微调数据生成：\( a^{*,g}_t = \arg\max_a \pi_g(a | s^g_t) \)，序列终止于 \( R_{\hat{\theta}}(s^g_{n_g+1}; g) = 1 \)。

### 3. 实验设计

- **数据集/场景**：
  - 主要环境：BabyAI（网格世界），包含多种房间、门、可交互对象，语言指令如“走到红色门”、“把蓝色球放在黄色箱子旁边”。
  - 附加环境：Webshop（模拟电商网站），验证TEDUO在动态动作空间和生成语言输入场景下的适应性。
  - 离线数据集 \( D \)：来自随机混合策略或完全随机策略收集的状态-动作转移三元组（BabyAI约800k非唯一三元组；Webshop 5000条轨迹，1500个独特指令）。

- **评估指标**：
  - 成功率（Success Rate）
  - 平均完成步数（Episode Length）
  - 无效动作比率（Invalid Actions）
  - （Webshop额外使用环境原始奖励分数）

- **对比方法**：
  - 未微调LLM（Llama-3-8B/70B原版、DeepSeek-R1）
  - 基于提示的LLM变体（CoT、上下文示例、ReAct）
  - 仅采用BabyAI基线：BabyAI-IL-bot（GRU+CNN+模仿学习）
  - 消融版本：仅步骤1+行为克隆（GCBC），或仅步骤1+2（GCRL）

- **泛化测试**：训练目标与测试目标语义不同（如“拿起X”→“获取X”），环境布局也不同（新网格Room数量变化）；Webshop测试指令无重复。

### 4. 资源与算力

- **明确信息**：微调使用8B参数的Llama-3-8B-Instruct，采用LoRA低秩适配。训练在4块A100（80GB VRAM）组成的集群上进行。
- **算力度量**：文中给出了算力与性能缩放表（Table 4），以TFLOPS为单位衡量不同训练目标数量（\( |G_{tr}| \)）下所需的计算量（如 5.2e7 ~ 1.4e8 TFLOPS），GPU小时数乘以峰值TFLOPS（A100 bf16 312 TFLOPS）再乘利用率（90%）估算。
- **未明确时长**：未给出具体总训练小时数，但通过TFLOPS量化了算力消耗。

### 5. 实验数量与充分性

- **主要实验组**：
  - 泛化基准测试（Q1）：比较TEDUO与多种LLM基线及BabyAI-IL-bot，覆盖训练/新目标、训练/新环境组合。
  - 消融实验（Q2）：对比仅步骤1+行为克隆、仅步骤1+2（GCRL）与完整TEDUO。
  - 核心技能分析（Q3）：通过环境A、B、C设计技能迁移与组合实验，以及线性探针实验检查LLM内部表征。
  - 数据效率与抽象作用（Q4）：变化数据集大小、有无状态抽象，绘制学习曲线；算力缩放实验。
  - 附加实验：Webshop环境性能、不同数据收集策略的影响、奖励塑形精度评估、泛化到更大网格尺寸等。
- **实验充分性评估**：实验设计覆盖了方法各组件（抽象、奖励塑形、策略学习、微调）的消融，考察了泛化能力、技能迁移能力、数据效率和计算扩展性，并通过多个环境（BabyAI, Webshop）验证。对比方法包含强基线（ReAct、CoT提示、上下文学习、大参数模型），评估指标多维。整体实验较为系统和充分，具有客观性和公平性。

### 6. 论文的主要结论与发现

- 仅靠预训练LLM（即使包含推理或上下文示例）无法在BabyAI环境中可靠完成多步决策任务，成功率低下。
- TEDUO能够仅用无标注离线数据训练出语言条件策略，训练目标成功率从17%提升至65%，且在全新目标和新环境上仍保持较高泛化能力（45%），远超传统RL基线（BabyAI-IL-bot在测试组合上降至16%）。
- 微调后的LLM并非简单记忆最优动作，而是习得了可组合的核心技能（如识别障碍物、开门、拾取物体），并在新组合任务中展现出技能组合能力。
- 状态抽象与后见之明标注有效提升了数据效率，抽象可将状态空间缩减约10%，目标识别特征空间缩至约20%，使RL在少量数据下仍能学习。
- 性能瓶颈已从观测数据稀缺转移至计算资源，增加训练目标数量和算力可持续提升泛化性能。

### 7. 优点

- **数据效率极高**：无需任何标注或在线交互，仅利用无标签状态-动作序列即可学习复杂语言指令策略。
- **双重LLM角色**：LLM既用作数据增强（奖励标注、状态抽象），又作为可泛化的决策主体，创新性地融合了两者优势。
- **泛化能力强**：不仅在同类语义指令间，还能泛化到完全未见的指令类型和环境布局，甚至扩展到比训练时更大的网格。
- **方法模块化**：各步骤（抽象、RL、微调）可替换，如抽象函数可定制，RL算法可选用表格型或DQN，微调目标模型可更换，灵活性高。
- **深入分析**：通过线性探针和技能组合实验，揭示了微调LLM确实学到了对环境的深层理解，而非表面统计。

### 8. 不足与局限

- **环境局限性**：主要验证在BabyAI这种符号化、网格型环境及Webshop电商模拟，尽管第二环境扩展了动作空间，但非连续的物理控制任务尚未涉及。
- **依赖于文本化状态**：假设环境状态可充分用自然语言描述，对于需要视觉等模态的任务（如真实机器人），虽可扩展至VLM，但尚未实验验证。
- **离散动作空间**：直接利用LLM输出动作要求动作空间可离散化，对连续控制任务的适配需要额外设计。
- **对预训练LLM先验知识的依赖**：当任务领域远离LLM训练数据分布时，零样本泛化可能失效。
- **工程细节要求**：仍需人工设定目标列表 \( G \) 及对环境和数据的一定了解以构造提示，无法完全自动化。
- **计算成本**：尽管数据需求低，但扩大训练目标数量会显著增加推理与训练算力。

（完）
