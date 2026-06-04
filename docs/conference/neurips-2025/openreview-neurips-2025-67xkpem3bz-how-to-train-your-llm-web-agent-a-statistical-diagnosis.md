---
title: "How to Train Your LLM Web Agent: A Statistical Diagnosis"
title_zh: 如何训练你的LLM网页智能体：一项统计诊断
authors: "Dheeraj Vattikonda, Santhoshi Ravichandran, Emiliano Penaloza, Hadi Nekoei, Thibault Le Sellier de Chezelles, Megh Thakkar, Nicolas Gontier, Miguel Muñoz-Mármol, Sahar Omidi Shayegan, Stefania Raimondo, Xue Liu, Alexandre Drouin, Alexandre Piché, Alexandre Lacoste, Massimo Caccia"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=67xkPEM3bZ"
tags: ["query:fla"]
score: 8.0
evidence: 通过模仿学习和GRPO在线策略强化学习对LLM网页智能体进行统计驱动的后训练研究。
tldr: 本文针对LLM网页智能体训练中的可重复性问题和多步决策复杂性，提出统计驱动的训练研究。设计两阶段流程：先用大模型教师进行模仿学习，再用分组相对策略优化（GRPO）进行在线微调。实验表明该方法显著提升网页任务上的智能体表现，为开放源代码的网页智能体训练提供了可靠方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1250, \"height\": 503, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 726, \"height\": 825, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1232, \"height\": 1399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1370, \"height\": 436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1378, \"height\": 1236, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1374, \"height\": 731, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1446, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1446, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1305, \"height\": 1485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-67xkpem3bz/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1359, \"height\": 827, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-67xkpem3bz/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1389, \"height\": 736, \"label\": \"Table\"}]"
motivation: 开放源代码LLM网页智能体性能落后，且强化学习训练结果受随机因素影响大，忽视多步决策。
method: 采用统计驱动方法，设计模仿学习结合GRPO在线微调的两阶段训练流程。
result: 在网页多步任务上，训练后的智能体性能接近专有模型，且训练可重复性提高。
conclusion: 该研究为LLM网页智能体的后训练提供了实践指导和统计分析框架。
---

## Abstract
Large language model (LLM) agents for web interfaces have advanced rapidly, yet open-source systems still lag behind proprietary agents. Bridging this gap is key to enabling customizable, efficient, and privacy-preserving agents. Two challenges hinder progress: the reproducibility issues in RL and LLM agent training, where results often depend on sensitive factors like seeds and decoding parameters, and the focus of prior work on single-step tasks, overlooking the complexities of web-based, multi-step decision-making.

We address these gaps by providing a statistically driven study of training LLM agents for web tasks. Our two-stage pipeline combines imitation learning from a Llama 3.3 70B teacher with on-policy fine-tuning via Group Relative Policy Optimization (GRPO) on a Llama 3.1 8B student. Through 240 configuration sweeps and rigorous bootstrapping, we chart the first compute allocation curve for open-source LLM web agents. Our findings show that dedicating one-third of compute to teacher traces and the rest to RL improves MiniWoB++ success by 6 points and closes 60\% of the gap to GPT-4o on WorkArena, while cutting GPU costs by 45\%. We introduce a principled hyperparameter sensitivity analysis, offering actionable guidelines for robust and cost-effective agent training.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **核心问题**：在开放源代码环境下，如何以可重复、算力高效的方式训练基于大语言模型（LLM）的网页智能体（web agent），使其在多步任务中缩小与闭源模型（如 GPT‑4o）的性能差距。
- **动机与背景**：
  - 开源 LLM 网页智能体在 WebArena、WorkArena 等长流程任务上显著落后于闭源模型，且训练过程对超参数高度敏感、可重复性差。
  - 现有工作多集中于单步代码/数学任务，忽视了多轮交互、稀疏奖励和累积误差带来的挑战。
  - 成本高昂：全面超参搜索和多种子重复实验对于多数实验室不可行，亟需统计稳健的训练方案与算力分配策略。

### 2. 方法论

- **整体框架**：两阶段后训练——先通过模仿学习（SFT）从强教师模型获取高质量演示，再进行基于分组的相对策略优化（GRPO）的在线强化学习。
- **关键技术细节**：
  - **教学模型与策略模型**：教师 Llama 3.3 70B 生成成功的交互轨迹，学生 Llama 3.1 8B 先模仿，后在线优化。
  - **模仿学习阶段**：收集教师成功轨迹（含思维链），以交叉熵损失微调学生模型；收集过程计入所有轨迹（含失败）的总 FLOPs。
  - **在线 RL 阶段（GRPO）**：
    - 以目标分组归一化优势函数：\(A_{t,g} = r_{t,g} - \text{mean}(R_{t,g}) / \text{std}(R_{t,g})\);
    - 使用重要性比率裁剪（类似 PPO），但不使用 KL 惩罚；
    - 引入**零优势过滤**，剔除优势为 0 的样本，加速训练。
  - **课程学习**：基于方差感知的 Boltzmann 采样，动态选择中等难度任务，避免过于简单或过于困难。
- **统计诊断**：
  - 随机搜索 1370 种超参数配置，跨越三个 SFT 预热程度（无预热、+2.5e18 FLOPs、+7.6e18 FLOPs）。
  - 使用 Bootstrap（1000 次重采样）估计每种超参数值的“获胜率”及其 95% 置信区间，并依据 1/组大小加权平衡探索频次差异。
  - 最终在三个 SFT 断点处综合选出单一“最优”超参集用于算力–性能曲线绘制。

### 3. 实验设计

- **数据集/环境**：
  - MiniWoB++（30 个中等长度任务，2‑5 步完成的网页交互）；
  - WorkArena（33 个企业知识工作任务，3‑10 步完成）。
- **评估指标**：
  - 两类泛化：训练任务中的**未见过目标（held‑out goals）**与完全**未见过的任务（held‑out tasks）**的平均成功率。
- **对比方法**：
  - 纯 SFT、纯 RL、SFT+RL（本方），以及多个基线：Claude‑3.5‑Sonnet、GPT‑4o、GPT‑4o‑Mini、Llama‑3.1‑70B‑Instruct、o1‑Mini、Llama‑3.1‑405B‑Instruct 等闭源或开源模型。
  - 同时对比 Qwen 2.5 7B/72B 对，验证通用性。
- **模型选择原则**：
  - 对 SFT 取 AUC（训练曲线下面积）前 10% 的稳定检查点；
  - RL 从对应 SFT 检查点出发，取 10 次试验中前 2 名的平均值，近似 90% 分位，确保 SFT 与 RL 的选择压力相当。

### 4. 资源与算力

- **GPU 配置**：
  - 教师模型（70B）轨迹生成：8 × H100‑80GB GPU；
  - 学生模型训练：MiniWoB++ 实验使用 2 × H100，WorkArena 因任务更复杂使用 4 × H100。
- **训练长度**：
  - SFT 阶段训练至 \(T_{\text{SFT}}\) 步，期间定期保存检查点；RL 阶段额外训练 \(T_{\text{RL}}\) 步。
- **总计算量**：
  - 统计的 FLOPs 包含教师推理、学生前向/反向传播（含失败轨迹），算力曲线覆盖到约 25 e18 FLOPs。
  - 未提供具体的总训练时间（墙钟时间），但明确使用 FLOPs 作为算力效率的量化单位。

### 5. 实验数量与充分性

- **超参数扫描**：随机生成 1370 种配置，在 3 种不同 SFT 预热程度下实验，每种配置评估其最终成功率。
- **算力–性能曲线**：在 MiniWoB++ 上绘制了纯 SFT 和多条从不同检查点分支进入 RL 的曲线（图 1），在 Qwen 2.5 7B 上重复验证（图 4）。
- **消融与敏感性**：对 10 项关键超参数（温度、课程学习、折扣率、学习率、批大小等）分别给出在三个预热水平下的获胜率和相对奖励，并附 95% 置信区间（图 3）。
- **公平性**：
  - 通过加权 Bootstrap 平衡不同超参值的探索频次，减少搜索偏差；
  - SFT 与 RL 采用相近的选择压力（top 10% vs top 20%）；
  - 评估使用同一套最优超参数以保证对比公平。
- **不足之处**：实验局限于英文界面和 Llama 3 8 B/70 B 参数规模；Bootstrap 假设随机搜索覆盖足够，实际可能存在未知的更优配置未被探索；部分结论（如误差日志、课程学习效果）依赖环境的稀疏奖励特性。

### 6. 主要结论与发现

- **SFT + RL 始终优于单独方法**：在 MiniWoB++ 和 WorkArena 上，混合策略的成功率均高于纯 SFT 或纯 RL，并且是唯一能将开源模型性能提升至接近 GPT‑4o 的方法。
- **早期但不过晚的 RL 介入更划算**：在 SFT 进行约 50‑60% 计算后转入 RL，既保持计算效率又推前算力–性能帕累托前沿，仅需约 55% 的总计算量即可达到纯 SFT 的峰值（MiniWoB++ 测试集）。
- **超参数强烈依赖 SFT 预热程度**（图 3）：
  - 从零开始 RL 时，课程学习和错误日志反馈有益；有 SFT 预热后则变得有害或无效。
  - 温度 0.25 普遍最优；学习率 1e‑6 普遍更好；
  - 标准增益归一化仅在无 SFT 时有效；优势函数分组归一化（grouped‑relative advantage）在预热后更有益。
  - 零优势过滤几乎在所有条件下都能提升性能。
  - 折扣率：无预热时偏向高值（>0.9），预热后偏低（0.5）更优。
- **性能饱和**：WorkArena 的复杂排序/过滤任务即使在教师模型下也极难解决，导致 SFT+RL 最终成功率仅约 40%，强化学习探索无法弥补基础技能的缺失。

### 7. 优点

- **统计严谨性**：首次在 LLM 网页智能体训练中引入 Bootstrap 分析，公平量化超参数影响，产出可操作的调参指南。
- **算力效率视角**：明确揭示 SFT 与 RL 在计算量上的互补关系，并给出“节省 45% 计算量”的实际收益，对资源有限团队极具参考价值。
- **方法通用性**：在两套模型 (Llama, Qwen) 和两个难度迥异的基准上都验证了混合策略优势。
- **实验公平性**：SFT 与 RL 的检查点筛选机制对齐，避免选择偏差。
- **问题导向**：指出训练中出现的“捷径行为”（如直接修改页面 DOM），为环境沙盒设计提供警示。

### 8. 不足与局限

- **环境与模型范围**：仅覆盖英文网页界面，主要基于 Llama 3 8 B/70 B 和 Qwen 2.5 7 B/72 B，更大规模模型下的结论可能不同。
- **统计方法的限制**：Bootstrap 分析假定随机搜索覆盖度足够，实际可能遗漏更优配置；部分不确定性仍属认知不确定性，未通过更多实验降低。
- **任务难度导致的饱和**：WorkArena 中许多任务连教师模型都无法解决，RL 阶段未能突破，提出的方法对此类“遥不可及”的任务无解。
- **未报告墙钟时间**：仅用 FLOPs 衡量计算，缺乏实际时间（训练时长）的比较。
- **RL 算法版本单一**：仅使用 GRPO，缺乏其他在线 RL 算法（如 PPO、REINFORCE）的直接对比。
- **RL 阶段的敏感因素**：虽然指出温度、折扣率等关键，但未深入分析其与特定任务类型（长/短 horizon）的交互。

（完）
