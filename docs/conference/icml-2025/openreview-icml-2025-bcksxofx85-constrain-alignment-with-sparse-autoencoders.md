---
title: Constrain Alignment with Sparse Autoencoders
title_zh: 利用稀疏自编码器约束对齐
authors: "Qingyu Yin, Chak Tou Leong, Hongbo Zhang, Minjun Zhu, Hanqi Yan, Qiang Zhang, Yulan He, Wenjie Li, Jun Wang, Yue Zhang, Linyi Yang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=BCKSxOFX85"
tags: ["query:fla"]
score: 4.0
evidence: 提出利用稀疏自编码器进行特征级约束的偏好优化方法，用于LLM对齐
tldr: 为解决RLHF和DPO存在的计算低效和训练不稳定问题，本文提出FPO，借助预训练稀疏自编码器在特征层施加约束。该方法在保持对齐质量的同时提升了训练效率，并证明了稀疏特征约束在简化对齐过程中的有效性，为LLM后训练提供了一种稳定且可解释的对齐范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-bcksxofx85/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1574, \"height\": 447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bcksxofx85/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 721, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bcksxofx85/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1602, \"height\": 409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bcksxofx85/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 767, \"height\": 390, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 815, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1711, \"height\": 285, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1302, \"height\": 370, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1729, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1570, \"height\": 518, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1273, \"height\": 1013, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1103, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bcksxofx85/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1262, \"height\": 280, \"label\": \"Table\"}]"
motivation: 现有RLHF/DPO对齐方法计算效率低且训练不稳定。
method: 使用稀疏自编码器的稀疏激活特征引入特征级约束，简化偏好优化。
result: 在降低计算开销的同时维持对齐性能，提升训练稳定性。
conclusion: 为大规模语言模型对齐提供了一种高效且稳定的特征约束优化框架。
---

## Abstract
The alignment of large language models (LLMs) with human preferences remains a key challenge. While post-training techniques like Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) have achieved notable success, they often experience computational inefficiencies and training instability. In this paper, we propose \textbf{F}eature-level constrained \textbf{P}reference \textbf{O}ptimization (FPO), a novel method designed to simplify the alignment process while ensuring stability. FPO leverages pre-trained Sparse Autoencoders (SAEs) and introduces feature-level constraints, allowing for efficient, sparsity-enforced alignment. Our approach enjoys efficiency by using sparse features activated in a well-trained sparse autoencoder and the quality of sequential KL divergence by using the feature-level offline reference. Experimental results on benchmark datasets demonstrate that FPO achieves an above 5\% absolute improvement in win rate with much lower computational cost compared to state-of-the-art baselines, making it a promising solution for efficient and controllable LLM alignments.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- 核心问题：大语言模型（LLM）与人类偏好对齐的方法（如 RLHF、DPO）虽然有效，但普遍存在**计算效率低**和**训练不稳定**的问题。
- 整体含义：论文试图在**效率**（减少计算与内存开销）与**可控性**（保持生成多样性与稳定性）之间找到更优的平衡点，提出一种利用稀疏自编码器（SAE）在特征层面施加约束的对齐方法。

### 2. 方法论：特征级约束偏好优化（FPO）
- **核心思想**：用**预训练稀疏自编码器（SAE）** 提取 LLM 内部表征中的稀疏特征激活，并用这些特征级激活间的 **MSE** 代替传统基于 token 概率的 **KL 散度**作为约束项，从而大幅降低计算开销并保留控制能力。
- **关键技术细节**：
  - **统一损失形式**：将 DPO、SimPO、TDPO 重写为统一形式：`u = (长度归一化的 log 概率差) - 自适应 margin - 约束项`。
  - **离线参考自适应 margin**：用参考模型离线预计算并缓存每个偏好对的自适应 margin（`γ_ref-LN`），训练时直接读取，避免加载参考模型。
  - **特征级稀疏约束**：使用 SAE 将模型隐藏状态投影为稀疏特征向量 `c=ReLU(W_enc h+b)`，对策略模型和参考模型的稀疏激活做**平均池化**后，仅计算**前 k 个最大激活特征的 MSE** 作为序列级差异，替换 TDPO 中的 token 级 KL 散度。
  - **最终损失**：`L_FPO = -E[log σ(β/|y_w| log π_θ(y_w|x) - β/|y_l| log π_θ(y_l|x) - γ_ref-LN - δ_FPO)]`，其中 `δ_FPO` 为基于 SAE 的 MSE 约束。
- **效率来源**：参考模型离线工作（训练时无参），稀疏激活仅需处理少量特征。

### 3. 实验设计
- **数据集与场景**：
  - SFT 阶段：Ultrachat-200K。
  - 对齐阶段：**UltraFeedback**（偏好对数据集）。
- **评价基准**：
  - **AlpacaEval 2**（长度控制胜率 WR-L、胜率 WR）
  - **Arena-Hard**（复杂技术问题）
  - **MT-Bench**（8 类 80 题，1-10 分）
- **对比方法**：
  - 基础方法：SFT、DPO
  - 高效/可控方法：SimPO、TDPO-1、TDPO-2、SimPO+KL（部分实验）
- **评估指标**：对齐准确率（Acc）、生成多样性（熵 H）、胜率、GPU 内存、KL 散度等。

### 4. 资源与算力
- **GPU**：所有实验均使用 **4 块 H100 GPU**（论文中明确列出 Gemma-2-2B 和 Gemma-2-9B 的训练均采用此配置）。
- **未明确提及**：具体的训练总时长（小时/天数）。

### 5. 实验数量与充分性
- **主要对比实验**：在 Gemma-2-2B 和 Gemma-2-9B 两个模型规模上，与 5 种基线（SFT, DPO, TDPO-1, TDPO-2, SimPO）在三大基准上评测，产生了**至少 30 个性能数据点**。
- **消融实验**：
  - SAE 插入层位置（浅、中、深层，残差流 vs. MLP 后）搜索（8 种配置）。
  - 超参数 α 和 stop-gradient 有无（8 种组合）。
  - 温度变化（0.2~1.0，5 个温度点）下的胜率对比。
  - 多层级 SAE 组合（单层、两层、三层）消融。
- **可控性实验**：针对**指令遵循、多语言、安全性、情感**四个领域的特定特征进行精确 β 调控，展示了 FPO 的细粒度控制能力。
- **效率与相关性分析**：对比各方法的 GPU 内存占用（图 4），绘制 KL 散度与 MSE 损失在训练中的变化曲线，验证 MSE 约束与 KL 约束的一致性。
- 实验设计较为全面，涵盖了性能、效率、可控性、消融等多个维度，比较客观公平。

### 6. 主要结论与发现
- FPO 在 Gemma-2-2B 上取得**最高 5% 绝对胜率提升**，Gemma-2-9B 上也有稳定提升。
- 在保持与 TDPO-2 相当的**对齐准确率和最高多样性**的同时，**GPU 内存占用减少约 17%**。
- 通过离线缓存和稀疏激活，实现了**类似 SimPO 的内存效率**和**接近 TDPO 的约束质量**。
- FPO 能够通过调节特定特征的 β 值**精确控制模型行为**（如单独抑制 JSON 格式输出而不影响其他格式）。
- 特征级 MSE 约束与 token 级 KL 散度在约束效果上具有高度一致性。

### 7. 优点
- **创新性强**：首次将稀疏自编码器的特征级约束引入 LLM 对齐，开创了新的技术路径。
- **效率与性能兼得**：在显著降低内存和计算开销的同时，取得了有竞争力的对齐效果。
- **解耦设计**：参考模型完全离线处理，训练时仅需读取少量缓存数据，易于部署。
- **可解释性与可控性**：稀疏特征天然具备单语义性，支持对模型能力进行细粒度、可解释的调节。
- **理论支撑**：在附录中给出了利用 MSE 约束上界 KL 散度的理论证明，增强了方法合理性。

### 8. 不足与局限
- **模型覆盖有限**：仅在 Gemma-2 系列模型（2B、9B）上验证，未在其他架构（如 LLaMA、Qwen）上测试，泛化性待考证。
- **依赖预训练 SAE**：方法性能高度依赖已训练好的稀疏自编码器质量，若目标模型没有现成 SAE 则需额外训练。
- **大模型提升幅度有限**：9B 模型上的性能增益相比 2B 有所缩水，论文认为因固定宽度的 SAE 在大模型上特征分解不够彻底。
- **存储开销**：离线预计算需要为每个样本存储稀疏激活向量，虽远小于 token 概率矩阵，但仍需 O(N·k) 空间，大规模数据下可能成为瓶颈。
- **缺乏长序列与多轮对话实验**：主要在单轮指令遵循任务上评估，未涉及多轮交互或更长上下文场景。

（完）
