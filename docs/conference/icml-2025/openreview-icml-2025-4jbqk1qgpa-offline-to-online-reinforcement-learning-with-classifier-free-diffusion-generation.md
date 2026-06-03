---
title: Offline-to-Online Reinforcement Learning with Classifier-Free Diffusion Generation
title_zh: 基于无分类器扩散生成的离线转在线强化学习
authors: "Xiao Huang, Xu Liu, Enze Zhang, Tong Yu, Shuai Li"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=4JbQK1qGpA"
tags: ["query:fla"]
score: 6.0
evidence: 基于无分类器扩散生成的离线转在线RL，适用于自主智能体的后训练微调
tldr: 为缩小离线到在线RL中的数据分布差距，CFDG利用无分类器引导扩散生成高质量增强数据，并重加权优化。该方法可作为智能体后训练中的数据生成策略。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-4jbqk1qgpa/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 659, \"height\": 314, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4jbqk1qgpa/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1733, \"height\": 1157, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4jbqk1qgpa/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 571, \"height\": 465, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1411, \"height\": 829, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 768, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 877, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 863, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1213, \"height\": 466, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-4jbqk1qgpa/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1029, \"height\": 284, \"label\": \"Table\"}]"
motivation: 离线到在线微调时，生成数据与在线数据存在分布差异。
method: 提出CFDG，使用无分类器引导扩散增强数据生成，并引入重加权方法。
result: 在离线到在线任务中，CFDG提升了数据质量和微调性能。
conclusion: CFDG为智能体后训练提供了一种高效的数据增强手段。
---

## Abstract
Offline-to-online Reinforcement Learning (O2O RL) aims to perform online fine-tuning on an offline pre-trained policy to minimize costly online interactions. Existing work used offline datasets to generate data that conform to the online data distribution for data augmentation. However, generated data still exhibits a gap with the online data, limiting overall performance. To address this, we propose a new data augmentation approach, Classifier-Free Diffusion Generation (CFDG). Without introducing additional classifier training overhead, CFDG leverages classifier-free guidance diffusion to significantly enhance the generation quality of offline and online data with different distributions. Additionally, it employs a reweighting method to enable more generated data to align with the online data, enhancing performance while maintaining the agent's stability.  Experimental results show that CFDG outperforms replaying the two data types or using a standard diffusion model to generate new data. Our method is versatile and can be integrated with existing offline-to-online RL algorithms. By implementing CFDG to popular methods IQL, PEX and APL, we achieve a notable 15\% average improvement in empirical performance on the D4RL benchmark such as MuJoCo and AntMaze.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：Offline-to-Online 强化学习（O2O RL）中，使用离线数据通过生成模型进行数据增强时，生成的数据与在线策略所对应的真实数据分布仍存在明显差距（Distribution Shift），限制了在线微调性能。
- **研究动机**：现有方法（如 EDIS）主要基于离线数据进行增强，生成的样本虽能靠近在线策略，但仍保留较多离线特性，且需要额外训练分类器，增加了开销和复杂性。因此，如何用更简单的方法生成高质量、更对齐在线策略的数据成为关键问题。
- **整体含义**：本文提出一种新的数据增强视角——同时增强在线和离线数据，并利用无分类器引导（Classifier-Free Guidance）的扩散模型，更简洁高效地缩小分布差距，提升 O2O RL 算法在有限在线交互下的性能。

### 2. 方法论
- **核心思想**：将离线数据与在线数据视为两类不同的标签（条件），通过一个条件扩散模型同时为两类数据建模，并在采样时利用无分类器引导增强数据与在线策略的对齐度。对生成的样本进行重加权，优先利用更匹配在线策略的合成在线数据，从而在不引入额外分类器训练的情况下改善数据质量。
- **关键技术细节**：
  - **无分类器引导扩散模型**：训练一个同时支持**无条件**和**标签条件**的扩散模型。通过在训练时以一定概率 $p_\text{uncond}$ 将条件 $c$ 置为空（null token），联合学习无条件分数和条件分数。
  - **采样公式**：在反向扩散采样时，使用线性组合控制引导强度：
    $$\tilde{\epsilon}_\theta(\mathbf{z}_\lambda, c) = (1 + w)\epsilon_\theta(\mathbf{z}_\lambda, c) - w\epsilon_\theta(\mathbf{z}_\lambda)$$
    其中 $w$ 控制条件引导程度。
  - **数据重加权（Reweighting）**：生成数据分为“合成在线数据”和“合成离线数据”。为了更贴合在线策略，增大合成在线数据的采样比例（默认为 $8:2$），使得增强后的训练批次更具探索性和策略对齐度。
  - **算法流程**（见 Algorithm 1）：
    1. 离线预训练阶段：仅使用离线数据 $D_\text{off}$ 训练策略。
    2. 在线微调阶段：每隔固定步数，使用 $D_\text{off}$ 和 $D_\text{on}$ 更新条件扩散模型 $M$，并生成合成离线/在线样本，分别存入 $D_\text{off}^\text{syn}$ 和 $D_\text{on}^\text{syn}$。
    3. 每次策略更新时，从四个缓冲区（$D_\text{on}, D_\text{off}, D_\text{off}^\text{syn}, D_\text{on}^\text{syn}$）按比例采样训练。

### 3. 实验设计
- **数据集与场景**：
  - **D4RL Benchmark**：
    - **Locomotion（MuJoCo）**：HalfCheetah、Hopper、Walker2d，各含 random、medium-replay、medium、medium-expert 四种质量。
    - **AntMaze**：medium-play、medium-diverse、large-play、large-diverse（因 APL 未评测 AntMaze，未包含该算法）。
  - **Adroit Benchmark**（附录）：relocate-human-v1、pen-human-v1、door-human-v1，用于测试精细电机控制任务。
- **对比方法**：
  - **基线算法**：IQL、PEX、APL（作为基础 O2O RL 算法）。
  - **模型增强方法对比**：SynthER（直接扩散增强在线数据）、EDIS（基于能量的引导扩散，从离线数据生成）。
- **评估方式**：所有实验均使用 5 个随机种子，报告在线微调后的归一化分数（Normalized Score）及其变异。

### 4. 资源与算力
- **GPU 与训练时间**（文中 A.3 节明确给出）：
  - 使用 **NVIDIA RTX 2080Ti** 进行训练。
  - **APL-CFDG**：在线微调 10K 步约需 **23 小时**。
  - **IQL-CFDG / PEX-CFDG**：在线微调 100K 步分别约需 **15 小时 / 17 小时**。
  - 最大 GPU 显存占用约 **3G**。
- **计算代价**：相比非生成式基线（IQL/APL 约 12–20 小时），引入扩散模型确实增加了训练时间（约增加 3–5 小时），但作者认为这是平衡性能提升的可接受代价。

### 5. 实验数量与充分性
- **实验组数概览**：
  - 主实验：3 种基础算法（IQL, PEX, APL）× (12 个 Locomotion 任务 + 4 个 AntMaze 任务) ≈ **40+ 组对比实验**。
  - 生成方法对比：IQL + 3 种增强方法（SynthER, EDIS, CFDG）在 12 个 Locomotion 任务上的完整学习曲线对比。
  - 消融实验：在 halfcheetah/hopper/walker2d 三个环境（各 4 个任务）上，对比无引导、无离线增强等变体，共 **约 12 组消融**。
  - 附录 Adroit 补充实验：IQL 基础方法下 CFDG 与 EDIS 在 3 个任务上的比较。
  - 数据分布分析：t-SNE 可视化 + JS 散度定量比较生成数据与在线数据的对齐程度。
- **实验充分性与公平性**：实验覆盖多个主流 O2O RL 算法、多种难度任务以及复杂的灵巧手环境，并通过统一随机种子、标准化评估、相同离线预训练步骤等保证公平性。消融实验清晰验证了各组件的作用，整体实验设计较为充分。

### 6. 主要结论与发现
- CFDG 能够同时高质量地增强在线数据和离线数据，且生成数据与在线策略的分布更接近（JS 散度更低）。
- 将 CFDG 集成到 IQL、PEX、APL 三种代表性 O2O RL 算法中,在 D4RL Locomotion 任务上平均性能提升达 **11%–15%** ，在 AntMaze 任务上同样取得显著提升，在 Adroit 任务上相比基线和 EDIS 提升超过 **50%**。
- 在与其他模型增强方法（SynthER, EDIS）的直接对比中，CFDG 在所有 12 个 Locomotion 任务上均取得最优的聚合性能。
- 消融实验证实：无分类器指导扩散和同时对两种数据增强均是性能提升的关键因素。

### 7. 优点
- **方法简洁新颖**：首次将无分类器引导扩散用于 O2O RL，无需额外训练分类器，简化了流程并能适应不同任务的数据分布变化。
- **双重数据增强视角**：突破以往仅增强离线数据的思路，同时对在线和离线数据建模和增强，更有效地引导策略探索与稳定。
- **通用性与即插即用**：方法可直接嵌入现有主流 O2O RL 框架（IQL/PEX/APL），无需大幅修改算法本身。
- **实验扎实全面**：覆盖多种任务、多种基线、充分的消融与定性定量分析（t-SNE + JS 散度），结论说服力强。

### 8. 不足与局限
- **离线数据集依赖**：方法效果受限于离线数据的质量和代表性，若离线数据有偏，可能影响生成数据的有效性。
- **额外的计算开销**：引入扩散模型带来不可忽视的训练时间和 GPU 负担，虽然在文中给出，但在资源敏感场景中仍是限制因素。
- **超参数敏感性**：方法引入了引导强度 $w$、合成数据比例、更新频率等多个超参数，文中仅给出了统一配置，未详细分析其敏感性和跨任务调优难度。
- **环境限制**：实验基于 D4RL 等基于状态的（state-based）连续控制任务，尚未展示在更复杂的基于图像（pixel-based）或真实机器人系统上的应用效果，泛化到高维观测场景仍需验证。

（完）
