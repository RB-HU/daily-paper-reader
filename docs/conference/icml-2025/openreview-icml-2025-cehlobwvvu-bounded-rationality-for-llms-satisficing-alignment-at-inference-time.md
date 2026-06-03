---
title: "Bounded Rationality for LLMs: Satisficing Alignment at Inference-Time"
title_zh: LLM的有界理性：推理时的满意化对齐
authors: "Mohamad Fares El Hajj Chehade, Soumya Suvra Ghosal, Souradip Chakraborty, Avinash Reddy, Dinesh Manocha, Hao Zhu, Amrit Singh Bedi"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=cEhLObwvvu"
tags: ["query:fla"]
score: 4.0
evidence: SITAlign，基于有限理性的推理时对齐框架，与金融智能体对齐技术相关
tldr: 针对人类多目标偏好的对齐，SITAlign采用满意化策略在推理时优化主目标并满足次要约束。该框架为金融AI智能体的对齐提供了借鉴。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-cehlobwvvu/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 860, \"height\": 533, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cehlobwvvu/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1785, \"height\": 815, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cehlobwvvu/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1755, \"height\": 932, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-cehlobwvvu/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1774, \"height\": 200, \"label\": \"Table\"}]"
motivation: 现有对齐方法忽视人类决策中的有限理性，多目标优化困难。
method: 提出推理时框架SITAlign，最大化主目标，约束次要标准。
result: 提供理论洞见，实验验证了多目标对齐的有效性。
conclusion: SITAlign为多面性对齐提供了实际方案，可应用于金融等敏感领域。
---

## Abstract
Aligning large language models with humans is challenging due to the inherently multifaceted nature of preference feedback. While existing approaches typically frame this as a multi-objective optimization problem, they often overlook how humans actually make decisions. Research on bounded rationality suggests that human decision making follows satisficing strategies- optimizing primary objectives while ensuring others meet acceptable thresholds. To bridge this gap and operationalize the notion of satisficing alignment, we propose SITAlign: an inference-time framework that addresses the multifaceted nature of alignment by maximizing a primary objective while satisfying threshold-based constraints on secondary criteria. We provide theoretical insights by deriving sub-optimality bounds of our satisficing-based inference alignment approach. We empirically validate SITAlign's performance through extensive experimentation on multiple benchmarks. For instance, on the PKU-SafeRLHF dataset with the primary objective of maximizing helpfulness while ensuring a threshold on harmlessness, SITAlign outperforms the state-of-the-art multi-objective decoding strategy by a margin of 22.3% in terms of GPT-4 win-tie rate for helpfulness reward while adhering to the threshold on harmlessness.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 格式，对这篇题为《Bounded Rationality for LLMs: Satisficing Alignment at Inference-Time》的论文进行结构化、深入、客观的总结。

---

## 1. 论文的核心问题与整体含义

**核心问题：** 传统的大语言模型（LLM）对齐方法通常将人类的多面性偏好（如安全、有益、幽默、简洁）视为一个多目标优化问题，试图同时最大化所有目标。这种方法存在两个关键缺陷：
- **忽视人类决策模式：** 忽略了人类决策行为中“有限理性”（Bounded Rationality）的特征——人在做决策时并非追求所有目标的最优解，而是采用“满意化”（Satisficing）策略，即优先优化核心目标，同时确保其他目标达到可接受的阈值即可。
- **多目标权重难以确定：** 在现实中对多个冲突目标分配精确的权重非常困难。

**整体含义：** 受“满意化”理论启发，论文提出不应“最大化”所有对齐目标，而应“最大化”一个主要目标（如提高助性），并将其他目标（如无害性）作为“约束条件”，只要其满足预设阈值即可。这一视角转变将多目标优化问题转化为一个带约束的单目标优化问题，更贴近实际应用需求。

## 2. 论文提出的方法论

**核心思想：** 论文提出了 **SITAlign**，一个在推理时（Inference-Time）动态控制解码过程的框架。它最大化一个主要奖励函数（Reward），同时要求生成内容在其他次要奖励函数上满足预设的阈值约束，无需对模型进行昂贵的微调。

**关键技术细节：**
- **问题建模：** 将LLM的逐令牌解码过程建模为一个带约束的马尔可夫决策过程（Constrained MDP）。目标是在满足多个辅助奖励函数期望值不低于阈值 的条件下，最大化一个主奖励函数的期望值，并与一个基础策略保持接近（通过KL散度正则化）。
- **求解方法（对偶理论）：**
    1.  **构建拉格朗日函数：** 将带约束的优化问题转化为一个无约束的最小-最大（Min-Max）拉格朗日对偶问题。拉格朗日乘子 \(\lambda\) 的取值反映了对应约束的重要性或敏感性。
    2.  **推导最优策略（Primal Variable）：** 对于固定的乘子向量 \(\lambda\)，最优解码策略 \(\pi^{*,\lambda}\) 具有解析解，其形式为在基础策略 \(\pi_{sft}\) 上乘以一个指数加权项。该加权项是所有奖励函数按当前乘子 \(\lambda_i\) 进行加权和的结果。
    3.  **估计最优 Q 函数：** 由于无法获取最优 Q 函数 \(Q^*\)，SITAlign采用“迁移Q*(Transfer Q*, TQ*）”技术。它利用一个在其它数据上预训练好的、“局部的”最优轨迹级策略 \(\rho_{BL}^i\)，通过重要性采样来估计每个奖励函数的期望值。
    4.  **近似求解最优乘子（Dual Variable）：** 为满足推理时的计算效率要求，算法通过二次近似目标函数，推导出拉格朗日乘子 \(\lambda^*\) 的闭式解。
- **算法流程：** 在生成响应的每一步 \(t\)，SITAlign算法重复以下步骤：
    1.  从基础令牌级策略中采样 \(k\) 个候选令牌。
    2.  对每个候选令牌，使用 TQ* 技术评估其未来能带来的 \(N\) 个奖励值的期望。
    3.  通过闭式解公式（7）计算最优拉格朗日乘子 \(\lambda^*_{Alg}\)。
    4.  根据公式（11）计算这些候选令牌的新概率分布 \(\pi^*_{Alg}\)（即结合了加权奖励和基础策略），并从中采样下一个令牌。

## 3. 实验设计

**数据集与场景：** 论文在三个不同的实验设置下验证了 SITAlign，每个设置包含一个需优化的主要奖励（Baseline Reward）和一个需满足阈值的次要奖励（Target Reward）。

| 实验 | 数据集 | 基础模型 | 主要奖励（最大化） | 次要奖励（阈值约束） |
| :--- | :--- | :--- | :--- | :--- |
| **实验 1** | PKU-SafeRLHF | Zephyr-7B-β | 有益性 | 无害性 |
| **实验 2** | Anthropic-HH | MPT-7B-Chat | 有益性 |  幽默感 |
| **实验 3** | Summarize-from-Feedback | Minotaur-7B | 摘要质量 | 忠实度 |

**对比方法：**
- **基线解码策略：** 基于 Khanov et al. (2024) 的单目标解码方法。
- **当前最优多目标解码策略：** MOD (Shi et al., 2024)，该方法通过最大化多个目标的凸组合来工作。

**评价指标：** 使用 GPT-4 作为人类评估的代理，评估生成文本在不同奖励维度上的表现，并计算相比基础模型的“赢-平率”（win-tie rate）。实验中，所有设置都统一将次要奖励的赢-平率阈值约束标准化为 **50%**。

## 4. 资源与算力

- **论文未明确提及** 实验中使用的 GPU 型号、数量或具体训练时长。
- 由于 SITAlign 是一个完全的推理时框架，它不涉及对 LLM 的微调，其主要计算开销在于对候选令牌使用 TQ* 进行奖励评估。论文提到采样令牌数 \(k=10\)，但未与其他方法在推理延迟或算力消耗上进行量化对比。

## 5. 实验数量与充分性

- **实验数量：** 论文进行了**3组主要实验**，并在**2个主要实验上进行了消融研究**——针对阈值约束 \(\beta\) 的不同取值，分析了生成文本在主、次奖励上赢-平率的变化。
- **充分性评估：**
    - **优点：** 实验覆盖了多个代表性数据集和多种对齐目标（无害、幽默、忠实），对核心论点“满意化优于最大化”提供了定量和定性支持。
    - **局限：**
        1.  **对比基线较少：** 除 MOD 外，仅与一种单目标解码基线对比。缺少与其他如“最佳采样（Best-of-K）”或强化学习类方法的深入对比。
        2.  **阈值选择主观：** 实验统一将阈值设定为 50% 赢-平率，该值的普适性和最优性论证不足，虽然消融实验展示了阈值的影响。
        3.  **评估指标单一：** 高度依赖 GPT-4 评估，缺乏对生成多样性、流畅度或其他自动化指标的综合考量，可能存在评估偏差。

## 6. 论文的主要结论与发现

1.  **“满意化”对齐策略有效：** 与追求同时最大化所有目标的 MOD 方法相比，SITAlign 在显著提升主要奖励赢-平率的同时，能稳定满足次要奖励的阈值约束。例如，在 PKU-SafeRLHF 数据集上，**SITAlign 在有益性上的 GPT-4 赢-平率比 MOD 高出 22.3%**，同时成功满足无害性阈值。
2.  **阈值约束优于无差别最大化：** MOD 尽管在次要奖励上可能获得更高分数，但严重牺牲了主要奖励的性能。相反，SITAlign 通过设定“足够好”的阈值，实现了更好的主次目标平衡，这验证了“有限理性”在 LLM 对齐中的实际价值。
3.  **理论保证：** 论文推导了 SITAlign 在近似最优解下的次优性（Suboptimality）界限，阐明了因近似策略和乘子而产生的性能损失上界。

## 7. 优点

- **视角创新：** 将“有限理性”和“满意化”原理引入 LLM 对齐，为解决多目标冲突提供了新颖的、更符合人类直觉的框架。
- **方法灵活：** 作为纯推理时方法，SITAlign 无需微调模型，可以针对不同用户、上下文和任务动态调整目标的优先级和阈值，实现了“个性化”对齐。
- **理论坚实：** 基于对偶理论推导出闭式解，并提供了次优性理论分析，方法具有较好的严谨性和可解释性。
- **实验说服力强：** 通过与最先进的多目标解码方法 MOD 的直接对比，清晰地展示了其“满意化”策略的优越性，定性案例也直观地佐证了结论。

## 8. 不足与局限

- **TQ*的依赖：** 算法核心依赖于 TQ* 技术去估计 Q 函数，这需要一个与目标任务相关的预训练“基线模型”。当缺乏合适的基线模型时，方法的应用会受到限制。
- **计算效率未讨论：** 在每一步都需为多个候选令牌评估多个奖励模型并计算乘子闭式解，其推理延迟和计算开销可能显著高于标准的贪心解码或简单的最佳采样，但论文缺乏这方面的分析。
- **阈值设定不明确：** 论文承认阈值选择是一个问题，并建议可通过 GPT-4 胜率或人工反馈预先确定，但没有提出自动化或系统性的阈值设定方法，这在实际应用中可能是一个挑战。
- **仅关注奖励模型对齐：** 实验仅基于奖励模型得分和 GPT-4 评估，没有进行真实的人类用户研究来验证“满意化”输出是否真正提高了用户满意度。
- **潜在偏差风险：** 所有实验数据集和评估方式（GPT-4）都可能引入文化和认知偏差，论文对这方面的讨论较为有限。

（完）
