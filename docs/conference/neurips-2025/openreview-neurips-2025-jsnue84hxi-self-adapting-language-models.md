---
title: Self-Adapting Language Models
title_zh: 自适应语言模型
authors: "Adam Zweiger, Jyothish Pari, Han Guo, Yoon Kim, Pulkit Agrawal"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=JsNUE84Hxi"
tags: ["query:fla"]
score: 9.0
evidence: 通过自生成微调数据和RL实现LLM自我适应
tldr: 针对LLM静态权重无法持续适应新任务的问题，提出SEAL框架，让模型自主生成微调数据和优化指令，通过强化学习学会生成有效的自我编辑，从而进行持久权重更新。实验证明SEAL能显著提升在流式任务上的持续学习能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1417, \"height\": 324, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1433, \"height\": 259, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1442, \"height\": 375, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 576, \"height\": 573, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 474, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jsnue84hxi/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 590, \"height\": 591, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 626, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 830, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1515, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 749, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 711, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 504, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 746, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 744, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1223, \"height\": 457, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1170, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1099, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1357, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 854, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jsnue84hxi/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1300, \"height\": 391, \"label\": \"Table\"}]"
motivation: LLM部署后无法动态更新权重以适应新任务或知识，适应性差。
method: 利用RL训练LLM生成自我编辑（含优化超参数、数据增强等），通过下游性能反馈学习有效的更新方式。
result: SEAL在多个持续学习基准上超越静态模型，展现出高效的自主适应能力。
conclusion: 为金融智能体提供了一种自动化且持续的后训练机制，使其能随时适配市场变化和用户需求。
---

## Abstract
Large language models (LLMs) are powerful but static; they lack mechanisms to adapt their weights in response to new tasks, knowledge, or examples. We introduce $\textbf{Se}$lf-$\textbf{A}$dapting $\textbf{L}$LMs (SEAL), a framework that enables LLMs to self-adapt by generating their own finetuning data and update directives. Given a new input, the model produces a $\textit{self-edit}$ --- a generation that may restructure the information in different ways, specify optimization hyperparameters, or invoke tools for data augmentation and gradient-based updates. Through supervised finetuning (SFT), these self-edits result in persistent weight updates, enabling lasting adaptation. To train the model to produce effective self-edits, we use a reinforcement learning loop, using the downstream performance of the updated model as the reward signal. Unlike prior approaches that rely on separate adaptation modules or auxiliary networks, SEAL directly uses the model's generation to parameterize and control its own adaptation process. Experiments on knowledge incorporation and few-shot generalization show that SEAL is a promising step toward language models capable of self-directed adaptation in response to new data. Our website and code is available at https://jyopari.github.io/posts/seal.

---

## 论文详细总结（自动生成）

好的，基于提供的论文文本，以下是对《Self-Adapting Language Models》的结构化、深入、客观总结。

### 1. 论文的核心问题与整体含义

*   **研究背景**：大型语言模型（LLMs）虽然功能强大，但在部署后通常是静态的。它们缺乏一种内置机制来根据新任务、新知识或新示例动态、持久地调整自身权重。当前LLMs主要通过“原样”消费数据进行微调或上下文学习，无法开发个性化的、最优的数据转换和学习策略。
*   **核心问题**：能否让LLM实现“自我适应”，即通过自主生成或转换其自身的训练数据和微调指令，来优化其在新信息上的学习过程？
*   **整体含义**：论文提出了一种迈向“会学习的语言模型”的范式，模型不仅能处理信息，还能决定如何最佳地学习信息。这为解决数据枯竭（“数据墙”）问题、实现模型持续学习和自我进化提供了新思路。

### 2. 论文提出的方法论

*   **核心思想**：SEAL框架（Self-Adapting LLMs）赋予LLM生成“自我编辑”的能力。自我编辑是指导模型如何更新自身权重的自然语言指令，可以包括生成合成数据、指定优化超参数（如学习率、训练轮数），或调用数据增强工具。
*   **关键技术：嵌套优化循环**
    *   **内层更新循环**：给定一个新输入（上下文C），模型生成一个“自我编辑”（SE），然后通过监督微调（SFT）将此编辑应用于自身，实现临时的权重更新（θ → θ'）。这个更新过程可以整合像LoRA这样的参数高效微调技术。
    *   **外层强化学习(RL)循环**：以更新后模型（θ’）在下游任务（τ）上的性能作为奖励信号，训练模型生成更有效的“自我编辑”。目标是最大化生成能带来高绩效的自我编辑的期望奖励。
*   **算法实现**：论文采用了一种简化的在线策略RL方法——ReST^EM，即“拒绝采样 + 监督微调”。
    *   **E步（采样）**：从当前模型策略中采样多个候选的“自我编辑”。
    *   **M步（强化）**：评估每个编辑带来的性能提升。只保留那些带来正向奖励（例如，性能提升）的“好编辑”，并用这些成功的（提示，编辑）对模型进行监督微调（即行为克隆）。这近似于优化二元奖励下的强化学习目标。
*   **领域实例化**：
    *   **知识整合**：输入一段新文章，模型生成的自我编辑是对文章的“推论”或改写。模型随后在这些合成数据上进行微调，将知识固化到权重中。
    *   **小样本学习**：输入少量示例，模型生成的自我编辑是具体如何使用数据增强工具（如旋转、翻转）和配置训练参数（学习率、损失计算方式）的决策。模型根据此决策进行测试时训练（TTT）以实现快速泛化。

### 3. 实验设计

*   **数据集与场景**：
    *   **知识整合**：使用SQuAD数据集。任务是在不提供原文的情况下回答关于文章的问题。评估指标是问答准确率。
    *   **小样本学习**：使用ARC-AGI基准的一个简化子集（训练集11个任务，评估集8个任务）。模型需要从极少示例中学习抽象推理模式。
*   **基准与对比方法（Baselines）**：
    *   **知识整合任务对比**：
        *   **Base Model**：不做任何适应的预训练模型。
        *   **Train on Passage Only**：直接在原文上进行微调。
        *   **Train on Passage + Synthetic Data**：使用未经RL训练的基础模型生成的推论进行微调。
        *   **Train on Passage + GPT-4.1 Synthetic Data**：使用GPT-4.1生成的推论进行微调。
    *   **小样本学习任务对比**：
        *   **ICL**：标准的上下文学习。
        *   **TTT + Self-Edit (w/o RL)**：使用基础模型生成的自我编辑进行测试时训练，但未经过RL优化。
        *   **Oracle TTT**：使用手工调优的最优配置进行测试时训练，代表性能上界。

### 4. 资源与算力

*   **GPU型号与数量**：小样本学习训练在单张A100、H100或H200 GPU上完成。知识整合实验在2×H100或2×H200 GPU上完成。
*   **训练时长**：
    *   小样本学习的ReST^EM训练耗时约2-3小时。
    *   知识整合的一轮ReST^EM训练（包含750次内层循环迭代）耗时约6小时。
*   **效率工具**：使用了DeepSpeed ZeRO-3进行训练优化，并使用vLLM进行高效推理。

### 5. 实验数量与充分性

*   **实验充分性**：实验覆盖了两个截然不同的适应场景（知识和小样本学习），并与多种强基线进行了比较，包括当下最强模型GPT-4.1的数据以及Oracle上界，设计较为充分。
*   **鲁棒性检验**：论文包含了多项补充实验，显示出一定的深度和分析性，而非仅仅是性能展示。
    *   **消融/扩展实验**：包括模型规模扩展（3B vs. 7B）、与不同方法（如Generative Adapter, Entigraph）的比较、使用代理奖励的可行性、灾难性遗忘分析以及多达7种不同的提示模板（prompt）对性能影响的系统性研究。
*   **客观性与公平性**：对比方法清晰，评估设置对基线方法是公平的。例如，在知识整合任务中，所有合成数据增强方法都遵循相同的微调流程。对于灾难性遗忘等局限也进行了明确讨论和初步实验，态度客观。

### 6. 论文的主要结论与发现

*   **自我适应的有效性**：SEAL框架能够成功训练LLM生成有效的自我编辑，使模型能够根据新输入实现持久且显著的性能提升。
*   **性能提升显著**：SEAL在两个任务上均大幅优于未经过RL训练的自我编辑方法（例如，小样本任务成功率从20%提升至72.5%），并能在知识整合任务上超越由GPT-4.1生成的合成数据。
*   **策略的可迁移性**：通过单篇文档RL训练出的生成自我编辑的策略，可以泛化到多文档的继续预训练场景，实现有效的知识整合。
*   **通往自主学习之路**：SEAL证明了模型可以通过与外部数据交互，学习如何更好地组织信息以供自身学习，这比静态的自我一致性方法更具扩展潜力。

### 7. 优点

*   **新颖的范式**：将LLM的生成能力直接用于参数化和控制其自身的适应过程，统一了数据生成与学习策略优化，这是一个极具创新性的元学习思想。
*   **通用性强**：SEAL框架不依赖于特定的提示格式或输出格式，可以应用于知识整合、小样本学习等多种场景，并可灵活调整自我编辑的内容。
*   **优化目标直接**：直接以下游任务性能为奖励进行RL优化，避免了人工设计数据生成启发式规则的偏差，能够学习到超越人工设计（如简单推论）和更强模型（GPT-4.1）的数据生成策略。
*   **分析深入**：论文不只报告主干实验结果，还提供了丰富的分析性实验，如探究模型规模影响、提示敏感性、灾难性遗忘和代理奖励，展示了对方法优缺点的深刻理解。

### 8. 不足与局限

*   **灾难性遗忘**：连续进行多次自我编辑会导致模型在先前任务上的性能下降，这是当前框架尚未解决的关键问题，限制了其在持续学习场景中的直接应用。
*   **计算开销巨大**：RL训练的内循环涉及完整的模型微调和评估，计算成本远高于标准RLHF等方法的单次前向传播，限制了其可扩展性。
*   **依赖上下文评估**：当前的RL奖励计算依赖于和输入上下文捆绑的下游任务标签（如Q\&A对），这使得方法难以扩展到无标签的海量通用语料库。
*   **实验规模有限**：实验集中在相对较小的模型（1B, 7B）和特定数据集上。虽然证明了概念，但在更大规模模型（如70B+）和更复杂数据集上的有效性仍待验证。在小样本任务中，其性能与Oracle上限仍有差距。
*   **输出空间控制不足**：虽然RL能提升效果，但有时RL会导致生成单一的长输出格式（尽管也有效），如何精细化控制编辑的风格、长度和多样性仍是挑战。

（完）
