---
title: Learning “Partner-Aware” Collaborators in Multi-Party Collaboration
title_zh: 学习多方协作中“伙伴感知”的协作者
authors: "Abhijnan Nath, Nikhil Krishnaswamy"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=yFfWVr2TmZ"
tags: ["query:fla"]
score: 8.0
evidence: 使用RLHF训练LLM协作者作为多轮多方任务中的伙伴，是一种自主智能体后训练技术。
tldr: 本文研究如何训练LLM智能体在多方协作中成为伙伴感知的协作者，通过RLHF训练增加任务相关共识。在标准RLHF框架下，智能体学会从伙伴干预中智能地收集信息，提升协作效率。该工作为多轮对话型智能体的后训练和对齐提供了理论见解和实用方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-yffwvr2tmz/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1434, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yffwvr2tmz/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1419, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yffwvr2tmz/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1409, \"height\": 817, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1446, \"height\": 451, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1349, \"height\": 438, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 564, \"height\": 676, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1466, \"height\": 706, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 813, \"height\": 338, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 891, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1451, \"height\": 810, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1452, \"height\": 927, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-yffwvr2tmz/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1455, \"height\": 847, \"label\": \"Table\"}]"
motivation: LLM在智能体设置中需与人类协作，但缺乏有效评估和训练伙伴感知能力的方法。
method: 基于AI对齐和安全中断性理论，使用RLHF训练协作智能体以最大化共同基础。
result: 训练后的智能体在多方任务中能更好地利用伙伴干预，提高协作一致性。
conclusion: 伙伴感知训练提升了LLM智能体的协作能力，为多轮对话智能体后训练提供了新视角。
---

## Abstract
Large Language Models (LLMs) are increasingly being deployed in agentic settings where they act as collaborators with humans. Therefore, it is increasingly important to be able to evaluate their abilities to collaborate effectively in multi-turn, multi-party tasks. In this paper, we build on the AI alignment and “safe interruptability” literature to offer novel theoretical insights on collaborative behavior between LLM-driven *collaborator agents* and an *intervention agent*. Our goal is to learn an ideal “partner-aware” collaborator that increases the group’s common-ground (CG)—alignment on task-relevant propositions—by intelligently collecting information provided in *interventions* by a partner agent. We show how LLM agents trained using standard RLHF and related approaches are naturally inclined to ignore possibly well-meaning interventions, which makes increasing group common ground non-trivial in this setting. We employ a two-player Modified-Action MDP to examine this suboptimal behavior of standard AI agents, and propose **Interruptible Collaborative Roleplayer (ICR)**—a novel “partner-aware” learning algorithm to train CG-optimal collaborators. Experiments on multiple collaborative task environments show that ICR, on average, is more capable of promoting successful CG convergence and exploring more diverse solutions in such tasks.

---

## 论文详细总结（自动生成）

# 论文总结：Learning “Partner-Aware” Collaborators in Multi-Party Collaboration

## 1. 论文的核心问题与整体含义
- **核心问题**：大规模语言模型（LLM）在扮演多方协作中的协作者角色时，如何有效评估并提升其“伙伴感知”（partner-aware）能力，即在多轮、多方任务中既能利用来自干预智能体（intervention agent）的有用建议，又能抵御误导性干预，从而最大化群体共同基础（common ground, CG）——即任务相关命题的共识。
- **研究动机**：随着LLM被广泛部署为协作智能体，标准强化学习与偏好对齐方法（如RLHF、DPO等）在协作中往往忽略干预的质量差异，导致智能体要么盲目采纳建议而缺乏逻辑一致性，要么完全忽视可能有益的干预，难以在真实场景中实现高效协作与信念对齐。因此，亟需一种训练方法使协作者智能体能够辨别干预质量，实现安全可中断且伙伴感知的协作。
- **整体含义**：该工作将AI对齐中的“安全可中断性”与多智能体协作相结合，提出了理论框架和实用算法，训练出能在协作中主动评估干预因果影响的智能体，从而显著提升任务成功率和共识收敛，为人机协作、AI教学等场景提供了基础。

## 2. 论文提出的方法论
- **核心思想**：通过**反事实不变性**（counterfactual invariance）正则化，训练协作者智能体在面对干预时保持策略一致性，即使明确告知“该干预不会提升任务效用”，智能体仍应基于自身推理做出响应，从而学会区分信号与噪声，实现伙伴感知的协作。
- **关键技术细节**：
  - 使用**Modified-Action MDP (MAMDP)** 框架显式建模协作者 π_C 和干预者 π_I 的交互动态，状态包含对话历史，动作分别为干预语句和协作者响应。
  - 提出 **Interruptible Collaborative Roleplayer (ICR)** 算法，在PPO目标函数中加入一个**反事实KL散度正则项**：
    - 目标函数：J*(θ_C) = 期望回报 - λ_H · D_KL(π_C ∥ π_Ref) - λ_Intent · D_KL(π_C ∥ π_CF_C)
    - 其中 π_CF_C 是协作者在“反事实状态”下的策略（即通过提示词前缀告知干预无帮助），用于衡量当干预因果路径被截断时策略的一致性。
    - 通过最小化该KL散度，鼓励策略在面对干预时产出相同动作，从而培养“意向性”（intentionality）和稳定推理能力。
  - 该正则项可与PPO结合，计算高效：只需对采样出的响应序列在反事实提示下多进行一次前向传播并计算token级KL差异，不增加额外采样开销。
- **理论保证**：证明了标准偏好对齐策略在MAMDP中是次优的（定理3.2），而反事实不变性可界限次优性差距（定理B.4），从而说明方法能有效克服这一局限。

## 3. 实验设计
- **任务与数据集**：
  - **DeliData Wason Card Selection Task**：基于逻辑规则的卡片选择任务，需验证规则“元音背面必为偶数”，要求协作者选取必要卡片。数据来自DeliData数据集，加入干预智能体建议。
  - **Weights Task**：合作推断彩色方块重量的平衡秤任务，协作者需达成对重量关系的共识。数据来自Weights Task对话。
  - 每个任务分为**“full-press”**（自然语言自由对话）和**“no-press”**（离散结构化信念输出，无自然语言）两种设置，以分离语言表达与协同推理的效果。
- **对比方法**：
  - 行为克隆（BC）：直接模仿GPT-4o专家的轨迹。
  - 离线偏好优化：DPO、IPO。
  - 在线RL：PPO（使用预训练奖励模型）。
  - PSO-INTENT：基于路径特定目标的基准，测试干预非因果绑定的影响。
  - 所有方法均以Meta-Llama-3-8B-Instruct为基础模型进行微调。
- **评估指标**：
  - Weights Task：ACC（正确命题数×共同基础度量，综合准确性与共识程度）。
  - DeliData Task：任务准确率（ACC）与共同基础增量（CG，即对话中新增的独特解决方案类别个数）。
  - 均以GPT-4o作为固定干预智能体，进行100次15轮对话评估。

## 4. 资源与算力
- **GPU配置**：
  - Full-press实验需要参考模型在内存，使用两块NVIDIA A100 GPU。
  - No-press实验使用单块A100 GPU。
  - 奖励模型（OPT-1.3B）使用全参数训练，于单块A100完成。
  - SFT与偏好优化基线训练也于单块A100进行。
- **训练时长估算**：
  - 标准基线如DPO/IPO训练3000步，约需12 GPU小时。
  - PPO及ICR训练约6000个mini-batch，有效batch size=8，约需24小时收敛。
- **微调方式**：采用LoRA（秩8，α=16）及4-bit量化，使用bitsandbytes和PEFT，优化器AdamW，余弦调度，权重衰减0.05。

## 5. 实验数量与充分性
- **主要实验**：在2个任务×2种通信模式下共4组实验，每组均与6种基线（含ICR）对比，结果列于表1。每组实验使用100次15轮对话评估，报告均值和标准误差。实验规模充分，统计误差小。
- **消融实验**：
  - 反事实正则化强度 λ_Intent 的消融（图1b），在no-press DeliData上训练8000步，3个随机种子，揭示了最佳值0.2。
  - 补充性评估（表2）包含：ICR屏蔽干预、使用弱干预智能体、PSO消极极性、ICR不同反事实措辞、PPO叠加反事实提示、GPT-4o-mini及4o自配对。验证了ICR的稳健性和泛化性。所有补充实验使用50次对话。
- **公平性**：所有基线均从相同的BC初始化，使用相同的代理奖励（避免共识奖励造成的奖励黑客），干预智能体固定，对比公平。实验覆盖语言和非语言场景，多维度证实了ICR的优势。

## 6. 论文的主要结论与发现
- ICR在所有任务和通信条件下，均显著优于所有基线（行为克隆、DPO、IPO、PPO、PSO-INTENT），在Weights Task full-press中ACC高出DPO约47%，在DeliData中共同基础增量（CG）达3.35，远超其他方法。
- 反事实正则化使协作者在后期对话中能持续利用干预积累共识，尤其在处理复杂关系（如不等式、顺序推理）时优势更加明显。
- 即使在no-press（无自然语言）条件下，ICR仍保持领先，表明其反事实训练让智能体在受限表达下也能更有效地整合干预信息。
- 适度的 λ_Intent 值（如0.2）能在任务优化与反事实一致性间取得平衡，过大或过小都会损害性能。
- 理论证明标准偏好对齐策略在MAMDP中次优，而反事实不变性正则化可提供理论上的性能保证。

## 7. 优点
- **创新性强**：首次将安全可中断性与反事实不变性引入多轮多方语言协作训练，提供了新颖的算法框架。
- **理论扎实**：结合MAMDP建模和偏好对齐的次优性分析，给出了清晰的问题界定和解决思路，并提供了理论界。
- **方法高效**：反事实KL项计算仅需一次额外前向传播，几乎不增加采样开销，与PPO结合紧凑高效。
- **实验全面**：涵盖两个协作任务、两种通信模式、多种消融和辅助实验，评估指标兼顾任务精度和共同基础收敛，对比基线多样且公平。
- **实用性突出**：训练出的8B模型表现接近甚至超越GPT-4o自配对基线，表明小模型也能通过此方法获得强大的伙伴感知能力。

## 8. 不足与局限
- **算力限制**：仅在8B参数模型上训练，可能未充分展示在大规模模型上的扩展性，且受限于计算资源，未能在更多样化的干预者上测试。
- **干预智能体固定**：实验中干预智能体主要为GPT-4o，而现实中的干预质量可能更多变（如人类建议），尚未评估对多样干预源的鲁棒性。
- **缺乏人类数据**：训练多基于AI生成轨迹，缺少真实人类协作数据，可能影响向人机协作的迁移。
- **任务局限性**：只在两个协作领域（逻辑推理与物理推理）测试，未涉及更复杂的策略性对话（如Diplomacy包含欺骗等），通用性待验证。
- **潜在滥用风险**：伙伴感知的能力可能被用于操纵或隐藏欺骗意图，论文虽提及安全问题，但未部署具体防护机制。
- **多模态与中心化训练缺位**：未探索多模态交互或集中式梯度通信，可能限制了在更自然协作场景的效果。

（完）
