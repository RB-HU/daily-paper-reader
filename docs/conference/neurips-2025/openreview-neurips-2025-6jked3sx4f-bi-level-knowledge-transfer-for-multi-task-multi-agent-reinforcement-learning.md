---
title: Bi-Level Knowledge Transfer for Multi-Task Multi-Agent Reinforcement Learning
title_zh: 多任务多智能体强化学习的双层知识迁移
authors: "Junkai Zhang, Jinmin He, Yifan Zhang, Yifan Zang, Ning Xu, Jian Cheng"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=6jKed3sx4f"
tags: ["query:fla"]
score: 4.0
evidence: 双层知识迁移实现多任务多智能体强化学习的策略复用
tldr: 针对多智能体强化学习在多任务场景下从头训练成本高的问题，本文提出双层知识迁移框架 BiKT，分别从个体技能和团队协调两个层面提取可迁移知识，实现离线数据到新任务的零样本泛化。实验表明，该方法有效提升了策略复用效率，降低了线上训练负担，为构建可复用的多智能体系统提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1446, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1445, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1440, \"height\": 515, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1440, \"height\": 409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1449, \"height\": 858, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1441, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1446, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1447, \"height\": 342, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 846, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1445, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1444, \"height\": 331, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1443, \"height\": 447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-6jked3sx4f/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1446, \"height\": 482, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1457, \"height\": 1294, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1423, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1384, \"height\": 596, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1235, \"height\": 517, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1231, \"height\": 1072, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1348, \"height\": 1493, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1154, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 674, \"height\": 773, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1456, \"height\": 1046, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1455, \"height\": 891, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-6jked3sx4f/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1445, \"height\": 794, \"label\": \"Table\"}]"
motivation: 为解决多任务 MARL 的在线训练成本高昂、策略难以跨任务泛化的问题。
method: 提出 BiKT 框架，在个体层提取可迁移技能嵌入，在团队层捕捉协调知识，实现跨任务零样本泛化。
result: 在多种多任务环境中验证了策略复用效果，显著优于基线方法。
conclusion: 该工作推动了多智能体强化学习的任务泛化能力，为实际应用中快速部署智能体提供了可能。
---

## Abstract
Multi-Agent Reinforcement Learning (MARL) has achieved remarkable success in various real-world scenarios, but its high cost of online training makes it impractical to learn each task from scratch. 
To enable effective policy reuse, we consider the problem of zero-shot generalization from offline data across multiple tasks. 
While prior work focuses on transferring individual skills of agents, we argue that the effective policy transfer across tasks should also capture the team-level coordination knowledge.
In this paper, we propose Bi-Level Knowledge Transfer (BiKT) for Multi-Task MARL, which performs knowledge transfer at both the individual and team levels. 
At the individual level, we extract transferable individual skill embeddings from offline MARL trajectories.
At the team level, we define tactics as coordinated patterns of skill combinations and capture them by leveraging the learned skill embeddings. 
We map skill combinations into compact tactic embeddings and then construct a tactic codebook.
To incorporate both skills and tactics into decision-making, we design a bi-level decision transformer that infers them in sequence.
Our BiKT leverages both the generalizability of individual skills and the diversity of tactics, enabling the learned policy to perform effectively across multiple tasks.
Extensive experiments on SMAC and MPE benchmarks demonstrate that BiKT achieves strong generalization to previously unseen tasks.

---

## 论文详细总结（自动生成）

## 一、论文的核心问题与整体含义
多智能体强化学习（MARL）在很多现实应用中取得了成功，但针对每个新任务都从头进行在线训练交互成本极高，难以实用化。本文聚焦于**多任务 MARL 的零样本泛化**问题：利用若干已知任务的离线数据训练策略，使之能够直接迁移到未见过的相关任务上，而无需额外的在线交互或微调。

已有工作主要侧重于在个体层面进行技能（skill）的复用（例如，抽象单个智能体的行为模式并在任务间迁移），但作者指出，单纯迁移个体技能不足以应对复杂的多智能体场景，**有效的策略迁移还必须捕获团队层面的协调知识**，即智能体技能间相互配合的模式，文中称之为“战术（tactic）”。为此，论文提出 **Bi‑Level Knowledge Transfer（BiKT）** 框架，同时从个体技能层和团队战术层两个层面进行知识迁移，从而提升多任务 MARL 的泛化能力。

## 二、方法论
BiKT 的核心思想是**分层次提取与复用知识**，并以此指导决策。整体框架由三个阶段构成。

### 1. 个体技能提取（个体层知识迁移）
- 目的：从离线轨迹中学习可跨任务复用的个体行为模式，即**个体技能嵌入 `z`**。
- 方法：采用**变分自编码器（VAE）**框架。
  - **个体技能编码器** `p_skill` 以全局状态 `s`、联合动作 `a` 和智能体索引 `i` 为输入，输出该智能体的技能嵌入 `z_i`。
  - **动作解码器** `q_act` 根据智能体的局部分散的观测‑动作历史 `τ_i` 以及其技能嵌入 `z_i`，重建其动作 `a_i`。
- 训练目标：最大化动作重建的对数似然，同时通过 KL 散度正则化使技能嵌入分布接近均匀先验。

### 2. 合作战术建码（团队层知识迁移）
- 目的：总结技能组合中体现的团队协调模式，形成离散、紧凑且可复用的**战术码本 `C = {c_k}`**。
- 方法：采用**矢量量化变分自编码器（VQ‑VAE）**框架。
  - **合作战术编码器** `p_tac` 接收全局状态和所有智能体的个体技能嵌入，产生连续战术表示 `ĉ`，然后通过最近邻搜索将 `ĉ` 映射到码本 `C` 中的某个战术嵌入 `c_k`。
  - **技能解码器** `q_skill` 以智能体的局部历史 `τ_i` 和所选战术 `c_k` 为条件，重建出该智能体应有的个体技能嵌入 `ẑ_i`。
- 训练目标：极小化原始技能与重建技能之间的重构误差，同时包含码本承诺损失（令编码器输出靠近所选战术嵌入）和战术多样性正则项（惩罚码本内不同战术向量的相似性），从而鼓励学到一组有区分度的团队战术。

### 3. 双层决策 Transformer（BDT）
- 目的：在决策时**融合战术与技能**，形成可执行策略。
- 网络结构：每个智能体 i 对应一个 Bi‑Level Decision Transformer（`π^i_θ`），它以回报‑to‑go、自身的观测以及历史战术和技能序列作为输入，依次预测：
  1. **战术码本索引 `I_c`**，据此从码本中取出对应的战术嵌入 `c`。
  2. 在 `c` 的条件下，生成该智能体的**个体技能 `z_i`**。
- 动作生成：最终的离散动作通过预训练的动作解码器 `q_act` 由 `z_i` 解码得到。
- 训练方式：利用预训练的编码器生成技能和战术标签，通过监督学习训练 BDT，损失函数同时包含索引预测的加权对数似然和技能预测的对数似然。

### 4. 整体训练与执行流程
1. 先用离线数据训练 VAE 获得技能嵌入和动作解码器。
2. 冻结技能嵌入，训练 VQ‑VAE 获得战术码本和技能解码器。
3. 利用已学技能和战术标签，训练 BDT。
4. 执行时，每个智能体独立运行 BDT，先决定战术索引，再推出其技能，最后解码出动作，全程仅依赖局部历史。

## 三、实验设计
论文在以下环境和基线中进行评估。

- **环境与任务集**：
  - **StarCraft II Micromanagement（SMAC）**：使用 Marine‑Hard、Marine‑Easy、Stalker‑Zealot 三个任务集，每个集包含若干**源任务**和**未见过的目标任务**，任务不同主要体现在己方和敌方单位数量及对称性。
  - **Multi‑Agent Particle Environment（MPE）**的 Cooperative Navigation（CN）：包含不同智能体数量（如 CN‑2、CN‑4）的任务，评估智能体能否协同占据地标并避免碰撞。
- **离线数据质量分层**：每个任务集内进一步划分 **Expert、Medium、Medium‑Expert、Medium‑Replay** 四种数据组，模拟不同性能策略收集的离线数据。
- **比较的基线方法**：
  - **UPDeT**：基于 Transformer 的统一多任务策略，未显式建模技能或战术。
  - **ODIS**：利用离线数据提取协调技能并区分不同智能体行为，进行迁移。
  - **HiSSD**：层次化学习共享技能和任务特定技能的框架。

## 四、资源与算力
- **硬件方面**：使用 **Intel(R) Xeon(R) Gold 5220 CPU** 和 **NVIDIA TITAN RTX GPU**。
- **训练耗时**：每个任务集（包含多个数据组）的训练平均耗时约 **8 小时**（未说明具体 GPU 数量，推测单卡）。

## 五、实验数量与充分性
实验覆盖较为全面，主要包括：
1. **主对比实验**：在三个 SMAC 任务集 + 一个 CN 任务集上，分别对比了 UPDeT、ODIS、HiSSD 三种基线。每个任务集又按四种数据质量进一步细分，因此共约 **4（环境）×4（数据质量）** 大量独立实验组，结果在多个表格中列出均值和标准差。
2. **消融实验**：在 Marine‑Hard 上测试了多个变种：
   - MADT_w_OD：去除技能和战术，仅用 Decoupled Decision Transformer。
   - L=5：减小上下文长度。
   - CK=32：增加战术码本大小。
   - w/o C：去除战术阶段，仅使用个体技能进行决策。
   - Con‑Tac：用连续战术嵌入替代离散码本。
   消融实验系统性强，能清晰反映各组件贡献。
3. **可视化分析**：
   - 对学到的个体技能嵌入进行 t‑SNE 可视化，展示技能的聚类与复用情况。
   - 统计不同任务中战术 ID 的使用频率，分析战术的迁移特性。
   - 通过具体对局案例解释技能和战术的语义（如“集火”、“分散”、“拉扯”等）。

整体而言，实验设计考虑了多种任务类型、不同离线数据质量和多个前期代表性方法，对比公平，消融充分，统计指标与误差带信息完备，结论较为可靠。

## 六、主要结论与发现
- BiKT 在所有 SMAC 和 CN 任务集上显著优于仅基于技能迁移或通用网络基线的方法，尤其在离线数据质量较高（Expert、Medium‑Expert）时优势明显。
- 双层知识结构确实重要：**仅迁移个体技能（去掉战术）会在团队配合要求高的任务（如 7m_vs_8m）中大幅性能下降**；而加入离散战术码本后，智能体可以根据任务需要选择不同团队策略，实现更灵活、更有效的泛化。
- 学到的个体技能展现出跨任务的共享模式，而战术码本则捕获了多样化的协调模式（如集火、拉扯、分散站位等），并且不同任务会自适应地偏好不同战术。
- 决策时先战术后技能的序列化推理方式，能够稳定地引导智能体在未见任务中做出符合团队利益的行为。

## 七、优点
1. **新颖的双层知识迁移视角**：首次同时考虑个体技能与团队战术两个抽象层次，填补了单纯技能迁移的不足。
2. **战术码本设计合理**：使用 VQ‑VAE 学习离散战术嵌入，既保证了战术的多样性和可复用性，又为团队层面的决策提供了明确的、可解释的引导信号。
3. **端到端的三阶段训练流程**：通过学习技能、学习战术、学习决策，各模块职责分明，训练目标清晰。
4. **可解释性强**：不仅展示了技能嵌入的聚类效果，还通过战术使用频率和现实对局示例揭示了所学知识的实际语义，增强了方法的可信度。
5. **全面的实验验证**：在多个环境、多种数据质量、与多个强基线对比，并配合消融和可视化，论证扎实。

## 八、不足与局限
1. **任务分布规模受限**：论文主要在 SMAC 的几个预设任务集和较简单的 MPE 导航任务上验证，所涉及的“多任务”仍属于**相近类型且数量有限**的范畴。面对更加异构、大规模、跨场景的任务分布时，方法的泛化能力尚需检验。
2. **离散码本适配性**：战术码本的大小和离散化程度需要预定义，对于极复杂的开放域环境，固定数量的战术可能不足以覆盖所有有效协调模式，可能需引入动态码本或自适应机制。
3. **训练成本与模块依赖**：三阶段训练涉及多个网络和步骤，若在实际应用中需要调整或增量学习，其流程复杂性可能较高。且技能和战术的标签依赖预训练模型产生的伪标签，误差可能累积。
4. **未见竞争/混合合作‑竞争场景**：当前仅在完全合作任务上测试，未涉及竞争或多目标混合场景，其思路在这些领域是否适用仍未知。
5. **离线数据质量高度影响结果**：从 Medium‑Replay 等低质量数据上的结果可见，当数据分布较差时，BiKT 的优势会缩小，说明仍然对离线数据的覆盖面有一定要求。

（完）
