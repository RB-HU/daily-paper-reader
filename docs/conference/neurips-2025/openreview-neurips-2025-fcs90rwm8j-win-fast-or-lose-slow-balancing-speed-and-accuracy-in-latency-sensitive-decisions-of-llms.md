---
title: "Win Fast or Lose Slow: Balancing Speed and Accuracy in Latency-Sensitive Decisions of LLMs"
title_zh: Win Fast or Lose Slow：LLM 延迟敏感决策中的速度与精度平衡
authors: "Hao Kang, Qingru Zhang, Han Cai, Weiyuan Xu, Tushar Krishna, Yilun Du, Tsachy Weissman"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Fcs90Rwm8j"
tags: ["query:fla"]
score: 9.0
evidence: 面向高频交易的延迟敏感 LLM 智能体决策及 HFTBench 基准
tldr: 针对 LLM 智能体在高频交易等延迟敏感场景中响应速度与准确度平衡不清的问题，本文首次系统研究该权衡，构建了 HFTBench 和实时竞争博弈基准。实验证明通过动态调整策略可实现显著收益提升，为金融任务型智能体的实时部署提供了关键指导。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-fcs90rwm8j/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1406, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fcs90rwm8j/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1434, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fcs90rwm8j/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1414, \"height\": 863, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-fcs90rwm8j/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1223, \"height\": 764, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fcs90rwm8j/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 892, \"height\": 744, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fcs90rwm8j/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 943, \"height\": 571, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-fcs90rwm8j/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 936, \"height\": 258, \"label\": \"Table\"}]"
motivation: 现有 LLM 智能体在实时应用中未考虑延迟约束，忽略速度与精度的权衡，导致奖励损失。
method: 构建 HFTBench 及实时博弈基准，提出延迟感知决策策略以优化时间敏感场景下的总回报。
result: 在模拟交易中，延迟感知策略比传统策略获得更高总收益，验证了速度-精度均衡的重要增益。
conclusion: 该研究填补了 LLM 智能体在金融实时决策中的空白，为开发高效能金融 AI 代理提供了理论基础和实验依据。
---

## Abstract
Large language models (LLMs) have shown remarkable performance across diverse reasoning and generation tasks, and are increasingly deployed as agents in dynamic environments such as code generation and recommendation systems. However, many real-world applications, such as high-frequency trading and real-time competitive gaming, require decisions under strict latency constraints, where faster responses directly translate into higher rewards. Despite the importance of this latency–quality trade-off, it remains underexplored in the context of LLM-based agents. In this work, we present the first systematic study of this trade-off in real-time decision-making tasks. To support our investigation, we introduce two new benchmarks: HFTBench, a high-frequency trading simulation, and StreetFighter, a competitive gaming platform. Our analysis reveals that optimal latency–quality balance varies by task, and that sacrificing quality for lower latency can significantly enhance downstream performance. To address this, we propose FPX, an adaptive framework that dynamically selects model size and quantization level based on real-time demands. Our method achieves the best performance on both benchmarks, improving win rate by up to 80% in Street Fighter and boosting daily yield by up to 26.52% in trading,  underscoring the need for latency-aware evaluation and deployment strategies for LLM-based agents. These results demonstrate the critical importance of latency-aware evaluation and deployment strategies for real-world LLM-based agents.

---

## 论文详细总结（自动生成）

好的，我将以资深学术论文分析助手的身份，使用中文、以 Markdown 形式，对所提供的论文进行结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：论文首次系统性地研究了大语言模型（LLM）智能体在“延迟敏感决策任务”中的**延迟-质量权衡（Latency-Quality Trade-off）**问题。
*   **研究背景与动机**：
    *   现有 LLM 的研究和应用（如代码生成、数学推理）多是**质量优先**，对响应延迟有较高容忍度。
    *   但在高频交易、实时竞技游戏等**动态环境**中，环境会随时间及智能体的交互而快速变化。过慢的响应即使质量再高也会失效，导致错失机会或收益受损。因此，响应速度（低延迟）与决策质量同等重要。
    *   然而，模型大小和推理精度（如 FP16、FP8、FP4）之间存在根本性的权衡：大模型质量高但延迟高，小模型或量化模型延迟低但质量可能下降。如何在具体任务中找到两者间的最优平衡点，此前缺乏系统性研究。
*   **整体含义**：该工作旨在填补 LLM 在实时决策场景下的评估与部署空白，证明了根据任务动态调整模型配置（牺牲部分精度换取速度）能显著提升最终收益，并提出了一个实用的自适应框架来实现这一平衡。

### 2. 论文提出的方法论

*   **核心思想**：提出了一种名为 **FPX** 的自适应混合精度推理框架。该框架不追求全局统一精度，而是根据任务实时需求，**动态地、选择性地**对模型的不同层应用不同的浮点精度（FP8或FP4），从而在推理延迟和质量损失之间实现连续、细粒度的控制。
*   **关键技术细节**：
    *   **操作粒度精度控制**：仅针对计算瓶颈——线性层的矩阵乘法算子进行精度调整，而对归一化层、注意力机制等部分保持原样，以保证功能正确性和部署简便。
    *   **量化误差度量**：通过离线校准，计算模型每个线性层对 FP4 量化的容忍度。具体公式为：`εl = ||A_l_fp16 - A_l_fp4||² / ||A_l_fp16||²`，其中 `A_l_fp16` 和 `A_l_fp4` 分别是该层在 FP16 和 FP4 推理下的输出激活值。
    *   **精度分配策略**：
        1.  用户指定一个整体压缩率 γ（例如 20%）。
        2.  根据离线计算出的各层误差 εl 进行排序。
        3.  选择误差最小的 γ 比例的层（即对量化最不敏感的层），将其推理内核替换为 FP4。
        4.  其余 γ 比例的层（对量化敏感的层）则保持 FP8 推理。
    *   **算法流程**：整个流程为一次性离线校准，无需在线调整。其伪代码（Algorithm 1）描述了从计算各层误差、排序、选择层到分配精度的完整过程。

### 3. 实验设计

*   **数据集与场景（Benchmarks）**：
    *   **HFTBench（高频交易模拟器）**：基于 Polygon.io 的历史逐秒交易数据，模拟了一个订单簿交易环境。智能体根据市场观察进行买卖决策，响应延迟直接影响其能否在价格优势消失前成交。评估指标是**每日收益率（Daily Yield）**。
    *   **StreetFighter（竞技游戏平台）**：基于 DIAMBRA 平台的《街头霸王》游戏模拟。两名智能体进行实时对战，延迟将导致动作落后而受到惩罚。评估指标采用 **ELO 评分系统**。
*   **对比方法（Baselines）**：
    *   **FP16（全精度）**：作为质量上限和延迟下限的基线。
    *   **FP8（8位浮点）**：当前主流低精度推理方法，能实现近无损加速。
    *   **FP4（4位浮点）**：极高压缩比，极低延迟，但模型质量损失严重。
    *   **FPX（本文方法）**：在相同模型上，通过调整压缩率 γ，寻找延迟和精度的最优权衡点。
*   **实验配置**：实验统一使用 **Qwen2.5 模型家族**（1.5B 到 14B 参数），以消除不同模型预训练质量、架构带来的偏差。FPX 的压缩率 γ 以 0.1 为步长进行探索。

### 4. 资源与算力

*   **硬件平台**：文中明确说明，所有实验均在 **NVIDIA RTX 5090 GPU** 上运行。
*   **多卡配置**：对于 14B 参数的大模型，采用了模型并行（Model Parallelism），在多块 GPU （具体数量未明确，通常为2块或更多）上联合提供服务。
*   **训练/校准时长**：文中未提及除离线校准外的任何模型训练。校准过程使用的数据集是 Wikitext-2，计算量相对较小，但未给出具体的耗时。

### 5. 实验数量与充分性

*   **实验组数**：
    *   **主实验**：在两个基准（HFTBench、StreetFighter）上，对多种模型（1.5B, 3B, 7B, 14B）和多种精度配置（FP16, FP8, FP4, FPX）进行了性能和延迟的全面评估。
    *   **消融研究**：专门针对 FPX 方法，在 HFTBench（14B模型）和 StreetFighter（3B模型）上，测试了不同压缩率 γ（0.0 到 1.0）对延迟（Latency）、模型困惑度（PPL）和最终任务奖励（Daily Yield / Winrate）的影响，清晰地描绘了帕累托前沿。
    *   **延迟分析**：在附录中对比了不同量化方案（FP16, FP8, INT W4A16, FP4）在不同大小模型上的延迟数据。
*   **充分性与公平性**：
    *   **充分**：实验覆盖了从模拟金融到竞技游戏两种截然不同的延迟敏感场景，结论具有互补性。消融实验清晰地揭示了压缩率对任务性能的非单调影响，支撑了“存在最优权衡点”这一核心论点。
    *   **客观公平**：所有方法在同族模型（Qwen2.5）和相同硬件上进行测试，避免了不公平变量。评估指标（收益率、ELO评分）直接反映任务最终奖励，比单纯对比推理延迟或模型困惑度更具现实意义。

### 6. 论文的主要结论与发现

1.  **任务依赖的最优权衡**：延迟和质量的“甜蜜点”因任务而异。交易任务（HFTBench）需要二者兼顾；而格斗游戏（StreetFighter）对延迟高度敏感，可接受较大幅度的质量下降以换取速度。
2.  **FPX 框架的有效性**：通过自适应混合精度，FPX 能成功找到优于所有固定精度基线的操作点。例如，在 HFTBench 上，14B 模型经 FPX 配置后**每日收益率最高（26.52%）**；在 StreetFighter 上，3B 模型经 FPX 配置后**胜率提升达 80%**。
3.  **单纯加速的局限性**：对于本身决策能力不佳的小模型（如交易中的7B模型），单纯降低延迟不仅无益，甚至可能加速亏损。
4.  **环境限制**：任务环境本身存在响应速度上限（如游戏的动作帧率），超过该阈值的进一步加速将不再带来收益。

### 7. 优点

*   **问题新颖且重要**：开创性地将“延迟-质量权衡”引入 LLM 智能体研究，挑战了“慢工出细活”的传统评估标准，对实时 AI 应用具有重要指导意义。
*   **基准设计务实**：构建的 **HFTBench 和 StreetFighter 基准**紧密结合真实世界动态（逐秒行情、实时对战），并巧妙地量化了延迟对奖励的直接影响，为后续研究提供了有效的评估工具。
*   **方法论高效且可实践**：**FPX 框架**设计巧妙。它基于离线校准、层粒度的精度分配，无需昂贵训练或在线学习，便于部署；同时，其“抓大放小”（量化不敏感层）的策略在保证加速的同时，最大限度地抑制了质量损失。

### 8. 不足与局限

*   **精度选择粒度较粗**：当前层级别的精度分配虽简便，但可能并非最优。更细粒度的控制（如token级别、甚至张量内部分元素级别）理论上有望实现更佳的权衡，但实现复杂度过高，文中将其留作未来工作。
*   **实验覆盖范围有限**：
    *   **模型单一**：仅测试了 Qwen2.5 模型，结论在其他架构（如 Llama， DeepSeek）上的泛化性需要验证。
    *   **任务类型限制**：仅覆盖了两个特定领域，未来可扩展到更多类型的延迟敏感任务，如机器人控制、自动驾驶等。
*   **潜在偏差风险**：
    *   **基准构建偏差**：模拟器的设计（如 HFTBench 的价格衰减模型）可能与现实世界的复杂市场机制存在差异，可能影响结论的绝对外推性。
    *   **模型选择偏差**：专注于同族模型虽保证了公平对比，但也可能掩盖了某些特定架构对延迟-质量权衡的独特敏感性。

（完）
