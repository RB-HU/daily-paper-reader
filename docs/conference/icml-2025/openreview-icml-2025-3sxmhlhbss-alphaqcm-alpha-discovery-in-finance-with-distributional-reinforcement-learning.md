---
title: "AlphaQCM: Alpha Discovery in Finance with Distributional Reinforcement Learning"
title_zh: AlphaQCM：金融领域中使用分布式强化学习的因子发现
authors: "Zhoufan Zhu, Ke Zhu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=3sXMHlhBSs"
tags: ["query:fla"]
score: 4.0
evidence: 将分布式强化学习应用于金融因子发现，并非LLM后训练
tldr: 金融领域中发现协同公式化因子具有挑战性。本文将因子发现过程建模为非平稳和奖励稀疏的马尔可夫决策过程，提出AlphaQCM方法，通过Q网络和分位数网络学习Q函数和分位数，然后应用分位数条件采样高效搜索协同因子。实验展示了该方法在真实市场数据上的有效性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-3sxmhlhbss/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 854, \"height\": 483, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-3sxmhlhbss/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 861, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-3sxmhlhbss/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1730, \"height\": 531, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 851, \"height\": 1061, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 864, \"height\": 539, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 872, \"height\": 490, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 861, \"height\": 704, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 807, \"height\": 523, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1801, \"height\": 1144, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1149, \"height\": 878, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1177, \"height\": 477, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1113, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-3sxmhlhbss/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1194, \"height\": 560, \"label\": \"Table\"}]"
motivation: 应对金融因子发现中的非平稳性和奖励稀疏挑战。
method: 提出AlphaQCM，利用分布式强化学习学习Q函数和分位数网络。
result: 在真实金融数据上有效发现协同因子。
conclusion: AlphaQCM为金融因子发现提供了一种有效的序列决策方法。
---

## Abstract
For researchers and practitioners in finance, finding synergistic formulaic alphas is very important but challenging. In this paper, we reconsider the discovery of synergistic formulaic alphas from the viewpoint of sequential decision-making, and conceptualize the entire alpha discovery process as a non-stationary and reward-sparse Markov decision process. To overcome the challenges of non-stationarity and reward-sparsity, we propose the AlphaQCM method, a novel distributional reinforcement learning method designed to search for synergistic formulaic alphas efficiently. The AlphaQCM method first learns the Q function and quantiles via a Q network and a quantile network, respectively. Then, the AlphaQCM method applies the quantiled conditional moment method to learn unbiased variance from the potentially biased quantiles. Guided by the learned Q function and variance, the AlphaQCM method navigates the non-stationarity and reward-sparsity to explore the vast search space of formulaic alphas with high efficacy. Empirical applications to real-world datasets demonstrate that our AlphaQCM method significantly outperforms its competitors, particularly when dealing with large datasets comprising numerous stocks.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义
- **研究背景**：在量化金融中，寻找具有协同效应的公式化 alpha 因子（formulaic alphas）是长期挑战。传统方法（如遗传编程 GP）搜索空间巨大，近年提出的 RL 方法（如 AlphaGen）虽性能领先，却面临**非平稳性**（奖励函数随 alpha 池更新而动态变化）和**奖励稀疏**（大多数生成的 alpha 无贡献、得分为零）两大理论-实践鸿沟，导致训练低效且不稳定。
- **核心问题与目标**：如何设计一种强化学习算法，在非平稳、奖励稀疏的序列决策环境中高效发现一组协同的公式化 alpha，并最终组合成可解释的线性元 alpha 以预测股票收益。
- **整体含义**：本文将 alpha 发现重新定义为带有非平稳和奖励稀疏特性的马尔可夫决策过程（MDP），并利用分布式强化学习（Distributional RL）与分位数条件矩（QCM）方法相结合，提出 AlphaQCM 方法，旨在从潜在有偏的分位数中估计无偏方差，并以此作为探索奖励，缓解非平稳和奖励稀疏，从而显著提升因子挖掘的效能与稳定性。

## 2. 论文提出的方法论
- **问题建模为 MDP**：
  - **状态**：当前生成的 alpha 表达式的 token 序列（基于逆波兰表示 RPN，最大长度 20）。
  - **动作**：从有限 token 集合中选择一个操作符或特征，部分动作受当前状态约束以保证表达式有效性。
  - **转移**：确定性追加 token，遇到终止符 SEP 或达到最大长度则结束该 episode。
  - **奖励**：零奖励针对未完成序列或无效表达式；有效表达式则将其加入 alpha 池，通过线性模型筛选最多 P 个主 alpha 并计算元 alpha 的信息系数（IC），奖励定义为加入新 alpha 后元 alpha IC 的增量。若 IC 下降或不变则奖励为 0，算法设计详见 Algorithm 1。
  - **非平稳性**：每当一个有效 alpha 被加入 alpha 池，奖励函数随之改变，因为类似 alpha 在后续 episode 中可能不再带来提升。
  - **奖励稀疏**：只有在 episode 结束且 alpha 有效时才可能获得非零奖励，且多数 alpha 因低信噪比得到零回报。
- **AlphaQCM 核心方法**：
  - **分位数学习**：采用 IQN（Implicit Quantile Networks）作为分布式 RL 的骨干，通过一个分位数网络学习状态-动作值分布的分位数 \(\hat{\theta}_k(x,a)\)。
  - **Q 函数学习**：同时使用一个 DQN 风格的 Q 网络学习期望累积奖励 \(Q^*(x,a)\)。
  - **QCM 估计无偏方差**：基于 Cornish-Fisher 展开，将分位数估计量 \(\hat{\theta}_k\) 建模为均值、方差、偏度、峰度的线性回归（式4），利用普通最小二乘（OLS）回归得到方差估计 \(\hat{h}(x,a)\)。从理论上证明，即使分位数估计因非平稳性存在偏差，通过 QCM 得到的方差仍保持一致性（Proposition 3.1），这是传统分位数方差估计所不具备的优势。
  - **探索引导**：在动作选择时，使用 \(a_t = \arg\max_{a} [\hat{Q}(x_t,a) + \lambda\sqrt{\hat{h}(x_t,a)}]\) 的形式，以估计的方差（不确定性）作为内在奖励探索，有效引导智能体访问高不确定性状态，缓解奖励稀疏并加速适应非平稳环境。
  - **网络架构**：分位数网络和 Q 网络均使用 LSTM 特征提取器处理 token 序列，分位数网络额外包含 τ 嵌入层。训练采用分位数时序误差和均方误差损失，并结合优先经验回放提高采样效率。
  - **超参数**：λ 控制探索程度，alpha 池大小 P 分别取 10、20、50、100 并匹配不同训练步数（250k~400k）。

## 3. 实验设计
- **数据集**：中国 A 股市场三个不同规模的股票池。
  - CSI 300：最大 300 只股票。
  - CSI 500：最大 500 只股票。
  - Market：沪深两市全部股票。
  时间分割：训练集 2010/01/01–2019/12/31，验证集 2020/01/01–2020/12/31，测试集 2021/01/01–2022/12/31。额外增加美国 S&P 500 数据集检验泛化性。
- **评估指标**：元 alpha 的样本外信息系数（IC）。
- **对比方法**（四大类）：
  - 人工设计因子：Alpha101（101 个公式化 alpha 线性组合）。
  - 机器学习非公式化 alpha：MLP、XGBoost、LightGBM。
  - 遗传编程 GP：GP w/o filter 和 GP w/ filter（互 IC 过滤）。
  - 强化学习方法：PPO w/ filter（带互 IC 过滤的 PPO）和 AlphaGen（基于 PPO 的最新强基线）。
- **消融与附加实验**：
  - 方差作用：无方差 (λ=0)、vanilla 分位数方差、QCM 方差。
  - 骨干网络选择：QRDQN 对比 IQN。
  - 领域知识影响：用 Alpha101 表达式初始化回放记忆。
  - 参数规模：小参数 AlphaQCM（~297k）、大参数 AlphaGen（~565k）对比原始规模。
  - 模型架构：用 MAMBA 替换 LSTM。
  - 测试集扩展：将测试期延至 2024/12/31。

## 4. 资源与算力
- 文中**未明确说明**所用 GPU 型号、数量以及具体的训练时长。超参数部分提到训练总步数依据 alpha 池大小在 250,000 至 400,000 之间，但未提供硬件配置或运行时间估算。因此无法从论文中获取确切算力开销信息。

## 5. 实验数量与充分性
- **实验数量充足**：在 3 个数据集上与 7~8 种基线方法比较（每组 10 个随机种子），并附加约 6 类消融/扩展实验，涵盖方差估计、骨干网络、领域知识、模型容量、架构替代、测试时域扩展等，覆盖面广。
- **充分性与公平性**：
  - 所有方法共享同一数据划分和评估标准，超参数（如网络隐藏维度）在 AlphaGen 和 AlphaQCM 间保持一致以控制变量；在参数规模对比时单独调整保证公平。
  - 消融实验中显式比较了无方差、vanilla 方差与 QCM 方差，能清晰归因于 QCM 方法的贡献。
  - 随机种子多次重复并报告均值和标准差，统计可靠性较高。
- 整体实验设计严谨，能充分支持方法有效性的论证。

## 6. 论文的主要结论与发现
- **AlphaQCM 显著超越现有方法**：在所有三个 A 股测试集上，AlphaQCM 均取得最高的样本外 IC（CSI 300: 8.49%, CSI 500: 9.55%, Market: 9.16%），尤其在大规模股票池（Market）上优势更突出，且 IC 标准差相对较小，收敛更稳定。
- **QCM 方差是关键**：使用 QCM 估计的无偏方差作为探索激励，比不使用方差或使用 vanilla 分位数方差均带来更优的 IC 和更低的波动，证明了处理非平稳性和奖励稀疏的有效性。
- **IQN 骨干优于 QRDQN**：以 IQN 为骨干的 AlphaQCM 在多数场景下优于 QRDQN 版本，但差异并非巨大。
- **领域知识的影响**：用专家设计的 alpha 初始化回放记忆能获得前期训练速度提升，但最终完全数据驱动的模型能收敛到更高的 IC，建议追求最终性能时不引入领域知识初始化。
- **模型对参数规模鲁棒**：无论参数规模缩小（~297k）还是 AlphaGen 放大，AlphaQCM 始终优于同等规模的 AlphaGen，说明性能提升源于方法而非容量。
- **泛化性验证**：在 S&P 500 数据集上，AlphaQCM 同样取得最高 IC，展现了跨市场适用性。

## 7. 优点
- **创新问题建模**：将 alpha 发现抽象为具有非平稳性和奖励稀疏性的 MDP，清晰指出当前 RL 方法的缺陷。
- **方法巧妙结合**：将分布式 RL 与 QCM 统计方法融合，利用分位数回归获得无偏方差，用于指导探索，解决了非平稳环境下的方差估计偏差问题，且有理论一致性保证。
- **实现细节扎实**：网络设计（LSTM+τ 嵌入）、动作掩码、优先经验回放等工程决策合理，并与基线方法保持相同网络超参数，增强可比性。
- **实验评估全面**：多规模股票池、多类基线、丰富的消融和扩展实验，加上开源代码，显著增强了结果的可信度和可复现性。
- **实用性强**：产生的 alpha 具有公式化、可解释、可组合的特点，可直接应用于量化策略，且方法对市场效率差异表现出鲁棒性。

## 8. 不足与局限
- **算力与效率未披露**：论文未报告训练使用的硬件（GPU 类型、显存）及训练时间，不利于读者评估计算成本与落地可行性。
- **测试时间段较短**：原始测试集仅两年（2021-2022），尽管扩展到 2024 年后结论仍成立，但模型在极端市场（如重大金融危机）下的稳健性未能考察。
- **市场覆盖有限**：实验主要集中在中国 A 股和美国 S&P 500，未涉及其他新兴市场或多资产类别，泛化能力仍有待拓展。
- **alpha 池组合形式单一**：奖励函数和元 alpha 构建均依赖线性模型，可能限制捕获 alpha 间复杂非线性协同的能力。
- **超参数敏感性**：λ（探索调节系数）、P（池大小）等需要针对数据集调整，且论文中 λ 设为 0.5/1/2 择一，缺少更系统的敏感性分析。
- **依赖 QCM 近似假设**：QCM 方法的无偏方差估计依赖于 Cornish-Fisher 展开和一定的回归假设（如 Assumption C.1, C.2），在分位数噪声较大时估计质量可能下降，论文未深入讨论失效场景。

（完）
