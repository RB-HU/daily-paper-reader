---
title: Evolutionary Distributed Training
title_zh: 进化分布式训练
authors: Yushu Jiang
date: 2025-05-11
pdf: "https://openreview.net/pdf?id=tESKKiKhVp"
tags: ["query:fla"]
score: 4.0
evidence: EDT在强化学习中展现潜力，并假设为后训练和对齐提供了多目标优化框架。
tldr: 本文提出进化分布式训练（EDT）方法，用评估、交叉和变异替代梯度同步，实现通信高效的分布式训练。在复杂多智能体环境中，EDT通过进化策略和奖励函数促进多样化探索，并被认为有望用于大模型的后训练和对齐，实现多目标优化。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-teskkikhvp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1074, \"height\": 768, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-teskkikhvp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1080, \"height\": 764, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-teskkikhvp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 935, \"height\": 740, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-teskkikhvp/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1307, \"height\": 740, \"label\": \"Figure\"}]"
motivation: 传统分布式训练依赖中心化梯度同步，通信开销大，且难以处理多目标和探索多样性。
method: 提出进化分布式训练（EDT），通过模型评估、配对交叉和变异实现通信高效的训练。
result: 在强化学习任务中，EDT优于传统训练，显示出适应性和策略多样性。
conclusion: EDT为分布式训练和后训练对齐提供了新的进化范式，具有广泛应用前景。
---

## Abstract
We introduce Evolutionary Distributed Training (EDT), a nature-inspired approach to distributed model training. EDT replaces centralized gradient synchronization with evaluation, pairwise model crossover, and mutation, enabling communication-efficient training across loosely connected devices. While early investigations show limited effectiveness in language model pretraining, EDT demonstrates strong potential in reinforcement learning (RL). In complex multi-agent environments, EDT facilitates diverse reward exploration and emergent strategies by evolving both policy and reward functions, outperforming traditional training in adaptability and strategic diversity. We also hypothesize EDT as a promising framework for post-training and alignment, offering optimization towards multi-objective, non-differentiable goals. This work positions EDT as a scalable, evolutionary recipe for distributed learning, offering early insights into where it may best fit within the deep learning landscape.

---

## 论文详细总结（自动生成）

## 论文总结：Evolutionary Distributed Training (EDT)

### 1. 研究动机与核心问题
- **核心动机**：探索如何将自然进化机制（去中心化、并行、两两繁殖）引入深度学习分布式训练，以替代传统依赖集中式梯度同步的范式。
- **背景问题**：传统分布式训练（如数据并行、DiLoCo）依赖中央聚合器同步梯度，通信开销大，且在强化学习（RL）中难以平衡探索与利用，在后训练阶段难以直接优化多目标、不可微分的目标。
- **整体含义**：提出进化分布式训练（EDT）作为一种外层训练框架，通过局部评估、配对交叉与变异实现通信高效的训练，初步探索其在预训练、RL 和后训练中的适用场景。

### 2. 方法论核心
EDT 的本质是用**评估—选择—交叉—变异**的循环代替中心化的梯度同步，具体流程因场景而异：

- **预训练设置（借 DiLoCo 改造）**
  - **适应度评估**：在每个外步，每个模型在固定验证集上计算困惑度。
  - **选择**：基于排名的选择，高适应度个体更可能成为父代。
  - **交叉**：对每对父代 \((A, B)\)，取它们更新前检查点的线性插值作为基础模型，平均两者的训练增量和动量缓冲区，然后应用带动量的 SGD + Nesterov 加速产生后代。
  - **局部训练**：每个 worker 用 AdamW 进行一定数量的内步训练。
- **强化学习设置（EDT-RL）**
  - **奖励 DNA**：将 18 种奖励函数的组合编码为长度为 6 的“DNA 序列”，每个 agent 拥有独特的奖励配置。
  - **策略训练**：每个 worker 使用 PPO 与自身奖励 DNA 进行一代训练。
  - **适应度**：通过群体内自对弈的双败淘汰赛计算 Elo 评分。
  - **交叉**：策略权重采用球面线性插值（SLERP）；DNA 均匀混合两个父代的奖励项。
  - **变异**：随机替换或引入新的奖励函数。
- **后训练框架（概念）**
  - 使用任意混合的自动指标、基准或偏好判断评估模型，通过交叉和变异探索行为变体，绕开同步瓶颈，旨在防止过拟合并鼓励能力涌现（未做实验）。

### 3. 实验设计
- **语言模型预训练**
  - **数据集**：TinyStories，基于 LLaMA 架构的 6M 参数模型。
  - **对比配置**：
    1. DiLoCo 基线（8 workers，每设备 batch size 1，400 内步）
    2. EDT 基于排名选择（同上设置）
    3. EDT 随机选择
    4. EDT 增加更新频率（100 内步，即 4×）
  - **评价指标**：验证集困惑度（perplexity）。
- **强化学习**
  - **环境**：类似《任天堂明星大乱斗》的平台格斗游戏 Gym。
  - **模型**：64k 参数的 Transformer 策略，PPO 训练。
  - **对比方法**：标准种群训练（PBT），使用固定、人工设计的奖励组合。
  - **设置**：8 workers 和 32 workers，运行约 40 代。
  - **评价指标**：基于自我对弈的 Elo 胜率。

### 4. 资源与算力
- 初期预实验在单笔记本 **RTX 4070** 上通过循环模拟多 worker 完成。
- 后续 RL 实验扩展至 **32 块 RTX 4080** 的集群。
- 后训练实验因大学基础设施政策限制**未能执行**。
- 文中未明确给出总训练时长或单次实验耗时，且所有实验均未报告多次重复情况。

### 5. 实验数量与充分性
- **实验组数**：预训练部分包含 4 种配置（仅作一次运行，无误差条）；RL 部分有 8 worker 与 32 worker 两种规模的对决，以及策略碎片的定性分析。
- **充分性评价**：明显不充分。预训练和 RL 实验均缺乏统计显著性检验，未展示标准差或置信区间，且作者承认因计算力限制未能多次运行。后训练完全是概念设计，零实验验证。此外，除 TinyStories 和单一格斗游戏环境外，未在更多基准上测试，结果的客观性与公平性难以保证。

### 6. 主要结论与发现
- 在 **LLM 预训练**中，EDT 效果显著差于 DiLoCo，且排名选择与随机选择无差别，增加交叉频率仅加速初期下降但不改变最终收敛水平，揭示 EDT 在知识聚合与梯度信息跨代传递上存在根本局限。
- 在 **RL** 中，EDT-RL 展现潜力：32 worker 下通过奖励 DNA 的变异与交叉，涌现出“地面猛击”等利用物理引擎的战术；早期有害的变异（如“地板是熔岩”惩罚）引导空中探索，随后被更优策略取代，体现了**探索→利用→再探索**的群体动态。
- EDT 的 **通信开销为 O(1)**，适合松散耦合的异步分布式训练。
- 作者假设 EDT 适用于后训练中的多目标对齐，但未给出任何实证。

### 7. 优点
- **新颖的思路**：将生物进化（两两繁殖、本地评估）明确引入分布式深度学习训练，区别于传统的加权平均聚合。
- **RL 中的探索优势**：通过进化可变的奖励函数，自然促进行为多样性，发现了人工设计难以预见的攻击策略。
- **通信效率**：O(1) 通信模式对网络带宽要求极低，可支持边缘设备或低质量连接场景。
- **框架灵活性**：可同时进化策略参数和奖励函数，且在后训练概念中可适配不可微目标。

### 8. 不足与局限
- **预训练适用性差**：EDT 完全无法匹敌基于梯度的集中式同步方法，使其在主流大模型预训练中价值有限。
- **实验规模与重复性不足**：仅在极小模型（6M、64k）和单款游戏上测试，无多次随机种子运行的误差报告，结论的可靠性存疑。
- **后训练仅属猜想**：整个第 4 节为纯概念性描述，无任何实验支持，削弱了论文的最终说服力。
- **环境与任务单一**：RL 实验仅在一个特定平台格斗游戏中进行，泛化到其他 RL 任务的能力未知。
- **缺乏理论分析**：未对交叉、变异操作的收敛性或群体多样性维持提供数学解释。
- **公平性对比不足**：RL 中对比的 PBT 仅使用固定奖励，未尝试其他先进的探索方法（如 Novelty Search），基线较薄弱。

（完）
