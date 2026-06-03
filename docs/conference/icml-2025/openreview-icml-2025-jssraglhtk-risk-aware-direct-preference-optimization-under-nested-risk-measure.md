---
title: Risk-aware Direct Preference Optimization under Nested Risk Measure
title_zh: 嵌套风险度量下的风险感知直接偏好优化
authors: "Lijun Zhang, Lin Li, Yajie Qi, Huizhong Song, Yaodong Yang, Jun Wang, Wei Wei"
date: 2025-01-24
pdf: "https://openreview.net/pdf?id=jssraGlHtK"
tags: ["query:fla"]
score: 4.0
evidence: 通过嵌套风险度量将风险意识引入DPO，实现更安全的LLM对齐
tldr: 现有LLM对齐方法仅用KL散度约束可能无法满足高风险场景的严格风险控制。本文提出Ra-DPO，在token级目标函数中引入嵌套风险度量，实现对训练模型偏离参考模型的精细风险管理。该方法在提升性能的同时可量化控制风险，为需要可靠性的智能体后训练提供了风险敏感的对齐框架。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 854, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1723, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1725, \"height\": 397, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 763, \"height\": 573, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 829, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1716, \"height\": 1913, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jssraglhtk/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1714, \"height\": 1913, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-jssraglhtk/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 610, \"height\": 351, \"label\": \"Table\"}]"
motivation: 传统KL约束可能不足以控制高风险应用中的模型偏离风险。
method: 在DPO中设计token级嵌套风险度量目标函数，实现风险感知优化。
result: 在保持性能的同时有效控制风险水平，提升对齐安全性。
conclusion: 为对风险敏感的LLM后训练对齐提供了可量化的风险控制方法。
---

## Abstract
When fine-tuning pre-trained Large Language Models (LLMs) to align with human values and intentions, the pursuit of maximizing the estimated reward can lead to superior performance, but it also introduces potential risks due to deviations from the original (reference) model's intended behavior. Most existing methods for aligning LLMs typically introduce KL divergence to constrain deviations between the training model and the reference model; however, this may not be sufficient in certain applications that require tight risk control. In this paper, we introduce Risk-aware Direct Preference Optimization (Ra-DPO), a novel approach that incorporates risk-awareness by employing a token-level objective function under nested risk measure. This method formulates a constrained risk-aware advantage function maximization problem and then converts the Bradley-Terry model into a token-level representation. The ultimate objective function maximizes the likelihood of the policy while suppressing the deviation between a training model and the reference model using a sequential risk ratio, thereby enhancing the model's risk-awareness during the process of aligning LLMs. The proposed method's effectiveness is verified via three open-source datasets: IMDb Dataset, Anthropic HH Dataset, and AlpacaEval, and the results demonstrate superior performance of our method in balancing alignment performance and model drift.

---

## 论文详细总结（自动生成）

## 一、论文的核心问题与整体含义

- 该论文聚焦于**大语言模型与人类偏好对齐过程中的风险控制**问题。
- 现有主流对齐方法（如 DPO）通常仅使用**句子级别的 KL 散度**来约束训练模型与参考模型之间的偏离，这在某些需要严格风险管控的应用中可能不够充分。
- 因此，本文旨在**引入风险敏感视角**，在细粒度的 token 级别实现**风险感知的直接偏好优化**，从而在提升对齐性能的同时，更有效地管理模型漂移风险。

## 二、方法论

- **核心思想：** 将 **嵌套风险度量（nested risk measure）** 嵌入到 token 级的直接偏好优化（DPO）框架中，提出 **Ra-DPO（Risk-aware Direct Preference Optimization）**。
- **关键技术细节：**
  1. **重构 Bellman 方程**  
     针对语言生成的自回归特性，设计了一种新的风险感知状态价值函数 \(\tilde{V}^{\pi}\) 和状态-动作价值函数 \(\tilde{Q}^{\pi}\)，并定义**风险感知优势函数**：  
     \[
     \tilde{A}^{\pi}([x, y_{<t}], z) = \tilde{Q}^{\pi}([x, y_{<t}], z) - \Phi_{\mu}\!\left(\tilde{V}^{\pi}([x, y_{<t}])\right)
     \]
     其中 \(\Phi_{\mu}\) 为嵌套风险度量函数（如 CVaR），\(\mu\) 为风险控制参数。
  2. **风险感知目标函数**  
     在每个时间步上最大化风险感知优势函数，同时施加**逐 token 的 KL 散度约束**：  
     \[
     \max_{\pi_{\theta}} \mathbb{E}_{z\sim\pi_{\theta}}\!\left[\tilde{A}^{\pi_{\mathrm{ref}}}([x,y_{<t}],z)\right] - \beta\, D_{\mathrm{KL}}\!\left(\pi_{\theta}\|\pi_{\mathrm{ref}}\right)
     \]
  3. **推导最优策略与序列风险比率**  
     通过闭式解得到最优策略与参考策略之间的关系：
     \[
     \pi_{\theta}^{*}(z\mid [x,y_{<t}]) \propto \pi_{\mathrm{ref}}(z\mid [x,y_{<t}])\, \exp\!\left(\frac{1}{\beta}\tilde{Q}^{\pi_{\mathrm{ref}}}([x,y_{<t}],z)\right)
     \]
     进而将 Bradley‑Terry 模型转化为包含**序列风险比率（Sequential Risk Ratio）** 的形式，并给出两种损失函数：
     * **Ra‑DPO‑1**：直接代入偏好差的完整风险比率
       \[
       \mathcal{L}_{\mathrm{Ra-DPO-1}} = -\mathbb{E}_{(x,y_w,y_l)}\!\left[\log \sigma\!\left(u(x,y_w,y_l) - \delta(x,y_w,y_l)\right)\right]
       \]
     * **Ra‑DPO‑2**：将偏好样本的风险比率作为基线项，停止其梯度传播以增强训练稳定性
       \[
       \mathcal{L}_{\mathrm{Ra-DPO-2}} = -\mathbb{E}_{(x,y_w,y_l)}\!\left[\log \sigma\!\left(u(x,y_w,y_l) - \alpha\, \delta_2(x,y_w,y_l)\right)\right]
       \]
     其中 \(u\) 为通常的隐式奖励差，\(\delta\) 为序列风险比率差。
  4. **理论保证**：证明了最大化上述风险感知目标函数能够实现策略的单调改进。

## 三、实验设计

- **数据集与场景**：
  - **IMDb 数据集**：受控的情感生成任务，前缀来自电影评论，要求生成正面情感的回复。
  - **Anthropic HH 数据集**：包含约 170k 对话和人类偏好标注，测试模型能否生成有用、无害的回答。
  - **AlpacaEval**：通用指令跟随评估，用于比较各方法生成回答的质量。
- **Benchmark 与评估指标**：
  - IMDb：**Reward Accuracy**（偏好预测准确率）与**序列 KL 散度**（衡量模型漂移）。
  - Anthropic HH：同上，并观察不同系数下的 reward accuracy。
  - AlpacaEval：**Winrate** 和**长度控制的 Winrate（LC Winrate）**。
- **对比方法**：
  - **DPO**（原始句子级优化）
  - **PPO**（离线 PPO 变体）
  - **TDPO‑1 / TDPO‑2**（token 级 DPO，但不含风险感知）
  - **KTO**（基于前景理论的优化）

## 四、资源与算力

- 所有实验均使用 **4 块 NVIDIA A100 GPU（每块 40GB 显存）** 完成训练。
- 训练细节：均基于开源实现（如 KTO 官方代码）的相同超参数设置，未提及具体训练时长，但提供了训练步数曲线（如 IMDb 上训练约 25k 步，Anthropic HH 训练约 160k 步）。

## 五、实验数量与充分性

- **实验组数**：
  - IMDb：Ra‑DPO‑1 搭配不同风险控制参数 \(\mu \in \{0.99, 0.98, 0.97, 0.95\}\)，与 TDPO‑1 对比。
  - Anthropic HH（Pythia‑1.4B 和 Pythia‑2.8B）：Ra‑DPO‑2 搭配不同 \(\mu\) 和多组系数 \(\alpha\)（如 0.3, 0.5, 0.7, 0.9），与 TDPO‑2 对比。
  - AlpacaEval：对最佳或代表性配置进行最终评估，对比 DPO、PPO、KTO、TDPO‑1/2。
- **客观性与公平性**：
  - 使用统一的参考模型和 SFT 初始化，保持与基线相同的超参数。
  - 从曲线图和表格看，对比基线均复现至合理水平，风险控制参数设置对算法有明显区分度。
  - 提供了梯度分析和理论推导，增强了解释性。

## 六、主要结论与发现

- **Ra‑DPO 在平衡对齐性能和模型漂移上表现出色**：在所有数据集上，Ra‑DPO 均能在获得与或优于 TDPO 的 reward accuracy / winrate 的同时，保持明显更低的序列 KL 散度（即更低的模型漂移）。
- **风险控制参数 \(\mu\) 可有效调节风险敏感程度**：越小（如 0.95）越保守，模型漂移越小；适中（如 0.97‑0.98）可取得性能与漂移的最佳折中。
- **Ra‑DPO‑2 在对话和指令跟随场景中尤为稳定**：通过停止偏好样本的风险梯度，进一步提升了训练平稳性。

## 七、优点

- **首次将嵌套风险度量引入 token 级 DPO**，使对齐过程具备风险敏感特性，更适用于安全关键场景。
- **理论完备**：将 Bradley‑Terry 模型与风险感知优势函数建立等价关系，并证明策略改进性，给出闭式解。
- **方法灵活**：提供两个版本（Ra‑DPO‑1 / Ra‑DPO‑2），可根据任务需求选择更侧重性能或更侧重稳定性的版本。
- **实验全面**：覆盖情感生成、对话、指令跟随三种不同性质的任务，评估指标既包含偏好准确性也包含偏离程度。

## 八、不足与局限

- **风险度量单一**：文中主要采用 CVaR 作为风险度量，未对比其他风险度量（如熵风险、谱风险）下的效果。
- **风险控制参数选择依赖经验**：虽然分析了 \(\mu\) 的影响，但未给出自动化或自适应选择策略。
- **计算开销增加**：尽管未详细报告运行时间，但其 token 级风险序列计算会引入额外计算成本，可能影响大规模部署。
- **仅在相对小的模型上验证**：实验使用的最大模型为 Pythia‑2.8B，未在更大规模模型（如 7B 以上）上验证其扩展性。
- **对偏好数据分布的假设**：依然基于 Bradley‑Terry 模型，未讨论当偏好存在噪声或不可传递时的鲁棒性。

（完）
