---
title: "Beyond Expectations: Quantile-Guided Alignment for Risk-Calibrated Language Models"
title_zh: 超越期望：基于分位数引导的风险校准大语言模型对齐
authors: "Xinran Wang, Jin Du, Azal Ahmad Khan, Qi Le, Enmao Diao, Jiawei Zhou, Jie Ding, Ali Anwar"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=R7HJj1YvJH"
tags: ["query:fla"]
score: 6.0
evidence: 分位数引导的RLHF风险校准，适合金融任务对齐
tldr: 传统RLHF仅优化平均奖励，无法控制高风险尾端事件。本文提出分位数引导对齐（QA），允许用户指定分位数改进，通过增广奖励强制分位数约束，从而精细控制输出分布，提升安全性。在对话和代码生成上验证，该方法可显著降低灾难性输出比例，为金融等高风险领域的智能体对齐提供了风险校准工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-r7hjj1yvjh/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1434, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r7hjj1yvjh/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1431, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r7hjj1yvjh/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 708, \"height\": 604, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r7hjj1yvjh/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1437, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-r7hjj1yvjh/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1444, \"height\": 400, \"label\": \"Figure\"}]"
motivation: 解决RLHF无法控制高风险尾端事件的问题，提升安全性。
method: 扩展RLHF，在奖励中引入分位数约束，实现输出分布的风险校准。
result: 实验表明能显著减少有害输出，提升安全性和可靠性。
conclusion: 为需要风险控制的场景提供了精细的对齐手段，特别是金融领域。
---

## Abstract
Large language models can generate rare but catastrophic outputs, such as harmful conversations or insecure code. Existing Reinforcement Learning from Human Feedback (RLHF) typically maximizes average reward, leaving high-risk tail events insufficiently controlled. We introduce Quantile‑Guided Alignment (QA), a framework that allows users to specify desired improvements at any quantile—individually or across multiple reward dimensions—thus shifting the distribution of outputs with finer control toward safer, more desirable outcomes. The method extends standard RLHF via an augmented reward formulation that enforces quantile constraints. Experiments on conversation and code‐generation tasks show that quantile alignment significantly enhances quality at targeted tails while maintaining overall performance. The results position QA as a principled route to risk‑calibrated language models with tail‑focused alignment.

---

## 论文详细总结（自动生成）

## 一、研究动机与核心问题

- **问题背景**：大语言模型（LLMs）在对话、代码生成等场景中可能产生少量但后果严重的高风险输出（如有害回复、不安全代码），而传统基于人类反馈的强化学习（RLHF）仅优化期望奖励，无法有效控制分布尾部的高风险事件。
- **核心目标**：本文旨在提出一种**风险校准**的对齐框架，使用户能够显式约束奖励分布在任意分位数上的表现，从而在保持整体性能的同时，显著降低灾难性输出的发生概率。
- **整体含义**：将模型对齐从“优化平均值”升级为“控制整个奖励分布的形状”，给出了一种可嵌入现有 RLHF 工具链的、有理论保证的尾部分布控制方案。

## 二、方法论

- **核心思想**：将分位数约束（如“至少 90% 的输出满足某安全标准”）转化为对奖励函数指示器形式期望的不等式，并将该不等式作为 KL 正则化目标中的附加约束，形成一个**凸优化问题**。利用强对偶性，将该无限维的分布优化问题转化为有限维（约束个数）的对偶变量优化问题，最终导出一个含分位数奖励线性组合的指数型重新加权分布，可直接对接标准 RLHF 求解器。
- **技术细节**：
  - 对于单一奖励函数 $r$，对第 $j$ 个分位数约束“将 $\tau_j$ 分位数提升至原始分布 $\kappa_j$ 分位数水平”，定义指示器型分位数奖励 $\rho_{\tau_j,\kappa_j}(r(x,y)) = \tau_j - \mathbb{I}\{r(x,y) < c_j\}$，$c_j$ 为原始分布的 $\kappa_j$ 分位数。
  - 约束优化问题：
    $$\min_{p}\, \mathbb{E}_p\big[\mathrm{KL}(p\|p_0)\big] \quad \mathrm{s.t.}\; \mathbb{E}_p[\rho_{\tau_j,\kappa_j}(r)] \ge 0,\; j\in[m]$$
    该问题是关于 $p$ 的凸问题，最优解为：
    $$p_{\lambda}(y|x) = \frac{p_0(y|x)\exp\left(\sum_{j=1}^m \lambda_j \rho_{\tau_j,\kappa_j}(r)\right)}{C(\lambda)}$$
    其中 $\lambda\ge 0$ 由对偶问题 $\max_{\lambda\ge 0} -\log C(\lambda)$ 确定。
  - 多奖励函数情形：每个奖励函数 $r_i$ 可独立施加多个分位数约束，最优解变为 $\sum_{i,j} \lambda_{i,j} \rho_{\tau_{i,j},\kappa_{i,j}}(r_i)$ 指数加权。
  - **连续分位数对齐**：将离散分位数约束推广至 $\tau\in[0,1]$ 全区间，引入连续对偶函数 $\lambda(\tau)$，最优解含积分 $\int_0^1 \lambda(\tau)\rho_{\tau}(r)\, d\tau$，并给出了一阶灵敏度分析。
- **算法流程**（数值求解）：
  1. 从基准模型 $p_0$ 采样 $n$ 个 $(x,y)$ 样本。
  2. 根据样本经验分位数计算每组约束的指示器奖励。
  3. 对偶变量 $\lambda^{(0)}\ge 0$ 初始化，通过梯度上升迭代最大化 $\widehat{g}(\lambda) = -\log\frac{1}{n}\sum_{\ell=1}^n \exp\left(\sum_j \lambda_j \rho_{\tau_j,\kappa_j}(r)\right)$ 直至收敛。
  4. 得到最优 $\lambda^*$ 后构造有效奖励 $R(x,y) = \sum_j \lambda_j^* \rho_{\tau_j,\kappa_j}(r)$。
  5. 将 $R$ 作为 RLHF 中的奖励（$\beta=1$）使用 PPO 等算法微调模型。
- **关键性质**：对偶目标函数凹，梯度上升可收敛；维度仅等于约束数量，远低于模型参数规模；可复用同一组蒙特卡洛样本处理不同约束，无需重新训练基准模型。

## 三、实验设计

- **任务与数据集**：
  - **对话任务**：Anthropic Harmless 数据集，目标提升**无害性**与**有帮助性**。
  - **代码生成任务**：HumanEval 基准 + 自定义 200 个覆盖文件访问、网络安全、可维护性、执行时间、数据完整性、可扩展性、文档质量等维度的提示，用于评估**简洁性**与**安全性**。
- **模型**：OPT-1.3B（对话）和 CodeGen-350M（代码生成）。
- **对比方法**：主要与**多目标强化学习**基线进行比较，MORL 通过随机采样多目标权重训练多模型。
- **评估指标**：
  - 对齐指标：使用奖励模型（GPT-2 价值头或 GPT-4o 评判）对无害性/有帮助性或简洁性/安全性打分。
  - 基线质量：多样性（n-gram 比例）、连贯性（SimCSE 句子相似度）、困惑度（语言模型）。
- **分位数约束设置**：实验一中针对单值（有帮助性）施加 9 组分位数提升（如 1%→5%，5%→10% 等）；实验二中对双值（有帮助性与无害性）同时施加约束；代码实验中分别对简洁性、安全性施加类似的分位数提升。

## 四、资源与算力

- 所有实验在**单块 Nvidia A100 GPU** 上进行。
- 单次对齐运行（包括对偶优化和 PPO 微调）耗时约 **14 GPU 小时**。文中提到该开销在科研场景可接受，但扩展到基础模型规模仍需进一步优化。

## 五、实验数量与充分性

- **实验组数**：
  1. 对话任务：单值分位数增强（仅提升有帮助性）、双值分位数增强（同时提升有帮助性和无害性）。
  2. 对话任务：QA 与 MORL 基线的对比。
  3. 代码生成任务：单独对齐简洁性、单独对齐安全性（各含两个子实验）。
- 每个实验均给出：
  - QQ 图（原始模型 vs 对齐模型在各分位数上的奖励分布）；
  - 基线质量指标（多样性、连贯性、困惑度）的柱状图；
  - 对齐前后模型生成的定性对比示例。
- **充分性与公平性**：
  - 涵盖两个领域、多个目标维度，既有单一目标对齐也验证了多目标对齐下的目标间权衡/协同现象。
  - 与代表性多目标对齐方法 MORL 进行了直接比较。
  - 实验在小模型上进行，缺乏更大规模模型的验证，也未进行详细的消融实验（如不同约束数量、不同分位数组合的敏感性分析），但这已在局限性中被讨论。
  - 整体实验设计合理，对文中提出的理论特性给出了实证支撑。

## 六、主要结论与发现

- QA 可**精确控制**奖励分布的各分位数，使目标分位数显著提升，且 QQ 图中的点普遍移位到基准线之上，证实了分位数级别的改善。
- 多目标情况下存在**帮助性与无害性之间的权衡**，QA 能够根据约束显式地平衡两者，而 MORL 则因随机权重导致性能波动。
- 代码生成实验显示：提升简洁性能同步轻微改善安全性（协同效应），反之亦然；且对齐后基线质量指标（多样性、连贯性、困惑度）保持稳定，甚至略有改善。
- QA 提供了一种**风险校准**的模型对齐范式，对要求严格控制尾部风险的安全敏感应用具有重要价值。

## 七、优点

- **理论扎实**：首次将分位数约束整合进 KL 正则化对齐框架，建立了凸优化、对偶降维、指数型重加权分布的完整理论链路，并推广至多目标和连续分位数。
- **实现友好**：对偶变量维度低，优化仅需蒙特卡洛前向评估，可直接利用现有 PPO 等工具，无需修改模型结构。
- **控制精细**：用户可以显式指定“将最差的 5% 提升至原始 10% 分位数水平”，实现粒度的分布形变控制，而不仅仅是优化平均值。
- **实验全面**：在两个不同领域、多个价值维度上进行了验证，既有单目标也有多目标，且提供了量化对比与生成示例，增强了说服力。
- **开源与可复现**：论文提供了代码，对数据集和超参数均有清晰说明。

## 八、不足与局限

- **模型规模受限**：实验仅在 OPT-1.3B 和 CodeGen-350M 级别的中小模型上进行，未在大规模模型（如 7B、70B）上验证，泛化能力存疑。
- **计算开销**：单次对齐约需 14 GPU 小时，扩展到更大模型或需反复调节约束时成本较高，虽可使用分布式或低秩近似，但文中未给出。
- **蒙特卡洛近似稳定性**：对于极端分位数（如 0.1%），样本量不足可能导致对偶变量估计方差大，甚至求解发散，文中仅提及通过重要性采样和步长衰减缓解，但缺少系统性的样本复杂度分析。
- **缺少更多消融与鲁棒性测试**：未对不同数量的约束、分位数步长选择、温度参数等做细致的消融实验；也未讨论奖励模型噪声或人类反馈不一致性对 QA 的影响。
- **真实场景安全评估有限**：实验中的“有害性”等指标由奖励模型或 API 评判，未引入真实安全攻击或越狱测试，安全校准的实际效果待进一步检验。

（完）
