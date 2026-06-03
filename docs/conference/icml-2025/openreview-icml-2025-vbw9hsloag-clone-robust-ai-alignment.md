---
title: Clone-Robust AI Alignment
title_zh: 克隆鲁棒的AI对齐
authors: "Ariel D. Procaccia, Benjamin Schiffer, Shirley Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=vbw9hSlOaG"
tags: ["query:fla"]
score: 7.0
evidence: 提出克隆鲁棒的RLHF算法用于LLM对齐
tldr: RLHF中偏好数据集可能因对抗操纵或重复而不平衡。本文借鉴社会选择理论，引入近似克隆鲁棒性，要求添加近似重复项不显著改变学习到的奖励函数。首先证明标准RLHF算法不满足此性质，然后提出克隆鲁棒算法，在带重复的偏好数据集上取得更好性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-vbw9hsloag/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 451, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vbw9hsloag/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 447, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vbw9hsloag/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 795, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vbw9hsloag/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 796, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vbw9hsloag/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 715, \"height\": 431, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 615, \"height\": 158, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 792, \"height\": 160, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 942, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 945, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 862, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1068, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vbw9hsloag/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1286, \"height\": 221, \"label\": \"Table\"}]"
motivation: 解决RLHF数据集不平衡影响对齐质量的问题。
method: 提出基于社会选择理论的克隆鲁棒RLHF算法。
result: 在存在重复偏好时，所提算法优于标准RLHF。
conclusion: 克隆鲁棒性为RLHF提供了更稳定的对齐机制。
---

## Abstract
A key challenge in training Large Language Models (LLMs) is properly aligning them with human preferences. Reinforcement Learning with Human Feedback (RLHF) uses pairwise comparisons from human annotators to train reward functions and has emerged as a popular alignment method. However, input datasets in RLHF can be unbalanced due to adversarial manipulation or inadvertent repetition. Therefore, we want RLHF algorithms to perform well even when the set of alternatives is not uniformly distributed. Drawing on insights from social choice theory, we introduce robustness to approximate clones, a desirable property of RLHF algorithms which requires that adding near-duplicate alternatives does not significantly change the learned reward function. We first demonstrate that the standard RLHF algorithm based on regularized maximum likelihood estimation (MLE) fails to satisfy this property. We then propose the weighted MLE, a new RLHF algorithm that modifies the standard regularized MLE by weighting alternatives based on their similarity to other alternatives. This new algorithm guarantees robustness to approximate clones while preserving desirable theoretical properties.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究动机**：在利用人类反馈进行强化学习（RLHF）以对齐大语言模型（LLM）时，偏好数据集常因对抗操纵或无意重复而出现不平衡，即某些答案（或替代方案）以近似“克隆”的形式反复出现。
- **核心问题**：标准 RLHF 算法（基于正则化最大似然估计，MLE）对这种近似克隆很敏感，克隆的出现会显著改变学习到的奖励函数，从而影响对齐质量。
- **整体含义**：借鉴社会选择理论中的“独立于克隆”准则，定义一个适用于 RLHF 的“近似克隆鲁棒性”，并设计一个满足该性质的新算法，使得即使在数据集中增加近似的重复替代方案，奖励函数也不会发生剧烈变化。

## 2. 论文提出的方法论

- **核心思想**：为每个替代方案赋予一个权重，该权重反映其相对于其他替代方案的“唯一性”。相似替代方案权重低，独特替代方案权重高，从而在下游优化中抑制克隆的影响。
- **权重定义**：定义全替代方案空间 \(S\)，对于观察到的一组替代方案 \(M\)，\(y \in M\) 的权重 \(w_M(y)\) 等于 \(S\) 中离 \(y\) 最近（且按最近距离均分）的区域的体积占比。这等价于 Voronoi 图中 \(y\) 所对应区域的面积比例。
- **加权 MLE 目标函数**：  
  \[
  \hat{r}^w_D = \arg\min_r -\sum_{x_1,x_2\in M} w_M(x_1)w_M(x_2) \, p_D(x_1\succ x_2) \log\frac{e^{r(x_1)}}{e^{r(x_1)}+e^{r(x_2)}} + \frac{\lambda}{2}\sum_{x\in M} w_M(x)\, r(x)^2
  \]
  即用权重对对数似然和正则项进行加权。
- **近似克隆鲁棒性的形式化定义**：对于任意 \(\delta>0\) 存在 \(\epsilon>0\)，当添加一个与现有替代方案距离小于 \(\epsilon\) 的新替代方案时，原有替代方案的奖励变化和新旧克隆之间的奖励差异均小于 \(\delta\)。
- **克隆鲁棒性保证**：在标注者奖励函数满足 Lipschitz 连续的条件下，加权 MLE 被证明满足近似克隆鲁棒性。
- **额外理论结果**：
  - 不可能定理：当 \(n>1\)（存在多种偏好）时，任何 RLHF 算法都无法从代表性数据集中准确恢复平均奖励函数，即使在 \(m=2\) 的情况下误差也可任意大。
  - 加权 MLE 与加权平均胜率的关系：加权 MLE 是使得模型加权平均胜率等于经验加权平均胜率的方程组的解，类似标准 MLE 与 Borda 计数的关系。
  - 加权 MLE 可解释为对全替代方案空间 \(S\) 上 MLE 目标函数的近似。

## 3. 实验设计

- **实验场景**：单个提示“Describe Paris”，目的是训练一个评价该类回答的奖励函数。
- **数据集与基准**：
  - 使用 OpenAI 的 `gpt-4o-mini` 生成备选答案（按美食、艺术、浪漫三种主题），并用同一模型模拟三种不同偏好的标注者（如表 4 所示，各自对不同主题的关注程度不同）。
  - 构建两个偏好数据集：`Original`（只包含三种主题的回答）和 `Clones`（额外加入一个与某主题极为相似的“餐厅”主题作为近似克隆）。每个数据集含 1000 条偏好比较数据。
  - 不是标准的公开基准，而是针对理论概念的案例验证。
- **对比方法**：仅对比标准正则化 MLE 与所提出的加权 MLE。
- **实现方式**：使用 OpenAI 的 `text-embedding-3-small` 提取回答的嵌入向量，经 PCA 降维后用两层全连接神经网络（隐藏层大小 32）拟合奖励函数。优化器为 Adam，学习率 \(10^{-4}\)，批大小 512，训练 500 步，重复 20 次取平均。

## 4. 资源与算力

- **文中未明确给出**任何关于 GPU 型号、数量、单次训练时长或总计算量的信息。
- 实验规模较小（单提示、1000 条数据、小型神经网络），推算所需的算力很低，但作者没有提供具体资源消耗的说明。

## 5. 实验数量与充分性

- **实验组数**：
  - 主要对比：`Original` vs `Clones` 数据集 × 标准 MLE vs 加权 MLE，共 2×2 种组合。
  - 附录中还展示了加权 MLE 选用不同替代方案空间 \(S\)（单位立方体、基于观测向量坐标缩放的空间）的结果，验证了算法对 \(S\) 选择的鲁棒性。
- **实验规模**：仅涉及一个提示词和一种克隆类型，未覆盖多任务、多克隆程度、不同规模数据集等。
- **充分性与公平性**：
  - 实验作为概念验证，能支持理论结论，但数量较少，泛化性存疑。
  - 对比方法简单，未与其他可能的鲁棒方法（如数据预处理、其他加权方案）进行对比。
  - 实验使用的是合成标注者，并非真实人类反馈，可能引入偏差。

## 6. 论文的主要结论与发现

- **标准 MLE 的缺陷**：正则化 MLE 不满足近似克隆鲁棒性，克隆项会改变替代方案的奖励排序（如案例分析中胜出的主题从“浪漫”变为“艺术”）。
- **加权 MLE 的性质**：
  - 满足近似克隆鲁棒性，添加克隆后奖励函数变化有界。
  - 保留了与（加权）平均胜率的对应关系和可解释性。
  - 当 \(M\) 在 \(S\) 上均匀分布时退化为标准 MLE。
- **不可能结果**：存在多样化偏好的人群，使得任何 RLHF 算法输出的奖励函数与平均奖励之间的差距可以任意大，凸显了在多样化偏好下做单奖励函数对齐的固有限制。

## 7. 优点

- **理论创新**：首次将社会选择中的“独立于克隆”扩展为 RLHF 的“近似克隆鲁棒性”，并结合 Lipschitz 连续性和 Voronoi 分区构建了有效的算法。
- **简洁且可解释的加权方案**：权重直接来源于空间分区，赋予算法清晰几何直觉；加权 MLE 保持了与胜率、MLE 近似的多种联系。
- **理论与实践结合**：理论证明后附有案例研究，展示了加权 MLE 在文本回答场景下比标准 MLE 更鲁棒。
- **形式化严格**：给出了完整的定理和证明（不可能结果、鲁棒性定理、等效性定理）。

## 8. 不足与局限

- **实验有限**：
  - 只在单个提示和有限合成标注者类型下进行验证，缺乏大规模、多领域、真实人类偏好的测试。
  - 未与除标准 MLE 之外的其他 baseline（如数据清洗、不同加权机制）进行比较。
  - 未分析权重估计误差、数据集大小对鲁棒性的影响。
- **理论假设较强**：
  - 假设每个替代方案对之间都有足够的比较数据，这在 LLM 动态生成回答并按需比较的实际场景中未必成立。
  - 假设标注者奖励函数的 Lipschitz 连续性，且克隆的“近似”程度仅依赖于上下文距离，而上下文嵌入的选择和距离度量的设计可能影响结果。
- **权重依赖于 \(S\) 的选择**：文中虽对两种 \(S\) 做了验证，但如何在实际应用中合理定义全替代方案空间仍是一个挑战。
- **不可能结果的启示**：算法虽鲁棒于克隆，但无法从根本上解决多样化偏好下无法完美恢复平均奖励的问题，实际应用中仍需谨慎。
- **计算开销**：权重估计需要从 \(S\) 采样并查询最近邻，当替代方案或嵌入维度较大时计算可能变重，但文章未讨论复杂度。

（完）
