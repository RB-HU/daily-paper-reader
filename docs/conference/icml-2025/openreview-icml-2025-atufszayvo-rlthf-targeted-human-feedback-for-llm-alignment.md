---
title: "RLTHF: Targeted Human Feedback for LLM Alignment"
title_zh: RLTHF：面向LLM对齐的针对性人类反馈
authors: "Yifei Xu, Tusher Chakraborty, Emre Kiciman, Bibek Aryal, Srinagesh Sharma, Songwu Lu, Ranveer Chandra"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ATUfSZayVo"
tags: ["query:fla"]
score: 8.0
evidence: 人机混合RLHF框架，策略性选择难样本进行人工标注，以低成本实现全人水平对齐。
tldr: 提出RLTHF框架，通过奖励模型分布识别LLM难以标注的样本，结合战略性人类修正，以最小成本达到完全人类标注水平的对齐。在HH-RLHF和TL;DR数据集上验证了效果。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1509, \"height\": 682, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1649, \"height\": 388, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 773, \"height\": 936, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 834, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1760, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-atufszayvo/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1655, \"height\": 1106, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1765, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 758, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1810, \"height\": 1145, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1800, \"height\": 1486, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 807, \"height\": 193, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1635, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-atufszayvo/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1782, \"height\": 316, \"label\": \"Table\"}]"
motivation: 高质量人类标注成本高，AI反馈泛化性有限，限制了RLHF的应用。
method: 提出RLTHF，先用LLM进行初始对齐，再利用奖励模型分布识别易错样本，选择性引入人类标注进行迭代优化。
result: 在对话和摘要数据集上以少量人类标注达到全人类标注水平。
conclusion: RLTHF显著降低对齐成本，为高效RLHF提供了可行方案。
---

## Abstract
Fine-tuning large language models (LLMs) to align with user preferences is challenging due to the high cost of quality human annotations in Reinforcement Learning from Human Feedback (RLHF) and the generalizability limitations of AI Feedback. To address these challenges, we propose RLTHF, a human-AI hybrid framework that combines LLM-based initial alignment with selective human annotations to achieve full-human annotation alignment with minimal effort. RLTHF identifies hard-to-annotate samples mislabeled by LLMs using a reward model's reward distribution and iteratively enhances alignment by integrating strategic human corrections while leveraging LLM's correctly labeled samples. Evaluations on HH-RLHF and TL;DR datasets show that RLTHF reaches full-human annotation-level alignment with only 6-7% of the human annotation effort. Furthermore, models trained on RLTHF's curated datasets for downstream tasks outperform those trained on fully human-annotated datasets, underscoring the effectiveness of RLTHF.

---

## 论文详细总结（自动生成）

好的，以下是对论文《RLTHF: Targeted Human Feedback for LLM Alignment》的结构化中文总结。

### 1. 论文的核心问题与整体含义

-   **核心问题**：大型语言模型对齐中，基于人类反馈的强化学习成本高昂、数据标注质量难以保证，而单纯依赖AI反馈又存在泛化性差、难以处理复杂样本等局限。
-   **整体含义**：论文旨在探索一种高效且高质量的人机混合对齐方案，通过最低限度的人工干预，使模型的对齐效果达到甚至超越使用全量人工标注数据的水平。

### 2. 论文提出的方法论

-   **核心思想**：RLTHF（Reinforcement Learning from Targeted Human Feedback）利用奖励模型在训练数据上的奖励分布来区分“易标注”和“难标注”样本，进而仅对LLM可能标注错误的困难样本进行人工修正，实现从粗到精的迭代对齐。
-   **关键技术与流程**：
    -   **初始对齐**：使用通用LLM（如GPT-4o）对无标注偏好数据集进行初步标注，建立粗粒度的任务理解。
    -   **迭代对齐增强**：
        1.  **训练奖励模型**：在当前标注数据集上训练一个奖励模型。
        2.  **分析奖励分布**：计算所有样本对的奖励分数差，并按从大到小排序，生成奖励分布曲线。
        3.  **定位关键样本**：
            -   **高置信正确样本**：位于曲线左上区域（高奖励差），LLM很可能标注正确。
            -   **高概率错误样本**：位于曲线右下区域（低或负奖励差），LLM很可能标注错误，可直接翻转其偏好标签。
            -   **困难样本**：位于曲线右下方，需要人工审核。
        4.  **选择性人工标注与数据构建**：通过检测曲线的一阶导数识别“肘部”和“膝部”点来界定区域。从“反射点”开始向左进行人工标注。然后，结合人工标注结果、LLM正确标注样本以及翻转标签的样本，构建下一轮训练集。
        5.  **迭代训练**：重复上述步骤，每轮训练新的奖励模型，逐步逼近真实人类偏好。引入**回退比** 和**放大比** 两个超参数，分别控制数据集的纯净度和人工标注样本的影响力。同时，采用**随机分片**技术，仅对一个子集进行迭代优化，然后由最终奖励模型标注全量数据，以最大化标注效率。
    -   **知识迁移**：将迭代优化得到的偏好数据集或最终奖励模型应用于下游任务的对齐训练（如DPO或PPO）。

### 3. 实验设计

-   **数据集**：
    -   **HH-RLHF**：Anthropic的“有帮助且无害”人类偏好数据集（约16.1万训练样本）。
    -   **TL;DR**： Reddit帖子的摘要数据集及对应的人类偏好数据（约9.3万训练样本）。实验中对原始人类偏好标签中的噪声进行了翻转处理。
-   **对比基准**：
    -   **完全AI标注**：仅使用GPT-4o或GPT-4o-mini的标注。
    -   **随机人类标注**：在AI标注基础上，随机选择与RLTHF等量样本进行人工标注。
    -   **完全人类标注**：使用全量人工标注数据。
-   **评估指标**：
    -   **偏好准确率**：奖励模型在单独测试集上的预测准确率。
    -   **下游任务胜率**：使用对齐后的模型进行DPO训练，然后通过AlpacaEval（以Claude 3.5 Sonnet为裁判）对比其输出相对于SFT基线的胜率。

### 4. 资源与算力

-   **硬件配置**：所有模型训练（监督微调、奖励建模、DPO）均在一个包含 **8块NVIDIA A100 GPU** 的节点上完成，并使用了DeepSpeed加速。
-   **训练时长与成本**：
    -   奖励模型在**全量数据集**上单次迭代训练约需**8小时以内**，在**1/4子集**上则**少于2小时**。
    -   论文成本分析案例中，假设按Azure的实例价格（32.77美元/小时），采用1/4分片、7轮迭代、6%人工标注，RLTHF的总成本相比全人工标注方案可**降低84.0–86.0%**。

### 5. 实验数量与充分性

-   **实验组数较多，覆盖全面**：
    -   在**2个不同领域的数据集**（对话和摘要）上进行了完整实验。
    -   对比了**2种初始LLM**（GPT-4o和GPT-4o-mini）下的性能。
    -   针对**分片大小（4种）**、**放大比（4种）**、**回退比（4种）**、**标注批次大小（3种）** 等关键超参数分别进行了受控变量实验。
    -   实施了**消融实验**，验证了无人类反馈的“自我提升”、去除放大机制和回退机制等组件的作用。
-   **实验公平性与客观性**：对比方法设置合理，在等量人工标注条件下比较了随机选择与RLTHF的策略；下游任务评估采用第三方裁判模型（Claude）来规避自我增强偏差；对数据集本身的人类标注噪声进行了预处理，保证了评估的客观性。

### 6. 论文的主要结论与发现

-   **高效的对齐性能**：RLTHF仅使用**6–7%** 的人类标注量，就能使奖励模型的偏好准确率达到或接近全人类标注的水平，且下游任务的DPO模型**胜率甚至超越了用全人类标注数据集训练的模型**。
-   **策略的有效性**：与随机选择样本进行人工标注相比，RLTHF的针对性策略在投资回报率上有巨大优势（如HH-RLHF上高15.9倍）。
-   **对初始模型鲁棒**：即使初始AI标注器质量较低，RLTHF也能通过更积极地修正错误，快速缩小差距并达到同等最终性能。
-   **组件必要性**：单纯的LLM自我提升（无人类反馈）不足以实现与人类偏好对齐，而数据放大和回退机制是RLTHF取得成效的关键。
-   **最优实践建议**：迭代初期应采用较高的放大比和回退比，随后逐步降低；将标注预算分为少量批次进行迭代优于一次性全部标注；适中的分片大小（如1/4）能平衡效率与最终效果。

### 7. 优点

-   **创新性强**：首次提出利用奖励分布曲线来系统性地定位LLM易错样本，为人机混合标注提供了新思路。
-   **成本效益极高**：大幅降低了获取高质量人类对齐数据的门槛，有明确的经济价值。
-   **方法设计完善**：通过迭代训练、分片处理、超参数控制等手段，形成了一套可落地的端到端流程。
-   **实验扎实、论证充分**：多维度的对比实验、超参数分析和消融实验，有力地支撑了核心主张。

### 8. 不足与局限

-   **依赖初始对齐**：方法假设通用LLM具备粗略的任务理解能力，若初始标注完全错误，可能需要先优化提示词，这在实际受限场景（如无法查看全部数据）下可能成为瓶颈。
-   **超参数具有一定的经验性**：“肘部/膝部”点的检测以及α、β超参数的设定，虽给出了推荐方案，但在新任务上可能仍需一定的试错成本。
-   **评估数据的噪声处理**：实验中对原始人类偏好数据集进行了基于奖励模型的标签翻转来消除噪声，这一预处理步骤可能影响最终结论的普适性，实际应用中人类噪声或偏见是客观存在的。
-   **任务类型有限**：仅在对话和文本摘要两个任务上验证，其在更复杂推理、代码生成或多模态对齐等场景下的表现有待进一步探索。

（完）
