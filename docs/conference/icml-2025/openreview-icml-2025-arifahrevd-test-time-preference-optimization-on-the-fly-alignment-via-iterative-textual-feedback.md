---
title: "Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback"
title_zh: 测试时偏好优化：通过迭代文本反馈实现在线对齐
authors: "Yafu Li, Xuyang Hu, Xiaoye Qu, Linjie Li, Yu Cheng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ArifAHrEVD"
tags: ["query:fla"]
score: 7.0
evidence: 提出无需重训练的测试时对齐方法，可应用于金融AI智能体
tldr: 现有大模型往往缺乏快速适应人类偏好的灵活性，需要重新训练。本文提出测试时偏好优化（TPO），在推理阶段通过将奖励信号转化为文本批判，迭代优化响应，无需更新模型参数。在指令遵循、偏好对齐、安全性和数学等基准上的实验表明，TPO逐步改善了对齐效果。该方法为金融AI智能体提供了一种轻量级的对齐途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 780, \"height\": 600, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1748, \"height\": 895, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1726, \"height\": 437, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1720, \"height\": 805, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 855, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 859, \"height\": 419, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 630, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1646, \"height\": 1091, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1643, \"height\": 1090, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1596, \"height\": 1044, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-arifahrevd/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1631, \"height\": 1031, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-arifahrevd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1608, \"height\": 364, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-arifahrevd/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 845, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-arifahrevd/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1320, \"height\": 138, \"label\": \"Table\"}]"
motivation: 大模型缺乏快速适应人类偏好的灵活性，重新训练成本高。
method: 提出TPO框架，将奖励信号转化为文本批判，在推理时迭代优化输出。
result: 在多个基准上，TPO比基线方法逐步提升对齐效果。
conclusion: TPO为金融AI智能体提供了一种无需重训练的高效对齐方案。
---

## Abstract
Large language models (LLMs) have presented impressive performance but often lack the flexibility to adapt to human preferences quickly without retraining. Inspired by the recent efforts on test-time scaling, we make the first attempt to propose Test-time Preference Optimization (TPO), a framework that aligns LLM outputs with human preferences during inference, eliminating the need to update model parameters. Instead of relying on purely numerical rewards, TPO translates reward signals into \emph{textual} critiques and uses them as textual rewards to iteratively refine its response. Evaluations on benchmarks covering instruction following, preference alignment, safety, and mathematics reveal that TPO progressively improves alignment with human preferences. Notably, after only a few TPO steps, the initially unaligned Llama-3.1-70B-SFT model can surpass the aligned counterpart, Llama-3.1-70B-Instruct. Furthermore, TPO scales efficiently with both the search width and depth of the inference process. Through case studies, we illustrate how TPO exploits the innate capacity of LLM to interpret and act upon reward signals. Our findings establish TPO as a practical, lightweight alternative for test-time preference optimization, achieving alignment on the fly.

---

## 论文详细总结（自动生成）

### 1. 研究动机与核心问题
- 大语言模型（LLM）在下游任务上表现卓越，但训练完成后不易快速适配人类偏好的变化，一旦需要新的对齐，往往要进行昂贵的重训练（如 RLHF、DPO）。
- 已有的推理时对齐方法多依赖纯数值奖励信号，缺乏可解释的文本反馈，且通常只做并行采样或树搜索，没有深度融合“迭代修订”与“对比学习”。
- 本文提出核心问题：**能否在推理阶段，不更新模型参数，通过可解释的文本反馈实现与人类偏好的有效对齐，并且性能可与训练时方法匹敌？**

### 2. 方法论：测试时偏好优化（TPO）
TPO 将传统梯度下降中的“损失计算—梯度计算—参数更新”流程迁移到文本空间，用 LLM 自身完成“文本损失—文本梯度—变量优化”。

- **核心类比**：
  - 传统优化：\( \theta \leftarrow \theta - \alpha \nabla_\theta \mathcal{L}(\theta) \)
  - TPO 优化：利用奖励模型 \(R\) 的数值反馈，生成文本损失（critique）和文本梯度（改进建议），迭代更新响应文本 \(v\)。

- **TPO 一次迭代的流程**（以单条查询为例）：
  1. **采样与评分**：从策略模型 \(M\) 采样 \(N\) 个候选响应 \(\{v_i\}\)，用奖励模型 \(R\) 打分。
  2. **选择对比样本**：选取得分最高的响应为“chosen” \(v\)，最低的为“rejected” \(\hat{v}\)。
  3. **文本损失计算**：通过提示 \(P_{\text{loss}}\) 让 LLM 分析 chosen 与 rejected 的优缺点，生成文本损失 \(\mathcal{L}(x,v) = M(P_{\text{loss}}(x, v, \hat{v}))\)。
  4. **文本梯度生成**：通过提示 \(P_{\text{grad}}\) 基于文本损失产生改进指令，得到文本梯度 \(\frac{\partial \mathcal{L}}{\partial v} = M(P_{\text{grad}}(\mathcal{L}(x,v)))\)。
  5. **变量更新**：通过提示 \(P_{\text{update}}\) 施加文本梯度，生成新候选响应 \(\{v_{\text{new}}^{(j)}\}_{j=1}^N = M(P_{\text{update}}(\frac{\partial \mathcal{L}}{\partial v}))\)。
  6. **加入缓存并迭代**：新响应评分后存入缓存，下一轮重新选择最佳与最差响应，重复步骤 2-5，最多迭代 \(D\) 轮。
  7. **最终输出**：返回缓存中得分最高的响应。

- **搜索维度**：TPO 兼具并行采样（宽度 \(N\)）和顺序修订（深度 \(D\)），可灵活分配推理计算资源。

- **变体**：
  - **TPO\***：仅用最佳响应自我修订，无对比拒绝样本，以验证对比信号的价值。
  - **Multi-P\(_{\text{loss}}\) TPO**：一次性生成所有可能的正负样本对进行修订，禁用迭代。
  - **Mid-TPO**：用中位数对比对代替极端对比对，探究对比强度的影响。

### 3. 实验设计与对比
#### 数据集与基准
- **指令遵循**：AlpacaEval 2（LC 和 WR）、Arena-Hard（WR）。
- **通用偏好对齐**：HH-RLHF（500 条测试数据，用奖励模型评分）。
- **安全性**：BeaverTails-Evaluation、XSTest（准确率）。
- **数学推理**：MATH-500（pass@1）。
- 所有基准使用完整测试集，HH-RLHF 随机采样 500 条。

#### 模型对比
- **未对齐模型**：Llama-3.1-70B-SFT（基于 Tülu 3）。
- **训练时对齐模型**：Llama-3.1-70B-Instruct、Llama-3.1-70B-DPO（本文用 UltraFeedback + RM 评分自训练）、Mistral-Small-Instruct-2409（22B）。
- **奖励模型**：FsfairX-LLaMA3-RM-v0.1（主要），以及 Llama-3.1-Tülu-3-8B-RM（用于部分实验）。
- **对比基线**：原始 SFT/Instruct/DPO 模型，以及推理时方法 Best-of-N（BoN）采样。

#### TPO 配置
- 默认：\(D=2\), \(N=5\)（基准评估）；分析中 \(D\) 可到 5，\(N\) 可到 20。
- 实现基于 TextGrad，温度 0.7，top-p 0.95，用 vLLM 加速。

### 4. 资源与算力
- 论文未明确列出 GPU 型号和数量，但提供了 FLOPs 理论估算（附录 E）。
- **训练时 DPO 成本**：以 Llama-3.1-70B-DPO 为例，在 UltraFeedback 64k 样本、最大长度 2048 token 下，一个 epoch 约需 **72,840 PFLOPs**。
- **TPO 测试时成本**：每条查询（\(D=2, N=5\)）约需 **9.3 PFLOPs**，仅为 DPO 训练单查询开销的约 **0.01%**。
- 推理时上下文窗口：初始采样 2048 token，优化阶段延长至 4096 token 以容纳文本反馈。

### 5. 实验数量与充分性
- **主要实验**：在 6 个基准上评估 3 个模型（SFT、Instruct、Mistral-Instruct）的有/无 TPO 性能，包含不同奖励模型和 TPO 配置（\(D\)、\(N\) 不同）。
- **测试时训练曲线**：对所有模型在多个数据集上绘制了 0-5 步的奖励变化曲线，并对比了 TPO 与 TPO*。
- **消融实验**：对比 Multi-P\(_{\text{loss}}\)、Mid-TPO 与标准 TPO，验证迭代修订和极端对比的重要性。
- **缩放性分析**：宽度（\(N=5,10,15,20\)）与深度（\(D=2,3,4\)）的组合，以及 TPO vs. BoN（30/60 样本）的 GPT-4 自动评估。
- **推理稳定性**：计算多代采样的奖励标准差。
- **指令遵循前提分析**：测试 8B-Instruct 模型在 TPO 下的退化现象。
- **案例研究**：附录提供 15 个详细案例，展示损失、梯度和优化后的响应。
- **公平性**：对比对象包括训练时 DPO（同一 RM 对齐），推理时与 BoN 公平比较，并使用相同的评价器。

### 6. 主要结论与发现
- **对齐能力显著提升**：仅 2 步 TPO 就能让未对齐的 Llama-3.1-70B-SFT 在大多数基准上超越训练时 DPO 对齐版本，甚至在 Arena-Hard 的 WR 上超越 Llama-3.1-405B-Instruct。
- **已对齐模型也能受益**：TPO 进一步提升了 Llama-3.1-70B-Instruct 和 Mistral-Small-Instruct-2409 的性能，22B 模型在 AlpacaEval 2 的 LC 达 53.4%，可比肩 GPT-4-Turbo。
- **对比信号与迭代修订至关重要**：TPO 优于无对比的 TPO*，也优于一次性多对比或中位数对比变体；迭代深度比单纯扩大采样宽度更有效。
- **测试时缩放灵活有效**：通过增加宽度或深度可进一步提升性能，且深度可弥补窄宽度的不足。
- **推理稳定性增强**：TPO 降低模型输出的奖励方差，使概率质量向高质量响应集中。
- **基础指令遵循能力是前提**：Llama-3.1-8B-Instruct 在 TPO 下性能下降，说明模型需要足够的指令遵循与反思能力。

### 7. 优点（亮点）
- **无需重训练**：彻底将对齐转移到测试阶段，避免昂贵的梯度更新，适用于金融 AI 智能体等需要快速适应偏好变化的场景。
- **可解释的文本反馈**：通过自然语言批判和建议实现优化，透明且可信。
- **系统化的优化比拟**：巧妙将梯度下降映射为“文本损失-文本梯度-变量更新”，理论清晰。
- **多维度测试时缩放**：同时支持并行采样与顺序修订的灵活组合，资源利用高效。
- **扎实的实验验证**：涵盖指令、安全、数学等多领域，与训练时方法公平对比，并辅以详尽的消融和案例分析。

### 8. 不足与局限
- **依赖模型自身能力**：效果受限于模型理解与执行文本批判的能力，弱小模型可能无法受益，需要专门微调。
- **奖励模型偏差风险**：TPO 优化朝向奖励模型而非真实人类偏好，若 RM 存在偏差会传递到输出，可能被滥用对齐恶意目标。
- **推理时延迟与成本**：虽然比训练便宜，但每次查询需调用 LLM 多次（损失、梯度、更新），在实时性要求高的场景可能有延迟。
- **未处理多轮对话或动态环境**：当前实验仅针对单轮查询，多轮交互或持续变化的偏好对齐尚待探索。
- **未针对 TPO 进行专门训练**：模型未见过专门的文本损失/梯度生成数据，进一步训练可能提升效果。
- **案例研究中暴露的**：某些优化响应可能只是增加细节而未必根本性修正错误，文本梯度质量有限。

（完）
