---
title: "LLM Alignment as Retriever Optimization: An Information Retrieval Perspective"
title_zh: 作为检索器优化的LLM对齐：一种信息检索视角
authors: "Bowen Jin, Jinsung Yoon, Zhen Qin, Ziqi Wang, Wei Xiong, Yu Meng, Jiawei Han, Sercan O Arik"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=K1LcmG2jQN"
tags: ["query:fla"]
score: 7.0
evidence: 使用信息检索原理进行LLM对齐的新型直接优化方法
tldr: 现有RL对齐方法复杂，直接优化方法更简单。本文提出基于信息检索的LLM对齐框架，将LLM生成映射为检索问题，设计直接优化损失函数，避免使用强化学习。该方法在计算效率和对齐质量之间取得平衡，为LLM对齐提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1603, \"height\": 509, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 828, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 843, \"height\": 346, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1711, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1251, \"height\": 1067, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-k1lcmg2jqn/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 826, \"height\": 612, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1709, \"height\": 412, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1517, \"height\": 927, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 837, \"height\": 461, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 771, \"height\": 284, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1518, \"height\": 293, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 829, \"height\": 404, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-k1lcmg2jqn/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1510, \"height\": 568, \"label\": \"Table\"}]"
motivation: 简化LLM对齐方法，避免复杂的强化学习。
method: 提出基于检索优化视角的直接对齐框架，设计IR风格损失函数。
result: 实现了高效的对齐，计算开销低于RL方法。
conclusion: IR视角为LLM对齐提供了可解释且高效的替代方案。
---

## Abstract
Large Language Models (LLMs) have revolutionized artificial intelligence with capabilities in reasoning, coding, and communication, driving innovation across industries. Their true potential depends on effective alignment to ensure correct, trustworthy and ethical behavior, addressing challenges like misinformation, hallucinations, bias and misuse. While existing Reinforcement Learning (RL)-based alignment methods are notoriously complex, direct optimization approaches offer a simpler alternative.
In this work, we introduce a novel direct optimization approach for LLM alignment by drawing on established Information Retrieval (IR) principles. We present a systematic framework that bridges LLM alignment and IR methodologies, mapping LLM generation and reward models to IR's retriever-reranker paradigm. Building on this foundation, we propose LLM Alignment as Retriever Preference Optimization (LarPO), a new alignment method that enhances overall alignment quality. Extensive experiments validate LarPO's effectiveness with 38.9 % and 13.7 % averaged improvement on AlpacaEval2 and MixEval-Hard respectively. Our work opens new avenues for advancing LLM alignment by integrating IR foundations, offering a promising direction for future research.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

*   **核心问题**：大型语言模型（LLM）的真正潜力取决于有效的对齐，以确保其行为正确、可信且合乎伦理。现有的基于强化学习（RL）的对齐方法（如PPO）过程复杂、涉及多阶段训练且难以优化。直接偏好优化方法（如DPO）虽有所简化，但仍有提升空间。
*   **研究动机**：信息检索（IR）领域成熟的“检索器-重排序器”范式与LLM对齐中的“LLM生成-奖励模型评分”流程存在显著的相似性。然而，目前缺乏一个系统性的框架来连接这两个领域，利用IR的有效技术来改进LLM对齐。
*   **整体含义**：本文旨在系统性地桥接LLM对齐与IR方法论，提出一种称之为LarPO的新型LLM对齐方法。通过将LLM对齐视为检索器优化问题，引入IR视角，旨在开发出易于实现且对齐质量更高的方法。

### 2. 论文提出的方法论

*   **核心思想**：将LLM对齐过程完全映射到IR的检索器-重排序器框架中。
    *   **LLM作为检索器**：LLM根据提示生成响应的过程，被类比为检索器根据查询从庞大语料库中寻找相关段落的过程（图1-c）。
    *   **奖励模型作为重排序器**：用于评估和筛选LLM响应的奖励模型，其机制类似于IR中的重排序器，对检索器（LLM）生成的结果进行精细化的排序。
    *   **LLM调优作为检索器优化**：
        *   **监督微调**：被解释为一种直接的检索器优化，目标和检索器的InfoNCE损失类似。
        *   **偏好优化**：被视为一种从重排序器（奖励模型）到检索器（LLM）的知识蒸馏过程。
*   **关键技术细节（LarPO算法）**：受迭代式检索器优化（图3-a）的启发，LarPO方法围绕三个关键IR原则设计了迭代式的LLM对齐流程（图3-b，算法1）。
    *   **检索器优化目标**：根据对奖励模型r(x,y)的不同排序假设，衍生出多种直接优化损失函数（表1），取代复杂的RL过程：
        *   **对比式排序(Lcon)**：基于softmax假设，一次处理一个正样本和多个负样本。
        *   **LambdaRank排序(Llamb)**：基于成对的列表级排序假设，优化列表中所有样本对的相对顺序。
        *   **ListMLE排序(Llmle)**：基于全局的列表级排序假设，最大化整个列表正确排序的似然。
    *   **硬负样本**：在迭代训练中，使用当前LLM以较低温度生成的不正确但置信度较高的响应作为“硬负样本”。研究表明，增加负样本的“难度”能有效提升最终模型的性能（图4-a）。
    *   **候选列表**：在每轮迭代中为每个提示生成多个候选响应。通过实验发现，增加候选列表的规模可以提升性能（图4-c），并且保留并使用前几轮迭代生成的响应有助于模型更好地学习偏好信号（表4）。

### 3. 实验设计

*   **核心对比数据集与Benchmark**：
    *   **AlpacaEval 2**：包含805个多样化的指令任务，用于评估模型的对话能力，报告原始胜率和长度控制胜率。
    *   **MixEval**：包含4000个通用问题和1000个高难度问题，用于综合评估模型的指令遵循和问题解决能力。
    *   **GSM8K & MATH**：用于评估数学推理能力的特定任务数据集。
*   **基线方法**：与多种主流的离线和在线偏好优化方法进行了基准测试。
    *   **离线方法**：RRHF, SLiC-HF, DPO, IPO, CPO, KTO, RDPO, SimPO。
    *   **在线方法**：迭代式DPO。
*   **实验场景**：
    *   所有对比实验均基于 **Ultrafeedback** 数据集进行训练，以保证公平性。
    *   主要消融实验和分析在 **Gemma2-2b-it** 和 **Mistral-7b-it** 两个基础模型上进行。
    *   奖励模型使用了 **LLM-Blender**（用于与基线公平对比）和更强的 **FsfairX** 两种。

### 4. 资源与算力

*   论文正文和附录中**未明确提及**训练所使用的GPU型号、数量以及具体的总训练时长等算力资源信息。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了大量的实验，覆盖了主要结果、方法验证和深入分析。
    *   **主要结果**：在两个核心benchmark（AlpacaEval 2, MixEval）上，用两个基础模型对10种以上的基线方法进行了对比。
    *   **消融与分析**：我们覆盖了一个主要框架，包括多个主要实验，后续系统地分析了三个核心组件（优化目标、硬负样本、候选列表）的影响。硬负样本研究包含不同的负样本难度设置和温度参数下的性能变化，等等。
*   **实验充分性**：实验设计较为全面和充分。
    *   **客观公平**：所有方法均在相同的Ultrafeedback数据集上进行训练，与基线对比时使用了相同的奖励模型，确保了比较的公平性。
    *   **维度丰富**：不仅展示了整体性能提升，还从IR的视角深入剖析了各种设计决策的影响，提供了经验性证据。

### 6. 论文的主要结论与发现

*   **LarPO方法有效性**：提出的LarPO方法在多个基准测试上一致地优于现有的多种基线方法，验证了从IR视角进行LLM对齐的有效性。
*   **优化目标的影响**：对比实验表明，能够整合更多偏好信息的列表级优化目标（如LambdaRank, ListMLE）通常优于对比式和成对（DPO）目标。
*   **硬负样本的关键作用**：与IR领域的发现一致，使用“更难”的负样本（如模型以较低温度生成的错误响应）进行训练，可以显著提升LLM对齐的性能。
*   **候选列表构建的重要性**：增加每轮迭代中候选响应的数量能提升模型性能，尽管收益会递减。同时，在训练中加入历史迭代的响应有助于模型捕捉更全面的偏好信号。
*   **IR视角的评估**：使用IR指标（如Recall@N）评估LLM，揭示了模型在贪婪解码下可能低估其潜力，印证了推理时扩展（如Best-of-N）的重要性。

### 7. 优点

*   **视角新颖**：首次系统性地将LLM对齐与经典IR理论桥接起来，为理解对齐过程提供了新的、可解释的视角。
*   **方法简洁有效**：LarPO基于简单的排序假设，提供了一种无需复杂RL的直接优化方法，并在效果上实现了显著提升。
*   **洞见深刻**：从IR中引入的硬负样本和候选列表构建等概念被证明对LLM对齐有重要价值，为后续研究提供了明确的方向。
*   **实验扎实**：实验设计全面、系统，涵盖了多个模型、数据集和消融分析，对提出的理论框架提供了有力的实证支持。

### 8. 不足与局限

*   **算力成本未明确**：论文未报告具体的训练算力消耗，这使得难以从资源效率的角度精确评估其相较于RL方法的优势。
*   **模型规模和多样性有限**：实验主要在7B和2B参数规模的模型上进行，其在更大规模模型（如70B+）上的有效性还有待验证。
*   **奖励模型的依赖性**：LarPO的性能强弱依赖于奖励模型的质量，实验中使用了GPT-4级别的评估器或特定开源奖励模型，其对不同偏好信号的泛化能力未充分探讨。
*   **领域覆盖风险**：实验主要集中在通用指令遵循和数学推理任务，其在更广泛的下游任务（如代码生成、多语言、安全对齐等）上的表现仍需进一步研究。此外，如同所有偏好优化方法，如果奖励模型存在偏差，LarPO可能会放大这些偏差。

（完）
