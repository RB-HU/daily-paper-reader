---
title: Learning Strategic Language Agents in the Werewolf Game with Iterative Latent Space Policy Optimization
title_zh: 通过迭代潜在空间策略优化学习策略语言智能体
authors: "Zelai Xu, Wanjun Gu, Chao Yu, Yi Wu, Yu Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=N2mOBiSqhc"
tags: ["query:fla"]
score: 9.0
evidence: 结合博弈论与LLM微调，通过迭代策略优化训练策略语言智能体
tldr: 针对大语言模型智能体在策略语言游戏（如狼人杀）中存在的动作分布偏差与文本动作空间探索不足问题，本文提出Latent Space Policy Optimization (LSPO)框架，迭代地在潜在空间优化策略并微调LLM。在狼人杀游戏中，LSPO显著提升了智能体的策略水平，表明将语言交互与策略决策联合优化是构建高水平对话智能体的有效途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-n2mobisqhc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1736, \"height\": 811, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-n2mobisqhc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1742, \"height\": 384, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-n2mobisqhc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1735, \"height\": 388, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1772, \"height\": 434, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1575, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 860, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 851, \"height\": 239, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 849, \"height\": 236, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1400, \"height\": 687, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-n2mobisqhc/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1354, \"height\": 192, \"label\": \"Table\"}]"
motivation: LLM智能体在需要自由语言交互的策略游戏中性能不佳，存在偏见和探索局限。
method: LSPO在潜在空间进行博弈论策略优化，并迭代微调LLM以构建策略智能体。
result: 在狼人杀游戏中显著提高胜率，优于现有LLM智能体。
conclusion: 为训练复杂语言交互环境中的战略智能体提供了新框架。
---

## Abstract
Large language model (LLM) agents have recently demonstrated impressive capabilities in various domains like open-ended conversation and multi-step decision-making. However, it remains challenging for these agents to solve strategic language games, such as Werewolf, which demand both strategic decision-making and free-form language interactions. Existing LLM agents often suffer from intrinsic bias in their action distributions and limited exploration of the unbounded text action space, resulting in suboptimal performance. To address these challenges, we propose Latent Space Policy Optimization (LSPO), an iterative framework that combines game-theoretic methods with LLM fine-tuning to build strategic language agents. LSPO leverages the observation that while the language space is combinatorially large, the underlying strategy space is relatively compact. We first map free-form utterances into a finite latent strategy space, yielding an abstracted extensive-form game. Then we apply game-theoretic methods like Counterfactual Regret Minimization (CFR) to optimize the policy in the latent space. Finally, we fine-tune the LLM via Direct Preference Optimization (DPO) to align with the learned policy. By iteratively alternating between these steps, our LSPO agents progressively enhance both strategic reasoning and language communication. Experiment on the Werewolf game shows that our agents iteratively expand the strategy space with improving performance and outperform existing Werewolf agents, underscoring their effectiveness in free-form language games with strategic interactions.

---

## 论文详细总结（自动生成）

# 论文总结：Learning Strategic Language Agents in the Werewolf Game with Iterative Latent Space Policy Optimization

## 1. 研究动机与核心问题
- **问题背景**：大语言模型（LLM）智能体在开放对话、多步决策中表现出色，但在需要“策略决策+自由语言交互”的社交推理游戏（如狼人杀）中仍面临挑战。
- **现有方法局限**：
  - **内在偏差**：纯基于 prompt 的 LLM 代理会继承预训练数据的分布偏差，易被对手利用。
  - **动作探索不足**：狼人杀的动作空间是无限的文本空间，手动定义有限动作集或仅靠 LLM 生成候选动作无法充分探索策略空间。
- **研究目标**：提出一个结合博弈论方法与 LLM 微调的迭代框架，解决上述两个问题，构建能在自由语言博弈中表现优异的策略智能体。

## 2. 方法：迭代潜在空间策略优化（LSPO）
核心思想：虽然语言空间组合爆炸，但底层策略空间相对紧凑。LSPO 反复执行三个步骤：

### 2.1 潜在空间构建（Latent Space Construction）
- **策略生成**：让当前 LLM 智能体在不同角色间自对弈，生成多样化的发言动作。通过 prompt 要求 LLM 产生策略上不同的候选发言。
- **聚类**：用嵌入模型（如 text-embedding-3-small）将发言映射为向量，再通过 k-means 聚类形成离散的潜在策略空间。每个簇代表一种抽象策略。

### 2.2 潜在空间策略优化（Policy Optimization in Latent Space）
- **抽象博弈构建**：将原游戏转换成一个有限动作的扩展式博弈，其中发言动作被替换为对应的簇标签（潜在策略）。
- **博弈求解**：应用反事实遗憾最小化（CFR），用神经网络逼近遗憾值，通过自对弈学习近似纳什均衡策略，从而消除内在偏差。

### 2.3 潜在空间扩展（Latent Space Expansion）
- **偏好对齐**：利用 CFR 学习到的策略构建偏好数据集：对每个发言候选，用其对应潜在策略的遗憾值确定偏好标签（遗憾低者更优）。使用直接偏好优化（DPO）微调 LLM，使其语言输出与优化后的策略对齐。
- **空间更新**：用微调后的 LLM 重新生成发言并聚类，得到新的、更丰富的潜在策略空间，进入下一轮迭代。

**迭代流程**：重复上述步骤，逐步扩展潜在空间，同时策略不断优化，LLM 的语言能力也不断增强。

## 3. 实验设计

### 3.1 测试场景与基准
- **游戏环境**：7 人纯文本狼人杀（2狼、1预言家、1女巫、3村民），仅通过自然语言交互。
- **评估指标**：预测准确率（智能体对其他玩家角色的识别）和胜率。
- **对比方法**：
  - **ReAct**：基于 prompt 的推理-行动框架。
  - **ReCon**：递归反思的 prompt 方法（原用于阿瓦隆）。
  - **Cicero-like**：预定义 13 种原子动作，用 RL 学习动作选择，再 prompt 生成语言。
  - **SLA**：结合 LLM 候选生成与 RL 校准的狼人杀智能体。
- **消融实验**：分析去除微调、去除策略学习等对性能的影响；考察初始聚类数 k、DPO 超参数 β 的敏感性。

### 3.2 概念验证
- 在“石头剪刀布-斯波克-蜥蜴”游戏中，展示 LSPO 通过迭代扩展动作空间逐步学到纳什均衡，而其他方法因偏见或探索不足而失败。

## 4. 资源与算力
- **论文中没有明确说明 GPU 型号、数量或训练时长**。仅提及使用 Deep CFR 训练网络（缓冲大小 5×10^5，训练 1500 次迭代，批大小 4096），DPO 微调（学习率 1×10^-6，训练 2 轮，批大小 64）。嵌入使用 OpenAI API。算力成本未具体描述。

## 5. 实验数量与充分性
- **概念验证实验**：1 组对比（多个方法）。
- **狼人杀主实验**：
  - 迭代性能评估：从迭代1到迭代3（部分到迭代5）的预测准确率和胜率变化（分别扮演狼人方和村民方）。
  - 与 4 个 SOTA 智能体对比（双方各 100 局）。
  - 潜在空间可视化分析（狼人、预言家的聚类演化）。
  - 消融实验：去除微调、去除策略学习；不同初始聚类数 k=1,2,3；DPO 超参数 β=0.05,0.1,0.2。
  - 案例展示：智能体生成的策略行为（狼人方：伪装预言家、转移怀疑；村民方：协调投票等）。
- **实验充分性**：实验设计覆盖了主要对比方法、多维度评估和鲁棒性测试，具备较好的客观性和可重复性。所有对比均设定为相同对手或对称角色互换，较为公平。

## 6. 主要结论与发现
- LSPO 能有效扩展潜在策略空间，智能体从简单策略（如单纯隐藏身份）逐步学会复杂策略（如伪装预言家、转移怀疑、协调投票）。
- 随迭代次数增加，预测准确率和胜率显著提升（如狼人方预测医生准确率提升，村民方预测狼人准确率提升）。
- LSPO 最终迭代的智能体在狼人方和村民方的胜率均超越所有基线（狼人方 73%，村民方 27%，总胜率 50%）。
- 消融实验证实策略学习和 DPO 微调两个组件不可或缺。

## 7. 优点
- **方法创新**：将自由形式语言动作离散化为潜在策略，使 CFR 等经典博弈算法可应用于对话环境。
- **闭环迭代**：策略优化与 LLM 对齐相互促进，逐步扩大策略空间，兼顾探索与求解。
- **实证充分**：多维度实验（可视化、预测准确率、胜率、消融）验证方法的有效性。
- **泛化潜力**：理论上可推广到其他需要自由语言交互的策略任务。

## 8. 不足与局限
- **算力描述缺失**：未说明计算资源需求，实际部署成本不明确。
- **现实环境局限**：仅限纯文本环境，忽略语音、表情等现实社交信号。
- **迭代收敛上界**：理论上至多需要词汇数^长度次迭代，实际收敛速度依赖聚类质量。
- **角色数量与扩展性**：实验仅在 7 人游戏中进行，更复杂的多人场景（如更多角色、更多阵营）尚未验证。
- **安全性考量**：论文提到技术可能被滥用于欺骗或操纵，但实验仅在封闭仿真中，未深入讨论实际防御措施。

（完）
