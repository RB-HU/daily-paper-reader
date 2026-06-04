---
title: Retrospective In-Context Learning for Temporal Credit Assignment with Large Language Models
title_zh: 基于大型语言模型的回顾式上下文学习用于时序信用分配
authors: "Wentse Chen, Jiayu Chen, Fahim Tajwar, Hao Zhu, Xintong Duan, Ruslan Salakhutdinov, Jeff Schneider"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=QAVpe6a3rp"
tags: ["query:fla"]
score: 9.0
evidence: 基于 LLM 的时序信用分配用于训练自进化智能体
tldr: 针对自进化智能体在稀疏反馈下训练效率低下的问题，本文提出利用大语言模型的预训练知识，通过回顾式上下文学习将稀疏奖励转化为密集监督信号，并设计在线学习框架 RICOL 迭代优化策略。该方法避免了依赖领域特定价值函数，显著提升了信用分配的泛化性和样本效率，为通用智能体后训练提供了新途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1090, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 569, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 574, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1373, \"height\": 385, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1368, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 513, \"height\": 391, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 499, \"height\": 145, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1453, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qavpe6a3rp/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 692, \"height\": 576, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-qavpe6a3rp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 729, \"height\": 592, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qavpe6a3rp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1375, \"height\": 387, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qavpe6a3rp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1390, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qavpe6a3rp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1191, \"height\": 145, \"label\": \"Table\"}]"
motivation: 解决自进化智能体在稀疏环境反馈下训练时，传统时序信用分配方法依赖领域特定价值函数导致的样本效率低和泛化性差的问题。
method: 提出回顾式上下文学习（RICL）方法，利用 LLM 将稀疏奖励转化为优势函数，并构建在线学习框架 RICOL 迭代优化策略。
result: 实验表明，RICOL 在多种任务上优于现有方法，提升了训练效率和泛化能力。
conclusion: 该方法为训练自进化智能体提供了一条不依赖领域知识的通用高效路径，拓展了 LLM 在决策任务中的应用。
---

## Abstract
Learning from self-sampled data and sparse environmental feedback remains a fundamental challenge in training self-evolving agents. Temporal credit assignment mitigates this issue by transforming sparse feedback into dense supervision signals. However, previous approaches typically depend on domain-specific value functions for credit assignment, which suffer from poor sample efficiency and limited generalization. In this work, we propose to leverage pre-trained knowledge from large language models (LLMs) to transform sparse rewards into dense training signals (i.e., the advantage function) through retrospective in-context learning (RICL).  We further propose an online learning framework, RICOL, which iteratively refines the policy based on the credit assignment results from RICL. We empirically demonstrate that RICL can accurately estimate the advantage function with limited samples and effectively identify critical states for temporal credit assignment. Extended evaluation on the BabyAI benchmark shows that RICOL significantly improves sample efficiency compared to traditional online RL algorithms while achieving performance comparable to imitation learning from expert demonstartions.  Our findings highlight the potential of leveraging LLMs for temporal credit assignment, paving the way for more sample-efficient and generalizable RL paradigms.

---

## 论文详细总结（自动生成）

# 基于大型语言模型的回顾式上下文学习用于时序信用分配

## 1. 论文核心问题与整体含义
- **核心问题**：在训练自行与环境交互的自进化智能体时，环境反馈往往是稀疏的（只有任务完成时才有奖励信号），导致训练样本需求大、学习过程不稳定。时序信用分配（temporal credit assignment）的关键在于将稀疏奖励转化为密集的监督信号，但传统方法通常需要学习与任务强相关的价值函数，这带来了**样本效率低、泛化能力差**的问题。
- **整体含义**：本文提出利用大型语言模型（LLM）中的预训练知识，通过一种“回顾式上下文学习”（Retrospective In-Context Learning, RICL）将稀疏奖励转换为密集的优势函数估计，从而在无需显式训练价值网络的情况下完成信用分配。在此基础上提出的在线学习框架 RICOL，让 LLM 策略能够以极高的样本效率自我进化，为通用、泛化的强化学习范式提供了新思路。

## 2. 方法论：RICL 与 RICOL
### 2.1 核心思想
- 将 LLM 作为策略（π₀），利用上下文学习对策略做“事后”更新得到 π′。
- 根据定理（存在一个隐式奖励函数使得 β log(π′/π₀) ∝ 优势函数 A），通过比较原始策略和上下文更新后策略在特定状态上的对数概率差异，**估计出该状态‑动作对的优势**，从而实现细粒度的时序信用分配。

### 2.2 回顾式上下文学习（RICL）
- **步骤①**：使用当前策略 πₖ 收集轨迹（包含状态、动作、奖励）。
- **步骤②**：对于轨迹中的每个时间步 t，将**从 t 开始的未来轨迹**和奖励输入一个“反射器 LLM”（π_reflect，如 GPT‑4o mini），生成针对当前状态的口头反馈 fₜ。
- **步骤③**：将 fₜ 拼接到策略 prompt 中，得到针对状态 sₜ 的“上下文更新策略” π′(·|sₜ) = πₖ(·|sₜ, fₜ)。
- **优势估计**：基于多个轨迹的采样，利用公式  
  \[
  \bar{A}_{\pi}^{r}(s,a) = \frac{\beta}{n}\sum_{i=1}^n\left( \log\frac{\pi'^{(i)}(a|s)}{\pi_0(a|s)} + \log Z^{(i)}(s) \right)
  \]
  得到平均优势函数，其中 Z 为配分函数（离散动作空间下可枚举计算）。

### 2.3 在线学习框架 RICOL
- **策略改进**：基于估计的优势，采用优势加权回归（AWR）的变体进行策略更新。目标函数为使 π 接近一个“指数混合策略”：
  \[
  \min_{\pi} \mathbb{E}_{s\sim d_{\pi_0}}\left[ D_{KL}\!\left( \frac{1}{Z(s)}\exp\left((1-\alpha)\log\pi_0 + \alpha\log\pi'\right) \;\big\|\; \pi(\cdot|s) \right) \right]
  \]
  其中 α 控制信任域大小，防止对噪声口头反馈的过拟合。
- **迭代流程**：收集轨迹 → 对每个状态执行 RICL 获得改进策略 π′ → 基于上述目标函数微调策略参数，循环往复。

## 3. 实验设计
### 3.1 评估环境
- **1D Key‑Door 环境**：一维网格世界，智能体需先向左取钥匙再向右开门。可精确计算真实优势函数，用于单独评估时序信用分配的质量。
- **BabyAI 基准**：2D 部分可观测网格世界，包含四个语言‑条件任务：`goto`、`pickup`、`pick_up_seq_go_to` 和 `open`。所有任务均为稀疏奖励，且对 LLM 具有挑战性。

### 3.2 对比方法
- **信用分配实验**：对比 RICL 与经典的蒙特卡洛（MC）方法估计优势函数的误差和所需样本量。
- **BabyAI 在线学习实验**：
  - *GPT‑4o mini*：作为更强的零样本策略上限。
  - *Reflexion*：基于轨迹级口头反馈的上下文学习迭代方法。
  - *PPO (3B)*：用 Qwen2.5‑3B 作为策略和价值网络主干，微调训练。
  - *PPO (10M)*：随机初始化的 MLP 网络，测试无预训练知识的样本效率。
- **消融与可靠性分析**：比较 RWR（无时序信用分配，仅用轨迹级奖励做 AWR）、不同口头反馈准确率下的鲁棒性，以及 RICL 与常规 ICL 在“回顾式”设计上的收益。

## 4. 资源与算力
- 实验的训练时间在附录表 2 中明确给出：
  - **RWR 与 RICOL**：使用 2× NVIDIA A40，在不同 BabyAI 任务上的训练时长为 69~594 分钟（取决于任务复杂度）。
  - **PPO (10M)**：使用 1× GeForce RTX 2080 Ti，约 198~258 分钟。
  - **PPO (3B)**：使用 4× NVIDIA A40，约 1440 分钟（所有任务固定）。
- 对比可见，虽然 RICOL 的训练时间比小型 MLP 的 PPO 略长，但远低于需要训练价值网络的 LLM‑PPO，且样本效率（按环境步数计）显著更优。

## 5. 实验数量与充分性
- 实验覆盖了**信用分配的准确性验证**（1D 环境，多随机种子，误差棒图）、**4 个 BabyAI 场景**上的全部对比算法（3 个随机种子，曲线带标准差阴影）、**口头反馈可靠性分析**（`goto` 任务下多种噪声水平）以及**RWR 消融实验**。此外，附录中还补充了与 Retroformer 的样本效率对比。
- 实验设计**客观公平**：所有方法共享相同的稀疏奖励机制和文本式输入输出格式；PPO 基线和 RICOL 使用相同的主干模型（LLaMA‑3.2‑3B‑Instruct）；结果均展示均值和方差。
- 总体实验丰富度较高，能够充分支持论文核心结论。

## 6. 主要结论与发现
- **高样本效率的信用分配**：RICL 仅需约 **10 条轨迹**即可准确估计优势函数，而蒙特卡洛方法需要约 1000 条轨迹，样本效率提升约 100 倍。
- **回顾式设计更可靠**：RICL 的回顾式上下文更新比常规 ICL（将反馈用于新轨迹）在预测专家动作上的准确率高 7.2%，有效缓解了 LLM 的不稳定性。
- **RILOC 的优越性能**：在 BabyAI 四个任务上，RICOL 以**远超 PPO（3B）约 10 倍**、**远超 PPO（10M）约 50 倍**的环境步数取得相当或更好的成功率，同时超越了零样本 GPT‑4o mini（即使策略模型仅为 3B）。即使在口头反馈有 30% 噪声时仍能稳定学习。
- RICOL 相较于无信用分配的 RWR 在稀疏奖励任务上优势明显，证明时序信用分配的关键作用。

## 7. 优点
- **方法创新**：首次将 LLM 的上下文学习与优势函数估计有机结合，用于时序信用分配，理论上有存在性定理支撑。
- **样本效率卓越**：充分利用预训练知识，避免从零训练价值网络，显著降低对环境交互的需求，适合交互成本高的场景。
- **鲁棒性强**：通过信任域约束，即使反射器回复带有噪声，策略依然能稳定提升。
- **对比实验全面**：同时对比纯上下文学习、传统 RL 和更强大的 LLM，清晰论证了各模块的必要性和整体方法的优势。

## 8. 不足与局限
- **动作空间限制**：现阶段仅支持**离散且可枚举**的动作空间（因需准确计算 KL 散度中的配分函数）。虽然作者指出可通过采样扩展到更长文本输出，但尚未实现。
- **对反射器 LLM 的依赖**：反射器的质量可能影响最终性能，虽然实验已验证一定程度的鲁棒性，但极端低质量的反馈是否仍有效未探索。
- **任务范围有限**：实验集中在导航和物体操作类网格任务，未涉及更复杂的 token 级决策或推理任务，泛化性有待进一步验证。
- **计算开销**：每次训练都需多次调用反射器和策略 LLM 生成反馈并计算对数概率，尽管优于训练价值网络的 LLM‑PPO，但相比小网络 RL 仍有较高的计算需求。

（完）
