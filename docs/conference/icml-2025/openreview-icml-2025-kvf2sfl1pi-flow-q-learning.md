---
title: Flow Q-Learning
title_zh: 流式Q学习
authors: "Seohong Park, Qiyang Li, Sergey Levine"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=KVf2SFL1pi"
tags: ["query:fla"]
score: 4.0
evidence: 流式Q学习，一种离线RL方法，可作为自主智能体后训练技术
tldr: 针对传统离线RL中流策略训练的不稳定性，FQL通过训练单步策略避免迭代生成，在离线RL基准任务上表现优异。该方法为自主智能体的后训练提供了一种高效的RL算法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 834, \"height\": 519, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 832, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 657, \"height\": 332, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 864, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 674, \"height\": 258, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 847, \"height\": 298, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 852, \"height\": 260, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 851, \"height\": 306, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 560, \"height\": 311, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1769, \"height\": 779, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1420, \"height\": 387, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kvf2sfl1pi/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1765, \"height\": 1007, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 842, \"height\": 883, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 811, \"height\": 226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1763, \"height\": 557, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1711, \"height\": 2418, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1733, \"height\": 547, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1349, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1705, \"height\": 2422, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kvf2sfl1pi/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1706, \"height\": 569, \"label\": \"Table\"}]"
motivation: 离线RL中，利用流匹配策略建模复杂动作分布时训练不稳定。
method: 训练表达力强的单步策略替代迭代式流策略，避免反向传播不稳定。
result: 在73个离线RL任务上取得强性能，并适用于离线转在线场景。
conclusion: FQL简单高效，有望成为自主智能体后训练的实用工具。
---

## Abstract
We present flow Q-learning (FQL), a simple and performant offline reinforcement learning (RL) method that leverages an expressive flow-matching policy to model arbitrarily complex action distributions in data. Training a flow policy with RL is a tricky problem, due to the iterative nature of the action generation process. We address this challenge by training an expressive one-step policy with RL, rather than directly guiding an iterative flow policy to maximize values. This way, we can completely avoid unstable recursive backpropagation, eliminate costly iterative action generation at test time, yet still mostly maintain expressivity. We experimentally show that FQL leads to strong performance across 73 challenging state- and pixel-based OGBench and D4RL tasks in offline RL and offline-to-online RL.

---

## 论文详细总结（自动生成）

### 论文核心问题与整体含义

本论文探讨了**离线强化学习（Offline RL）**中的一个关键难题：如何有效地利用**表达力强的生成式策略（如流匹配Flow Matching策略）**来拟合数据集中复杂、多模态的行为策略，同时规避由于策略的**迭代生成过程**导致的训练不稳定和计算成本高的问题。

- **研究动机**：随着离线数据集的规模与多样性增长，数据集的行为分布日益复杂，需要高表达力的策略类（如基于扩散或流模型的策略）来精确施加行为约束，避免外推错误。
- **核心挑战**：将流匹配这类迭代式生成模型用作离线RL的策略时，由于动作生成需要经过多步常微分方程（ODE）求解，基于价值的策略优化（如Actor-Critic）需进行**“时间反向传播”（Backpropagation Through Time, BPTT）**，这会导致训练不稳定、计算开销大，限制了此类方法的应用与扩展性。

### 论文提出的方法论

论文的核心思想称为 **“流式Q学习” (Flow Q-Learning, FQL)**，其关键在于将“行为克隆”和“价值最大化”这两个任务解耦到两个不同的策略进行，从而规避了迭代式策略的BPTT问题。具体技术细节如下：

- **双策略架构**
  - **BC流策略** $\mu_\theta(s, z)$：一个标准的迭代式流匹配策略，**仅通过行为克隆（BC）损失**（即流匹配目标）进行训练，其作用是为数据集的行为分布提供一个高精度的生成式模型。
  - **单步策略** $\mu_\omega(s, z)$：一个从噪声 $z$ 直接映射到动作 $a$ 的一步式神经网络，它是实际用于决策和部署的策略。

- **核心训练流程**
  1. **训练BC流策略**：按照标准流匹配方法，最小化速度场预测误差，使其能够从随机噪声生成符合数据集分布的完整ODE流轨迹。
  2. **训练单步策略**：此策略的损失函数 $L_\pi(\omega)$ 由两部分组成：
     - **Q值最大化项**：$E_{s,a^\pi \sim \pi_\omega}[-Q_\phi(s, a^\pi)]$，直接最大化Q函数值，由于 $\mu_\omega$ 是一步映射，因此可以**完全避免BPTT**。
     - **蒸馏（行为正则化）项**：$\alpha E_{s,z}[\|\mu_\omega(s,z) - \mu_\theta(s,z)\|_2^2]$，要求单步策略的输出尽可能接近BC流策略对应的完整ODE轨迹的终点。该论文证明，此项是策略与BC流策略分布间**2-Wasserstein距离的严格上界**，构成了一个度量敏感的分布正则化器。
  3. **训练Critic**：使用标准的Bellman误差进行训练，其中下一个动作 $a'$ 由单步策略 $\mu_\omega$ 生成。

- **算法创新价值**：该框架将“使用生成式策略的离线RL”问题，巧妙转化为“使用单步策略的Actor-Critic + 蒸馏”，既利用了流模型的高表达力，又保持了Actor-Critic训练的简洁与稳定性，并且在推理时无需迭代生成，效率很高。

### 实验设计

实验设计全面，覆盖了多个挑战性基准、任务类型和输入模态。

- **实验场景与数据集**：
  - **主要基准：OGBench**。使用了50个基于状态的和5个基于像素（64×64×3图像）的单任务变体。这些任务横跨机器人运动（如 `antmaze`, `humanoidmaze`, `antsoccer`）和灵巧操作（如 `cube`, `scene`, `puzzle`），普遍比D4RL更具挑战性。
  - **次要基准：D4RL**。使用了6个 `antmaze` 和12个 `adroit`（灵巧手）任务。
  - **离线到在线RL**：在15个代表性任务上评估了FQL的在线微调能力。

- **对比方法**：
  - **高斯策略**：BC， IQL， ReBRAC（SOTA行为正则化 Actor-Critic）。
  - **扩散策略**：IDQL（拒绝采样）， SRPO（蒸馏）， Consistency-AC (CAC，蒸馏+BPTT)。
  - **流策略**：为公平对比作者实现了FAWAC（加权回归）， FBRAC（朴素BPTT）， IFQL（拒绝采样）。这些方法与FQL共享同一实现基座，仅在策略提取方式上不同，形成了**严格的消融对照**。
  - **离线到在线RL**：IQL， ReBRAC， Cal-QL， RLPD， IFQL。

### 资源与算力

论文本身未明确提及训练所用的GPU型号、数量及总训练时长等算力资源细节。

### 实验数量与充分性

实验量非常充分，设计客观且公平。

- **大规模评估**：覆盖**73个**多样化的任务，包含不同环境、任务类型和输入模态，远超常见基准规模。
- **公平对比**：
  - 对多种方法（包括高斯、扩散、流策略）进行了超参数独立调优。
  - 通过自实现的流策略变体（FAWAC， FBRAC， IFQL），实现了在同一代码基座上对**策略提取方法**的单一变量控制消融。
  - 报告了最后固定训练步数的性能，避免了由于选择最佳模型检查点带来的偏差。
- **充分性分析**：除了主实验，论文还系统性地消融了BC系数、目标值聚合方式、流步数、时间分布等内部超参数，并通过训练曲线展示了其影响。

### 论文的主要结论与发现

- **FQL性能优越**：在73个离线RL任务上，无论状态还是像素输入，FQL均一致性地取得了最好或接近最好的性能，尤其是在动作分布高度多模态的复杂灵巧操作任务上，显著优于高斯策略和同类扩散策略。
- **策略提取方式至关重要**：通过消融实验明确证明，FQL提出的“单步引导”策略提取方案（蒸馏+无BPTT的Actor-Critic），显著优于加权回归、朴素BPTT和拒绝采样等先前方案。
- **离线到在线有效**：FQL无需任何修改即可直接用于在线微调，且性能超越了IQL、Cal-QL等专门为离线-在线场景设计的方法。
- **超参数鲁棒性**：FQL的主要超参数是BC系数，其他流匹配相关的超参数（如时间分布、流步数）在合理范围内对最终性能影响不大，简单默认配置即可工作。
- **计算效率**：FQL的训练与推理速度在流/扩散策略方法中属于最快的一档，仅略慢于高斯策略方法。

### 优点

- **创新且简单**：通过“解耦训练”的思路，优雅地解决了迭代生成模型用于策略优化时的核心困境，整个算法可用一个简洁的伪代码块概括。
- **可扩展性强**：由于避免了BPTT，理论上更容易扩展到更高维动作空间或更大规模的模型。
- **推理高效**：最终产出的是一步式策略，无需在部署时进行耗时的迭代采样，兼顾了表达力与实时性。
- **实验严谨**：结论受到大规模、多维度、有严格对照的实验的强有力支撑。提供了一个优秀的关于“策略提取方法”的消融研究范例。
- **即插即用的微调**：无缝支持在线微调，扩展了方法的实用范围。

### 不足与局限

- **训练仍需数值求解ODE**：在计算蒸馏损失时，仍需通过数值方法求解BC流策略的ODE来获取目标动作，这仍然引入了一部分计算开销，虽比BPTT耗时少，但依然是潜在瓶颈。
- **缺乏内置探索机制**：在需要强力探索才能避免局部最优的在线微调场景中（如 `puzzle-4x4` 任务），FQL表现为非最优，需要未来结合更显式的探索策略。
- **流策略与扩散策略的对比**：作者明确指出该工作核心贡献并非证明“流优于扩散”，而是“单步引导”这种策略提取范式，其思想同样适用于扩散策略。
- **现实世界任务待验证**：目前所有实验均在模拟器中进行，尚未在真实的机器人任务上验证其效果。
- **算力细节缺失**：报告未提供运算所需的具体GPU资源和训练时间，不利于他人精确评估计算成本。

（完）
