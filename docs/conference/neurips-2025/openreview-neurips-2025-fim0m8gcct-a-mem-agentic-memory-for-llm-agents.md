---
title: "A-Mem: Agentic Memory for LLM Agents"
title_zh: "A-Mem: 面向LLM代理的主动记忆系统"
authors: "Wujiang Xu, Zujie Liang, Kai Mei, Hang Gao, Juntao Tan, Yongfeng Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=FiM0M8gcct"
tags: ["query:fla"]
score: 4.0
evidence: 面向任务型代理的主动记忆系统
tldr: 现有LLM代理记忆系统缺乏动态组织和适应性，本文提出基于Zettelkasten方法的主动记忆系统，通过动态索引和链接构建互联知识网络。新记忆添加时自动关联，增强了代理在复杂任务中的经验利用和泛化能力，实验表明该系统提高了LLM代理在多任务上的性能。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-fim0m8gcct/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1292, \"height\": 228, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fim0m8gcct/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1432, \"height\": 684, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fim0m8gcct/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1226, \"height\": 608, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fim0m8gcct/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1045, \"height\": 490, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fim0m8gcct/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1290, \"height\": 1357, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1455, \"height\": 899, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1100, \"height\": 153, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1319, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1026, \"height\": 484, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1454, \"height\": 968, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 537, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1454, \"height\": 1029, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fim0m8gcct/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1106, \"height\": 284, \"label\": \"Table\"}]"
motivation: LLM代理需要记忆系统利用历史经验，但现有系统组织静态、适应性差。
method: 借鉴Zettelkasten方法，设计动态索引和链接机制，使记忆系统能够主动组织知识。
result: 提高了LLM代理在多任务上的适应性和性能。
conclusion: 主动记忆增强了LLM代理的任务处理能力，对任务型代理有价值。
---

## Abstract
While large language model (LLM) agents can effectively use external tools for complex real-world tasks, they require memory systems to leverage historical experiences. Current memory systems enable basic storage and retrieval but lack sophisticated memory organization, despite recent attempts to incorporate graph databases. Moreover, these systems' fixed operations and structures limit their adaptability across diverse tasks. To address this limitation, this paper proposes a novel agentic memory system for LLM agents that can dynamically organize memories in an agentic way. Following the basic principles of the Zettelkasten method, we designed our memory system to create interconnected knowledge networks through dynamic indexing and linking. When a new memory is added, we generate a comprehensive note containing multiple structured attributes, including contextual descriptions, keywords, and tags. The system then analyzes historical memories to identify relevant connections, establishing links where meaningful similarities exist. Additionally, this process enables memory evolution -- as new memories are integrated, they can trigger updates to the contextual representations and attributes of existing historical memories, allowing the memory network to continuously refine its understanding. Our approach combines the structured organization principles of Zettelkasten with the flexibility of agent-driven decision making, allowing for more adaptive and context-aware memory management.
Empirical experiments on six foundation models show superior improvement against existing SOTA baselines. The code is available at \url{https://anonymous.4open.science/r/AgenticMemory-76B4}.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
*   **研究动机**：大语言模型（LLM）代理（Agent）在与外部环境长期交互时，亟需有效的记忆系统来利用历史经验。然而，现有记忆系统（如MemGPT、MemoryBank等）大多只提供基础的存储与检索功能，操作和结构固定，难以适应多样化的任务。
*   **核心问题**：如何设计一个**灵活、通用、可自主组织的记忆系统**，使LLM代理无需预定义的操作流程，即可动态地组织、演化并利用记忆，从而提升在复杂、开放式任务中的长期交互能力。

### 2. 论文提出的方法论：A-Mem
论文借鉴**卡片盒笔记法（Zettelkasten）** 的原则，提出了一种名为 **A-Mem 的主动式记忆系统（Agentic Memory）**，其核心思想是通过动态索引和链接机制，将记忆构建成互联的知识网络。关键技术环节包括：
*   **笔记构建**：当产生新交互时，利用LLM为原始内容自动生成结构化的多属性笔记 `mi`，包含**上下文描述（Xi）、关键词（Ki）和分类标签（Gi）**。之后，通过文本编码器将笔记的所有文本属性融合为一个稠密向量 `ei`，用于后续检索与链接。
*   **链接生成**：新笔记加入系统后，先基于向量相似度检索出最相关的 `k` 个历史记忆（候选邻居）。随后，再次调用LLM分析新笔记与这些候选记忆间的语义关系，建立有意义的链接，形成记忆网络。
*   **记忆演化**：新记忆加入并建立链接后，系统会触发对**检索到的邻居记忆的更新**。LLM会基于新记忆的上下文信息，对邻居记忆的关键词、标签和上下文描述进行迭代式修订，使整个记忆网络能够持续自我提炼和深化理解。
*   **记忆检索**：在处理新查询时，系统将查询文本向量化，并基于余弦相似度检索出最相关的 `k` 个记忆，为LLM代理提供丰富的历史上下文。

### 3. 实验设计
*   **数据集与场景**：
    *   **LoCoMo 数据集**：一个长周期对话数据集，包含平均9000 tokens、长达35轮的对话，用于评估模型处理长程依赖和维持一致性的能力。该数据集包含单跳、多跳、时间推理、开放域和对抗性五大类问题。
    *   **DialSim 数据集**：一个衍生自多轮多人对话的问答数据集，用于评估记忆系统在长期多方对话中的有效性。
*   **对比方法（Baselines）**：
    *   LoCoMo：直接将完整对话历史作为提示输入LLM。
    *   ReadAgent：一种模拟人类阅读的分页、摘要和查找记忆方法。
    *   MemoryBank：结合艾宾浩斯遗忘曲线的动态记忆管理系统。
    *   MemGPT：受操作系统内存层级启发，管理主存和外存上下文的记忆系统。
*   **评估指标**：
    *   **主要指标**：F1 分数（平衡准确率与召回率）和 BLEU-1（评估用词精确度）。
    *   **辅助指标**：ROUGE-L、ROUGE-2、METEOR 和 SBERT 相似度。

### 4. 资源与算力
论文未明确提及训练过程中的GPU型号、数量或训练时长。因为该系统是基于调用LLM API或本地推理的框架，不涉及大规模模型训练。
*   **本地部署**：Qwen-1.5B/3B 和 Llama 3.2 1B/3B 模型通过 **Ollama** 进行本地实例化，并使用 **LiteLLM** 管理结构化输出。GPT模型则使用官方API。
*   **性能指标**：实验报告了计算成本和时间。例如，每个记忆操作约需 **1,200 个 tokens**，处理时间在 **5.4秒（GPT-4o-mini）** 到 **1.1秒（本地Llama 3.2 1B on single GPU）** 之间。

### 5. 实验数量与充分性
实验设计非常全面、客观且公平，主要包括：
*   **多模型验证**：在 **6款主流基础模型**（GPT-4o-mini, GPT-4o, Qwen2.5-1.5B/3B, Llama 3.2-1B/3B）上进行了对比实验，附录中还补充了 DeepSeek-R1-32B 和 Claude 系列模型。
*   **多维度评估**：覆盖了 **5大类问答任务** 和 **4种以上评估指标**，全面衡量记忆系统的性能。
*   **消融实验**：系统性地移除了“链接生成（LG）”和“记忆演化（ME）”模块，验证了各组件的有效性。
*   **超参数与扩展性分析**：分析了记忆检索参数 `k` 值对性能的影响，并对比了不同记忆规模（从1千到100万条）下的存储和检索效率。
*   **可视化分析**：通过 **t-SNE** 可视化记忆嵌入分布，直观展示了A-Mem能够产生更结构化、聚类的记忆组织。

### 6. 论文的主要结论与发现
*   **性能优越**：A-Mem 在所有基础模型中均取得了优于现有SOTA方法的性能，尤其在需要复杂推理的**多跳问题**上，性能提升达到**两倍以上**。
*   **成本高效**：通过选择性的 top-k 检索机制，A-Mem 将单次操作的 token 消耗降低了 **85-93%**，大幅节约了商业API调用成本。
*   **高度可扩展**：即使记忆库规模增长到100万条，其检索时间依然能保持在微秒级别，展现出优秀的可扩展性。
*   **记忆组织结构化**：消融实验和可视化证实，链接生成与记忆演化模块是A-Mem形成高度组织化、聚类清晰的知识网络的核心驱动力，这直接促进了其在复杂推理上的能力。

### 7. 优点
*   **方法新颖**：创新性地将卡片盒笔记法引入LLM代理的记忆管理，实现了动态、自治的记忆生成、链接与演化，区别于传统僵化的记忆存储模式。
*   **设计精良**：“笔记构建-链接生成-记忆演化-检索”的流水线设计清晰，各环节（如LLM驱动的演化）相辅相成，并能与高性能向量检索相结合。
*   **评估扎实**：在多个数据集、多种类型任务、多款不同规格的LLM上进行了全面比较，并通过消融、超参数、扩展性和可视化等多维度分析，结论极具说服力。
*   **实用性强**：显著降低了API调用成本和处理延迟，且开源了代码，易于集成到实际应用中，兼顾了高性能与低成本。

### 8. 不足与局限
*   **基础模型依赖性**：记忆组织（如上下文描述、链接的建立）的质量会受底层LLM自身能力（可能存在的偏见或幻觉）的影响。
*   **模态限制**：当前的系统设计与实验仅针对文本交互，未探索如何扩展到图像、音频等多模态信息，这会限制其在更丰富场景下的应用。
*   **社会影响阐述不足**：论文仅提供记忆系统本身，但未讨论当其被用于不同目的的LLM代理时，可能产生的潜在正面或负面社会影响。

（完）
