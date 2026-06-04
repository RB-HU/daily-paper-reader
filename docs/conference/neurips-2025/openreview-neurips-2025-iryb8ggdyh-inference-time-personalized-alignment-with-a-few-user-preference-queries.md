---
title: Inference-Time Personalized Alignment with a Few User Preference Queries
title_zh: 基于少量用户偏好查询的推理时个性化对齐
authors: "Victor-Alexandru Pădurean, Parameswaran Kamalaruban, Nachiket Kotalwar, Alkis Gotovos, Adish Singla"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=irYb8GGDyh"
tags: ["query:fla"]
score: 6.0
evidence: 少量用户偏好查询实现推理时个性化对齐
tldr: 针对生成模型对用户偏好对齐需大量查询或明确文本描述的问题，本文提出推理时方法 UserAlign，仅通过少量成对比较问题利用物流赌博机理论从固定响应池中选择最优答复。该方法在有限反馈下实现了高效个性化对齐，为金融对话等需隐私保护的对齐场景提供了轻量级替代方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 1130, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1403, \"height\": 1005, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1403, \"height\": 814, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1299, \"height\": 759, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1431, \"height\": 1090, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1395, \"height\": 1162, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1301, \"height\": 759, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1464, \"height\": 1319, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1456, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1240, \"height\": 667, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-iryb8ggdyh/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1435, \"height\": 660, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1313, \"height\": 520, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1439, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1277, \"height\": 303, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1430, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1422, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1403, \"height\": 1607, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1405, \"height\": 1607, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1449, \"height\": 304, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1355, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-iryb8ggdyh/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1418, \"height\": 188, \"label\": \"Table\"}]"
motivation: 现有个性化对齐方法依赖大量偏好标注或显式文本指令，效率低下且不适用于隐私敏感场景。
method: 采用基于 logistics bandit 的最佳臂识别框架，通过少量成对反馈在推理时动态选择个性化响应。
result: 实验表明，仅需数次查询即可达到与大批量微调相当的对齐效果。
conclusion: 该方法为对齐技术开辟了无需训练、注重隐私的新方向，可直接应用于金融智能体的个性化交互。
---

## Abstract
We study the problem of aligning a generative model's response with a user's preferences. Recent works have proposed several different formulations for personalized alignment; however, they either require a large amount of user preference queries or require that the preference be explicitly specified as a text input. In this paper, we propose a novel inference-time personalized alignment method, UserAlign, that elicits the user's preferences with a few queries as pairwise response comparisons. In particular, UserAlign builds on the theoretical framework of best-arm identification in logistic bandits and selects a personalized response from a fixed pool of the model's generated responses. The key idea is to consider the user's feedback consistent and noise-free, and incorporate it into the theoretical framework to identify the best response quickly. Experimental results across several tasks,  involving personalized text and image generation, showcase the effectiveness of UserAlign in achieving personalized alignment.

---

## 论文详细总结（自动生成）

好的，以下是基于所提供论文的结构化中文总结：

### 1. 研究动机与核心问题

*   **核心问题**：如何在推理时，仅通过有限次交互，快速将生成模型的输出与特定用户的个性化偏好对齐。
*   **研究背景**：
    *   现有的大模型对齐方法（如RLHF、DPO）主要面向群体平均偏好，难以满足用户的个性化需求，例如独特的写作风格、视觉审美等。
    *   **训练时个性化方法**需要大量用户特定数据，成本高昂。
    *   **推理时个性化方法**虽然灵活，但多数要求用户提供明确的文本指令，对于复杂或难以言说的偏好，认知负担大且不够精确。
    *   其他基于主动学习的推理时方法，虽然理论上有效，但在实践中通常需要大量的成对比较查询（pairwise comparisons）才能收敛，实用性不强。

### 2. 方法论

*   **核心思想**：本文提出 **UserAlign**，一种新颖的推理时个性化对齐方法。它借鉴了物流赌博机中的最佳臂识别理论，通过少量成对比较问题，从一个预生成的固定响应池中高效地挑出最符合用户偏好的响应。
*   **关键技术细节与算法流程**：
    1.  **问题建模**：系统将用户的潜在偏好建模为一个 Bradley-Terry-Luce（BTL）模型。对于一个输入提示 \( x \) 和一组候选响应 \( Y_{cand} \)，目标是找到能使对基线响应的胜率最大化的最优响应 \( y^* \)。
    2.  **理论框架（UserAlign Loss）**：算法通过主动选择响应对并收集用户反馈（偏好 \( y1 \succ y2 \) 或反之），迭代更新偏好数据集 \( D \)。通过求解最大似然估计（MLE）得到当前偏好参数 \( \hat{\theta}_t \)，并构建一个基于损失（loss-based）的置信域 \( \Theta_t \)。然后，算法选择能最大化当前最优响应 \( y_t^{(1)} \) 在置信域内的“遗憾”的挑战响应 \( y_t^{(2)} \)。当该最大遗憾值低于预设阈值 \( \epsilon \) 时，算法停止并输出 \( y_t^{(1)} \)。
    3.  **实际改进（UserAlign）**：原始的 UserAlign Loss 置信域收缩缓慢。为解决此问题，UserAlign 引入了一个关键假设：**用户的反馈是一致的、无噪声的**。基于此，它利用观察到的偏好数据构建一个由半空间交叉定义的“一致性集合” \( H_t \)，并通过 \( \Theta_t \leftarrow \Theta_t \cap H_t \) 的方式，激进地缩减置信域，从而大大加快了最优响应的识别速度。

### 3. 实验设计

*   **数据集与场景**：
    *   **2D 可控场景（food2d）**：一个“辣度”和“素食度”的二维偏好空间，用于可解释性实验。
    *   **高维文本生成场景（food64d, travel64d, dsp64d）**：使用预训练的句子 Transformer 提取 64 维特征，模拟真实世界的食品推荐、旅行建议、文学描述等任务。其中 dsp64d 使用了一个已有的特定领域偏好基准数据集。
    *   **高维图像生成场景（visual512d）**：使用 OpenCLIP 提取 512 维特征，进行游戏英雄概念艺术等图像生成任务。
*   **用户模拟**：实验使用了三种类型的“模拟用户”：
    *   \( u = BTL \)：根据 BTL 概率模型做出偏好选择。
    *   \( u = Consistent \)：做出一致且无噪声的偏好选择。
    *   \( u = GPT \)：通过向 GPT 大模型提供人物描述（persona）来让其模拟特定用户做出选择。
    *   \( u = Human \)：在用户研究中招募真实人类进行评价。
*   **对比方法**：
    *   **Oracle**：能直接选出最优解，代表理论上限。
    *   **Random**：随机选择一个响应，代表性能下限。
    *   **iidBest**：随机采样若干对进行比较，然后基于这些随机采样数据计算 MLE 并选出最优响应。
    *   **UserAlign Loss**：本文所提方法的理论版本（不包含一致性假设加速）。

### 4. 资源与算力

*   文中**未明确说明**使用了什么型号的GPU或训练时长。主要的计算开销集中在 GPT-4o 等API调用（用于生成候选响应和模拟用户反馈），以及本地的嵌入（Embedding）提取。附录 F 提到，实验在一台配备双 AMD EPYC 7702 (128核) 和 2TB 内存的服务器上运行。对于算法核心计算部分，在 food64d 域上单步耗时仅约 0.13 秒，在 visual512d 域上约 0.87 秒。

### 5. 实验数量与充分性

*   **实验数量**：实验设计比较广泛，覆盖了1个2D域和4个高维文本/图像域。在每个域中，包含多种用户模拟类型及真实人类用户。所有结果均在多个随机种子、问题和用户模拟条件下平均得出。
*   **充分性与客观性**：
    *   **充分性**：实验比较充分。它不仅比较了不同方法的胜率和交互成本，还涵盖了从理论到模拟再到真实用户的全面评估。
    *   **客观性**：将提出的方法与理论上界、随机下界以及一个公平的主动学习基线（iidBest）进行比较，这是比较客观的。用户研究部分对方法论进行了盲测（blinded），并控制了交互预算，增强了公平性。

### 6. 主要结论与发现

*   **高效的个人化对齐**：UserAlign 方法能够在极低的交互成本下（通常只需不到10轮成对比较），显著优于随机选择和同等预算下的随机查询方法，达到很高的胜率。
*   **理论到实践的跨越**：通过将用户反馈假设为一致且无噪声，并据此激进地收缩置信域，UserAlign 克服了传统理论方法收敛慢的缺点，使其在现实场景中实用。
*   **广泛适用性**：该方法的有效性在文本和图像生成任务中，乃至真实人类用户评估中都得到了验证。

### 7. 优点

*   **方法新颖高效**：将物流赌博机理论与“用户反馈一致性”的实践洞察巧妙结合，实现了用极少量查询就能快速个性化对齐，是一种轻量级且有效的解决方案。
*   **隐私友好**：作为一种推理时方法，它不要求访问或微调大模型权重，只需要API级交互，这对于数据敏感的金融等领域应用是一个关键优势。
*   **理论保证**：方法具有坚实的理论基础，提供了高概率下的次优性和停止时间上界保证。
*   **评估全面**：实验覆盖了多种模态、模拟与真实用户，并与多种基线进行了公平比较，论证充分。

### 8. 不足与局限

*   **反馈形式单一**：目前仅支持成对比较这一种用户反馈形式，而未探索如排序、自然语言等可能更丰富的反馈方式。
*   **依赖于预生成池**：方法是从一个固定的候选响应池中做选择，而非在推理时自适应地引导生成，这限制了最终响应的多样性。
*   **会话独立性**：当前方法独立处理每个用户问题，无法利用用户的历史偏好数据来进一步降低新查询的交互成本。
*   **用户假设前提**：方法有效性的一个关键前提是，在短期、特定任务的交互中用户的反馈是一致的、无噪声的。这个假设在长期或偏好模糊的场景下可能不成立。

（完）
