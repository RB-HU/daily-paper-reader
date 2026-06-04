---
title: Adaptive LoRA Experts Allocation and Selection for Federated Fine-Tuning
title_zh: 联邦微调中自适应 LoRA 专家分配与选择
authors: "Lei Wang, Jieming Bian, Letian Zhang, Jie Xu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=es4TTVGJ9x"
tags: ["query:fla"]
score: 7.0
evidence: 联邦学习场景下自适应 LoRA 专家的 LLM 微调，适用于异构领域数据
tldr: 针对跨组织领域数据分布式及异构性带来的模型微调挑战，本文提出自适应 LoRA 专家分配与选择方法，使联邦学习中的每个客户端能高效微调大语言模型。实验证明该方法在多种异构域上显著提升了微调效果，为金融等数据敏感行业的模型后训练提供了隐私友好的可行方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 677, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 390, \"height\": 241, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 394, \"height\": 238, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1233, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 692, \"height\": 524, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1347, \"height\": 706, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1310, \"height\": 506, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 387, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 452, \"height\": 342, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 456, \"height\": 344, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 510, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-es4ttvgj9x/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 628, \"height\": 464, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1381, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 734, \"height\": 186, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 881, \"height\": 246, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 161, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1163, \"height\": 159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1381, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1381, \"height\": 302, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1451, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 708, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1443, \"height\": 116, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 693, \"height\": 88, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 706, \"height\": 127, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 642, \"height\": 158, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1160, \"height\": 120, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-es4ttvgj9x/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1444, \"height\": 229, \"label\": \"Table\"}]"
motivation: 解决跨机构领域数据分布导致的 LoRA 单一模块难以适应异构性、联邦学习计算约束下大模型微调效率低的问题。
method: 设计自适应 LoRA 专家数量动态分配和基于数据亲和度的客户端选择策略。
result: 在多域异构数据集上，所提方法性能优于统一 LoRA 和固定专家分配基线。
conclusion: 该工作为分布式金融数据上的大模型微调提供了参数高效且隐私保护的技术路径。
---

## Abstract
Large Language Models (LLMs) have demonstrated impressive capabilities across various tasks, but fine-tuning them for domain-specific applications often requires substantial domain-specific data that may be distributed across multiple organizations. Federated Learning (FL) offers a privacy-preserving solution, but faces challenges with computational constraints when applied to LLMs. Low-Rank Adaptation (LoRA) has emerged as a parameter-efficient fine-tuning approach, though a single LoRA module often struggles with heterogeneous data across diverse domains. This paper addresses two critical challenges in federated LoRA fine-tuning: 1. determining the optimal number and allocation of LoRA experts across heterogeneous clients, and 2. enabling clients to selectively utilize these experts based on their specific data characteristics. We propose FedLEASE (Federated adaptive LoRA Expert Allocation and SElection), a novel framework that adaptively clusters clients based on representation similarity to allocate and train domain-specific LoRA experts. It also introduces an adaptive top-$M$ Mixture-of-Experts mechanism that allows each client to select the optimal number of utilized experts. Our extensive experiments on diverse benchmark datasets demonstrate that FedLEASE significantly outperforms existing federated fine-tuning approaches in heterogeneous client settings while maintaining communication efficiency.

---

## 论文详细总结（自动生成）

好的，根据您提供的论文内容，以下是对该论文的结构化深度总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：大语言模型（LLM）在特定领域应用前通常需要微调，但高质量的领域数据往往分散在不同组织，因隐私或法规限制无法集中。联邦学习（FL）提供了一个隐私保护的协同训练方案，但全量微调LLM对计算和通信资源有限的客户端构成巨大挑战。参数高效微调（PEFT）方法中的低秩适应（LoRA）成为一种高效方案。
*   **核心问题**：在联邦学习环境下，客户端的异构数据（如不同任务或领域）给LoRA微调带来了两个关键挑战：
    1.  **专家分配问题**：如何确定最优数量的LoRA专家，并将异构的客户端分配到不同的专家进行训练？单一的全局LoRA难以处理多领域数据，而为每个客户端分配一个独立专家则会导致冗余和效率低下。
    2.  **专家选择问题**：客户端如何根据自身数据特点，动态地选择利用哪些（以及多少个）专家？固定的Top-k选择策略被证明是次优的，因为不同客户端的“最优”专家数量各不相同。
*   **整体含义**：该论文旨在提出一种在联邦学习框架下，能够自适应地分配和选择LoRA专家的方法，以高效且有效应对客户端数据异构性的挑战，提升整体微调性能。

### 2. 论文提出的方法论：FedLEASE

论文提出了名为**FedLEASE**（Federated adaptive LoRA Expert Allocation and SElection）的框架，其核心思想是通过初始化阶段的相似性分析进行智能客户端聚类，并基于此分配专家，然后在主训练阶段让每个客户端自适应地选择和使用专家。

*   **核心思想**：
    *   **自适应专家分配**：基于客户端在特定LoRA矩阵上的表征相似性，将具有相似数据特性的客户端归为一组，共同训练一个共享的LoRA专家。
    *   **自适应专家选择（Adaptive Top-M）**：设计一个创新的路由机制，允许每个客户端根据每个输入样本的特性，动态决定激活的专家数量（从1个到全部M个），而不是全局固定一个top-k值。

*   **关键技术细节**：
    *   **相似性度量与聚类（解决专家分配问题）**：
        1.  **初始化阶段**：所有客户端利用本地数据进行短暂的独立训练，得到各自的LoRA参数（低秩矩阵`A`和`B`）。
        2.  **相似性分析**：关键发现是，LoRA的`B`矩阵能有效反映任务/领域的特异性。因此，服务器计算所有客户端`B`矩阵（逐层展平）两两之间的**余弦相似度**，并据此构建距离矩阵`d(i, j)`。
        3.  **确定最优专家数`M`**：服务器遍历所有可能的聚类数量`k`，使用**凝聚层次聚类**算法对客户端进行聚类，并采用**轮廓系数（Silhouette Coefficient）** 评估聚类质量，得分最高的`k`即为最优专家数`M`。
        4.  **初始化专家**：确定`M`个聚类后，将每个聚类内客户端的LoRA模块（`A`和`B`）进行平均，作为相应专家的初始参数。
    *   **自适应Top-M路由机制（解决专家选择问题）**：
        1.  **路由器设计**：区别于常规MoE路由器（输出维度`M × d`），该方法的路由器输出空间扩展至 `(2M - 1) × d`。其中，前`M`个输出连接到客户端**被分配的专家**，后`M-1`个输出连接到**其他专家**。
        2.  **动态专家选择**：对于每个输入，路由器计算`(2M - 1)`个得分，并执行Top-M选择。
            *   **案例 (M=3)**：客户端被分配专家`E1`。路由器输出5个分数，前三名对应`E1`，后两名对应`E2`和`E3`。
            *   若Top-3分数均为`E1`的得分，则仅激活专家`E1`（1个专家）。
            *   若Top-3分数包含2个`E1`得分和1个`E2`得分，则激活`{E1, E2}`（2个专家）。
            *   以此类推，该机制保证了被分配专家`E1`总是被选中，同时能灵活地从0个到全部其他专家中自适应组合，实现了专家数量的动态选择。

*   **算法流程**：`FedLEASE`算法主要分为两个阶段：
    1.  **初始化阶段**：服务器下发初始模型，客户端进行`E`轮本地训练后上传`A`、`B`矩阵；服务器计算`B`矩阵相似度，通过聚类和轮廓系数确定最优`M`个专家簇，并聚合簇内参数形成`M`个初始专家，分发回所有客户端。
    2.  **迭代训练阶段**：在每一轮通信中，客户端`i`（属于簇`j`）接收所有`M`个专家参数，但只更新其**被分配的专家`j`** 和其**自适应的Top-M路由器**；本地训练完成后，只上传更新后的专家`j`参数和路由器参数；服务器对各簇内的专家和路由器进行平均聚合，然后广播至全客户端进行下一轮训练。

### 3. 实验设计

*   **数据集/场景**：
    *   **自然语言理解（NLU）任务**：采用RoBERTa-Large模型，在**GLUE基准**的四个数据集（SST-2, QNLI, MRPC, QQP）上进行测试。构建了一个高度异构的场景，共16个客户端，每个数据集随机分配给4个客户端。
    *   **自然语言生成（NLG）任务**：采用LLaMA-2-7B模型，在**FLAN数据集**的四个子集（Text Editing, Struct to Text, Sentiment Analysis, Commonsense Reasoning）上测试。共8个客户端，每个子集分配给2个客户端。
*   **基准方法（Baselines）**：
    *   **FedIT**：经典的联邦平均与LoRA结合。
    *   **FFA-LoRA**：在隐私保护联邦学习中改进LoRA的方法。
    *   **FedDPA**：结合全局和局部LoRA模块的个性化方法。
    *   **FedSA**：处理数据异构场景的LoRA选择性聚合方法。
    *   **IFCA + LoRA**：一种聚类的联邦学习方法，并适配了LoRA微调。

### 4. 资源与算力

*   论文的 **“Computational Overhead” (第 4 节 D部分)** 明确提到了评估计算时间的硬件配置：
    *   **GPU**: NVIDIA B200 (用于客户端本地训练时间测量)
    *   **CPU**: Intel Xeon Platinum 8570 (用于服务器端聚类时间测量)
*   提供的具体时间数据（如聚类用时3.11秒，单轮单时期本地训练时间约3.75秒等）也间接展示了硬件规格。论文主要关注通信效率和算法性能，并未详细说明使用的GPU卡数或总训练时长。

### 5. 实验数量与充分性

论文通过大量实验验证了其有效性、鲁棒性和各组件的作用，具体包括：

*   **主要性能对比实验**：
    1.  NLU任务（GLUE，1个场景，6种方法对比）
    2.  NLG任务（FLAN，1个场景，6种方法对比）
*   **消融实验**：针对核心组件设计了多组实验。
    3.  **专家分配策略消融**：对比了“无聚类”、“单一专家”、“为所有客户端分配独立专家”等变体。
    4.  **自适应Top-M机制消融**：将所提方法与固定的Top-1、Top-2、Top-3、Top-4策略进行对比，并可视化了专家选择模式。
    5.  **路由器聚合策略消融**：对比了簇内平均路由器和各客户端独立路由器的效果。
*   **敏感性分析**：验证了方法的鲁棒性。
    6.  不同**本地训练轮次**（E）的影响。
    7.  不同**LoRA秩**（r）的影响。
    8.  不同**客户端数量**（N）的影响（可扩展性）。
    9.  不同**数据异构性程度**（Least, Mildly, Most）的影响。
    10. **任务与标签双重异构**（Non-IID）场景下的性能。
    11. 专家上限数量`Mmax`的影响。
    12. 不同**聚类算法**（层次聚类 vs 谱聚类）的通用性。
    13. **纯标签异构**（Dirichlet分布）场景下的性能。
*   **充分性与客观性**：实验设计**非常充分且客观**。它不仅涵盖了分类和生成两大主流NLP任务，与多个强基线方法进行公平对比，还通过详尽的消融实验和敏感性分析，清晰论证了所提各个组件的贡献与必要性。实验设置（如保持可训练参数量可比、使用相同基座模型和优化器）确保了公平性。

### 6. 主要结论与发现

*   **性能显著提升**：与现有最优的联邦微调方法相比，FedLEASE在所有基准测试（NLU和NLG）上均取得了**一致且显著的性能提升**（例如在GLUE上平均提升3.16%），同时保持了与基线方法相当的通信效率。
*   **核心发现验证**：
    1.  LoRA的`B`矩阵是**有效的任务相似性指标**，可成功用于客户端聚类。
    2.  基于聚类的**自适应专家分配**优于单一全局专家或无协作的独立专家。
    3.  **自适应Top-M选择机制**优于任何固定的Top-k策略，因为它允许不同层、不同客户端根据数据复杂性动态调整利用的专家数量。
    4.  该方法对数据异构程度、客户端数量、模型秩和聚类算法等变化具有**鲁棒性**。

### 7. 优点

*   **问题洞察深刻**：准确地抓住了联邦异构微调中专家“分配”和“选择”两个核心矛盾，且有坚实的实证观察支撑。
*   **方法设计精巧**：
    *   利用“免费的”初始化阶段和轻量级`B`矩阵进行聚类，计算开销小。
    *   自适应Top-M路由设计巧妙，通过扩展输出维度，既保证了自身专家必然被更新，又实现了专家数量的动态选择，避免了手动调参。
*   **实验验证全面**：覆盖多任务、多模态（理解/生成），与多个强基线对比，并进行了系统性的组件消融和鲁棒性分析，结论可信度高。
*   **兼顾效率与性能**：在不大幅增加可训练参数和通信成本的前提下，实现了性能的飞跃。

### 8. 不足与局限

*   **静态分组限制**：客户端分组在初始化后固定，未考虑实际应用中客户端数据分布可能随时间变化（如概念漂移）的场景。论文已将此列为未来的研究方向。
*   **初始化阶段的额外开销**：虽然聚类很快，但仍需一轮初始化训练，增加了流程的复杂度和时间。
*   **理想化假设**：收敛性分析建立在强凸性、平滑性和聚类稳定性等假设之上，这些在深度学习中不一定严格成立。
*   **应用场景局限**：该方法主要针对任务/领域异构性设计，虽然在纯标签异构实验中表现良好，但其核心优势仍在于应对有明确领域差异的场景。

（完）
