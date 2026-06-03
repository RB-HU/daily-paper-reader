---
title: "Preference Learning for AI Alignment: a Causal Perspective"
title_zh: 来自因果视角的偏好学习用于AI对齐
authors: "Kasia Kobalczyk, Mihaela van der Schaar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=iuD649wPAw"
tags: ["query:fla"]
score: 6.0
evidence: 从因果角度研究偏好学习对齐，可提升金融AI智能体奖励模型的鲁棒性
tldr: 奖励建模在偏好数据对齐中存在泛化挑战。本文从因果角度提出框架，利用因果推断工具箱识别并缓解偏好异质性、混淆等难题。通过因果启发的方法提升奖励模型鲁棒性，可为金融AI智能体在用户偏好差异大的场景下提供更可靠的对齐。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 613, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 691, \"height\": 278, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 421, \"height\": 279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1660, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 882, \"height\": 411, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iud649wpaw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1330, \"height\": 521, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-iud649wpaw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 865, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-iud649wpaw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1457, \"height\": 469, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-iud649wpaw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1456, \"height\": 469, \"label\": \"Table\"}]"
motivation: 现有偏好学习对齐方法存在泛化难题，需提升鲁棒性。
method: 提出基于因果范式的奖励建模，识别因果错误和偏好异质性。
result: 因果启发方法能提高奖励模型在分布偏移下的鲁棒性。
conclusion: 该因果方法为金融智能体对齐提供了更稳健的理论框架。
---

## Abstract
Reward modelling from preference data is a crucial step in aligning large language models (LLMs) with human values, requiring robust generalisation to novel prompt-response pairs. In this work, we propose to frame this problem in a causal paradigm, providing the rich toolbox of causality to identify the persistent challenges, such as causal misidentification, preference heterogeneity, and confounding due to user-specific factors. Inheriting from the literature of casual inference, we identify key assumptions necessary for reliable generalisation and contrast them with common data collection practices. We illustrate failure modes of naive reward models and demonstrate how causally-inspired approaches can improve model robustness. Finally, we outline desiderata for future research and practices, advocating targeted interventions to address inherent limitations of observational data.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **背景**：在大语言模型对齐中，基于人类偏好的奖励建模（如 RLHF）是关键步骤。现有方法依赖统计关联，容易学到虚假相关性（如长度、格式），导致在分布外（OOD）或反事实场景下泛化失败。
- **核心问题**：偏好数据收集通常是非受控、机会性的——用户自己撰写提示并打分，这会引入**因果误识别**、**偏好异质性**，以及**用户特定因素造成的混杂**，使得奖励模型无法可靠回答“如果改变响应某特征，偏好会如何变化”这类反事实问题。
- **论文目标**：从因果推断角度重新框架化偏好学习，利用潜在结果、识别性假设、潜变量模型等工具，揭示当前做法的缺陷，并提出因果启发的方法提升奖励模型鲁棒性，最终为更稳健的数据收集与对齐路线提供理论基础。

### 2. 方法论：核心思想与关键技术细节
- **因果形式化**：将偏好学习视为多处理因果推断问题。定义潜在奖励 \(R(x,y)\) 和偏好标签 \(L\)，基于 Bradley-Terry 模型：\(P(L=1) = \sigma(R(x,y)-R'(x,y'))\)。目标是从观测数据估计反事实期望 \(E[L(x;y,y')]\)。
- **识别性假设**：
  - 一致性、无条件无混杂、无条件正定性（观测空间）→ 统计关联即因果关联。
  - 由于高维文本空间难以满足正定性，引入**潜变量模型**：假设存在映射 \(g\) 将文本压缩到潜在因子 \((Z_X, Z_T)\)，其中 \(Z_X\) 来自提示，\(Z_T\) 来自响应-提示交互特征。只要 **潜变量充分性**（奖励仅由 \(Z\) 决定）和 **潜变量正定性**（所有 \(Z\) 组合有非零支持）成立，即可从观测数据识别潜在偏好。
- **处理混杂与偏好异质性**：
  - 当用户特定目标 \(C\) 同时影响提示类型和偏好时，形成混杂，需条件于 \(C\) 估计子组效应。若忽略 \(C\) 会得到有偏估计。
  - **对抗多目标奖励模型**（Adversarial Multihead）：针对多目标场景（如 helpfulness vs. harmlessness），设计共享表示网络 \(g_\theta\) 后接目标特异奖励头 \(f_{w0}, f_{w1}\)，并增加对抗头 \(h_\phi\) 预测提示类型（作为 \(C\) 的代理）。通过 min-max 训练（梯度反转）使表示不包含提示类型信息，从而缓解训练时混杂导致的过拟合。

### 3. 实验设计
- **数据集与场景**：
  - **UltraFeedback**：研究潜变量正定性不足的影响。采用真实性和指令遵循作为真实潜在因子，合成偏好标签，控制训练集中两因子的相关系数 \(\rho_{tr}\)。
  - **增强 HH-RLHF**：研究多目标混杂。使用 Siththaranjan 等提供的扩展版，包含 helpful/harmless 两种目标，控制提示类型与目标的关联度 \(\rho = P(\text{type}(X)=C)\) 从 0.5（无混杂）到 1.0（完美混杂）。
- **基准与对比方法**：
  - UltraFeedback 实验：标准 BTL 模型（LLaMA-3-8B 嵌入 + MLP），对比不同 \(\rho_{tr}\) 下 ID 与 OOD 准确率。
  - HH-RLHF 实验：对比三种模型架构：
    - **Base**：将目标标签 c 与文本嵌入拼接送入 MLP。
    - **Multihead**：解耦表示与 reward 头（按目标分支）。
    - **Adversarial**：在 Multihead 基础上增加对抗头，使表示与提示类型无关。
  - 评价指标：测试集准确率，区分与训练分布一致/不一致的样本。

### 4. 资源与算力
- 论文**未明确说明**所用 GPU 型号、数量、训练时长等硬件资源。
- 实验使用的是预计算的 LLaMA-3-8B 嵌入，未对语言模型进行微调，仅训练轻量 MLP 奖励头，因此算力需求较小，但作者未提供详细算力信息。

### 5. 实验数量与充分性
- **实验规模**：
  - UltraFeedback：4 种 \(\rho_{tr}\) 值，每种 3 个随机种子，测试 ID 和 OOD 两种设置。
  - HH-RLHF：6 种 \(\rho\) 值（0.5~1.0），3 种模型，每个配置 5 个随机种子，总共 \(6\times 3\times 5=90\) 次训练。既评估测试准确率，也提供了训练集表现。
- **充分性与公平性**：
  - 实验控制了关键混淆变量，对比因果启发架构与朴素基线，展现了鲁棒性差异。
  - 但对比方法只限于自身设计的三个架构，未与现有去偏或鲁棒奖励建模方法（如 ODIN, RRM）直接比较，缺乏横向参照。
  - 数据集仅两个，且都使用合成或半合成设置，真实场景覆盖有限。

### 6. 主要结论与发现
- 因果框架揭示：偏好学习泛化的核心是满足无混杂、潜变量正定性等因果假设，而常见收集做法常违背这些假设。
- 潜在因子的强相关会导致 OOD 泛化能力严重下降（准确率从 ~68% 跌至 ~58%），训练相关性越高，OOD 性能越差。
- 用户目标作为混杂源会使模型过拟合到训练分布，对抗多目标架构能显著提升不一致样本准确率（尤其强混杂时，从 ~55% 提升至 ~60%）。
- 因果启发模型能提高鲁棒性，但无法完全补偿潜变量重叠不足，因此需要转向**干预式数据收集**以增强因果辨别力。

### 7. 优点
- **新颖视角**：首次将潜在结果因果推断范式系统引入 LLM 偏好学习，形式化了因果误识别、混杂等关键挑战。
- **理论-实践结合**：清晰界定识别性假设，并通过定制实验验证假设违背的后果，具有可重复性和教学意义。
- **针对性解决方案**：针对多目标混杂提出对抗表示学习，简单有效，且具备架构可解释性。
- **前瞻性指导**：明确提出未来数据收集应包含用户解释、主动查询和干预控制，为实践者指明方向。

### 8. 不足与局限
- **假设强且难验证**：潜变量充分性、潜变量正定性在真实开放文本中难以保证，尤其是完全共线特征可能使理论保证失效。
- **实验简化的因果发现挑战**：通用实验中，真实潜在因子已知（UltraFeedback）或使用类型标签作为代理，而现实场景中这些必须从无监督或弱监督中学习，论文未验证在此更困难设置下的可行性。
- **对抗训练的局限性**：需要目标标签 \(C\) 已知或具有良好代理，无法直接处理未观测混杂。对抗训练也可能造成表示信息损失，影响同分布性能。
- **评价维度单一**：仅比较准确率，未考察校准、公平性、奖励建模对下游 RL 策略的影响等。
- **对比基线不足**：未与近期去偏奖励模型（如 ODIN、RRM）或因果表示学习方法比较，说服力受限。
- **算力与规模未说明**：缺乏对真实大规模端到端训练场景的评估，实践参考价值部分受限。

（完）
