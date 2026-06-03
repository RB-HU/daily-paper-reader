---
title: "Aligning with Logic: Measuring, Evaluating and Improving Logical Preference Consistency in Large Language Models"
title_zh: 与逻辑对齐：衡量、评估与提升大语言模型的逻辑偏好一致性
authors: "Yinhong Liu, Zhijiang Guo, Tianya Liang, Ehsan Shareghi, Ivan Vulić, Nigel Collier"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=V61nluxFlR"
tags: ["query:fla"]
score: 4.0
evidence: 提升LLM逻辑偏好一致性的方法，可应用于智能体后训练对齐
tldr: 当前大模型常出现判断不一致问题，本文从逻辑偏好一致性角度出发，提出基于传递性、交换性、否定不变性的通用评估框架，并以此检测和提升模型逻辑一致性。实验表明，该框架能有效识别不一致性，为构建稳定可靠的智能体决策系统提供基础。此方法可作为金融智能体后训练的对齐技术，增强其逻辑推理能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1681, \"height\": 949, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 610, \"height\": 629, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 778, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1632, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1669, \"height\": 538, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1694, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1643, \"height\": 1811, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1155, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-v61nluxflr/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 689, \"height\": 536, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1768, \"height\": 1071, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 932, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 815, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 991, \"height\": 345, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1261, \"height\": 341, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 992, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-v61nluxflr/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 725, \"height\": 345, \"label\": \"Table\"}]"
motivation: LLM决策存在逻辑不一致性，缺乏可预测性，需提升逻辑偏好一致性以支持可靠智能体。
method: 提出基于传递性、交换性、否定不变性的评估框架，并设计方法改善逻辑偏好一致性。
result: 实验显示该框架能有效评估和提升多种LLM的逻辑一致性，减少矛盾输出。
conclusion: 逻辑对齐是构建可信LLM智能体的关键，所提框架为后训练一致性优化提供了新视角。
---

## Abstract
Large Language Models (LLMs) are expected to be predictable and trustworthy to support reliable decision-making systems. Yet current LLMs often show inconsistencies in their judgments. In this work, we examine \textit{logical preference consistency} as a foundational requirement for building more dependable LLM systems, ensuring stable and coherent decision-making while minimizing erratic or contradictory outputs.
To quantify the logical preference consistency, we propose a universal evaluation framework based on three fundamental properties: *transitivity*, *commutativity* and *negation invariance*.
Through extensive experimentation across diverse LLMs, we demonstrate that these properties serve as strong indicators of judgment robustness.
Furthermore, we introduce a data refinement and augmentation technique, REPAIR, that enhances logical consistency while maintaining alignment with human preferences. Finally, we show that improving consistency leads to better performance in LLM-driven logic-based algorithms, reinforcing stability and coherence in decision-making systems.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 形式为您提供对这篇论文的结构化、深入、客观的总结。

### **1. 论文的核心问题与整体含义**

*   **核心问题**：当前的大语言模型（LLMs）在决策和判断时常常表现出不一致性，这严重影响了其作为可靠决策系统组件的可预测性和可信赖性。这种不一致性在需要结构化推理的场景下尤为突出。
*   **研究动机**：一个可靠的系统应具备一致的预测能力。论文聚焦于**逻辑偏好一致性** 这一核心基础要求，认为它是构建更稳健LLM系统的基石，能确保决策的连贯性，并减少矛盾和错误的输出。
*   **整体含义**：本文旨在将逻辑一致性提升为与人类偏好对齐同等重要的LLMs评估维度。通过量化、评估和改进LLMs的逻辑偏好一致性，不仅可以增强模型本身的鲁棒性，还能提升其在下游逻辑驱动型任务中的表现，为构建可信AI系统提供新的视角和技术路径。

### **2. 论文提出的方法论**

论文的核心方法论分为两部分：一个评估框架和一个改进框架。

#### **2.1. 逻辑偏好一致性评估框架**

该框架将LLM视为一个二元关系操作函数 `F(A, B)`，用以判断在一组项目 `X` 中，`A` 是否偏好于 `B`（`A ≻ B`）。基于此，定义了三个基础属性来量化一致性：

*   **传递性**
    *   **核心思想**：如果模型判断 `A ≻ B` 且 `B ≻ C`，则必须判断 `A ≻ C`。违反传递性意味着模型内部存在逻辑循环。
    *   **量化指标 `stran(K)`**：通过从项目集 `X` 中随机抽样 `K` 个项目构成的子图，并检查其是否为有向无环图（DAG，即不存在循环关系）来衡量。`stran(K)` 是所有抽样子图中无环子图的比例（0到1之间）。例如，`stran(5)`衡量在5个项目组合中不存在矛盾判断的概率。

*   **交换性**
    *   **核心思想**：模型的判断不应受项目输入顺序的影响。即 `F(A, B)` 的结果应与 `F(B, A)` 一致，检验模型是否存在位置偏差。
    *   **量化指标 `scomm`**：计算所有项目对中，交换比较顺序后模型仍保持相同判断的比例。

*   **否定不变性**
    *   **核心思想**：模型应能正确理解和应用关系的互补性。对关系“A 比 B 好”的否定应是“B 比 A 好”。模型对否命题显式提问的回应，应与原命题判断的逻辑否定保持一致。
    *   **量化指标 `sneg`**：计算在所有项目对中，模型对否定关系 `¬F(A, B)` 的判断与原关系判断 `F(A, B)` 的逻辑否定相匹配的比例。

#### **2.2. 一致性与数据增强框架 REPAIR**

*   **核心思想**：为了解决LLM在偏好判断上的不一致性，REPAIR框架首先从噪声数据中提炼出无冲突的全局排序，再基于此排序生成更多一致的比较数据，用于模型训练。
*   **算法流程**：
    1.  **排序估计**：将原始的、可能自相矛盾的成对比较数据视为噪声数据。通过**胜率法**等排序聚合技术，计算每个项目的净胜率，从而推导出一个无矛盾的全局（或部分）项目排序。
    2.  **数据精炼与外推**：基于上一步得到的排序，推断并生成所有逻辑上一致的成对比较结果。例如，如果排序为 `A > B > C`，则除了原标注，还会生成 `A ≻ C` 等隐含关系，形成一个无冲突的增强数据集。
    3.  **进一步增强**：还可加入否定关系的比较数据，例如，从 `A > B` 生成 `¬(B > A)` 的提问，以专门强化模型的否定不变性。
    4.  **指令微调**：使用该逻辑一致且数量增多的数据集对LLM进行指令微调。

### **3. 实验设计**

*   **数据集与场景**：实验覆盖三类具有不同主观性的任务，作为评估基准：
    *   **抽象摘要评估**：使用 **SummEval** 数据集，评估LLM对不同摘要连贯性（Coherence）的偏好。
    *   **文档重排序**：使用 **NovelEval** 数据集，评估LLM对检索文档与查询相关性的判断。
    *   **时序事件排序**：使用 **CaTeRS** 数据集，评估LLM对因果/时序关系的判断，这是一个更客观的逻辑推理任务。
    *   **训练集**：为了验证 REPAIR 框架，使用了规模更大的 **Summarize from Feedback** 数据集进行指令微调，并额外使用了 **MS-MARCO** 数据集进行验证。
*   **对比方法**：
    *   **零样本推理**：直接评估未经微调的模型。
    *   **原始/扰动数据训练**：使用原始干净数据或随机翻转10%标签的噪声数据训练模型。
    *   **REPAIR增强数据训练**：在不同增强阶段（标准增强、加入否定增强）对模型进行微调。
    *   **多种排序估计方法对比**：在REPAIR框架内，对比了胜率法、ELO评分和Bradley-Terry模型的效果。
    *   **模型家族对比**：评估了Llama-2、Llama-3、Mistral、Zephyr、Phi-3、Gemma-2、GPT-3.5、Deepseek等多个开源和API模型。
    *   **提示方法对比**：对比了标准直接判断和思维链提示下的表现。
*   **基准与下游应用**：将逻辑一致性（尤其是传递性）作为衡量模型鲁棒性的代理指标，并与人类判断准确率、自我一致性进行相关性分析。同时，在**Pairwise-Preference Search (PairS)** 排序算法中测试一致性的影响，以Spearman相关系数作为最终性能指标。

### **4. 资源与算力**

论文在附录F部分提到了指令微调的训练细节，具体如下：
*   **GPU型号与方式**：所有训练均在 **A100** 机器上进行。
*   **训练参数**：使用了参数高效微调方法 **LoRA**（秩`r=16`，缩放因子`α=64`）。训练周期为2个epoch，学习率为`5 × 10⁻⁵`，批次大小为4，梯度累积步数为2。
论文未明确提及训练总时长或使用的GPU总数。

### **5. 实验数量与充分性**

*   **实验数量**：论文设计了大量实验，涵盖面广。
    *   在3个评估基准和1个主要训练集上测试了超过10种不同类型的模型。
    *   涵盖了标准推理、思维链推理、以及在不同数据配置下（原始、噪声、修复增强、降采样）微调的多维度对比。
    *   通过相关性分析、下游任务验证、消融实验（不同排序方法、不同数据采样量）和额外的MS-MARCO数据集验证，多角度支撑其论点。
*   **充分性与公平性**：实验非常充分。评估框架的定义是通用的、不依赖具体模型的，应用于多种模型和任务上，显示了其普适性。对比实验设置公平，例如在验证 REPAIR 框架时，通过引入相同比例的合成噪声来模拟真实场景，并与干净数据训练的上限作对比。降采样实验确保了数据增强带来的增益不单纯源于数据量的增加。

### **6. 论文的主要结论与发现**

1.  **逻辑一致性是模型鲁棒性的强代理指标**：传递性与模型在多次采样下的自我一致性高度相关，表明逻辑一致性可以有效反映模型的判断稳定性。
2.  **交换性与人类偏好对齐相关**：交换性与模型在改写后提示上的性能波动和人类准确率有很强的相关性，说明位置偏差是影响模型性能的重要因素。
3.  **思维链并非万能**：使用思维链提示并未普遍提升逻辑一致性，有时甚至会因引入不一致的判断标准而损害传递性。
4.  **REPAIR 框架有效**：使用 REFPAIR 处理后的噪声数据进行训练，能显著提升模型的传递性和交换性，同时其与人类偏好的对齐程度与在干净数据上训练的模型相当。要提升否定不变性，必须显式加入否定关系数据进行训练。
5.  **逻辑一致性赋能下游任务**：在PairS这类依赖逻辑的排序算法中，逻辑一致性更高的LLM排序性能更好，同时更高的交换性意味着对算法校准的需求更低，从而提升了计算效率。

### **7. 优点**

*   **问题定义清晰且新颖**：将逻辑偏好一致性作为LLM评估的关键一环，系统性地定义并量化了传递性、交换性和否定不变性，补充了现有研究主要关注事实知识一致性的不足。
*   **评估框架严谨通用**：三个指标的数学定义明确，适用于任意数量的项目和多样化的任务，为评估LLM的逻辑推理能力提供了统一标准。
*   **方法论简单有效**：**REPAIR** 框架构思巧妙，通过经典的“排序聚合再外推”思路，巧妙地利用数据增强来解决噪声和逻辑矛盾问题，易于理解和实现，且效果显著。
*   **实验扎实全面**：实验覆盖了多个主流模型、不同任务类型和数据规模，并通过相关性分析和下游任务验证，建立了从微观属性到宏观性能的联系，论证链完整。

### **8. 不足与局限**

*   **二元关系假设的简化**：评估框架基于严格的二元偏好关系（A优于B），但现实世界的偏好可能更复杂，存在平局、不可比或多维度的偏好，该框架未能完全覆盖这些场景。
*   **合成噪声的局限性**：训练 REPAIR 模型时，使用的是通过随机翻转引入的“合成噪声”。虽然公平，但可能无法完全代表真实人工标注中复杂、有偏的噪声模式。
*   **数据依赖与泛化风险**：REPAIR 的性能高度依赖于第一步的排序估计算法。本文发现不同算法在处理稀疏或平局关系时各有优劣，这表明该方法在数据和任务上的泛化能力可能需要更细致的调优。
*   **计算开销**：尽管 REPAIR 能在下游提升计算效率，但其本身在数据准备阶段需要进行一轮全局排序估计和大量的成对数据外推，当项目数`N`很大时，这个预处理步骤的计算开销不容忽视。
*   **一致性指标的权衡**：论文提到，加入否定数据增强可能会轻微损害其他一致性指标，暗示了不同逻辑属性之间可能存在训练上的冲突或权衡。

（完）
