---
title: Distilling LLM Agent into Small Models with Retrieval and Code Tools
title_zh: 通过检索与代码工具将大语言模型智能体蒸馏到小型模型
authors: "Minki Kang, Jongwon Jeong, Seanie Lee, Jaewoong Cho, Sung Ju Hwang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VkicTqszOn"
tags: ["query:fla"]
score: 8.0
evidence: 提出通过蒸馏从LLM智能体到小型模型的自主智能体后训练框架。
tldr: 本文针对大语言模型智能体部署成本高的问题，提出智能体蒸馏框架，将教师智能体的完整任务解决行为（包括推理、检索和代码使用）迁移到小型语言模型中。通过改进的提示方法和工具集成，使小型模型也能有效执行复杂任务，为自主智能体的后训练和低成本部署提供了可行方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1194, \"height\": 504, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1432, \"height\": 844, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1445, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1429, \"height\": 883, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 540, \"height\": 457, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 848, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 916, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkictqszon/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 493, \"height\": 345, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1413, \"height\": 404, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1444, \"height\": 1446, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1419, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1220, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1192, \"height\": 275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 375, \"height\": 204, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1430, \"height\": 151, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 418, \"height\": 119, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1407, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1132, \"height\": 321, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1412, \"height\": 1926, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkictqszon/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1408, \"height\": 2212, \"label\": \"Table\"}]"
motivation: 大型语言模型智能体计算成本高，传统蒸馏仅迁移推理链，在需要外部知识或精确计算时仍存在幻觉。
method: 提出智能体蒸馏（Agent Distillation），通过提示和工具使用将LLM智能体的完整行为迁移到小型模型。
result: 在多个复杂任务上，蒸馏后的小型模型性能接近教师模型，且显著降低推理成本。
conclusion: 智能体蒸馏实现了高效且经济的自主智能体部署，为实际应用铺平道路。
---

## Abstract
Large language models (LLMs) excel at complex reasoning tasks but remain computationally expensive, limiting their practical deployment.
To address this, recent works have focused on distilling reasoning capabilities into smaller language models (sLMs) using chain-of-thought (CoT) traces from teacher LLMs.
However, this approach struggles in scenarios requiring rare factual knowledge or precise computation, where sLMs often hallucinate due to limited capability.
In this work, we propose Agent Distillation, a framework for transferring not only reasoning capability but full task-solving behavior from LLM-based agents into sLMs with retrieval and code tools. 
We improve agent distillation along two complementary axes: (1) we introduce a prompting method called first-thought prefix to enhance the quality of teacher-generated trajectories; 
and (2) we propose a self-consistent action generation for improving test-time robustness of small agents.
We evaluate our method on eight reasoning tasks across factual and mathematical domains, covering both in-domain and out-of-domain generalization.
Our results show that sLMs as small as 0.5B, 1.5B, 3B parameters can achieve performance competitive with next-tier larger 1.5B, 3B, 7B models fine-tuned using CoT distillation, demonstrating the potential of agent distillation for building practical, tool-using small agents.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将使用中文、以 Markdown 形式，对提供的论文《Distilling LLM Agent into Small Models with Retrieval and Code Tools》进行结构化、深入、客观的总结。

### 1. 核心问题与整体含义

*   **研究背景与动机**
    *   大型语言模型虽在复杂推理任务上表现优异，但其高昂的推理成本严重限制了实际部署。
    *   现有工作尝试通过思维链蒸馏（CoT Distillation）将大型模型的推理能力迁移到小型语言模型（sLM），以降低部署成本。
    *   **核心问题**：传统的 CoT 蒸馏方法在需要稀有事实知识或精确计算的场景下表现不佳，小型模型由于自身能力限制，容易产生“幻觉”（hallucination）。
    *   **整体含义**：本文旨在超越静态的知识蒸馏，提出“智能体蒸馏”（Agent Distillation）框架，不仅迁移推理能力，更将具备了检索和代码工具使用能力的LLM智能体的**完整任务解决行为**迁移到小型模型中，从而构建出更实用、鲁棒、低成本的小型工具使用智能体。

### 2. 方法论

*   **核心思想**
    *   **智能体蒸馏**：通过模仿学习，将教师 LLM 智能体（如基于 ReAct 或 CodeAct 的智能体）在多轮交互中产生的“思考-行动-观察”轨迹，作为训练数据蒸馏给小型学生模型。这使得小模型学会**如何**通过推理、使用工具（检索信息、执行代码）和观察环境反馈来解决问题，而非死记硬背知识和计算过程。

*   **关键技术细节与算法流程**
    1.  **智能体轨迹生成与蒸馏**：
        *   给定输入 `x`，教师模型 `pT` 会根据智能体指令提示 `I_agent` 生成一条交互轨迹 `τ = ((r1, a1, o1), ..., (rL, aL, oL))`，其中 `r` 是思考，`a` 是行动，`o` 是环境反馈的观察。
        *   学生模型 `pS` 通过最小化以下损失函数进行微调，学习生成思考与行动序列，但损失计算中不包括环境反馈的观察：
            `min_θ -E_{x, τ}[∑_{t=1}^{Lτ} log pS(r_t, a_t | x, τ_{<t}; θ)]`

    2.  **提升教师轨迹质量：首思考前缀
        *   **问题**：指令微调后的LLM在扮演智能体时，其性能可能不如使用CoT提示时的表现，出现“分布漂移”（distributional drift），且初始推理步骤对最终结论至关重要。
        *   **方法**：在生成智能体轨迹前，先使用 CoT 提示让教师模型生成第一个推理步骤 `y1`，然后将这个 `y1` 作为前缀（prefix），强制引导教师智能体生成接下来的“思考-行动-观察”序列，从而提升轨迹的整体质量和正确性。此方法仅用于教师轨迹生成阶段。

    3.  **提升学生测试时鲁棒性：自洽行动生成**
        *   **问题**：小型模型在推理时容易生成无效的代码行动（例如，解析或执行错误）。
        *   **方法**：在每个行动步骤，学生模型通过高温度核采样生成 `N` 个候选的“思考-行动”序列。然后，利用一个代码解释器执行这些行动，过滤掉导致错误的序列。对剩下的有效行动，通过对其执行结果进行多数投票（majority voting），选出结果最一致的作为最终行动，以此提高行动的稳健性和正确性。

### 3. 实验设计

*   **任务与数据集**：
    *   **事实推理（Factual Reasoning）**
        *   **域内（In-domain）**：HotpotQA (2跳问答)。
        *   **域外（Out-of-domain）**：Bamboogle (2跳问答)、MuSiQue (3跳问答)、2WikiMultiHopQA (2跳问答)。
    *   **数学推理（Math Reasoning）**
        *   **域内（In-domain）**：MATH (大学水平数学题)。
        *   **域外（Out-of-domain）**：GSM-Hard (大数算术)、AIME (奥林匹克水平)、OlymMATH (奥林匹克水平)。

*   **对比方法**
    *   **CoT Prompting**：教师或学生模型直接使用思维链提示进行推理。
    *   **CoT Distillation**：学生模型在教师模型生成的 CoT 推理轨迹上进行蒸馏。
    *   **CoT Distillation + RAG**：在 CoT Distillation 的基础上，在蒸馏和推理阶段都加入检索增强生成，作为外部知识辅助的公平对比基线。
    *   **Agent Prompting**：学生模型直接使用智能体提示进行交互，不经过蒸馏。
    *   **Agent Distillation (本文方法)**及改进版本：包含基础版、仅加首思考前缀版（+ftp）、仅加自洽行动生成版（+sag）、以及两者都加的完整版（+ftp+sag）。

*   **模型**
    *   **教师模型**：Qwen2.5-32B-Instruct。
    *   **学生模型**：Qwen2.5-Instruct 系列的 0.5B、1.5B、3B、7B 参数模型。

### 4. 资源与算力

*   论文在附录部分提供了详细的训练和推理细节。
*   **算力资源**：所有实验均使用**四块 NVIDIA A100 80GB GPU** 完成。
*   **训练细节**：所有模型均使用参数高效微调方法 LoRA（秩设为 64）进行 2 个 epoch 的微调，批大小为 8，学习率为 `2 × 10^{-4}`。训练集大小约为 3000条，每条对应1条教师轨迹（约2000条有效数据），整体训练开销相对较小。

### 5. 实验数量与充分性

*   **实验数量**：实验设计非常详尽，进行了多维度的大量实验，具体包括：
    *   **主要结果**：在 8 个数据集、4 种学生模型规模上，对比了 7 种以上的方法/组合。
    *   **泛化性分析**：除了主实验使用的 Qwen2.5 系列，还在 Llama-3.2-1B-Instruct 和 Phi-4-mini-instruct 上验证了方法的有效性。
    *   **模型类型分析**：对比了使用通用模型与代码特化模型（Qwen2.5-Coder）作为教师/学生对结果的影响。
    *   **组件分析**：
        *   深入分析了“首思考前缀”在数学问题不同难度等级和类别上的表现。
        *   分析了“自洽行动生成”对降低代码错误率的作用。
        *   对比了智能体“自洽行动生成”与 CoT 的“自洽性”在相同计算预算下的性能。
        *   探究了温度参数对“自洽行动生成”的影响。
        *   分析了模型规模与检索工具调用次数的关系，以及ftp对此的影响。
    *   **效率分析**：对比了 CoT 模型与智能体模型生成的令牌数。
    *   **训练方式分析**：对比了 LoRA 微调与全参数微调的效果。
*   **充分性与客观性**：实验覆盖全面，从多任务、多领域、多模型尺寸、多方法对比到详细的消融和机制分析，非常充分地验证了核心主张。与 CoT + RAG 的对比体现了公平性，在不同模型家族上的实验表明了方法的普适性，实验设计客观、扎实。

### 6. 主要结论与发现

*   **智能体蒸馏效果显著**：在绝大多数任务上，特别是在域外泛化任务上，Agent Distillation 的性能一致优于 CoT 蒸馏和带 RAG 的 CoT 蒸馏。
*   **性能跨越式提升**：蒸馏后的小型智能体模型（如 0.5B、1.5B、3B）可以达到甚至超越比它们大一到两个数量级（如 1.5B、3B、7B）的 CoT 蒸馏模型的性能。例如，3B 的智能体平均性能（36.60）超过了 7B的 CoT 蒸馏模型（33.54）。
*   **方法组件的有效性**：
    *   “首思考前缀”通过改善教师轨迹，提升了学生在复杂推理问题（如数学等级4和5，AIME）上的表现。
    *   “自洽行动生成”能显著降低小模型生成无效代码的比率，提升行动的鲁棒性。
    *   这两种技术相结合（+ftp+sag）在大多情况下实现了最佳性能。

### 7. 优点

*   **范式创新**：从“蒸馏推理内容”到“蒸馏任务解决行为”，将工具使用能力赋予了小型语言模型，这是一个重要的思路转变。
*   **方法简洁有效**：提出的“首思考前缀”和“自洽行动生成”方法简单、易于实现，且无需对模型架构做任何改动，却能显著提升蒸馏效果和推理鲁棒性。
*   **系统性的实验验证**：实验设计严谨、对比基线全面（特别是与 RAG 集成 CoT 的对比）、分析维度多，结论具有很强的说服力。
*   **实践意义强**：成功证明了在极小的模型（0.5B）上也能实现有效的智能体行为，为在资源受限设备上部署强大的 AI 智能体铺平了道路。

### 8. 不足与局限

*   **模型家族单一**：主要实验集中在 Qwen2.5 系列模型，虽然在 Llama-3.2 和 Phi-4-mini 上做了验证，但仍需在更多类型的模型（如 Gemma）上进行测试以确保通用性。
*   **教师模型限制**：仅使用了 Qwen2.5-32B 作为教师，未探索使用更强大或闭源模型（如 GPT-4）是否能为学生带来更大提升。
*   **轨迹采样分析缺失**：未探讨教师模型对单个问题生成多个轨迹进行蒸馏，是否会进一步提升学生模型性能，这是一个已知的影响 CoT 蒸馏效果的重要因素。
*   **方法存在退化风险**：“首思考前缀”在某些情况下（特别是事实推理）可能减少模型使用工具的次数，转而依赖内部知识，反而增加了产生幻觉的风险。
*   **数学能力局限**：智能体蒸馏在 MATH（大学数学）这类基准上表现不如 CoT 蒸馏，尤其在需要解析性思维（而非单纯计算）的问题上存在短板。
*   **应用领域有限**：目前仅聚焦于使用检索和代码执行工具的智能体，未涉及更广泛的智能体应用场景，如具身智能体或网络智能体。

(完)

（上文总结已完整结束，无需补全。）  
（完）
