---
title: Active Fine-Tuning of Multi-Task Policies
title_zh: 面向多任务策略的主动微调
authors: "Marco Bagatella, Jonas Hübotter, Georg Martius, Andreas Krause"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=hlyBdwHBeC"
tags: ["query:fla"]
score: 8.0
evidence: 通过自适应选择任务最大化信息增益的预训练策略主动微调。
tldr: 提出AMF算法，在有限演示预算下主动选择信息增益最大的任务进行微调，提升预训练智能体在多任务场景下的适应效率。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 834, \"height\": 248, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1779, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 322, \"height\": 318, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1738, \"height\": 1009, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 672, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 981, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1773, \"height\": 2301, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1768, \"height\": 629, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1412, \"height\": 626, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 867, \"height\": 557, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1412, \"height\": 515, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 765, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1765, \"height\": 468, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1752, \"height\": 655, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1439, \"height\": 1001, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1438, \"height\": 1002, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1783, \"height\": 1004, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1787, \"height\": 1005, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1732, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1754, \"height\": 934, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hlybdwhbec/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 878, \"height\": 1127, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-hlybdwhbec/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 851, \"height\": 503, \"label\": \"Table\"}]"
motivation: 多任务学习时如何高效选择演示任务以最大化策略性能尚不明确。
method: 提出AMF，基于预期策略性能的信息增益主动选择需演示的任务。
result: 在机器人操纵任务中，AMF在相同预算下实现了更高的多任务策略性能。
conclusion: 主动微调策略为预训练智能体的快速多任务适应提供了有效途径。
---

## Abstract
Pre-trained generalist policies are rapidly gaining relevance in robot learning due to their promise of fast adaptation to novel, in-domain tasks.
This adaptation often relies on collecting new demonstrations for a specific task of interest and applying imitation learning algorithms, such as behavioral cloning.
However, as soon as several tasks need to be learned, we must decide *which tasks should be demonstrated and how often?*
We study this multi-task problem and explore an interactive framework in which the agent *adaptively* selects the tasks to be demonstrated.
We propose AMF (Active Multi-task Fine-tuning), an algorithm to maximize multi-task policy performance under a limited demonstration budget by collecting demonstrations yielding the largest information gain on the expert policy.
We derive performance guarantees for AMF under regularity assumptions and demonstrate its empirical effectiveness to efficiently fine-tune neural policies in complex and high-dimensional environments.

---

## 论文详细总结（自动生成）

好的，下面是基于提供的论文内容生成的中文总结。

### 核心问题与整体含义
- **研究动机与背景**：在机器人学习领域，预训练的“通才”策略日益重要，因为它们能快速适应新的任务。这种适应通常依赖于为特定任务收集专家演示并进行行为克隆。然而，当需要学习多个任务时，一个关键问题出现了：**应该为哪些任务收集演示？以及收集多少次？**
- **核心问题**：论文研究的核心问题是在**有限的演示预算**下，如何通过**自适应地选择**要演示的任务，来最大化预训练多任务策略的性能。这类似于让一个家用机器人主动请求它最需要的演示，以最高效地弥补其不足。

### 方法论
- **核心思想**：论文提出了名为 **AMF（Active Multi-task Fine-tuning，主动多任务微调）** 的算法。其核心思想是模仿贝叶斯优化中的信息获取策略，在每一轮中，选择能够**最大化关于专家策略的预期信息增益**的任务进行演示。直观上，就是选择最能减少当前策略不确定性的任务。
- **关键技术细节**：
    - **选择标准**：算法的目标函数是选择任务 \( c_n \)，使得在评估任务分布和专家轨迹分布上，对策略的熵减少（即信息增益）的期望值最大化。
    - **理论保证**：论文证明了在一定正则性假设（如Lipschitz平滑）下，AMF能使模仿策略的性能收敛到专家策略的水平，并给出了性能差距的上界 \( O(\gamma(H_n)/\sqrt{n}) \)。
    - **实际实现：AMF-NN**：为将AMF应用于神经网络策略，论文解决了两个关键挑战：
        1.  **熵估计**：利用损失梯度嵌入将神经网络近似为高斯过程，从而可以计算近似后验熵。
        2.  **灾难性遗忘**：提出了一种名为 **“自适应先验”（Adaptive Prior）** 的实用方法。通过维护一个预训练策略的副本，在推理时以任务相关的权重将微调策略与预训练策略的输出进行线性组合，并用带保守性惩罚的行为克隆损失来训练该权重，从而在提升新任务性能的同时保留预训练能力。

### 实验设计
- **使用场景/数据集**：
    - **低维验证**：在一个简单的**2D积分器**环境中，任务为到达圆上的点，策略用高斯过程（GP）建模。
    - **高维机器人操作（AMF-NN）**：使用了两个标准多任务学习基准——**Metaworld**（4个任务，如移动杯子、开关水龙头）和 **FrankaKitchen**（5个任务，如开关旋钮、开门）。
    - **视觉输入扩展**：在上述环境中也评估了基于RGB图像作为输入的场景。
    - **更大规模验证**：在 **Robomimic** 基准（4个长时域、高精度操作任务，由人类专家演示）和基于 **Octo** 通才策略的 **WidowX** 任务上进行了实验。
- **对比方法**：
    - **Uniform（均匀采样）**：基线方法，从任务集中均匀随机地选择任务进行演示。
    - **AMF-GP**：在高斯过程策略上应用的AMF。
    - **AMF-NN**：在神经网络策略上应用的AMF，通常结合“自适应先验”。
    - **Rebalancing（再平衡）**：一种特权基线，假设已知预训练数据的任务分布，优先演示预训练中最少的任务。
- **评估指标**：主要指标为**多任务成功率（Multi-task success rate）**，即在测试时成功完成所有任务的平均比例。

### 资源与算力
- 论文**未明确提及**所使用GPU的具体型号和数量。
- 论文提到，每个AMF-NN实验运行**最多需要5小时**并使用了GPU加速，而AMF-GP实验可以在CPU上于**10分钟内**完成。

### 实验数量与充分性
- **实验数量**：实验设计较为全面，涵盖了从低维验证（GP）到高维模拟机器人任务（NN），再到视觉输入和更大规模策略（Diffusion Policy、Octo）的多个层次。
- **消融与变体**：
    - **预训练分布**：系统地评估了预训练数据分布与评估分布**匹配（no mismatch）** 和**不匹配（mismatch）** 的情况，后者更有挑战性。
    - **不确定性估计**：对比了不同的不确定性估计方法（损失梯度嵌入、最后一层嵌入、Dropout），验证了其方法对熵估计选择的敏感性。
    - **灾难性遗忘缓解**：对比了L2正则化、EWC和“自适应先验”在防止遗忘上的效果。
- **评估充分性**：所有结果均报告了基于**10个随机种子**的均值和90%自助置信区间，确保了结果的统计可靠性。实验设计客观、公平，全面覆盖了论文的核心主张。

### 主要结论与发现
- **高效性**：AMF能有效指导主动任务选择，与均匀采样相比，在相同的演示预算下获得更高的多任务策略性能。
- **对分布不匹配鲁棒**：当预训练数据分布与目标评估分布不匹配时，AMF的增益**尤为显著**，因为它能自动聚焦于预训练不充分的任务。
- **实用性**：AMF-NN结合“自适应先验”，能成功扩展到用神经网络参数化的高维任务和视觉任务中，并有效缓解了灾难性遗忘问题。
- **通用性**：该方法展现出广泛的适用性，甚至可以应用于像扩散策略这样的现代策略类。

### 优点
- **理论与实践的桥梁**：论文提供了严格的理论性能保证，并将其巧妙地扩展到实际、高维的深度神经网络场景。
- **问题的新颖性**：首次形式化地研究了在动态系统下，针对多任务行为克隆的主动数据选择问题。
- **实用的解决组件**：提出的“自适应先验”方法是一个独立且有价值的贡献，为解决微调过程中的灾难性遗忘提供了一个轻量且有效的方案。
- **实验说服力强**：实验设计系统，从简单到复杂，涵盖了多种环境、输入模态和预训练场景，结论令人信服。

### 不足与局限
- **不确定性估计的依赖**：AMF-NN的性能依赖于不确定性估计的质量，而神经网络的不确定性估计本身仍是一个开放性问题。论文所采用的梯度嵌入近似虽有效，但可能不是所有情况下的最优解。
- **实验环境规模**：尽管实验覆盖了多个标准基准，但任务数量仍然有限（最多5个）。在面对拥有成百上千个任务的真实大规模通才策略时，AMF的计算效率和扩展性有待进一步验证。
- **计算开销**：虽然在文中实验运行时间可接受（5小时），但AMF的候选任务评估目标涉及多次占用率估计和熵计算，当任务空间非常庞大时，其计算开销可能成为瓶颈。
- **增益的前提**：当预训练策略在各个任务上能力非常均衡时，AMF的优势不明显，其收益与简单的均匀采样基线相当。

（完）
