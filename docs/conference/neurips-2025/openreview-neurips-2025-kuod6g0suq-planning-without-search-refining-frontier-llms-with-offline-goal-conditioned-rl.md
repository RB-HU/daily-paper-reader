---
title: "Planning without Search: Refining Frontier LLMs with Offline Goal-Conditioned RL"
title_zh: 无需搜索的规划：用离线目标条件强化学习优化前沿大语言模型
authors: "Joey Hong, Anca Dragan, Sergey Levine"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=kuoD6G0Suq"
tags: ["query:fla"]
score: 9.0
evidence: 离线目标条件强化学习用于LLM后训练以实现多轮规划
tldr: 大语言模型（LLM）在问答、对话等任务上表现出色，但需要多轮交互的复杂任务（如谈判、说服）要求长时程推理和规划。传统RL微调虽然能实现规划，但面临高计算成本和内存开销，且最大模型不提供必要API。本文提出一种离线目标条件RL的新方法，无需在线搜索即可优化LLM进行规划，显著降低训练成本，在多种交互任务中验证了可扩展的规划能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-kuod6g0suq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1397, \"height\": 477, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kuod6g0suq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1363, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kuod6g0suq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1448, \"height\": 703, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kuod6g0suq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1435, \"height\": 865, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-kuod6g0suq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1100, \"height\": 711, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kuod6g0suq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1105, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kuod6g0suq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 737, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kuod6g0suq/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 739, \"height\": 468, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kuod6g0suq/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 740, \"height\": 469, \"label\": \"Table\"}]"
motivation: 复杂多轮交互任务需要长周期规划，但传统的RL微调面临内存和计算成本高、API限制等扩展性问题。
method: 提出离线目标条件强化学习方法，无需搜索即可实现规划。
result: 使LLM在谈判、说服等任务中获得长周期推理能力，且训练成本大幅降低。
conclusion: 为LLM的规划能力提供了可扩展的后训练范式，推动复杂交互式应用的发展。
---

## Abstract
Large language models (LLMs) excel in tasks like question answering and dialogue, but complex tasks requiring interaction, such as negotiation and persuasion, require additional long-horizon reasoning and planning. Reinforcement learning (RL) fine-tuning can enable such planning in principle, but suffers from drawbacks that hinder scalability. In particular, multi-turn RL training incurs high memory and computational costs, which are exacerbated when training LLMs as policies. Furthermore, the largest LLMs do not expose the APIs necessary to be trained in such manner. As a result, modern methods to improve the reasoning of LLMs rely on sophisticated prompting mechanisms rather than RL fine-tuning. To remedy this, we propose a novel approach that uses goal-conditioned value functions to guide the reasoning of LLM agents, that scales even to large API-based models. These value functions predict how a task will unfold given an action, allowing the LLM agent to evaluate multiple possible outcomes, both positive and negative, to plan effectively. In addition, these value functions are trained over reasoning steps rather than full actions, to be a concise and light-weight module that facilitates decision-making in multi-turn interactions. We validate our method on tasks requiring interaction, including tool use, social deduction, and dialogue, demonstrating superior performance over both RL fine-tuning and prompting methods while maintaining efficiency and scalability.

---

## 论文详细总结（自动生成）

## 论文核心问题与整体含义

- **背景与动机**：大语言模型（LLM）在问答、对话等任务中表现优异，但在需要多轮交互的复杂任务（如目标导向对话、社交推理、说服）中仍需长时程推理与规划能力。
- **现有挑战**：多轮强化学习（RL）微调能够赋予 LLM 规划能力，但存在显著扩展性问题：内存和计算成本高，前沿大模型（如 GPT-4）不开放训练所需 API，因此实际应用中多依赖复杂的提示工程而非 RL 微调。
- **本文目标**：提出一种高效、可扩展的离线目标条件 RL 方法，无需直接训练 LLM 本体，仅通过轻量辅助价值函数指导 LLM 进行推理与规划，以克服上述局限并实现优于提示与现有 RL 方法的性能。

## 论文提出的方法论

- **核心思想**：不直接训练 LLM 策略，而是利用离线数据学习一个**自然语言批评家（Natural Language Critic）**——即目标条件价值函数 \\( Q(s, a^{\text{tht}}, g) \\)，预测在状态 \\( s \\) 下采取思维动作 \\( a^{\text{tht}} \\) 后达到未来目标 \\( g \\) 的概率。推理时用该价值函数评估多种正负未来结果，并以自然语言形式反馈给 LLM 进行自我改进。
- **离线训练阶段**：
  - 从已有（可能为次优）轨迹数据中提取样本 \\((s, a^{\text{tht}}, s', g)\\)，其中 \\( g \\) 为随机采样的未来状态。
  - 对交互历史进行摘要，并使用 LLM（GPT-3）提取嵌入，以简化为轻量输入。
  - 基于 Implicit Q‑learning (IQL) 修改损失函数进行目标条件训练，奖励 \\( r(s,g) \\) 为二元指示是否达成目标。
  - 价值函数采用 2 隐层 MLP（而非 Transformer），训练高效。
- **推理阶段**：
  - LLM 首先生成 \\( n=4 \\) 个假设的正/负未来目标。
  - 对于每个目标，查询价值函数获得达成概率，将目标与对应概率组合成**自然语言价值描述**，其中包含积极和消极未来分析。
  - LLM 在该批评反馈下进行至多 \\( m=2 \\) 轮自我改进，优化最终的高层思维（thought），再据此生成具体环境动作。
- **关键设计**：作用在高层“思维”而非完整动作上；利用自然语言目标提供多维度、可解释的反馈；完全避免推理时搜索。

## 实验设计

- **任务与数据集**：
  1. **WebShop**：在线购物环境，根据用户指令选择商品，奖励为与正确答案的相似度（0‑1），评估指标为**分数（Score）**和**成功率（SR）**。使用 12k 指令，随机留出 100 条用于测试，其余用于生成次优轨迹（GPT‑3.5 代理）。
  2. **AvalonBench**：社交推理游戏，LLM 扮演最难角色 Merlin，需引导好人方完成任务同时隐藏身份，胜率基于 5 回合中好人方成功 3 回合以上。使用 2.5k 局基线代理生成的对话数据，基线胜率 21.4%。
  3. **Persuasion**：说服任务，LLM 需说服模拟捐赠者向慈善机构捐款（最高 2 美元），模拟者由 GPT‑3.5 驱动且初始持怀疑态度，评估**平均捐赠金额**。收集 2.5k 对话，平均捐赠仅 0.21 美元。
- **对比方法**：
  - **RL 微调**：ArCHeR（离线版与在线版），基于 GPT‑2 策略的演员‑评论家方法。
  - **LLM 推理方法**：ReAct、Reflexion（n=5 模拟）、LATS（n=5/30 模拟）、Self-Plan。
  - **任务特定方法**：Agent Q（WebShop，结合离线 DPO 与推理时 MCTS，n=5/30）、Strategist（Avalon，分层 MCTS 搜索高层策略，n=5/30）、GDP‑Zero（Persuasion，基于树搜索的策略规划，n=5/30）。
  - 所有对比方法均按推理预算分为快速版（n=5）和慢速版（n=30），确保公平比较。

## 资源与算力

- 文中强调方法**训练成本极低**：价值函数仅为 2 隐层 MLP，嵌入提取使用较小的 GPT‑3，推理时使用 GPT‑4。
- 对于推理时间，给出了具体比较：WebShop 上 PNLC 单步决策约 5 秒，Agent Q 慢速版需 46 秒；Avalon 上 PNLC 约 6 秒，Strategist 慢速版约 62 秒。
- **未明确提及**训练所用的 GPU 型号、数量、总训练时长或功耗等细节，仅通过模型轻量化与推理速度体现算力优势。

## 实验数量与充分性

- **实验组数**：覆盖 3 个不同性质的任务，每个任务均评价在 100 次独立测试上的平均性能，共 300 次正式测试。
- **基线全面**：包含 RL 微调、纯提示推理、推理时搜索以及任务专有方法共 10 种以上变体，且区分快慢版本。
- **消融实验**：移除了目标条件（变为标量 Q 值）和自我改进过程（改为 best‑of‑n 选择），结果表明两个组件对性能提升均至关重要，验证了设计的有效性。
- **公平性考量**：虽然对比方法使用不同底模（GPT‑2、Mixtral‑7B、GPT‑4），但作者指出无法严格统一模型规模，但 PNLC 使用最大底模（GPT‑4）的同时仍保持更快的推理速度，尽量保证了比较合理性。消融实验则在同一设定下验证了方法组件的作用。

## 论文的主要结论与发现

- PNLC 在所有三个任务上均取得**最佳性能**：WebShop 得分 78.2、成功率 48%；Avalon 胜率 47%；Persuasion 平均捐赠 0.87 美元。
- 相比任务专用方法（如 Agent Q、Strategist）性能更优或持平，同时推理时间仅为后者的 **10% 以下**。
- 离线 RL 微调方法（ArCHeR）在同样数据上表现最差，显示出直接训练 LLM 策略的困难。
- 消融实验明确：**自然语言目标描述**与**基于批评的自我改进**两者缺一不可，舍弃任一部分性能即下降至纯提示基线的水平。

## 优点

- **高效可扩展**：仅需训练轻量 MLP，无需触碰大模型权重，适用于纯 API 式前沿模型。
- **推理经济**：避免蒙特卡洛树搜索等耗时操作，大幅降低推理延迟，利于实时交互场景。
- **丰富的反馈形式**：用自然语言呈现多种可能未来及概率，比标量值信息量更大、可解释性强，方便 LLM 理解与改进。
- **通用设计**：摘要与嵌入流程可使用较小 LLM，价值函数训练对数据质量要求不高，算法框架具备跨任务迁移潜力。

## 不足与局限

- **任务特异性**：仍需为每个新任务单独收集数据并训练价值函数，无法直接泛化为万能规划模块。
- **依赖 LLM 固有直觉**：生成正负未来目标时依赖 LLM 的常识推理，对于超出其知识范围的专业领域（如医疗诊断）可能失效。
- **数据需求未量化**：虽然声称能利用次优数据，但未系统研究数据多样性或数量对性能的影响边界。
- **模型异质性**：对比实验中不同方法使用了不同规模的底模，尽管作者在推理效率上取得优势，但性能提升可能受到底模能力差异的干扰，无法完全剥离方法本身的增益。
- **评估局限**：任务模拟环境（如用 GPT‑3.5 模拟捐赠者）可能与真实人类行为存在差距，实验结论在真实人机交互中的鲁棒性待验证。

（完）
