---
title: Agent Workflow Memory
title_zh: 智能体工作流记忆
authors: "Zora Zhiruo Wang, Jiayuan Mao, Daniel Fried, Graham Neubig"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NTAhi2JEEE"
tags: ["query:fla"]
score: 9.0
evidence: 从历史经验提取可复用的智能体工作流，引导后续动作生成，属于智能体后训练技术
tldr: 针对语言模型智能体在长序列复杂任务中动作轨迹规划难的问题，本文提出Agent Workflow Memory (AWM)，从训练样本或在线查询中归纳常用子任务工作流并选择性注入智能体。在网页导航基准测试中，AWM显著提升了任务成功率，验证了将经验转化为可复用知识对自主智能体持续优化的重要性，为智能体后训练提供了记忆增强新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 867, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 860, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 853, \"height\": 266, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 703, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 864, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ntahi2jeee/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1417, \"height\": 709, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1485, \"height\": 425, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1247, \"height\": 369, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 841, \"height\": 330, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1422, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 512, \"height\": 169, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 883, \"height\": 218, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 797, \"height\": 223, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 834, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1058, \"height\": 171, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1594, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1592, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 890, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ntahi2jeee/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 791, \"height\": 206, \"label\": \"Table\"}]"
motivation: 现有多步决策智能体缺乏从历史经验学习可复用工作流的能力。
method: AWM自动归纳常用例程为工作流，并选择性提供给智能体以指导生成。
result: 在复杂网页导航任务上大幅提升成功率，超越基线方法。
conclusion: 为语言模型智能体的长期任务规划提供了可扩展的记忆与工作流利用机制。
---

## Abstract
Despite the potential of language model-based agents to solve real-world tasks such as web navigation, current methods still struggle with long-horizon tasks with complex action trajectories. In contrast, humans can flexibly solve complex tasks by learning reusable task workflows from past experiences and using them to guide future actions. To build agents that can similarly benefit from this process, we introduce Agent Workflow Memory (AWM), a method for inducing commonly reused routines, i.e., workflows, and selectively providing workflows to the agent to guide subsequent generations. AWM flexibly applies to both offline and online scenarios, where agents induce workflows from training examples beforehand or from test queries on the fly. We experiment on two major web navigation benchmarks — Mind2Web and WebArena — that collectively cover 1000+ tasks from 200+ domains across travel, shopping, and social media, among others. AWM substantially improves the baseline results by 24.6% and 51.1% relative success rate on Mind2Web and WebArena while reducing the number of steps taken to solve WebArena tasks successfully. Furthermore, online AWM robustly generalizes in cross-task, website, and domain evaluations, surpassing baselines from 8.9 to 14.0 absolute points as train-test task distribution gaps widen.

---

## 论文详细总结（自动生成）

好的，我将根据您提供的论文内容，生成一份结构化的详细中文总结。

### 1. 论文的核心问题与整体含义

*   **研究动机与背景**：当前基于语言模型的智能体在执行如网页导航等现实任务时，虽潜力巨大，但在处理涉及复杂、长序列动作轨迹的长期任务时，性能会显著下降。
*   **核心问题**：现有智能体大多依赖固定的示例或上下文学习，缺乏从过往经验中提取和学习**可复用任务工作流**的能力，导致其难以适应任务上下文或环境的变化，无法像人类一样通过归纳例程来指导未来的行动。
*   **整体含义**：本文作者受人类“从经验中归纳并应用通用工作流”这一认知过程的启发，提出了一种让智能体同样具备此能力的机制，旨在通过记忆并利用可复用的工作流，显著提升智能体在复杂任务中的成功率与泛化性。

### 2. 论文提出的方法论

*   **核心思想**：Agent Workflow Memory，其核心是让智能体能够**归纳**出常用的、可复用的子任务例程（即工作流），并将这些工作流**注入**到智能体的记忆中，以**指导**后续的任务解决过程。
*   **关键技术细节**：
    *   **工作流表示**：每个工作流包含两个部分：
        *   **文本描述**：概括工作流的高层目标。
        *   **动作轨迹**：一系列完成该目标的具体步骤，每个步骤包括用自然语言描述的环境状态、智能体的推理过程和可执行的动作。
    *   **工作流归纳模块**：采用基于语言模型的模块 `I`，通过提示词引导模型从输入的经验 `E` 中提取通用的子例程。提示词会特别要求模型抽象化具体任务的值（如将“干猫粮”替换为“{产品名}”），以增强工作流的通用性。
    *   **应用场景**：
        *   **离线场景**：在“训练”阶段，利用所有可用的标准示例一次性归纳出一组工作流 `W_offline`，并在测试时将其作为固定记忆注入智能体。
        *   **在线场景**：以流式方式处理测试查询。智能体每解决一个任务，就通过一个评估模块（基于语言模型）判断是否成功；若成功，则将此次经验 `e_t` 即时归纳为新的工作流 `w_t`，并添加到记忆 `M_{t+1}` 中，供后续任务使用。

### 3. 实验设计

*   **数据集与场景**：在两个主流的网页导航基准测试上进行评估。
    *   **WebArena**：提供基于执行的功能正确性评估，包含5个网站、812个涵盖电商、社交论坛、软件开发、内容管理等领域的任务。重点测试任务成功率。
    *   **Mind2Web**：强调任务的通用性和智能体在不同任务、网站、领域上的泛化能力。从元素准确率、动作F1值、步骤成功率、任务成功率等多个维度进行评估。
*   **对比方法**：
    *   **WebArena**：对比了强基线方法，如 BrowserGym、AutoEval，以及使用了 **14 条人类专家手写工作流**的方法 SteP。
    *   **Mind2Web**：对比了当前最优的文本型智能体方法 MindAct 和 Synapse。

### 4. 资源与算力

*   文中并未明确提及实验所使用的**GPU型号、数量或训练时长**等具体算力信息。
*   论文提到其框架主要基于API调用（如GPT-4），并在附录中详细分析了每次API调用的Token消耗（动作生成、轨迹评估和工作流归纳模块分别约占总计算量的89.2%、6.8%和4.0%），表明其计算开销相对基线仅增加了约10.8%，是一种成本效益高的方法。

### 5. 实验数量与充分性

*   **实验组数**：论文进行了较为充分的实验，主要分为以下几类：
    *   **主实验**：在 WebArena 和 Mind2Web 上，对比在线和离线模式下的性能。
    *   **泛化性实验**：在 Mind2Web 的跨网站、跨领域测试集上评估泛化能力。
    *   **消融与探索性实验**：对比了基于规则与基于语言模型的归纳方法、抽象工作流与具体经验的作用、程序格式与文本格式的工作流表示、以及不同环境状态抽象方式（自然语言描述 vs. HTML）的影响。
    *   **鲁棒性分析**：探索了示例排序对方法性能的影响。
*   **充分性与客观性**：实验在两个大规模公开基准上，与多个强基线进行了全面、公平的对比。消融实验设计合理，深入分析了方法各组件的贡献，整体实验设计客观且充分。

### 6. 论文的主要结论与发现

*   **性能大幅提升**：AWM 在 WebArena 上相比最佳基线，成功率相对提升 **51.1%**；在 Mind2Web 上，离线模式下的步骤成功率相对提升 **24.6%**。其效果甚至超过了使用人类专家手写工作流的 SteP 方法。
*   **泛化能力强**：在线 AWM 在跨任务、跨网站、跨领域的评估中均表现鲁棒。随着训练集与测试集分布差距的增大，其相对基线的优势从8.9个点扩大到14.0个绝对百分点。
*   **高效性**：AWM 不仅能提升成功率，还能减少解决任务所需的平均步数。
*   **构建复杂工作流**：AWM 能够像滚雪球一样，在简单工作流的基础上逐步构建出越来越复杂的工作流（例如，先学会“按名称找地点”，再学会“获取一个地点的邮编”）。

### 7. 优点

*   **创新性强**：借鉴人类认知，提出了从经验中归纳和应用可复用工作流的新机制，区别于传统的上下文示例学习。
*   **灵活性高**：方法同时支持需要额外训练数据的离线场景和无需任何监督信息的在线场景，扩展了应用范围。
*   **性能卓越**：在两个核心基准上均取得了显著的最佳性能，超越了包括利用人类先验知识在内的所有对比方法。
*   **分析深入**：通过大量消融实验和案例分析，深入验证了抽象子例程、在线学习、环境表示等设计的有效性。

### 8. 不足与局限

*   **领域依赖**：实验仅在网页导航这一特定领域展开，其在其他数字任务或具身智能领域的适用性尚待验证。
*   **评估依赖**：在线模式依赖一个语言模型评估器来判断任务是否成功，该评估器的准确性和可能引入的偏差会直接影响工作流质量。
*   **动作空间限制**：探索性实验部分发现，当前智能体对调用新增的高级工作流动作存在抗拒心理（使用率仅18.5%），表明模型有效利用新动作是一个待解决的挑战。
*   **计算开销**：虽然增量不大，但在线模式的流程（生成-评估-归纳）仍引入了额外的计算成本。

（完）
