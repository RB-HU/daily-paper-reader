---
title: "MoRAgent: Parameter Efficient Agent Tuning with Mixture-of-Roles"
title_zh: MoRAgent：基于角色混合的参数高效智能体调优
authors: "Jing Han, Binwei Yan, Tianyu Guo, Zheyuan Bai, Mengyu Zheng, Hanting Chen, Ying Nie"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=rdeDanrYEj"
tags: ["query:fla"]
score: 9.0
evidence: 通过将智能体能力分解为推理者、执行者、总结者角色，提出大模型智能体的参数高效微调方法
tldr: 大模型智能体的参数高效微调（PEFT）方法尚未充分探索。本文提出MoRAgent，将智能体能力分解为推理者、执行者、总结者三种角色，分别负责理解查询、调用工具和总结信息。通过角色混合实现参数高效调优，实验表明在多种智能体任务上以更少可调参数取得更优性能，推动了自主智能体后训练技术的发展。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1645, \"height\": 658, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1691, \"height\": 789, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 817, \"height\": 752, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 851, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 824, \"height\": 531, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rdedanryej/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 501, \"height\": 556, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1765, \"height\": 588, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 854, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 820, \"height\": 364, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 794, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 854, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rdedanryej/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 857, \"height\": 372, \"label\": \"Table\"}]"
motivation: 大模型智能体的参数高效微调方法论尚未被充分挖掘。
method: 提出MoRAgent，将智能体任务分解为推理、执行、总结三种角色进行PEFT。
result: 在较少可调参数下，MoRAgent在多种智能体任务上表现优异。
conclusion: 该方法为大模型智能体的后训练提供了高效可行的新范式。
---

## Abstract
Despite recent advancements of fine-tuning large language models (LLMs) to facilitate agent tasks, parameter-efficient fine-tuning (PEFT) methodologies for agent remain largely unexplored. In this paper, we introduce three key strategies for PEFT in agent tasks: 1) Inspired by the increasingly dominant \textit{Reason+Action} paradigm, we first decompose the capabilities necessary for the agent tasks into three distinct roles: reasoner, executor, and summarizer. The reasoner is responsible for comprehending the user's query and determining the next role based on the execution trajectory. The executor is tasked with identifying the appropriate functions and parameters to invoke. The summarizer conveys the distilled information from conversations back to the user. 2) We then propose the Mixture-of-Roles (MoR) framework, which comprises three specialized Low-Rank Adaptation (LoRA) groups, each designated to fulfill a distinct role. By focusing on their respective specialized capabilities and engaging in collaborative interactions, these LoRAs collectively accomplish the agent task. 3) To effectively fine-tune the framework, we develop a multi-role data generation pipeline based on publicly available datasets, incorporating role-specific content completion and reliability verification.
We conduct extensive experiments and thorough ablation studies on various LLMs and agent benchmarks, demonstrating the effectiveness of the proposed method. This project is publicly available at https://mor-agent.github.io

---

## 论文详细总结（自动生成）

### 1. 研究动机与核心问题
- **研究背景**：大型语言模型（LLM）在工具调用、推理等智能体任务上展现出强大能力，但主流微调方式仍依赖全参数微调，存在两大痛点：
  - 计算资源需求高，阻碍广泛应用。
  - 破坏基础模型的通用能力，难以在通用任务与智能体任务间灵活切换。
- **核心问题**：针对智能体任务的**参数高效微调（PEFT）方法论几乎空白**。直接将通用PEFT方法（如LoRA）用于智能体微调，性能显著低于全参数微调，因为智能体任务需要同时掌握推理、执行、总结等多种能力，低秩约束下学习困难。
- **整体含义**：本文旨在设计一套面向智能体的PEFT框架，以极少的可训练参数，达到甚至超越全参数微调的智能体表现，同时保持模型通用能力。

### 2. 方法论详解
#### 2.1 能力分解
受“Reason+Action”范式启发，将智能体任务所需能力分解为三个独立角色：
- **推理者（Reasoner）**：理解用户查询，根据历史执行轨迹分析当前状态，决定下一步调用执行者还是总结者。
- **执行者（Executor）**：根据推理者的分析，选择正确的工具函数与参数进行调用。
- **总结者（Summarizer）**：将整个对话历史提炼，向用户反馈最终结果或解释失败原因。

工作流示例见原文Figure 1。

#### 2.2 Mixture-of-Roles (MoR) 框架
- **整体结构**：在Transformer的注意力层或前馈网络（FFN）上装备MoR模块。每个MoR模块包含三组LoRA专家，分别对应推理者、执行者、总结者。基础模型权重冻结，仅训练新增的LoRA与路由参数。
- **前向计算**：
  - 输入隐藏状态 \( u \)，先经原始权重 \( W_0 \) 得到 \( h_0 \)，再加上三个角色的LoRA输出之和：\( h = h_0 + \Delta h_r + \Delta h_e + \Delta h_s \)。
  - 通过**规则型角色感知门控**确保每一时刻只有一个角色激活（例如，输入用户查询时激活推理者，随后由推理者动态决定下一角色）。
  - 每个角色内部包含一个共享LoRA和多个可路由LoRA，并使用**Top-K token感知路由器**为不同token选择不同LoRA组合。
  - 以推理者为例：
    \[
    \Delta W_r = B_0^r A_0^r + \sum_{i=1}^{E_r} B_i^r A_i^r R_r(u_r)
    \]
    其中 \(R_r\) 为路由器，\(E_r\) 为路由LoRA数量。
- **训练目标**：
  - 总损失 \( \mathcal{L}_{total} = \mathcal{L}_{CE} + \alpha_1 \mathcal{L}_{aux} + \alpha_2 \mathcal{L}_{orth} \)。
  - \(\mathcal{L}_{CE}\)：交叉熵损失。
  - \(\mathcal{L}_{aux}\)：辅助均衡损失（继承自Switch Transformer），防止负载不均衡。
  - \(\mathcal{L}_{orth}\)：正交损失，鼓励不同LoRA学习不同方向的特征，减少冗余（基于Frobenius范数）。
- **LoRA数量配置**：通过小型验证实验，确认为推理者和执行者各分配5个LoRA（激活4个），总结者分配4个LoRA（激活3个）。

#### 2.3 多角色数据生成流水线
- **数据源**：利用公开数据集（ToolBench、APIGen+ToolACE、glaive-function-calling-v2、MathGenie）作为基础。
- **角色内容补全**：对于缺少“思考”或“总结”步骤的样本，使用GPT-4o填充显式的多角色对话内容。
- **可靠性验证与修正**：
  - 使用DeepSeek-V3评估轨迹质量，过滤低质量样本。
  - 针对执行者输出错误（调用未列入候选的函数、参数类型不匹配、结果无法解决用户问题等），采用规则检查+人工修正+LLM重提示的组合方式提升数据质量。
- **统一格式**：将所有数据统一为角色明确的JSON格式，包含候选函数列表、系统提示、交替的推理-执行-观察轮回及最终总结。

### 3. 实验设计
#### 3.1 基准测试与数据集
- **StableToolBench**：基于ToolBench构建的稳定评测集，包含765个问题，6个子任务，报告可解任务的通过率（Pass Rate）和胜率（Win Rate），采用CoT和DFS两种设定。
- **BFCL (Berkeley Function Calling Leaderboard)**：包含2797个问题，评估AST匹配、可执行函数评估、相关性等。
- **GSM8K & MATH**：数学推理数据集，分别含1319和5000题。不同于直接生成答案，本文通过导入Python包生成并执行代码来求解。
- **微调数据**：StableToolBench对应120k ToolBench轨迹；BFCL对应90k APIGen+ToolACE+glaive数据；数学任务对应80k MathGenie轨迹。

#### 3.2 对比方法
- **不同规模/类型的LLM**：Llama3.2-1B-Instruct、Phi-3.5-mini-Instruct、Qwen2.5-1.5B-Coder作为基础模型。
- **强基线**：GPT-4、ToolLLaMA-v2-7B（专为工具调用微调的模型）。
- **PEFT与全微调方法**：在相同多角色数据集上对比LoRA、DoRA、全参数SFT。

### 4. 资源与算力
- **论文中未明确披露**具体的GPU型号、显存、训练时长或集群规模。文中仅报告了额外引入的可训练参数量（如0.16B、0.36B、0.27B等），以及使用4个epoch、学习率5e-5、损失超参 \(\alpha_1=1e-3, \alpha_2=1e-4\) 等训练细节。算力消耗的透明性存在不足。

### 5. 实验数量与充分性
- **实验规模较大**：
  - 在3个不同家族和规模的基础模型上进行了实验。
  - 覆盖4个不同类型的智能体/函数调用/数学推理基准。
  - 与至少4种强基线方法（含专有模型和开源模型）进行了比较。
  - 针对方法本身设计了多组消融实验：损失函数各组件的作用、LoRA数量变化、微调样本数（1k~90k）的影响、不同PEFT与全微调的对比。
  - 还通过可视化展示了正交损失对LoRA相似度的影响。
- **客观性与公平性**：采用公开排行榜和统一评测协议，基线方法包含当时的SOTA，比较方式公平。消融实验控制变量严谨。

### 6. 主要结论与发现
- MoRAgent以极少的可训练参数，大幅提升了小型和中等规模LLM的智能体能力，在多数指标上**超越全参数SFT和专有智能体模型**。
  - 在StableToolBench上，Llama3.2-1B-Instruct仅增加0.16B参数，DFS通过率提升44.5%，胜率提升25.2%；Phi-3.5-mini增加0.36B参数，CoT通过率提升26.3%。
  - 在BFCL上，MoRAgent-Llama平均准确率提升50.1%，达到77.6%，超越许多大模型。
  - 在数学任务上，Qwen2.5-1.5B-Coder仅增加0.27B参数，GSM8K/MATH分别提升13.8%/12.0%。
- **角色分解+混合LoRA**的设计优于传统LoRA、DoRA，也优于全参数微调。
- 正交损失和负载均衡损失均能带来稳定增益，且LoRA数量存在合理的性价比平衡点。

### 7. 方法亮点
- **新颖的能力分解**：首次将智能体能力系统性地分解为推理、执行、总结三个角色，并设计了专门的LoRA模块，更符合智能体协作本质。
- **结构化的高效框架**：MoR框架通过规则门控+可学习路由，在保证角色分离的同时实现token级别的细粒度适应，训练稳定。
- **高质量数据工程**：构建了一套从公开数据到多角色高质量微调数据的自动化流水线，包含补全、过滤、修正，对社区有参考价值。
- **性价比突出**：在极低附加参数下取得显著的性能提升，为资源受限场景部署智能体提供了可行方案。

### 8. 不足与局限
- **算力透明度不足**：未提供训练时间和硬件需求，难以衡量实际部署成本中的计算开销。
- **角色分解的通用性**：三角色划分在函数调用和工具使用场景下适用性良好，但对于更复杂的多步交互、需要反思、规划或记忆增强的智能体任务，简单的三分可能不够，需进一步验证。
- **推理延迟**：虽然未讨论，但多个LoRA模块和路由机制可能增加推理时的计算量，尤其在长序列或频繁角色切换时。
- **数据依赖性**：数据生成过程依赖GPT-4o等强模型，且涉及人工修正，流水线可复现性和扩展性受限。
- **模型覆盖有限**：仅测试了1B-4B量级的小型模型，对更大规模模型（如7B、13B、70B）的效果和缩放行为未做探究。

（完）
