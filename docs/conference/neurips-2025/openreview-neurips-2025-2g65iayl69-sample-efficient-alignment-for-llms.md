---
title: Sample-Efficient Alignment for LLMs
title_zh: 大语言模型的样本高效对齐
authors: "Zichen Liu, Changyu Chen, Chao Du, Wee Sun Lee, Min Lin"
date: 2025-05-09
pdf: "https://openreview.net/pdf?id=2g65iaYl69"
tags: ["query:fla"]
score: 4.0
evidence: 提出基于汤普森采样的在线对齐方法，可样本高效地进行 RLHF，与智能体后训练相关。
tldr: 本文针对大语言模型在线对齐中样本效率低的问题，将问题形式化为上下文对决赌博机，提出基于汤普森采样的统一算法 SEA。该算法在三个模型规模和三种偏好学习方法上进行了广泛实验验证，能有效利用有限在线反馈进行对齐。此方法为受限预算下的智能体后训练对齐提供了样本高效的实用工具，可支撑金融等领域中需要高效适配的代理训练。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1356, \"height\": 397, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1437, \"height\": 234, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1307, \"height\": 728, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 512, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1125, \"height\": 642, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 425, \"height\": 360, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1300, \"height\": 414, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 829, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 663, \"height\": 493, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1014, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 678, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 657, \"height\": 444, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-2g65iayl69/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 660, \"height\": 411, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-2g65iayl69/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1336, \"height\": 391, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-2g65iayl69/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 567, \"height\": 388, \"label\": \"Table\"}]"
motivation: 现有在线 RLHF 方法样本效率低，难以在有限反馈预算下实现高效对齐。
method: 将 LLM 对齐建模为上下文对决赌博机，并提出基于汤普森采样的样本高效算法 SEA。
result: 在 1B、2.8B、6.9B 三种模型规模及多种偏好学习方法上验证了算法的优越样本效率和性能。
conclusion: 为预算有限的在线对齐场景提供了实用的算法，可推广用于智能体等需要样本高效后训练的任务。
---

## Abstract
We study methods for efficiently aligning large language models (LLMs) with human preferences given budgeted online feedback. We first formulate the LLM alignment problem in the frame of contextual dueling bandits. This formulation, subsuming recent paradigms such as online RLHF and online DPO, inherently quests for sample-efficient algorithms that incorporate online active exploration. Leveraging insights from bandit theory, we introduce a unified algorithm based on Thompson sampling and highlight its applications in two distinct LLM alignment scenarios. The practical agent that efficiently implements this algorithm, named SEA (Sample-Efficient Alignment), is empirically validated through extensive experiments across three model scales (1B, 2.8B, 6.9B) and three preference learning algorithms (DPO, IPO, SLiC). The results demonstrate that SEA achieves highly sample-efficient alignment with oracle's preferences, outperforming recent active exploration methods for LLMs. Additionally, we release the implementation of SEA together with an efficient codebase designed for online alignment of LLMs, aiming to accelerate future research in this field.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：在预算有限（即有标注成本限制）的在线人类反馈下，如何**样本高效地**将大型语言模型（LLM）与人类偏好对齐。
*   **研究背景与动机**：
    *   主流的对齐方法（如RLHF、DPO）通常需要大量人类标注，这成为实际应用中的主要瓶颈。
    *   现有在线对齐方法（如迭代DPO）虽然能持续学习，但大多采用被动探索策略（直接使用当前模型生成响应对），导致样本效率低下。
    *   论文旨在解决一个关键且未被充分探索的问题：**如何设计算法，用最少的人类反馈查询成本，达到最佳的对齐效果**。

### 2. 论文提出的方法论

论文的核心思想是将LLM对齐问题形式化为**上下文对决赌博机（Contextual Dueling Bandit, CDB）**，并据此设计了一种基于**汤普森采样（Thompson Sampling）** 的统一算法**SEA（Sample-Efficient Alignment）**。

*   **核心框架：上下文对决赌博机（CDB）**
    *   将“提示词（prompt）”视为**上下文**，生成的“响应（response）”视为**动作**，人类的“偏好反馈”视为**对决结果**。
    *   该框架自然地要求算法具备两个关键特性，以实现样本效率：
        1.  **在线交互（Online Interaction）**：使用最新策略生成数据并立即用于改进。
        2.  **主动探索（Active Exploration）**：策略性地选择能带来最大信息增益和策略改进的响应对。

*   **SEA算法流程**：
    *   SEA 是一个实用的代理，它通过以下技术近似汤普森采样，解决LLM动作空间巨大的问题：
        1.  **认知奖励模型（ERM）用于后验采样**：
            *   维护一个**深度集成（Deep Ensemble）** 奖励模型 \(R_{\Phi}\)，每个集成成员在各自的偏好数据上独立训练。
            *   从集成中随机选择一个成员 \(r_{\phi} \sim R_{\Phi}\)，即近似地实现了从奖励后验分布 \(p(r \mid D)\) 中采样。
        2.  **策略引导搜索（Policy-Guided Search）近似arg max**：
            *   针对采样到的奖励模型 \(r_{\phi}\)，为了找到最大化奖励的响应（即 \(y = arg\max_{b \in Y} r_{\phi}(x, b)\)），SEA 不是在整个文本空间中暴力搜索，而是从**当前在线策略** \(\pi_{\theta_t}\) 中采样 \(M\) 个候选响应构成提案集。
            *   然后，使用一种贪婪局部搜索策略，在这个有限候选集中选择 \(r_{\phi}\) 得分最高的响应，作为第一个参与对决的动作。
        3.  **从混合偏好中在线学习策略**：
            *   为了解决如何获得好的生成式策略 \(\pi_{\theta}\) 并让其作为有效提案策略的问题，SEA 采用**混合偏好学习**。
            *   策略 \(\pi_{\theta}\) 不仅从真实人类（或预言机）反馈的数据中学习，还从ERM生成的**伪标签数据**中学习。这使得策略能更好地与内部奖励模型对齐，从而提出更高质量的候选响应，进一步提升了探索效率和近似最大化过程的准确性。
    *   **两种对齐场景**：算法针对不同场景设计了不同的第二个响应的选择策略。
        *   **探索与利用（E&E）场景**：适用于在线服务系统（如ChatGPT），两个响应都通过标准TS选择，以保证用户体验。
        *   **最佳臂识别（BAI）场景**：适用于众包标注，第二个响应被选为对第一个响应的**偏好方差（不确定性）最大化**的响应，以最快速度识别出最优策略。

### 3. 实验设计

*   **数据集与场景**：
    *   **主要任务**：**TL;DR 摘要任务**，使用Reddit帖子作为提示词，目标是生成符合人类偏好的摘要。
    *   **通用任务**：使用 **UltraFeedback 数据集** 训练，并在 **AlpacaEval 2.0** 基准上进行评估。
*   **代理与基准模型**：
    *   所有实验都使用一个强大的标量奖励模型 **Skywork-Reward-Llama-3.1-8B** 模拟“偏好预言机”，提供在线反馈。
    *   **模型规模**：基于Pythia家族的**1B**、**2.8B**和**6.9B**参数模型。
*   **对比方法**：
    *   **离线方法**：Offline DPO / IPO / SLiC。
    *   **在线被动方法**：Online DPO （纯在线交互但被动选择响应）。
    *   **在线主动探索方法**：
        *   **APL (Active Preference Learning)**：基于DPO隐式奖励的主动学习。
        *   **XPO (Exploratory Preference Optimization)**：通过在损失函数中加入乐观项来鼓励探索。
    *   **SEA自身的消融变体**：用于分析各个组件（如ERM、混合偏好学习、Best-of-N推理）的贡献。

### 4. 资源与算力

*   **硬件**：所有规模的实验主要在一台配备**8块A100 GPU**的机器上运行，用于训练学习器（Learner）和执行器（Actor）。额外的**16块A100 GPU**被用于托管预言机奖励模型服务，供所有实验并发查询。
*   **总计算量**：论文明确指出，所有实验总共消耗了大约 **2个A100 GPU年** 的计算资源。
*   **软件框架**：开发了一个基于Actor-Learner-Oracle架构的高效分布式学习系统，使用了vLLM、DeepSpeed和Mosec等技术进行优化。

### 5. 实验数量与充分性

*   **主要对比实验**：在3个模型规模（1B, 2.8B, 6.9B）和3种直接偏好优化器（DPO, IPO, SLiC）上，进行了全面的性能对比（见图3）。这构成了至少 **3x3 = 9组** 主要对比实验。
*   **样本效率量化**：不仅比较了最终性能，还量化了达到相同性能水平所需的查询预算（见图1），展示了2-5倍的样本效率提升。
*   **消融研究**：设计了**7种SEA变体**，系统性地分解了在线策略学习、主动探索、ERM同步、以及Best-of-N推理等模块的独立贡献（见表1和图4）。
*   **适用场景验证**：验证了不同探索策略（E&E vs. BAI）在各自模拟场景下的优越性（图6左/中）。
*   **鲁棒性测试**：
    *   使用**GPT-4o-mini模拟人类判断**（存在随机性和位置偏差），验证了SEA的鲁棒性（图6右）。
    *   在更具挑战性的**通用任务（UltraFeedback -> AlpacaEval 2.0）** 上进行了验证，证明了SEA在更复杂场景下的探索优势（图7）。
*   **可重复性**：所有实验都独立重复运行**3次**，结果以均值和标准误差展示，确保了统计显著性。

综合来看，实验设计非常充分、客观且公平。

### 6. 论文的主要结论与发现

*   **SEA 性能最优**：SEA 在所有模型规模和所有优化器上，均一致性地优于离线、在线被动以及其他在线主动探索方法（APL, XPO），在收敛时能获得更高的胜率。
*   **样本效率极高**：SEA实现相同性能水平所需的人类反馈查询数量，仅为在线被动方法的 **1/5 到 1/2**，实现了显著的样本效率跃升。
*   **组件均有效**：消融实验证实，**在线策略学习**、**基于ERM的主动探索**以及**混合偏好学习**三者结合是SEA成功的关键，缺一不可。
*   **探索需与目标匹配**：针对E&E和BAI两种不同场景设计的差异化探索策略，在各自目标下均表现最佳，验证了算法设计的合理性。
*   **通用性**：SEA可以与多种不同的直接偏好优化器（DPO, IPO, SLiC, SimPO）结合使用，展现了其作为通用框架的潜力。

### 7. 优点（亮点）

*   **理论指导实践**：巧妙地将传统赌博机理论（汤普森采样）应用于大模型对齐这一新兴领域，为算法设计提供了坚实的理论基础。
*   **实用的算法实现**：通过ERM、策略引导搜索和混合偏好学习三项技术，成功解决了将汤普森采样应用于LLM的棘手的可扩展性问题。
*   **系统与算法协同设计**：不仅提出了新算法，还构建了一个高效的开源分布式学习框架，为未来研究扫清了工程障碍。
*   **实验极其扎实**：验证范围广（多尺度、多算法、多场景），分析深入（消融、鲁棒性），结论极具说服力。
*   **可扩展性与兼容性**：方法对底层偏好优化算法是**即插即用**的，具有良好的生态兼容性。

### 8. 不足与局限

*   **预言机与现实差距**：主要实验基于标量奖励模型作为预言机，这与真实、带噪音的人类偏好反馈仍有差距，尽管已用GPT-4o-mini进行了一定程度的模拟。
*   **超参数敏感性**：SEA方法引入了额外的超参数，如集成模型的数量 \(K\)、候选响应数 \(M\)、混合比例 \(\gamma\) 等，其在不同任务和模型下的调优灵敏度和鲁棒性未得到充分讨论。
*   **计算与内存开销**：维护和更新一个深度集成奖励模型无疑增加了额外的计算和内存成本，虽然论文侧重于样本效率（减少人类查询），但训练端的成本也有提高，这在论文中未进行系统地权衡分析。
*   **任务多样性有限**：主要实验集中在摘要任务和通用指令遵循任务，其在更复杂的对话、推理或安全性对齐任务上的表现有待进一步验证。

（完）
