---
title: "MASTER: Enhancing Large Language Model via Multi-Agent Simulated Teaching"
title_zh: "MASTER: 通过多智能体模拟教学增强大型语言模型"
authors: "Liang Yue, Yihong Tang, Kehai Chen, Jie Liu, Min Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=5GaDcRVgBw"
tags: ["query:fla"]
score: 8.0
evidence: 多智能体模拟教学用于对话型代理训练
tldr: 针对高质量指令微调数据获取困难的问题，MASTER通过多智能体模拟三种教学场景，生成师生互动对话数据来增强原始数据集。利用该方法构建的BOOST-QA数据集在多个基准上提升了模型指令遵循能力，该数据增强方法为对话型代理的训练提供了低成本、高质量的解决方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1363, \"height\": 825, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1277, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 654, \"height\": 379, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 646, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1302, \"height\": 692, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1304, \"height\": 702, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1314, \"height\": 698, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-5gadcrvgbw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1301, \"height\": 701, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-5gadcrvgbw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 388, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5gadcrvgbw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1436, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5gadcrvgbw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1435, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-5gadcrvgbw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1441, \"height\": 396, \"label\": \"Table\"}]"
motivation: 高质量指令微调数据收集困难且成本高，限制了大型模型的微调效果。
method: 通过多智能体在不同认知水平下模拟教育场景，生成师生互动数据用于数据增强。
result: 基于增广数据集BOOST-QA的微调显著提升了模型的指令遵循和任务性能。
conclusion: MASTER为低成本的指令微调数据增强提供了有效途径，有助于对话型代理的训练。
---

## Abstract
Instruction fine-tuning is crucial in NLP tasks, enhancing pretrained models' instruction-following capabilities and task-specific performance. However, obtaining high-quality fine-tuning data for large models is challenging due to data collection difficulties and high production costs. To address this, we propose MASTER, a novel data augmentation method that enriches original data through interactions among multiple agents with varying cognitive levels. We simulate three pedagogically grounded teaching scenarios, leveraging multi-agent conversations to generate high-quality teacher-student interaction data. Utilizing MASTER, we construct BOOST-QA, a fine-tuning dataset augmented from existing datasets like Orca-Math-200k, ProcQA, and OpenHermes2.5. Experiments show that models fine-tuned with BOOST-QA perform excellently across multiple benchmarks, demonstrating strong multitask generalization. Notably, MASTER significantly improves models' reasoning abilities in complex tasks, providing valuable insights for future research.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究背景与动机**：指令微调（instruction fine-tuning）对于提升大型语言模型（LLM）的指令遵循能力和特定任务表现至关重要。然而，为大规模模型收集高质量微调数据十分困难，数据获取成本高昂，且人工标注难以扩展。
- **核心问题**：如何低成本和高效地扩充指令微调数据集，同时保证增强数据的质量与多样性，从而提升LLM的推理能力与多任务泛化性能。
- **整体含义**：论文提出一种基于多智能体模拟教学的框架MASTER，将现实教学法融入数据合成流程，以生成高价值的师生对话数据来增强原始问题-答案对，进而更有效地训练LLM。

## 2. 论文提出的方法论

- **核心思想**：通过具有不同认知水平的多个智能体（教师和学生）在模拟课堂中的互动，对已有的指令数据集进行结构化增强，从而为模型提供包含错误纠正、辩论、类比推理等环节的丰富训练信号。
- **整体框架**：
  - 设计多智能体课堂模拟器MACLASS，由教师智能体和多种学生智能体组成。
  - 基于给定的原始问答对，利用三个典型教学场景生成增强对话数据：
    1. **纠错场景（Error Correction）**：由小模型（0.5B）扮演学困生生成不完美答案，然后教师智能体（14B）指出错误并提供推理引导，最后学霸型学生（14B）重新给出正确解法。
    2. **辩论场景（Debate Interaction）**：构建三名学生智能体（S1、S2使用7B模型，S3使用14B模型），先让S1和S2轮流表达对问题的不同解法，再由S3进行总结和最终归纳。
    3. **类比推理场景（Analogical Reasoning）**：学生先完成首轮问题回答，系统再利用余弦相似度从剩余问题池中检索最相似的问题作为第二轮类比题目，学生再次作答，将两轮对话拼接为ShareGPT格式的训练样本。
- **关键技术细节**：
  - 每种场景均通过精心设计的提示词（prompt）和严格的话语轮次管理（speaking order）来控制交互流程，确保对话逻辑连贯且符合教学目的。
  - 纠错模块的梯度公式反映了加入结构化扰动后平滑损失面的效果：
    $$ \nabla_\theta L_{aug} (\theta) \approx \nabla_\theta L(\theta) + \gamma \cdot \mathbb{E}_{(x, \delta y)\sim \Delta D} [\nabla_\theta \ell(f_\theta(x), \delta y)] $$
  - 辩论模块的梯度展示了多轮辩论对优化轨迹的平滑作用：
    $$ \nabla_\theta L_{aug} = \mathbb{E}_{(x,y)\sim \mathcal{D}} \left[ \nabla_\theta \ell(f_\theta(x), y) + \lambda \sum_{k=1}^K \nabla_\theta \ell(f_\theta(x), y^*_k) \right] $$
  - 类比模块通过联合建模局部相似样本的分布来增强鲁棒性：
    $$ L_{mix} = -\log p(y_1, y_2 \mid x_1, x_2) $$
- **最终数据集**：利用上述三种场景对Orca-Math-200k、ProcQA和OpenHermes2.5的部分数据进行增强，得到BOOST-QA数据集（共约19K个样本）。

## 3. 实验设计

- **使用的数据集**：
  - 原始训练集：从Orca-Math-200k、ProcQA和OpenHermes2.5各抽取部分样本（数学10K、编程10K、通用9K）组成ori-data。
  - 增强训练集：用MASTER方法对ori-data进行同等数量的增强，得到BOOST-QA。
  - 基线方法使用的训练集：基于随机/拼写增强、TAGCOS数据选择、CoT Collection等构建的同等大小训练集。
- **基准与评测任务**：
  - 数学任务：MATH、MMLU-PRO-MATH、MATHQA、TAL-SCQ5K、MATH-MC、GSM8K-MC等。
  - 编程任务：HumanEval、MBPP、Pythonio-MC、CodeMMLU-CC/AF/CR。
  - 通用任务与选择题：MMLU、ARC、SCI-Q以及额外的多项选择基准。
  - 最常用的指标为准确率（数学/通用）和Pass@1（编程）。
- **对比的方法**：
  - **Ori（原始数据）**：不做增强，直接微调。
  - **RandomAug**：基于nlpaug的字符级随机增强。
  - **SpellingAug**：拼写层面的增强。
  - **TAGCOS**：基于梯度聚类选择的子集。
  - **CoT-fine（CoT Collection）**：使用思维链样本进行微调。
  - **MASTER系列**：单独使用某一种场景（ME、DB、EP）或两两组合、全部三种场景的消融对比。
- **基础模型**：LLaMA3-8B-base、Qwen2.5-7B-base、Mistral-7B-base，均用LoRA微调2个epoch（学习率1e-4）。

## 4. 资源与算力

- 论文中明确列出了实验所用的计算资源：
  - **GPU型号**：8张NVIDIA L20 GPU，每张48 GB显存。
  - **训练详情**：在本地Slurm集群上，每个模型用2张L20微调约12小时，总共有10个基础模型被训练，总计约5 GPU-天。
- 数据增强部分采用了Qwen2.5系列模型（0.5B、7B、14B等），未单独列出增强阶段的计算开销，但根据模型参数量可推测需要中等规模的推理资源。
- 总体验证了论文实验的可复现性，且提供了足够的计算资源信息。

## 5. 实验数量与充分性

- **总体实验量**：
  - 三个基础模型在多个基准上的完整评测（Table 1, Table 2）。
  - 与四种基线方法（RandomAug、SpellingAug、TAGCOS、CoT-fine）的对比（Table 3）。
  - 针对多项选择题的专门补充实验（Figure 2），覆盖8个复杂选择题测试集。
  - 消融实验（Table 4）：分析单独使用一种场景、两两组合以及全部三种场景的效果，对比共7种配置。
  - 附录中还对输出token长度分布和准确率关系进行了可视化分析（Figure 8-12）。
- **充分性与公平性**：
  - 实验设计较为全面，涵盖了主流的数据增强、数据选择、思维链微调等基线，且训练数据规模和基础模型选择具有代表性。
  - 消融实验清晰地揭示了三种教学场景的不可或缺性。
  - 不过，论文未进行多次随机种子重复实验，只给出单次运行结果，缺少误差棒或统计显著性检验，这是实验严谨性上的一个不足。
  - 整体而言，实验的广度和论证的合理性是充分的，能够支撑其主要结论。

## 6. 论文的主要结论与发现

- MASTER方法能够有效生成高质量、多回合的师生对话数据，显著提升LLM在多任务上的性能。
- 使用BOOST-QA训练的三个不同基座模型在数学、编程、常识推理、科学等基准上均一致优于仅用原始数据（ori-data）的微调，平均提升明显（如LLaMA3-8B的平均准确率从45.98%升至51.26%）。
- 在复杂多项选择题任务上，BOOST-QA带来的提升尤为突出，最大提升幅度达31.46%，且模型生成了更长的推理链，反映出更深层次的推理内化。
- 消融实验表明，单独或仅两两组合教学场景并不能有效提升性能，三种场景（纠错、辩论、类比）缺一不可，相互补充。
- 与随机增强、拼写增强、数据子集选择、CoT微调等方法相比，MASTER几乎在所有评测任务上均取得最佳结果，验证了其独特优势。

## 7. 优点

- **创新性强**：首次系统地将多智能体模拟教学引入指令数据增强，融合了教育心理学原理（纠错学习、辩论促进批判性思维、类比推理），方法设计有跨学科特色。
- **数据增广质量高**：生成的对话自然完整，既包含错误示范又包含纠正过程，且通过教师/学生角色的精心提示和对话流控，保证了数据逻辑性和教育价值。
- **效果显著且一致性好**：在多种基座模型和广泛的任务基准上均取得一致提升，证明了方法的鲁棒性和泛化能力。
- **实验设计详细**：消融实验、多项选择专项分析、token长度影响分析等有效揭示了性能提升的内在原因，强化了结论的说服力。
- **开源承诺**：提供了代码仓库链接，有利复现和未来研究的推进。

## 8. 不足与局限

- **实验规模与模型参数限制**：实验主要在7B-8B规模的基础模型上进行，未验证在更大规模的模型（如13B、70B）上的效果；对于已经具备强推理能力的指令微调模型可能提升有限。
- **缺乏统计显著性报告**：由于计算成本，未给出多次运行的均值与方差，结果的稳定性未被量化。
- **增强数据的潜在噪声**：尽管评估显示只有4.1%的样本存在推理错误，小模型产生的错误回答仍可能引入误导性信号，尤其在纠错场景中可能传播负面知识。
- **适用任务局限**：论文观察到MASTER在需要常识和广阔背景知识的任务上提升有限，表明该方法更擅长强化逻辑推理型任务，普适性仍有待拓展。
- **专门化训练缺失**：当前直接使用通用LLM扮演教师和学生角色，未对这些模型进行针对教学交互的微调，可能在交互的准确度和教育效果上存在优化空间。

（完）
