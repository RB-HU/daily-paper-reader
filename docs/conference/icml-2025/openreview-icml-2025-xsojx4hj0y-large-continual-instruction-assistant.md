---
title: Large Continual Instruction Assistant
title_zh: 大型持续指令助理
authors: "Jingyang Qiao, zhizhong zhang, Xin Tan, Yanyun Qu, Shouhong Ding, Yuan Xie"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=XSOJx4hj0y"
tags: ["query:fla"]
score: 9.0
evidence: 动态EMA平衡可塑性与稳定性的持续指令微调框架。
tldr: 针对持续指令微调中的灾难性遗忘问题，提出基于泰勒展开的动态指数移动平均更新策略，实现可塑性与稳定性的理想平衡。在多个数据集上显著优于现有方法，为持续学习提供了理论驱动的解决方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1599, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 802, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1573, \"height\": 652, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 676, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 725, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1761, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1328, \"height\": 1165, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 498, \"height\": 339, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 403, \"height\": 304, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 483, \"height\": 493, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1276, \"height\": 939, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xsojx4hj0y/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1012, \"height\": 2370, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1765, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1767, \"height\": 229, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1762, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 728, \"height\": 226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 729, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1761, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1240, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1772, \"height\": 385, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 807, \"height\": 799, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xsojx4hj0y/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1608, \"height\": 2223, \"label\": \"Table\"}]"
motivation: 现有持续指令微调中梯度更新严重破坏先前性能，EMA固定权重无法应对动态数据集变化。
method: 从可塑性与稳定性前提出发，基于损失函数的泰勒展开推导理想条件，动态调整EMA权重。
result: 在标准持续指令微调基准上超越基线，减少遗忘的同时保持学习能力。
conclusion: 该方法为持续指令微调提供了理论化、自适应的平衡机制。
---

## Abstract
Continual Instruction Tuning (CIT) is adopted to continually instruct Large Models to follow human intent data by data. It is observed that existing gradient update would heavily destroy the performance on previous datasets during CIT process. Instead, Exponential Moving Average (EMA), owns the ability to trace previous parameters, which can aid in decreasing forgetting. Nonetheless, its stable balance weight fails to deal with the ever-changing datasets, leading to the out-of-balance between plasticity and stability. In this paper, we propose a general continual instruction tuning framework to address the challenge. Starting from the trade-off prerequisite and EMA update, we propose the plasticity and stability ideal condition. Based on Taylor expansion in the loss function, we find the optimal balance weight can be automatically determined by the gradients and learned parameters. Therefore, we propose a stable-plasticity balanced coefficient to avoid knowledge interference. Based on the semantic similarity of the instructions, we can determine whether to retrain or expand the training parameters and allocate the most suitable parameters for the testing instances. Extensive experiments across multiple continual instruction tuning benchmarks demonstrate that our approach not only enhances anti-forgetting capabilities but also significantly improves overall continual tuning performance. Our code is available at https://github.com/JingyangQiao/CoIN.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义
*   **研究背景**：基础大模型在预训练后，需要通过指令微调来遵循人类意图。随着社会发展，新指令不断涌现，模型需要持续学习新知识。
*   **核心问题**：模型在持续学习新指令数据时，会遭受灾难性遗忘，即性能在新任务上提升的同时，在旧任务上急剧下降。这被称为持续指令微调。
*   **现有方法的局限**：
    *   直接微调会破坏预训练知识。
    *   模型扩展（如添加新分支）可以抵抗遗忘，但会导致显存爆炸和计算成本高昂。
    *   指数移动平均（EMA）更新策略有助于保留旧知识，但其固定的平衡权重无法适应持续变化的数据集，导致稳定性（保留旧知识）和可塑性（学习新知识）失衡。

### 2. 方法论
本文提出了一个通用的持续指令微调框架，核心思想是通过动态调整EMA的权重来实现稳定性与可塑性的最优平衡，并辅以指令分组策略来管理训练参数。

*   **核心思想：动态EMA权重**
    *   **理想状态建模**：作者提出了持续指令微调中可塑性与稳定性的理想条件，即模型在新数据上的损失应与完全训练一致（理想知识迁移），且模型参数应与更新前保持一致（理想旧知识保护）。
    *   **理论推导**：基于损失函数的泰勒展开，结合EMA更新公式，构建了一个约束最小化问题。
    *   **权重求解**：通过拉格朗日乘子法求解该问题，推导出最优EMA权重 `βt` 可以由当前梯度、当前参数和上一轮的EMA参数自动决定。公式为： `βt = (L'(θt) + 1) / ((θt - θ*_{t-1}) * L''(θt))`。
    *   **近似优化**：为解决二阶导数（海森矩阵）计算复杂的问题，利用微分商进行近似估算。同时，通过对整个网络层的参数采用L1-Norm，实现了参数层级的统一`β`值计算，大幅降低计算开销。

*   **关键技术细节：指令分组策略**
    *   构建一个由历史指令组成的“码本”，并基于TF-IDF向量和余弦相似度对指令进行语义分组。每个语义组对应一组独立的可训练参数（如LoRA参数）。
    *   **训练阶段**：面对新任务，计算其指令与码本中所有指令的相似度。若匹配到相似组，则复用并继续训练对应的参数；否则，创建一组新的训练参数。这是一种有限度的模型扩展方法，组数通常少于任务数。
    *   **测试阶段**：同样通过指令匹配，为每个测试实例分配最合适的模型参数进行推断。

*   **算法流程概述**：
    1.  **匹配与初始化**：将当前任务指令与码本匹配，选择复用或新建训练参数。
    2.  **训练与记录**：进行正常的前向和反向传播，并记录当前迭代的梯度和模型参数。
    3.  **动态EMA更新**：根据记录的梯度和参数，计算动态EMA权重`βt`，并更新EMA参数。
    4.  **历史清空**：清除上一轮记录的梯度和参数，以节省显存。
    5.  **保存检查点**：任务训练结束后，仅保存最终的EMA参数，并更新指令码本。

### 3. 实验设计
*   **数据集与基准**：
    *   **多模态（MLLMs）**：采用CoIN基准，包含8个顺序的视觉-语言任务：ScienceQA, TextVQA, ImageNet, GQA, VizWiz, Grounding, VQAv2, OCR-VQA。
    *   **自然语言处理（LLMs）**：采用InstrDialog Stream基准，包含19个对话任务（状态跟踪、对话生成、意图识别）。
*   **对比方法**：在MLLMs上对比了多种SOTA方法，包括：
    *   **参数微调**：LoRA Fine-Tune。
    *   **模型扩展**：MoELoRA, EProj。
    *   **正则化**：LWF, EWC, MT。
    *   **梯度投影**：PGP。
    *   以及零样本（Zero-shot）和多任务联合训练（Multi-Task）的上限。
*   **评价指标**：
    *   **平均准确率**：反映模型在所有任务上的综合性能。
    *   **遗忘率**：衡量模型在旧任务上的性能下降程度，评估稳定性。
    *   **新任务准确率**：衡量模型在新任务上的学习能力，评估可塑性。

### 4. 资源与算力
*   原文未明确提及所使用的GPU型号、数量或具体训练时长。仅提到采用了DeepSpeed的ZeRO Stage-0模式、梯度检查点策略以及TF32/BF16混合精度进行训练。

### 5. 实验数量与充分性
实验设计相对充分，覆盖了多个维度的评估。
*   **不同模型架构与规模**：在LLaVA-7B、LLaVA-13B和Qwen-VL三种MLLM，以及T5-small LLM上进行了验证。
*   **消融实验**：逐个验证了动态EMA更新和指令分组策略的有效性。
*   **鲁棒性实验**：
    *   **任务顺序鲁棒性**：测试了原始、反转、字母序三种不同的任务序列。
    *   **指令多样性鲁棒性**：测试了原始、多样化、10种模板三种不同类型的指令。
*   **定性分析**：通过多轮对话的案例分析，直观展示了模型在抵抗遗忘和幻觉方面的优势。
*   **客观性与公平性**：对比方法涵盖了当前主流的不同范式（正则化、模型扩展），并在多模态和NLP任务上均与SOTA进行了比较，实验设定较为公平。所有方法基于相同的基准和评估指标进行对比。

### 6. 论文的主要结论与发现
该论文提出了一种结合动态EMA更新与指令分组的通用持续指令微调框架，能够有效抵抗灾难性遗忘。主要发现包括：
*   动态计算的EMA权重能更好地在持续学习中平衡稳定性和可塑性，优于固定的EMA权重。
*   基于语义的指令分组策略，能以有限的参数扩展进一步提升抗遗忘能力和整体性能。
*   该方法在多个视觉-语言和自然语言模型的持续学习基准上，在平均准确率、遗忘率和综合性能方面均取得了SOTA或极具竞争力的结果。
*   该方法能够有效抑制模型持续学习后的幻觉现象。

### 7. 优点
*   **理论驱动**：从理想条件出发，通过严谨的数学推导（泰勒展开、拉格朗日乘子法）得出动态权重的解决方案，而非纯经验设计。
*   **性能优越**：在多个基准和模型上验证了有效性，在综合抗遗忘与学习新知识方面表现突出。
*   **通用性与成本效益**：方法模型无关，易于集成到不同的持续指令微调方法中。指令分组策略的计算开销小，节省资源。
*   **算法实现实用**：针对理论解的复杂计算问题，提出了两个有效的近似优化步骤，使方法可以在大型模型上实际应用。

### 8. 不足与局限
*   **算力信息缺失**：未提供具体的硬件配置和训练耗时，使得读者难以评估其真实计算成本和可复现性。
*   **实验覆盖范围**：在多模态实验中，主要关注的是视觉问答和定位任务，未探索视频、音频等其他模态的持续学习场景。
*   **近似优化的理论误差**：虽然为了实用性进行了近似，但文中未深入分析这些近似计算（如用微分商代替二阶导，层级的参数统一）可能引入的理论误差范围。
*   **超参数依赖**：动态EMA权重计算中，当`βt`超出范围（0,1）时，直接使用了一个固定的经验值0.99，这个常数的选择可能对最终效果有影响，但未进行敏感性分析。
*   **指令分组的TF-IDF限制**：使用轻量级TF-IDF模型进行指令匹配虽然高效，但可能在处理复杂的语义相似性和同义转述方面能力有限，不如当前基于大型预训练模型的语义编码器。

（完）
