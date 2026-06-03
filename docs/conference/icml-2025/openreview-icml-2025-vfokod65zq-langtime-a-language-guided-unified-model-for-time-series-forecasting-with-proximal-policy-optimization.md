---
title: "LangTime: A Language-Guided Unified Model for Time Series Forecasting with Proximal Policy Optimization"
title_zh: LangTime：基于语言引导和近端策略优化的统一时间序列预测模型
authors: "Wenzhe Niu, Zongxia Xie, Yanru Sun, Wei He, Man Xu, Chao Hao"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=VfoKOD65Zq"
tags: ["query:fla"]
score: 8.0
evidence: 使用LLM引导和PPO微调的时间序列模型，适用于金融时序预测。
tldr: 提出LangTime，一个语言引导的统一时间序列预测模型，通过构建时序理解提示并采用PPO强化学习微调，解决跨域泛化和误差累积问题。在多个数据集上表现优越，可用于金融时间序列预测。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 799, \"height\": 248, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 780, \"height\": 303, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 343, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1759, \"height\": 723, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 820, \"height\": 613, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 790, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 790, \"height\": 384, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 787, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 780, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 767, \"height\": 287, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1395, \"height\": 890, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vfokod65zq/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1394, \"height\": 895, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1771, \"height\": 1136, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1769, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 869, \"height\": 298, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 857, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 868, \"height\": 551, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 869, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 854, \"height\": 568, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 868, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1781, \"height\": 2222, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 641, \"height\": 338, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1356, \"height\": 340, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1560, \"height\": 308, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1081, \"height\": 663, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1334, \"height\": 668, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1552, \"height\": 664, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1304, \"height\": 669, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1238, \"height\": 920, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1783, \"height\": 1275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1780, \"height\": 991, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 984, \"height\": 1472, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1519, \"height\": 940, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vfokod65zq/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1674, \"height\": 946, \"label\": \"Table\"}]"
motivation: 当前使用LLM进行时间序列预测面临跨域泛化、跨模态对齐和自回归误差累积等挑战。
method: 提出LangTime，构建时序理解提示，进行跨域预训练，并采用PPO强化学习微调模型。
result: 在多域时间序列预测任务中取得领先结果，有效缓解误差累积。
conclusion: LangTime融合语言指引和强化学习，为通用时间序列预测提供了有效框架。
---

## Abstract
Recent research has shown an increasing interest in utilizing pre-trained large language models (LLMs) for a variety of time series applications. However, there are three main challenges when using LLMs as foundational models for time series forecasting: (1) Cross-domain generalization. (2) Cross-modality alignment. (3) Error accumulation in autoregressive frameworks. To address these challenges, we proposed **LangTime**, a **lan**guage-**g**uided unified model for **time** series forecasting that incorporates cross-domain pre-training with reinforcement learning-based fine-tuning. Specifically, LangTime constructs Temporal Comprehension Prompts (TCPs), which include dataset-wise and channel-wise instructions, to facilitate domain adaptation and condense time series into a single token, enabling LLMs to understand better and align temporal data. To improve autoregressive forecasting, we introduce TimePPO, a reinforcement learning-based fine-tuning algorithm. TimePPO mitigates error accumulation by leveraging a multidimensional rewards function tailored for time series and a repeat-based value estimation strategy. Extensive experiments demonstrate that LangTime achieves state-of-the-art cross-domain forecasting performance, while TimePPO fine-tuning effectively enhances the stability and accuracy of autoregressive forecasting.

---

## 论文详细总结（自动生成）

# LangTime：基于语言引导与近端策略优化的统一时间序列预测模型 论文总结

## 1. 论文的核心问题与整体含义
时间序列预测在金融、能源、气象等领域有广泛应用。近年来，预训练大语言模型（LLMs）因其出色的序列建模能力被引入时间序列任务。然而，将 LLMs 直接用于时间序列预测面临三大核心挑战：

- **跨域泛化**：不同领域的时间序列具有不同的统计模式和数值含义，同一数值在不同领域可能代表完全不同的物理意义，LLMs 难以统一处理。
- **跨模态对齐**：LLMs 在纯文本语料上预训练，缺乏对时间序列数据的直接理解能力，现有方法往往只是简单拼接，无法实现有意义的交叉模态交互。
- **自回归框架下的误差累积**：自回归预测中，当前步的输出作为下一步输入，训练时使用真实历史值，而推理时使用模型自己生成的、可能不准确的预测值，导致误差逐步放大。

针对上述问题，本文提出 **LangTime**，一个语言引导的统一时间序列预测模型，通过精心设计的**时序理解提示（TCPs）** 和基于强化学习的 **TimePPO** 微调算法，同时应对跨域泛化、跨模态对齐和误差累积问题，从而显著提升时间序列预测的效果和稳定性。

## 2. 论文提出的方法论

### 2.1 整体架构
LangTime 由三个核心组件构成：
- **时间编码器（Temporal Encoder, TE）**：采用通道独立的轻量级模型，通过分块（patch）和线性投影提取时间序列的局部依赖关系，并利用随机掩码增强鲁棒性和跨数据集泛化能力。
- **时序理解提示（Temporal Comprehension Prompts, TCPs）**：将时间序列表征嵌入到自然语言提示中，包含时间戳、数据集领域描述、通道语义信息、压缩令牌（`<|EMB|>`）和预测指令（`<|OUT|>`），引导 LLM 同时完成时间序列重构和预测任务。
- **TimePPO 微调算法**：基于近端策略优化（PPO），为时间序列连续输出空间定制了奖励函数、价值函数和优势估计，以缓解自回归预测中的误差累积。

### 2.2 预训练阶段
- **多任务学习**：结合**重构任务**（压缩令牌恢复原始时间序列）和**预测任务**（生成未来时间步），使用 Huber 损失平衡敏感性和鲁棒性。总体损失函数为：
  $$L_{\text{pre-train}} = \alpha L_{\text{reconstruction}} + (1-\alpha) L_{\text{prediction}}$$
- **自适应训练**：支持变长输入序列（需为 patch 长度的整数倍），并通过渐进式训练策略先短后长，提升模型对多长度序列的泛化能力。
- 时间序列表示经过 TE 和线性映射后对齐到 LLM 的词嵌入空间，掩码后的表征与 TCPs 一同送入预训练 LLM，利用因果注意力机制生成压缩令牌和预测令牌。

### 2.3 TimePPO 微调
- **奖励函数**：从多个维度（MSE、MAE、KL 散度）评价预测序列与真实序列的差异，并通过加权求和及 tanh 非线性缩放得到奖励值，同时加入与参考模型之间的 MSE 惩罚项，防止策略更新过大。
- **价值函数**：采用重复预测假设（假设后续步重复当前预测）来估计未来累积回报，减轻自回归推理中的误差传播。
- **优势估计**：使用广义优势估计（GAE），并引入参数 $\xi$ 控制对当前状态价值估计误差的敏感度，进一步抑制长期预测中的误差累积。
- **优化目标**：借鉴 InstructGPT 的对齐税设计，在 PPO 损失中加入预测任务损失作为正则项，防止微调过程中的性能退化。
  $$L_{\text{TimePPO}} = \mathbb{E}\left[ \min\left( r(\theta)\hat{A}, \text{clip}(r(\theta), 1-\epsilon, 1+\epsilon)\hat{A} \right) \right] - \eta L_{\text{prediction}}$$

## 3. 实验设计

### 3.1 数据集与评估指标
- **预训练/微调数据集**：ETTh1, ETTh2, ETTm1, ETTm2, Electricity, Exchange, Weather，共七个真实领域数据集，覆盖电力、天气、汇率等多种场景。
- **零样本泛化评估**：在未见过的 Traffic 和 Illness 数据集上进行。
- **评估指标**：均方误差（MSE）和平均绝对误差（MAE），预测长度设定为 96, 192, 336, 720，回看窗口固定为 96。
- **基准方法**：
  - 跨域或 LLM 方法：UniTime, AutoTimes, S²IP-LLM, Time-LLM, GPT4TS
  - 单域专用方法：PatchTST, TimesNet
  - 微调对比：有监督微调（SFT）基线
  - 预训练基础模型对比：TimesFM（大规模时间序列预训练模型）

### 3.2 实验设置
- 骨干 LLM 选用 Qwen2-0.5B-Instruction，并在消融中替换为 GPT-2 和线性层验证 LLM 的作用。
- 预训练与微调数据划分比例为 8:2，训练与测试数据在时间和数据集上严格隔离以防止泄漏。
- 采用 8 张 NVIDIA A100 80GB GPU 进行实验。

## 4. 资源与算力
论文明确指出，所有实验在 **8 张 NVIDIA A100 80GB GPU** 上完成。预训练阶段使用 AdamW 优化器，初始学习率 $1 \times 10^{-4}$，余弦退火调度，warmup 比例 0.05，batch size 设为 48。微调阶段部分参数（如学习率、$\tau$ 等）根据不同数据集进行调整。无明确的总训练时长或 FLOPs 报告，但提供了充分的超参数配置细节。

## 5. 实验数量与充分性
论文包含了大量且系统的实验，覆盖以下维度：
- **主结果对比**（Table 1）：7 个数据集 × 4 种预测长度 × 10+ 方法，共 70 个条目，展示了 LangTime 预训练和 TimePPO 微调性能。
- **微调算法对比**（Table 2）：在全部 7 个数据集上对比预训练、SFT 和 TimePPO 的效果，证实 TimePPO 的优越性。
- **消融研究**：TCPs 各组件（语言引导、时间戳、数据集/通道信息）的消融（Table 3）；奖励函数各维度（MSE, MAE, KL）的消融（Table 4）；骨干模型替换（Table 5）；提示改写影响（Table 6）。
- **零样本迁移分析**（Table 7、13）：在两个未见数据集（Traffic, Illness）及跨子域设置下评估。
- **误差累积分析**（Table 8）：针对长预测的最后步骤单独评估，验证 TimePPO 缓解误差累积的能力。
- **参数敏感性分析**：探讨 $\alpha$（预训练损失权衡）、$\tau$（奖励分布）、$\beta$ 和 $\eta$（TimePPO 惩罚系数）、Mask Rate 和输出长度等关键超参数的影响（图 4-6, Table 17）。
- **微调样本量与微调组件分析**（Table 15-16）：考察数据量和冻结不同模块的影响。
- **可视化**：T-SNE 展示压缩令牌的聚类效果（图 7），注意力图分析（图 8），以及多个预测案例展示（图 9-10）。

实验设计全面、客观且公平，对比的基线均为同时期最新方法，并在同等条件下进行训练和评估，保证了结论的可靠性。

## 6. 论文的主要结论与发现
- LangTime 在跨域预训练设置下，在 58/70 个条目上取得最优性能（Table 1），展现出强大的跨域泛化能力。
- TimePPO 微调相比 SFT 能进一步降低预测误差，特别是在长期预测的最后步骤表现出显著的误差抑制效果（Table 8）。
- TCPs 中的数据集信息、通道信息是提升 LLM 对时间序列理解的关键，语言引导本身已能提供有效对齐（Table 3 消融）。
- 奖励函数中 MSE 维度的贡献最大，但三维综合奖励能带来最佳性能（Table 4）。
- 即使仅用少量目标域数据进行 TimePPO 微调，模型仍能保持较强性能，同时仅微调 LLM 或 TE 也能取得不错的效果，证明了方法的可扩展性。
- 在零样本跨域场景中，LangTime 普遍优于 UniTime 和 AutoTimes，并且与大规模预训练的时间序列基础模型 TimesFM 相比也表现出竞争力。

## 7. 优点
- **统一框架**：LangTime 首次同时解决跨域泛化和跨模态对齐两个核心难题，避免了多阶段分离式方法的局限。
- **强化学习创新**：TimePPO 专门为时间序列连续预测任务重新设计了奖励、价值和优势估计，是 RLHF 思想在时间序列领域的成功迁移。
- **提示设计精巧**：TCPs 将领域元信息、通道描述与时间序列压缩令牌深度融合，有效激活了 LLM 的语境理解能力。
- **实验扎实全面**：涵盖多个主流数据集和全面对比，消融和可视化分析深刻，代码开源，复现性强。
- **实用性突出**：模型在资源受限（少样本、只微调部分参数）时仍表现良好，具备实际部署潜力。

## 8. 不足与局限
- **计算开销**：虽使用 0.5B 参数量的小型 LLM，但预训练和 PPO 微调仍需要 8 张 A100，对计算资源要求较高，可能限制部分研究人员的直接复现。
- **任务单一**：当前仅聚焦于长期预测，未涉及时间序列分类、异常检测、缺失值填补等其他重要任务，框架的通用性有待拓展。
- **跨域覆盖范围**：预训练数据仅 7 个数据集，未涵盖医疗、交通（除零样本测试外）、音频等更广泛模态，模型的极限泛化能力仍需更大规模数据验证。
- **奖励函数设计**：虽然三维奖励有效，但权重平衡依赖经验调整，缺乏自适应机制，可能对某些数据集带来性能波动（如 Table 4 中移除某一维度导致升/降不一）。
- **开放环境鲁棒性**：未讨论噪声、缺失值、分布偏移（概念漂移）等实际场景下的表现，应用风险未知。
- **与专用时序基础模型的深入对比欠缺**：仅在零样本场景下与 TimesFM 对比，未在多任务、不同预训练数据规模等维度进行系统比较。

（完）
