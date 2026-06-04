---
title: Alignment of Large Language Models with Constrained Learning
title_zh: 基于约束学习的大型语言模型对齐
authors: "Botong Zhang, Shuo Li, Ignacio Hounie, Osbert Bastani, Dongsheng Ding, Alejandro Ribeiro"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VcJTTVoysQ"
tags: ["query:fla"]
score: 8.0
evidence: 大型语言模型策略优化的约束对齐方法
tldr: 针对大型语言模型约束对齐中拉格朗日方法收敛困难的问题，提出迭代对偶方法，交替进行策略拉格朗日最大化和对偶变量下降更新。理论上刻画了对偶间隙，实验展示该方法能有效满足副效用约束并最大化主奖励，为金融等需多目标权衡的领域提供可靠的对齐工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1423, \"height\": 538, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1424, \"height\": 801, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1135, \"height\": 679, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1087, \"height\": 1816, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1087, \"height\": 2280, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1085, \"height\": 2291, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1303, \"height\": 1135, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 633, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vcjttvoysq/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 633, \"height\": 636, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 864, \"height\": 810, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1199, \"height\": 809, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 473, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 1837, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1431, \"height\": 1345, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1087, \"height\": 2280, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1531, \"height\": 1873, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1540, \"height\": 984, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vcjttvoysq/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1530, \"height\": 1772, \"label\": \"Table\"}]"
motivation: 现有方法在最大化主奖励同时满足副效用约束时收敛性差或无法达到最优。
method: 利用拉格朗日对偶形成迭代方法，交替优化LLM策略和更新对偶变量。
result: 方法在实现约束满足的同时达到接近最优的策略性能。
conclusion: 为多目标约束下的LLM对齐提供了可收敛的迭代优化框架。
---

## Abstract
We study the problem of computing an optimal large language model (LLM) policy for the constrained alignment problem, where the goal is to maximize a primary reward objective while satisfying constraints on secondary utilities. Despite the popularity of Lagrangian-based LLM policy search in constrained alignment, iterative primal-dual methods often fail to converge, and non-iterative dual-based methods do not achieve optimality in the LLM parameter space. To address these challenges, we employ Lagrangian duality to develop an iterative dual-based alignment method that alternates between updating the LLM policy via Lagrangian maximization and updating the dual variable via dual descent. In theory, we characterize the primal-dual gap between the primal value in the distribution space and the dual value in the LLM parameter space. We further quantify the optimality gap of the learned LLM policies at near-optimal dual variables with respect to both the objective and the constraint functions. These results prove that dual-based alignment methods can find an optimal constrained LLM policy, up to an LLM parametrization gap. We demonstrate the effectiveness and merits of our approach through extensive experiments conducted on the PKU-SafeRLHF and Anthropic HH-RLHF datasets.

---

## 论文详细总结（自动生成）

# 论文总结：基于约束学习的大型语言模型对齐

## 1. 论文的核心问题与整体含义
- **研究背景**：大型语言模型（LLM）需对齐人类多元偏好，但现有对齐方法（如RLHF）多使用单一奖励模型，难以兼顾多个相互冲突的目标（如帮助性与安全性）。
- **核心问题**：受约束对齐旨在最大化主奖励的同时满足副效用（如安全性）约束，但**现有拉格朗日原始‑对偶方法常不收敛**，而非迭代对偶方法在LLM参数空间中**无法保证最优性**。
- **整体目标**：提出一种**能收敛且理论上接近最优**的迭代对偶约束对齐方法，并分析其原‑对偶间隙与策略最优性。

## 2. 方法论
- **框架**：采用拉格朗日对偶，将原带约束优化问题转化为对偶问题。
- **核心算法**：**CAID（Constrained Alignment via Iterative Dualization）**，交替执行两个步骤：
  1. **对偶次梯度下降**：利用当前LLM策略在线生成样本估计约束违反，更新对偶变量 \(\lambda\)。
  2. **LLM策略优化**：固定 \(\lambda\)，通过拉格朗日最大化训练LLM（实践中用DPO构造伪偏好数据集实现）。
- **理论保证**：
  - 给出**原‑对偶间隙**上界，证明其受控于LLM参数化误差 \(\nu\)。
  - 给出**奖励与效用最优性间隙**上界，表明多shot对齐所得策略可接近问题的最优解。
- **实现变体**：
  - **MoCAID**：模型感知版本，直接使用奖励/效用模型生成伪偏好。
  - **PeCAID**：偏好感知版本，仅用人类偏好数据，通过预对齐LLM近似奖励模型。

## 3. 实验设计
- **数据集与场景**：
  - **单约束安全对齐**：PKU‑SafeRLHF 30K 数据集，以Alpaca‑7b‑reproduced为参考模型，约束“安全性”提升量不低于指定阈值 \(b\)，主目标为帮助性。
  - **多约束对齐**：Anthropic HH‑RLHF 数据集，LLaMA2‑7B微调为参考模型，同时约束无害性和幽默性提升，主目标为帮助性。
- **对比方法**：
  - 单约束任务：非迭代对偶方法 **one‑shot**，以及单纯优化帮助性/安全性的 **DPO** 基线。
  - 多约束任务：与 one‑shot 方法对比。
- **评价指标**：
  - 平均帮助性、安全性（或无害性、幽默）分数提升。
  - 期望 vs 实际约束改善散点图、分布位移图。
  - GPT‑4o‑mini 评估的胜率（单约束）。
  - 对抗攻击下的安全性/帮助性胜率（AdvBench）。

## 4. 资源与算力
- **GPU 配置**：
  - 模型更新：**5 块 NVIDIA A6000 (48 GB)**。
  - 在线响应生成与评估：**3 块同型号 GPU**。
- **训练时间**：
  - 单约束多shot总训练约 **6 小时**（4 个迭代，每迭代 DPO 约 40 分钟；额外生成/评估约 150 分钟）。
  - 相比 one‑shot，额外时间开销主要来自多轮生成和评估。

## 5. 实验数量与充分性
- **实验组数**：
  - 单约束：**7 个不同阈值**（\(b = 3,4,…,9\)），每组对比 one‑shot 和 DPO 基线。
  - 多约束：**14 种组合**的（无害性提升，幽默性提升）阈值。
  - 额外进行**GPT 评估**和**对抗攻击鲁棒性测试**。
  - 收敛性分析：不同提示数、响应数对偶变量收敛实验。
- **评价公平性**：
  - 与 one‑shot **保持相同 DPO 训练总 epoch**，仅增加对偶更新轮次。
  - 多 shot 使用 one‑shot 解作为对偶变量**热启动**，避免额外成本。
  - 采用两种奖励模型评估 + GPT 评估，减少奖励过优化偏差；对抗测试进一步验证泛化性。
- **总体判断**：实验设计全面，对比公平，覆盖单/多约束，验证了理论结论，实验数量充足。

## 6. 论文的主要结论与发现
- **多shot方法**比 one‑shot **更准确地满足约束阈值**，且在高安全要求下仍保持更高的帮助性。
- 在**帮助性与安全性权衡曲线**上，多shot实现了**帕累托改进**（同等安全下帮助性更高，反之亦然）。
- 多约束场景下能同时满足多重约束，并在**约束强度增加时主奖励下降**，符合预期。
- 理论上证明**原‑对偶间隙和策略最优性间隙均受限于 LLM 参数化误差**，多shot对齐可找到近似最优的受约束策略。

## 7. 优点
- **理论性强**：首次给出受限LLM对齐在参数空间下的原‑对偶间隙和最优性分析，为后续研究提供证明框架。
- **方法普适**：支持模型感知和偏好感知两种实现，易于与现有对齐算法结合。
- **实验全面且公平**：严格对齐总训练量，采用热启动避免额外负担，多种评估维度验证有效性。
- **效果显著**：在安全对齐和多约束任务上均大幅超越 one‑shot，且对对抗攻击更鲁棒。

## 8. 不足与局限
- **模型规模有限**：仅实验于 7B 级模型，未在数十B或百B级模型上验证扩展性。
- **约束类型局限**：主要针对二分类安全性/无害性/幽默性，未涉及更复杂或连续型约束。
- **训练流程未与监督微调结合**：实际对齐常包含 SFT，但实验未讨论该方法在 SFT 后的适用性。
- **理论假设较强**：依赖严格可行性和强凸性等假设，实际中可能不严格成立。
- **样本复杂度未分析**：未给出收敛所需的在线采样次数或样本量理论结果。

（完）
