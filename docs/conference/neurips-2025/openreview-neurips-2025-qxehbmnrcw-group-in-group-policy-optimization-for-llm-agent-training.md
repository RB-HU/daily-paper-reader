---
title: Group-in-Group Policy Optimization for LLM Agent Training
title_zh: 面向 LLM 智能体训练的组内组策略优化
authors: "Lang Feng, Zhenghai Xue, Tingcong Liu, Bo An"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=QXEhBMNrCW"
tags: ["query:fla"]
score: 9.0
evidence: 提出新型强化学习算法 GiGPO，用于多轮 LLM 智能体训练中的细粒度信用分配，属于智能体后训练技术。
tldr: 现有基于组的强化学习方法在单轮任务上表现良好，但向多轮智能体训练扩展时面临信用分配难题。本文提出组内组策略优化（GiGPO），通过两级相对优势估计实现细粒度信用分配，同时保持无批评家、低内存和稳定收敛。在多个智能体基准上验证了其有效性，为多轮交互场景下的 LLM 智能体后训练提供了新的强化学习算法，对金融对话代理等多轮任务具有应用潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1407, \"height\": 573, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 652, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1447, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 418, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 560, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1434, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qxehbmnrcw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 640, \"height\": 366, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-qxehbmnrcw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 520, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qxehbmnrcw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1442, \"height\": 758, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qxehbmnrcw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 930, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qxehbmnrcw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 950, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qxehbmnrcw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1166, \"height\": 184, \"label\": \"Table\"}]"
motivation: 多轮智能体交互中奖励稀疏且延迟，现有算法难以进行有效的逐步信用分配。
method: 提出 GiGPO 算法，引入两级结构（组内和组间）来估计相对优势，实现细粒度信用分配。
result: 在多轮代理基准上展现性能优势，优于现有基于组的方法，且保持低内存和稳定收敛。
conclusion: 为 LLM 智能体的强化学习后训练提供了有效算法，尤其适用于需要长序贯决策的任务。
---

## Abstract
Recent advances in group-based reinforcement learning (RL) have driven frontier large language models (LLMs) in single-turn tasks like mathematical reasoning. However, their scalability to multi-turn LLM agent training remains limited. Unlike static tasks, agent-environment interactions unfold over many steps and often yield sparse or delayed rewards, making credit assignment across individual steps significantly more challenging. In this work, we propose Group-in-Group Policy Optimization (GiGPO), a novel RL algorithm that achieves fine-grained credit assignment for LLM agents while preserving the appealing properties of group-based RL: critic-free, low memory, and stable convergence. GiGPO introduces a two-level structure for estimating relative advantage: (i) At the episode-level, GiGPO computes macro relative advantages based on groups of complete trajectories; (ii) At the step-level, GiGPO introduces an anchor state grouping mechanism that retroactively constructs step-level groups by identifying repeated environment states across trajectories. Actions stemming from the same state are grouped together, enabling micro relative advantage estimation. This hierarchical structure effectively captures both global trajectory quality and local step effectiveness without relying on auxiliary models or additional rollouts. We evaluate GiGPO on challenging agent benchmarks, including ALFWorld and WebShop, as well as tool-integrated reasoning on search-augmented QA tasks, using Qwen2.5-1.5B/3B/7B-Instruct. Crucially, GiGPO delivers fine-grained per-step credit signals, achieves performance gains of > 12\% on ALFWorld and > 9\% on WebShop over GRPO, and obtains superior performance on QA tasks (42.1\% on 3B and 47.2\% on 7B): all while maintaining the same GPU memory overhead, identical LLM rollout, and incurring little to no additional time cost.

---

## 论文详细总结（自动生成）

好的，请查收按照您的要求生成的详细中文总结。

### 论文核心问题与整体含义
本论文针对大型语言模型智能体在多轮交互任务中训练时所面临的关键挑战：**信用分配难题**。
*   **研究背景**：现有的基于组的强化学习算法（如GRPO）凭借其无需价值函数、低内存开销和稳定收敛的优点，在单轮任务（如数学推理）中取得了巨大成功。
*   **核心问题**：当LLM智能体在环境中进行多步交互时（例如在虚拟家庭或网页购物中），任务周期长，且奖励通常是稀疏或延迟的（仅在任务结束时给出成功/失败信号）。传统基于组的RL方法将整个交互序列视为一个整体来评估，无法为序列中的每个独立动作提供有效的细粒度反馈信号，导致学习效率低下。
*   **整体含义**：本研究旨在提出一种新型RL算法，既能**保留**基于组RL的高效、稳定的核心优势，又能**引入**针对多轮决策场景的**细粒度信用分配**能力，从而显著提升LLM智能体在长时序任务中的训练效果。

### 方法论：组内组策略优化
论文提出了**组内组策略优化**（`GiGPO`），其核心思想是通过构建一个**双层分组结构**来估计优势函数，同时实现宏观序列级和微观动作级的信用分配。

*   **第一层：序列级相对优势**：
    *   在与GRPO类似的层面，对来自同一任务和相同初始状态的 \(N\) 条完整交互轨迹 \(\{ \tau_1, \tau_2, ..., \tau_N \}\)，基于其总回报 \(R(\tau_i)\) 计算一个宏观的相对优势 \(A_E(\tau_i)\)。
    *   公式表示为：
        \[
        A_E(\tau_i) = \frac{R(\tau_i) - \text{mean}(\{R(\tau_j)\}_{j=1}^N)}{F_{\text{norm}}(\{R(\tau_j)\}_{j=1}^N)}
        \]
        其中，\(F_{\text{norm}}\) 为标准差（`std`）或固定值 \(1\)。这捕捉了整条轨迹的全局质量。

*   **第二层：动作级相对优势**：
    *   这是`GiGPO`的核心创新。它引入了一个**锚点状态分组机制**，无需额外采样即可构建动作级别的比较组。
    *   **关键洞察**：在一组从相同初始状态出发的轨迹中，由于无效动作或循环，智能体常常会**重复遇到相同的环境状态**（例如，多次回到同一个网页或房间）。这些重复状态被称为 **“锚点状态”**。
    *   **分组流程**：算法会回溯性地识别所有轨迹中出现的所有独立状态，并为每一个锚点状态 \(\tilde{s}\) 构建一个动作级分组 \(G_S(\tilde{s})\)。该分组包含了在所有轨迹中、任何时候处于该状态时所采取的动作 \(a^{(i)}_t\) 及其对应的**折扣未来回报** \(R^{(i)}_t\)。
    *   基于此分组，计算动作的微观相对优势 \(A_S(a^{(i)}_t)\)，从而评估在同一状态下，哪个动作更好。这巧妙地利用了轨迹间的冗余信息，实现了对单步动作的精确信用分配。

*   **最终目标函数**：
    *   将上述两个层级的优势信号合并，构成最终的“组内组”优势：
        \[
        A(a^{(i)}_t) = A_E(\tau_i) + \omega \cdot A_S(a^{(i)}_t)
        \]
    *   其中，权重系数 \(\omega\) 用于平衡全局和局部信号。然后，将此组合优势代入类似PPO的剪切目标函数中进行策略优化。整个流程**无需额外的价值模型，GPU内存和LLM推理成本与GRPO持平**。

### 实验设计
论文通过在多种复杂智能体基准上的实验来验证`GiGPO`的有效性。

*   **数据集与场景**：
    *   **ALFWorld**：一个具身智能体环境，测试智能体在模拟家庭中完成多步任务的能力，包含六类家务活动。
    *   **WebShop**：一个模拟的网页交互环境，要求智能体根据用户指令浏览并购买合适商品。
    *   **搜索增强问答**：包括单跳（NQ, TriviaQA, PopQA）和多跳（HotpotQA, 2Wiki等）问答数据集，评估智能体多轮调用搜索工具的能力。

*   **基准对比方法**：
    *   **闭源/提示工程**：`GPT-4o`, `Gemini-2.5-Pro`, `ReAct`, `Reflexion`。
    *   **RL训练方法**：基于Actor-Critic的`PPO`，以及基于组的`RLOO`，`GRPO`。
    *   **针对QA场景**：`Search-R1`, `ZeroSearch`, `StepSearch`等最新方法。

*   **基座模型**：主要使用`Qwen2.5-1.5B/3B/7B-Instruct`系列模型。

### 资源与算力
论文明确给出了训练所用算力：
*   **ALFWorld & WebShop**：`Qwen2.5-1.5B`实验使用 **2×H100 GPU**；`Qwen2.5-7B`实验使用 **4×H100 GPU**。每个任务训练**150个迭代**。
*   **搜索增强QA**：`Qwen2.5-3B`实验使用 **4×H100 GPU**；`Qwen2.5-7B`实验使用 **8×H100 GPU**。每个任务训练**200个迭代**。

### 实验数量与充分性
实验设计较为全面且客观，具体体现在：
*   **多场景覆盖**：在3种性质不同的多轮交互场景下进行了验证。
*   **多模型验证**：在1.5B、3B、7B三个参数规模的模型上均进行了实验。
*   **多基线对比**：与提示工程、经典RL、最新的组RL方法共计十余种baseline进行了对比，比较公平。
*   **消融实验**：剥离了两种优势信号（\(A_E\)与\(A_S\)），证明二者都是关键组件。
*   **动态分析**：分析了训练过程中锚点状态分组大小的变化，直观展示了智能体行为的演变。
*   **效率分析**：精确测试了新增组件的计算耗时，证实其开销极低（<0.002%）。
*   **鲁棒性/扩展性分析**：计算了结果的均值和标准差（多随机种子），分析了关键超参数 \(\omega\) 的敏感性，并展示了其与其他组RL技术（如DAPO）的兼容性。

### 主要结论与发现
*   `GiGPO`在所有基准任务上均表现最优，在`ALFWorld`和`WebShop`上的成功率相比`GRPO`分别有**>12%** 和 **>9%** 的显著提升。
*   算法成功地将细粒度信用信号引入了基于组的RL框架中，显著提升了长周期任务的学习效率和最终性能。
*   该性能提升是在**不增加GPU内存开销、不增加额外的LLM推理次数、且计算时间开销几乎可以忽略不计**（<0.002%）的情况下实现的。
*   在搜索增强问答任务上，`GiGPO`展现出了更高的工具使用效率（更少的平均检索次数）。

### 优点
*   **创新性强**：巧妙利用多轨迹中重复出现的环境状态作为“免费”的锚点，以极低成本实现了动作级信用分配，核心思想优雅且有效。
*   **实用性强**：完全保留了基于组RL方法的核心优势（无批判家、低内存、效率高），可直接作为一个更强大的替代方案应用于大规模智能体训练中。
*   **实验扎实**：实验覆盖了多种环境和模型规模，对比和消融研究充分，并对算法动态和计算开销进行了深入分析。

### 不足与局限
*   **依赖精确状态匹配**：`GiGPO`的核心机制依赖于在不同轨迹中识别出完全相同的环境状态。在状态信息包含大量噪声、是连续的高维向量（如原始像素输入）或语义相似但文本表述不同时，这种精确匹配可能失效，导致无法构建有效的步骤级分组。
*   **未与基于价值的方法深度整合**：虽然`GiGPO`避免了价值网络，但在某些环境下，价值网络提供的稳定基线可能仍有帮助，论文未探讨如何与这些方法结合。
*   **实验场景尚需拓展**：尽管覆盖了三种类型的环境，但仍侧重于相对封闭、规则明确的模拟环境。在更开放、更真实的数字化或物理世界任务中的表现有待进一步验证。

（完）
