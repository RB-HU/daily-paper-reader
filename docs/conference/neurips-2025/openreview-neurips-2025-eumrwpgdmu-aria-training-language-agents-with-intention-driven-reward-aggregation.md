---
title: "ARIA: Training Language Agents with Intention-driven Reward Aggregation"
title_zh: ARIA：通过意图驱动的奖励聚合训练语言智能体
authors: "Ruihan Yang, Yikai Zhang, Aili Chen, Xintao Wang, Jiangjie Chen, Siyu Yuan, Deqing Yang, Yanghua Xiao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=eumRwpgdMU"
tags: ["query:fla"]
score: 9.0
evidence: 提出ARIA，通过在意图空间聚合奖励来强化学习训练语言智能体，是一种自主智能体后训练技术。
tldr: 本文针对语言智能体在开放式环境中强化学习因动作空间巨大导致奖励稀疏的问题，提出ARIA方法。通过将语言动作投影到意图空间并聚合奖励，降低方差，提高训练效率。实验表明ARIA显著提升智能体在谈判等任务中的性能，为基于强化学习的智能体后训练提供了有效解决方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1429, \"height\": 560, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 666, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1174, \"height\": 351, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1263, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1270, \"height\": 397, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-eumrwpgdmu/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1435, \"height\": 1067, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 603, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 757, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1008, \"height\": 317, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1368, \"height\": 1704, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1447, \"height\": 530, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 825, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-eumrwpgdmu/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 805, \"height\": 218, \"label\": \"Table\"}]"
motivation: 开放式语言动作环境中奖励极度稀疏，方差大，阻碍语言智能体的强化学习训练。
method: 提出ARIA，将自然语言动作投影到意图空间，聚合意图奖励以降低方差。
result: 在谈判和问答游戏等任务上，ARIA训练的智能体性能显著优于基线。
conclusion: ARIA解决了语言智能体RL训练中的奖励稀疏问题，为多场景智能体后训练奠定基础。
---

## Abstract
Large language models (LLMs) have enabled agents to perform complex reasoning and decision-making through free-form language interactions. However, in open-ended language action environments (e.g., negotiation or question-asking games), the action space can be formulated as a joint distribution over tokens, resulting in an extremely large and combinatorial action space. Sampling actions in such a space can lead to extreme reward sparsity, which brings large reward variance, hindering effective reinforcement learning (RL). To address this, we propose **ARIA**, a method that **A**ggregates **R**ewards in **I**ntention space to enable efficient and effective language **A**gents training. ARIA aims to project natural language actions from the high-dimensional joint token distribution space into a low-dimensional intention space, where semantically similar actions are clustered and assigned shared rewards. This intention-aware reward aggregation reduces reward variance by densifying reward signals, fostering efficient and effective policy optimization. Extensive experiments demonstrate that ARIA not only significantly reduces gradient variance, but also delivers substantial performance gains of average 9.95% across four downstream tasks (e.g., negotiation and text-based games), consistently outperforming strong offline and online RL baselines.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义
- **研究动机**：语言智能体在开放式语言动作环境（如谈判、问答游戏）中，动作空间是词表大小与序列长度的指数组合，导致奖励信号极度稀疏且方差极大，严重阻碍强化学习的有效训练。
- **整体含义**：本文旨在解决因动作空间爆炸带来的奖励稀疏与高方差问题，通过将语言动作从高维词元空间投影到低维意图空间并聚合奖励，使训练信号更密集、稳定，从而提升语言智能体的策略学习效率与最终表现。

### 2. 方法论
- **核心思想**：语义投影与意图驱动的奖励聚合。将自然语言动作映射到语义相似的意图簇中，使同一簇内的动作共享聚合后的奖励，以此降低奖励方差。
- **关键技术细节**：
  - **意图空间构建**：采用预训练编码器（`text-embedding-3-small`）将动作与观测转化为语义向量，再用层次凝聚聚类划分成$k$个簇，形成意图空间$C_k$。
  - **奖励聚合**：对历史-动作对按时间折扣分配轨迹奖励，再对属于同一意图标签$(\tilde{h},\tilde{a})$的所有对求平均值，得到聚合奖励$\tilde{R}^{(k)}$，并作为优势估计用于策略梯度。
  - **奖励导向的粒度选择**：提出`SplitScore`指标衡量簇数从$k$增至$k+1$时奖励的绝对变化，配合自动早停准则（阈值$\epsilon=0.01$，窗口$\tau=10$）选择最优簇数，避免传统聚类指标偏向过粗的划分。
  - **策略优化**：使用离线REINFORCE算法，最大化$\mathbb{E}\left[\sum_t \log \pi_\theta(a_t|h_t) \cdot \tilde{A}(h_t, a_t)\right]$。
  - **理论分析**：证明聚合后的优势$\tilde{A}$方差小于原始优势$A$，且策略梯度估计方差更小；在动作满足$\epsilon$-互模拟的条件下，引入的偏差有界为$O(\epsilon)$，从而在偏差-方差权衡中获得更优的训练稳定性与收敛速度。

### 3. 实验设计
- **任务与环境**：
  - 单智能体游戏：《二十问》（从157个词中猜词）和《猜城市》（从100个城市中猜城），与Oracle（GPT-4）交互，最多20轮，奖励为猜对得1，否则0。
  - 对抗游戏：《讨价还价》（分配固定金额，轮次折扣）和《谈判》（买卖双方议价），双方交替行动，胜率评估。
- **基准对比方法**：
  - 离线方法：BC（行为克隆）、Trajectory-wise DPO、Step-wise DPO、SPAG。
  - 在线方法：ArCHer（层次RL）、StarPO（GRPO）。
- **模型与评估**：策略模型为Llama-3-8B-Instruct；对手模型使用GPT-4o、DeepSeek-V3、Claude-3.5；单智能体任务评估200局平均奖励（成功率），对抗任务评估48种配置下各25局的胜率；ARIA迭代训练三轮，每轮收集1000局数据。
- **额外实验**：在线ARIA扩展（用聚合奖励初始化奖励模型）、消融实验（去掉聚合、去掉折扣等）、嵌入模型消融、阈值$\epsilon$消融、模型泛化（Qwen2.5-7B/-1.5B）。

### 4. 资源与算力
- **硬件配置**：所有实验均使用8块NVIDIA A100-80GB GPU。
- **训练设置**：离线训练时，单智能体收集1000条轨迹，对抗场景收集2000条轨迹（1000局自对弈），训练3个epoch；在线训练迭代150次，每次32个游戏。策略模型采用LoRA微调（rank=8）。论文未提供总训练时长，但给出了详细的超参数表。

### 5. 实验数量与充分性
- **实验组数**：覆盖4个任务（两种类型）、两大类基线（共8种方法）、3轮迭代、在线与离线两种模式，以及奖励方差分析、消融研究、阈值/嵌入/模型泛化等多项分析实验。
- **充分性与公平性**：所有方法使用相同的数据量或交互次数，统一LoRA微调配置，对抗对手固定，并提供了统计显著性检验（p值<0.05）。实验设计全面，对比公平，结论可靠。

### 6. 主要结论与发现
- ARIA在所有任务上平均性能提升9.95%，在对抗游戏中胜率最高（如迭代3轮后讨价还价58.01%，谈判48.80%），单智能体任务中奖励显著提高（猜城市从13.50%提升至36.00%）。
- 奖励聚合使奖励方差大幅下降（如图4），策略损失收敛更快，且聚合带来的方差降低与偏差可控是性能提升的关键。
- 方法可迭代持续提升（边际收益递减），并能泛化至其他基础模型（如Qwen系列），具有模型无关性。
- 在在线扩展中，ARIA借助初始低方差信号和动态更新的奖励模型，实现了比现有在线方法更快的收敛和更高回报。

### 7. 优点
- **创新性强**：首次在语言智能体强化学习中引入语义投影和意图空间奖励聚合，有效解决开放式动作空间的奖励稀疏难题。
- **理论扎实**：给出方差降低和偏差有界的理论证明，为方法提供了严谨支撑。
- **实验全面**：涵盖单/双人、合作/对抗、离线/在线等多种设置，对比多种强基线，验证充分。
- **工程实用**：自动化粒度选择、低算力需求（单次训练仅需8张A100）、与模型无关，易于扩展。

### 8. 不足与局限
- **依赖嵌入质量**：若嵌入模型无法准确捕捉细粒度语义差异，聚类可能粗糙或错配，影响聚合效果。
- **离散意图假设**：方法假设意图是离散且可分离的，在目标重叠或连续意图的任务中可能失效，不支持软分配或连续意图表征。
- **任务范围**：实验仅在4个特定游戏类环境中验证，未涉及更复杂的真实世界对话或开放域任务，泛化性仍需进一步检验。
- **对手限制**：对抗实验中对手模型固定，未测试面对动态适应对手时的鲁棒性。

（完）
