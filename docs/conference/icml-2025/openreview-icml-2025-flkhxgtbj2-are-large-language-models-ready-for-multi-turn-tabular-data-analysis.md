---
title: Are Large Language Models Ready for Multi-Turn Tabular Data Analysis?
title_zh: 大语言模型准备好进行多轮表格数据分析了吗？
authors: "Jinyang Li, Nan Huo, Yan Gao, Jiayi Shi, Yingxiu Zhao, Ge Qu, Bowen Qin, Yurong Wu, Xiaodong Li, Chenhao Ma, Jian-Guang Lou, Reynold Cheng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=flKhxGTBj2"
tags: ["query:fla"]
score: 7.0
evidence: CoTA基准评估大模型在多轮对话表格数据分析中的表现，适用于金融对话任务
tldr: 对话式表格数据分析对于金融决策支持至关重要，但缺乏真实对话日志制约了评估。本文提出CoTA，一个包含1013段对话、覆盖四种场景的多轮对话基准，通过经济型多智能体环境构建。该基准能有效评估大模型在表格分析中的对话能力，为训练金融多轮对话智能体提供支持。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1737, \"height\": 565, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1589, \"height\": 727, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 865, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 839, \"height\": 389, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 814, \"height\": 484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 687, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1580, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 799, \"height\": 802, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1176, \"height\": 698, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1412, \"height\": 1049, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1760, \"height\": 1303, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 779, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 813, \"height\": 542, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 109, \"height\": 110, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 108, \"height\": 110, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 99, \"height\": 106, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1501, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-flkhxgtbj2/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 64, \"height\": 73, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 693, \"height\": 645, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1773, \"height\": 466, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1769, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1555, \"height\": 680, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1483, \"height\": 774, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1771, \"height\": 390, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1480, \"height\": 154, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1505, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1280, \"height\": 236, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1251, \"height\": 159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-flkhxgtbj2/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1262, \"height\": 160, \"label\": \"Table\"}]"
motivation: 对话式表格数据分析的评估缺乏真实对话日志，构建成本高。
method: 提出CoTA基准，利用多智能体环境经济高效地生成多轮对话。
result: CoTA包含1013段对话，覆盖多种场景，有效评估大模型对话能力。
conclusion: 该基准为金融等领域的多轮对话智能体训练提供了重要评估工具。
---

## Abstract
Conversational Tabular Data Analysis, a collaboration between humans and machines, enables real-time data exploration for informed decision-making. The challenges and costs of collecting realistic conversational logs for tabular data analysis hinder comprehensive quantitative evaluation of Large Language Models (LLMs) in this task. To mitigate this issue, we introduce **CoTA**, a new benchmark to evaluate LLMs on conversational tabular data analysis. **CoTA** contains 1013 conversations, covering 4 practical scenarios: Normal, Action, Private, and Private Action. Notably, **CoTA** is constructed by an economical multi-agent environment, Decision Company, with few human efforts. This environment ensures efficiency and scalability of generating new conversational data. Our comprehensive study, conducted by data analysis experts, demonstrates that Decision Company is capable of producing diverse and high-quality data, laying the groundwork for efficient data annotation. We evaluate popular and advanced LLMs in **CoTA**, which highlights the challenges of conversational tabular data analysis. Furthermore, we propose Adaptive Conversation Reflection (ACR), a self-generated reflection strategy that guides LLMs to learn from successful histories. Experiments demonstrate that ACR can evolve LLMs into effective conversational data analysis agents, achieving a relative performance improvement of up to 35.14%.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将使用中文，以Markdown格式，对提供的论文《Are Large Language Models Ready for Multi-Turn Tabular Data Analysis?》进行结构化、深入、客观的总结。

### 1. 论文核心问题与整体含义

*   **研究动机**：表格数据分析是商业、金融、医疗等领域决策的核心。现实中的数据分析往往是探索性、多轮的“对话式”过程，用户需要根据中间结果不断调整分析策略和提问方式。
*   **核心问题**：当前缺乏一个能有效评估大语言模型（LLM）在这种“多轮对话式表格数据分析”场景下真实能力的基准测试（Benchmark）。
*   **瓶颈与挑战**：
    *   **数据稀缺**：收集真实的人机对话日志成本高昂，且涉及隐私和产权问题。
    *   **构建困难**：传统众包方式难以生成高质量、复杂且符合数据科学逻辑的多轮对话，过程耗时且昂贵。
*   **整体含义**：本文旨在通过提出一个新的基准测试**CoTA (COnversational Tabular data Analysis)**，系统性地评估和揭示当前主流LLM在真实多轮表格分析场景中的能力短板，并通过提出的改进策略推动该领域的发展。

### 2. 论文提出的方法论

论文提出了一套完整的方法论，包括基准构建、评估和模型能力提升三个层面。

#### 2.1 基准构建：多智能体环境 Decision Company
*   **核心思想**：利用一个名为 **Decision Company** 的多智能体（Multi-Agent）模拟沙盒，以经济高效的方式自动生成大量高质量的对话数据，并辅以少量专家校验。
*   **关键技术流程**：
    1.  **数据预处理**：获取Kaggle等平台的公开表格数据，由**管理员智能体**生成列含义说明。
    2.  **客户画像生成**：由管理员智能体为表格数据创建多样化的虚拟客户画像（姓名、职位、背景等）。
    3.  **模拟分析场景**：管理员智能体“采访”**客户智能体**，生成3个候选分析场景。人类专家从中选择一个最优场景以保证多样性和数据可得性。
    4.  **讨论分析计划**：**数据科学家智能体**与客户智能体进行对话，将用户模糊需求细化为一系列包含具体条件和预期结果类型（如DataFrame、图表等）的数据分析问题。
    5.  **对话日志生成**：**AI聊天机器人智能体**根据分析计划，与数据科学家智能体进行多轮交互，通过生成代码并分析结果来完成问答。
    6.  **人工-沙盒协同标注**：人类专家负责代码执行与验证、注入有意义的交互行为（Actions）、并将自由文本分析结果转换为多项选择题，以供客观评估。
*   **操作类型**：定义了6种常见的对话行为，如 `Update_Code` (修改代码)、`Fast_Fail` (快速失败，指出问题无法回答)、`Clarification` (请求澄清) 和 `Best_Guess` (做出最优猜测) 等。

#### 2.2 模型能力提升：自适应对话反思 (ACR)
*   **核心思想**：让LLM智能体从“成功的”历史交互记录中，通过自我生成的方式学习其背后的分析逻辑，从而提升在多轮对话中的表现。
*   **算法流程（两阶段）**：
    1.  **伪代码逻辑生成**：给定上一轮成功的交互 `(用户问题, 智能体回答)`，提示LLM反思并生成其底层逻辑 `m`，该逻辑以“伪代码”的形式呈现，作为自然语言问题和最终代码之间的桥梁。
    2.  **重组单样本推理**：将上一轮的 `(用户问题, 伪代码逻辑, 智能体回答)` 重组为一个单样本示例 `p`。在当前轮次，模型首先基于示例 `p` 和当前问题生成逻辑 `m_t`，然后再基于 `(p, 当前问题, m_t)` 生成最终答案。

#### 2.3 评估指标
*   **Acc (Accuracy)**：生成代码的执行结果或选择题答案与标准答案的匹配率。
*   **AccR (Accuracy with Recall)**：在私有库模式下，在准确性的基础上，进一步考量生成代码对用户私有库函数调用的“召回率”，以确保模型不仅猜对答案，而且正确使用了指定工具。

### 3. 实验设计

#### 3.1 数据集与场景
*   **核心基准**：**CoTA** 数据集，包含 **1013** 段对话，涵盖 **1162** 个用户意图，平均对话轮次为 **14.15** 轮。
*   **测试场景**：涵盖四个逐渐复杂的对话模式：
    *   **Normal**：所有问题明确，仅需依据表格内容和历史记录回答。
    *   **Action**：需要处理不明确的问题，主动做出假设、澄清或快速失败。
    *   **Private**：需要使用用户提供的私有Python包来编写代码。
    *   **Private Action**：融合了Private和Action两种模式的挑战。
*   **表格数据域**：覆盖5个常见领域，包括 **ATP网球、信用卡、快餐、笔记本电脑价格、墨尔本房产**，延伸出18个分析主题。

#### 3.2 对比方法与模型
*   **对比方法（基于最佳模型进行设置）**：
    *   **Model-Base**：纯LLM，无推理和工具调用。
    *   **Agent**：具备代码执行器等工具，并使用思维链（COT）/ CodeAct推理。
    *   **Agent-R**：在Agent的基础上加上文本反思。
    *   **Multi-Agent**：多个专业智能体（控制器、工具、代码、决策等）协同合作。
    *   **Inter-Agent**：本文提出的使用 **ACR策略** 的智能体。
*   **评估模型**：包括 **Mistral (7B, 8x7B)**, **CodeLlama (34B)**, **Llama (3.3-70B)**, **GPT (4-Turbo, 4-32k)**, **Claude (3-Opus, 3.5-Sonnet)** 等多个家族的主流LLM。

### 4. 资源与算力

*   **算力说明**：论文未明确提及用于**模型训练或推理**的GPU型号、数量及训练时长。所有进行的实验均为对现有API或开源模型进行**零样本（zero-shot）或少样本（few-shot）提示词（prompting）推理评估**，不涉及模型微调或预训练。
*   **标注成本**：论文详细列出了基准构建的成本。在保护隐私的受控界面下，标注员总投入**3,677分钟**，LLM调用成本为 **$71.39**，专业数据分析师的人工成本为 **$1,392.66**（按标准费率计算），构建总成本为 **$1,464.03**。平均每个CoTA实例成本约为 **$1.45**，其性价比显著高于 BIRD-SQL ($6.13) 和 TableBench ($6.00) 等同类复杂基准。

### 5. 实验数量与充分性

*   **实验数量**：实验设计非常全面，进行了**超过40组**主要实验（8个模型 × 5种Agent模式），并针对不同对话模式（Normal, Action, Private, Pri-Act）和回答类型（Code, Choice）提供了细粒度的结果。
*   **充分性与客观公平性**：实验设计充分且客观。
    *   **多维度评估**：不仅看整体得分，还深入分析了不同操作类型（如Clarification, Best_Guess）和错误类型（Key Error, Lazy Assumption等）的性能表现，使得评估立体而深入。
    *   **公平性**：所有测试均在统一的CoTA框架下进行，使用标准化的评测脚本和基于执行的准确率指标，避免了主观评分偏差。对比了多个不同系列的商业和开源模型，排除了对单一模型家族的偏好。
    *   **数据集质量验证**：通过10位外部专家对50%的数据进行人工评估，各项质量指标（如对话连贯性、场景多样性、评估脚本质量等）的接受率均超过**0.93**，有力证明了数据集的高质量。

### 6. 论文的主要结论与发现

1.  **CoTA是一个极具挑战性的基准**：目前最先进的Agent方法（Claude-3.5-Sonnet的Inter-Agent）在CoTA上的总体表现仅有 **40.0%**，留下了巨大的提升空间。
2.  **推理和工具调用至关重要**：加入推理（COT/CodeAct）和工具（代码执行器）的Agent模式普遍比纯LLM基础模式有显著提升。
3.  **ACR策略有效提升对话能力**：提出的自适应对话反思（ACR）策略能显著提升LLM的智能体性能，相对提升最高可达 **35.14%**，特别是在处理需要纠错（`Update_Code`）和判断问题不可解（`Fast_Fail`）的场景中表现突出。
4.  **模型行为差异显著**：
    *   **CodeLlama**在基础代码生成上表现优异，但倾向于使用较少的私有库，以规避出错风险。
    *   **GPT-4**理解结果和进行综合分析的能力较重要。
    *   **ACR**策略在处理需要主动猜测的`Best_Guess`操作时，可能因过度依赖历史而降低模型主动假设的能力。

### 7. 优点

*   **新颖的基准**：CoTA是首个全面覆盖多轮、多模态（代码生成与分析洞察）和私有库调用的对话式表格数据分析基准。
*   **“成本-质量”平衡的数据生成方法**：Decision Company多智能体与人类专家协同的构建方式，为复杂数据密集型任务的基准构建提供了低成本、高效率、高质量的新范式。
*   **有效的Agent进化策略**：ACR方法巧妙地利用历史成功经验，通过生成伪代码逻辑来引导模型，实现简单而有效的自我提升，为Agent学习提供了新思路。
*   **深入的错误分析**：对模型错误的分类（关键错误、惰性假设、指令遵循失败）为改进指明了方向。

### 8. 不足与局限

*   **静态评估的局限**：ACR和Fast_Fail中使用用户模拟器或固定为选择题，是对真实交互中动态、开放的“即时”反应的简化和近似，真实环境下的性能可能有偏差。
*   **数据领域的覆盖面**：虽然CoTA覆盖了5个领域，但主要局限于结构化CSV文件。对于数据库SQL查询场景或更复杂的数据格式，其泛化性有待验证。
*   **基础模型依赖**：ACR策略的效果取决于基础模型对成功历史进行反思和提炼伪代码逻辑的能力，对能力较弱的模型提升可能有限。
*   **Multi-Agent成本**：虽然决策公司构建成本低，但实验中的Multi-Agent推理模式的提示词开销是Inter-Agent的5.3倍，其应用受限于推理成本。

（完）
