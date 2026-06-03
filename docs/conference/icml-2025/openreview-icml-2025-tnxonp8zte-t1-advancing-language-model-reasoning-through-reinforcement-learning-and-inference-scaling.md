---
title: "T1: Advancing Language Model Reasoning through Reinforcement Learning and Inference Scaling"
title_zh: T1：通过强化学习与推理扩展推进语言模型推理
authors: "Zhenyu Hou, Xin Lv, Rui Lu, Jiajie Zhang, Yujiang Li, Zijun Yao, Juanzi Li, Jie Tang, Yuxiao Dong"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=tnxONP8zTE"
tags: ["query:fla"]
score: 9.0
evidence: 基于RL和过采样的后训练扩展推理，直接后训练技术
tldr: T1提出了一种强化学习驱动的后训练方法，首先用融入试错与自验证的合成思维链数据初始化大语言模型，再通过过采样策略扩大探索，促使RL训练有效扩展推理能力。在开源LLM上的实验结果显示，T1实现了推理性能随计算量增加而提升的推理规模扩展现象。该研究验证了RL在后训练中可拓展LLM推理，为金融等领域的智能体开发提供了新的训练范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 681, \"height\": 464, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 857, \"height\": 371, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1746, \"height\": 459, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 741, \"height\": 464, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 738, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1765, \"height\": 388, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1761, \"height\": 415, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1135, \"height\": 500, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-tnxonp8zte/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 549, \"height\": 411, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-tnxonp8zte/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 916, \"height\": 751, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tnxonp8zte/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 832, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-tnxonp8zte/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 829, \"height\": 265, \"label\": \"Table\"}]"
motivation: 现有方法主要依赖模仿学习，无法有效实现测试时推理扩展，需要RL驱动的自探索后训练。
method: 用融合试错与自验证的合成思维链数据初始化，再以过采样增强RL训练。
result: 在多个推理基准上，T1使开源LLM实现了随推理计算量增加性能提升的扩展能力。
conclusion: 证明了通过RL可扩展LLM推理，为金融智能体的后训练提供了可行路径。
---

## Abstract
Large language models (LLMs) have demonstrated remarkable capabilities in complex reasoning tasks. However, existing approaches mainly rely on imitation learning and struggle to achieve effective test-time scaling. While reinforcement learning (RL) holds promise for enabling self-exploration, recent attempts yield modest improvements in complex reasoning. In this paper, we present T1 to scale RL by encouraging exploration and understand inference scaling. We first initialize the LLM using synthesized chain-of-thought data that integrates trial-and-error and self-verification. To scale RL training, we promote increased sampling diversity through over-sampling. We demonstrate that T1 with open LLMs as its base exhibits inference scaling behavior and achieves superior performance on challenging math reasoning benchmarks. More importantly, we present a simple strategy to examine inference scaling, where increased inference budgets directly lead to T1’s better performance without any additional verification. The model weights and training data are publicly available at https://github.com/THUDM/T1.

---

## 论文详细总结（自动生成）

# 论文深度分析：T1—通过强化学习与推理扩展推进语言模型推理

## 1. 研究动机与核心问题

*   **现有方法的局限**：当前提升大语言模型（LLM）推理能力的主流方法严重依赖**模仿学习**（如SFT，通过模仿高质量的思维链数据）。这类方法虽然有效，但难以实现**测试时扩展**，即无法通过在推理阶段增加计算量来稳定提升性能。
*   **强化学习的潜力与挑战**：强化学习（RL）理论上能通过自我探索和反馈学习，让模型发展出超越模仿数据的推理策略，具备实现推理扩展的潜力。然而，社区中已有的RL尝试在复杂推理任务上带来的提升相对有限，且在训练扩展性方面表现不佳。
*   **推理扩展的理解缺失**：以往通过“重复采样+验证器”的方式实现的推理扩展，并未真正改进模型自身的推理能力，与理想的“深度思考”模式相悖。如何让模型自主产生更长的推理过程并直接获得更优结果，是一个未被充分探索的难题。

**论文核心目标**：探索并解决上述挑战，提出**T1**模型。T1旨在通过**扩展RL训练**来鼓励模型的自我探索，从而激发出**真正的推理扩展行为**，并系统地研究训练计算量、推理计算量与模型性能之间的关系。

## 2. 方法论：T1的构建与缩放策略

T1的核心思想是**在RL训练中最大化探索，同时使用适当的惩罚维持训练的稳定性**。其框架分为两个关键阶段。

### 2.1 初始化策略模型：融合试错与验证的SFT

*   **超越“正确轨迹”**：传统SFT数据生成通常只保留正确的推理步骤，忽视了“错误-反思-纠正”这一关键的思考过程。
*   **构造多样化CoT数据**：
    1.  **多模型采样与评判**：对每个问题，从不同LLM中生成多个尝试解答（`y_1, ..., y_N`），并根据真值标签判断其对错。
    2.  **生成批评与反思**：使用一个LLM对每个尝试进行深度分析。对于**错误的尝试**，识别其错误本质并反思原因；对于**正确的尝试**，则执行验证过程以确保结论的可靠性。
    3.  **合成最终推理路径**：再次使用LLM将所有经过修正和验证的尝试（`{x, y_i, c_i}`）整合成一个单一的输出，该输出完整地展示了从最初的错误尝试到最终正确解决方案的“试错”过程。最后，对这条CoT进行抽象和重写，作为高质量的SFT训练数据。

### 2.2 在RL训练中鼓励探索

*   **过采样与高温度策略（Scaling Response Sampling）**：
    *   **大量采样**：对每个提示（prompt），采样**K=64**个回复（远高于常见的4-8个），以尽可能覆盖广泛的推理路径。
    *   **高温采样**：采用高采样温度（τ>1，如1.2），压平概率分布，增加低频词被采样的概率，从而强制模型探索更多样化的回答序列，避免模式坍塌。

*   **优化策略调整**：
    *   **Leave-one-out奖励归一化**：采用RLOO方法对奖励进行归一化处理（公式 `\bar{r}_i = r_i - \frac{1}{k-1} \sum_{j \neq i} r_j`），让模型能从优胜者而不是绝对奖励中学习。
    *   **熵奖励**：在RL损失函数中加入**熵奖励项**（公式 `L = L_{RL} - \alpha H(\pi(\cdot|x))`），直接激励模型在词元生成层面的不确定性，鼓励它探索低概率但可能通往正确答案的路径。
    *   **动态KL归一化**：
        *   **On-policy KL归一化**：对KL散度值也进行类似奖励的“留一法”归一化，使得对参考模型的偏离相对于同一问题的其他回复而言，保持在一个动态平衡中。
        *   **指数移动平均参考模型**：使用EMA动态更新参考模型 `\pi_{ref}`，防止参考模型过时，使其成为更平滑且稳定的正则化锚点，避免策略模型在KL约束下优化受限。

### 2.3 惩罚意外模式以维持稳定

为了在鼓励海量探索的同时防止训练崩溃，T1实现了一个明确的惩罚机制：
*   **负面奖励（-1）**：对检测到特定不良模式的回复直接赋予奖励-1。
*   **检测目标**：
    1.  **重复和过长文本**：内容和结构上的无意义重复。
    2.  **垃圾文本**：混合多语言或乱码等。
*   **实现方式**：结合基于规则的检测和基于模型困惑度的过滤，以语义连贯性为标准监控生成的流畅性。

## 3. 实验设计

*   **基座模型**：GLM-4-9B、Qwen2.5-14B、Qwen2.5-32B。
*   **评估基准与指标**：
    *   **核心推理基准**：AIME2024 (竞赛级数学)、MATH500 (竞赛级数学子集)、Omni-MATH-500 (奥林匹克级多样化数学)、GPQA (研究生级科学推理)。
    *   **评估指标**：主要使用**Pass@1**（单次生成准确率）。
*   **对比基线**：
    *   **通用/专用闭源模型**：GPT-4o, Claude-3.5-Sonnet, o1-preview。
    *   **开源/指令微调模型**：Llama-3.3-70B-Instruct, Qwen2.5-Math-7B-Instruct, QwQ-32B-preview。
    *   **自身消融基线**：T1-SFT（仅进行第2.1节的SFT，不进行RL训练）、不同RL训练步数（如30%、60%步数）下的模型。

## 4. 资源与算力（文中未明确提及细节）

*   论文**未提供**训练T1具体使用的GPU型号、数量、算力消耗或具体总训练时长等详细信息。此为一个缺失项。

## 5. 实验数量与充分性分析

*   **实验类型丰富**：进行了主实验、多维度消融实验和行为模式分析。
    *   **主实验**：在**4个基准**、**3种不同参数量级**的基座模型上全面评估了T1的最终性能。
    *   **消融实验**：
        *   **探索策略消融**：系统分析了RL训练中**采样数量K**（4, 16, 64）、**采样温度**（0.9, 1.1, 1.2, 1.3）、**最小p采样**、**惩罚策略**（有/无）的影响。
        *   **扩展行为分析**：设计了精巧的实验来量化**推理扩展性**（通过截断思维链并测量性能变化）和**训练-推理扩展关系**（观察不同RL训练阶段下推理扩展曲线的变化）。
    *   **行为模式分析**：对模型中“反思”、“尝试新方法”、“验证”等行为模式的出现频率进行统计，并对关键推理步进行词频分析。
*   **实验公平性与充分性**：实验设计**非常充分且客观**。不仅在多个公开基准和基线模型上进行了对比，还通过详尽的消融实验和内在行为分析，为论文提出的每个核心组件（扩散SFT、过采样、高温度、熵奖励、KL归一化、惩罚）提供了坚实的证据支持。分析的维度从现象（精度、生成长度）深入到本质（KL-奖励关系、思维模式词频），论证环环相扣。

## 6. 主要结论与发现

1.  **T1性能卓越**：T1（Qwen2.5-32B）在MATH500（92.4%）、AIME（50.6%）、Omni-MATH-500（49.6%）等基准上达到了顶尖水平，显著优于所有对比的开源模型，并超越了QwQ-32B-Preview，在部分指标上接近或超越了o1-preview。
2.  **成功实现推理扩展**：T1首次在开源模型上明确演示了**真正的推理扩展行为**，即**单次生成更长的、包含更多推理的回复，能直接且无痛地转化为更高的正确率**，无需依赖额外的验证模型。
3.  **训练扩展与推理扩展正相关**：更多的RL训练步骤不仅能提升最终性能，更能**增强模型的推理扩展曲线斜率**。这意味着加大对RL训练的投入，能激活并强化模型利用更多推理算力的能力。
4.  **探索是RL推理缩放的关键**：大量过采样和高温度是RL训练有效扩展和维持稳定的关键。低温度或无惩罚的策略极易导致训练崩溃（如产生大量乱码、重复文本）。
5.  **反思能力是推理能力提升的核心**：通过行为分析发现，“等一等”、“也许”、“换种方法”等标志着反思和探索的词汇频繁出现在将错误答案转为正确的关键推理步骤中。

## 7. 论文优点

*   **问题定义清晰且前沿**：精准地指出了现有SFT方法的根本局限（无法实现推理缩放）和RL方法的瓶颈，并聚焦于解决“测试时计算缩放”这一关键且有潜力的方向。
*   **方法创新且系统**：所提出的T1框架构建了一个完整的、可扩展的RL训练方案。其亮点在于**SFT数据构建中整合了“试错-反思”全流程**，以及在RL训练中**系统性使用过采样、熵奖励、动态KL归一化和负面惩罚“组合拳”**来平衡探索与稳定，思路清晰，逻辑严谨。
*   **实验评估深刻**：不仅仅停留在性能对比，而是设计了**巧妙的实验来分析“推理扩展”这一抽象行为**，通过截断思维链等方法来量化验证核心主张，分析视角从“结果”延伸到了“过程”。
*   **可复现性好**：基于开源基座模型，并承诺公开模型权重与训练数据，对整个开源研究和社区发展具有重要价值。

## 8. 不足与局限

*   **算力成本不透明**：作为一篇强调“缩放”的论文，未披露实现其效果所需的**硬件配置和训练时长**，使得其他研究者难以评估其复现成本和应用可行性。
*   **推理任务的范围相对窄**：该方法主要针对**数学推理**任务进行优化和评估，虽然在GPQA上展示了泛化能力，但未涉及代码生成、多跳问答、逻辑谜题等更广泛的推理场景。
*   **推理扩展的控制方式简化**：虽然证明了长推理有效，但截断推理过程的测量方法略显原始。模型自身尚不能根据问题难度**自适应地**决定其思考长度，这可能是通向更高效推理系统的下一步。
*   **潜在的数据偏差**：用于SFT的思维链数据通过调用LLM合成，可能存在风格或内容上的隐性偏差，这可能会影响到RL训练的上限。

（完）
