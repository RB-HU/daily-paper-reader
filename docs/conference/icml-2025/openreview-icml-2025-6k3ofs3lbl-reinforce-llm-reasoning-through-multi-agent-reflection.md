---
title: Reinforce LLM Reasoning through Multi-Agent Reflection
title_zh: 通过多智能体反思强化大语言模型推理
authors: "Yurun Yuan, Tengyang Xie"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=6k3oFS3Lbl"
tags: ["query:fla"]
score: 8.0
evidence: 通过强化学习和直接偏好学习训练多轮对话智能体以实现迭代优化
tldr: 针对大模型推理中反馈空间受限和训练不协调问题，本文将多轮优化过程建模为马尔可夫决策过程，提出DPSDP算法，通过直接偏好学习训练演员-评论家LLM系统，实现迭代式答案改进。实验表明，该方法在多个推理基准上显著提升了准确率。该技术可应用于金融领域多轮对话智能体的后训练，提升其交互与决策能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-6k3ofs3lbl/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1458, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6k3ofs3lbl/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1478, \"height\": 653, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6k3ofs3lbl/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1780, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6k3ofs3lbl/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 66, \"height\": 70, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-6k3ofs3lbl/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 117, \"height\": 66, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1617, \"height\": 1572, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 875, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 880, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1305, \"height\": 192, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1610, \"height\": 301, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-6k3ofs3lbl/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 739, \"height\": 404, \"label\": \"Table\"}]"
motivation: 现有多轮推理优化方法反馈空间有限、训练不协调，导致性能次优，需要更有效的协同训练方法。
method: 将多轮优化建模为MDP，提出DPSDP算法，利用直接偏好学习训练演员-评论家系统。
result: 在推理基准上，DPSDP显著优于现有方法，实现了更好的迭代改进效果。
conclusion: DPSDP为多轮对话智能体的强化学习后训练提供了新范式，可扩展到金融任务中。
---

## Abstract
Leveraging more test-time computation has proven to be an effective way to boost the reasoning capabilities of large language models (LLMs). Among various methods, the verify-and-improve paradigm stands out for enabling dynamic solution exploration and feedback incorporation. However, existing approaches often suffer from restricted feedback spaces and lack of coordinated training of different parties, leading to suboptimal performance. To address this, we model this multi-turn refinement process as a Markov Decision Process and introduce DPSDP (**D**irect **P**olicy **S**earch by **D**ynamic **P**rogramming), a reinforcement learning algorithm that trains an actor-critic LLM system to iteratively refine answers via direct preference learning on self-generated data. Theoretically, DPSDP can match the performance of any policy within the training distribution. Empirically, we instantiate DPSDP with various base models and show improvements on both in- and out-of-distribution benchmarks. For example, on benchmark MATH 500, majority voting over five refinement steps increases first-turn accuracy from 58.2% to 63.2% with Ministral-based models. An ablation study further confirms the benefits of multi-agent collaboration and out-of-distribution generalization.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

* **研究背景**: 大语言模型（LLMs）在数学和代码等推理任务上表现出色，但进一步提升其推理能力仍是一个重要挑战。利用测试时额外计算（test-time computation）是有效的提升手段，其中“验证并改进”（verify-and-improve）范式通过与环境交互、动态探索解空间并融入反馈，展现出独特优势。
* **核心问题**: 现有验证并改进方法存在两个主要局限：
    1.  **反馈空间受限**：反馈来源单一（如仅编译器消息或固定工具集），缺乏灵活性和丰富性。
    2.  **训练不协调**：LLM代理（actor/corrector）与反馈提供者（critic/verifier）通常独立训练或未经联合优化，导致交互效果次优。
* **整体含义**: 论文旨在提出一种新的强化学习算法，通过**多智能体协作与联合训练**，系统性地解决上述局限，从而显著增强LLM在多轮迭代中的推理与自我纠错能力。

### 2. 论文提出的方法论

* **核心思想**: 将多轮“批评-改进”对话过程建模为一个有限时域的**马尔可夫决策过程（MDP）**，并借鉴经典算法**动态规划策略搜索（PSDP）**，设计了一种离线强化学习算法——**DPSDP（Direct Policy Search by Dynamic Programming）**。该算法通过从自生成数据中进行**直接偏好学习（DPO）**，联合训练一个演员（actor，生成与改进答案）和一个评论家（critic，提供反馈）LLM系统。
* **关键技术细节**:
    * **MDP建模**：
        * 状态\( s_h \)：第\( h \)步时的对话历史（实际实现中简化为仅保留最近一次回答和反馈，以缓解分布偏移并支持任意轮次的推理推广）。
        * 动作\( a_h \)：由演员或评论家生成的回答/反馈。
        * 奖励\( r(s) \)：若演员的回答与标准答案匹配则为1，否则为0。目标为最大化所有轮次的累积奖励。
        * 时域\( H = 2L + 1 \)，其中\( L \)为改进轮数（实践中训练时使用\( H=3 \)，即一轮初始回答、一次反馈和一次改进）。
    * **DPSDP算法**：
        1.  **逆向动态规划**：从最后一步开始，逐步向前优化每个时刻\( h \)的策略，最大化KL正则化的Q值期望：\(\max_{\pi} \mathbb{E}[Q_h(s_h,a_h)] - \beta D_{KL}[\pi \parallel \pi_{\text{ref}}]\)。该目标具有闭式解，可转化为偏好学习问题。
        2.  **自生成数据收集**：基于参考策略\( \pi_{\text{ref}} \)对每个问题采样完整轨迹，并在每个状态\( s_h \)处重新采样\( n \)个候选动作，利用**估计的Q值**（见下段）构建偏好对（chosen vs. rejected）。
        3.  **Q值估计**（实用简化）：为绕过精确Q值计算的困难，论文采用了一种实用的近似方法：
            * 对于改进后的答案\( a_2 \)，其Q值直接用其正确性（奖励）估计。
            * 对于反馈\( a_1 \)，用参考策略基于该反馈生成一个改进答案，并以该答案的正确性作为Q值估计。
            * 对于初始答案\( a_0 \)，直接用其自身正确性估计Q值。
            * 将所有Q值放大为足够大的正数或0，从而将通用的交叉熵损失退化为标准的**DPO损失**。
        4.  **训练**：将所有时刻收集的偏好数据合并，分别对演员和评论家应用DPO损失进行优化。
    * **算法伪代码要点**（已用文字说明）：对于每个问题，采样轨迹→对于每个状态，采样多个候选动作并估计Q值→构建偏好对→用DPO训练演员和评论家。
* **理论保证**：在满足单策略集中度假设（参考策略\( \pi_{\text{ref}} \)能覆盖最优策略的状态分布）和有界内分布泛化误差的条件下，论文证明了DPSDP策略的性能与最优策略的差距上界为\( O(H\sqrt{C_S^\star C_A \varepsilon_{\text{stat}}}) \)。

### 3. 实验设计

* **数据集与场景**:
    * **训练数据**: 来自OpenMathInstruct-2的数学问题（源自MATH和GSM8K，与测试基准相同）。
    * **测试基准**:
        * **分布内（ID）**: MATH 500、GSM8K。
        * **分布外（OOD）**: MMLU-Pro Math、Olympiad Bench（奥林匹克级别科学问题，难度极高）。
* **对比方法**:
    * **基线**: STaR（仅用正确最终答案监督微调）、STaR-DPO（结合正确与错误轨迹的DPO训练）、Oracle-RISE（假设能获得标准答案的正确性反馈）。
    * **自身变体**: 非生成式评论家（仅二元正确性反馈）、单代理模式（同一模型同时扮演演员和评论家）、非马尔可夫设置（提供完整对话历史）。
* **评估指标**:
    * `pass1@turn1 (p1@t1)`: 初始回答准确率。
    * `maj1@turn5 (m1@t5)`: 生成五轮答案（初始+4次改进）后进行多数投票的准确率。
    * `pass1@turn5 (p1@t5)`: 五轮中至少有一个回答正确的准确率。
    * `maj5@turn1 (m5@t1)`: 五次独立采样初始回答后多数投票的准确率（用于对比自洽性）。

### 4. 资源与算力

* 训练使用了4块H100 80GB GPU。
* 采用梯度累积（accumulation steps = 64）和 per-device batch size = 1。
* 监督微调通常训练1个epoch；DPO训练根据模型和角色不同训练1~3个epoch。
* 学习率在\(1\times10^{-6}\)至\(5\times10^{-6}\)（SFT）和\(2\times10^{-7}\)至\(4\times10^{-7}\)（DPO）之间。
* 未明确提及总训练时长（如小时数）。

### 5. 实验数量与充分性

* **实验组数**：实验涵盖了**3种基础模型**（Ministral-8B, Llama-3.1-8B, Qwen2.5-3B）× **4个基准数据集**（MATH 500, GSM8K, MMLU-Pro Math, Olympiad Bench）× **多种方法**（DPSDP, STaR, STaR-DPO, Oracle-RISE等），合计大量实验组合。
* **消融研究**：
    1.  多智能体 vs. 单智能体。
    2.  马尔可夫 vs. 非马尔可夫状态表示。
    3.  数据收集时重启（restart） vs. 不重启（trajectory-level）。
    4.  生成式评论家 vs. 非生成式（二元）评论家。
    5.  预训练阶段（SFT）的必要性。
    6.  与自洽性（self-consistency）的对比。
    7.  Q值估计策略的影响（统一训练 vs. 分步训练）。
    8.  不同改进轮数（最多11轮）下的性能变化与答案正确性迁移分析。
* **公平性与客观性**：所有基线均使用相同的训练问题集和相同的模型起点进行复现，确保了公平比较。结果在两个ID和两个OOD基准上报告，验证了泛化性。

### 6. 主要结论与发现

* **性能提升显著**：DPSDP在多个模型家族和基准上均有效提升了推理性能。例如，Ministral模型在MATH 500上，多数投票准确率从SFT后的57.2%提升至63.2%；Llama模型从53.4%提升至58.4%。
* **超越基线方法**：DPSDP一致地优于STaR和STaR-DPO。STaR-DPO虽有改进，但受限于训练时探索不足，性能不及DPSDP。
* **迭代改进有效**：随改进轮数增加，多数投票准确率持续上升，且“错误→正确”的纠正比例始终高于“正确→错误”的退化比例。
* **多智能体协作优于单智能体**：在较难的MATH 500和奥赛基准上，分工明确的演员-评论家系统优于单模型自反思。但在简单问题（GSM8K）上，单智能体略有优势（可能得益于正迁移）。
* **马尔可夫状态设计至关重要**：仅提供最近回答（马尔可夫）比提供完整历史（非马尔可夫）更能抵抗测试时分布偏移，性能更优。
* **反馈丰富度重要**：生成式评论家（详细语言反馈）在困难问题上显著优于仅提供二元对错信号的非生成式评论家。
* **分布外泛化**：方法在未见的MMLU-Pro Math和奥林匹克基准上同样有效，证明了模型内化了迭代改进能力，而非简单记忆。

### 7. 优点

* **理论基础坚实**：将多轮对话严谨建模为MDP，并提供了性能保证的理论分析，增强了方法的可靠性。
* **方法实用且高效**：设计了多种实用简化（如马尔可夫状态、统一DPO训练、Q值近似），使得算法易于实现和推广。
* **实验全面深入**：涵盖了多种模型、多个基准、丰富的消融实验和对比分析，实证结果令人信服。
* **洞察深刻**：通过单/多智能体、马尔可夫/非马尔可夫状态等消融实验，揭示了多智能体协作与状态压缩在迭代推理中的价值。
* **启发未来研究**：指出了如在线/迭代DPO、混合训练目标等未来方向。

### 8. 不足与局限

* **训练域差距**：训练时仅使用单步改进（H=3），与实际推理时的多步（如5步或更多）存在差异，虽已证明能泛化，但可能未达到最优。
* **Q值估计近似**：Q值估计依赖于参考策略的近似，虽然在实验中影响不大，但理论上引入了误差项。
* **任务局限**：实验仅限于数学问题求解，其在代码生成、多轮对话、工具使用等更广泛场景下的有效性有待验证。
* **未利用在线学习**：算法为离线学习，训练过程中策略未主动探索并适应不断变化的状态分布，这可能限制了性能上限。
* **“过度思考”现象**：在简单问题（如GSM8K）上，生成式评论家可能过度分析，导致迭代后期性能轻微下降。

（完）
