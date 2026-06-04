---
title: "WebDancer: Towards Autonomous Information Seeking Agency"
title_zh: WebDancer：迈向自主信息搜索智能体
authors: "Jialong Wu, Baixuan Li, Runnan Fang, Wenbiao Yin, Liwen Zhang, Zhenglin Wang, Zhengwei Tao, Ding-Chu Zhang, Zekun Xi, Xiangru Tang, Yong Jiang, Pengjun Xie, Fei Huang, Jingren Zhou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=quJdphBcdP"
tags: ["query:fla"]
score: 10.0
evidence: 提出一种面向自主智能体的训练阶段范式：数据构建、监督微调、强化学习。
tldr: 本文针对现有智能体系统缺乏端到端训练方案的问题，提出了从数据构建到强化学习的四阶段范式：首先通过网页浏览数据构建，然后进行轨迹采样，随后利用监督微调实现有效冷启动，最后采用强化学习提升泛化能力。在 GAIA 和 WebWalkerQA 两个挑战性基准上的实验验证了方法的有效性，WebDancer 智能体展现出强大的多步推理和信息检索能力，为自主研究型智能体的开发提供了系统性的数据与训练视角。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qujdphbcdp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1393, \"height\": 713, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qujdphbcdp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1438, \"height\": 692, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qujdphbcdp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1437, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qujdphbcdp/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 570, \"height\": 288, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qujdphbcdp/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1439, \"height\": 309, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-qujdphbcdp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1450, \"height\": 1268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qujdphbcdp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 574, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qujdphbcdp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 734, \"height\": 161, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qujdphbcdp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 684, \"height\": 148, \"label\": \"Table\"}]"
motivation: 现有智能体系统缺乏系统的训练阶段设计，尤其在数据构建和泛化能力方面存在不足。
method: 提出四阶段训练框架：浏览数据构建、轨迹采样、监督微调、强化学习，并基于 ReAct 格式实现 WebDancer 智能体。
result: 在 GAIA 和 WebWalkerQA 基准测试中取得领先性能，验证了端到端训练方案的有效性。
conclusion: 从数据驱动和训练阶段视角为构建自主信息搜索智能体提供了系统化范式，提升了智能体在复杂任务中的泛化能力。
---

## Abstract
Addressing intricate real-world problems necessitates in-depth information seeking and multi-step reasoning. 
Recent progress in agentic systems, exemplified by Deep Research, underscores the potential for autonomous multi-step research. 
In this work, we present a cohesive paradigm for building end-to-end agentic information seeking agents from a data-centric and training-stage perspective.
Our approach consists of four key stages: (1) browsing data construction, (2) trajectories sampling, (3) supervised fine-tuning for effective cold start, and (4) reinforcement learning for enhanced generalisation.
We instantiate this framework in a web agent based on the ReAct format, WebDancer.
Empirical evaluations on the challenging GAIA and WebWalkerQA benchmarks demonstrate the strong performance of WebDancer, achieving considerable results and highlighting the efficacy of our training paradigm. 
Further analysis of agent training provides valuable insights and actionable, systematic pathways for developing more capable agentic models.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
*   **研究背景与问题**：现实世界中的复杂问题（如深度研究）需要智能体进行深度的信息检索和多步推理。现有系统（如ChatGPT Deep Research）展示了强大的自主研究潜力，但社区在构建此类智能体时面临核心挑战：
    *   **数据匮乏**：缺乏高质量、细粒度、反映真实用户意图和丰富交互上下文的浏览数据。
    *   **轨迹可靠性**：难以构建支持长程推理和任务分解的可靠行为轨迹。
    *   **训练泛化性**：现有的监督微调（SFT）或强化学习（RL）范式无法完全、高效地挖掘信息检索行为的潜力，尤其在面对分布外（OOD）的复杂网络环境时泛化能力不足。
*   **核心目标**：本文旨在**从数据驱动和训练阶段的视角**，提出一种系统性的端到端范式，用于“从零开始”构建能够进行自主多轮信息检索的网络智能体。其核心是通过构建高质量数据和设计两阶段训练（SFT+RL），解锁模型在复杂网络环境中的自主信息检索能力。

### 2. 论文提出的方法论
论文将构建端到端网络智能体的流程抽象为四个关键阶段，其核心思想是“数据合成 -> 轨迹采样 -> 监督微调冷启动 -> 强化学习泛化”。

*   **阶段一：深度信息检索数据集合成（§2.1）**
    *   为解决高质量问答对不足的问题，提出了两种数据合成方法，旨在生成需要多步推理的复杂问题。
    *   **CRAWL QA**: 模拟人类浏览行为，递归爬取知识性网站（如wiki、arxiv）的根页面及其子页面内容，利用GPT-4o基于爬取信息，按照预设问题类型（如COUNT、MULTI-HOP）来合成问答对。
    *   **E2HQA**: 一种从易到难（easy-to-hard）的问答对合成策略。从一个简单的、答案唯一的事实查询问题（SimpleQA风格）开始，每次迭代都提取问题中的实体进行搜索，获取新信息后，用大模型（LLM）将该信息重写为新的子查询来替换原实体，从而逐步将简单问题复杂化为多跳问题，同时保证答案不变。

*   **阶段二：智能体轨迹拒绝采样（§2.2）**
    *   **智能体框架**: 基于ReAct范式，动作空间限制为两个核心操作：`search`（搜索）和`visit`（点击/访问网页）。每步交互由`Thought-Action-Observation`组成。
    *   **思维链（CoT）构建**:
        *   **Short-CoT**: 使用强大的指令模型（GPT-4o）在ReAct框架下直接收集轨迹。
        *   **Long-CoT**: 在每步决策时，为强推理模型（QwQ-Plus）提供历史动作和观察（但屏蔽前序思考），让其生成包含复杂推理过程的思考（`<reasoning_content>`）作为当前步的`Thought`。
    *   **轨迹过滤**: 采用三级漏斗式过滤：
        1.  **有效性控制**: 过滤不遵循ReAct格式的响应。
        2.  **正确性验证**: 用GPT-4o判断最终答案是否正确，只保留正确轨迹。
        3.  **质量评估**: 先基于规则过滤幻觉、严重重复等问题，再基于提示词评估轨迹是否满足“信息不冗余”、“目标对齐”、“逻辑推理准确”等标准。

*   **阶段三：智能体监督微调（§3.1）**
    *   将过滤后的高质量ReAct轨迹格式化为`<think>...</think>`、`<tool_call>...</tool_call>`、`<tool_response>...</tool_response>`等标签包围的序列。
    *   在计算损失函数时，**屏蔽来自环境的观察（Observation）部分**的损失，仅对模型自主生成的思考和行动部分进行优化，以避免外部反馈干扰模型学习。

*   **阶段四：智能体强化学习（§3.2）**
    *   **算法**: 采用**解耦裁剪与动态采样策略优化（DAPO）** 算法。其关键机制是**动态采样**，它能识别并过滤掉SFT阶段无法利用的低质量或噪声样本（如准确率为0%或100%的提示），从而提高数据效率和策略的鲁棒性。
    *   **动作执行**: 在ReAct框架下，模型在线生成思考、调用工具、接收环境反馈，形成完整的交互循环，以此进行滚动（rollout）。
    *   **奖励设计**: 采用复合奖励函数 `R = 0.1 * score_format + 0.9 * score_answer`。
        *   `score_format`: 检查输出格式和工具调用的JSON有效性。
        *   `score_answer`: 鉴于许多答案难以用规则匹配，采用LLM-as-Judge（Judge模型`M_j`）进行二元判断，若模型回答与参考答案一致则为1，否则为0。

### 3. 实验设计
*   **评估基准**: 在两个挑战性的深度信息检索基准上进行评估：
    *   **GAIA**: 评估通用AI助手在复杂信息检索任务上的能力，使用其文本子集的验证集（103个问题）。
    *   **WebWalkerQA**: 专门评估深度网络信息检索，使用其测试集（680个问题）。
    *   还额外在更难的 **BrowseComp** (英文)和 **BrowseComp-zh** (中文) 基准上进行了测试。
*   **对比方法**:
    *   **非智能体 (No Agency)**: 直接使用基础模型（Qwen、GPT-4o、DeepSeek-R1等）或结合检索增强生成（RAG）进行问答。
    *   **闭源智能体框架**: OpenAI Deep Research (DR)。
    *   **开源智能体框架**: Search-o1、WebThinker、R1-Searcher等。
    *   **ReAct智能体框架**: 在不同基座模型（Qwen-2.5-7B, 32B, QwQ-32B, GPT-4o）上实现的原生ReAct基线 (`Vanilla ReAct`) 和本文提出的 `WebDancer`。

### 4. 资源与算力
*   **硬件配置**: 所有实验在配备了 **8 块 NVIDIA H20 (96GB)** GPU 的32个节点上进行。

### 5. 实验数量与充分性
论文进行了较为全面的实验验证和消融分析：
*   **主实验**: 在GAIA和WebWalkerQA两个基准上，对比了4大类、十余种方法，覆盖了不同规模的指令模型和推理模型。
*   **消融实验**:
    1.  **数据效率分析**: 对比了仅使用开源数据、仅使用CRAWL QA、仅使用E2HQA以及全部混合数据的效果，验证了合成数据及高质量过滤的重要性。
    2.  **CoT知识迁移实验**: 对比了在Short-CoT和Long-CoT数据上训练不同模型（指令模型 vs 推理模型）的效果，分析了推理模式的迁移性。
    3.  **训练阶段有效性**: 对比了仅SFT、仅RL、以及SFT+RL两阶段训练的性能，证明了冷启动的必要性，并展示了RL训练过程中`Pass@3`和`Consistency@3`指标的稳定提升。
    4.  **智能体行为分析**: 分析了RL对推理长度和动作次数的影响，以及在不同解码温度下智能体性能的稳定性，揭示了网络环境的非稳态特性。
*   **评估指标**: 使用`Pass@1`, `Pass@3`, `Consistency@3`等多维度指标，评估了性能的稳定性和一致性，使得评估更为客观。

### 6. 论文的主要结论与发现
1.  **框架有效性**: 提出的四阶段训练范式（数据合成 -> SFT -> RL）是有效的，`WebDancer`在GAIA和WebWalkerQA上显著优于原生ReAct基线，并超越了部分现有开源框架，证明了方法的优越性。
2.  **冷启动至关重要**: 仅使用RL无法有效学习多步工具调用，SFT冷启动为后续的RL优化提供了必要的格式遵循和基本行为范式。
3.  **数据质量驱动**: 高质量、多样化的复杂问答对是训练有效智能体的关键。论文提出的`CRAWL QA`和`E2HQA`合成方法能有效提升数据质量和难度。
4.  **推理模式迁移性**: 强推理模型（LRM）的长思维链（Long-CoT）模式能显著增强同模型自身的性能，但直接迁移到小型指令模型上效果有限，且可能引入重复、超长等问题。
5.  **RL促进泛华**: RL不仅提升了模型性能，还促使其产生更长的推理过程和更复杂的智能体行为，增强了在动态、开放环境下的泛化能力。

### 7. 优点
*   **系统性与可扩展性**: 提供了一个从数据合成到算法训练的全链路、模块化框架，为社区贡献了清晰的研究范式。
*   **数据创新性**: 提出的`CRAWL QA`和`E2HQA`方法能自动化、可扩展地生成具有不同深度的复杂信息检索任务，有效缓解了训练数据瓶颈。
*   **训练策略合理**: 两阶段（SFT+RL）的训练设计符合直觉且有效，SFT负责格式对齐和行为初始化，RL负责探索策略空间和提升泛化性，二者互补。
*   **技术细节扎实**: 对轨迹采样、损失屏蔽、动态采样RL、基于LLM-Judge的奖励设计等技术细节的处理体现了深入的工程洞察。
*   **分析深入**: 不仅汇报了性能，还对数据效率、思维链迁移、RL训练动态、环境不确定性等进行了细致分析，加深了对智能体学习的理解。

### 8. 不足与局限
*   **动作空间有限**: 目前仅集成了“搜索”和“访问”两个基础工具，对于需要更复杂交互（如表单填写、代码执行、文件操作）的任务无法应对，限制了其作为通用智能体的潜力。
*   **任务类型单一**: 主要聚焦于短答案的问答任务。对于长文研究、报告生成等开放式、长序列的生成任务，其奖励建模和评估体系面临巨大挑战。
*   **数据利用效率**: RL阶段实际只利用了5,000个问答对，大部分合成数据未能充分利用，如何在海量数据上高效地进行RL仍有待探索。
*   **训练成本高昂**: RL阶段的在线滚动（rollout）过程涉及多轮工具调用和模型生成，计算和时间开销巨大，限制了迭代速度和规模化。
*   **推理模式局限**: 模型目前仅在单一思维链类型（Short或Long）上训练，缺乏动态控制推理深度的能力。同时在工具调用中可能产生幻觉（调用不存在的工具）或冗余动作。

（完）
