---
title: Self-Guided Hierarchical Exploration for Generalist Foundation Model Web Agents
title_zh: 面向通用基础模型网络智能体的自引导分层探索
authors: "Qianlan Yang, Xiangjun Wang, Danielle Perszyk, Yu-Xiong Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=9twwDW60Bw"
tags: ["query:fla"]
score: 8.0
evidence: 自引导分层探索训练通用网络智能体
tldr: 针对现有网络智能体训练依赖预定义数据的问题，提出SAGE框架，通过预探索、顶层探索和底层技能三级自引导探索，使智能体从环境中自主学习技能，无需人工示范。实验显示该方法在未见任务上泛化能力显著提升。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-9twwdw60bw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1442, \"height\": 574, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9twwdw60bw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1416, \"height\": 287, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9twwdw60bw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 704, \"height\": 532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9twwdw60bw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1459, \"height\": 598, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1455, \"height\": 755, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 882, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 808, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 881, \"height\": 188, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 880, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 737, \"height\": 113, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 729, \"height\": 158, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 733, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 730, \"height\": 193, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 730, \"height\": 154, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 734, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9twwdw60bw/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 760, \"height\": 456, \"label\": \"Table\"}]"
motivation: 现有训练范式依赖预定义任务数据集，限制智能体的自主改进与泛化。
method: 设计三级分层探索策略：预探索构建环境理解，顶层探索定义目标，底层技能执行具体操作。
result: 在没有人类示范的情况下，智能体成功掌握复杂网络交互，泛化能力大幅增强。
conclusion: 为面向任务型金融智能体的自主后训练提供了探索驱动的方法论，减少了对标注数据的依赖。
---

## Abstract
Foundation models have recently shown strong potential as web agents, capable of interpreting high-level instructions and interacting with complex web interfaces. However, existing training paradigms for these agents often rely on predefined task datasets and curated demonstrations, limiting their scalability, adaptability, and capacity for self-improvement. In this work, we introduce *Self-guided hierArchical exploration for Generalist wEb agents* (SAGE), a new training framework designed to support autonomous skill acquisition through self-guided hierarchical exploration. Our method introduces a three-tier exploration strategy: a pre-exploration phase to build structural understanding of web environments, a top-level exploration strategy to generate a self-evolving curriculum of tasks from easy to hard, and a low-level exploration mechanism that combines planning-based rollouts with step-wise learning to improve policy efficiency. Together, these components form a scalable, supervision-free framework for web agent training. Experimental results on WebVoyager and WebArena demonstrate that our method significantly outperforms prior approaches, enabling foundation model agents to learn complex web tasks with greater generalization and robustness.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：现有基于基础模型的网络智能体（Web Agents）训练范式严重依赖预定义任务数据集和人工策划的演示，这限制了智能体的可扩展性、对新场景的适应能力以及持续自我改进的潜力。
- **整体含义**：本文旨在提出一种全新的训练框架——**自引导分层探索（SAGE）**，使通用基础模型智能体能够**在不依赖任何人工标注任务或专家示范的情况下**，通过自主探索真实的网站环境，生成自己的学习课程，逐步从简单任务向复杂任务演进，从而获得鲁棒的网页交互与推理能力。

### 2. 论文提出的方法论
SAGE 的核心是一个三层次的分层探索架构，将学习过程分解为三个功能阶段：

- **预探索阶段 (Pre-Exploration)**：
  - **目标**：在训练开始前，让智能体自主理解网站的结构和功能。
  - **方法**：智能体仅被提供网站主页URL，采用**广度优先搜索（BFS）**遍历页面。它记录每个访问页面的截图、状态间的结构转换（如“页面A 通过 点击[搜索] 转换到 页面B”）以及页面元数据（如商品类别），从而构建一个环境知识库。

- **顶层探索策略 (Top-Level Exploration) —— 自适应课程生成**：
  - **目标**：根据智能体的当前能力，动态地提出和调整任务难度，形成从易到难的课程。
  - **方法**：包含一个**自适应任务生成器**和一个**双重回放缓冲区**。任务生成器不仅利用预探索的知识生成新任务，还会分析智能体在以往任务上的成败轨迹：
    - 对成功率低的任务，**简化**或分解为子任务。
    - 对成功率高的任务，**增加难度**，如组合多个指令或收紧条件。
  - 双重回放缓冲区混合了初始阶段的基本任务和后来的自适应任务，以保证技能不遗忘，同时促进新能力获得。

- **底层探索策略 (Low-Level Exploration) —— 高效动作序列规划**：
  - **目标**：在单个任务内实现高效决策，尤其在稀疏奖励的长时程任务中。
  - **方法**：
    - **蒙特卡洛树搜索 (MCTS)**：使用MCTS从任务起始状态进行树搜索，通过UCB公式平衡探索与利用，寻找最优动作序列。展开时利用**多动作智能体策略**（一次产生k个候选动作），并执行 rollout 获取结果。
    - **训练式结果评估器 (Outcome Evaluator)**：训练一个模型，根据任务指令、智能体最终回答和最后几步的轨迹，预测任务成功与否，为学习提供可靠的监督信号。
    - **步骤级学习 (Step-wise Learning)**：采用 **步骤级直接偏好优化 (Step-DPO)** 目标函数。通过比较成功与失败轨迹，在它们首次出现分叉的状态 \(s_k\) 处进行局部信用分配，训练策略偏好成功的后续动作。

### 3. 实验设计
- **数据集/场景**：
  - **WebVoyager**：一个开放互联网基准，包含来自15个真实网站的643个任务，本文排除两个结构变化的网站，最终使用13个网站共557个任务。
  - **WebArena**：一个封闭域、自托管的沙盒基准，包含5个模拟真实世界网站（如Reddit、GitLab等）的环境。评估任务集来自 WebArena-Easy 和 WebArena-Lite。
- **对比方法**：
  - **专有模型**：Claude 3.5 Sonnet（直接提示）。
  - **开源模型基线**：多种视觉语言模型（LLaVa-7B/34B, Qwen2.5VL-7B/32B）的零样本表现。
  - **微调方法**：SFT（对专家轨迹进行监督微调）、PAE（一种依赖静态指令池的自我训练框架）。在相同基础模型上对比 SFT、PAE 和 SAGE 的性能。

### 4. 资源与算力
论文中明确提到实验需要丰富的计算资源，并使用了 Amazon Web Services (AWS) 以及 NCSA Delta/DeltaAI 超级计算机。然而，**论文并未提供具体的GPU型号、数量或总训练时长等详细算力信息**。这一缺失可能影响他人精确复现实验的难度。

### 5. 实验数量与充分性
实验设计非常详尽且系统，覆盖全面，判断为充分且客观公平。
- **主要性能实验**：在两个主流基准（WebVoyager, WebArena）上，与多种模型（4种开源VLM + 1种专有模型）及多种训练范式（零样本、SFT、PAE）进行对比。
- **难度分层分析**：将 WebArena 任务按所需步数分为简单、中等、困难三组，评估不同复杂性下的提升。
- **消融实验**：
  - 分别移除顶层探索（变静态任务分布）、底层探索（变普通 roll-out + 行为克隆）、预探索阶段、训练式评估器（替换为 Claude 或 Qwen 直接输出）。
  - 对 MCTS 探索的样本效率进行分析。
- **错误分析**：对200个任务轨迹进行人工标注，将失败归因于低阶执行错误、高阶规划错误、视觉幻觉等六类，展示了 SAGE 减少错误的动态过程。

### 6. 论文的主要结论与发现
- **性能大幅领先**：SAGE 在 WebArena 上超越所有开源基线的表现**26%**，甚至比专有模型 Claude 3.5 Sonnet 高出**11%**；在 WebVoyager 上同样表现最优。
- **自适应课程至关重要**：顶层探索中的自适应任务生成器是推动技能获取的关键，移除后性能显著下降。智能体能够从掌握简单技能开始，逐步解决更难的推理挑战。
- **规划与步骤级学习有效**：基于 MCTS 的低层探索和 Step-DPO 在稀疏奖励环境下显著提升了长时程、复杂任务的成功率。
- **评估器可训练**：一个经过领域数据微调的较小开源模型可以超越更大或专有模型，成为更精准的自主评估器。

### 7. 优点
- **完全自主性**：无需任何人工任务定义或专家演示，实现了真正的无监督技能发现。
- **分层设计精妙**：将环境理解、课程生成和动作规划三个层面的挑战解耦，逻辑清晰且相互增强。
- **规划与学习结合**：将 MCTS 与 DPO 结合的步骤级学习，有效缓解了复杂任务中轨迹长、奖励稀疏的问题。
- **实验论证扎实**：通过跨基准、多模型、多层面的详尽消融和错误分析，全面验证了每个组件的贡献和方法的有效性。

### 8. 不足与局限
- **基础假设限制**：方法假设一个可重置、能保存/恢复状态的脚本化浏览器环境，这在有验证码、登录页或高度动态内容的真实全开放网络中可能不成立。
- **强环境依赖**：训练中利用了网页的无障碍树（Accessibility Tree）等结构信息，导致框架不能轻易迁移到非标准或未配备此类信息的网站上。
- **计算开销巨大**：MCTS 的大规模展开和高保真网页渲染需要大量计算资源，这为社区广泛复现和应用设置了较高门槛。
- **应用场景受限**：当前仅关注导航和表单交互任务，且所有实验均在安全的沙盒环境中进行，尚未探讨在隐私敏感场景下的部署与安全对齐问题。

（完）
