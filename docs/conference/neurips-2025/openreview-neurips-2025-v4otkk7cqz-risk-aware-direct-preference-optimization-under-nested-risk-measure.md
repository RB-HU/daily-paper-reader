---
title: Risk-aware Direct Preference Optimization under Nested Risk Measure
title_zh: 嵌套风险测度下的风险感知直接偏好优化
authors: "Lijun Zhang, Lin Li, Yajie Qi, Huizhong Song, Yaodong Yang, Jun Wang, Wei Wei"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=V4oTkK7cQz"
tags: ["query:fla"]
score: 8.0
evidence: 风险感知的直接偏好优化对齐技术
tldr: 现有基于KL散度的偏好对齐方法风险控制不足，本文提出风险感知直接偏好优化（Ra-DPO），采用嵌套风险测度构建约束优势函数最大化问题。实验表明，Ra-DPO在多种任务上有效控制了风险，同时保持了高对齐性能，适用于需要安全约束的金融等敏感场景。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 797, \"height\": 470, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1399, \"height\": 327, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1408, \"height\": 673, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1403, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1423, \"height\": 290, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1432, \"height\": 1433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1433, \"height\": 1438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1424, \"height\": 289, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1432, \"height\": 1436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1425, \"height\": 288, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1433, \"height\": 1436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1426, \"height\": 289, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 743, \"height\": 469, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-v4otkk7cqz/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1433, \"height\": 707, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-v4otkk7cqz/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 552, \"height\": 351, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-v4otkk7cqz/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1452, \"height\": 913, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-v4otkk7cqz/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 599, \"height\": 286, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-v4otkk7cqz/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1085, \"height\": 391, \"label\": \"Table\"}]"
motivation: 传统DPO仅用KL散度约束偏差，难以在敏感应用中实现严格风险控制。
method: 结合嵌套风险测度，将风险意识融入DPO框架，求解约束优化问题。
result: Ra-DPO在多个任务中实现了更好的风险-性能权衡。
conclusion: 该方法为关键应用中的LLM对齐提供了更安全的偏好优化方案。
---

## Abstract
When fine-tuning pre-trained Large Language Models (LLMs) to align with human values and intentions, maximizing the estimated reward can lead to superior performance, but it also introduces potential risks due to deviations from the reference model's intended behavior. Most existing methods typically introduce KL divergence to constrain deviations between the trained model and the reference model; however, this may not be sufficient in certain applications that require tight risk control. In this paper, we introduce Risk-aware Direct Preference Optimization (Ra-DPO), a novel approach that incorporates risk-awareness by employing a class of nested risk measures. This approach formulates a constrained risk-aware advantage function maximization problem and then converts the Bradley-Terry model into a token-level representation. The objective function maximizes the likelihood of the policy while suppressing the deviation between a trained model and the reference model using a sequential risk ratio, thereby enhancing the model's risk-awareness. Experimental results across three open-source datasets: IMDb Dataset, Anthropic HH Dataset, and AlpacaEval, demonstrate the proposed method's superior performance in balancing alignment performance and model drift.

---

## 论文详细总结（自动生成）

# 论文《Risk-aware Direct Preference Optimization under Nested Risk Measure》详细总结

## 1. 论文的核心问题与整体含义
- **研究背景**：大语言模型（LLM）对齐常用的直接偏好优化（DPO）等方法，通过最大化预估奖励来对齐人类偏好。为防止与原始参考模型（如SFT模型）产生过大偏差，通常引入KL散度约束。然而，单纯依靠KL散度在某些需要严格风险控制的应用中可能不够充分。
- **核心问题**：现有的偏好对齐方法多数仅在句子级别考虑奖励的期望（风险中性），忽略了奖励分布的其他特征，无法在token级别的生成过程中有效控制与参考模型的偏差风险。这种忽略可能导致模型在训练中严重偏离参考模型，进而损害其原有的决策与推理能力。
- **整体含义**：本文提出风险感知的直接偏好优化方法（Ra-DPO），将一类嵌套风险测度（如CVaR、ERM）引入到token级别的偏好优化中，旨在对齐性能与模型漂移之间实现更安全、更灵敏的平衡。

## 2. 论文提出的方法论
- **核心思想**：在直接偏好优化框架中嵌入风险意识，用一个基于嵌套风险测度的顺序风险比来抑制训练模型与参考模型之间的偏差。
- **关键技术细节**：
  - **Pb-MDP与嵌套风险测度**：将偏好对齐建模为基于偏好的马尔可夫决策过程（Pb-MDP），并采用满足凹性与平移不变性的嵌套风险测度（如CVaR、ERM），在每一步的状态下评估风险。
  - **风险感知优势函数**：定义风险感知的状态-动作价值函数 \(\tilde{Q}^\pi\) 和状态价值 \(\tilde{V}^\pi\)，并在此基础上构造风险感知优势函数 \(\tilde{A}^\pi = \tilde{Q}^\pi - \Phi_\mu(\tilde{V}^\pi)\)。
  - **约束优化问题**：提出如下目标：
    \[
    \max_{\pi_\theta} \mathbb{E}_{x,y_{<t},z\sim\pi_\theta} \left[ \tilde{A}^{\pi_{\text{ref}}}([x,y_{<t}],z) - \beta D_{\text{KL}}(\pi_\theta\|\pi_{\text{ref}}) \right]
    \]
    并证明最大化该目标可保证策略性能单调提升。
  - **损失函数推导**：通过推导风险感知状态-动作函数与最优策略的闭式解，并建立Bradley-Terry模型与Regret Preference Model的等价性，最终得到以下两种损失：
    - **Ra-DPO1**：  
      \[
      \mathcal{L}_{\text{Ra-DPO1}} = -\mathbb{E}\left[\log\sigma\left(u - \delta\right)\right]
      \]
      其中 \(u = \beta\log\frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta\log\frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)}\) 为隐式奖励差，\(\delta\) 是两支回答的顺序风险比之差。
    - **Ra-DPO2**：引入stop-gradient操作符，令 \(\delta_2 = \beta D_{\text{SeqRR}}(x,y_l;\pi_{\text{ref}}\|\pi_\theta) - \text{sg}(\beta D_{\text{SeqRR}}(x,y_w;\pi_{\text{ref}}\|\pi_\theta))\)，提高训练稳定性。
  - **顺序风险比**：定义为 \(D_{\text{SeqRR}}(x,y;\pi_{\text{ref}}\|\pi_\theta) = \sum_{t=1}^T \Phi_{\mu}^{z\sim\pi_{\text{ref}}}\left(\log\frac{\pi_{\text{ref}}(z|[x,y_{<t}])}{\pi_\theta(z|[x,y_{<t}])}\right)\)，利用嵌套风险测度在每一步累积风险。

## 3. 实验设计
- **数据集与场景**：
  - **IMDb数据集**：情感控制文本生成任务，使用GPT-2 Large作为基座模型，已微调的SFT模型为`insub/gpt2-large-IMDb-fine-tuned`。
  - **Anthropic HH数据集**：帮助性与无害性对话对齐任务，分别使用Pythia-1.4B和Pythia-2.8B两种尺寸的基座模型。
  - **AlpacaEval**：评估生成质量，利用在Anthropic HH上训练的模型与`gpt4_1106_preview`进行胜率比较。
- **基准对比方法**：
  - DPO（句子级偏好优化）
  - PPO（离线PPO变体）
  - TDPO1 & TDPO2（token级直接偏好优化）
  - KTO（前景理论优化）
- **评估指标**：
  - 顺序KL散度（DSeqKL，越低表示模型漂移越小）
  - 奖励准确率（reward accuracy，越高越好）
  - AlpacaEval的胜率（winrate）及长度控制胜率（Lc winrate）
- **参数设置**：风险参数 \(\mu\) 在CVaR下取 \(\{0.99,0.98,0.97,0.95\}\)，在ERM下取 \(\{9,7,5\}\)；系数 \(\alpha\) 在Ra-DPO2中取 \(\{0.3,0.5,0.7,0.9\}\)。

## 4. 资源与算力
- **硬件配置**：所有实验使用4块NVIDIA A100 GPU，每块显存40GB。
- **训练时长**：论文未明确提及训练所需的总时间（如GPU小时或天数），仅说明参数设置。

## 5. 实验数量与充分性
- **实验组数**：
  - 2个主要文本生成数据集（IMDb、Anthropic HH）和1个生成质量评估（AlpacaEval）。
  - 2种不同尺寸的基座模型（1.4B与2.8B）。
  - 2种嵌套风险测度（CVaR和ERM），每种对应多个风险参数。
  - 对比了5种基准方法（DPO, PPO, TDPO1, TDPO2, KTO）。
  - 统计了多组随机种子下的均值与标准差（如图13的误差带）。
- **充分性评估**：整体实验设计较为全面，涵盖了不同任务、模型规模、风险参数和多个baseline，并对关键实验进行了多次重复。对比公平，评估指标合理。

## 6. 论文的主要结论与发现
- Ra-DPO在保持甚至提升奖励准确率（对齐性能）的同时，显著降低了顺序KL散度，即有效抑制了模型相对参考模型的漂移。
- 风险控制参数 \(\mu\)（CVaR或ERM）能够灵活调节风险敏感程度，且Ra-DPO在较小系数 \(\alpha\) 下仍能有效抑制偏差，显示出强大的风险感知能力。
- 在AlpacaEval的生成质量评估中，Ra-DPO在胜率和长度控制胜率上均取得最高或次高水平，验证了其在实际生成任务中的优势。

## 7. 优点
- **理论创新**：首次将嵌套风险测度引入token级别的直接偏好优化，构建了完整的风险感知对齐理论框架，并给出了策略改进的证明。
- **方法简洁**：最终损失函数仅为DPO损失与顺序风险比差的组合，无需额外奖励模型，易于实现。
- **实验扎实**：在多个数据集、模型尺寸和风险参数下进行了系统的对比分析，并包含标准差信息，结论可信度高。
- **风险控制**：实现了比KL散度更精细的偏差控制，能在高风险场景中限制模型远离参考分布，同时不牺牲对齐性能。

## 8. 不足与局限
- **理论假设严格**：风险测度需满足凹性、单调性和平移不变性，虽然CVaR和ERM符合要求，但并非所有实用风险函数都满足，限制了方法的普适性。
- **应用场景有限**：论文主要关注降低模型漂移的风险，未在有害内容过滤、毒性检测等安全对齐任务上验证，且实验均为英文数据集。
- **计算开销未详述**：未提供Ra-DPO相对于TDPO或DPO的额外计算成本、训练时间对比，也未讨论顺序风险比计算带来的开销。
- **依赖参考模型**：方法仍然需要一个参考模型，未探讨与SimPO等reference-free方法的对比，且在参考模型本身不够安全或正确时可能引入偏差。
- **超参数敏感**：虽然展示了风险参数的调节能力，但未系统讨论其他超参数（如\(\beta\)）的敏感性，或给出统一调参建议。

（完）
