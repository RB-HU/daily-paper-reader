---
title: "Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning"
title_zh: 恰到好处的偏移：通过定向表示微调减轻对齐语言模型中的过度拒答
authors: "Mahavir Dabas, Si Chen, Charles Fleming, Ming Jin, Ruoxi Jia"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=TiYOHdK35L"
tags: ["query:fla"]
score: 4.0
evidence: 通过定向表示微调减少对齐LLM的过度拒答，是一种安全对齐后训练方法
tldr: 针对安全对齐导致LLM过度拒答良性查询的问题，本文提出ACTOR，一种基于激活分析的定向表示微调框架。仅微调单一模型层的特定激活成分，即可在多个基准上有效降低过度拒答率，且不影响有害输入拒答能力，为后训练安全对齐的精细控制提供了高效方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1759, \"height\": 483, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1692, \"height\": 919, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1685, \"height\": 744, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1760, \"height\": 610, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1719, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tiyohdk35l/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1738, \"height\": 991, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1777, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1779, \"height\": 493, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 380, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1782, \"height\": 428, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1776, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 756, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1777, \"height\": 165, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1778, \"height\": 164, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tiyohdk35l/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1786, \"height\": 144, \"label\": \"Table\"}]"
motivation: 安全对齐后的LLM常错误拒答正常请求，影响实用性。
method: 利用激活模式识别拒答相关组件，仅微调单层以精确控制拒答行为。
result: 在多个基准上减少过度拒答，保持安全性，且数据与计算效率高。
conclusion: 为LLM安全对齐后训练提供了轻量级、可解释的拒答控制技术。
---

## Abstract
Safety alignment is crucial for Large Language Models (LLMs) to resist malicious instructions but often results in over-refusals, where benign prompts are unnecessarily rejected, impairing user experience and model utility. To this end, we introduce **ACTOR** (Activation-Based Training for Over-Refusal Reduction), a robust and compute- and-data efficient training framework that mini- mizes over-refusals by utilizing internal activation patterns from diverse queries. ACTOR precisely identifies and adjusts the activation components that trigger refusals, providing stronger control over the refusal mechanism. By fine-tuning only a single model layer, ACTOR effectively reduces over-refusals across multiple benchmarks while maintaining the model’s ability to handle harmful queries and preserving overall utility.

---

## 论文详细总结（自动生成）

好的，这是根据提供的论文内容生成的结构化总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：本论文聚焦于大型语言模型在安全对齐后出现的**过度拒答**现象。即模型因安全防护过于保守，将许多语义上看似有害但实际无害的查询错误拒绝，严重损害了用户体验和模型实用性。
*   **整体含义**：论文旨在解决语言模型安全性与有用性之间的核心矛盾。其目标是开发一种能够精准、高效地减少过度拒答，同时不削弱模型对真正有害查询拒绝能力的方法，从而在二者之间取得更好的平衡。

### 2. 论文提出的方法论（ACTOR）

*   **核心思想**：ACTOR（基于激活的训练以减少过度拒答）是一种**数据与计算高效**的训练框架。它不像传统方法那样依赖模型输出进行训练，而是直接在模型的内部激活空间进行干预，通过微调来修正触发拒答机制的激活模式。
*   **关键技术细节**：
    *   **提取拒答向量**：
        1.  **层识别**：使用一组无害和有害的锚点查询，提取模型各层最后 token 的隐藏状态，通过 t-SNE 可视化和轮廓系数评估各层区分两类查询的能力。选择得分最高的中间层作为**目标层 (l*)**。
        2.  **计算向量**：拒答向量 **R** 为目标层上有害查询平均激活与无害查询平均激活之差。该向量代表了从“回应”到“拒答”的激活变化方向。
    *   **设定“恰到好处”的对齐目标**：
        *   **动机**：研究发现，简单的统一偏移（对所有查询加/减相同的拒答向量倍数）会导致模型崩溃，因为不同查询所需的偏移程度不同。
        *   **方法**：ACTO提出**投影校准**。它发现每个查询所需的偏移量与其在拒答向量 **R** 上的投影大小成正比。因此，为每个查询设定的目标激活为：**a_q - α · Proj_R(a_q)** (对伪有害/安全查询) 和 **a_q + α · Proj_R(a_q)** (对有害查询)，其中 α 是超参数。这一方法基于“拒答边界可被视为一个线性超平面”的理论直觉。
    *   **算法流程**：
        1.  **迭代优化**：交替执行两步：用当前模型参数重新计算拒答向量 **R**；然后进行微调。
        2.  **损失函数**：使用 **投影校准的拒答方向损失（L_PRD）**，鼓励模型在目标层生成的目标激活 `a_l*(θ, q)` 趋向于为每个查询个性化设定的目标激活 `a_tgt(q)`，使用余弦相似度衡量。
        3.  **高效性**：训练仅需优化目标层 `l*` 及其之前层的参数，避免了全模型更新，且无需生成完整的文本回复。

### 3. 实验设计

*   **数据集与场景**：
    *   **训练数据**：构建了包含三类查询的数据集。有害查询来自 `HexPhi`；无害查询来自 `UltraChat`；伪有害查询（过度拒答样本）来自 `XSTest`、`SCOPE`、`OR-Bench-Hard-1K` 和 `PHTest` 四个基准。
    *   **评估场景与基准**：
        *   **过度拒答评估**：使用前述四个基准的保留测试集，并引入 `OKTest` 作为分布外基准。
        *   **安全性评估**：使用 `AdvBench` 基准，测试模型对真正有害攻击的拒绝能力。
        *   **通用能力评估**：使用 `MMLU` 测知识、`MT-Bench` 测指令遵循能力、`WikiText2-2` 测困惑度。
    *   **对比方法**：对比了多种训练和推理时方法，包括监督微调（SFT）、`Safe-Decoding`、`DRO`、`Self-CD`、`SCANS`、`Surgical` 等。
*   **模型**：在 **Llama-2-7b-chat, Llama-2-13b-chat, Gemma-7b-it** 三个开源对齐模型上进行实验。

### 4. 资源与算力

*   **论文明确提到**：在单张 **NVIDIA H100** GPU上，相同设置下（Llama-2-7b-chat 模型，3 个 epoch）：
    *   监督微调（SFT）需要 **15 分钟**。
    *   ACTOR 方法仅需 **4 分钟**。
*   这清晰地展示了 ACTOR 在训练时间上的高效性。

### 5. 实验数量与充分性

*   **实验数量**：实验设计较为详尽，主要包含：
    *   **主实验**：在三个不同规模（7B/13B）和架构（Llama/Gemma）的模型上评估多个基准的过度拒答合规率和安全分数。
    *   **对比实验**：与 6 种以上的基线方法进行全面比较。
    *   **消融实验**：
        *   目标层 `l*` 的选择。
        *   投影倍数超参数 α 的影响。
        *   训练数据量（无害样本和伪有害样本数量）的影响。
        *   跨基准的泛化能力测试（在一个基准训练，在其他基准测试）。
    *   **鲁棒性分析**：测试更换不同来源的有害数据计算拒答向量时的性能稳定性。
    *   **通用能力评估**：确保方法对模型的其他核心能力影响很小。
*   **充分与客观性**：实验覆盖了多模型、多基准、多指标，对比方法全面，并包含充分的消融和鲁棒性研究，整体设计严谨、客观、公平。

### 6. 论文的主要结论与发现

*   ACTOR 能在所有测试模型上**显著且有效地降低过度拒答率**，同时**无损于对真正有害查询的安全性**。
*   该方法在减少过度拒答和保持安全性的权衡上**优于所有基线方法**。
*   ACTOR 具有极高的**计算和数据效率**，仅需微调单层网络、使用少量查询数据，且训练过程无需生成完整回复。
*   通过动态调整模型参数而非注入固定的静态向量，ACTOR 对数据分布的变化表现出更强的**鲁棒性**。

### 7. 优点

*   **思想新颖且高效**：直接在激活空间以“恰到好处”的个体化方式进行干预，避免了传统输出监督训练的昂贵开销和推理时方法的脆弱性。
*   **控制精细**：通过投影校准实现查询自适应偏移，比统一偏移方法更精准，避免了模型性能崩溃。
*   **极致的效率**：仅需修改查询本身（无需回复标注），且只微调一个 transformer 层，训练速度和数据需求远低于同类方法。
*   **鲁棒且稳定**：对数据分布变化具有鲁棒性，且在提升有用性的同时几乎不影响安全性和通用能力。

### 8. 不足与局限

*   **白盒设定限制**：ACTOR 依赖直接访问模型内部激活和已有的安全对齐机制，无法被只能调用黑盒 API 的第三方用户直接使用。
*   **安全的定义问题**：评估所用基准对“安全”和“伪有害”的界定存在标签不一致问题，论文结论是这些固定数据集所代表的标准的折衷，而非普适的安全定义。
*   **评估场景有限**：当前评估主要基于单轮对话的静态数据集，缺乏对多轮对话场景下过度拒答和安全性影响的系统评估。
*   **对抗鲁棒性未知**：论文虽提供了几个越狱攻击的例子，但未系统评估 ACTOR 对更复杂的、有针对性的对抗攻击的长期鲁棒性。

（完）
