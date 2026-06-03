---
title: "Think Twice, Act Once: A Co-Evolution Framework of LLM and RL for Large-Scale Decision Making"
title_zh: 三思而后行：LLM与RL协同演化的大规模决策框架
authors: "Xu Wan, Wenyue Xu, Chao Yang, Mingyang Sun"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ySWrJer7mW"
tags: ["query:fla"]
score: 6.0
evidence: LLM与RL协同演化决策框架，一种后训练技术
tldr: ACE针对大规模决策中LLM缺乏实时长序列决策能力、RL样本效率低的问题，提出让LLM在RL训练中同时扮演策略行动者和价值评论者，通过多步推理优化动作，从而实现LLM与RL智能体的协同进化。实验证明该框架能大幅提升样本效率与决策质量，为大规模工业决策提供了有效方案，在金融领域如资产配置等任务中具有潜在应用价值。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1691, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 830, \"height\": 726, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1698, \"height\": 868, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 856, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 860, \"height\": 379, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1756, \"height\": 972, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1778, \"height\": 826, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1767, \"height\": 1175, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1771, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-yswrjer7mw/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1768, \"height\": 871, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1829, \"height\": 957, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 857, \"height\": 287, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 856, \"height\": 522, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 891, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1758, \"height\": 534, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-yswrjer7mw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1170, \"height\": 719, \"label\": \"Table\"}]"
motivation: 大规模工业决策中LLM缺乏实时长序列决策能力，RL样本效率低，亟需协同方案。
method: ACE框架中LLM在RL训练阶段充当策略Actor和价值Critic，借助多步推理优化动作。
result: 实现了LLM与RL的协同进化，在工业大规模决策中显著提升样本效率与决策质量。
conclusion: 为结合LLM与RL进行智能体后训练提供了新思路，可迁移至金融决策。
---

## Abstract
Recent advancements in Large Language Models (LLMs) and Reinforcement Learning (RL) have shown significant promise in decision-making tasks. Nevertheless, for large-scale industrial decision problems, both approaches face distinct challenges: LLMs lack real-time long-sequence decision-making capabilities, while RL struggles with sample efficiency in vast action spaces. To bridge this gap, we propose **A**gents **C**o-**E**volution (ACE), a synergistic framework between LLMs and RL agent for large-scale decision-making scenarios. ACE introduces a dual-role trajectory refinement mechanism where LLMs act as both Policy Actor and Value Critic during RL's training: the Actor refines suboptimal actions via multi-step reasoning and environment validation, while the Critic performs temporal credit assignment through trajectory-level reward shaping. Concurrently, RL agent enhance LLMs' task-specific decision-making via prioritized experience replay.

Through extensive experiments across multiple power grid operation challenges with action spaces exceeding 60K discrete actions, ACE demonstrates superior performance over existing RL methods and LLM-based methods.

---

## 论文详细总结（自动生成）

好的，以下是对该论文的结构化深度总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：大规模工业决策（如电力网络控制）面临独特挑战。强化学习（RL）在庞大的动作空间（>60K）中样本效率极低，难以收敛；大语言模型（LLM）虽推理能力强，但无法满足实时决策的延迟要求（亚秒级响应），且难以生成连贯的长序列控制指令（800-2000步）。现有的专家引导方法则过度依赖专家数据或计算代价高昂。
*   **整体含义**：论文的核心思想是“**三思而后行**”（Think Twice, Act Once），即让 **LLM 在 RL 训练阶段充当“离线参谋”（双角色轨迹优化器）**，而 RL 智能体负责“在线执行”。通过这种分离，结合了 LLM 的推理优势和 RL 的快速执行能力，解决了工业场景下实时性与复杂推理不可兼得的难题，实现了 LLM 与 RL 智能体的协同进化（Co-Evolution）。

### 2. 论文提出的方法论

*   **核心思想**：提出 **ACE（Agents Co-Evolution）框架**，将 LLM 作为 RL 训练时的辅助模块，而非推理时组件。LLM 扮演双重角色：对 RL 产生的劣质轨迹进行反思和修正（Think Twice），而 RL 智能体仅在与环境交互时执行动作（Act Once）。两者通过混合经验缓冲区实现共同进化。
*   **关键技术细节**：
    *   **第一阶段：RL 基础学习**：使用 SAC 算法进行离线策略学习，智能体与环境交互生成标准转移元组 `(s, a, r, s‘, d)`，存入缓冲区 `D_RL`。
    *   **第二阶段：LLM 双角色轨迹优化**：
        1.  **LLM 作为策略演员（Policy Actor）**：对缓冲区中奖励低于阈值 `r < r̄` 的低质量状态-动作对，LLM 结合任务描述和当前场景，进行多步推理和环境模拟验证，生成优化后的动作 `ât`，并将新转移元组存入缓冲区 `D_LLM`。
        2.  **LLM 作为价值评论员（Value Critic）**：在训练后期，LLM 对整个轨迹 `τ` 进行反事实推理，识别关键决策点并重新评估其长期价值，输出离散化的奖励修正值 `{−2K, −K, +K, +2K}`，实现轨迹级的信用分配。
    *   **第三阶段：经验收集与协同进化**：
        1.  **构建混合缓冲区（`D_mix`）**：按比例 `β` 混合 `D_RL` 和 `D_LLM` 中的样本，并根据奖励高低（`w_r(τ)`）和质量验证（`Iv(τ)`）对 LLM 优化的样本进行优先采样。
        2.  **RL 策略学习**：在 `D_mix` 上，使用奖励加权损失函数更新 RL 策略，鼓励其学习 LLM 产生的高奖励行为。
        3.  **LLM 在线微调**：利用 `D_mix` 中的高质量样本对 LLM 进行低秩适应微调，增强其特定任务能力。

*   **算法流程**：一个“一步执行，两步思考，混合进化”的迭代循环。RL 执行动作并收集经验；LLM 分析经验并优化动作/奖励；从混合池中采样用于更新 RL 策略和微调 LLM。

### 3. 实验设计

*   **数据集与环境**：基于电网模拟平台 **Grid2Op** 的三个 L2RPN 国际挑战赛场景：
    1.  **L2RPN WCCI 2020**：中型电网（36 变电站），动作空间 >60K，测试为 10 个不同难度的 3 天级场景。
    2.  **L2RPN NeurIPS 2020**：在 WCCI 2020 基础上增加对抗性机制（随机断线），测试为 24 个周级场景（2016 步）。
    3.  **L2RPN WCCI 2022**：基于 IEEE-118 标准的大电网，动作空间 >70K，富含可再生能源，训练数据达 1.7GB。
*   **基准方法（Baselines）**：
    *   **专家引导的 RL**：竞赛冠军方案。
    *   **纯 LLM**：GPT-4o 和 Qwen2-7B-Instruct 直接决策。
    *   **LLM 引导的 RL**：改进的 LLM4Teach 方法，使用 KL 散度约束对齐 RL 与 LLM 的策略。
*   **ACE 配置**：分别使用 **ACE (Qwen2-7B + SFT)** 和 **ACE (GPT-4)** 进行评估。

### 4. 资源与算力

*   论文未明确提及 GPU 的具体型号和数量。
*   **训练时长**：以 **NeurIPS 2020** 环境为例，ACE 框架的总训练时长为 **6 小时 18 分钟**。其中，RL 部分耗时 3 小时，LLM 推理、采样和训练分别耗时 1 小时 48 分、59 分和 26 分。相比之下，基线专家引导 RL 训练 100K 步耗时 6 小时 4 分钟，这说明 ACE 通过极少量（~700 次）的 LLM 交互，在几乎同等的计算开销下实现了性能大幅提升。

### 5. 实验数量与充分性

*   **实验组数**：包含 **3 个大规模竞赛场景**的主实验，每个场景对比了 **5 种不同方法**。进行了 **1 组核心模块消融实验**（移除 Actor/Critic/策略）和 **2 组详细的超参数/策略消融实验**（查询频率、阈值、微调频率等）。
*   **充分性与公平性**：实验设计**相当充分且客观公平**。在多个公认的、复杂度递增的基准上，与当前最优的 RL 方法和新兴的 LLM 方法进行对比。消融实验全面验证了框架核心组件和关键设计选择的有效性，如证明了基于奖励（非动作或状态）的关键轨迹选择对 Critic 的重要性。所有结果均采用 **5 次运行的平均值和标准差**，增强了结果的可靠性。

### 6. 论文的主要结论与发现

*   **性能显著领先**：ACE 在所有三个 L2RPN 竞赛中均取得了最佳表现，相比冠军方案 RL 基线平均提升 22.2% 以上，相比纯 LLM 方法提升超过 130%。
*   **样本效率极高**：ACE 通过约 400-700 次 LLM 修正，仅需基线 RL **40%-50% 的交互步数（4-5 万步 vs 10-20 万步）** 即可获得更优性能。
*   **实时性得以保持**：由于 LLM 在离线训练阶段被调用，ACE 在测试时的执行速度与纯 RL 方法相当（约 38.7 秒），远远快于纯 LLM 方法（约 1480.8 秒）。
*   **协同进化有效**：ACE 不仅能引导 RL 学习，通过混合缓冲区对 LLM 进行微调（SFT）后，LLM 自身的决策和纠错能力也得到提升，形成了正向循环。
*   **方法优于策略正则化**：相比 LLM4Teach 这类静态策略对齐方法，ACE 的动态轨迹优化方式能避免 RL 策略学习 LLM 的次优长序列行为，实现更优探索。

### 7. 优点

*   **设计理念创新**：“Think Twice, Act Once”的离线优化-在线执行分离模式，巧妙且实用地解决了 LLM 实时性与工厂场景不匹配的矛盾。
*   **双角色机制完备**：LLM 同时作为 Actor（优化动作）和 Critic（重新分配信用），系统地提升了 RL 的探索效率和解的质量。
*   **高度的样本效率**：仅需少量 LLM 干预即可显著加速 RL 收敛，这在交互成本高昂的工业场景中极具价值。
*   **实验论证严密**：在 3 个难度递增的真实工业级基准上，进行了全面的性能对比和深入的消融实验，结论非常可靠。

### 8. 不足与局限

*   **验证环境单一**：仅在电力网络控制一个领域进行了验证，框架在其他复杂工业决策场景（如交通、物流）中的通用性有待证明。
*   **对专家知识的依赖**：LLM 的“双角色”推理依赖精心设计的提示词和任务描述，这仍需要较强的领域知识，可能影响在新领域的快速部署。
*   **部分组件计算冗余**：LLM 的推理和模拟验证过程（如多轮推理）本身会产生计算成本，虽然在总时间上可接受，但可能成为进一步加速的瓶颈。
*   **模型底座评估不全面**：主要测试 Qwen2-7B 和 GPT-4，对于其他不同规模、不同架构的 LLM 作为基座模型的性能表现未做充分探讨。

（完）
