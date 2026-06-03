---
title: LLM-Assisted Semantically Diverse Teammate Generation for Efficient Multi-agent Coordination
title_zh: 基于LLM辅助的语义多样化队友生成以实现高效多智能体协调
authors: "Lihe Li, Lei Yuan, Pengsen Liu, Tao Jiang, Yang Yu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Vhktpw6Vid"
tags: ["query:fla"]
score: 7.0
evidence: 利用LLM生成语义多样化队友策略，训练通用多智能体协调。
tldr: 提出SemDiv框架，利用LLM迭代生成语义多样的协调行为描述，并将其转化为可训练策略，显著提升多智能体系统的泛化能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1743, \"height\": 569, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1729, \"height\": 631, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1753, \"height\": 539, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 862, \"height\": 327, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 845, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1731, \"height\": 422, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1728, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1693, \"height\": 763, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1685, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vhktpw6vid/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1691, \"height\": 595, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1782, \"height\": 801, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1755, \"height\": 383, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1780, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1779, \"height\": 583, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1780, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1780, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vhktpw6vid/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1780, \"height\": 578, \"label\": \"Table\"}]"
motivation: 传统多样化队友生成方法缺乏语义信息，导致泛化能力不足。
method: 提出SemDiv，每轮先用LLM生成新颖协作行为的自然语言描述，再将其转换为策略进行训练。
result: 在多种多智能体环境中，训练出的智能体展现出更强的泛化性。
conclusion: LLM辅助的语义多样化生成有效提升了多智能体学习的效率和适应性。
---

## Abstract
Training with diverse teammates is the key for learning generalizable agents. Typical approaches aim to generate diverse teammates by utilizing techniques like randomization, designing regularization terms, or reducing policy compatibility, etc. However, such teammates lack semantic information, resulting in inefficient teammate generation and poor adaptability of the agents. To tackle these challenges, we propose Semantically Diverse Teammate Generation (SemDiv), a novel framework leveraging the capabilities of large language models (LLMs) to discover and learn diverse coordination behaviors at the semantic level. In each iteration, SemDiv first generates a novel coordination behavior described in natural language, then translates it into a reward function to train a teammate policy. Once the policy is verified to be meaningful, novel, and aligned with the behavior, the agents train a policy for coordination. Through this iterative process, SemDiv efficiently generates a diverse set of semantically grounded teammates, enabling agents to develop specialized policies, and select the most suitable ones through language-based reasoning to adapt to unseen teammates. Experiments show that SemDiv generates teammates covering a wide range of coordination behaviors, including those unreachable by baseline methods. Evaluation across four MARL environments, each with five unseen representative teammates, demonstrates SemDiv's superior coordination and adaptability. Our code is available at https://github.com/lilh76/SemDiv.

---

## 论文详细总结（自动生成）

好的，请查收根据论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：在协作多智能体强化学习（MARL）中，训练具备协同泛化能力的智能体（即能与未见过的队友高效协作）至关重要。典型的解决方案是通过生成多样化的队友进行训练。
*   **核心问题**：现有的多样化队友生成方法（如随机种子、正则化项、降低策略兼容性）主要在**策略层面（Policy-level）** 产生多样性。这类队友缺乏高层次的**语义信息**，即未与具体的、可描述的协作行为（如“在射门前进行一次传球”）相关联。
*   **导致的问题**：
    *   **探索效率低下**：策略层面的探索具有盲目性，难以主动发现新颖、有意义的协作模式。
    *   **适应性差**：训练出的智能体只能通过反复试错来适应新队友，在面对代价高昂的部署时效率低下，且无法利用语言指令进行快速适配。
*   **整体含义**：本文旨在通过引入大语言模型（LLM），在**语义层面**上生成明确对应于不同协作行为的多样化队友，从而实现更高效的策略空间探索，并训练出能通过语言推理来快速适应新队友的泛化性更强的智能体。

### 2. 论文提出的方法论

论文提出了一个名为 **Semantically Diverse Teammate Generation (SemDiv)** 的框架，核心思想是利用LLM迭代生成、训练并验证具备语义多样性的队友。

*   **整体框架**：SemDiv采用一个迭代式的训练流程，每轮迭代包含三个核心步骤。
*   **关键技术细节**：
    *   **迭代生成语义多样的协调行为**：
        *   使用**LLM行为生成器**，根据任务描述、指令以及历史有效行为列表，生成不重复且具体的新协作行为的自然语言描述。
        *   引入**基于策略相似度的反馈机制**，若两个不同行为的描述最终训练出相似策略，该信息会反馈给LLM，指导其生成真正多样化的行为，实现策略空间的语义级高效探索。
    *   **基于行为生成对应的队友策略**：
        *   使用**LLM奖励生成器**，将自然语言描述的行为转换为一个**可执行的奖励函数**代码。
        *   通过一个带有**反馈修正**的循环过程，利用MARL算法（如MAPPO， VDN）训练队友策略，其目标是最大化环境原始奖励和生成行为奖励的加权和。
        *   **策略验证**：训练出的队友策略需通过三项验证：(1) **性能验证**：能完成基本任务；(2) **对齐验证**：LLM根据策略执行的轨迹（转为自然语言）判断其是否展现了预期的行为；(3) **新颖性验证**：该策略必须与已生成的策略集合有明显差异。
    *   **智能体的持续学习与执行**：
        *   **多头部架构与持续学习**：智能体采用“特征提取器 + 多个策略头”的架构，每个策略头专精于与一类队友协作。在训练新队友时，仅更新特征提取器和新增的策略头，并加入**Lp范数正则项**来约束特征提取器的更新，以缓解灾难性遗忘。
        *   **基于语言的策略选择**：在测试阶段，面对一个用自然语言描述其行为偏好的未见队友，利用**LLM选择器**，输入任务描述、已学行为列表和新队友的行为描述，直接推理并选择出最合适的策略头，实现零样本高效适应。

### 3. 实验设计

*   **实验环境**：在四个经典的协作MARL环境中评估，覆盖不同复杂度和类型：
    1.  **Level-Based Foraging (LBF)**：网格世界，需协作收集食物。
    2.  **Predator-Prey (PP)**：连续空间，需合作捕猎不同类型的猎物。
    3.  **StarCraft Multi-Agent Challenge-v2 (SMACv2)**：星际争霸微操环境，需集火消灭特定敌人。
    4.  **Google Research Football (GRF)**：3D足球模拟，需执行如传控射门等复杂战术。
*   **评估基准**：在每个环境中，设计了**5个具有不同、代表性协作行为的未见队友**（如GRF中“只传球一次后射门”、“让特定球员得分”等）作为测试集。
*   **评估指标**：
    *   **R1（任务成功率）**：完成基本任务的概率。
    *   **R2（行为满意度）**：满足队友特定行为偏好的成功率。
*   **对比方法**：
    *   **经典两阶段方法**：FCP（不同随机种子）、MEP（最大熵种群训练）、LIPO（学习不兼容策略）。这些方法先生成队友池，再统一训练一个智能体。
    *   **智体中心式迭代方法**：Macop，通过最小化与智能体的兼容性来迭代生成新队友。
    *   **自身变体**：
        *   **\*-PBT**：将FCP等方法第一阶段的队友替换为SemDiv或Macop生成的队友。
        *   **SemDiv-R1/R2**：选择R1或R2最优的策略头，作为性能上界。
        *   **SemDiv-Dist**：基于行为描述的文本嵌入距离选择策略头，而非LLM推理。
    *   **纯LLM基线**：LLM-Agent，仅使用LLM直接作为控制策略。
    *   **自我对战上限**：Oracle，表示测试队友的自我对战性能，作为理论上界。

### 4. 资源与算力

*   **LLM使用**：使用了OpenAI的`gpt-4o-2024-08-06`模型作为核心LLM，也测试了更小的`gpt-4o-mini`模型。
*   **计算成本**：论文明确提到了成本估算，单次完整的SemDiv实验花费约为**300美元用于项目**，以及**0.10美元用于OpenAI API调用**。
*   **计算硬件与时长**：论文未明确提及所使用的GPU型号、数量以及具体的训练时长。提及的细节为“使用默认的超参数设置”，以及每个队友的训练步数（如GRF环境为10^7步），但未说明硬件配置下的实际耗时。

### 5. 实验数量与充分性

*   **实验量级**：
    *   **主实验**：在4个环境中，与10个对比方法（含变体）进行性能对比，所有实验重复3个随机种子。
    *   **消融研究**：通过表1中的多个自身变体（如SemDiv-Dist、*\-R1/R2、*\-\-PBT），系统性地消融了LLM选择器、多头部架构、持续学习正则化以及生成队友质量的影响。
    *   **案例分析**：在GRF环境中进行深入的案例研究，包含训练曲线、轨迹可视化和具体实例，定性展示了SemDiv的工作流程和队友多样性（图3）。
    *   **参数分析**：比较了不同训练队友数量（1到48个）对FCP、SemDiv-PBT和SemDiv性能的影响（图4）。
    *   **稳健性分析**：评估了语言描述模糊性和LLM模型质量对性能的影响（图5）。
*   **充分性与公平性**：实验设计**非常全面且公平**。作者在多个复杂环境中对比了大量强基线方法，并通过丰富的自身消融和探索性实验，深入剖析了框架各组件的贡献。确保所有方法使用相近数量的队友策略进行训练，保证了对比的公平性。

### 6. 论文的主要结论与发现

*   **SemDiv在协调未见过队友方面表现出色**：在所有四个环境中的综合评估中，SemDiv的性能（R1和R2平均值）显著超越了所有基线方法，平均任务成功率（R1）和满意度（R2）分别优于最佳基线Macop **19%** 和 **39%**。
*   **语义多样性队友质量更高且覆盖更广**：在GRF的轨迹可视化（图3c）表明，相较于FCP，SemDiv生成的队友策略在策略空间中的分布更广泛、更离散，并能够发现如“多次传球”等策略级方法无法触及的复杂行为。
*   **多头部架构和LLM选择器至关重要**：与使用单一网络的PBT方法（\*-\-PBT）相比，多头部版本（SemDiv, Macop）性能大幅提升。同时，基于嵌入距离的选择（SemDiv-Dist）效果很差，证明了LLM对复杂任务的深度语言理解是进行有效策略选择的关键。
*   **具备高效扩展性**：随着队友数量增加，SemDiv的性能提升幅度远超基线方法（图4），显示出其框架在处理越来越多协作模式时的良好扩展性。

### 7. 优点

*   **创新性的宏观思路**：将LLM强大的语义理解和生成能力与MARL的策略学习有机结合，从策略级多样性提升到语义级多样性，是解决问题的根本性创新。
*   **完整且闭环的框架设计**：包含了从行为生成、奖励编程、策略训练、多维度验证到最终智能体持续学习和基于语言的自适应选择的完整自动化流程，形成了一个高质量数据（队友）飞轮。
*   **严谨全面的实验评估**：在多个具有代表性的环境中验证，与大量基线方法进行对比，并通过详尽的消融实验和案例分析，强有力地支撑了核心主张。
*   **解决了实际应用痛点**：提出的基于语言的策略选择机制，使智能体能根据一句自然语言指令零样本地适配新队友，避免了现实场景中代价高昂的在线交互和学习过程。

### 8. 不足与局限

*   **对LLM质量与可靠性依赖强**：框架的性能瓶颈会受限于底层LLM的能力（如图5c所示，模型降级会导致性能下降）。如果LLM生成的奖励函数有误或行为验证失败，会使整个流程中断或引入噪声。尽管有反馈修正机制，但这仍然是一个潜在的单点故障。
*   **计算与API成本**：虽然单次成本不高，但迭代式的LLM调用过程仍会产生不小的时间和经济成本，且API的稳定性、延迟和定价依赖于第三方服务。
*   **任务场景的泛化性未充分验证**：实验局限于准静态的博弈和网格世界。对于更动态、更复杂、更接近真实物理世界的任务（如论文展望中提到的具身智能），其行为描述、奖励函数定义和策略学习的难度会呈指数级上升，效果尚待检验。
*   **与性能上界仍有差距**：从结果来看，SemDiv与Oracle（自我对战）的性能相比仍有一定差距，表明在生成队友的全面性或智能体的训练方式上仍有提升空间。
*   **行为空间的探索并非完全开放**：LLM是根据提示和历史生成行为，其探索范围受限于LLM的知识背景和内置偏见，可能无法发现超越其认知边界的、真正“离经叛道”但有效的协作策略。

（完）
