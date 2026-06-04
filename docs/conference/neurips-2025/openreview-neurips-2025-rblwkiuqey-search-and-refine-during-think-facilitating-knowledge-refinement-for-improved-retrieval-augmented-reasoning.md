---
title: "Search and Refine During Think: Facilitating Knowledge Refinement for Improved Retrieval-Augmented Reasoning"
title_zh: 边思考边搜索与精炼：促进知识精炼以改进检索增强推理
authors: "Yaorui Shi, Sihang Li, Chang Wu, Zhiyuan Liu, Junfeng Fang, Hengxing Cai, An Zhang, Xiang Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=rBlWKIUQey"
tags: ["query:fla"]
score: 6.0
evidence: 提出AutoRefine，一种用于检索增强推理中知识精炼的强化学习后训练框架，可应用于智能体后训练。
tldr: 本文针对检索增强推理中噪声信息干扰问题，提出AutoRefine后训练框架。通过强化学习训练模型在思考过程中交替搜索与知识精炼，迭代过滤和组织证据。实验显示该方法在多种推理任务上显著提升准确性和效率，为智能体的知识密集型任务提供了强化学习后训练新范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1335, \"height\": 926, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1426, \"height\": 592, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1441, \"height\": 826, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 823, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 532, \"height\": 348, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1437, \"height\": 374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1438, \"height\": 315, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 687, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1438, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1442, \"height\": 668, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1437, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 652, \"height\": 495, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1225, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1440, \"height\": 285, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1443, \"height\": 143, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1443, \"height\": 450, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-rblwkiuqey/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1435, \"height\": 1193, \"label\": \"Table\"}]"
motivation: 现有检索增强推理方法常检索到无关或噪声信息，阻碍准确推理。
method: 提出AutoRefine，在推理过程中引入显式知识精炼步骤，并通过强化学习进行后训练。
result: 在多个推理基准上，AutoRefine显著提高了准确率，减少了无效检索。
conclusion: AutoRefine为检索增强推理提供了有效的强化学习后训练方案，可推广至智能体应用。
---

## Abstract
Large language models have demonstrated impressive reasoning capabilities but are inherently limited by their knowledge reservoir.
Retrieval-augmented reasoning mitigates this limitation by allowing LLMs to query external resources, but existing methods often retrieve irrelevant or noisy information, hindering accurate reasoning.
In this paper, we propose **AutoRefine**, a reinforcement learning post-training framework that adopts a new "search-and-refine-during-think" paradigm.
AutoRefine introduces explicit knowledge refinement steps between successive search calls, enabling the model to iteratively filter, distill, and organize evidence before generating an answer.
Furthermore, we incorporate tailored retrieval-specific rewards alongside answer correctness rewards using group relative policy optimization.
Experiments on single-hop and multi-hop QA benchmarks demonstrate that AutoRefine significantly outperforms existing approaches, particularly in complex, multi-hop reasoning scenarios.
Detailed analysis shows that AutoRefine issues frequent, higher-quality searches and synthesizes evidence effectively.

---

## 论文详细总结（自动生成）

好的，我将基于提供的论文内容，生成一份结构化的中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：现有的大语言模型（LLM）检索增强推理方法（RAG）存在两大局限：
    1.  **缺乏对检索文档的精炼**：当前主流的“边思考边搜索”（search-during-think）范式直接基于原始检索结果进行推理。这些文档常包含噪声和无关信息，容易分散模型注意力，尤其是在多跳推理中，早期步骤的偏离会破坏整个推理链。
    2.  **对检索特定奖励的探索不足**：多数方法仅采用基于最终答案正确性的结果奖励进行强化学习（RL）训练，缺乏对检索过程本身的直接指导信号，导致模型难以学会如何检索到更相关、更有信息量的文档。
*   **整体含义**：本文旨在提出一种新的强化学习后训练框架 **AutoRefine**，通过引入“边思考边搜索与精炼”（search-and-refine-during-think）的范式，显式地训练LLM在推理过程中主动过滤、提取和组织检索到的关键证据，从而提升复杂推理的准确性和可靠性。

### 2. 论文提出的方法论

*   **核心思想**：在LLM的推理循环中嵌入一个**显式的知识精炼步骤** (`<refine>`)，并设计**结合最终答案奖励和检索特定奖励**的奖励函数，通过强化学习训练模型自主完成“搜索-精炼-推理”的迭代过程。
*   **关键技术细节**：
    *   **轨迹生成模板**：推理轨迹`o`由一系列结构化操作组成，一个完整的内部循环包括：
        *   `<think> ... </think>`：总体规划和思考。
        *   `<search> ... </search>`：发起搜索查询。
        *   `<document> ... </document>`：接收外部知识库返回的文档。
        *   **`<refine> ... </refine>`（核心创新）**：在此步骤中，模型被要求**明确地**从检索文档中蒸馏出关键证据，过滤噪声，并规划下一步查询。
        *   `<answer> ... </answer>`：基于精炼知识生成最终答案。
    *   **奖励建模**：总奖励 `R_Overall`由两部分构成，用于GRPO优化：
        1.  **结果奖励 (`R_Ans`)**：计算模型最终答案与标准答案间的F1分数。
        2.  **检索特定奖励 (`R_Ret`)**：检查所有`<refine>`块中的文本是否包含标准答案的所有组成部分（准确匹配），以此直接监督知识精炼的质量。
        3.  **集成方式**：模型生成正确答案时获满分；答案错误但`<refine>`中包含所有关键证据时，给予**0.1的检索部分奖励**；否则奖励为0。这种设计鼓励模型即使答案有偏差，也要尽可能在中间步骤提取相关信息。
*   **训练算法**：采用**群组相对策略优化（GRPO）** 算法优化模型，并在计算损失时**屏蔽**检索文档部分的损失，避免学习噪声，专注于提升思考和精炼能力。

### 3. 实验设计

*   **数据集 / 场景**：在7个基准上评估，覆盖两类场景：
    *   **单跳问答**：Natural Questions (NQ), TriviaQA, PopQA。
    *   **多跳问答**：HotpotQA, 2WikiMultihopQA (2Wiki), Musique, Bamboogle。
*   **知识源与检索器**：使用2018年12月的Wikipedia快照作为外部知识源，E5-base-v2作为检索引擎。
*   **对比方法**：
    *   **无检索**：直接生成、监督微调（SFT）、R1 训练。
    *   **单次检索**：朴素RAG（Naive RAG）。
    *   **多次检索**：Search-o1, IRCoT, ReSearch, Search-R1（核心对比对象）。
*   **基座模型**：Qwen2.5-3B-Base 和 Qwen2.5-3B-Instruct。

### 4. 资源与算力

*   文章提到模型训练使用了 **8块 NVIDIA A100-80GB GPU**。
*   采用了全参数微调（Full-parameter Fine-tuning）和全分片数据并行（FSDP），精度为BFloat16。
*   训练步数为**250步**（约等同于200步实际更新，文本有提及200步），但未明确提供总训练时长。

### 5. 实验数量与充分性

*   **实验数量**：进行了较为全面的实验，包括：
    *   **主要性能对比**：在7个QA基准上与超过10种基线方法比较。
    *   **分析性实验**：深入分析了搜索频率、搜索质量、知识精炼的有效性。
    *   **消融实验**：验证了检索特定奖励和精炼步骤两大关键组件的作用；还比较了不同的检索奖励设计。
    *   **鲁棒性实验**：测试了不同检索深度（k=1到7）和不同模型规模（3B和7B）下的性能。
    *   **统计显著性检验**：对主要结果进行了T检验。
*   **充分性与公平性**：实验设计充分，从多个维度验证了方法的有效性。对比的基线方法均为近期业界主流，且部分基线结果直接引用自同类工作（Search-R1），实验设置保持一致，确保了对比的公平性。消融实验清晰地揭示了各组件的贡献。

### 6. 论文的主要结论与发现

1.  **显著性能提升**：AutoRefine在所有基准上均显著优于现有方法，尤其是在复杂的**多跳推理任务**上提升更为明显（如2Wiki上相对提升21%，Musique上提升26.7%）。
2.  **自适应的搜索策略**：模型学会根据问题复杂度动态调整搜索次数，对多跳问题执行更多搜索，对单跳问题则减少搜索，并能生成更高质量的搜索查询。
3.  **高效的知识精炼**：知识精炼步骤成功地在**大幅缩短上下文长度**（约4倍）的同时，有效保留了回答相关的关键信息，直接提升了最终答案的质量。
4.  **较强的鲁棒性**：AutoRefine在不同检索深度下均表现出一致的性能改进，展示了其稳健的文档降噪能力。

### 7. 优点

*   **范式创新**：提出的“搜索-与-精炼-同时-思考”范式简洁而有效，为解决检索增强推理中的“噪声”和“分心”问题提供了新思路。
*   **奖励设计巧妙**：引入检索特定奖励，并使用非线性的方式与结果奖励结合，显式地引导和激励模型在中间步骤进行高质量的信息提取。
*   **实验分析透彻**：不仅报告了最终准确率，还对模型的搜索行为和质量、精炼步骤的有效性进行了深入量化分析，使方法的可解释性更强。

### 8. 不足与局限

*   **评估指标单一**：主要依赖精确匹配（Exact Match）等基于字符串匹配的指标，可能对语义正确但用词不同的长文本或开放式回答评估不公。
*   **静态语料库限制**：实验基于固定的Wikipedia快照，无法处理实时、动态变化的信息，限制了其在现实世界中的应用潜力。
*   **复杂答案的奖励泛化性**：默认的检索奖励（检查是否包含全部答案实体）在处理多词组合的“复杂答案”时表现欠佳，需要更细粒度的奖励设计，说明当前奖励方案有一定局限性。

（完）
