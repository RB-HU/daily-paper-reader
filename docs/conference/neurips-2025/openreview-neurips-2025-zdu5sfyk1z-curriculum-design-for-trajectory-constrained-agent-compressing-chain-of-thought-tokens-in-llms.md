---
title: "Curriculum Design for Trajectory-Constrained Agent: Compressing Chain-of-Thought Tokens in LLMs"
title_zh: 轨迹约束智能体的课程设计：压缩思维链Token
authors: "Georgios Tzannetos, Parameswaran Kamalaruban, Adish Singla"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=zDU5sfYK1Z"
tags: ["query:fla"]
score: 8.0
evidence: 基于课程学习的受限智能体强化学习训练
tldr: 针对部署时严格约束（如资源预算）的训练难题，提出渐进式约束收紧的课程学习策略，从简化约束开始训练，逐步过渡到完整部署条件，使智能体平稳掌握约束。理论分析显示该方法与传统自步学习等价。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1418, \"height\": 295, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1358, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1397, \"height\": 838, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1386, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1456, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 1386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1334, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1329, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1424, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1429, \"height\": 564, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1424, \"height\": 564, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1428, \"height\": 566, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1336, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zdu5sfyk1z/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1331, \"height\": 876, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1456, \"height\": 781, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1453, \"height\": 319, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1456, \"height\": 978, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1456, \"height\": 1624, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1434, \"height\": 542, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-zdu5sfyk1z/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 744, \"label\": \"Table\"}]"
motivation: 智能体在复杂约束下直接训练困难，需要渐进式掌握部署要求。
method: 借鉴自步学习，设计约束逐步严格的课程，从易到难训练智能体，配合RL优化链式推理长度。
result: 实验表明该方法能使智能体高效适应严格约束，同时保持任务性能。
conclusion: 为金融领域受限智能体的后训练提供了课程设计范式，适用于成本或合规约束场景。
---

## Abstract
Training agents to operate under strict constraints during deployment, such as limited resource budgets or stringent safety requirements, presents significant challenges, especially when these constraints render the task complex. In this work, we propose a curriculum learning strategy that gradually tightens constraints during training, enabling the agent to incrementally master the deployment requirements. Inspired by self-paced learning techniques in unconstrained reinforcement learning (RL), our approach facilitates a smoother transition to challenging environments by initially training on simplified versions of the constraints and progressively introducing the full deployment conditions. We provide a theoretical analysis using an RL agent in a binary-tree Markov Decision Process (MDP) to demonstrate that our curriculum strategy can accelerate training relative to a baseline approach that imposes the trajectory constraints from the outset. Moreover, we empirically validate the effectiveness and generality of our method across both RL and large language model (LLM) agents in diverse settings, including a binary-tree MDP, a multi-task navigation domain, and a math reasoning task with two benchmarks. These results highlight the potential of curriculum design in enhancing the efficiency and performance of agents operating under complex trajectory constraints during deployment. Moreover, when applied to LLMs, our strategy enables compression of output chain-of-thought tokens, achieving a substantial inference speedup on consumer hardware, demonstrating its effectiveness for resource-constrained deployment.

---

## 论文详细总结（自动生成）

好的，请查收根据论文内容生成的结构化总结：

# 论文深度分析：轨迹约束智能体的课程设计：压缩LLM思维链令牌

### 1. 论文的核心问题与整体含义

*   **核心研究问题**：如何在**部署阶段存在严格、轨迹级别约束**（如有限的资源预算或严苛的安全需求）的情况下，高效地训练智能体（包括传统强化学习智能体和大型语言模型智能体），使其在满足约束的同时达到最优性能。
*   **研究背景与动机**：
    *   **训练与部署的差距**：标准的强化学习假设训练和部署环境资源相同，但现实应用中部署时常有严格限制。例如，机器人导航有能耗和时间限制；大语言模型回答问题时有思维链（Chain-of-Thought，CoT）的令牌数量限制。
    *   **传统方法的局限性**：
        *   **直接施加约束**：会造成严重的稀疏奖励问题，智能体极难获得正向奖励信号，导致训练无效。
        *   **标准约束强化学习（Constrained RL）**：通常处理的是期望层面的约束（如期望成本不超过阈值），而非本文关注的严格、轨迹级别的约束。
        *   **上下文强化学习课程（Contextual RL Curriculum）**：将成本预算视为输入上下文，但需要在整个高维上下文空间进行性能评估，计算开销巨大，尤其在大型语言模型领域不切实际。
*   **整体含义**：本文提出一种**课程学习策略**，通过在训练过程中**逐渐收紧约束**，让智能体从易到难逐步掌握在严格部署条件下的能力，从而平稳过渡，避免稀疏奖励问题，并显著提升训练效率和最终性能。

### 2. 论文提出的方法论

*   **核心思想**：借鉴无约束强化学习中的**自步学习（Self-Paced Learning）** 技术，设计一种自适应课程策略。该策略不再从训练一开始就使用最终的严格部署约束，而是根据**智能体当前的表现**，动态地选择训练时的**可允许成本预算（αt）**。初始时预算宽松，当智能体表现提升后，预算再逐步收紧至目标值。
*   **关键技术细节**：
    *   **问题形式化**：将任务建模为上下文马尔可夫决策过程（MDP）。定义了轨迹级别的奖励函数 `Jx`，只有当轨迹总成本 `ΣC` 不超过目标预算 `α*` 时，智能体才能获得任务完成奖励。这构成了一个**稀疏奖励**问题。
    *   **课程策略（名为`CuRLTraC`）**：在训练步骤 `t`，对于选定的任务 `x`，教师组件通过求解以下优化问题来选择训练成本预算 `αt`：`αt` 既要尽可能接近最终目标 `α*`，又要保证在当前策略 `πt` 下，使用奖励函数 `Jαt` 所能获得的期望性能不低于一个阈值 `β`。这确保了学习信号始终足够。
    *   **算法流程**（算法1 & 2）：
        1. 环境随机选择一个任务 `x`。
        2. **教师组件**：基于当前策略 `πt` 进行多次轨迹采样，利用采样结果评估策略在不同预算下的表现。通过**二分搜索**，在满足“期望性能 ≥ threshold `β`”的条件下，找到与目标预算 `α*` 最接近的 `αt`。
        3. **学生组件**：在修改后的MDP（使用 `αt` 作为约束）中进行 `K`次轨迹采样，并利用这些样本和整形后的奖励函数 `bJ` 来更新策略 `πt` → `πt+1`（如通过`REINFORCE`算法）。
*   **理论分析**：在一棵**二叉树MDP**环境中进行了理论证明。
    *   设定：树的深度为 `H`，只有最左侧叶子节点满足最终成本约束。随机初始化的智能体需要探索到正确路径。
    *   结论（定理1）：**目标课程策略**（始终用最终约束）需要 `O(2^H)` 的样本复杂度（指数级）；而提出的**自适应课程策略**通过逐步收窄成功路径的范围（成功率从1/2逐步降低到一个极小比例），能将样本复杂度降低至 `O(H^3)`（多项式级）。

### 3. 实验设计

*   **数据集/场景**：
    1.  **`Binary Tree`**：一个深度为12的二叉树MDP，叶子节点共4096个，用于验证理论。
    2.  **`Puddle Grid-Single`**：单任务导航网格环境，智能体需避开熔岩方格到达目标，目标约束成本为0（完全避开）。
    3.  **`Puddle Grid-Multi`**：多任务导航网格环境，智能体和目标的初始位置随机化。
    4.  **`SVAMP` / `GSM8K`**：两个数学推理基准数据集，用于测试大型语言模型智能体。部署约束是生成的CoT令牌数不超过目标预算（基础模型原始回答长度的一定百分比）。
*   **对比方法**：
    *   **`Target`**：基线，训练时直接使用最终部署约束。
    *   **`Unconstraint`**：基线，训练时无任何约束。
    *   **`iid`**：基线，训练时每回合随机采样一个成本预算。
    *   **`ProCuRL-Target`**：一种先进的上下文强化学习课程方法（仅在传统强化学习环境应用）。
    *   **`Soft-RL`**：正则化强化学习基线，将惩罚过长的回答作为奖励函数的一部分（软约束），而非硬约束。
    *   **`ExpSchedule`**：静态课程基线，使用固定指数衰减的成本预算计划。
    *   **`AnsOnlyPrompt`**：提示工程基线，直接要求大型语言模型不输出思维链，仅给出答案（仅用于大型语言模型实验）。

### 4. 资源与算力

*   **论文明确提及**：
    *   **大型语言模型实验**：在配备**八块Nvidia H100 GPU**的SLURM集群上进行。
    *   **大型语言模型训练时长**：最长的单个实验运行时间约为**三天**。
    *   **传统强化学习实验**：在配备**Intel Xeon Gold CPUs**的集群上进行。

### 5. 实验数量与充分性

*   **实验内容**：
    *   在**四种不同环境（3种传统强化学习 + 2种含不同基础模型的大型语言模型数学任务）** 上与**七种以上基线方法**进行了全面对比。
    *   **消融研究/参数分析**：对核心超参数`β`（性能阈值）在0.1到0.9之间进行了充分的敏感性分析；对`ExpSchedule`策略的不同衰减长度进行了变体分析。
    *   **算法鲁棒性验证**：除了主要的`REINFORCE`算法外，还在传统强化学习环境上使用`PPO`算法进行了额外实验，验证了方法的鲁棒性。
    *   **多维度分析**：除了最终测试性能，还展示了训练过程中的成本预算`α`、训练奖励、大型语言模型回答长度的动态变化曲线，并从推理时间、准确率、约束准确率等维度在多种消费级硬件上评估了部署效果。
*   **客观性评价**：实验设计全面且充分，从理论验证、传统强化学习到大型语言模型，覆盖多种场景。对比方法既包括了直接相关基线，也包括了提示工程、软约束等替代方案。报告的指标涵盖了最终效果和过程动态，并有误差线和多次随机种子实验，有效支撑了论文结论。

### 6. 论文的主要结论与发现

*   **加速且高效的训练**：与直接施加严格约束的基线相比，`CuRLTraC`策略通过渐进式约束收紧，能够为数倍甚至指数级地加速训练，有效解决稀疏奖励问题。
*   **方法普适性**：该策略不仅在传统强化学习任务（二义树、网格导航）中表现优越，也能成功应用于大语言模型智能体的微调，显示出跨领域的能力。
*   **大型语言模型上的关键发现**：`CuRLTraC`可以在微调过程中，让大型语言模型学会生成越来越短但依然正确的CoT推理过程（Token压缩），在满足严格部署约束的同时，保持甚至提高答案准确性，并在消费级硬件上实现大幅推理加速。

### 7. 优点

*   **新颖且高效的方法**：提出了一种计算高效的自适应课程策略，避免了上下文强化学习对大规模上下文空间的昂贵探索。
*   **坚实的理论与实证结合**：提供了清晰的理论分析（多项式 vs. 指数级样本复杂度），并通过跨多个领域（传统强化学习、大型语言模型）的实验充分验证。
*   **问题定义清晰且有现实意义**：精准定位了“严格轨迹约束下”的强化学习稀疏奖励难题，并给出了非常吸引人的实际应用案例（大语言模型推理加速）。
*   **方法简洁且鲁棒**：核心思路明确，实现依赖于高效的二分搜索。实验证明了其对不同`RL`算法（`REINFORCE`， `PPO`）和超参数（`β`）选择的鲁棒性。

### 8. 不足与局限

*   **依赖预定义约束**：方法假设部署时的目标约束在训练前是已知且固定的。无法处理动态变化的部署约束。
*   **泛化到多约束的挑战**：实验中的约束多为单一维度的成本（如步数或令牌数），未来是否能被平滑扩展到多个或更复杂的约束（如组合约束）还有待研究。
*   **`β`的选择缺乏指导**：虽然鲁棒性分析显示`β=0.5`在多种环境中效果良好，但该阈值的设定仍然依赖经验，缺乏针对特定环境自动确定最佳`β`的理论指导。
*   **内部机理分析不足**：论文指出了这一局限，即虽然观察到策略有效，但微调后模型的内部行为（如注意力模式、内部表征）如何变化以支持推理压缩的机理尚不清晰。

（完）
