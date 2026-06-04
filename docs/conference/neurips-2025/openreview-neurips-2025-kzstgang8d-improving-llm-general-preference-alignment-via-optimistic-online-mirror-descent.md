---
title: Improving LLM General Preference Alignment via Optimistic Online Mirror Descent
title_zh: 通过乐观在线镜像下降改进大语言模型通用偏好对齐
authors: "Yuheng Zhang, Dian Yu, Tao Ge, Linfeng Song, Zhichen Zeng, Haitao Mi, Nan Jiang, Dong Yu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=kZstGANG8D"
tags: ["query:fla"]
score: 4.0
evidence: 提出基于乐观在线镜像下降的通用偏好对齐方法，可用于智能体后训练。
tldr: 本文突破 Bradley-Terry 模型假设，将通用偏好下的 LLM 对齐建模为二人博弈，并集成乐观在线镜像下降来逼近纳什策略。理论证明了该方法在迭代中的收敛性，实验验证了其对人类偏好的对齐效果。该方法为复杂偏好场景下的智能体后训练提供了更灵活稳健的对齐工具，可应用于金融等需要处理多样化偏好的代理系统。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-kzstgang8d/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 860, \"height\": 551, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-kzstgang8d/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1341, \"height\": 817, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kzstgang8d/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1590, \"height\": 295, \"label\": \"Table\"}]"
motivation: 现有对齐方法多依赖 Bradley-Terry 模型假设，难以建模人类复杂偏好。
method: 放弃 BT 假设，将 LLM 对齐构建为二人博弈，并采用乐观在线镜像下降算法逼近纳什策略。
result: 理论证明收敛性，实验表明方法能有效对齐复杂人类偏好。
conclusion: 提供了一种通用且稳健的对齐框架，适用于多维偏好下的智能体后训练。
---

## Abstract
Reinforcement learning from human feedback (RLHF) has demonstrated remarkable effectiveness in aligning large language models (LLMs) with human preferences. Many existing alignment approaches rely on the Bradley-Terry (BT) model assumption, which assumes the existence of a ground-truth reward for each prompt-response pair. However, this assumption can be overly restrictive when modeling complex human preferences. In this paper, we drop the BT model assumption and study LLM alignment under general preferences, formulated as a two-player game. Drawing on theoretical insights from learning in games, we integrate optimistic online mirror descent into our alignment framework to approximate the Nash policy. Theoretically, we demonstrate that our approach achieves an $\mathcal{O}(T^{-1})$ bound on the duality gap, improving upon the previous $\mathcal{O}(T^{-1/2})$ result. Meanwhile, it enjoys a linear convergence rate in the last iterate, a property not achieved by previous methods. More importantly, we implement our method and show through experiments that it outperforms state-of-the-art RLHF algorithms across multiple representative benchmarks.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将以 Markdown 格式，对提供的论文《Improving LLM General Preference Alignment via Optimistic Online Mirror Descent》进行结构化、深入且客观的总结。

### 1. 论文的核心问题与整体含义

*   **研究动机**：
    *   当前主流的大语言模型对齐方法（如 RLHF 和 DPO）大多基于 **Bradley-Terry (BT) 模型** 假设，该假设认为可以用一个标量奖励函数 $R^*(x, y)$ 来解释人类偏好。这隐含了偏好的**传递性**。
    *   然而，人类偏好（尤其在群体层面聚合时）常常是**非传递性**的（例如，A 优于 B，B 优于 C，但 C 可能优于 A），BT 模型对此类复杂偏好建模能力不足，存在**过度限制**的问题。实证研究表明，直接预测偏好的模型表现可优于 BT 奖励模型，进一步印证了这一局限。

*   **核心问题**：
    *   如何在不依赖 BT 模型假设的情况下，让 LLM 对齐到**通用的人类偏好**。

*   **整体含义（解决方案思路）**：
    *   放弃 BT 模型假设，将对齐问题重新定义为**二人零和博弈**。博弈双方（两个 LLM 策略）的目标是最大化/最小化自身的胜率。
    *   学习目标是找到此博弈的**纳什均衡策略** ($\pi^*$)。理论上，纳什策略能保证面对任何其他策略时，其胜率不低于 50%。
    *   本文旨在提出一种新的在线算法，利用博弈论中的自博弈和乐观学习思想，更快速、更稳定地逼近纳什策略，从而实现更优的通用偏好对齐。

### 2. 论文提出的方法论：ONPO

*   **核心思想**：
    *   论文提出了一种名为 **乐观纳什策略优化 (Optimistic Nash Policy Optimization, ONPO)** 的算法。它通过**自博弈**机制，并集成**乐观在线镜像下降 (Optimistic OMD)** 来更新策略，以更有效地逼近通用偏好博弈的纳什均衡。

*   **关键技术细节与算法流程**：
    *   **博弈建模**：对齐目标被定义为策略 $\pi_1$ 和 $\pi_2$ 之间的期望胜率 $J(\pi_1, \pi_2) = \mathbb{E}_{x, y_1\sim\pi_1, y_2\sim\pi_2}[P(y_1 \succ y_2 | x)]$。学习目标是找到一个 $ϵ$-近似纳什策略 $\pi$，使其对偶间隙 $DualGap(\pi) \le \epsilon$。
    *   **从 OMD 到乐观 OMD 的更新策略**：
        *   **标准 OMD 更新**：$\pi_{t+1} = \arg\max_{\pi} \langle\pi, r_t\rangle - \frac{1}{\eta} \text{KL}(\pi \| \pi_t)$，其中 $r_t(y) = P(y \succ \pi_t)$ 是当前策略的胜率。该方法仅能达到 $\mathcal{O}(T^{-1/2})$ 的收敛速度。
        *   **乐观 OMD 更新 (ONPO核心)**：引入一个**奖励预测器** $m_t$，采用两步更新。本文利用前一轮的奖励作为预测器，即 $m_t = r_{t-1}$。
            1.  **预测步骤**：$\pi_t = \arg\max_{\pi} \langle\pi, m_t\rangle - \frac{1}{\eta} \text{KL}(\pi \| \pi'_t)$。利用预测的奖励生成当前策略。
            2.  **校正步骤**：$\pi'_{t+1} = \arg\max_{\pi} \langle\pi, r_t\rangle - \frac{1}{\eta} \text{KL}(\pi \| \pi'_t)$。在观察真实奖励 $r_t$ 后，更新辅助策略。
    *   **理论优势**：
        *   **更快的收敛速率**：ONPO 将平均策略的对偶间隙上界从 $\mathcal{O}(T^{-1/2})$ 提升至 $\mathcal{O}(T^{-1})$。
        *   **末次迭代线性收敛**：ONPO 保证了最后一次迭代策略 $\pi_T$ 能线性收敛到纳什策略 $\pi^*$，即 $\text{KL}(\pi^* \| \pi_t) \le \mathcal{O}(C^{-t})$，这是之前方法未实现的优良特性。
    *   **实际实现技巧**：
        *   为规避直接计算期望胜率 $P(y \succ \pi_t)$ 的困难，ONPO 将其转化为一个可直接在偏好数据集上优化的**损失函数**。该损失函数仅需成对的偏好反馈，而非绝对分数。
        *   损失函数形式为：$\min_{\pi} \mathbb{E}_{y_w, y_l \sim \mathcal{D}_t} [ (g_t(\pi, y_w, y_l) - \frac{\eta}{2})^2 ]$，其中 $g_t$ 是策略和辅助策略的对数概率比值差。
        *   算法流程：迭代地进行“用当前策略 $\pi_t$ 采样数据 $\to$ 用偏好预言机标注构建数据集 $\mathcal{D}_t \to$ 通过最小化上述损失优化 $\pi_{t+1}$ 和 $\pi'_{t+1} \to$ 更新策略”的循环。

### 3. 实验设计

*   **基座模型**：
    *   **Llama-3-SFT**：基于 Llama-3-8B 的监督微调模型。
    *   **Mistral-Instruct-v0.3**：基于 Mistral-7B 的指令微调模型。
*   **偏好预言机**：一个单独的、性能优于 BT 奖励模型的 8B 参数配对偏好模型，可根据响应 $y_1$ 和 $y_2$ 输出偏好标签。
*   **评估基准**：
    *   **综合对齐能力**：**AlpacaEval 2.0** (LC胜率), **Arena-Hard** (胜率), **MT-Bench** (GPT-4 打分)。
    *   **内在能力（学术基准）**：**GPQA, Hellaswag, MMLU-Pro, Winogrande, TruthfulQA, GSM8K**，用于检验“对齐税”（即对齐过程是否损害了预训练获得的能力）。
*   **对比方法**：
    *   **迭代DPO**：迭代版的直接偏好优化方法。
    *   **SPPO** (Self-Play Preference Optimization)：一种自博弈对齐算法。
    *   **INPO** (Iterative Nash Policy Optimization)：采用标准 OMD 更新的自博弈算法，是 ONPO 的直接前身和主要对比对象。
    *   同时对比了 Llama-3-70B-it、GPT-4 等参数量更大或闭源的高性能模型。

### 4. 资源与算力

*   **计算资源**：所有实验均在 **8 块 40G 显存的 A100 GPU** 上完成。
*   **训练配置**：采用了余弦学习率调度器、预热比 0.03、全局批大小 128。1/$\eta$ 在 `[0.1, 0.05, 0.02, 0.01, 0.005]` 中通过网格搜索设定为 0.01。Mistral 和 Llama 模型的训练迭代次数和每轮的 epoch 数有细微差别。论文未提及单次或总体的具体训练时长。

### 5. 实验数量与充分性

*   **实验组数**：
    *   在 **2 个不同基座模型** 上进行了主要实验。
    *   在 **3 个主流对齐基准** 和 **6 个学术能力基准** 上进行了评估。
    *   与 **3 个直接的在线/迭代基线方法** 以及多个大规模模型进行了性能对比。
    *   针对关键超参数 $\eta$，在 AlpacaEval 2.0 和 Arena-Hard 上进行了 **敏感性分析**。
*   **充分性与公平性**：
    *   实验设计**较为充分**。覆盖的基座模型、评估基准和对比方法多维度且具代表性，能够有效验证方法的有效性与泛化性。
    *   对比**相对公平**。所有在线对齐方法（包括 ONPO 和基线）均使用相同的迭代次数和提示词集进行训练，保证了模型性能和计算开销对比的公平性。

### 6. 论文的主要结论与发现

*   ONPO 在理论和实践上均优于基于标准 OMD 的 INPO 等基线方法。
*   **理论结论**：ONPO 实现了更快的 $\mathcal{O}(T^{-1})$ 对偶间隙收敛速率和末次迭代的线性收敛，这些理论优势是其他通用偏好对齐方法所不具备的。
*   **实验结论**：
    *   ONPO 在 **AlpacaEval 2.0、Arena-Hard 和 MT-Bench** 上**一致地**优于或持平所有在线对齐基线方法。尤其在 AlpacaEval 2.0 上，相对最强基线的提升高达 9.9%（Llama）和 21.2%（Mistral），性能甚至超越了参数量大一个数量级的模型（如 Llama-3-70B-it）。
    *   在学术基准测试中，ONPO 的得分与基座模型及基线持平甚至略有提高，证明该方法**没有引入明显的“对齐税”**，能很好地保留模型的推理、知识等内在能力。
    *   **超参数鲁棒性**：ONPO 对学习率 $\eta$ 不敏感，易于调优。

### 7. 优点

*   **方法论创新与理论深度**：将乐观 OMD 创造性地引入 LLM 自博弈对齐框架，理论分析扎实，收敛性证明清晰，提供了比前序工作更强的理论保障。
*   **问题建模更符合现实**：放弃 BT 模型假设，转向通用偏好和纳什均衡，使对齐目标与复杂、可能非传递的人类偏好更匹配。
*   **实现巧妙且高效**：算法实现将难估计的期望胜率巧妙地转化为简单、稳定的损失函数，无需复杂的强化学习（如 PPO）或策略梯度，计算轻量。
*   **实验扎实且效果显著**：在主流基准上表现突出，对比实验全面、公平，有力地支撑了理论和方法的优越性。

### 8. 不足与局限

*   **实验设置局限（单轮）**：实验仅关注单轮对话场景，未能展现 ONPO 在更复杂的多轮交互（如聊天、工具使用）中的效果。作者在附录也提出了多轮扩展的理论框架，但承认其高效实现存在挑战。
*   **计算资源门槛**：尽管算法本身是轻量级的，但实验依然基于 8 块 A100 GPU，对于小型研究团队或个人开发者来说，仍有一定门槛。
*   **偏好预言机的依赖性**：与所有在线对齐方法一样，ONPO 的性能依赖于一个高质量的偏好预言机（奖励/偏好模型）。文中仅使用了一个基于 Llama-3-8B 的偏好模型，未讨论该模型本身的质量、偏差或更换预言机时 ONPO 性能的稳健性。
*   **收敛性证明的假设**：定理 3 的末次迭代线性收敛基于“纳什策略唯一”的假设，该假设在真实的高维 LLM 策略空间中是否严格成立是未知的，可能影响该理论在实际应用中的严格适用性。
*   **缺乏人类评估**：所有评估完全基于 GPT-4 等自动化评价，未进行真实的人类评估来最终确认对齐效果。

（完）
