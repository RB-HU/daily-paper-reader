---
title: "$Q\\sharp$: Provably Optimal Distributional RL for LLM Post-Training"
title_zh: Q♯：面向LLM后训练的证明最优分布式强化学习
authors: "Jin Peng Zhou, Kaiwen Wang, Jonathan Daniel Chang, Zhaolin Gao, Nathan Kallus, Kilian Q Weinberger, Kianté Brantley, Wen Sun"
date: 2025-01-21
pdf: "https://openreview.net/pdf?id=1J1Kju4rto"
tags: ["query:fla"]
score: 9.0
evidence: 提出基于价值的分布式强化学习方法用于LLM后训练
tldr: 现有基于策略的LLM后训练方法如PPO和DPO可能无法修正预训练中的捷径问题。本文提出Q♯，一种基于价值的分布式强化学习算法，通过学习最优正则化Q函数引导参考策略。理论证明该方法可学习KL正则化RL问题的最优策略，在数学推理基准上优于先前基线。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1780, \"height\": 469, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 826, \"height\": 270, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 765, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 840, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 683, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-1j1kju4rto/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1772, \"height\": 1281, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-1j1kju4rto/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 862, \"height\": 533, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1j1kju4rto/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 865, \"height\": 180, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1j1kju4rto/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 863, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-1j1kju4rto/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 867, \"height\": 238, \"label\": \"Table\"}]"
motivation: 解决基于策略的LLM后训练方法无法修正推理捷径的问题。
method: 提出Q♯算法，利用分布式强化学习在线数据学习最优Q函数。
result: 在数学推理基准上，Q♯优于PPO等基线方法。
conclusion: Q♯为LLM对齐和推理提供了有理论保证的后训练方法。
---

## Abstract
Reinforcement learning (RL) post-training is crucial for LLM alignment and reasoning, but existing policy-based methods, such as PPO and DPO, can fall short of fixing shortcuts inherited from pre-training. In this work, we introduce $Q\sharp$, a value-based algorithm for KL-regularized RL that guides the reference policy using the optimal regularized $Q$ function. We propose to learn the optimal $Q$ function using distributional RL on an aggregated online dataset. Unlike prior value-based baselines that guide the model using unregularized $Q$-values, our method is theoretically principled and provably learns the optimal policy for the KL-regularized RL problem. Empirically, $Q\sharp$ outperforms prior baselines in math reasoning benchmarks while maintaining a smaller KL divergence to the reference policy. Theoretically, we establish a reduction from KL-regularized RL to no-regret online learning, providing the first bounds for deterministic MDPs under only realizability. Thanks to distributional RL, our bounds are also variance-dependent and converge faster when the reference policy has small variance. In sum, our results highlight $Q\sharp$ as an effective approach for post-training LLMs, offering both improved performance and theoretical guarantees.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有基于策略的 LLM 后训练方法（如 PPO、DPO、REINFORCE）直接更新模型权重，难以纠正预训练阶段形成的推理“捷径”（例如星图任务中的 Clever Hans 行为）。而已有的基于价值的方法（CD、VAS）虽尝试引导参考策略，却使用了**非正则化**的 Q 函数 \(Q^{\pi_{\text{ref}},0}\)，并非在真正的 KL 正则化强化学习目标下进行优化，可能导致奖励次优或 KL 散度过大。
- **整体含义**：论文提出 **Q♯**，一种**基于价值的分布式强化学习算法**，通过在 KL 正则化 RL 框架下学习**最优正则化 Q 函数 \(Q^{\star,\eta}\)** 来引导参考策略 \(\pi_{\text{ref}}\)，从而实现对捷径的纠正，并给出严格的理论保证。该方法为 LLM 的后训练对齐与推理增强提供了新路径。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：在确定性 MDP（LLM 生成过程确定）中，KL 正则化 RL 的最优策略可表示为  
  \[
  \pi^{\star,\eta}_h(y \mid x) \propto \pi_{\text{ref}, h}(y \mid x) \exp\!\big(Q^{\star,\eta}_h(x, y) / \eta\big).
  \]  
  而 \(Q^{\star,\eta}\) 可直接从参考策略的**累积奖励分布 \(Z^\star\)** 计算：  
  \[
  Q^{\star,\eta}_h(x, y) = \eta \ln \mathbb{E}_{Z^\star_h(x, y)}[\exp(Z/\eta)].
  \]  
  因此，只要用分布式 RL 学习 \(Z^\star\) 的近似 \(\hat Z_\theta\)，即可诱导出近优策略 \(\pi^{\hat Z_\theta, \eta}\)。
- **算法流程（Q♯）**：
  1. 初始化分布模型参数 \(\theta_1\) 和空数据集 \(D_h\)。
  2. 每一轮迭代 \(k\)：
     - 用当前诱导策略 \(\pi_k = \pi^{\hat Z_{\theta_k}, \eta}\) 随机选择切换时间 \(h\)，Roll‑in \(h-1\) 步；
     - 在 \(x_h\) 处切换至 \(\pi_{\text{ref}}\) 并完成后续轨迹，收集各时间步 \(t \ge h\) 的累积奖励 \(R_t\)；
     - 将样本 \((x_t, y_t, R_t)\) 加入 \(D_t\)；
     - 通过最小化分布损失（如 MLE、二分类交叉熵）更新 \(\theta_{k+1}\)。
  3. 最终输出分布模型 \(\hat Z_\theta\)，推理时按 \(\pi^{\hat Z_\theta, \eta}\) 采样。
- **关键技术细节**：
  - 分布损失灵活可选：已知奖励为伯努利时用 BCE，未知分布时用直方图 MLE 等。
  - 支持 **V‑type**（输入拼接 token，输出标量 Q）和 **Q‑type**（输入前缀，同时输出所有 token 的 Q），V‑type 计算高效（仅对 \(\pi_{\text{ref}}\) 下 top‑20 动作估值）。
  - 理论版算法在线收集数据，使用无遗憾在线学习 oracle 保证收敛。
- **理论设定与保证**（理论版算法）：
  - 假设确定性转移，奖励有界 \([0, V_{\max}]\)，分布函数类满足可实现性 (\(Z^\star \in \mathcal{F}\))。
  - 通过将 KL 正则化 RL 归约为在线最大似然学习的无遗憾保证，得到 PAC 界：
    \[
    \sum_{k=1}^K (V^{\star,\eta} - V^{\pi_k,\eta}) \lesssim A V_{\max} \Bigg( \sqrt{\sum_{h,k} \mathrm{CV}_{h,k}^2 \cdot \beta} + \max_h \mathcal{E}_h \cdot \beta \Bigg),
    \]
    其中 \(\beta = \ln(1/\delta) + \mathrm{Reg}_{\mathrm{mle}}(K)\)，\(\mathrm{CV}_{h,k}\) 为 \(\exp(Z^\star/\eta)\) 的变异系数，\(\mathcal{E}_h\) 为与最优 Q 相关的包络函数。该界是**方差依赖**的：参考策略方差小时收敛更快，且在偏优问题中包络项可接近 1，避免指数依赖 \(\eta^{-1}\)。

## 3. 实验设计
- **数据集与场景**：
  - **星图任务**（synthetic）：来自 Bachmann & Nagarajan (2024)，预训练 GPT‑2 小模型学出 Clever Hans 捷径，正确率仅 \(1/d\)。用于验证后训练能否修复捷径。
  - **数学推理**：GSM8K（小学数学应用题）和 MATH（高中数学竞赛题）。训练集用 90%‑10% 划分，测试用完整 GSM8K 测试集和 MATH‑500。
- **评测指标**：
  - 单样本正确率（pass@1）、多数投票正确率（maj1@8，8 条采样，温度 0.8，核采样 p=0.9）。
  - KL 散度相对于参考策略，衡量生成分布偏移。
- **对比方法**：
  - 星图任务：REINFORCE、DPO、CD（控制解码），以及 Q♯。
  - 数学推理：\(\pi_{\text{ref}}\)（Llama 3/3.1 8B 和 70B）、CD 基线（基于 \(Q^{\pi_{\text{ref}},0}\) 的值引导），以及 Q♯；还使用 Q♯ 作为奖励模型（Best‑of‑8、加权 maj@8）与基础采样对比。
  - 不同规模的 Q♯ 模型（1B、3B）和参考策略（8B、70B）进行扩展性实验。
  - 消融实验：仅训练 \(t=h\) vs 所有 \(t\ge h\)、Q‑type vs V‑type、分布损失 vs MSE 回归、迭代次数。

## 4. 资源与算力
- 论文中**未明确说明具体的 GPU 型号、数量和训练时长**。仅提及使用 Llama 3.2 1B 作为 Q♯ 模型，参数量较小，但缺乏对算力消耗的详细报告。

## 5. 实验数量与充分性
- **实验组数丰富**：
  - 1 个合成任务（星图），覆盖多种后训练算法。
  - 2 个真实数学推理数据集，每种包含多组模型规模（8B、70B）和多组 Q♯ 大小，共至少 8 组主要对比。
  - 额外奖励模型实验（约 2 组）。
  - 敏感性分析（针对 \(\eta\) 的 Pareto 前沿）和消融实验（4 组消融，含 3‑5 种变体）。
- **充分性与公平性**：
  - 合成任务清晰展示了不同范式（策略 vs 价值）的差异。
  - 数学任务上，对比了相同的参考模型和相近的评测协议，多次使用相同的采样参数，公平性较好。
  - 消融实验覆盖了主要设计选择，能体现各部分贡献。
  - 不足：数学推理主要与 CD 对比，未加入基于策略的强基线（如 PPO、GRPO 等）进行 head‑to‑head 对比；奖励模型实验仅内部使用，未与外部奖励模型比较。

## 6. 论文的主要结论与发现
- Q♯ 在数学推理任务上**同时提升 pass@1 和 maj1@8**，且保持**更低的 KL 散度**，优于 CD 基线。
- 在星图任务中，**仅 Q♯ 能修复预训练捷径，实现接近 100% 的正确率**，而 REINFORCE、DPO 均失败。
- Q♯ 学习到的奖励分布可用于**奖励模型重评分**，进一步改进 maj1@8 或实现 Best‑of‑N，表明其具有复用价值。
- 理论证明 Q♯ 在仅需可实现性假设下收敛到最优策略，且收敛速率受益于参考策略的低方差，为该方法提供了坚实保证。
- CD/VAS 使用的非正则化 Q 引导在特定 MDP 中**可能陷入次优并导致高 KL**，而 Q♯ 原理上避免该缺陷。

## 7. 优点：方法或实验设计上有哪些亮点
- **理论严谨性**：首次在仅满足可实现性的条件下，给出确定性 MDP 中 KL‑RL 的 PAC 保证，且界为方差依赖，比之前需要完备性假设的工作更轻量。
- **算法设计巧妙**：通过分布式 RL 直接学习奖励分布，回避了时序差分学习的不稳定性；模型与 \(\eta\) 解耦，推理时可灵活调节正则化强度。
- **实用性强**：V‑type 采用 top‑20 近似大幅降低推理开销；Q♯ 亦可作为训练/推理后的奖励模型使用。
- **实验全面**：从合成捷径任务到大规模数学推理，从单一样本准确率到多数投票，再到消融和参数敏感分析，多角度验证方法的有效性。

## 8. 不足与局限
- **对比基线有限**：数学任务中未与主流的 PPO 类策略基方法直接对比，难以体现与工业界 SOTA 的相对优势。
- **假设限制**：仅适用于确定性 MDP，未覆盖随机环境；理论界中包络项可能以指数形式依赖 \(1/\eta\)，在最坏情况下较大。
- **推理开销**：V‑type 仍需对每个候选 token 进行额外前向，top‑20 近似可能忽略概率低但关键的 token，影响最优性。
- **超参数敏感**：\(\eta\) 仍需调节，尽管论文显示 Q♯ 比 CD 更稳定，但未给出自动化选择方案。
- **可复现性**：未提供计算资源细节，训练成本不明，可能影响其他研究者复现和扩展。
- **应用范围**：仅在数学推理和合成图上验证，缺少对话、安全对齐等典型 LLM 后训练场景的测试。

（完）
