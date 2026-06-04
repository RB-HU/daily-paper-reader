---
title: "The Lighthouse of Language: Enhancing LLM Agents via Critique-Guided Improvement"
title_zh: 语言灯塔：通过批评引导改进增强LLM智能体
authors: "Ruihan Yang, Fanghua Ye, Jian Li, Siyu Yuan, Yikai Zhang, Zhaopeng Tu, Xiaolong Li, Deqing Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=D88yhLFzDR"
tags: ["query:fla"]
score: 8.0
evidence: 基于自然语言批评的演员-评论家训练提升LLM智能体
tldr: 针对数值奖励信号缺乏上下文指导的局限，提出批评引导改进框架CGI，使用演员模型探索环境、批评模型生成自然语言批评，通过强化学习使智能体从语言反馈中迭代提升。实验显示该方法能有效增强智能体的推理和规划能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1428, \"height\": 723, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1435, \"height\": 952, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1315, \"height\": 360, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 616, \"height\": 331, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 568, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 604, \"height\": 331, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 661, \"height\": 358, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-d88yhlfzdr/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1302, \"height\": 399, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1449, \"height\": 640, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1456, \"height\": 815, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1435, \"height\": 327, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1445, \"height\": 497, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1455, \"height\": 300, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-d88yhlfzdr/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1444, \"height\": 283, \"label\": \"Table\"}]"
motivation: 数值反馈难以提供丰富的改进建议，自然语言批评更符合LLM的生成特性但利用困难。
method: 设计演员-批评家双模型框架，批评家生成详细语言批评，演员通过RL从批评中学习优化行动。
result: 在复杂代理任务上，CGI训练的智能体展现出更优的决策和自适应改进能力。
conclusion: 为金融智能体的后期训练提供了一种可解释且高效的迭代对齐方法，可复用性高。
---

## Abstract
Large language models (LLMs) have recently transformed from text-based assistants to autonomous agents capable of planning, reasoning, and iteratively improving their actions. While numerical reward signals and verifiers can effectively rank candidate actions, they often provide limited contextual guidance. In contrast, natural language feedback better aligns with the generative capabilities of LLMs, providing richer and more actionable suggestions. However, parsing and implementing this feedback effectively can be challenging for LLM-based agents. In this work, we introduce Critique-Guided Improvement (CGI), a novel two-player framework, comprising an actor model that explores an environment and a critic model that generates detailed nature language feedback. By training the critic to produce fine-grained assessments and actionable revisions, and the actor to utilize these critiques, our approach promotes more robust exploration of alternative strategies while avoiding local optima. Experiments in three interactive environments show that CGI outperforms existing baselines by a substantial margin. Notably, even a small critic model surpasses GPT-4 in feedback quality. The resulting actor achieves state-of-the-art performance, demonstrating the power of explicit iterative guidance to enhance decision-making in LLM-based agents.

---

## 论文详细总结（自动生成）

## 1. 研究动机与核心问题  
- **动机**：大语言模型（LLM）已从文本助手演进为可自主规划、推理、迭代改进的智能体（agent）。  
- **核心问题**：高效获取并利用反馈以持续提升智能体性能。  
  - 传统数值反馈（reward model、验证器）仅提供标量分数，缺乏上下文指导与改进建议。  
  - 自然语言反馈虽信息丰富，但现有方法依赖自我反思（self‑refinement），容易产生弱反馈（幻觉、评价不准）且智能体难以解析和有效利用语言批评。  
- **整体含义**：需要引入专门的批评模型（critic）生成高质量自然语言反馈，并训练演员（actor）模型学习如何依据批评迭代改进行为，从而在交互式任务中实现更稳健、高效的推理与探索。

## 2. 方法论：Critique-Guided Improvement (CGI)  
### 核心思想  
- 两玩家框架：**演员模型** $\pi_\theta$ 探索环境、生成候选动作；**批评模型** $\pi_\phi$ 对候选动作生成结构化自然语言批评（包含评判与修订建议）。演员据此修正动作并执行，形成闭环交互。  
- 分两阶段：  
  1. **Critique Generation（批评生成）**：训练高质量的批评家。  
  2. **Action Refinement（行为修正）**：迭代训练演员以有效利用批评。

### 关键技术细节  
- **批评结构**：  
  - *判别（Discrimination）*：从 **贡献**（是否有助于任务）、**可行性**（是否符合动作空间）、**效率**（避免冗余）三维度分析。  
  - *修订（Revision）*：赋予整体等级（Excellent ~ Very Poor），并给出具体修改建议。  
- **批评家训练**：  
  - 使用专家轨迹（如 GPT‑4o 生成的正确路径）作为参照，专家批评者 $\pi_{\text{exp}}$ 结合候选动作、历史与专家轨迹，按固定格式生成结构化批评。  
  - 仅收集最终成功轨迹（$R(\tau')=1$）中的批评数据构成 $D_{\text{critique}}$。  
  - 批评模型 $\pi_\phi$ 通过标准语言模型损失微调：  
    $$ \mathcal{L}_{\text{critic}}(\phi) = \mathbb{E}_{(c_t,\tau'_t,a_t,e)\sim D_{\text{critique}}}\left[ \log \pi_\phi(c_t \mid \tau'_t, a_t, e) \right] $$  
- **行为修正（迭代式监督微调, Iterative SFT）**：  
  - 每轮迭代 $k$：  
    * 演员 $\pi_\theta^{k-1}$ 在环境 $e$ 中交互，批评模型 $\pi_\phi$ 实时提供批评，生成修正动作 $a'_t$。  
    * 收集正确轨迹 $D_{\text{correct}}$ 和批评‑动作对 $D_{\text{refine}}$。  
  - 训练集 $D_{\text{train}} = D_{\text{expert}} \cup D_{\text{correct}}$，并混合通用数据 $D_{\text{general}}$（如 ShareGPT）以保持泛化能力。  
  - 演员损失：  
    $$ \mathcal{L}_{\text{actor}}(\theta) = \beta \Big( \mathbb{E}_{(\tau,x,e)\sim D_{\text{train}}} \log \pi_\theta(\tau|x,e) + \mathbb{E}_{(a'_t,\tau'_t,c_t,e)\sim D_{\text{refine}}} \log \pi_\theta(a'_t|\tau'_t,c_t,e) \Big) + (1-\beta) \mathbb{E}_{(x,y)\sim D_{\text{general}}} \log \pi_\theta(y|x) $$  
  - 每次基于原始模型 $\pi_\theta^0$ 微调，避免策略偏移。共进行 $K$ 轮（文中 $K=3$）。

### 算法流程（Algorithm 1）  
1. 微调批评模型（利用专家批评数据）  
2. 迭代：  
   - 演员在批评指导下探索环境，筛选成功轨迹和批评‑动作对  
   - 合并训练集，用上述损失微调演员获得 $\pi_\theta^k$

## 3. 实验设计  
### 环境/数据集  
- **WebShop**：在线购物交互环境，含1.2万指令、百万商品，评估最终得分。  
- **ScienceWorld**：科学推理文本环境，30类小学科学任务，评估最终得分。  
- **TextCraft**：Minecraft 物品合成文本环境，目标‑合成树，评估成功率。  

### 评价基准  
- 测试集：ScienceWorld 和 WebShop 各200次模拟，TextCraft 100次。  
- 指标：平均最终得分（ScienceWorld/WebShop）或成功率（TextCraft）。  

### 对比方法  
- **数值反馈**：DGAP（判别式步骤对齐）、Explicit RM（预测 Q 值）  
- **语言反馈**：自我批评（Self‑Critique）、GPT‑4o 作为批评者  
- **强弱模型基线**：GPT‑4o、Claude 3、DeepSeek‑Chat 等闭源模型；Llama‑3‑70B‑Instruct 等开源模型；AgentLM、Agent‑FLAN 等训练型智能体；Reflexion（自我反思）、Iterative SFT（仅用正确轨迹迭代微调）

### 骨干模型  
- 演员与批评均基于 **Llama‑3‑8B‑Instruct**。

## 4. 资源与算力  
- **GPU**：8 × NVIDIA A100 40 GB。  
- **训练时间**：  
  - 批评生成阶段：约 5 小时 46 分钟。  
  - 行为修正阶段（3轮）：约 11 小时 11 分钟。  
- 其他超参数：总 batch size 64，学习率 $2\times10^{-5}$，warmup ratio 0.05，最大长度 4096 token，优化器 Adam。

## 5. 实验数量与充分性  
### 实验规模  
- 批评家对比：在 3 个环境、3 种演员（vanilla Llama‑3‑8B、Llama‑3‑70B、SFT 后的 Llama‑3‑8B）上，对比 5 种反馈方式（无批评、DGAP、Explicit RM、Self‑Critique、GPT‑4o、Critic Model）。  
- 主要结果：与 10 余个基线对比（闭源/开源模型、训练型智能体、迭代方法）。  
- 消融实验：分析是否包含 $D_{\text{correct}}$、$D_{\text{refine}}$、$D_{\text{general}}$ 的影响。  
- 行为修正迭代曲线：对比 Reflexion、Iterative SFT 与 CGI 的轮次性能趋势。  
- 定性分析：按轨迹阶段（5段）观察修改比例；按任务难度（短/中/长轨迹）分析性能。  
- 候选动作数量 $M$ 的敏感性分析（1 ~ 9）。  
- 额外分析：迭代次数影响、训练数据依赖（替换专家轨迹为 GPT‑4o 路径）、批评家可更新性。  

### 公平性与客观性  
- 所有推理均设置 temperature=0，消除随机性。  
- 训练/测试集划分明确，使用固定种子测试集。  
- 批评家训练仅使用成功轨迹，避免负面样本偏误；演员每轮从基模型重训，防止策略偏移。  
- 自对比与外部基线覆盖广泛，消融实验验证各组件贡献。

## 6. 主要结论与发现  
1. **语言批评显著优于数值信号**：训练的小型批评家（8B）在三个环境下的平均提升达 +48.79%（相对于无批评），远超判别器（+5.09%）和 GPT‑4o（+19.63%）。  
2. **微调模型不易利用语言批评**：SFT 虽提高了基础性能，但因策略固化，面对批评时提升有限甚至下降（ScienceWorld 中仅从 76.12% 到 74.68%）。CGI 通过迭代行为修正，使性能额外提升 +15.99%，达到 SOTA。  
3. **CGI 支持持续进步**：相比 Reflexion（易陷入局部最优）和 Iterative SFT（后期饱和），CGI 借助高质量批评和修正训练，在长链路任务上实现持续改进。  
4. **早期阶段受益最大**：批评主要帮助智能体在交互初期减少无效探索，提高早期修改比率，进而缩短轨迹长度。  
5. **对长任务效果更突出**：行为修正使长链路任务的性能增益从 +43.95% 提升至 +72.70%。  

## 7. 优点与方法亮点  
- **结构化批评设计**：多维判别 + 明确修订建议，使自然语言反馈可操作、可训练。  
- **迭代利用批评**：通过交替收集成功轨迹和批评‑动作对，使演员学会“跟随”批评，避免策略偏移。  
- **小模型批评家超越 GPT‑4**：8B 批评家较 GPT‑4o 平均提升 +29.16%，表明专用训练语言批评家极富性价比。  
- **算法简洁有效**：不依赖强化学习的复杂奖赏塑形，仅用 SFT + 迭代自生成数据，易于复现。  
- **泛化实验全面**：跨三类形态各异的交互环境，覆盖搜索、科学推理和层次合成，验证方法的普适性。

## 8. 不足与局限  
- **计算开销**：CGI 推理时间约为无批评的 3～4 倍，虽性能提升显著，但对低时延任务不友好。  
- **环境依赖**：批评家训练需专家轨迹或足够好的探索路径，完全冷启动时性能会下降（见表6，用 GPT‑4o 轨迹训练的批评家仍有效，但低于专家轨迹）。  
- **迭代轮次饱和**：第4轮后出现性能下降，多次迭代可能带来过拟合或策略漂移风险。  
- **泛化边界**：仅在三个特定交互环境测试，未在更开放、连续控制或视觉环境中验证。  
- **偏见风险**：批评可能延续训练数据中的偏差，生成的修订建议也可能被恶意利用。  
- **静态批评家**：主实验中批评家未随演员更新而更新（额外实验显示更新批评家可进一步提升，表明静态批评家可能滞后于演员策略演进）。

（完）
