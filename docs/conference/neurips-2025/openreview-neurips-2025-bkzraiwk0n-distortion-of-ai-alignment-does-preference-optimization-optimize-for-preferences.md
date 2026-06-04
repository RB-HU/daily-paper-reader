---
title: "Distortion of AI Alignment: Does Preference Optimization Optimize for Preferences?"
title_zh: 对齐的扭曲：偏好优化真的优化偏好吗？
authors: "Paul Gölz, Nika Haghtalab, Kunhe Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=bkZrAIWK0N"
tags: ["query:fla"]
score: 4.0
evidence: 多元偏好下RLHF/DPO对齐扭曲度的理论分析
tldr: 针对现有对齐方法假设单一偏好模型的问题，利用社会选择理论分析PPO和DPO在多元偏好下的表现，提出“扭曲度”指标测量最坏情况下平均效用的损失，揭示了这些方法在满足平均用户需求方面的理论局限性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-bkzraiwk0n/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1065, \"height\": 450, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-bkzraiwk0n/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 553, \"height\": 379, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-bkzraiwk0n/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1169, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-bkzraiwk0n/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1452, \"height\": 658, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-bkzraiwk0n/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1448, \"height\": 321, \"label\": \"Table\"}]"
motivation: 现有对齐方法以单一偏好为假设，无法保证在多元用户下仍能优化平均效用。
method: 基于个人Bradley-Terry模型和社会选择理论量化对齐方法的扭曲度，分析最坏情况比例。
result: 证明常见对齐方法在多元偏好下可能严重偏离最优平均效用，扭曲度较大。
conclusion: 为金融等多元用户场景下的对齐方法选择与设计提供了理论警醒，推动更稳健的后期训练策略。
---

## Abstract
After pre-training, large language models are aligned with human preferences based on pairwise comparisons. State-of-the-art alignment methods (such as PPO-based RLHF and DPO) are built on the assumption of aligning with a single preference model, despite being deployed in settings where users have diverse preferences. As a result, it is not even clear that these alignment methods produce models that satisfy users \emph{on average} --- a minimal requirement for pluralistic alignment. Drawing on social choice theory and modeling users' comparisons through individual Bradley-Terry (BT) models, we introduce an alignment method's \emph{distortion}: the worst-case ratio between the optimal achievable average utility, and the average utility of the learned policy. The notion of distortion helps draw sharp distinctions between alignment methods: \emph{Nash Learning from Human Feedback} achieves the minimax optimal distortion of $(\frac{1}{2} + o(1)) \cdot \beta$ (for the BT temperature $\beta$), robustly across utility distributions, distributions of comparison pairs, and permissible KL divergences from the reference policy. RLHF and DPO, by contrast, suffer $\geq (1 - o(1)) \cdot \beta$ distortion already without a KL constraint, and $e^{\Omega(\beta)}$ or even unbounded distortion in the full setting, depending on how comparison pairs are sampled.

---

## 论文详细总结（自动生成）

好的，我们开始吧。

# Distortion of AI Alignment: Does Preference Optimization Optimize for Preferences? 论文总结

## 1. 核心问题与整体含义

- **研究动机**：当前大语言模型对齐的主流方法（如 PPO‑RLHF、DPO）假设用户具有单一的偏好模型，但在实际部署中用户偏好是多样且异质的。这引发了一个根本性问题：这些对齐方法能否在**平均意义上**满足多元用户群？即它们所产生的策略的平均效用是否接近于最优可达平均效用？
- **整体含义**：论文将社会选择理论中的“扭曲度”（distortion）概念引入 AI 对齐，提出一种衡量对齐方法在异质偏好下最差情况表现的理论框架，揭示了以单一奖励模型为核心的方法（RLHF/DPO）可能严重偏离平均效用最优，而基于博弈均衡的 NLHF（Nash Learning from Human Feedback）则能获得近最优的扭曲度保证。

## 2. 方法论

- **核心思想**：在个人 Bradley‑Terry（BT）模型的随机选择假设下，定义“扭曲度”为最优策略的平均效用与对齐方法产生策略的平均效用之比的最坏情况上界，以此量化对齐方法在多元用户下的信息损失。
- **关键技术细节**：
  - 每个用户拥有独立的效用向量 \(u \in [0,1]^m\)，用户 i 比较选项 \(x\) 与 \(y\) 时，偏好 \(x\) 的概率为 \(\sigma(\beta(u(x)-u(y)))\)，其中 \(\sigma\) 为 sigmoid，\(\beta\) 为 BT 温度。
  - 引入仿射线性化引理（Lemma 1），将期望胜率包裹在线性函数之间：\(p(x \succ y) - 1/2\) 可以用平均效用的线性组合来上下界，常数包含 \(L = 1/4\) 和 \(l_\beta = \frac{1}{2\beta}\cdot\frac{1-e^{-\beta}}{1+e^{-\beta}}\)。
  - 在社会选择设定下，将 Borda 规则（对应 RLHF）和最大彩票规则（Maximal Lotteries，对应 NLHF）进行分析；在对齐设定下，策略被限制在参考策略的 KL 球内，扭曲度的基准变为 KL 球内最大平均效用。
- **公式/算法流程示例**：
  - RLHF：先用成对比较数据拟合单一 BT 奖励模型（MLE），再在 KL 约束下最大化奖励期望。
  - NLHF：将成对胜率差矩阵视为零和博弈，在 KL 约束下求 Nash 均衡策略。
  - 扭曲度上界（Theorem 7）：NLHF 的扭曲度 \(\le \frac{\beta}{2}\cdot\frac{1+e^{-\beta}}{1-e^{-\beta}}\)，且这一上界在有限样本下仍成立，误差随样本量衰减。
  - 下界证明：通过构造“不可区分”的效用分布和成对比较实例，展示任何满足 Condorcet 失败者准则的方法（包括 Borda 和 Maximal Lotteries）都必须承受至少 \(\frac{\beta}{2}\cdot\frac{1+e^{-\beta}}{1-e^{-\beta}}\) 的扭曲度。

## 3. 实验设计

- **数据集/场景**：本文为纯理论研究，**未使用任何实际数据集或实验场景**。所有结论均通过数学定理和构造性证明得出。
- **Benchmark 与对比方法**：理论分析中对比的方法包括：
  - Borda 投票规则（社会选择设定中的 RLHF 等价方法）
  - Maximal Lotteries 投票规则（NLHF 的等价方法）
  - 在扩展的配对采样模型下，对比了 RLHF 与 NLHF 在有无 KL 约束时的扭曲度。
- 文中未进行数值模拟或 benchmark 测试。

## 4. 资源与算力

- 本文未包含任何计算实验，因此**未使用 GPU 或计算资源**，也没有提及算力、训练时长等信息。

## 5. 实验数量与充分性

- 实验数量：0 组（纯理论推导）。
- 充分性与客观性：定理证明严格，构造实例覆盖了不同参数（\(m,\, \beta,\, d,\, \mu\)）和采样分布，理论对比公平，但缺乏实证验证。论文承认“无实验”，因此关于真实数据上的表现仍需未来工作探索。

## 6. 主要结论与发现

- **扭曲度下界**：任意对齐方法（包括所有满足 Condorcet 失败者准则的规则）必须承受至少 \((\frac{1}{2}+o(1))\beta\) 的扭曲度；即使每个用户提供多个比较，这一下界仍然成立。
- **Borda/RLHF 的扭曲度**：
  - 在无 KL 约束的社会选择设定下，Borda 的扭曲度在 \((1-o(1))\beta\) 到 \(O(\beta^2)\) 之间，且严格大于下界。
  - 在有 KL 约束的对齐设定下，RLHF 的扭曲度可以增长至 \(e^{\Omega(\beta)}\)，甚至在配对非独立采样时**无界**。
- **NLHF/Maximal Lotteries 的扭曲度**：
  - 精确匹配下界 \(\frac{\beta}{2}\cdot\frac{1+e^{-\beta}}{1-e^{-\beta}} = (\frac{1}{2}+o(1))\beta\)，达到 minimax 最优。
  - 该上界对于任意效用分布、采样分布 \(\mu\)、参考策略和 KL 预算都稳健成立，且可推广到 KL 正则化版本和更一般的比较对采样模型。
- **有限样本保证**：所有上界定理都附带了随样本量 \(n\) 和最小采样质量 \(d\mu^2_{\min}\) 衰减的有限样本误差项，保证了渐近结果的实际相关性。

## 7. 优点

- **理论的严密性与原创性**：首次将对齐方法的形式化扭曲度分析与社会选择理论紧密结合，为多元偏好对齐提供了坚实的数学基准。
- **鲁棒性揭示**：NLHF 在极端广泛的设定下保持最优扭曲度，而 RLHF/DPO 的严重依赖于配对采样分布，这一结论对后续算法设计具有重要指导意义。
- **仿射线性化引理**：巧妙地用线性函数包裹 sigmoid 胜率，使得期望效用能被分离，大幅简化了上下界证明，方法本身可推广至其他随机效用模型。
- **KL 约束与正则化的等价性**：证明了约束形式和正则化形式的 RLHF/NLHF 等价，从而理论保证可直接应用于实践中常见的正则化实现。
- **实践意义**：为 AI 排行榜、奖励模型可靠性等提供理论警示，指出仅依赖序数比较可能损失关键信息，并指出采样分布敏感性是现有方法的一大隐患。

## 8. 不足与局限

- **无实证验证**：全文为纯理论分析，未在真实偏好数据或训练模型上进行验证，扭曲度在实际数据上的经验值未知。
- **状态独立假设**：对齐分析局限于单一状态，未考虑跨状态的泛化和上下文依赖性，这一简化可能影响对真实 RLHF 管线的直接适用性。
- **平均效用作为唯一指标**：扭曲度只衡量平均效用，无法捕捉公平性或少数群体偏好等更精细的多元对齐需求。论文仅在讨论中提及这一问题，未深入解决。
- **线性化引理的保守性**：虽然仿射界在数学上整洁，但在非线性强烈的区域（如 \(\beta\) 很大时）可能过于保守，导致上界不够紧。
- **对抗性最坏情况**：扭曲度定义为最坏实例下的比值，实际效用分布可能更温和，因此理论下界在平均情形下未必是最具威胁的。
- **DPO 与 RLHF 的等同性**：文中证明 DPO 在本设定下与 RLHF 等价，因此对 DPO 的批评同样适用于 RLHF，但未单独分析 DPO 特有的性质（如直接策略优化带来的奖励隐式表达）。

（完）
