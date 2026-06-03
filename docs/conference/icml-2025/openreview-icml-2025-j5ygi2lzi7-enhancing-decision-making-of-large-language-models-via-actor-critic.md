---
title: Enhancing Decision-Making of Large Language Models via Actor-Critic
title_zh: 利用演员-评论家增强大型语言模型的决策能力
authors: "Heng Dong, Kefei Duan, Chongjie Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=J5YGi2LzI7"
tags: ["query:fla"]
score: 8.0
evidence: LAC，LLM演员-评论家框架，通过Q值增强决策，是自主LLM智能体的后训练技术
tldr: 针对LLM在复杂决策中缺乏长远评估的问题，LAC框架利用评论家计算Q值来指导演员策略更新，实现可扩展的长程评判。该方法可直接用于金融对话智能体的后训练，提升交互质量。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1767, \"height\": 820, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1761, \"height\": 725, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1763, \"height\": 715, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1761, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1601, \"height\": 591, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1760, \"height\": 2230, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1763, \"height\": 728, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1764, \"height\": 602, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1759, \"height\": 660, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1740, \"height\": 1047, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1118, \"height\": 1109, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 615, \"height\": 1125, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-j5ygi2lzi7/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1761, \"height\": 540, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1642, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1662, \"height\": 275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1281, \"height\": 188, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1275, \"height\": 188, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1287, \"height\": 187, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1282, \"height\": 186, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1108, \"height\": 188, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1107, \"height\": 187, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1253, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1289, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1279, \"height\": 277, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1144, \"height\": 317, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 935, \"height\": 360, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1607, \"height\": 374, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1614, \"height\": 287, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1536, \"height\": 494, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1588, \"height\": 749, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1599, \"height\": 802, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-j5ygi2lzi7/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1109, \"height\": 189, \"label\": \"Table\"}]"
motivation: LLM在需要长期推理的决策任务中表现不佳，现有方法缺少准确的值估计。
method: 提出基于演员-评论家的框架LAC，用token logits计算Q值评估动作。
result: 在复杂决策场景中，LAC优于自回归生成方法。
conclusion: LAC为LLM智能体的后训练提供了一种有效的增强学习范式，适用于金融任务。
---

## Abstract
Large Language Models (LLMs) have achieved remarkable advancements in natural language processing tasks, yet they encounter challenges in complex decision-making scenarios that require long-term reasoning and alignment with high-level objectives. Existing methods either rely on short-term auto-regressive action generation or face limitations in accurately simulating rollouts and assessing outcomes, leading to sub-optimal decisions. This paper introduces a novel LLM-based Actor-Critic framework, termed LAC, that effectively improves LLM policies with long-term action evaluations in a principled and scalable way. Our approach addresses two key challenges: (1) extracting robust action evaluations by computing Q-values via token logits associated with positive/negative outcomes, enhanced by future trajectory rollouts and reasoning; and (2) enabling efficient policy improvement through a gradient-free mechanism. Experiments across diverse environments -- including high-level decision-making (ALFWorld), low-level action spaces (BabyAI-Text), and large action spaces (WebShop) -- demonstrate the framework’s generality and superiority over state-of-the-art methods. Notably, our approach achieves competitive performance using 7B/8B parameter LLMs, even outperforming baseline methods employing GPT-4 in complex tasks. These results underscore the potential of integrating structured policy optimization with LLMs’ intrinsic knowledge to advance decision-making capabilities in multi-step environments.

---

## 论文详细总结（自动生成）

好的，作为资深学术论文分析助手，我将基于提供的论文内容，以 Markdown 形式生成一份详细、结构化且客观的中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：大型语言模型（LLM）在处理需要长期规划和复杂推理的序贯决策任务时表现不佳。现有方法主要存在两种缺陷：
    *   **短视的生成**：直接利用LLM自回归生成下一步动作，缺乏长远规划能力，仅能做出局部最优的决策。
    *   **不准确的评估**：通过LLM模拟未来轨迹并评估结果来辅助决策，但这类方法高度依赖于模拟的准确性，一旦模拟偏离现实或评估不准，效果会大打折扣。
*   **整体含义**：本文旨在解决LLM先验知识与基于模拟的规划评估相互割裂的问题。论文提出了一种将两者有效融合的框架，通过结构化的策略优化，在利用LLM内在知识的同时，引入带有纠错机制的长远规划洞察，从而显著提升LLM智能体在复杂环境中的决策能力。

### 2. 论文提出的方法论

*   **核心思想**：提出名为 **LAC （LLM-based Actor-Critic）** 的框架。该框架将LLM作为**演员**（生成候选动作），并构建一个基于LLM的**评论家**（评估动作的长期价值）。通过在KL散度约束下优化演员策略，实现先验知识与长远价值评估的有效平衡。
*   **关键技术细节**：
    1.  **评论家（Critic）与 Q 值估计**：
        *   **连接成功概率**：将评论家的Q值与任务最终成功的概率关联起来，使用一个逻辑函数 $P(y_w|...) = 1 / (1 + \exp(-Q_{LLM}))$，使得Q值最大化等价于成功率最大化。
        *   **通过Token Logits计算Q值**：从LLM的内部信念中提取Q值。具体方法是将Q值转换为正/负标记（如“GOOD”/“BAD”）的概率比值对数：$Q_{LLM} = \log \frac{P(``GOOD")}{P(``BAD")}$。这种方法比直接让LLM输出数值评估更稳定。
        *   **结合长期规划与反思**：对每个候选动作，利用LLM作为前向世界模型 $f_{LLM}$ 预测未来轨迹 $u_i^t$。在预测轨迹后，先生成一个简短的反思（判断前序动作的优劣，类似于思维链），再基于此用正/负标记的logits计算最终的Q值。
    2.  **策略优化**:
        *   **无梯度更新**：将策略优化问题形式化为一个KL约束的最大化期望Q值问题。目标是找到一个新的策略 $\pi_{new}$，使其在最大化Q值的同时，不偏离原始LLM先验策略 $\pi_{LLM}$ 太远。
        *   **闭式解**：该优化问题存在闭式解：$\pi_{new}(a_i^t|g, h_t) \propto \pi_{LLM}(a_i^t|g, h_t) \exp(\alpha Q_{LLM}(g, h_t, a_i^t, u_i^t))$。其中，$\alpha$ 是控制偏离程度的超参数。通过这个公式，可以直接计算出每个候选动作的新概率，无需进行梯度反向传播。

### 3. 实验设计

*   **数据集/场景**：论文在三个覆盖不同行动空间的决策基准上进行了验证：
    *   **ALFWorld**：高层行动空间，家庭环境中的文本任务（如“把盐罐放进抽屉”），共134个评估任务。奖励为二元稀疏奖励（成功1分，失败0分）。
    *   **BabyAI-Text**：低层行动空间，8x8网格世界环境，智能体需通过6种基础动作完成指令（如“捡起红球”）。包含多种任务类型，评估50x6=300个任务。
    *   **WebShop**：潜在无限行动空间，模拟在线购物环境。要求根据指令购买商品，奖励是0到1之间的连续值。
*   **对比方法**：与多类SOTA基线方法进行了比较，包括直接生成动作的**ReAct**，以及结合了规划与评估的**RAP**、**ICPI**、**RAFA**和**LATS**。部分实验还包含了GPT-4+ReAct作为强力基线。
*   **基座模型**：实验采用了多种7B/8B参数级别的开源LLM，如**CodeLlama-7B**、**Mistral-7B**、**Gemma-7B** 和 **Llama-3-8B**，以验证方法的普适性。

### 4. 资源与算力

*   **训练**：评论家模块的微调使用了LoRA方法。在ALFWorld中使用了485对数据，BabyAI-Text中使用了418对数据，微调步数为**1，000步**，学习率为2.5e-5，批大小为2。此处**未明确说明微调使用的GPU数量和具体时长**。
*   **推理/评估**：
    *   使用单张 **A100 GPU (80GB)** 进行评估。
    *   **ALFWorld**：评估134个任务耗时约**10小时**。
    *   **BabyAI-Text**：根据任务类型不同，评估50个任务耗时约**4-10小时**。
    *   **WebShop**：评估100个任务耗时约**3-4小时**。

### 5. 实验数量与充分性

*   **实验数量**：实验设计非常全面，主要包括：
    1.  **主要性能实验**：在3个不同特点的基准数据集上，使用4种不同的LLM基座模型进行测试（至少12组独立实验），与5种以上基线方法进行对比。
    2.  **消融实验**：在ALFWorld和BabyAI-Text上，分别验证了框架中各个关键组件（策略优化、未来轨迹预测、反思、仅评论家）的贡献（至少4组消融实验）。
    3.  **统计分析**：进行了Q值与任务进度相关性分析、策略改进置信度分析。
    4.  **超参数与变体分析**：分析了超参数α的影响，对比了Q值的不同定义、反思与思维链（CoT）的差异、直接输出评估值等方法。
    5.  **额外实验**（附录中）：与更多基线（如微调策略、传统策略梯度、Decision Transformer）对比，并在Crafter基准上进行了初步实验。
*   **充分性与公平性**：实验非常充分，从多维度（不同行动空间、不同LLM基座、不同任务类型）验证了方法的有效性、鲁棒性和普适性。对比方法涵盖主流，评估设置（如温度设为0确保确定性）保证了公平性。消融实验清晰展示了各组件的价值。

### 6. 论文的主要结论与发现

1.  **LAC性能优越**：在所有三个基准测试中，LAC均一致性地超越了所有其他基线方法。更引人注目的是，使用7B/8B模型的LAC在某些复杂任务中的表现甚至超过了使用**GPT-4的ReAct方法**。
2.  **方法有效且普适**：LAC能有效整合LLM先验知识和基于规划的评估，其框架可以适配不同的LLM基座模型，并能在高层、低层和无限行动空间中均取得优异效果。
3.  **各组件不可或缺**：消融实验证明，策略优化、未来轨迹预测和反思组件都对最终性能有显著贡献。
4.  **计算有效性**：虽然LAC单步计算开销较高，但由于其决策更准确，完成任务所需总步数更少，因此总体的计算和时间成本反而低于许多基线方法。
5.  **内在机制合理**：统计分析表明，LAC估计的Q值能有效反映任务进展（成功轨迹中Q值递增），并且策略改进过程能根据先验策略和Q函数的置信度进行合理加权。

### 7. 优点

*   **方法创新性强**：提出了一种新颖且具原则性的方法，利用LLM自身token logits来估算Q值，避免了直接输出评估值的不稳定性，这是该框架的核心亮点。
*   **理论完备**：将策略改进形式化为KL约束优化问题并导出闭式解，既保证了策略的改进，又在理论上将先验与后验信息进行了优美的平衡（当α=0时退化为纯先验，α→∞时为纯评估）。
*   **性能显著，资源性价比高**：用相对小型的开源模型（7B/8B）实现了超越大模型（GPT-4）基线方法的性能，展示了极高的应用潜力和性价比。
*   **工程实现友好**：无梯度的策略优化方法，避免了复杂的梯度计算和反向传播，对LLM这种大规模模型来说，降低了工程实现和部署的门槛。

### 8. 不足与局限

*   **评论家微调依赖标注**：评论家的反思生成组件需要使用成功的和失败的轨迹进行微调，这需要人工或半人工地标注反思内容（如判断某步是“GOOD”还是“BAD”），引入了额外的数据标注成本。
*   **对推理型LLM适应性不佳**：论文初步实验表明，该方法在面对倾向于过度思考而非直接行动的推理型LLM（如DeepSeek-R1）时效果不佳，模型可能陷入无尽的推理而无法产出有效动作。
*   **连续奖励场景处理**：LAC的Q值设计基于二元（成功/失败）结果假设。虽然实验显示其在WebShop的连续奖励场景下依然有效，但其处理方式（将最高奖励视为成功）可能不够精细，离形成更具原则性的方法尚有距离。
*   **树搜索的简化**：为追求效率和简洁性，LAC仅为每个候选动作展开一个节点进行模拟。虽然效果不错，但论文也承认，引入更复杂的树搜索方法可能会提供更准确的评估，这在未来工作中值得探索。
*   **基础模型影响未完全解析**：LAC的性能与基座LLM本身的能力相关，但由于这些模型的训练细节通常不公开，难以对性能差异进行更深层次的分析。

（完）
