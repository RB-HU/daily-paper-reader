---
title: "SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning with LLM-Based Agents"
title_zh: SE-Agent：基于 LLM 的智能体多步推理中的自进化轨迹优化
authors: "Yifu Guo, Jiaye Lin, Huacan Wang, Yuzhen Han, Sen Hu, Ziyi Ni, Licheng Wang, Mingguang Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=isATAFP71B"
tags: ["query:fla"]
score: 8.0
evidence: LLM 智能体通过探索与利用交互轨迹实现自进化优化
tldr: 针对 LLM 智能体多步推理中轨迹反馈未被充分利用的问题，本文提出 SE-Agent 框架，通过捕获轨迹间依赖关系提升搜索多样性，突破蒙特卡洛树搜索的冗余限制。实验在复杂推理任务中显著提高了正确率，为智能体后训练阶段的自我进化提供了有效优化途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1463, \"height\": 787, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1439, \"height\": 738, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1216, \"height\": 523, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1272, \"height\": 440, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 541, \"height\": 551, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1451, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1419, \"height\": 1210, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-isatafp71b/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1432, \"height\": 1223, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-isatafp71b/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1464, \"height\": 496, \"label\": \"Table\"}]"
motivation: 现有轨迹优化方法如 MCTS 忽视轨迹间依赖，搜索空间多样性不足，导致推理冗余和性能瓶颈。
method: 通过建模轨迹间相互影响，设计自进化优化策略以平衡探索与利用。
result: 在多种推理基准上，SE-Agent 降低了冗余并提升了问题解决准确度。
conclusion: 该工作为 LLM 智能体的持续演进提供了新机制，对金融等多步骤决策场景的智能体后训练具有借鉴意义。
---

## Abstract
Large Language Model (LLM)-based agents have recently shown impressive capabilities in complex reasoning and tool use via multi-step interactions with their environments. While these agents have the potential to tackle complicated tasks, their problem-solving process—agents' interaction trajectory leading to task completion—remains underexploited. These trajectories contain rich feedback that can navigate agents toward the right directions for solving problems correctly. Although prevailing approaches, such as Monte Carlo Tree Search (MCTS), can effectively balance exploration and exploitation, they ignore the interdependence among various trajectories and lack the diversity of search spaces, which leads to redundant reasoning and suboptimal outcomes. To address these challenges, we propose SE-Agent, a Self-Evolution framework that enables Agents to optimize their reasoning processes iteratively. Our approach revisits and enhances former pilot trajectories through three key operations: revision, recombination, and refinement. This evolutionary mechanism enables two critical advantages: (1) it expands the search space beyond local optima by intelligently exploring diverse solution paths guided by previous trajectories, and (2) it leverages cross-trajectory inspiration to efficiently enhance performance while mitigating the impact of suboptimal reasoning paths. Through these mechanisms, SE-Agent achieves continuous self-evolution that incrementally improves reasoning quality. We evaluate SE-Agent on SWE-bench Verified to resolve real-world GitHub issues. Experimental results across five strong LLMs show that integrating SE-Agent delivers up to 55% relative improvement, achieving state-of-the-art performance among all open-source agents on SWE-bench Verified.

---

## 论文详细总结（自动生成）

# SE-Agent：基于 LLM 的智能体多步推理中的自进化轨迹优化

## 1. 研究动机与核心问题
- **核心问题**：现有基于大语言模型（LLM）的智能体在多步推理任务中能够生成丰富的交互轨迹，但这些轨迹中蕴含的反馈信息没有得到充分利用，轨迹间的相互依赖关系和潜在协同被忽略。
- **动机**：主流方法如蒙特卡洛树搜索（MCTS）虽能平衡探索与利用，但将各条轨迹视为独立实体，导致搜索空间多样性不足，多次采样仍趋于同质化的推理路径，最终陷入局部最优和冗余推理。
- **整体含义**：本文提出一种轨迹级别的自进化框架，旨在通过迭代优化历史轨迹，打破搜索空间的同质化瓶颈，实现智能体推理能力的持续自我提升。

## 2. 方法论
### 核心思想
- 将前序推理轨迹视为一个可进化的种群，通过**修订（Revision）**、**重组（Recombination）** 和**精炼（Refinement）** 三个操作，让智能体在轨迹层面进行自我改进，从而生成更高质量、更多样化的解题路径。

### 关键技术细节
- **初始轨迹生成**
  - *多计划探索*：使用不同的规划策略和提示，为同一任务生成多条初始轨迹。
  - *变异多样化*：对已有轨迹施加受控变异，进一步扩充轨迹池。
- **修订操作（Revision）**
  - 对每条轨迹进行反思，诊断逻辑缺陷、薄弱步骤，然后针对性地修正和优化该轨迹。
- **重组操作（Recombination）**
  - *交叉（Crossover）*：截取不同轨迹中的高性能片段进行拼接，形成继承多方优点的混合轨迹。
  - *迁移学习（Transfer）*：将成功轨迹中的知识、策略系统性地注入欠发展的路径。
  - *重构（Restructure）*：基于轨迹池的全局分析生成全新的推理结构，消除冗余，提升逻辑一致性。
- **精炼操作（Refinement）**
  - *评估函数*：设计多维奖励函数 `Reward(t, T) = α·TaskCompletion + β·ReasoningQuality + γ·Efficiency`，综合评估任务完成度、推理质量和效率。
  - *选择与收敛*：按照奖励分数和轨迹多样性进行精英选择，当最高奖励提升幅度连续低于阈值时停止迭代，输出全局最优轨迹。

### 算法流程
1. 生成初始多元化轨迹池。
2. 循环：
   - 对每条轨迹进行反思并修订。
   - 通过交叉、迁移、重构产生新一代轨迹。
   - 用多维奖励函数评估并筛选精英轨迹。
3. 收敛后输出奖励最高的轨迹。

## 3. 实验设计
- **数据集与基准**
  - **SWE-bench Verified**：包含 500 个真实 GitHub 问题的代码修复基准，使用开发者编写的单元测试验证补丁正确性。
  - 评估指标：**Pass@1**（首试解决率）和 **Pass@5**（5 次尝试内解决率）。
- **对比方法**
  - **SWE-Agent**：基于 CodeAct 的代码智能体框架。
  - **SWE-Search**：基于 MCTS 的搜索增强框架。
  - SE-Agent 可直接作为插件集成于 SWE-Agent 之上。
- **使用的模型**
  - 开源模型：DeepSeek-V3-0324、Qwen-2.5-72B-Instruct、Llama-3.1-70B-Instruct。
  - 闭源模型：GPT-4o、Claude-3.7-Sonnet。

## 4. 资源与算力
- **硬件配置**：开源模型部署在 NVIDIA A100 (80 GB) GPU 上，论文未具体说明使用了多少块 GPU 及推理耗时。
- **训练**：该方法不涉及模型训练，全部为 LLM 推理过程的轨迹优化，因此无训练算力消耗。
- **API 调用**：闭源模型通过官方 API 访问，论文未报告总调用成本，但进行了最大 API 成本的消融分析。

## 5. 实验数量与充分性
- **实验组数**
  - 在 5 种不同规模、不同来源的 LLM 上评估，同时报告 Pass@1 和 Pass@5。
  - 消融研究：移除修订、移除重组、移除所有优化操作的三种变体。
  - Venn 图分析：对比 SE-Agent、SWE-Agent、SWE-Search 及自身消融版本所解决问题的重叠集。
  - 超参数分析：候选轨迹数量（1–20）和最大 API 成本对性能的影响。
  - 案例研究：通过具体问题（scikit-learn #14629）展示轨迹优化过程。
- **充分性与客观性**
  - 涵盖多种模型和强基线，实验设计较为全面。所有实验在统一 SWE-bench Verified 的评估框架下进行，确保公平比较。多次运行取平均结果，具备一定的统计稳定性。消融实验清晰量化了各模块的贡献。

## 6. 主要结论与发现
- SE-Agent 在所有 5 个 LLM 上均显著优于 SWE-Agent 和 SWE-Search，相对提升最高可达 112%（Llama-3.1-70B），在 Claude-3.7-Sonnet 上达到 61.2% 解决率。
- 轨迹级进化学能够有效扩展搜索空间，生成真正多样的解题路径，突破传统采样方法的同质化限制。
- 修订操作提供多样化的种子轨迹，重组操作通过融合跨轨迹洞察提升性能，两者协同不可或缺。
- 仅需 10 条候选轨迹即可达到接近最优的性能，体现了高效的搜索效率。

## 7. 优点
- **范式创新**：首次在 LLM 智能体推理中引入轨迹级别的自进化框架，突破传统 MCTS 和重新采样的局限。
- **通用性强**：框架与具体模型解耦，可即插即用于多种 LLM，对开源和闭源模型均有效。
- **可解释性**：通过轨迹操作和案例研究，清晰展示了推理路径如何被逐步优化。
- **实验扎实**：采用权威基准 SWE-bench Verified，与多个强基线对比，并有详尽的消融和超参数分析。

## 8. 不足与局限
- **任务范围较窄**：实验仅局限于 SWE-bench 的代码修复任务，在数学推理、规划、多模态等任务上的有效性尚待验证。
- **成本问题**：虽然性能提升显著，但生成、修订、重组多条轨迹需要多次调用 LLM，推理成本高于单一路径的方法，论文对总体 API 开销未做详细对比。
- **奖励函数依赖**：精炼操作中的多维奖励需要基于规则和 LLM 评估器，可能引入噪声或偏差，且在不同任务中需要重新设计权重。
- **可复现性细节**：开源模型的推理资源配置（GPU 数量、运行时间等）未完全透明，可能影响外部复现。
- **收敛与稳定性**：自进化迭代的收敛条件较为简单（奖励提升小于阈值），在更复杂环境下可能出现过早停滞或波动。

（完）
