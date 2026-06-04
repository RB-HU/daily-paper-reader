---
title: Self-Challenging Language Model Agents
title_zh: 自我挑战的大语言模型智能体
authors: "Yifei Zhou, Sergey Levine, Jason E Weston, Xian Li, Sainbayar Sukhbaatar"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=9yusqX9DpR"
tags: ["query:fla"]
score: 9.0
evidence: 通过自生成任务对大模型智能体进行自训练的方法
tldr: 针对训练LLM智能体需要大量人工构建任务和标注的问题，提出自我挑战智能体框架。该框架让智能体通过与工具交互自我生成Code-as-Task形式的高质量任务，再作为执行者解决这些任务，从而实现无需人工标注的自主训练。实验表明该方法能有效提升智能体的任务解决能力，为自主智能体的后训练提供了可扩展的范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1373, \"height\": 704, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1442, \"height\": 453, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 577, \"height\": 593, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1426, \"height\": 350, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1436, \"height\": 326, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1445, \"height\": 399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 857, \"height\": 868, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1378, \"height\": 1034, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1396, \"height\": 1882, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1385, \"height\": 1857, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1398, \"height\": 1001, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1402, \"height\": 376, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1394, \"height\": 470, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1390, \"height\": 335, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1308, \"height\": 334, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-9yusqx9dpr/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1339, \"height\": 677, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1449, \"height\": 543, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1453, \"height\": 231, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1454, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 661, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1448, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-9yusqx9dpr/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 946, \"height\": 928, \"label\": \"Table\"}]"
motivation: 解决训练LLM智能体时人工创建任务和标注成本高的问题。
method: 智能体先作为挑战者生成任务，再作为执行者解决任务，通过自循环提升能力。
result: 实验显示自我挑战训练能显著提高智能体在工具使用等任务上的表现。
conclusion: 为自主智能体的可扩展后训练提供了有效方法，无需人工干预。
---

## Abstract
Large language models  are quickly becoming the foundation for intelligent agents that are capable of using tools. However, training such agents is challenging because it requires human creation and annotation of a diverse set of tasks, tools, and evaluation criteria. In this paper, we propose  the Self-Challenging Agent framework for training an agent on high-quality tasks that are generated by itself. The agent first plays the role of challenger and generates a task after interacting with the given tools. The tasks take the form of a novel general class of problems termed Code-as-Task, which are defined by an instruction, a verification function and solution and failure cases which serve as tests, allowing to filter only for high-quality tasks.  
The agent then takes an executor role and trains on those tasks with reinforcement learning using the evaluation feedback as a reward.  We show our method improves the performance of Llama-3.1-8B-Instruct on two existing multi-turn tool-use agent benchmarks, M$^3$ToolEval and TauBench, with a two-fold average success rate increase, despite using only self-generated training data.

---

## 论文详细总结（自动生成）

好的，我们来对这篇论文进行结构化、深入、客观的总结。

### 论文核心问题与研究背景

本篇论文旨在解决训练通用大语言模型智能体的一个核心瓶颈：**大规模、高质量训练任务的稀缺性**。当前，训练能够进行多轮工具使用、与环境交互的智能体，严重依赖于人类手动创建和标注多样化的任务、工具和评估标准，这个过程成本高昂、劳动密集且难以扩展。

论文提出，一个理想的替代方案是**让智能体自己为自己生成训练任务**，实现一种“自我挑战”的自主学习飞轮。其核心思想是：智能体首先扮演“挑战者”，在未知环境中通过主动交互收集信息，并生成符合特定结构（Code-as-Task）的高质量任务；随后，智能体再扮演“执行者”，尝试解决这些自生成的任务，并通过强化学习从交互反馈中学习。

### 方法论：Self-Challenging Agent (SCA) 框架

SCA 框架包含两个核心角色和一个关键的任务形式化机制。

**1. 两个智能体角色**
*   **任务挑战者**：此角色的策略 `π_task` 通过与环境中各种工具的交互，主动探索环境状态（如数据库条目、网页信息）。基于这些交互获得的上下文，它最终生成一个结构化的任务规范，包括指令和验证函数。
*   **任务执行者**：此角色的策略 `π_exec` 接收挑战者生成的任务，与环境进行多轮交互以解决问题。完成后，环境会根据预设的验证函数进行评估并给出奖励。该奖励信号用于通过强化学习来优化 `π_exec` 策略。

**2. “Code-as-Task” (CaT) 任务形式化**
为确保自生成任务的质量（可行性、可验证性、非平凡性），论文提出了 CaT 任务格式。一个 CaT 任务由以下四个组件构成，除指令外均为可执行代码：
*   **指令**：对任务目标的自然语言描述。
*   **验证函数**：一段 Python 代码，用于在任务结束时检查环境状态和执行结果，并返回 `True`（成功）或 `False`（失败）。
*   **示例解决方案**：一段能够通过验证函数的正确操作序列，用以确保**任务可行**。
*   **失败案例**：多段无法通过验证函数的错误示例，用以确保**任务具有挑战性且验证函数能准确区分成功与失败**。

利用外部代码执行器，系统可以自动过滤掉所有不满足以下条件的任务：示例解决方案能通过验证，且所有失败案例均无法通过。这极大降低了低质量任务带来的噪声。

**3. 训练流程**
*   **自我提升**：使用同一个 LLM 作为挑战者和执行者。任务生成后，执行者收集带奖励轨迹，并通过 REINFORCE 等强化学习算法进行优化。由于采用 0/1 结果奖励，此过程等价于对成功轨迹进行监督微调，即**拒绝采样微调**。
*   **知识蒸馏**：在存在更强的教师模型时，挑战者利用较弱的学生模型探索环境并生成 CaT 任务集。然后，由更强的教师模型在这些任务上采集示范轨迹（无论成功与否），用于监督微调较弱的学生模型，从而将能力蒸馏到更小、更便宜的模型上。

### 实验设计

**1. 实验环境与数据集**
实验在两个多轮工具使用基准测试上进行，覆盖四个不同环境：
*   **M³ToolEval**: 包含 **Calculation**（多工具计算）和 **Web Browsing**（网页信息检索）两个环境。
*   **Tau-Bench**: 模拟客户服务场景，包含 **Retail**（电商服务）和 **Airline**（机票预订）两个环境。
所有环境都配备了用于最终评估的功能性验证器。

**2. 基准模型与对比方法**
*   **基座模型**: `Llama-3.1-8B-Instruct` 是所有实验的主要训练和评估对象。
*   **对比基线**:
    *   **零样本**: 未经训练的 `Llama-3.1-8B`、`Llama-3.1-70B` 和 `GPT-4o` 的表现。
    *   **PAE (Proposer-Agent-Evaluator)**: 当前最先进的自动化任务合成与自主提升方法。该方法仅基于初始环境观察直接生成指令，并通过提示LLM判断轨迹的成功与否。
*   **SCA变体**: 论文测试了蒸馏和自我提升两种设置下的 SCA。

### 资源与算力

论文明确提到了计算资源的使用情况。所有实验均在 **8 x A100 80G** GPU 上进行，并详细列出了在自我提升设定下各环境的主要耗时（单位：小时/8-A100 GPU）：
*   **挑战生成**: 8-32 小时
*   **轨迹采样**: 24 小时
*   **拒绝采样微调**: 3 小时
这些数据表明 SCA 方法的主要计算瓶颈在于多轮交互的任务生成和轨迹采样过程。

### 实验数量与充分性

论文设计了较为全面和深入的实验来验证其主张，主要包括：
1.  **主对比实验**: 在 4 个不同环境、2 种训练设定（蒸馏、自我提升）下，对比了 SCA、PAE 和零样本基线。
2.  **消融实验**:
    *   **RL算法对比**: 比较了拒绝采样微调、DPO、GRPO、PPO 等不同强化学习算法在 SCA 任务上的效果。
    *   **CaT组件分析**: 通过人工标注，分析了 PAE 以及 CaT 中逐步加入验证函数、示例解决方案、失败案例对任务质量的影响。
    *   **失败轨迹的作用**: 研究了蒸馏时使用成功轨迹和混合轨迹的区别。
    *   **过滤步骤有效性**: 验证了 CaT 自动过滤机制对最终策略性能的提升。
3.  **缩放性分析**: 探讨了增加任务数量和增加每条任务的轨迹数量对泛化性能的影响，发现**增加任务多样性的重要性远高于增加单一任务的尝试次数**。
4.  **迁移性分析**: 检验了在多个环境联合数据上训练的模型是否能获得跨环境的通用能力，结果显示提升微乎其微，表明 SCA 目前主要提升了**环境特定**的技能。

这些实验设计客观、系统，并从多个维度证明了方法的有效性。

### 主要结论与发现

1.  **SCA 框架是有效的**: 在仅使用自合成数据的情况下，SCA 在蒸馏和自我提升两种模式下，均能在多个多轮工具使用环境中显著提升 Llama-3.1-8B 的性能，平均成功率提升超过一倍。
2.  **CaT 形式化至关重要**: “Code-as-Task” 任务格式和其自动过滤机制，通过确保任务的可行性、可验证性和非平凡性，是生成高质量合成任务的关键，其效果远超仅生成指令或简单验证函数的方法。
3.  **适用于部分可观测环境**: 与严重依赖完全可观测环境的 PAE 基线相比，SCA 的挑战者通过主动探索环境，能生成更具多样性和精确性的任务，因此在部分可观测环境中具有显著优势。
4.  **任务多样性优于轨迹数量**: 缩放实验表明，为提升模型的泛化能力，增加合成任务的数量（提升多样性）比在固定任务上收集更多轨迹更为有效。
5.  **改进具有环境特定性**: 目前的 SCA 训练主要提升了智能体应对环境特定挑战的能力，尚未能产生跨环境的通用智能体能力。

### 论文优点

1.  **新颖且可扩展的范式**: 提出了一种让智能体“自产自销”的自我学习框架，为减轻对人工标注的依赖提供了新颖且可扩展的路径。
2.  **关键的技术创新**: “Code-as-Task” 形式化及其自动过滤机制，是一个精巧且重要的设计，它利用代码的精确性和可执行性，有效解决了自生成任务中质量不可控的核心难题。
3.  **实验全面扎实**: 实验覆盖了多个环境、多种基线、不同训练设定和深入的消融与缩放分析，结论具有说服力。
4.  **现实问题驱动**: 论文深刻洞察并着手解决了训练通用智能体过程中，任务构建成本高和可扩展性差的实际问题，具有很高的应用价值。

### 不足与局限

1.  **未能完全解决任务噪声**: 人工标注分析显示，即使经过 CaT 过滤，仍有相当比例的“假阴性”任务，主要是因为指令存在语义模糊或信息缺失，这是未来研究的一个挑战。
2.  **性能仍有差距**: 与使用人工构建的“预言任务”（oracle tasks）进行训练相比，SCA 生成的任务在质量上仍有提升空间，导致最终策略性能存在亚优差距。
3.  **跨环境泛化能力有限**: 训练得到的技能具有较强的环境特定性，如何在多个环境中实现通用的自我提升仍是一个悬而未决的问题。
4.  **计算开销较大**: 挑战生成和轨迹采样阶段需要进行大量的多轮交互，对计算资源有较高要求。

（完）
