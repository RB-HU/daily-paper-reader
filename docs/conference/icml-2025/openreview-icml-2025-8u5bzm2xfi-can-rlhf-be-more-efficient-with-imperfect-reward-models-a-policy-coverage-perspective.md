---
title: Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective
title_zh: 不完美奖励模型能否提升RLHF效率：策略覆盖视角
authors: "Jiawei Huang, Bingcong Li, Christoph Dann, Niao He"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=8u5bzM2XfI"
tags: ["query:fla"]
score: 8.0
evidence: 通过不完美奖励模型迁移提高RLHF效率，与智能体后训练相关
tldr: 针对在线RLHF样本效率低的问题，本文发现KL正则化赋予一种新颖性质：策略次优性可刻画其对最优策略的覆盖程度。基于此提出迁移策略优化算法TPO，能有效利用不完美但相关的奖励模型加速学习，显著降低在线交互成本。理论证明和实验均验证其优势，为将RLHF高效应用于金融大模型的对齐训练提供了新途径，是智能体后训练的有力工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-8u5bzm2xfi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 743, \"height\": 633, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-8u5bzm2xfi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1312, \"height\": 1060, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1713, \"height\": 501, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1715, \"height\": 495, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 856, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1703, \"height\": 1210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 849, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-8u5bzm2xfi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 852, \"height\": 245, \"label\": \"Table\"}]"
motivation: 在线RLHF样本效率低，现有研究未充分挖掘利用不完美奖励模型加速学习的潜力。
method: 基于KL正则化下策略覆盖性质，提出迁移学习原理和TPO算法。
result: 理论证明TPO比从人类反馈学习更高效，实验也验证了其样本效率优势。
conclusion: 为在线RLHF提供了新的迁移学习视角，可加速智能体后训练在金融等领域的应用。
---

## Abstract
Sample efficiency is critical for online Reinforcement Learning from Human Feedback (RLHF). While existing works investigate sample-efficient online exploration strategies, the potential of utilizing misspecified yet relevant reward models to accelerate learning remains underexplored. This paper studies how to transfer knowledge from those imperfect reward models in online RLHF. We start by identifying a novel property due to KL-regularization in the RLHF objective: \emph{a policy's coverability of the optimal policy is captured by its sub-optimality}. Building on this insight, we propose novel transfer learning principles and a theoretical algorithm---**T**ransfer **P**olicy **O**ptimization (**TPO**)---with provable benefits compared to standard online learning. Empirically, inspired by our theoretical findings, we develop a win-rate-based transfer policy selection strategy with improved computational efficiency. Moreover, our empirical transfer learning technique is modular and can be integrated with various policy optimization methods, such as DPO, IPO and XPO, to further enhance their performance. We validate the effectiveness of our method through experiments on summarization tasks.

---

## 论文详细总结（自动生成）

# 论文详细总结：Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective

## 1. 论文的核心问题与整体含义
- **研究背景**：在线强化学习从人类反馈（RLHF）在微调大语言模型（LLM）中取得了巨大成功，但其样本效率（即所需人类偏好标注数量）是一大瓶颈。现有工作主要聚焦于设计高效探索策略来降低样本复杂度，而**忽略了利用现成的不完美奖励模型进行知识迁移**的巨大潜力。
- **核心问题**：在在线RLHF中，当存在多个质量未知的、不完全匹配人类偏好的源奖励模型（如其他任务训练的奖励模型、LLM评分、启发式规则等）时，能否利用这些“不完美”的奖励模型来**加速学习最优策略、进一步降低对人类标注的需求**？
- **整体含义**：本文从**策略覆盖（policy coverage）** 的全新视角，揭示了KL正则化在RLHF中赋予的一个独特结构性质：**一个策略对最优策略的覆盖程度，可由其自身次优性（sub‑optimality）刻画**。基于此，提出了一整套理论和实践方案，证明并实现了利用不完美奖励模型提升RLHF样本效率的可能性。

## 2. 方法论
### 2.1 核心理论洞察
- **KL正则化带来的结构性质**（Lemma 3.1）：对于任何满足一定条件的策略π，其对最优策略π*的覆盖系数 \( \text{Cov}_{\pi^*|\pi} \) 可以被其上界控制为：
  \[
  \text{Cov}_{\pi^*|\pi} \leq 1 + \kappa(e^{2R/\beta}) \cdot \frac{J_\beta(\pi^*) - J_\beta(\pi)}{\beta},
  \]
  其中 \( J_\beta \) 是KL正则化策略值，κ是近线性函数。这意味着**策略值越高，它对最优策略的覆盖就越好**，从而调和了RLHF中探索与利用的矛盾。
- **两条迁移学习原则**：
  1. **基于策略值选择迁移策略**：直接挑选候选策略中估计值最高者进行迁移，因其必然提供良好覆盖。
  2. **“自我迁移学习”（Self‑Transfer Learning）**：从在线交互数据中，通过离线RL技术（RPO）蒸馏出一个策略 \( \pi_{\text{Dstl}} \)，该策略收敛到最优策略的速率优于已有的在线RLHF遗憾界，且**不依赖状态‑动作空间大小或策略类的结构复杂度**（Theorem 3.2），可作为上乘的迁移候选。

### 2.2 理论算法：TPO
- **算法框架（Alg. 1, Alg. 2）**：将总迭代步数T分成K个块，每块N步。其中前αN步调用一个无遗憾在线学习算法（如XPO），后(1-α)N步使用**迁移策略选择子程序TPS**选出的策略进行采样。
- **TPS的设计**：
  - 对源奖励模型诱导的策略 \( \pi^*_{r_w} \)，采用UCB风格的**乐观价值估计**，利用出现次数N(w;D)构造置信上界。
  - 对自我迁移策略 \( \pi_{\text{Dstl}} \)，采用**悲观价值下界估计**，确保它进步时能被有效利用。
  - 最终选择估计值最高的策略进行迁移。
- **理论保障（Theorem 4.4）**：在无遗憾在线学习器和适当α下，TPO的总遗憾在早期阶段可降至 \( \tilde{O}(W\sqrt{T}) \)（W为源任务数，远小于策略类复杂度），后期由于自我迁移学习收敛为 \( \tilde{O}(\sqrt{T}) \)，**彻底消除了对复杂度的依赖，且即使源任务不完美，也只需付出与源任务质量相关的有限代价**。

### 2.3 实用算法：Empirical TPO
- **从策略值转向胜率**（Lemma 5.1）：定理揭示胜率可用于构造覆盖系数的下界，因此可以**用胜率代替策略值作为迁移选择准则**，大幅降低计算开销。
- **经验版算法（Alg. 3）**：
  - 采用迭代在线学习框架，在每轮采样前，通过**以当前学习策略为比较对象的胜率UCB**，从源策略与学习策略中选择胜率最高者进行实际采样。
  - 学习策略可使用任意策略优化方法（如DPO、IPO、XPO）更新，**模块化强**。
  - 当源任务质量高时自动迁移，否则退化为标准在线学习，避免了被低质源模型束缚。

## 3. 实验设计
- **任务与数据集**：文本摘要任务，使用**XSum数据集**。
- **模型**：基于**T5‑small (80M)** 进行微调。模拟人类偏好的真实奖励 \( r^* \) 采用由 **Llama3‑8B** 蒸馏得到的奖励模型生成。
- **源奖励/策略池**（4个）：ROUGE‑Lsum 分数、BERTScore、T5‑base (250M) 和 T5‑large (770M) 的对数概率作为奖励。
- **对比基线**：
  1. **无迁移**：标准迭代DPO（只使用在线学习策略）。
  2. **纯利用最差源**：始终迁移ROUGE‑Lsum。
  3. **纯利用最佳源**：始终迁移T5‑large。
- **评测指标**：以 \( r^* \) 衡量的**胜率（win rate）**，即生成回复获得更高奖励的频率。

## 4. 资源与算力
- 文中明确提及实验在 **4张H100 GPU** 上进行，总batch size为64。
- 学习率 **5e‑5**，采用余弦退火调度。
- 迭代次数 K=3，每块数据量 N=10k，每次采样使用 Best‑of‑32 生成回复。

## 5. 实验数量与充分性
- **主要对比实验**：在3种Alg PO实例化下各执行1次主实验，共**3组**（DPO、IPO、XPO），每组均与3个基线对比，使用**3个随机种子**报告均值和95%置信区间。
- **过程分析**：对DPO版本，额外统计了**每轮各源任务被选择的次数**及**各个源策略相对于学习策略的真实胜率**变化（图2），验证了算法能够自动从迁移切换回在线学习。
- **充分性与客观性**：实验覆盖了摘要领域、多种优化器，并与标准基线和纯迁移边界对比，结果稳定。但并未在其他任务、更大模型或多样的偏好场景下测试，作者也声明了资源限制，整体是**中等充分且客观**的。

## 6. 主要结论与发现
- **理论发现**：KL正则化使策略值成为覆盖能力的有效指标，由此导出的自迁移学习能够获得**不依赖状态/动作空间大小的快速收敛速率**。
- **算法效果**：TPO在理论上可获得比标准在线RLHF更低的累积遗憾，且后期遗憾增长仅为 \( \tilde{O}(\sqrt{T}) \)。
- **实证验证**：经验版TPO在摘要任务上**显著优于不迁移的基准**，且能避免被低质量源任务误导，最终胜率**甚至超过纯利用最佳源任务**，证明了方法的有效性和鲁棒性。

## 7. 优点
- **新颖的理论框架**：首次从策略覆盖视角揭示KL正则化对RLHF迁移学习的独特优势，统一了探索与利用。
- **坚实的理论保证**：给出了完整的遗憾界分析，阐明迁移收益以及自迁移的强大能力。
- **算法可落地**：经验版算法计算高效、模块化，可直接嵌入现有DPO/IPO/XPO等流程。
- **自动源质量筛选**：通过胜率UCB自动识别高质量源，及时切换回在线学习，实用性强。

## 8. 不足与局限
- **实验范围有限**：仅在T5‑small和单一摘要数据集上验证，未在更大模型（>1B）或更多任务（对话、指令遵循）上测试，推广性待考察。
- **奖励模拟偏差**：真实人类偏好由Llama3‑8B奖励模型模拟，而非真实人类标注，实验结果可能与真实场景存在差距。
- **理论假设较强**：要求策略类的有限覆盖、有界策略比率等，可能在实际大模型场景下不能严丝合缝满足。
- **偏好模型假定**：基于Bradley‑Terry模型，目前未拓展到更一般的偏好模型（如纳什学习等）。
- **迁移候选构建**：源策略采用Best‑of‑N近似，可能引入额外分布偏移。

（完）
