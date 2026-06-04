---
title: "Teaching Language Models to Evolve with Users: Dynamic Profile Modeling for Personalized Alignment"
title_zh: 教语言模型与用户共同进化：面向个性化对齐的动态画像建模
authors: "Weixiang Zhao, Xingyu Sui, Yulin Hu, Jiahe Guo, Haixiao Liu, Biye Li, Yanyan Zhao, Bing Qin, Ting Liu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=1V3Toke6XP"
tags: ["query:fla"]
score: 8.0
evidence: 基于强化学习的多轮对话LLM智能体个性化对齐
tldr: 针对现有方法在冷启动场景和长期个性化上的不足，提出RLPA框架，让LLM通过与模拟用户的多轮对话迭代推断用户画像，通过画像奖励和回复奖励双奖励结构进行训练，实现动态个性化对齐。实验表明该方法能有效建模用户偏好并持续提升对话质量，为智能体后训练提供了一种个性化适应技术。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1429, \"height\": 583, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1423, \"height\": 637, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1438, \"height\": 829, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1428, \"height\": 572, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 715, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1159, \"height\": 718, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1090, \"height\": 700, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1441, \"height\": 2224, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1441, \"height\": 2216, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-1v3toke6xp/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1428, \"height\": 625, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1442, \"height\": 526, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1440, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1458, \"height\": 1030, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1442, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1442, \"height\": 414, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1371, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1225, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 864, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 615, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-1v3toke6xp/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1195, \"height\": 142, \"label\": \"Table\"}]"
motivation: 现有个性化对齐方法在冷启动和长期场景下效果有限，无法动态适应用户变化。
method: 提出RLPA框架，利用强化学习让LLM在对话中迭代推断用户画像，并采用双奖励（画像准确度和回答质量）指导训练。
result: 实验证明RLPA能有效构建用户表示，持续提升对话的个性化和满意度。
conclusion: 该工作为对话智能体的长期个性化对齐提供了可行的后训练范式，适用于需要动态适应性的金融助手等场景。
---

## Abstract
Personalized alignment is essential for enabling large language models (LLMs) to engage effectively in user-centric dialogue. While recent prompt-based and offline optimization methods offer preliminary solutions, they fall short in cold-start scenarios and long-term personalization due to their inherently static and shallow designs. In this work, we introduce the Reinforcement Learning for Personalized Alignment (RLPA) framework, in which an LLM interacts with a simulated user model to iteratively infer and refine user profiles through dialogue. The training process is guided by a dual-level reward structure: the Profile Reward encourages accurate construction of user representations, while the Response Reward incentivizes generation of responses consistent with the inferred profile. We instantiate RLPA by fine-tuning Qwen-2.5-3B-Instruct, resulting in Qwen-RLPA, which achieves state-of-the-art performance in personalized dialogue. Empirical evaluations demonstrate that Qwen-RLPA consistently outperforms prompting and offline fine-tuning baselines, and even surpasses advanced commercial models such as Claude-3.5 and GPT-4o. Further analysis highlights Qwen-RLPA's robustness in reconciling conflicting user preferences, sustaining long-term personalization and delivering more efficient inference compared to recent reasoning-focused LLMs. These results emphasize the potential of dynamic profile inference as a more effective paradigm for building personalized dialogue systems.

---

## 论文详细总结（自动生成）

好的，以下是对该论文的结构化详细总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：当前的大语言模型对齐主要为“一刀切”的通用对齐，无法满足用户的个性化需求。现有的个性化方法（如基于提示或离线优化）本质上是**静态的、表层的**，在**冷启动**（无用户历史信息）和**长期、动态变化**的个性化场景中表现不足。
*   **整体含义**：论文提出，个性化对齐应被视作一个**动态的、多轮交互的过程**。模型需要在对话中持续推断和适应用户偏好，而非依赖预设信息。论文旨在通过强化学习，训练LLM具备动态推断和利用用户画像的能力，实现与用户“共同进化”的个性化对齐。

### 2. 论文提出的方法论

*   **核心思想**：提出 **RLPA** 框架，将个性化对齐建模为**多轮马尔可夫决策过程**，通过**强化学习**训练模型在与模拟用户的交互中，不断推断和更新用户画像，并生成画像一致的回复。
*   **关键技术细节**：
    *   **马尔可夫决策过程建模**：
        *   **状态**：截至当前轮的对话历史。
        *   **动作**：模型生成的回复。
        *   **奖励**：由两部分组成的回合级奖励信号。
    *   **框架三大组件**:
        1.  **模拟用户设计**：使用一个由GPT-4o-mini扮演、被赋予了预定义用户画像的模拟用户与策略模型交互。该模拟用户被设计成在对话中**逐步、自然地透露**个人信息，以模拟冷启动场景。
        2.  **画像奖励函数**：将用户画像表示为槽位-值对。模型在每一轮需输出其当前推断的画像 `ˆP`。该奖励通过计算推断画像与真实画像 `P` 的 **F1分数** 来量化推断的准确性。
            *   `R_t^profile = 2 * |ˆP_t ∩ P| / (|ˆP_t| + |P|)`
        3.  **回复奖励函数**：使用外部奖励模型（GPT-4o-mini）评估生成的回复与当前推断画像 `ˆP_t` 的一致性。奖励为标量，仅在回复满足自然度、相关性等**五个二元质量标准**时才为1，否则为0。
            *   `R_t^response = N * R * L * G * F`
    *   **训练目标与优化**：总奖励为 `R_t = R_t^profile + R_t^response`。使用**近端策略优化**算法优化该累积奖励，使模型学会在长期交互中平衡画像推断和个性化回复。

### 3. 实验设计

*   **数据集与基准**：
    *   **ALOE 基准**：包含多轮对话和多样化的用户画像属性。
    *   **Vanilla ALOE（格式内泛化）**：测试用户与训练用户共享画像模式，但内容不同。
    *   **Extended ALOE（跨格式泛化）**：测试用户包含未见过的属性类型和值，评估模型的泛化能力。
*   **对比方法**：
    *   **基于提示的方法**：Reminder, Self-Critic, Chain-of-Thought, RAG。
    *   **离线优化方法**：监督微调，直接偏好优化。
    *   **闭源商业模型**：GPT-4o, Claude-3.5-Sonnet 等。
    *   **推理模型**：DeepSeek-R1, OpenAI-o3-mini 等。
*   **核心评估指标**：
    *   **平均对齐分数**：GPT-4o作为评判员，评估模型回复与用户真实画像的一致性。
    *   **归一化提升率** 和 **归一化决定系数**：评估对齐分数在多轮对话中的提升趋势和一致性。

### 4. 资源与算力

*   **硬件**：所有实验在 **8 块 NVIDIA A100 80GB GPU** 上进行。
*   **训练框架**：使用 OpenRLHF 和 vLLM 实现可扩展的强化学习训练。
*   **具体时长**：文中未明确提及训练总时长。

### 5. 实验数量与充分性

*   **实验组数**：
    1.  **主要对比实验**：在两个数据集设置（Vanilla和Extended）下，对比了RLPA与6种基线方法及4种闭源模型，共计 **> 12组** 对比结果。
    2.  **消融实验**：分别禁用画像奖励和回复奖励进行训练，验证各组件贡献，共计 **~3组** 实验。
    3.  **深入分析实验**：包括偏好冲突适应性测试、长期交互画像稳定性测试、与推理模型的效率对比，共计 **~3组** 实验。
*   **充分性与公平性**：
    *   **充分性**：实验设计全面，覆盖了性能对比、内部机制剖析和场景鲁棒性测试，充分支撑了论文结论。
    *   **公平性**：对比基线均基于同一基础模型或使用了作者提供的标准基准和评估协议。消融实验在同一框架下进行，比较公平。评估采用GPT-4o作为外部评判员，对闭源和开源模型是统一的，但也引入了对评估器本身潜在偏见的依赖。

### 6. 论文的主要结论与发现

*   **显著性能提升**：Qwen-RLPA 在个性化对齐任务上**全面超越**了基于提示、离线优化的方法，并且在性能上**比肩甚至超越**了 GPT-4o、Claude-3.5 等先进商业模型。
*   **动态适应能力**：RLPA 能有效应对**用户偏好中途转变**的场景，展现出快速恢复和高适应性的优势，而基线方法在此场景下表现崩溃。
*   **长期建模稳定性**：在长达70轮的对话中，RLPA 能够持续积累并稳定地维护用户画像，其准确性随对话深入而提升，并趋近于理论最大值。
*   **推理效率优势**：相比 DeepSeek-R1、OpenAI-o3 等通用推理模型，Qwen-RLPA 使用**更少的推理tokens** 实现了**更高的回复质量**，表明专注于画像推理是一种更高效的个性化推理范式。

### 7. 优点

*   **范式创新**：将个性化对齐从静态任务转变为动态的、基于交互的强化学习任务，更符合真实世界对话场景。
*   **机制有效**：双层次奖励设计（画像+回复）清晰、可解释，消融实验证明了两个奖励信号的互补性，共同促进了模型性能。
*   **效果突出**：在小模型（3B参数）上取得了超越大模型（>100B）的效果，具有实际应用价值。
*   **评估全面**：不仅测试了性能，还专门设计了实验来评估模型的动态适应性、长期一致性和推理效率，论证非常扎实。

### 8. 不足与局限

*   **模拟用户的局限性**：训练效果高度依赖于模拟用户的质量和真实性。虽然文中对模拟器做了评估，但模拟数据与真实用户行为的分布可能存在差距，影响模型在真实场景的最终表现。
*   **评估器的偏差风险**：使用GPT-4o作为对齐分数的主要评判员，其打分标准本身可能存在尚未发现的偏差，论文结论的客观性在一定程度上受限于该评估器的可信度。
*   **单轮用户假设**：目前框架只考虑单一用户、单一会话线程的交互，未涉及多用户、多会话或跨域的个性化场景，距离真实世界的使用模式仍有距离。
*   **理论基础探索不足**：论文将问题形式化为马尔可夫决策过程，但对长期对齐动态过程的收敛性等理论性质缺乏深入探讨。

（完）
