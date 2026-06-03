---
title: Robust Federated Finetuning of LLMs via Alternating Optimization of LoRA
title_zh: 通过LoRA交替优化的鲁棒联邦微调大语言模型
authors: "Shuangyi Chen, Yuanxin Guo, Yue Ju, Hardik Dalal, Ashish J Khisti"
date: 2025-01-23
pdf: "https://openreview.net/pdf?id=u4mobiHTJl"
tags: ["query:fla"]
score: 6.0
evidence: 通过LoRA进行联邦微调，是一种可用于金融智能体的后训练技术
tldr: 针对联邦学习场景下大模型参数高效微调的需求，本文提出RoLoRA框架，采用交替优化学习LoRA的下投影和上投影矩阵，提升模型表达能力和鲁棒性。理论分析与实验证明，该方法优于传统联邦微调方法，能够有效地在分散数据上训练LLM。该技术可作为金融智能体在隐私保护下的后训练方案，支持分布式场景下的模型适配。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1359, \"height\": 280, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 710, \"height\": 288, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 741, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1753, \"height\": 312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 648, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1750, \"height\": 318, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1755, \"height\": 321, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-u4mobihtjl/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1750, \"height\": 316, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1321, \"height\": 493, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 818, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1101, \"height\": 754, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 909, \"height\": 205, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1450, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1551, \"height\": 730, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1450, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1162, \"height\": 265, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1813, \"height\": 151, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1700, \"height\": 207, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1796, \"height\": 144, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-u4mobihtjl/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 832, \"height\": 382, \"label\": \"Table\"}]"
motivation: 现有联邦微调方法存在更新质量下降和模型表达能力受限问题，需要更鲁棒的参数高效微调方案。
method: 提出RoLoRA，通过交替优化学习LoRA的上投影和下投影矩阵，增强联邦微调效果。
result: 理论分析和实验表明，RoLoRA在多个数据集上性能优于现有联邦LoRA方法，更具鲁棒性。
conclusion: RoLoRA为联邦场景下的LLM后训练提供了有效途径，适用于金融领域的分布式智能体训练。
---

## Abstract
Parameter-Efficient Fine-Tuning (PEFT) methods like Low-Rank Adaptation (LoRA) optimize federated training by reducing computational and communication costs.  We propose RoLoRA, a federated framework using alternating optimization to fine-tune LoRA adapters. Our approach emphasizes the importance of learning up and down projection matrices to enhance expressiveness and robustness. We use both theoretical analysis and extensive experiments to demonstrate the advantages of RoLoRA over prior approaches that either generate imperfect model updates or limit expressiveness of the model. We present theoretical analysis on a simplified linear model to demonstrate the importance of learning both down-projection and up-projection matrices in LoRA. 
We provide extensive experimental evaluations on a toy neural network on MNIST as well as large language models including RoBERTa-Large, Llama-2-7B on diverse tasks to demonstrate the advantages of RoLoRA over other methods.

---

## 论文详细总结（自动生成）

好的，遵照您的指示，以下是该论文的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：大语言模型（LLM）的成功依赖于大规模和多样化的数据。联邦学习（Federated Learning, FL）为在不共享原始数据的情况下，利用多个数据源协同训练模型提供了一种有前景的解决方案。参数高效微调（PEFT）方法，特别是低秩适应（LoRA），通过仅更新少量参数，大幅降低了联邦学习中的计算和通信开销。
*   **核心问题**：在联邦学习场景下直接应用标准的联邦平均（FedAvg）到LoRA模块（即分别聚合下投影矩阵A和上投影矩阵B）会导致**模型更新不精确**。因为模型的更新应为低秩矩阵的乘积，分割聚合会造成信息误差。现有的解决方案，如冻结A（FFA-LoRA）或在聚合前进行矩阵乘法和奇异值分解，要么**限制了模型的表达能力**，要么**引入了显著的计算开销**。
*   **整体含义**：本文旨在提出一种新的联邦微调框架，既能解决模型更新的不精确性问题，又能保持LoRA的全部表达能力，从而在分散数据上实现更鲁棒、更高效的大模型微调。

### 2. 论文提出的方法论

*   **核心思想**：提出 **RoLoRA**（Robust Federated Finetuning of LLMs via **A**lternating **O**ptimization of **Lo**RA）框架，核心在于**交替优化**LoRA的两个组成部分。
    *   已有研究认为，学习下投影矩阵A相当于学习一个共享的底层表示，对模型表达能力至关重要。
    *   受多任务线性表示学习（MLRL）启发，RoLoRA通过交替更新A和B来解决联邦聚合中的不精确问题，同时保证模型性能。
*   **关键技术与算法流程**：
    *   **交替更新策略**：训练过程在“奇数通信轮”和“偶数通信轮”之间交替。
        1.  **奇数轮 (更新B，聚合B)**：所有客户端冻结当前的全局下投影矩阵 `A_t`，只在其本地数据上训练并更新上投影矩阵 `B`。服务器收集所有客户端的 `B` 并进行平均聚合，得到新的全局 `B_{t+1}` 并广播给客户端。因为所有客户端的 `A` 是同步且固定的，所以 `ΔW` 的聚合 `Avg(A * B_i)` 等价于 `A * Avg(B_i)`，实现了**精确聚合**。
        2.  **偶数轮 (更新A，聚合A)**：所有客户端冻结新接收的全局 `B_{t+1}`，只训练并更新下投影矩阵 `A`。服务器收集并平均聚合 `A`，得到新的全局 `A_{t+1}` 并广播。同理，聚合为精确聚合。
    *   **理论分析**：在一个简化的线性模型上进行理论分析，证明了RoLoRA（使用交替最小化-梯度下降）能够以指数速度收敛到全局最优解，凸显了学习下投影矩阵A的必要性。而证明固定A的FFA-LoRA方法会因初始随机A与最优A*之间的角度偏差而导致性能损失，无法收敛到全局最优。
    *   **计算和通信成本**：在每个通信轮中，由于只更新一半的LoRA参数，RoLoRA的**可训练参数量和通信量均为标准FedAvg of LoRA的一半**。与FFA-LoRA相比，唯一的额外开销是交替冻结参数，但这可在服务器聚合时并行执行，可忽略不计。

### 3. 实验设计

*   **数据集与场景**：
    *   **玩具模型验证**：在两层的非线性神经网络（ReLU激活）上使用**MNIST**数据集进行验证，并将训练数据以非独立同分布（Non-IID）方式（按标签划分）分配给5个或10个客户端。
    *   **语言理解任务**：在**GLUE基准**的5个数据集（SST-2, QNLI, MNLI, QQP, RTE）上，使用预训练的**RoBERTa-Large**模型进行评估。
    *   **常识推理任务**：在8个常识推理子任务（BoolQ, PIQA, SIQA等）上，使用**Llama-2-7B**模型进行评估。
    *   **语言生成任务**：在代码生成（**HumanEval**）和多任务语言理解（**MMLU**）上，使用**Llama-2-7B**模型进行评估。
*   **对比方法（Benchmark）**：
    *   **LoRA (FedAvg of LoRA)**：直接对A和B矩阵分别进行联邦平均。
    *   **FFA-LoRA**：冻结下投影矩阵A，仅联邦训练和聚合上投影矩阵B。
    *   **FlexLoRA**：（仅部分实验中对比）一种先计算本地A和B的矩阵乘积，再通过截断SVD聚合的方法。

### 4. 资源与算力

*   论文中提到，所有基于大语言模型的实验均使用 **NVIDIA GeForce RTX 4090** 或 **NVIDIA A40** GPU完成。未提及具体使用数量或总训练时长。

### 5. 实验数量与充分性

*   **实验数量**：实验设计全面，涵盖了多个维度：
    1.  **不同客户端数量**：在GLUE任务中，测试了3、20、50个客户端下的性能。
    2.  **不同微调参数量**：通过改变应用LoRA的层数和秩（rank），测试了不同参数预算下的性能。
    3.  **不同LoRA秩**：在常识推理等任务中，测试了秩为2和8的场景。
    4.  **对齐通信成本**：通过让FFA-LoRA和RoLoRA使用双倍层数或双倍秩，与标准LoRA在相同通信量下进行公平对比。
    5.  **多模型与多任务**：覆盖了从简单模型到RoBERTa-Large、Llama-2-7B等大模型，以及语言理解、常识推理、代码生成等多种任务类型。
*   **充分性与公平性**：实验对比维度很全面，通过控制变量（如保持微调总样本数不变），并对每个配置进行多轮随机种子实验并报告均值和标准差，确保了对比的客观性和公平性。

### 6. 论文的主要结论与发现

*   **鲁棒性更强**：RoLoRA在客户端数量增加、微调参数减少等更具挑战性的条件下，表现出远超标准LoRA和FFA-LoRA的鲁棒性，性能衰减显著更小。
*   **收敛速度快**：在训练过程中，RoLoRA的收敛速度明显优于其他两种方法。
*   **通信效率高**：在通信成本仅为标准LoRA一半的情况下，RoLoRA就能达到甚至超越其性能。在与对齐通信成本的对比中，RoLoRA依然表现最佳。
*   **性能优势显著**：在多个基准任务上，RoLoRA均取得了最高的平均准确率，尤其是在Llam-2-7B常识推理任务上，其提升巨大且稳定性好，而FFA-LoRA则表现出极大的方差。
*   **理论支撑**：理论和实践均证明了学习下投影矩阵（A）对于联邦LoRA微调的必要性和优越性。

### 7. 优点

*   **理论与实证相结合**：首先在一个简化的线性模型上进行理论证明，揭示了问题的本质（FFA-LoRA的局限性），然后在真实大模型上进行了广泛验证，论证链条完整。
*   **方法简洁高效**：RoLoRA仅通过交替冻结/更新的简单策略，就解决了联邦LoRA中的核心难题，没有引入复杂的SVD等计算开销，通信成本也减半，易于实现。
*   **实验全面且公平**：对比维度丰富，特别是通过多种方式对齐通信成本，证明了RoLoRA的优势并非来自增加通信量，使得结论更具说服力。

### 8. 不足与局限

*   **客户端全参与假设**：论文的实验假设所有客户端在每轮通信中都参与，未探讨部分客户端掉线或不可用等更实际的联邦学习场景。
*   **数据异构性探讨不足**：虽然通过按标签划分MNIST构建了Non-IID场景，但在大语言模型实验中，虽然通过增加客户端数量隐含地增加了数据异质性，但缺乏对不同数据异质性程度（如狄利克雷分布划分）的显式、系统性实验。
*   **缺乏超参数敏感性分析**：论文直接给出了交替训练等关键超参数，但未分析这些选择对性能的影响。
*   **未开源代码**：作为一篇尚未被接收的匿名投稿，代码暂未公开，可复现性待验证。

（完）
