---
title: "SQL-R1: Training Natural Language to SQL Reasoning Model By Reinforcement Learning"
title_zh: SQL-R1：通过强化学习训练自然语言到SQL的推理模型
authors: "Peixian MA, Xialie Zhuang, Chengjin Xu, Xuhui Jiang, Ran Chen, Jian Guo"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=hgJQcuDwm1"
tags: ["query:fla"]
score: 5.0
evidence: 强化学习训练NL2SQL推理，适应金融领域任务
tldr: 自然语言到SQL（NL2SQL）模型在涉及多表连接和嵌套查询的复杂场景中推理性能有限，且当前SFT方法限制了其在金融、医疗等新领域的适应性和可解释性。本文提出SQL-R1，首创基于强化学习的NL2SQL推理模型训练方法，通过强化学习提升复杂查询的推理能力，在合成和真实数据集上验证了有效性，为结构化查询生成提供了更鲁棒的领域迁移方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-hgjqcudwm1/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1452, \"height\": 708, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-hgjqcudwm1/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1160, \"height\": 598, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-hgjqcudwm1/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1349, \"height\": 2295, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-hgjqcudwm1/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1157, \"height\": 615, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-hgjqcudwm1/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1348, \"height\": 1760, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1472, \"height\": 928, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1401, \"height\": 474, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1375, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1432, \"height\": 562, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 716, \"height\": 357, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 618, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1276, \"height\": 453, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1444, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1159, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-hgjqcudwm1/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 854, \"height\": 218, \"label\": \"Table\"}]"
motivation: 当前NL2SQL模型多依赖SFT，在金融等新环境中适应性和可解释性有限。
method: 提出SQL-R1，采用强化学习训练NL2SQL模型以提升复杂查询的推理能力。
result: 在包含多表连接和嵌套查询的场景中提升推理性能。
conclusion: 验证了RL在结构化查询生成中提升推理和迁移能力的潜力，有利于金融和医疗等领域的应用。
---

## Abstract
Natural Language to SQL (NL2SQL) enables intuitive interactions with databases by transforming natural language queries into structured SQL statements.  Despite recent advancements in enhancing human-computer interaction within database applications, significant challenges persist, particularly regarding the inference performance in complex scenarios involving multi-table joins and nested queries.   Current methodologies primarily utilize supervised fine-tuning (SFT) to train the NL2SQL model, which may limit adaptability and interpretability in new environments (e.g., finance and healthcare).
In order to enhance the reasoning performance of the NL2SQL model in the above complex situations, we introduce SQL-R1, a novel NL2SQL reasoning model trained by the reinforcement learning (RL) algorithms.
We design a specialized RL-based reward function tailored for NL2SQL tasks and discussed the impact of cold start and synthetic data on the effectiveness of intensive training. In addition, we achieve competitive accuracy using only a tiny amount of synthetic NL2SQL data for augmented training and further explore data engineering for RL. In existing experiments, SQL-R1 achieves execution accuracy of 88.6\% and 67.1\% on the benchmark Spider and BIRD, respectively. The code is available at https://github.com/IDEA-FinAI/SQL-R1.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 形式，对这篇论文《SQL-R1: Training Natural Language to SQL Reasoning Model By Reinforcement Learning》进行结构化、深入、客观的总结。

### **1. 论文的核心问题与整体含义**

*   **研究动机与背景**：
    *   自然语言到 SQL (NL2SQL) 技术旨在让用户通过日常语言查询数据库，但其在复杂场景下的推理能力依然是重大挑战。
    *   现有主流方法依赖于**监督微调 (SFT)**，这导致模型在面临多表连接、嵌套查询时容易出错，且在一个数据库上训练好的模型很难适应新的领域（如金融、医疗）。
    *   SFT 方法的另一个缺陷是**缺乏可解释性**，模型生成 SQL 的逻辑过程不透明，这在金融等高风险领域是难以接受的。
    *   近来，强化学习 (RL) 在大语言模型的推理能力训练上（如数学、编程）展现出巨大潜力，这为提升 NL2SQL 模型的推理能力提供了新思路。

*   **核心问题**：
    论文旨在探索三个关键问题：
    1.  **算法设计**：能否为 NL2SQL 任务设计专门的强化学习算法，并成功训练出一个具有强推理能力的模型？
    2.  **冷启动策略**：基于强化学习的 NL2SQL 模型是否需要进行特定形式的冷启动（如先进行监督微调）？
    3.  **数据工程**：如何利用合成数据工程，可持续地支持 NL2SQL 推理模型的高效、鲁棒训练？

*   **整体含义**：
    本工作提出了**SQL-R1**，一个**首创的、完全通过强化学习训练的 NL2SQL 推理模型**。它验证了强化学习在提升模型处理复杂语义、增强泛化能力和提供可解释推理过程方面的有效性，为 NL2SQL 模型从“模仿”走向“探索和推理”开辟了新路径，尤其有利于其在金融、医疗等有严格要求的领域的应用。

### **2. 论文提出的方法论**

SQL-R1 的核心思想是让大语言模型通过与数据库执行环境的交互获得奖励信号，从而自主探索和学习如何生成正确的 SQL 查询。其技术框架包含以下关键部分：

*   **两阶段训练策略**：
    1.  **监督微调 (SFT) 冷启动**：作为可选步骤，使用带有思维链的合成数据对基础模型进行微调，以“激活”其指令遵循和 NL2SQL 生成能力，为后续的强化学习探索提供更好的起点。
    2.  **强化学习训练**：这是核心阶段，使用 **Group Relative Policy Optimization (GRPO)** 算法进行训练。模型不再模仿标准答案，而是为每个问题生成多个 SQL 候选项，通过执行这些 SQL 并从数据库中获取反馈来优化策略。

*   **算法流程 (以 GRPO 核心思想为例)**：
    *   对于一个给定的自然语言问题和数据库 Schema，当前策略模型 \(\pi_{\theta}\) 会生成一组 \(G\) 个 SQL 候选项 \(\{o_1, o_2, ..., o_G\}\)。
    *   这些候选项通过设计的**奖励函数**进行评分。
    *   GRPO 算法通过计算每个候选项在组内的相对优势，来指导策略模型更新。其核心优化目标 \(J_{GRPO}(\theta)\) 可概括为：基于旧策略 \(\pi_{\theta_{old}}\) 生成的输出，计算新旧策略的重要性采样比率，并用带限幅的比率和组内相对优势来更新模型参数，同时加上一个 KL 散度项来限制新策略与参考策略 \(\pi_{ref}\) 的偏离程度。

*   **关键设计：四层递进式奖励函数**
    *   该奖励函数是方法的核心，它提供了多维度的、渐进式的反馈，引导模型生成格式规范、语法正确、结果准确且带有推理过程的 SQL。
    *   **格式奖励 (Format Reward, \(S_f\))**：强制模型将推理过程置于 `<think>...</think>` 标签内，SQL 查询置于 `<answer>...</answer>` 和 ````sql...```` 标签内。格式错误则直接负奖励。
    *   **执行奖励 (Execution Reward, \(S_e\))**：评估 SQL 能否在数据库上成功执行。只有执行通过，才能获得后续更高权重的奖励。这有效防止模型生成无意义的乱码。
    *   **结果奖励 (Result Reward, \(S_r\))**：这是最重要的奖励，基于 SQL 的执行结果与标准答案的执行结果是否一致（执行准确率 EX）来判断。结果错误会给予强烈的负惩罚。
    *   **长度奖励 (Length Reward, \(S_l\))**：鼓励模型生成更详细的推理过程，同时限制 SQL 部分过长或包含过多无关解释，引导模型在合理的长度内进行深度思考。

*   **数据工程**：
    *   利用大规模合成数据集 **SynSQL-2.5M** 作为数据源。
    *   从中提取 **SynSQL-200K**（各难度均衡）用于 SFT 冷启动实验。
    *   核心 RL 训练仅使用从其复杂子集中随机采样的 **5,000 条数据 (SynSQL-Complex-5K)**，证明了使用少量高质量合成数据即可进行有效的强化学习训练。

### **3. 实验设计**

*   **评估基准与指标**：
    *   **数据集/场景**：
        *   **Spider**: 跨域、复杂、大规模的手工标注数据集，用于评估模型的泛化能力。包含 200 个数据库，10,181 个问题对。
        *   **BIRD**: 更接近真实世界场景的大规模数据库问答基准，包含 95 个大型数据库，12,751 个问题对，对模型的外部知识和语义理解能力要求更高。
        *   **鲁棒性子集**: Spider-DK, Spider-Syn, Spider-Realistic，用于测试模型的鲁棒性。
        *   **Spider 2.0**: 包含真实企业级工作流的评测集，用于评估极限难度。
    *   **评价指标**: 主要采用 **执行准确率 (Execution Accuracy, EX)**。即模型生成的 SQL 在数据库上执行的结果，与标准答案 SQL 执行的结果是否完全一致。
    *   **对比方法**: 广泛对比了基于不同基础模型（如 Qwen, DeepSeek-Coder, GPT-4/4o）和不同架构（SFT, 多智能体, 树搜索等）的先进 NL2SQL 方法，包括但不限于 **DAIL-SQL, CHESS, MCTS-SQL, OmniSQL, Reasoning-SQL** 等十余种。

*   **实验设置概要**：
    *   基础模型：主要基于 Qwen2.5-Coder 系列的 3B、7B、14B 模型。
    *   基线：包括未经任何后训练的基础模型，以及仅经过 SFT 的模型（如 OmniSQL）。
    *   消融研究：
        1.  **冷启动策略分析**：比较了无冷启动、仅 SQL 生成指令的 SFT、含推理指令的 SFT 对最终 RL 模型性能的影响。
        2.  **奖励函数消融**：逐一移除格式、执行、结果、长度四个奖励组件，观察性能变化。
        3.  **SQL 候选数量消融**：测试了在推理时生成不同数量的 SQL 候选项（自一致性）对性能的影响。
        4.  **数据库值检索消融**：测试了在 RL 训练中是否包含数据库具体字段值对模型的影响。

### **4. 资源与算力**

*   **计算环境**：实验在配备 8 块 GPU 的服务器上进行。
*   **GPU 型号**：论文明确提到是 `80 GB 内存，BF16 精度下提供 312 TFLOPS 算力的 GPU`。根据此描述，其很可能为 **NVIDIA A100 (80GB)** 或 **H800 (80GB)** 型号。
*   **总训练时长/计算量**：论文未明确提及完整的训练持续了多久或消耗了多少总 GPU 小时。
*   **基础模型**：主要在 **Qwen2.5-Coder-3B, 7B, 14B** 三个参数规模的模型上进行实验。

### **5. 实验数量与充分性**

*   **实验数量与类型**：
    *   论文进行了**大规模、多维度的实验**来验证其核心主张。
    *   **主实验结果**：包含在 2 个主要基准 (Spider, BIRD) 的多个子集（Dev, Test）上，与超过 10 种主流方法的全面对比（Table 1）。
    *   **鲁棒性分析**：在 3 个鲁棒性测试集上进行了验证（Table 2）。
    *   **复杂度分析**：在 BIRD 的不同难度级别（Simple, Moderate, Challenging）上分别进行了性能统计（Table 3）。
    *   **模型规模分析**：实验了 3B, 7B, 14B 三种规模的模型，并绘制了性能与模型规模的曲线图（Figure 2, Table 7）。
    *   **策略与组件消融实验**：系统地探索了冷启动策略（Table 4）、奖励函数各组件（Table 5, Table 10）、推理候选数（Figure 9）、数据库值使用（Table 9）的影响，共计至少 6 组严谨的消融研究。
    *   **效率对比实验**：对比了 SQL-R1 与其他方法在延迟和 Token 消耗上的效率（Table 8）。

*   **充分性与客观性评估**：
    *   **非常充分**。实验设计系统且全面，覆盖了主流评测集、多维度的性能分析、以及对自身方法各组件效果的深入解构。实验设置清晰，便于复现。
    *   **非常客观和公平**。对比方法广泛且有代表性，没有只选择对自己有利的基线。消融实验设计科学，清晰地揭示了各组件的作用，结论有坚实的数据支撑。

### **6. 论文的主要结论与发现**

*   **RL vs. SFT**：纯粹的强化学习训练能让较小的模型（如 7B）在复杂 NL2SQL 任务上达到甚至超越更大规模、基于 SFT 或闭源 API（如 GPT-4o）的模型性能。SQL-R1-7B 在 Spider 和 BIRD 上均取得了极具竞争力的准确率。
*   **冷启动并非必须**：实验发现，在拥有高质量合成数据的前提下，直接对基础模型进行 RL 训练的效果可以与先 SFT 再 RL 的效果相媲美甚至更好，SFT 冷启动的有效性高度依赖于数据源和规模。
*   **奖励函数设计至关重要**：设计的四层递进式奖励函数是成功的基石。消融实验证明，**执行奖励和结果奖励**是最关键的，任何组件的缺失都会导致性能下降。
*   **合成数据工程是关键**：实验有力地证明了，利用少量精细设计的合成数据（如 5K 复杂样本）就能有效驱动强化学习训练，实现显著的能力提升，验证了 Q3 的可持续性。
*   **模型规模效应**：扩大模型规模（7B -> 14B）带来的提升主要集中在**高难度查询**上，说明更大的模型容量更能处理长距离依赖和复杂逻辑。
*   **可解释性增强**：通过案例分析可以观察到，RL 训练后的模型（SQL-R1）展现出更清晰、更有逻辑性的“自上而下”的推理过程，显式地输出了其思考链。

### **7. 优点**

*   **开创性探索**：首次将 GRPO 强化学习算法系统性地应用于 NL2SQL 领域，并取得了显著成功，为该领域提供了全新的研究范式。
*   **方法设计精巧**：
    *   **奖励函数设计**是一个亮点。四层递进式奖励（格式、执行、结果、长度）设计得非常细致和全面，能够有效引导模型的行为，避免了单一奖励带来的“奖励破解”问题。
    *   **数据高效性**：使用仅 5K 的合成数据完成核心 RL 训练就实现顶级性能，颠覆了传统 SFT 依赖海量数据的模式，展示了 RL 在 NL2SQL 上的高样本效率。
*   **实验扎实全面**：实验设计覆盖了多个基准、多个模型尺寸、多种分析维度（复杂度、鲁棒性、效率），并与众多 SOTA 方法进行了公平对比，结论令人信服。
*   **兼具性能与可解释性**：SQL-R1 不仅在准确率指标上表现优异，还能明确展示其推理过程（Chain-of-Thought），这对于构建可信赖的 AI 系统，特别是在金融、医疗等高风险领域至关重要。

### **8. 不足与局限**

*   **数据库方言局限**：当前模型的训练和评估主要基于 **SQLite** 单一数据库方言，尚未验证其在其他常用的企业级数据库方言（如 Snowflake, DuckDB, PostgreSQL 等）上的泛化能力。
*   **基础模型覆盖度不足**：文中承认，实验主要基于 Qwen2.5-Coder 系列模型。虽然其在当时表现优异，但未能覆盖更多样的模型架构（如 Llama 系列），可能限制了结论的普适性。
*   **缺乏训练细节**：论文未披露完整的训练总时长、消耗的 GPU 小时数等关键成本指标，这对于评估方法的实用性和可复现性是一个信息缺口。
*   **合成数据依赖风险**：方法高度依赖合成数据集的质量和覆盖度。虽然实验中未见明显问题，但如果合成数据与目标领域的真实数据分布有偏差，模型可能仍然存在未知的泛化风险。从 BIRD 基准的结果看，其 EX 分数距离在 Spider 上的表现仍有较大差距，说明在更真实、更复杂的场景下，提升空间依然巨大。

（完）
