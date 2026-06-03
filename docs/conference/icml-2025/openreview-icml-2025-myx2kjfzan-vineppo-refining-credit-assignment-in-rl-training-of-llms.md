---
title: "VinePPO: Refining Credit Assignment in RL Training of LLMs"
title_zh: VinePPO：精炼LLM的RL训练中的信用分配
authors: "Amirhossein Kazemnejad, Milad Aghajohari, Eva Portelance, Alessandro Sordoni, Siva Reddy, Aaron Courville, Nicolas Le Roux"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Myx2kJFzAn"
tags: ["query:fla"]
score: 8.0
evidence: VinePPO改进了LLM的PPO训练中的信用分配，是自主LLM智能体后训练的关键技术
tldr: 针对LLM复杂推理任务RL训练中价值网络信用分配不准的问题，VinePPO系统性评估并揭示了其缺陷，提出新的改进方案，有效提升了LLM后训练的稳定性与性能，对使用PPO进行金融LLM智能体后训练具有重要参考价值。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1636, \"height\": 591, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1745, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 858, \"height\": 833, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1751, \"height\": 963, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1747, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1581, \"height\": 467, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 857, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1661, \"height\": 458, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1756, \"height\": 1137, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1764, \"height\": 605, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1758, \"height\": 1607, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1753, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1755, \"height\": 1268, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1756, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1758, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1757, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1056, \"height\": 607, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1113, \"height\": 604, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 887, \"height\": 527, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 893, \"height\": 567, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1765, \"height\": 813, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1762, \"height\": 873, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1767, \"height\": 876, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1762, \"height\": 867, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1767, \"height\": 876, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1763, \"height\": 873, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1766, \"height\": 876, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1760, \"height\": 862, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1756, \"height\": 711, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1752, \"height\": 724, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1757, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1755, \"height\": 737, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1738, \"height\": 735, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 1753, \"height\": 522, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-myx2kjfzan/fig-035.webp\", \"caption\": \"\", \"page\": 0, \"index\": 35, \"width\": 1759, \"height\": 626, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-myx2kjfzan/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1780, \"height\": 1128, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-myx2kjfzan/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1781, \"height\": 1056, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-myx2kjfzan/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1781, \"height\": 695, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-myx2kjfzan/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1781, \"height\": 695, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-myx2kjfzan/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1296, \"height\": 265, \"label\": \"Table\"}]"
motivation: LLM推理任务中，PPO的价值网络常给出差的回报估计，信用分配不准。
method: 提出VinePPO方法，改进价值网络以更精确地分配步骤级信用。
result: 实验表明，VinePPO在推理任务上显著优于基线PPO。
conclusion: 该方法为LLM后训练的信用分配提供了有效解决方案，可推广至金融智能体。
---

## Abstract
Large language models (LLMs) are increasingly applied to complex reasoning tasks that require executing several complex steps before receiving any reward. Properly assigning credit to these steps is essential for enhancing model performance. Proximal Policy Optimization (PPO), a common reinforcement learning (RL) algorithm used for LLM finetuning, employs value networks to tackle credit assignment. However, recent approaches achieve strong results without it, raising questions about the efficacy of value networks in practice. In this work, we systematically evaluate the efficacy of value networks and reveal their significant shortcomings in reasoning-heavy LLM tasks, showing that they often produce poor estimate of expected return and barely outperform a random baseline when comparing alternative steps. This motivates our key question: Can improved credit assignment enhance RL training for LLMs? To address this, we propose VinePPO, a straightforward approach that leverages the flexibility of language environments to compute unbiased Monte Carlo-based estimates. Our method consistently outperforms PPO and other baselines across MATH and GSM8K datasets in less wall-clock time (up to 3.0x).  Crucially, it achieves higher test accuracy for a given training accuracy, capturing more generalization signal per sample. These results emphasize the importance of accurate credit assignment in RL training of LLM.

---

## 论文详细总结（自动生成）

# VinePPO 论文深度解析总结

## 1. 研究动机与核心问题
* **背景**：大语言模型（LLM）在数学推理等复杂任务中需要多步推理，只有最终获得奖励。强化学习中的“信用分配”（Credit Assignment）问题——如何将最终奖励合理分配给中间步骤——至关重要。
* **现状矛盾**：标准 PPO 算法使用价值网络（critic）进行信用分配，但近期方法（如 DPO、GRPO、RLOO）抛弃细粒度信用分配仍取得好效果，质疑了价值网络的效用。
* **核心问题**：PPO 的价值网络在推理任务的中间步骤是否真的有效？改进信用分配能否进一步提升 RL 训练效果？
* **研究发现**：价值网络给出的期望回报估计往往不准确，在区分步骤优劣时几乎不优于随机基线，说明其信用分配存在严重缺陷。

## 2. 方法论：VinePPO
### 核心思想
* 利用“语言环境可重置到任意中间状态”的特性，直接通过蒙特卡洛（MC）采样估计状态价值，替代 PPO 中误差大的价值网络。
* 仅修改 PPO 的优势估计环节，其余部分（策略更新、裁剪等）保持不变，以隔离信用分配改进的影响。

### 关键技术细节
* **状态价值 MC 估计**：
  对训练轨迹中某中间状态 \(s_t\)，使用当前策略 \(\pi_\theta\) 从 \(s_t\) 出发采样 \(K\) 条辅助续写轨迹 \(\eta_1,\ldots,\eta_K\)，平均其最终回报作为无偏估计：
  \[
  \hat{V}_{\text{MC}}(s_t) = \frac{1}{K}\sum_{k=1}^K R(\eta_k)
  \]
* **优势估计**：利用一步 TD 误差（γ=1）计算优势：
  \[
  \hat{A}_{\text{MC}}(s_t, a_t) = r(s_t, a_t) + \gamma \hat{V}_{\text{MC}}(s_{t+1}) - \hat{V}_{\text{MC}}(s_t)
  \]
  由于中间奖励为 0，最后一步之前 \(r=0\)。
* **步骤归组**：为效率将同一推理步骤内的多个 token 合并，共享一个优势值，牺牲粒度换取更快的计算。
* **采样平衡**：参数 \(K\) 控制估计方差与计算开销的权衡，实验显示 \(K=9\) 效果最佳，且增大 \(K\) 能同时提升精度和计算效率。

## 3. 实验设计
### 数据集与模型
* **数据集**：MATH（竞赛级数学题）和 GSM8K（小学数学题），均采用标准的训练/测试/验证划分。
* **预训练模型**：DeepSeekMath 7B 和 RhoMath 1.1B，先在各自数据集的训练集上做监督微调（SFT）得到初始策略 \(\pi_{\text{ref}}\)。

### 对比基线
* **同 PPO 框架但无 critic 的方法**：RLOO、GRPO
* **RL‑free 方法**：RestEM（拒绝采样微调）、DPO+（DPO‑Positive）
* **标准 PPO**：经过超参数搜索并实现最佳实践（如 GAE、优势归一化、EOS 技巧等）

### 训练与评估
* **奖励**：二值任务奖励（答案正确为 1，否则为 0）。
* **训练规模**：每个问题采样 8 条回复，遍历数据集 8 轮，共 64 episodes/question，保证所有方法消耗相同数量样本。
* **评估指标**：Pass@1（单次采样的最终答案准确率），在固定温度（0.35）下多次评估取平均。

## 4. 资源与算力
* **硬件配置**：
  - **RhoMath 1.1B**：4 × NVIDIA A100 80GB GPU
  - **DeepSeekMath 7B**：8 × NVIDIA H100 80GB GPU
* **训练耗时**（基于 MATH 数据集）：
  - PPO (RhoMath 1.1B)：每步约 80 秒
  - VinePPO (RhoMath 1.1B)：每步约 380 秒
  - PPO (DeepSeekMath 7B)：每步约 312 秒
  - VinePPO (DeepSeekMath 7B)：每步约 583 秒
* **加速技术**：使用 vLLM 做推理采样，DeepSpeed ZeRO‑0/2 进行分布式训练，最大推理速度达 30K tokens/s（8×H100 下 7B 模型）。
* **公平性控制**：所有方法在相同硬件、相同总训练样本数下比较墙钟时间与准确率。

## 5. 实验数量与充分性
* **主实验**：2 个模型 × 2 个数据集，共 4 组对比实验，覆盖 6 种方法，每种均汇报最终 Pass@1。
* **消融实验**：
  - 不同 K 值（1, 3, 9）对性能和效率的影响。
  - 温度鲁棒性测试（0.6, 0.8, 1.0）。
* **价值网络诊断**：
  - 价值预测 vs 真实值（256 次 MC 采样近似）的分布图、MAE、解释方差。
  - 按推理步骤位置展示 MAE 变化。
  - 最佳动作识别准确率测试。
* **效率与泛化分析**：
  - 墙钟时间 vs 准确率曲线。
  - 训练准确率与测试准确率的关系（泛化斜率）。
* **结论**：实验设计全面，从性能、效率、泛化、鲁棒性、内部机理等多维度验证，对比公平，控制变量严格，消融充分，结果可信度较高。

## 6. 主要结论与发现
* VinePPO 在所有设置下（MATH/GSM8K，两个规模的模型）均优于标准 PPO 及其他基线，尤其在较难的数据集 MATH 上优势更明显。
* 墙钟时间效率：尽管单步更慢，但 VinePPO 能用更少的迭代次数和总时间达到 PPO 的峰值性能（最高加速 3.0x）。
* 泛化优势：同样训练准确率下 VinePPO 获得更高测试准确率，即利用同样数量样本能学到更多泛化信号。
* 价值网络深度分析再次揭示其缺陷：有偏估计、不随推理进度改善、无法正确排序步骤、对更高温度敏感。
* 增大 MC 采样数 K 可稳定提高性能，同时因方差降低反而提升整体计算效率。

## 7. 优点
* **方法朴素且有效**：仅利用语言环境的可重置性，无需额外训练 critic，无偏的 MC 估计直接解决了价值网络偏差问题。
* **精细的隔离分析**：通过统一超参数，仅替换优势估计部分，清晰证明了信用分配的改进是性能提升的唯一原因。
* **多维评估**：不仅报告最终精度，还展示了墙钟时间效率、KL 预算利用、泛化斜率，揭示了方法在样本效率和控制策略漂移上的优势。
* **实用性强**：VinePPO 可无缝嵌入现有 PPO 训练流程，仅需增加推理采样开销，无需改变模型结构。

## 8. 不足与局限
* **适用场景受限**：依赖环境可以无成本地重置到中间状态，对于无法安全截断或拼接中间状态的对话/交互任务可能不适用。
* **MC 估计方差**：当 \(K\) 较小或策略随机性强时，值估计方差可能较大，可能影响训练稳定性，但实验显示即使 \(K=1\) 也能工作。
* **仅测试数学推理**：未在其他需要长程推理的领域（如代码生成、多跳问答、工具调用）验证，泛化性待进一步考察。
* **计算开销**：每步需额外采样 \(K\) 条完整轨迹，对于超长回复或极大规模模型可能成本更高，但论文认为墙钟时间上仍然划算。
* **未结合其他改进**：没有探索将 VinePPO 与过程奖励模型或树搜索等方法结合的可能，或许有进一步提升空间。

（完）
