---
title: "HPS: Hard Preference Sampling for Human Preference Alignment"
title_zh: HPS：用于人类偏好对齐的难偏好采样
authors: "Xiandong Zou, Wanyu Lin, Yuchen Li, Pan Zhou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=hLvWwRZkok"
tags: ["query:fla"]
score: 4.0
evidence: 提出难偏好采样方法用于鲁棒LLM对齐，是一种后训练偏好优化技术
tldr: 为解决现有偏好优化方法处理有害内容不佳、对非偏好响应利用不足的问题，本文提出Hard Preference Sampling (HPS)。该方法在训练损失中优先最适合响应，并强调与偏好响应相近的“难”非偏好响应的区分。实验表明HPS在多个对齐基准上提升了鲁棒性和效率，为训练安全可靠的对话智能体提供了有力工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-hlvwwrzkok/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 870, \"height\": 595, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 870, \"height\": 186, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1762, \"height\": 747, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 390, \"height\": 223, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 727, \"height\": 310, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1761, \"height\": 695, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 842, \"height\": 383, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 893, \"height\": 411, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hlvwwrzkok/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 961, \"height\": 490, \"label\": \"Table\"}]"
motivation: 传统偏好优化易忽视有害内容且难以有效利用非偏好样本。
method: 设计损失函数优先最偏好响应，并重点利用相似但非偏好响应作为难样本。
result: 在多个对齐任务中更鲁棒高效，提升模型安全性。
conclusion: 为LLM的人类偏好对齐提供了一种简单而有效的难样本采样策略。
---

## Abstract
Aligning Large Language Model (LLM) responses with human preferences is vital for building safe and controllable AI systems. While preference optimization methods based on Plackett-Luce (PL) and Bradley-Terry (BT) models have shown promise, they face challenges such as poor handling of harmful content, inefficient use of dispreferred responses, and, specifically for PL, high computational costs. To address these issues, we propose Hard Preference Sampling (HPS), a novel framework for robust and efficient human preference alignment.  HPS introduces a training loss that prioritizes the most preferred response while rejecting all dispreferred and harmful ones. It emphasizes “hard” dispreferred responses — those closely resembling preferred ones — to enhance the model’s rejection capabilities. By leveraging a single-sample Monte Carlo sampling strategy, HPS reduces computational overhead while maintaining alignment quality. Theoretically, HPS improves sample efficiency over existing PL methods and maximizes the reward margin between preferred and dispreferred responses, ensuring clearer distinctions. Experiments on HH-RLHF and PKU-Safety datasets validate HPS’s effectiveness, achieving comparable BLEU and reward scores while greatly improving reward margins and thus reducing harmful content generation.

---

## 论文详细总结（自动生成）

好的，以下是对论文《HPS: Hard Preference Sampling for Human Preference Alignment》的结构化中文总结。

### 1. 论文的核心问题与整体含义

-   **研究背景**：对齐大语言模型（LLM）与人类偏好（如帮助性、无害性）是构建安全可控 AI 的关键。现有方法多基于 Plackett-Luce (PL) 和 Bradley-Terry (BT) 排序模型来优化偏好。
-   **核心问题**：现有基于 PL 和 BT 的偏好优化方法存在三个主要缺陷：
    1.  **处理有害内容不力**：PL 损失函数会无意中将有害响应视为比更差响应“更优”的选择，削弱了模型彻底拒绝有害内容的能力；BT 损失仅关注成对比较中最差的响应，忽略了其他问题响应。
    2.  **对非偏好响应利用不足**：PL 损失平等对待所有非偏好响应，忽略了它们之间不同的“信息量”；BT 损失则丢失了排序列表中的宏观区分信息。
    3.  **计算成本高昂**：PL 损失需要计算和反向传播排序列表中所有响应的损失，计算和内存开销巨大。
-   **整体含义**：本文旨在提出一种新的偏好对齐框架 HPS，它能鲁棒地拒绝有害内容，高效利用非偏好响应中的“难样本”信息，并显著降低计算开销。

### 2. 论文提出的方法论

-   **核心思想**：Hard Preference Sampling (HPS) 框架的核心是，训练模型优先选择“最适合”的响应，并明确拒绝所有“非偏好”和“有害”的响应。在此之上，借鉴监督/对比学习的思想，HPS 特别强调“难”非偏好响应，即那些在奖励空间中与偏好响应非常相似、容易混淆的样本，通过重点区分它们来增强模型的判别和拒绝能力。
-   **关键技术细节与流程**：
    1.  **新的训练损失**：HPS 的基础损失函数鼓励模型将最适合的响应排在最前。该损失只关注提升最佳响应，而不是像 PL 损失那样递归地比较所有非偏好响应。
        -   **公式表示**：（以文本说明）对于一个包含一个提示、一个偏好响应和 n-1 个非偏好响应的样本，HPS 损失函数让模型最大化偏好响应相对于所有 n 个响应的优势概率。
    2.  **难偏好采样策略**：为了强调“难”样本，HPS 构建了一个非偏好响应的采样分布，该分布根据一个预训练的、与人类偏好对齐的奖励模型给每个非偏好响应分配的奖励分数进行加权。奖励分数越高的非偏好响应（即越“难”），被采样的概率越大。一个超参数 γ 用于控制这种偏向的强度。
    3.  **单样本蒙特卡洛采样**：为了提高效率，HPS 不计算所有非偏好响应的损失，而是在每次训练迭代中，根据上述重要性加权分布，随机采样**一个**非偏好响应参与损失计算。这极大降低了计算和内存开销。
    4.  **理论支撑**：
        -   **样本效率**：理论证明 HPS 的估计误差界为 O(n/√m)，优于 PL 损失的 O(n²/√m)，意味着达到同等对齐效果所需的样本更少。
        -   **奖励边际最大化**：理论证明，优化 HPS 损失等价于最大化偏好响应与“最难”（奖励最高）非偏好响应之间的奖励边际（Reward Margin），从而保证了更清晰的区分度和更少的有害输出。

### 3. 实验设计

-   **数据集与场景**：使用了两个主流数据集来评估帮助性和安全性，并进行了微调和迁移学习两种设定。
    -   **HH-RLHF**：多轮对话数据集。
    -   **PKU-SafeRLHF**：单轮问答数据集，侧重于安全性对齐。
    -   **迁移学习**：在一个数据集上微调，在另一个数据集上测试，以评估泛化能力。
-   **Benchmark 与对比方法**：以监督微调模型（SFT）为基础，对比了将三种偏好建模策略（BT、PL、HPS）集成到多种隐式奖励参数化框架中的方法，包括 DPO、EXO、IPO、SPPO 和 NCA。对比的 baseline 包括 `DPO-BT`， `DPO-PL`， `IPO-BT` 等。
-   **评估指标**：
    -   **生成质量**：BLEU（衡量与参考偏好答案的文本相似度）。
    -   **偏好对齐度**：Reward（使用一个独立的奖励模型评分）。
    -   **安全性/拒绝有害内容能力**：Reward Margin（计算偏好与非偏好响应的隐式奖励差距），值越高代表区分度越好，有害输出越少。
    -   **人类评估**：人工对生成回复的质量、安全性等进行 Likert 量表打分和胜率比较。
    -   **LLM 评估**：使用强大的指令模型 Qwen2.5-72B-Instruct 评估回复质量和胜率。

### 4. 资源与算力

-   **数据生成与标注**：使用8块 L40-S GPU 生成响应并计算奖励。
-   **模型训练**：使用4块 L40-S GPU 进行 LoRA 高效微调。
-   **训练时间**：报告了在相同硬件下不同方法的平均微调时间：
    -   PL-based 方法：168.4 ± 1.9 小时。
    -   BT-based 方法：62.8 ± 1.1 小时。
    -   **HPS-based 方法**：**64.4 ± 0.8 小时**。
    -   对比 PL 方法，HPS 实现了约 61.76% 的训练时间减少，验证了其效率优势。

### 5. 实验数量与充分性

-   **实验数量**：实验设计较为全面。
    -   **主要实验**：在 2 个数据集 × 2 种实验设定（微调与迁移）下，对比了 5 种基础方法 × 3 种建模策略（BT、PL、HPS）共 15 种组合，并报告了 4 项主要指标。这构成了核心对比实验矩阵。
    -   **消融实验**：研究了响应总数（5， 20， 50， 100 个）对 DPO-BT 和 DPO-HPS 性能的影响，验证了 HPS 的可扩展性。
    -   **人类与 LLM 评估**：进行了用户研究（30 个问题，20 位评分者）和 LLM 评估（Qwen-2.5），增加了结果说服力。
-   **充分性与公平性**：实验对比方法广泛，涵盖了当时的主流偏好优化方法。评估指标覆盖了生成质量、人类偏好和安全性多个维度。所有对比方法基于相同的 SFT 基模型和 LoRA 设置，计算资源的对比也在文中明确给出，总体来看实验设计是客观、公平且相当充分的。

### 6. 论文的主要结论与发现

-   HPS 在保持文本生成质量（BLEU）和整体偏好（Reward）与 SOTA 方法可比的前提下，**显著提高了奖励边际（Reward Margin）**。例如，在 HH-RLHF 上，DPO-HPS 相比 DPO-PL 将 Reward Margin 提升了超过 440%。
-   更高的奖励边际意味着模型能更清晰地区分偏好与非偏好/有害响应，从而**更有效地拒绝生成有害内容**。
-   在**样本效率**上，HPS 优于传统 PL 方法，能在相同数据量下实现更好的对齐效果。
-   在**计算效率**上，HPS 的单样本采样策略使其训练速度远快于需要处理所有响应的 PL 方法，仅略慢于简单的 BT 方法。
-   在迁移学习场景下，HPS 同样表现出色，证明了其**良好的鲁棒性和泛化能力**。

### 7. 优点

-   **方法创新性**：首次将“难样本挖掘”思想系统性地引入 RLHF 偏好对齐任务，通过奖励空间中的相似性来定义“难”非偏好响应，角度新颖且有效。
-   **理论与实验结合**：提供了样本复杂度和奖励边际最大化的理论证明，并用全面的实验（包括多维度指标、人类和 LLM 评估）加以验证，论证扎实。
-   **问题导向明确**：直接针对现有方法在拒绝有害内容和计算效率上的痛点，提供了简洁而优雅的解决方案，平衡了效果与效率。
-   **实验设计全面**：涵盖了多种主流隐式奖励模型、多数据集、多设定和详细的消融研究，结果可信度高。

### 8. 不足与局限

-   **评估可靠性**：论文承认，由于预算限制，在自动评估中使用了开源 LLM (Qwen-2.5) 来判断胜率。使用更强大的模型如 GPT-4 或 Claude 可能会得到更精确、更稳健的评估结果。
-   **“难”样本定义的依赖性**：HPS 的性能依赖于一个高质量的预训练奖励模型来准确估计非偏好响应的“难度”（即奖励分数）。如果奖励模型本身不够准确，采样策略的效力可能受到影响。论文未对使用不同质量奖励模型的影响进行敏感性分析。
-   **应用场景限制**：主要方法假设只有一个最优偏好响应，且目标是最小化误将有害内容判为无害的风险。虽然附录 E 提供了扩展到多个有效响应的方案，但基本框架更偏向于安全性要求严格的场景，可能在某些需要鼓励多样性的创意生成任务上不是最优选择。
-   **超参数 γ 的设置**：控制采样分布尖锐程度的超参数 γ 采用了在训练过程中线性增加的调度策略，该策略的有效性可能具有任务相关性，其调优难度和普适性未深入探讨。

（完）
