---
title: Improving Model Alignment Through Collective Intelligence of Open-Source Models
title_zh: 通过开源模型的集体智慧改善模型对齐
authors: "Junlin Wang, Roy Xie, Shang Zhu, Jue WANG, Ben Athiwaratkun, Bhuwan Dhingra, Shuaiwen Leon Song, Ce Zhang, James Zou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=K4N9UvsuNB"
tags: ["query:fla"]
score: 7.0
evidence: 提出MoAA，一种利用多智能体混合方法生成高质量对齐数据，可应用于金融AI智能体对齐
tldr: 对齐大模型通常需要昂贵的人工标注数据。本文提出MoAA，利用多种开源模型的集体智慧生成高质量对齐数据，用于监督微调和偏好优化。实验表明，该方法在有用性和无害性上优于单模型生成数据方案，为金融AI智能体的对齐提供了一种可扩展的数据增强途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-k4n9uvsunb/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 780, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k4n9uvsunb/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 419, \"height\": 227, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k4n9uvsunb/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1385, \"height\": 587, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k4n9uvsunb/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1681, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k4n9uvsunb/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 892, \"height\": 538, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1335, \"height\": 698, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 861, \"height\": 246, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 859, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 856, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1438, \"height\": 398, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 858, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1162, \"height\": 175, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1451, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1318, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1291, \"height\": 455, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1459, \"height\": 502, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1782, \"height\": 455, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1562, \"height\": 626, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1435, \"height\": 324, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1470, \"height\": 447, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1285, \"height\": 767, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k4n9uvsunb/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1065, \"height\": 337, \"label\": \"Table\"}]"
motivation: 手工标注对齐数据昂贵且难以扩展，多样性受限。
method: 提出MoAA，通过混合多种模型生成对齐训练数据。
result: 在有用性和无害性上优于单模型生成数据的方法。
conclusion: MoAA为金融智能体的高效对齐提供了一种可扩展方案。
---

## Abstract
Building helpful and harmless large language models (LLMs) requires effective model alignment approach based on human instructions and feedback, which necessitates high-quality human-labeled data. Constructing such datasets is often expensive and hard to scale, and may face potential limitations on diversity and generalization. To address these challenges, we introduce Mixture of Agents Alignment (MoAA), that leverages the collective strengths of various language models to provide high-quality data for model alignment. By employing MoAA, we enhance both supervised fine-tuning and preference optimization, leading to improved performance compared to using a single model alone to generate alignment data (e.g. using GPT-4o alone). Evaluation results show that our approach can improve win rate of LLaMA-3.1-8B-Instruct from 19.5 to 48.3 on Arena-Hard and from 22.33 to 57.23 on AlpacaEval2, highlighting a promising direction for model alignment through this new scalable and diverse synthetic data recipe. Furthermore, we demonstrate that MoAA enables a self-improvement pipeline, where models fine-tuned on MoA-generated data surpass their own initial capabilities, providing evidence that our approach can push the frontier of open-source LLMs without reliance on stronger external supervision. Data and code will be released.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 形式，对《通过开源模型的集体智慧改善模型对齐》这篇论文进行结构化、深入且客观的总结。

### **1. 核心问题与研究背景**

论文聚焦于大语言模型对齐过程中的一个核心挑战：**高质量人类标注数据的获取瓶颈**。

-   **问题**：标准的模型对齐流程（监督微调和基于人类反馈的强化学习）严重依赖昂贵、难以大规模扩展且可能缺乏多样性的人类标注指令和偏好数据。虽然可以使用单个强大闭源模型（如 GPT-4）生成合成数据，但这种方法可能引入单一模型的偏见，且存在可复现性差的问题。
-   **核心思想**：探索并利用**多种不同开源大语言模型的集体智慧**，为模型对齐生成更高质量、更具多样性的合成数据，从而替代或优于依赖单一强大模型或简单组合多模型的方法。

### **2. 方法论：混合智能体对齐**

论文提出了一种名为混合智能体对齐的两阶段训练框架，利用了混合智能体架构，让多个开源语言模型以结构化方式协同工作。

-   **第一阶段：基于 MoA 的监督微调**
    -   **核心思想**：利用 MoA 架构作为高质量合成数据生成器。
    -   **技术细节（MoA 架构）** ：MoA 将语言模型分为“提议者”和“聚合者”两类角色，并组织成多个层。
        -   **提议者**：生成多样化的参考回复，提供不同视角。
        -   **聚合者**：综合前一层所有模型的输出，提炼出更高质量的最终回复。
        -   **流程**：对于一个给定的指令，第一层“提议者”模型分别生成回复；第二层“聚合者”模型则接收所有第一层的回复和原始指令，并通过一个“聚合-综合”提示词，生成一个整合了集体智慧的高质量回复。
    -   **SFT 数据生成**：使用一个两层的 MoA 架构，为训练集中的每个指令生成一个合成回复。使用的模型组合例如：WizardLM-8x22B、Qwen2-72B-Instruct 等作为提议者，Qwen1.5-110B-Chat 作为聚合者。

-   **第二阶段：基于 MoA 的偏好对齐**
    -   **核心思想**：将 MoA 架构改造为一种无需训练的“奖励模型”，用于标注偏好数据，然后进行直接偏好优化。
    -   **技术细节**：
        1.  **生成候选回复**：使用第一阶段训练好的 SFT 模型，为每个指令生成多个候选回复（如 5 个）。
        2.  **MoA 作为奖励模型**：
            -   **提议者**：使用另一组语言模型（如 Gemma-2-27B-it 等），对一对回复进行平衡、全面的评估。
            -   **聚合者**：综合所有提议者的评估，给出最终判断，明确哪个回复更好。
            -   **去偏**：采用成对比较和双重评估（交换回复顺序）来减轻位置偏差。
        3.  **标准过滤**：在评估前，首先提示模型动态地从预定义列表中（如安全性、准确性、深度等）选择与当前查询最相关的 3 个评估标准，并据此进行评估，使判断更具针对性。
        4.  **构建 DPO 数据**：从候选回复中选出 MoA 奖励模型打分最高和最低的，作为偏好对中的“胜出（chosen）”和“落败（rejected）”回复。

### **3. 实验设计**

-   **数据集与基准**：
    -   **SFT 训练数据**：主要使用 Ultrafeedback 数据集，并混入 5,000 条 Ultrachat-200k 的多轮对话数据以增强对话能力。
    -   **DPO 训练数据**：从 Ultrafeedback 中采样 6,000 条指令。
    -   **评估基准**：
        -   **AlpacaEval 2**：评测模型回复相对于 GPT-4 的胜率。
        -   **Arena-Hard**：包含 500 个来自真实用户的挑战性指令。
        -   **MT-Bench**：评测多轮对话能力，涵盖 8 个领域。
    -   **基座模型**：在 Llama-3.1-8B-Instruct 和 Gemma-2-9B-it 上应用方法。
-   **对比方法**：
    -   **SFT 阶段**：对比了使用单个模型（包括 GPT-4o）生成数据、随机采样多模型数据、组合所有多模型数据、以及使用 ArmoRM 奖励模型筛选最优回复等方法。
    -   **DPO 阶段**：将 MoA 奖励模型与单独的语言模型（如 Llama-3.1-70B-Instruct）、GPT-4o、以及顶尖的 ArmoRM-Llama3-8B-v0.1 和 PairRM 奖励模型进行了对比。

### **4. 资源与算力**

-   **算力**：论文在附录 A 中提到，所有 SFT 和 DPO 实验均在 **1 个节点、配备 8 块 A100 GPU 的服务器**上完成。
-   **训练效率**：未详细提及具体的训练总时长，但给出了详细的超参数（学习率、批次大小、训练轮数等）。

### **5. 实验数量与充分性**

论文进行了**非常全面且充分的实验**，能有力支撑其论点，实验设计客观公平。

-   **多维度评估**：在 3 个主流对齐基准上对两大基座模型进行测试。
-   **两阶段有效性验证**：分别验证了 MoAA-SFT 和 MoAA-DPO 的性能提升（表 1）。
-   **丰富的消融和对比实验**：
    -   对 SFT 数据来源（单模型 vs MoA）进行了详细对比（图 4）。
    -   对指令数据集的组合影响进行了消融（表 2）。
    -   对比了 MoA 与朴素多模型聚合（随机、组合、选最优）的差异，证明了架构设计的必要性（表 3）。
    -   对 MoA 作为奖励模型的性能进行了专门评测（在 RewardBench、PPE 上），并对比了多种奖励模型。
    -   验证了标准过滤的有效性（表 7）。
    -   探讨了自我提升管道（表 4）。
    -   **共计不少于 15 组以上不同变量的对比或消融实验**，覆盖了方法的核心环节、变体及对不同模型的泛化能力。

### **6. 主要结论与发现**

1.  **MoAA 显著提升对齐性能**：通过两阶段 MoAA，能将 8B/9B 规模模型的性能提升至接近甚至超越更强的模型。例如，Llama-3.1-8B-Instruct 在 Arena-Hard 上的胜率从 19.5 飙升至 48.3。
2.  **集体智慧优于单一个体**：MoA 生成的合成数据质量显著优于单个模型（即便是 GPT-4o）生成的数据，并且这种优势不是简单的数据量堆砌，而是源于架构化的协作与提炼。
3.  **MoA 是有效的奖励模型**：无需专门训练的 MoA 架构，在作为奖励模型时表现出色，尤其在 Safety 类别上，超越了其组成中的最佳单个模型，并在 DPO 后模型的效果上整体优于或匹配专门训练的奖励模型（如 ArmoRM）。
4.  **实现了“青出于蓝”的自我提升**：使用 MoA 生成的数据微调 MoA 中最强的模型，其性能可以超越原始模型自身，证明了该方法有能力在没有外部更强监督信号的情况下，推动开源模型的边界。

### **7. 优点**

-   **创新性强**：首次将 Mixture of Agents 架构系统地应用于模型对齐的全流程（SFT 和 DPO），将多模型协作从推理阶段引入到了训练阶段。
-   **方法新颖且有效**：提出的标准过滤机制，让奖励模型的评估能动态适应查询类型（如区分安全类问题和事实类问题），比固定标准的评估更合理。
-   **实用性与可复现性好**：完全基于开源模型构建，成本低于直接调用 GPT-4o，且承诺公开发布数据和代码，对社区贡献大。
-   **实验扎实**：实验设计全面、对比基准强（包括 GPT-4o 和 ArmoRM）、消融研究细致，结论可信度高。并且验证了方法不会显著损害模型的数学、编程等推理能力，保持了模型的泛化性。

### **8. 不足与局限**

-   **MoA 架构选择依赖经验**：论文承认 MoA 架构（选择哪些模型作为提议者和聚合者）的确定部分依赖于经验和人工搜索，虽然初步探索了自动搜索，但未作为主要方法，可能会影响方法的最优性。
-   **多轮数据处理的潜在问题**：论文指出其生成多轮对话数据的方式可能存在“不连续性”问题，即下一轮查询可能依赖于前序回复，当前实现方式可能不够精细。
-   **效率问题**：虽然训练后的模型推理效率高，但生成合成数据和作为奖励模型进行标注的过程（需多次调用多个大模型）本身计算开销巨大，仅生成 Ultrafeedback 数据的成本就达 365.9 美元。这是典型的以训练时算力换取推理时效率的策略。
-   **实验规模的泛化性**：主要验证对象是 8B/9B 和 3B 模型，对于更大规模模型（如 70B 以上）是否仍有同样显著的提升效果尚待检验。

（完）
