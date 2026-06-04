---
title: Self-Generated In-Context Examples Improve LLM Agents for Sequential Decision-Making Tasks
title_zh: 自我生成的上下文示例提升大语言模型智能体在序贯决策任务中的表现
authors: "Vishnu Sarukkai, Zhiqiang Xie, Kayvon Fatahalian"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=WdL3O58gde"
tags: ["query:fla"]
score: 9.0
evidence: 通过自我生成的上下文示例提升 LLM 智能体在序贯决策任务上的表现，属于智能体后训练技术。
tldr: "针对 LLM 智能体在序贯决策任务中需大量人工工程的问题，本文提出让智能体从自身成功经验中自动学习的方法：构建并优化自我生成轨迹数据库，作为未来任务的上下文示例。在 ALFWorld、Wordcraft 和 InterCode-SQL 三个基准上，该方法使性能大幅提升（如 ALFWorld 从 73% 升至 89%）。这项工作表明，简单的轨迹积累即可实现有效的智能体自我改进，为无监督的后训练 Agent 精化提供了新思路。"
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 515, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1439, \"height\": 390, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1439, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 931, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 924, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wdl3o58gde/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 465, \"height\": 451, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 667, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1321, \"height\": 796, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1453, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1171, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1453, \"height\": 977, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1275, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1565, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1447, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1170, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1181, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wdl3o58gde/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1315, \"height\": 409, \"label\": \"Table\"}]"
motivation: 现有 LLM 智能体需要大量特定任务的人工知识工程，缺乏自动从自身经验中学习的能力。
method: 构建并迭代优化自我生成的成功轨迹数据库，作为上下文示例注入智能体的推理过程。
result: "在三个多样化基准上取得显著性能提升，尤其在 ALFWorld 中精度从 73% 提高到 89%。"
conclusion: 无需人工干预的自我改进策略为智能体后训练提供了简单高效的方法，易于推广应用。
---

## Abstract
Improving Large Language Model (LLM) agents for sequential decision-making tasks typically requires extensive task-specific knowledge engineering—custom prompts, curated examples, and specialized observation/action spaces. We investigate a different approach where agents automatically improve by learning from their own successful experiences without human intervention. Our method constructs and refines a database of self-generated trajectories that serve as in-context examples for future tasks. Even naive accumulation of successful trajectories yields substantial performance gains across three diverse benchmarks: ALFWorld (73\% to 89\%), Wordcraft (55\% to 64\%), and InterCode-SQL (75\% to 79\%). These improvements exceed those achieved by upgrading from gpt-4o-mini to gpt-4o and match the performance of allowing multiple attempts per task. We further enhance this approach with two innovations: database-level curation using population-based training to propagate high-performing example collections, and exemplar-level curation that selectively retains trajectories based on their empirical utility as in-context examples. With these enhancements, our method achieves 93\% success on ALFWorld—surpassing approaches that use more powerful LLMs and hand-crafted components. Our trajectory bootstrapping technique demonstrates that agents can autonomously improve through experience, offering a scalable alternative to labor-intensive knowledge engineering.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义
- **研究背景**：当前提升 LLM 智能体在序贯决策任务上性能的方法依赖大量任务特定的知识工程，如定制提示词、人工精调示例、专门设计的观察/动作空间，这导致性能提升随人工投入线性增长，难以规模化。
- **核心问题**：能否让 LLM 智能体**无需人类干预，自动从自身成功经验中学习**，通过自我生成的上下文示例（in-context examples）实现性能自举？
- **整体含义**：提出一种以数据为中心的智能体自我进化路径，仅需少量初始人工示例，即可通过收集并优化成功轨迹数据库，使智能体在测试时使用单次尝试达到超越更强模型或多次尝试的效果，为可扩展、低人工成本的智能体后训练提供了新范式。

## 2. 方法论：核心思想与关键技术细节
- **基础智能体设计**：采用改进的 ReAct 风格智能体，包含规划（Plan）→ 推理（Reason）→ 行动（Act）循环，并对每一步决策动态检索最相关的轨迹片段作为上下文示例，而非固定全局示例。
- **核心算法流程**：
  1. **Traj‑Bootstrap**：从少量人工示例初始化的数据库 \( D \) 开始，智能体在训练任务上运行，仅将成功轨迹（含目标、计划、观察-推理-行动序列）积累到数据库中，形成“成功经验→解决新任务→更多成功经验”的正反馈循环。
  2. **+DB‑Curation**（数据库级筛选）：维护 \( N \) 个并行数据库实例。当达到一定训练任务数（如 10、20、40…）时，评估各库近期成功率，淘汰表现最差的数据库并用最优库副本替换，以此传播具有协同效应的完整数据库（考虑轨迹间的覆盖性与多样性）。
  3. **+Exemplar‑Curation**（示例级筛选）：对所有并行库中每条轨迹计算**检索加权质量指标**：
     \[
     Q(\tau) = \frac{\sum_{i \in R(\tau)} o_i \cdot f_i(\tau)}{\sum_{i \in R(\tau)} f_i(\tau)}
     \]
     其中 \( R(\tau) \) 为轨迹 \( \tau \) 被检索的任务集合，\( o_i \in \{0,1\} \) 为任务 \( i \) 的成功与否，\( f_i(\tau) \) 为轨迹 \( \tau \) 在任务 \( i \) 中的检索频次。该值近似“价值函数”，衡量轨迹作为示例的有效性。最终从每个任务的所有成功轨迹中选取最高质量轨迹构建复合数据库。
  4. **组合方法**：将数据库级和示例级策展结合，形成 `+DB+Exemplar‑Curation`。
- **检索机制**：多关键字的 KNN 检索（如目标、计划、推理），使用 all‑MiniLM‑L6‑v2 通用嵌入；对状态级检索还采用滑动窗口提供上下文。

## 3. 实验设计
- **评估基准**：
  - **ALFWorld**：文本式导航与物体操作（6 类任务，3500 训练 / 134 测试）。
  - **InterCode‑SQL**：交互式 SQL 查询生成（800 训练 / 234 测试，10 步内提交）。
  - **Wordcraft**：类似“Little Alchemy”的元素合成推理（4000 训练 / 500 测试，最多 4 步）。
- **对比方法**：
  - **Fixed‑DB**：仅用固定的人工示例库，不做数据库自增长。
  - **Traj‑Bootstrap** 及其与 `+DB‑Curation`、`+Exemplar‑Curation` 的组合。
  - 对比的基线包括：升级 LLM（GPT‑4o），测试时多次尝试（pass@k），层级化方法（Autoguide），以及利用特定任务观察/动作空间的方法（AutoManual）。
- **评估指标**：测试集任务成功率（平均 ± 标准差，5 个随机种子）；同时报告 pass@k、跨模型迁移、微调后性能、成功率预测 AUROC 等。

## 4. 资源与算力
- **硬件**：1 块 NVIDIA A5000 GPU（24 GB），64 GB 系统内存；GPU 仅用于嵌入计算（占比不足 5% 总计算量）。
- **主要计算**：通过 OpenAI API 调用 LLM（GPT‑4o‑mini），API 调用量约为：
  - ALFWorld：约 200 万次
  - InterCode‑SQL：约 20 万次
  - Wordcraft：约 50 万次
- **总成本**：约 $3000 USD（含 API 费用）；训练后单次推理成本极低（ALFWorld 约 $0.034/任务），对比 GPT‑4o 有明显成本优势。

## 5. 实验数量与充分性
- **多数据集覆盖**：在 3 个性质各异的序贯决策基准上系统评估。
- **多方法对比**：包含 `Fixed‑DB`、3 种自举变体，以及层级方法和定制化方法。
- **多维度分析**：
  - 数据库大小影响（曲线）；
  - 成功率 vs. 训练任务数；
  - 性能变异性消融（5 次独立试验）；
  - 最佳 vs. 最差轨迹数据库对比；
  - 跨模型迁移实验（GPT‑4o‑mini 收集的库迁移至 Mixtral 8x7B）；
  - 微调实验（ReAct‑Finetune vs. In‑context）；
  - 任务成功率预测分类器；
  - 移除初始人工示例的消融；
  - 成本与收益的 break‑even 分析。
- **实验公平性**：同一智能体架构、统一提示模板，仅在数据库构建方式上变化；所有结果均报告误差和统计指标，实验设计客观。

## 6. 主要结论与发现
- **简单积累即有效**：仅 `Traj‑Bootstrap` 就带来显著提升（ALFWorld 73%→89%，Wordcraft 55%→64%，InterCode‑SQL 75%→79%），效果相当于将模型从 GPT‑4o‑mini 升级到 GPT‑4o，或允许多次测试时尝试（pass@2~3）。
- **双重策展进一步增益**：`+DB‑Curation` 在 ALFWorld 上有效，`+Exemplar‑Curation` 在 InterCode‑SQL 和 Wordcraft 上更优；组合方法在 ALFWorld 达 93% 成功率，超过使用更强 LLM 和手工设计组件的方法。
- **数据库质量比数量重要**：通过质量指标筛选的高效轨迹构建的数据库显著优于低质量轨迹库。
- **数据可跨任务复用**：自生成轨迹不仅适用于上下文学习，也可用于微调（部分任务上微调效果更优）；数据库可跨模型迁移，在不同架构的 Mixtral 上同样获得显著提升。
- **智能体诊断能力**：随数据库增大，可训练出校准良好的分类器预测任务成功率（AUROC 达 0.77）。
- **成本效益显著**：一次数据库构建投入后，测试时推理成本极低，大规模部署下可节省数十万美元/天。

## 7. 优点
- **通用且无需任务定制**：不依赖特定提示、观察或动作空间设计，同一种方法在三个不同领域有效。
- **训练与测试解耦**：计算负担集中在训练阶段，测试时仅需单次 LLM 调用，推理成本低且无需验证器。
- **清晰的数据库质量评估**：提出检索加权价值指标，为轨迹作为上下文示例的有效性提供可量化度量。
- **系统消融与实证充分**：包括数据库增长曲线、最佳/最差库对比、跨模型迁移、微调、预测等多个维度，论证扎实。
- **实际价值突出**：成本‑收益分析表明在工业级生产中有巨大节省潜力，且性能超越部分手工工程方法。

## 8. 不足与局限
- **依赖初始人工示例**：默认需要少量人工示例初始化数据库；完全空库启动时，性能显著下降，未能追平有初始示例的效果。
- **仅利用成功轨迹**：丢弃失败轨迹，未解决失败轨迹的信用分配问题，可能遗失有价值信息。
- **性能非单调提升**：数据库构建过程中存在性能波动，某些新增轨迹可能降低成功率，缺乏保证单调改善的机制。
- **依赖模型上下文学习能力**：效果可能受限于所用 LLM 的 in‑context 能力，在较弱模型上可能不显著。
- **未能扩展到部分基准**：因 WebShop 等基准存在 bug 或奖励错误而排除，未在问答基准上测试，可能存在一定选择偏差。
- **潜在安全风险**：自生成的示例可能包含不良行为，若不加审核可能导致奖励黑客等伦理问题。

（完）
