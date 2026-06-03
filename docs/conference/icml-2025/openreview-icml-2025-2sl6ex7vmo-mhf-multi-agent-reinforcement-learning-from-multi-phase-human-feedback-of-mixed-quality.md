---
title: "M³HF: Multi-agent Reinforcement Learning from Multi-phase Human Feedback of Mixed Quality"
title_zh: M³HF：基于多阶段混合质量人类反馈的多智能体强化学习
authors: "Ziyan Wang, Zhicheng Zhang, Fei Fang, Yali Du"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=2Sl6Ex7Vmo"
tags: ["query:fla"]
score: 7.0
evidence: 融合多阶段混合质量人类反馈的多智能体RL框架，持续优化策略。
tldr: 针对多智能体强化学习中奖励设计困难的问题，提出M³HF框架，在训练中暂停以收集多阶段混合质量的人类反馈，利用大语言模型解析反馈并持续优化策略。通过KL控制正则化，在复杂协作环境中提升了智能体的协同性和对齐性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1699, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1710, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1727, \"height\": 889, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1057, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 667, \"height\": 556, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1697, \"height\": 492, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-2sl6ex7vmo/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1620, \"height\": 904, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-2sl6ex7vmo/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 888, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-2sl6ex7vmo/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 885, \"height\": 157, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-2sl6ex7vmo/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-2sl6ex7vmo/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 884, \"height\": 492, \"label\": \"Table\"}]"
motivation: 多智能体RL中设计有效奖励函数困难，导致行为次优或不对齐。
method: 提出M³HF，在训练中暂停学习以收集人类反馈，用LLM解析反馈，结合专家和非专家反馈，并采用KL正则化约束更新。
result: 在复杂多智能体环境中显著提高协同效果和对齐程度。
conclusion: M³HF有效融合混合质量人类反馈，为多智能体系统的策略优化提供了新范式。
---

## Abstract
Designing effective reward functions in multi-agent reinforcement learning (MARL) is a significant challenge, often leading to suboptimal or misaligned behaviors in complex, coordinated environments. We introduce Multi-agent Reinforcement Learning from Multi-phase Human Feedback of Mixed Quality ($\text{M}^3\text{HF}$), a novel framework that integrates multi-phase human feedback of mixed quality into the MARL training process. By involving humans with diverse expertise levels to provide iterative guidance, $\text{M}^3\text{HF}$ leverages both expert and non-expert feedback to continuously refine agents' policies. During training, we strategically pause agent learning for human evaluation, parse feedback using large language models to assign it appropriately and update reward functions through predefined templates and adaptive weights by using weight decay and performance-based adjustments. Our approach enables the integration of nuanced human insights across various levels of quality, enhancing the interpretability and robustness of multi-agent cooperation. Empirical results in challenging environments demonstrate that $\text{M}^3\text{HF}$ significantly outperforms state-of-the-art methods, effectively addressing the complexities of reward design in MARL and enabling broader human participation in the training process.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **核心问题**：在多智能体强化学习（MARL）中，设计有效的奖励函数极具挑战性。尤其在需要紧密协作的复杂环境中，稀疏或难以学习的奖励常导致智能体收敛速度慢、陷入次优策略，甚至产生不对齐的行为。
- **研究动机**：纯粹依赖环境奖励通常无法提供足够的学习信号。人类反馈（RLHF）虽在单智能体中取得成功，但将其直接扩展到多智能体场景面临新的困难：如何利用不同专业水平的人员提供迭代指导、如何处理反馈质量的参差不齐，并让多个智能体有效消化这些信息。
- **整体含义**：本文提出 M3HF（Multi-agent Reinforcement Learning from Multi-phase Human Feedback of Mixed Quality）框架，将多阶段、混合质量的人类反馈有机融入 MARL 训练流程，以连续优化智能体策略，使得非专家也能参与指导，并在复杂的协作任务中取得显著的性能提升。

### 2. 论文提出的方法论
#### 2.1 核心思想
- 将标准马尔可夫博弈扩展为 **多阶段人类反馈马尔可夫博弈（MHF-MG）**，引入人类反馈 \(u_k\) 和人类策略 \(\pi^h\)。
- 训练过程以 **代（generation）** 为单位：智能体先与环境交互，生成 rollout 视频供人类评估；人类提供语言反馈；利用大语言模型（LLM）解析反馈并动态更新每个智能体的奖励函数，再进入下一代训练，形成闭环。

#### 2.2 关键技术细节
- **rollout 生成与性能评估**：每个代训练后暂停，收集 X 条独立轨迹 \(\tau_k\)，使用经验回报器 \(\hat{J}_{X,H}(\pi_k)\) 近似真实策略性能，为人类评估提供依据，并从理论（Proposition 4.1）上保证该估计的渐近一致性。
- **人类反馈解析**：将人类反馈 \(u_k\) 交给 LLM 解析，分配至特定智能体或全体智能体，输出 \(u_i^k, u_{\text{all}}^k\)。
- **奖励函数模板与参数化**：定义一套预定义的奖励模板（距离型、动作型、状态型、时间型、成功型、组合型等），LLM 根据解析后的反馈选择合适的模板并参数化，生成新奖励函数 \(R_i^k(s,a)\)。
- **奖励函数池与权重更新**：
  - 将新旧奖励函数存入各智能体的奖励池 \(\mathcal{P}_i\)，最终奖励为池内函数的加权组合 \(\hat{R}_i^{k+1}(s,a) = \sum_j w_{i,j} \cdot R_{i,j}(s,a)\)。
  - 初始权重均分，施加指数衰减 \(w_{i,m} \leftarrow w_{i,m} \cdot \alpha^{M-m}\) 并归一化。
  - **基于性能的调整**：用新奖励训练的策略在原环境奖励下的表现差异 \(\Delta r_i = r^{\text{ori}}_{i,k+1} - r^{\text{ori}}_{i,k}\) 来调整最新奖励的权重：若提升则增加 \(\beta\)，否则减少 \(\beta\)（下限为 0）。
- **低质量反馈理论分析**：Proposition 4.2 证明，在混合质量反馈下，算法能累积有益反馈的增益，而单次劣质反馈造成的性能衰减存在统一上界 \(\delta\)，从而保障长期学习的稳定性。

#### 2.3 算法流程
- 初始化：原始奖励 \(R_i^{\text{ori}}\) 作为初始池内唯一项。
- 对代 \(k=0\) 到 \(K-1\)：
  1. 用当前 \(\hat{R}_i^k\) 训练策略 \(\pi_i^k\)。
  2. 生成 rollout。
  3. 人类给出反馈 \(u_k\)。
  4. LLM 解析反馈并生成新奖励。
  5. 加入奖励池，更新权重。
  6. 形成新的组合奖励 \(\hat{R}_i^{k+1}\) 供下一代使用。

### 3. 实验设计
- **环境**：基于 Overcooked 的宏观动作版。三种布局（Overcooked-A、B、C）分别代表不同空间约束与协作难度；两种食谱（生菜‑番茄沙拉、生菜‑洋葱‑番茄沙拉）对应不同任务复杂度。每个智能体仅有局部观测（5×5网格），动作空间为宏观动作。
- **对比基线**：
  - IPPO（独立 PPO）
  - MAPPO（集中值函数的 PPO）
  - Mac‑based Baseline（Xiao et al. 2022 中两种最优方法的平均值）
- **评估内容**：
  - **整体性能**：六组场景（3 布局 × 2 食谱），比较 M3HF 与三个基线的平均回合回报曲线。
  - **混合质量反馈影响**：在训练中故意注入低质量反馈（如“任务已完成，无需改进”），观察性能变化；并测试用 VLM（Gemini‑1.5‑Pro）替代人类反馈的效果。
  - **消融实验**：
    - 反馈解析 + 权重调整的有效性（原始反馈 vs. 仅 LLM 解析 vs. 完整 M3HF）。
    - 多阶段 vs. 单阶段反馈（仅在训练初提供反馈）。
    - 与内在奖励方法 IRAT（三种手工设计的内在奖励变体）对比。

### 4. 资源与算力
- **硬件**：异构计算集群，多种 CPU（Dual Intel Xeon E5-2650 / 2680 v2 / 2690 v3），3 块 NVIDIA A30 GPU，总计 180 CPU 核心、500 GB 内存。未给出单个实验的训练时长。
- **LLM**：反馈解析使用 gpt‑4o‑2024‑11‑20；VLM 实验使用 Gemini‑1.5‑Pro‑002。

### 5. 实验数量与充分性
- **实验组数量**：主实验 6 个场景，每个均有三个随机种子并绘制标准差区域；额外包含低质量反馈对比、VLM 对比、三项消融（表 1‑3），以及 Google Football 5v5 的扩展实验（附录）。整体实验数量较充足。
- **充分性与公正性**：对比了多种代表性的 MARL 基线，所有对比方法均进行了超参数调优。消融设计能够分离解析、权重调整、多阶段反馈以及内在奖励的贡献。但 VLM 实验仅在一张图上展示了一条曲线，稍显单薄。
- **潜在偏差**：人类反馈由作者模拟（未详细说明如何收集真实 user study 数据），这可能使反馈更贴合预期，夸大了方法的有效性；低质量反馈也是人工构造的极端 case，不一定反映真实噪声的分布。

### 6. 论文的主要结论与发现
- M3HF 在所有 Overcooked 场景中均显著优于 MAPPO、IPPO 及 Mac‑based Baseline，尤其在复杂布局和食谱中的优势更为明显。
- 通过权重衰减和基于性能的调整，M3HF 对低质量反馈表现出强鲁棒性，即使收到无用反馈，性能仍不低于无反馈的基线水平，支持了理论分析。
- 多阶段反馈远优于仅在初始阶段提供反馈的单阶段模式；LLM 解析和动态权重调整都是实现高性能的关键组件。
- 现阶段的 VLM（Gemini‑1.5‑Pro）还无法生成足够精确、可操作的多智能体协作反馈，其效果仅与基线持平。
- 方法可扩展到 Google Research Football（5v5）环境，显示出良好的可迁移性。

### 7. 优点
- **新颖的框架设计**：首次将多阶段混合质量反馈、LLM 反馈解析和自适应奖励池组合用于 MARL。
- **理论与实现相结合**：给出了 rollout 性能估计和低质量反馈鲁棒性的理论支撑，算法流程清晰，代码开源。
- **可扩展的模板机制**：预定义奖励模板 + LLM 的参数化方式使奖励设计更结构化、可解释，降低了对专家知识的依赖。
- **全面的实验验证**：涵盖多种复杂协作场景、消融分析以及 VLM 替代尝试，实证扎实。

### 8. 不足与局限
- **环境相对单一**：主要评估集中在 Overcooked 变体，尚未在更广泛的连续控制或动态多智能体任务中验证。
- **人类反馈的模拟**：实验中的反馈均由研究者按照预设剧本生成，未招募真实人类，可能高估该框架在实际人机交互中的效果。
- **LLM 依赖**：反馈解析与奖励参数化高度依赖 LLM 的质量和可及性，可能产生解析误差，且调用成本和延迟会限制在线训练的效率。
- **假设人类策略更优**：方法默认人类策略优于智能体策略，但在某些高难度任务中人类指导可能不准确，如何取舍未深入探讨。
- **VLM 瓶颈**：当前 VLM 在复杂时空推理上能力有限，使其暂不能替代人类反馈，限制了全自动闭环的可能性。
- **权重调整机制简单**：仅根据单次性能对比线性增减权重，可能对评价噪声敏感，且未考虑长期效果。

（完）
