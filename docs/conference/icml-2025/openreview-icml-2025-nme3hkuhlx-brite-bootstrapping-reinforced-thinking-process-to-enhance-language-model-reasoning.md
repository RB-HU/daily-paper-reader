---
title: "BRiTE: Bootstrapping Reinforced Thinking Process to Enhance Language Model Reasoning"
title_zh: BRiTE：自举增强思维过程以提升语言模型推理
authors: "Han Zhong, Yutong Yin, Shenao Zhang, Xiaojun Xu, Yuanxin Liu, Yifei Zuo, Zhihan Liu, Boyi Liu, Sirui Zheng, Hongyi Guo, Liwei Wang, Mingyi Hong, Zhaoran Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NME3HKUHLX"
tags: ["query:fla"]
score: 9.0
evidence: 提出将增强思维过程融入LLM推理的后训练算法
tldr: BRiTE针对大语言模型推理过程不够可靠的问题，提出一个统一概率框架和自举增强思维过程算法，将潜在思维过程与评价信号纳入图模型。该算法在推理时自动生成高质量思维链，并将其整合到后训练中，理论上收敛速度为1/T。实验表明方法有效提升推理性能，为将自我改进推理融入LLM后训练提供了新途径，对构建自主智能体具有重要价值。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 532, \"height\": 523, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 862, \"height\": 302, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nme3hkuhlx/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 812, \"height\": 310, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1765, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 891, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-nme3hkuhlx/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1765, \"height\": 371, \"label\": \"Table\"}]"
motivation: LLM在复杂推理中难以生成可靠推理过程，且现有方法未能有效将推理融入后训练。
method: 通过概率图模型建模潜在思维与评价信号，用自举增强算法迭代生成并整合推理过程。
result: 理论收敛速率为1/T，算法可自动生成高质量推理并整合至后训练，提升模型推理表现。
conclusion: 提供了一种将增强推理过程融入LLM后训练的通用方法，可提升智能体的推理能力。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable capabilities in complex reasoning tasks, yet generating reliable reasoning processes remains a significant challenge. We present a unified probabilistic framework that formalizes LLM reasoning through a novel graphical model incorporating latent thinking processes and evaluation signals. Our framework addresses two critical questions: (1) how to generate high-quality reasoning processes during inference automatically, and (2) how to integrate these processes into post-training. We propose the \emph{Bootstrapping Reinforced Thinking Process} (BRiTE) algorithm and demonstrate its theoretical convergence at a rate of $1/T$, where $T$ is the number of iterations. The algorithm operates in two steps. First, it generates high-quality rationales by approximating the desired posterior distribution using a reinforcement learning approach with a novel reward shaping mechanism. Second, it fine-tunes the base LLM by maximizing the joint probability of rationale generation with respect to LLM parameters. Empirical evaluation on GSM8K and MATH benchmarks demonstrates that our approach consistently improves performance across different model sizes without requiring human-annotated thinking processes, outperforming standard chain-of-thought prompting while enhancing existing post-training methods.

---

## 论文详细总结（自动生成）

好的，这是根据您提供的论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义
*   **核心问题**：大型语言模型在执行复杂推理时，难以生成高质量且可靠的思维过程，这限制了其推理能力的进一步提升和有效后训练。
*   **研究动机**：
    *   现有的思维链等方法虽能引导模型推理，但生成的推理过程质量高度依赖于提示工程，且不一定逻辑完备。
    *   如何自动化地生成高质量的思维过程，并将其无缝整合到模型的后训练阶段中，以系统性提升模型推理能力，是一个关键挑战。
*   **整体含义**：本工作旨在提供一个统一的概率框架和实用算法，将“自动生成高质量思维过程”和“利用这些过程优化模型”这两个环节系统化地结合起来，为增强LLM的推理能力提供一种可证明、可实践的通用方法。

### 2. 论文提出的方法论
*   **核心思想**：提出一个名为“自举增强思维过程”的算法，其核心是一个两阶段迭代优化过程，类似于期望最大化算法，旨在最大化模型生成高质量推理和正确答案的联合概率。
*   **关键技术细节**：
    *   **概率图模型**：将LLM的推理过程形式化为一个包含四个变量的图模型：提示, 潜在思维过程, 最终回答，以及评价信号。该模型将复杂的生成分布拆解为可处理的部分。
    *   **算法流程：**
        1.  **第一阶段**：目标是近似生成高质量思维过程的后验分布。由于直接从后验分布采样是难解的，论文利用**强化学习**来训练一个策略模型，使其输出分布逼近该后验。关键在于通过**奖励塑形**技术，设计奖励函数（如生成正确最终答案的对数概率），引导强化学习算法学习到所需的分布。
        2.  **第二阶段**：利用第一阶段强化学习模型生成的高质量思维过程数据，以监督微调的方式优化基座LLM的参数，最大化其生成这些思维过程和相应答案的概率。
*   **理论保证**：论文证明了BRiTE算法以 O(1/T) 的速率收敛，其中 T 为迭代次数，为该类算法提供了理论收敛性保证。

### 3. 实验设计
*   **数据集与场景**：
    *   **数学推理**：GSM8K（小学数学应用题）和 MATH（竞赛级数学题）。
    *   **代码生成**：HumanEval 和 BigCodeBench。
*   **基准模型**：使用了多个开源指令微调模型，包括 Gemma-2-9b-it、Gemma-1.1-7B-it、Mistral-7B-Instruct-v0.2 和 Llama-3-8B-Instruct。
*   **对比方法**：
    *   **拒绝采样 + 微调**：生成多个候选推理链，仅保留答案正确者进行监督微调。
    *   **监督微调**：使用人类标注的思维过程数据进行微调。
    *   **迭代直接偏好优化**：在偏好数据上迭代进行DPO训练。

### 4. 资源与算力
*   **算力配置**：论文明确提到，在数学任务中，BRiTE算法使用 **4块 NVIDIA H100 GPU** 进行训练。
*   **训练时长**：文中未提及具体的总训练时长。

### 5. 实验数量与充分性
*   **实验数量**：
    *   **主要对比**：在4种不同基座模型上，对BRiTE、拒绝采样微调和基于人类标注的监督微调进行了性能对比。
    *   **RLHF阶段整合**：将BRiTE与迭代DPO结合，并与原始迭代DPO进行对比。
    *   **任务扩展**：在代码生成任务上验证了方法的有效性。
    *   **扩展性验证**：在更大规模数据集和更先进的Qwen2.5-7B模型上进行了验证，覆盖了6个更具挑战性的推理基准。
*   **充分性、客观性与公平性**：
    *   **充分性**：实验覆盖了多个主流模型、不同复杂度的任务（小学到竞赛级数学、代码）以及不同的后训练范式，比较全面。
    *   **客观性与公平性**：对比了包括拒绝采样和基于人类标注的SFT在内的多种相关基准方法，对比基线选择公平。所有方法均在同一基座上微调，可比较性强。实验结果表明BRiTE在多种情况下能稳定提升性能，证明了其有效性。

### 6. 论文的主要结论与发现
*   BRiTE算法通过RL生成的高质量推理过程，**显著优于**传统的拒绝采样微调算法。
*   BRiTE能够达到甚至**超越**使用人类标注思维过程进行监督微调的性能，提供了一种成本效益高且可能更优的替代方案。
*   BRiTE可以增强RLHF阶段的算法，与迭代DPO结合后性能优于标准迭代DPO，显示出其作为通用增强模块的潜力。
*   在数学推理和代码生成任务上均验证了其有效性，表明方法在不同领域具有泛化能力。

### 7. 优点
*   **理论扎实**：提出了统一的概率框架，并给出了算法的理论收敛性证明，为该方向研究提供了坚实的理论基础。
*   **方法创新**：核心创新在于利用RL（而非采样）并结合奖励塑形技术来解决难解的后验近似问题，将思维过程的生成与模型优化解耦并以EM方式协同。
*   **效果显著且通用**：在多个基座模型和任务上展现了持续且显著的改进，并能与现有后训练管道（SFT, RLHF）无缝集成，无需人工标注数据。

### 8. 不足与局限
*   **实验覆盖的领域有限**：主要验证集中在数学和代码推理任务上，对于其他类型的复杂推理任务（如常识推理、战略规划）的有效性尚待验证。
*   **算力与复杂性**：方法涉及两阶段训练（RL + SFT），相比单一的拒绝采样或SFT，训练流程更复杂，计算开销更大，可能对资源有限的场景构成挑战。
*   **对奖励函数的依赖**：第一阶段RL的性能高度依赖于奖励函数的设计，文中虽提出了奖励塑形方法，但在奖励信号稀疏或无明确正确答案验证器的开放式任务中，方法适用性可能受限。

（完）
