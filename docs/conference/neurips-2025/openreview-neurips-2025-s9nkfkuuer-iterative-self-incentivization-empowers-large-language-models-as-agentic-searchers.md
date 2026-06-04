---
title: Iterative Self-Incentivization Empowers Large Language Models as Agentic Searchers
title_zh: 迭代自我激励使大语言模型成为代理搜索者
authors: "Zhengliang Shi, Lingyong Yan, Dawei Yin, Suzan Verberne, Maarten de Rijke, Zhaochun Ren"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=s9NkfkUuEr"
tags: ["query:fla"]
score: 9.0
evidence: 通过自我激励的强化学习将LLM后训练为代理搜索器
tldr: 大语言模型（LLM）虽广集成于信息检索，但在复杂多跳查询中难以获取准确知识，易受无关内容干扰。本文提出ExSearch代理搜索框架，通过自我激励的强化学习过程，让LLM逐步决定检索内容、调用外部检索引擎并记录细粒度证据以支持后续推理。该方法无需昂贵监督信号，使LLM在多样化查询中显著提升检索质量和推理准确性，为构建智能代理搜索器提供高效后训练途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1423, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1438, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1417, \"height\": 709, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1427, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 797, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 732, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1447, \"height\": 697, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1430, \"height\": 342, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1448, \"height\": 692, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1452, \"height\": 1286, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1451, \"height\": 1286, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-s9nkfkuuer/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1453, \"height\": 535, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 1224, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 734, \"height\": 359, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 714, \"height\": 358, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1469, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1368, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 1469, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1407, \"height\": 388, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1451, \"height\": 565, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1153, \"height\": 135, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1451, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1477, \"height\": 2327, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1464, \"height\": 515, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1464, \"height\": 727, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-s9nkfkuuer/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1450, \"height\": 620, \"label\": \"Table\"}]"
motivation: LLM在多跳查询及无关检索内容的干扰下，难以有效获取准确知识。
method: 提出ExSearch代理搜索框架，通过自我激励的强化学习让LLM逐步思考、检索和记录证据。
result: LLM学会迭代检索有用信息以支持推理，显著提升复杂查询的准确性。
conclusion: 为LLM赋能代理搜索能力提供了无需昂贵监督的后训练方法，增强信息检索鲁棒性。
---

## Abstract
Large language models (LLMs) have been widely integrated into information retrieval to advance traditional techniques. However, effectively enabling LLMs to seek accurate knowledge in complex tasks remains a challenge due to the complexity of multi-hop queries as well as the irrelevant retrieved content. To address these limitations, we propose ExSearch, an agentic search framework, where the LLM learns to retrieve useful information as the reasoning unfolds through a self-incentivized process. At each step, the LLM decides what to retrieve (thinking), triggers an external retriever (search), and extracts fine-grained evidence (recording) to support next-step reasoning.  To enable LLM with this capability, we adopts a Generalized Expectation-Maximization algorithm. In the E-step, the LLM generates multiple search trajectories and assigns an importance weight to each; the M-step trains the LLM on them with a re-weighted loss function. This creates a self-incentivized loop, where the LLM iteratively learns from its own generated data, progressively improving itself for search. We further theoretically analyze this training process, establishing convergence guarantees. Extensive experiments on four knowledge-intensive benchmarks show that ExSearchS substantially outperforms baselines, e.g., +7.8% improvement on exact match score. Motivated by these promising results, we introduce ExSearch-Zoo, an extension that extends our method to broader scenarios, to facilitate future work.

---

## 论文详细总结（自动生成）

好的，以下是基于您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **研究动机**：大语言模型虽已广泛应用于信息检索，但在处理需要多源信息融合的复杂任务（如多跳问答）时仍面临严峻挑战。主要问题在于：
    *   **查询复杂性**：直接处理包含多个子问题的复杂查询，会导致检索覆盖率低。
    *   **信息干扰**：检索系统返回的文档常包含无关内容，容易误导模型产生错误答案。
*   **核心问题**：如何有效地教会大语言模型像一个智能代理（Agent）一样，主动、动态、迭代地与外部的检索引擎交互，并在推理过程中反思和筛选检索到的信息，从而准确地获取和利用外部知识。
*   **整体含义**：本文旨在赋予大语言模型“代理搜索”的能力，使其能通过一个自我激励（Self-Incentivized）的过程，从自己生成的搜索轨迹中学习，不断优化其推理和检索策略。

### 2. 论文提出的方法论

*   **核心思想**：提出 **ExSEARCH** 框架，将大语言模型建模为一个**探索式搜索代理**。它将复杂的搜索过程形式化为一个三步循环的“搜索轨迹”：
    *   **思考（Thinking）**：基于当前上下文，生成一个明确的子查询。
    *   **搜索（Search）**：调用外部检索引擎，获取与子查询最相关的文档。
    *   **记录（Recording）**：阅读并反思检索到的文档，提取精细化的证据以支持后续推理。
*   **关键技术：迭代自我激励**：采用**广义期望最大化（Generalized Expectation-Maximization, GEM）算法**来训练大语言模型。该过程将搜索轨迹 `z` 视为潜在变量，并构建了一个自我改进的循环。
    *   **E步（轨迹探索）**：让当前大语言模型为每个输入问题生成多条候选搜索轨迹。每一条轨迹被自动赋予一个**重要性权重 `w(z)`**，该权重与该轨迹最终导向正确答案的可能性成正比（即 `w(z) ∝ p(y | x, z; θ)`）。
    *   **M步（重加权轨迹学习）**：利用E步生成的加权轨迹，构建一个**证据下界（ELBO）**作为训练目标，并最大化该下界以更新模型参数 `θ`。其损失函数由两部分组成：
        1.  **学习搜索（LR）**：鼓励模型生成高质量的支持性搜索轨迹 `z`。
        2.  **学习回答（LA）**：训练模型基于轨迹 `z` 中的证据聚合生成最终答案 `y`。
    *   **自我激励循环**：通过交替执行E步和M步，大语言模型不断地从自身生成的、并被自动评估的搜索轨迹中学习，从而逐步提升其搜索和推理能力，形成了一个无需昂贵人工标注的自我改进闭环。

### 3. 实验设计

*   **数据集**：在四个知识密集型基准数据集上进行评估：Natural Questions (NQ)、HotpotQA、MuSiQue 和 2WikiMultihopQA (2WikiQA)。
*   **评估指标**：使用来自 KILT 基准的 F1、Exact Match (EM) 和 Accuracy (Acc.)。
*   **对比方法**：与三大类方法进行了全面比较：
    1.  **直接推理（无检索）**：如 Deepseek-R1, GPT-4o, Llama-3.3-70B 等仅依赖模型内部知识。
    2.  **高级RAG**：如 RankRAG, ChatQA，RetRobust 等，它们先检索，再筛选/重排序，最后生成答案。
    3.  **迭代式RAG**：如 GenGround, IRCoT, Search-o1, Search-R1, Self-RAG 等，允许大语言模型与检索器进行多轮交互。

### 4. 资源与算力

*   论文使用了 **DeepSpeed ZeRO 3** 进行高效分布式训练。
*   **学习率**：设置为 2 × 10⁻⁶。
*   **批处理大小**：对于 3B、7B 和 8B 模型，批量大小设置为 4；对于 24B 模型，由于内存限制，批量大小降至 2。
*   论文**未明确说明**所使用的 GPU 具体型号、数量以及总体的训练时长。

### 5. 实验数量与充分性

*   **实验数量**：论文进行了大量的实验，覆盖了多个维度，十分充分。
    *   **主实验**：在4个数据集上，与三大类十余种基线方法进行了全面的性能对比。
    *   **消融实验**：在2个数据集上，分别移除了 ExSEARCH 框架中的“思考”、“搜索”、“记录”和重加权函数 `w(z)` 这四个核心组件，以验证每个部分的有效性。
    *   **扩展实验**：在**6种不同参数规模（3B-24B）和模型系列（Qwen, Llama, Mistral）** 的大语言模型上应用了该方法。
    *   **检索性能分析**：在4个数据集上，评估了模型在多跳检索场景下的召回率（Recall@K）。
    *   **训练收敛性**：在4个数据集上，通过训练集和评估集上的性能曲线，验证了理论上的收敛特性。
    *   **冷启动数据规模研究**：研究了从0到1000个不同数量的冷启动数据对最终性能的影响。
*   **客观性与公平性**：实验对比的基线方法全面且具有代表性，涵盖了最新的闭源和开源方案，并遵循了它们官方的最佳配置。因此，实验设计客观且公平。

### 6. 论文的主要结论与发现

*   **性能卓越**：ExSEARCH 在所有基准测试中均大幅超越各类基线方法，即使在 7B 的小模型上，其平均性能也优于 GPT-4o 等大规模参数模型。
*   **检索能力增强**：ExSEARCH 通过迭代式推理扩展搜索，显著提升了多跳问答场景下的文档召回率。
*   **核心组件有效**：消融实验证实，“思考”、“搜索”、“记录”以及基于轨迹重要性的“重加权”机制，各个组件对最终性能都至关重要。
*   **训练稳定收敛**：理论分析与实验均证明，基于广义期望最大化算法的自我激励训练过程具有非递减的优化特性，并能稳定收敛。
*   **良好扩展性**：该方法能无缝扩展到不同的基座模型和新的动作（如文档重排序），展现出了良好的通用性和扩展潜能。

### 7. 优点

*   **创新的统一框架**：首次将思考、搜索、记录等多个代理动作统一建模为潜在变量，并进行端到端的优化，克服了传统管道式方法的模块不对齐问题。
*   **高效的自我改进**：通过广义期望最大化算法实现了无需昂贵人工标注或强奖励信号的自我激励学习机制，训练过程稳定且理论完备。
*   **精细的信息利用**：“记录”动作要求大语言模型从检索文档中提取精细化证据，加深了模型对外部知识的理解，提高了答案的准确性。
*   **强大的实证表现与可扩展性**：在多个基准和模型规模上取得了 SOTA 性能，并引入了 ExSEARCH-Zoo 来证明框架的灵活性和可扩展性。

### 8. 不足与局限

*   **模态局限**：当前工作仅聚焦于文本输入和输出，尚未扩展到多模态（如图像、表格）的搜索与推理场景。
*   **固定检索策略**：模型在每一步推理时都会触发检索，缺乏根据上下文判断是否需要检索的自适应能力，对于简单问题可能存在冗余计算。
*   **评估指标单一**：实验主要基于 Exact Match、F1 等基于规则和答案精确匹配的指标，可能无法完全反映模型在开放式或生成长文本任务中的实际表现。
*   **输出格式兼容性**：部分情况下，模型产生的长文本答案可能与数据集要求的短答案格式不一致，需要依赖 Accuracy 等更宽松的指标进行评估。
*   **搜索深度控制问题**：通过失败案例分析发现，模型存在“搜索不足”（过早停止）和“过度搜索”（检索多余信息但仍遗漏关键点）的问题，需要更好的停止策略。

（完）
