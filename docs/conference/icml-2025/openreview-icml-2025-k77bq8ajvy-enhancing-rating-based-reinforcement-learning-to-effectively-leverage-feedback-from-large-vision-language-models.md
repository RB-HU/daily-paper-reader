---
title: Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models
title_zh: 增强基于评级的强化学习以有效利用大型视觉语言模型的反馈
authors: "Tung Minh Luu, Younghwan Lee, Donghoon Lee, Sunho Kim, Min Jun Kim, Chang D. Yoo"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=k77bq8AJVy"
tags: ["query:fla"]
score: 6.0
evidence: 利用AI反馈进行奖励学习的RL方法，类似于用于领域适应的RLHF
tldr: 为解决强化学习中奖励函数设计难题，本文提出ERL-VLM方法，不依赖人类标注，而是利用大型视觉语言模型生成评级反馈来学习奖励函数。该方法基于评级而非成对比较，提升了反馈利用效率，在多种任务中表现优于传统RLHF方法。该技术可作为金融智能体适配的RLHF方案，降低人工对齐成本。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1419, \"height\": 672, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 848, \"height\": 731, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1769, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1774, \"height\": 708, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1679, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1680, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1087, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1754, \"height\": 156, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1277, \"height\": 654, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1282, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1281, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1626, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1777, \"height\": 342, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1477, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1771, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1479, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 200, \"height\": 201, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 200, \"height\": 202, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 199, \"height\": 203, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 199, \"height\": 197, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 199, \"height\": 201, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 199, \"height\": 204, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 200, \"height\": 199, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1663, \"height\": 237, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1666, \"height\": 152, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1036, \"height\": 164, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1670, \"height\": 137, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1658, \"height\": 213, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1219, \"height\": 171, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1546, \"height\": 132, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1545, \"height\": 123, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1130, \"height\": 130, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1783, \"height\": 2019, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k77bq8ajvy/fig-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 1615, \"height\": 2285, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 874, \"height\": 239, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1771, \"height\": 1012, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 780, \"height\": 756, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 957, \"height\": 887, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 797, \"height\": 495, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1748, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1749, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1750, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1749, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k77bq8ajvy/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1749, \"height\": 268, \"label\": \"Table\"}]"
motivation: 传统RLHF获取人类反馈成本高、扩展性差，需要借助AI反馈实现更高效可扩展的奖励学习。
method: 提出ERL-VLM，一种基于评级的强化学习方法，利用AI反馈学习奖励函数，降低对人类监督的依赖。
result: 实验证明，ERL-VLM在标准RL环境中性能优于基于成对比较的RLHF方法，且更高效。
conclusion: 利用AI反馈进行奖励学习是RLHF的重要扩展，为金融领域智能体后训练提供了低成本对齐路径。
---

## Abstract
Designing effective reward functions remains a fundamental challenge in reinforcement learning (RL), as it often requires extensive human effort and domain expertise. While RL from human feedback has been successful in aligning agents with human intent, acquiring high-quality feedback is costly and labor-intensive, limiting its scalability. Recent advancements in foundation models present a promising alternative--leveraging AI-generated feedback to reduce reliance on human supervision in reward learning. Building on this paradigm, we introduce ERL-VLM, an enhanced rating-based RL method that effectively learns reward functions from AI feedback. Unlike prior methods that rely on pairwise comparisons, ERL-VLM queries large vision-language models (VLMs) for absolute ratings of individual trajectories, enabling more expressive feedback and improved sample efficiency. Additionally, we propose key enhancements to rating-based RL, addressing instability issues caused by data imbalance and noisy labels. Through extensive experiments across both low-level and high-level control tasks, we demonstrate that ERL-VLM significantly outperforms existing VLM-based reward generation methods. Our results demonstrate the potential of AI feedback for scaling RL with minimal human intervention, paving the way for more autonomous and efficient reward learning.

---

## 论文详细总结（自动生成）

好的，作为资深学术论文分析助手，我将基于您提供的论文内容，生成一份结构化、深入、客观的中文总结。

### 1. 研究动机与核心问题

*   **核心问题**：强化学习（RL）的成功高度依赖于精心设计的奖励函数，但手动设计奖励函数需要大量领域知识和人力投入，容易出错，且难以扩展。基于人类反馈的强化学习（RLHF）虽能解决部分问题，但获取高质量人类反馈成本高昂、劳动密集。
*   **研究动机**：为了解决上述可扩展性问题，研究者们开始探索利用大型基础模型（如视觉-语言模型，VLMs）作为人类反馈的“代理”，以自动生成奖励信号或反馈，从而降低对人类监督的依赖。然而，现有的基于VLM的偏好（成对比较）反馈方法存在样本效率低、计算成本高、查询歧义等不足。
*   **整体含义**：本文旨在提出一种更有效、更高效的方法，利用VLM的反馈来自动学习RL的奖励函数，推动更自主、可扩展的奖励学习范式的发展。

### 2. 方法论：ERL-VLM

本文提出了**ERL-VLM（Enhancing Rating-based Learning to Effectively Leverage Feedback from Vision-Language Models）**，其核心思想是查询VLM对智能体的**单条轨迹**进行**绝对评级**，而非进行成对比较，从而获取更具表达力的反馈。

**关键技术细节与流程（参见图1与算法1）：**

*   **评级生成**:
    *   **模型**: 使用大型VLM（如Gemini）作为教师。
    *   **查询方式**: 设计包含任务描述和图像序列（轨迹片段）的提示（Prompt），引导VLM先**分析**智能体行为，再基于给定评级集合（如“差、中、好”）输出一个**离散评级标签** `ỹ`。
    *   **数据集**: 将轨迹分段 `σ` 及其对应的评级 `ỹ` 存入评级数据集 `D`。

*   **奖励学习（核心贡献）**: 基于数据集 `D` 训练一个奖励函数模型 `r̂_ψ`，并引入了两项关键增强来解决从VLM评级中学习的不稳定性：
    *   **问题1：数据不平衡**: 训练初期，数据集中“差”的评级可能占绝大多数。
        *   **解决方案**:
            *   **分层采样**: 确保每个训练批次都包含来自所有评级类别的样本。
            *   **加权损失函数**: 根据各类别的样本频率分配权重，以平衡不同类别对模型训练的影响。
    *   **问题2：标签噪声**: VLM可能产生“幻觉”，给出不精确或错误的评级。
        *   **解决方案**: 采用对标签噪声更具鲁棒性的**平均绝对误差（MAE）损失**函数，取代传统的交叉熵损失。优化的目标函数如下：
            ```
            L_MAE(ψ, D) = E_(σ, ỹ)~U_S(D) [ Σ_{i=0}^{n-1} |μ_σ(i) - P_σ(i)| ]
            ```
            其中 `U_S` 表示分层采样策略，`μ_σ(i)` 是指示函数，`P_σ(i)` 是根据公式(1)计算出的轨迹段 `σ` 被分配到第 `i` 个评级类别的概率。

*   **策略学习**: 奖励模型 `r̂_ψ` 训练完成后，用于为回放缓冲区的所有经验重新计算奖励。随后，可以使用任何标准的离线或在线RL算法（如SAC或IQL）来训练策略 `π_θ`。

### 3. 实验设计

*   **测试场景与数据集**:
    *   **MetaWorld**: 低层级连续控制任务，包括Sweep Into、Drawer Open、Soccer三个任务。使用渲染的图像观察。
    *   **ALFRED**: 高层级视觉语言导航任务，包含4类共20个任务（如PickupObject, CoolObject）。使用仿真器提供的自我中心RGB图像和文本指令。
    *   **真实机器人**: 在真实世界的桌面上使用Sawyer机械臂，执行Sweep Bowl, Drawer Open, Pickup Banana三个任务。图像由RealSense相机捕获。

*   **对比基准方法**:
    *   **相似度得分法**: **CLIP Score**, **RoboCLIP Score**。直接利用VLM嵌入空间的余弦相似度作为奖励信号。
    *   **AI反馈法**: **RL-VLM-F**。这是最直接的对比方法，它查询VLM获取成对偏好来学习奖励函数。
    *   **上限基线**: **Environment Reward**。即使用环境本身定义的真值奖励函数（MetaWorld为稠密奖励，ALFRED为稀疏奖励）。

*   **评估指标**:
    *   所有任务均采用**成功率**作为核心评估指标。结果为3次运行的平均值和标准差。

### 4. 资源与算力

*   论文**未明确说明**所使用的GPU型号、数量或总训练时长。文中仅提及使用了Gemini-1.5-Pro作为VLM教师模型进行API查询，并设定了有限的查询预算（MetaWorld为10000次，ALFRED为1500次），侧重于计算效率的对比，但未给出整体算力开销的详细信息。

### 5. 实验数量与充分性

*   **实验数量**: 论文进行了较为充分的实验，涵盖了**7个模拟环境任务**和**3个真实世界任务**；对比了4种主要基准方法；并对自身方法进行了多组消融研究（如移除MAE损失、移除分层采样、不同评级类别数量、标签平滑的影响等）。
*   **充分性与公平性**: 实验设计较为客观和公平。
    *   所有对比方法在RL算法、网络架构、查询预算等关键超参数上保持一致，确保变量仅为奖励生成/学习方式。
    *   在多个不同难度的任务和领域（低层控制、高层导航、真实机器人）上都验证了方法的有效性，增强了结论的泛化性。
    *   丰富的消融实验清晰地展示了各增强组件的重要性及其适用场景。

### 6. 主要结论与发现

*   **性能卓越**: ERL-VLM在所有3个领域的7个模拟任务中，成功率和学习效率均显著优于基于相似度得分（CLIP, RoboCLIP）和基于偏好的VLM反馈方法（RL-VLM-F），甚至在某些任务上超越了环境自带的稀疏奖励。在真实机器人任务中也展现了有效性。
*   **反馈效率更高**: 与基于成对偏好的方法相比，基于绝对评级的反馈在相同的查询预算下，提供了更丰富、更具全局价值的信息，使得奖励函数学习更有效，特别在ALFRED这类复杂多任务环境中优势明显。
*   **增强组件有效**: 分层采样和加权损失函数有效缓解了数据不平衡问题，而采用MAE损失函数相比交叉熵损失或标签平滑，能更鲁棒地处理VLM的噪声标签，是性能提升的关键。
*   **评级粒度敏感性**: VLM评级类别的数量（`n`）需根据任务特性调整。简单的二元任务（如 Sweep Into）适合 `n=2`，而更具主观性或过程性的任务（如 Drawer Open）则 `n=3` 更佳；过多的类别（`n=4`）可能因VLM评估模糊而降低性能。

### 7. 优点

*   **方法创新**: 创新性地将VLM反馈形式从传统的偏好比较切换到绝对评级，并提出了一整套针对评级学习的稳定增强方案（分层采样+MAE损失），解决了数据不平衡和标签噪声两大实际问题。
*   **任务泛化性强**: 无需环境源码或特权信息，仅依赖图像和任务描述即可工作，在低层控制、高层导航和真实机器人等多种任务上均表现优异，展示了强大的泛化潜力。
*   **减少人类负担**: 仅需人类提供语言任务描述，极大降低了奖励工程中的人力成本和专业知识门槛。
*   **实用性强**: 不依赖昂贵的专家演示，且计算效率优于基于偏好的VLMs反馈方法，更适用于实际应用。

### 8. 不足与局限

*   **VLM依赖与偏差**: 方法性能完全受限于所使用的VLM教师模型的能力和固有偏见。VLM在特定领域的知识盲区或其预训练数据中的偏见会直接传导给RL智能体，可能引发安全或公平性问题。
*   **VLM反馈质量**: VLM提供的评级仍存在随机性和不一致性，虽然MAE损失有所缓解，但未根本解决。这可能导致在极端复杂或VLM完全缺乏先验知识的任务中失效。
*   **提示词工程敏感性**: 性能高度依赖于提示词的设计，特别是分析和评级描述的清晰度。这在不同任务间可能需要精心调整，引入了新的脆弱性。
*   **成本未明确**: 虽然方法相比人类反馈和偏好查询更高效，但调用大型VLM（如Gemini）的API本身仍存在一定的金钱和时间成本，论文未对此进行量化和讨论。
*   **任务范围有限**: 实验主要集中在物体操控和导航任务，尚未在更广泛的RL领域（如游戏、自动驾驶、推荐系统）得到验证，其结论的泛用性有待进一步检验。

（完）
