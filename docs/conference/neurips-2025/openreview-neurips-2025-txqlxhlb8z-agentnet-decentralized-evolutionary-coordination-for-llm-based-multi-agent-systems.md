---
title: "AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"
title_zh: AgentNet：基于 LLM 的多智能体系统去中心化进化协调
authors: "Yingxuan Yang, Huacan Chai, Shuai Shao, Yuanyi Song, Siyuan Qi, Renting Rui, Weinan Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=tXqLxHlb8Z"
tags: ["query:fla"]
score: 5.0
evidence: 基于 LLM 的多智能体系统去中心化进化与自主能力提升
tldr: 针对现有多智能体系统依赖中心化协调带来的可扩展性、适应性及隐私问题，本文提出去中心化框架 AgentNet，利用检索增强生成和 DAG 结构使 LLM 智能体自主进化能力并高效协作。该框架增强了智能体的持续学习潜力，为分布式智能体系统的后训练演化提供了新架构。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1365, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1440, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 699, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1376, \"height\": 385, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 677, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1376, \"height\": 270, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1436, \"height\": 492, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1352, \"height\": 326, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 675, \"height\": 95, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 744, \"height\": 569, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1402, \"height\": 445, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-txqlxhlb8z/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1477, \"height\": 748, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1480, \"height\": 1055, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1284, \"height\": 156, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 741, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1402, \"height\": 308, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1402, \"height\": 1379, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-txqlxhlb8z/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1446, \"height\": 825, \"label\": \"Table\"}]"
motivation: 解决中心化多智能体系统的可扩展性瓶颈、单点故障及跨组织知识共享壁垒问题。
method: 提出基于 RAG 的去中心化框架，智能体通过检索、生成和 DAG 协作实现能力自主进化。
result: 在不同规模的任务中验证了框架的鲁棒性和协作效率。
conclusion: 该工作为构建可演化、隐私保护的多智能体系统提供了新范式，对持续学习场景具有启发意义。
---

## Abstract
The rapid advancement of Large Language Models (LLMs) has catalyzed the development of multi-agent systems, where multiple LLM-based agents collaborate to solve complex tasks.   However, existing systems predominantly rely on centralized coordination, which introduces scalability bottlenecks, limits adaptability, and creates single points of failure.   Additionally, concerns over privacy and proprietary knowledge sharing hinder cross-organizational collaboration, leading to siloed expertise.   To address these challenges, we propose AgentNet, a decentralized, Retrieval-Augmented Generation (RAG)-based framework that enables LLM-based agents to autonomously evolve their capabilities and collaborate efficiently in a Directed Acyclic Graph (DAG)-structured network.   Unlike traditional multi-agent systems that depend on static role assignments or centralized control, AgentNet allows agents to specialize dynamically, adjust their connectivity, and route tasks without relying on predefined workflows.
AgentNet’s core design is built upon several key innovations: (1) Fully Decentralized Paradigm: Removing the central orchestrator, allowing agents to coordinate and specialize autonomously, fostering fault tolerance and emergent collective intelligence. (2) Dynamically Evolving Graph Topology: Real-time adaptation of agent connections based on task demands, ensuring scalability and resilience.
(3) Adaptive Learning for Expertise Refinement: A retrieval-based memory system that enables agents to continuously update and refine their specialized skills.
By eliminating centralized control, AgentNet enhances fault tolerance, promotes scalable specialization, and enables privacy-preserving collaboration across organizations.      Through decentralized coordination and minimal data exchange, agents can leverage diverse knowledge sources while safeguarding sensitive information.      Experimental results demonstrate that AgentNet outperforms traditional centralized multi-agent systems, significantly improving efficiency, adaptability, and scalability in dynamic environments, making it a promising foundation for next-generation autonomous, privacy-respecting multi-agent ecosystems.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有多智能体系统（MAS）大多依赖中心化协调器或预定义静态工作流分配任务，导致三大痛点：
  - **可扩展性瓶颈**：中心控制器容易成为性能瓶颈和单点故障。
  - **适应性不足**：固定角色与静态拓扑难以应对实时变化的任务需求和智能体能力波动。
  - **跨组织协作壁垒**：集中式架构迫使各机构共享专有数据与知识，引发隐私、知识产权和治理规范冲突，造成智能体能力碎片化。
- **整体含义**：本文旨在构建一个完全去中心化、可自主进化的多智能体协作框架（AgentNet），使智能体能在无中心协调下动态专精、自适应连接并高效路由任务，从而在保障隐私的前提下实现可扩展、鲁棒的群体智能。

### 2. 论文提出的方法论
#### 2.1 核心思想
- **去中心化网络拓扑**：将系统建模为有向无环图 \(\mathcal{G}=(\mathcal{A},\mathcal{E})\)，每个智能体 \(a_i\) 包含路由器（\(rou_i\)）和执行器（\(exe_i\)），独立做出路由与执行决策，无需全局控制器。
- **自适应进化与专精**：基于检索增强生成（RAG）的记忆机制，智能体通过存储和检索自身参与的成功任务片段，持续优化决策；记忆池有容量上限，通过淘汰低价值轨迹避免遗忘并自然催生能力专精。
- **动态任务分配**：任务以元组 \(t=(o_t, c_t, p_t)\) 表示（描述、能力需求向量、优先级）。智能体依据能力向量匹配度被选为入口节点，随后可执行三种操作：**转发**、**拆分**后部分执行并路由子任务、或**直接执行**，同时通过更新有向边权重及剪枝来动态优化通信拓扑。

#### 2.2 关键技术细节
- **双记忆模块与 RAG 增强推理**：
  - 每个智能体维护路由记忆 \(\mathcal{M}^{rou}_i\) 和执行记忆 \(\mathcal{M}^{exe}_i\)，存储三元组 \((\text{观测}, \text{上下文}, \text{动作})\)。
  - 接到新任务时，通过语义嵌入检索最相关的 \(k\) 个历史片段，融入推理和动作生成过程：
    \[
    \text{Select}(\mathcal{M}^r_i, t_{m+1}, k) = \argmax_{\substack{\mathcal{F}\subset\mathcal{M}^r_i \\ |\mathcal{F}|=k}} \sum_{f\in\mathcal{F}} \text{sim}(\text{embed}(o^r_f, c^r_f), \text{embed}(o_{t_{m+1}}, c_{t_{m+1}}))
    \]
  - 推理函数 \(R_{a_i}\) 和动作函数 \(A_{a_i}\) 均将检索到的记忆作为输入，通过骨干 LLM 生成决策。
- **连接权重演化与剪枝**：
  - 每次任务后更新有向边权重：
    \[
    w_{m+1}(i,j) = \alpha \cdot w_m(i,j) + (1-\alpha) \cdot S(a^{m+1}_i, a^{m+1}_j, t_{m+1})
    \]
    其中 \(\alpha\) 为衰减因子，\(S\) 为任务协作成功指标。
  - 低于阈值 \(\theta_w\) 的边被剪枝：\(\mathcal{E}_{m+1} = \{(a^{m+1}_i, a^{m+1}_j) \mid w_{m+1}(i,j) > \theta_w\}\)。
- **能力向量更新**：
  \[
  cv^{m+1}_i = \beta \cdot cv^m_i + (1-\beta) \cdot \Delta cv^{m+1}_i
  \]
  其中 \(\Delta cv^{m+1}_i\) 根据智能体在任务中成功执行的操作类型和质量计算。
- **任务分配与 DAG 保持**：
  - 入口智能体选择：\(a_\text{initial} = \argmax_{a_i \in \mathcal{A}^m} \{\text{sim}(c_{t_{m+1}}, cv^m_i)\}\)，能力需求 \(c_t\) 由任务复杂度（原子/复合）通过启发式或 LLM 推导。
  - 操作集：**转发**（按能力匹配度选择下一智能体）、**拆分**（仅传递子任务结果，不传递分解推理，防止错误传播）、**执行**，维护无环性并防止无限循环。

### 3. 实验设计
- **数据集与场景**：
  - **数学推理**：MATH 数据集（700 训练 / 140 测试）。
  - **逻辑问答**：BBH (Big-Bench Hard)，选取 20 个任务共 627 训练 / 100 测试。
  - **函数调用/工具使用**：API-Bank 数据集，随机构建 100 训练 / 100 测试，并人工标注七种任务类型与三个难度级别。
- **基准方法**：
  - **单智能体**：Direct（直接生成）、Chain-of-Thought、Synapse（轨迹样例提示）、Self-Consistency（多路径投票）、Self-Refinement（迭代自优化）。
  - **多智能体**：MetaGPT（中心瀑布流）、AFLOW（蒙特卡洛树搜索优化工作流）、GPTSwarm（可优化图）、MorphAgent（自进化角色轮廓）。
- **评估指标**：数学和逻辑任务用准确率；函数调用任务用准确率。实验在三种骨干 LLM（DeepSeek-V3, GPT-4o-mini, Qwen-turbo）下进行，所有多智能体方法均设为 3 个智能体以保证公平。

### 4. 资源与算力
- 论文**未明确说明**使用的 GPU 型号、数量或具体训练时长。
- 提到使用 `BAAI/bge-large-en-v1.5` 模型计算嵌入相似度，并调用 GPT-4o-mini 等 API 进行实验，但未披露所需的硬件资源详情。温度设为 0.0，最大 token 2048，top-p 1.0，以保证结果可复现。

### 5. 实验数量与充分性
- **主要对比实验**：3 种骨干模型 × 8 种方法（含 5 种单智能体 + 4 种多智能体 + AgentNet）在 MATH、BBH、API-Bank 上的性能矩阵（表 1）。
- **异质性实验**：在 BBH 上测试 4 种配置（完全同质、能力异质、LLM 异质、双重异质）并分别用 3 和 5 个智能体，分析多样性影响（表 2）。
- **消融实验**：
  - 路由器有效性：对比完全随机、随机操作、随机下一节点、全局中心路由器与 AgentNet 路由，在 BBH 训练/测试上评估准确率（图 5）。
  - 进化阶段影响：对比无进化（w/o evolution）与 AgentNet 在 MATH、API-Bank、BBH 上的性能（表 3）。
- **可扩展性分析**：改变智能体数量（3/5/7/9）和执行器池大小（30/40），观察 BBH 训练与测试准确率变化（图 6）。
- **网络演化与专精可视化**：展示 5 个智能体在 627 条 BBH 训练数据上的网络连接权重变化（图 7）以及不同智能体数量下的能力分异（图 8）。
- **案例分析**：对比 ReAct 与 AgentNet 在 BBH 具体问题上的解题路径（图 9、10）。
- 实验设计**较充分**，覆盖不同任务、不同 LLM 基座、多种基线和消融，对比公平（统一 3 智能体设置），能有效支撑主要结论。

### 6. 论文的主要结论与发现
- **性能优势**：AgentNet 在数学、逻辑和 API 调用任务上普遍优于中心化多智能体框架（如 MetaGPT、AFLOW）和单智能体强基线，尤其在高难度、需协作的任务上表现突出。
- **去中心化路由的关键作用**：消融显示，随机路由或中心路由器会显著降低性能，证实智能体自主决策的重要性。
- **进化机制提升效果**：带有 RAG 记忆与自适应学习的 AgentNet 相比无进化版显著提升准确率，表明持续经验积累与专精能有效增强系统能力。
- **异构协作的规模效应**：在小规模（3 智能体）下，同质团队更优；扩大到 5 智能体后，异构性带来性能增益，显示多样性带来的互补协作优势。
- **良好的可扩展性与鲁棒性**：增加智能体数量或执行器池上限，性能整体稳中有升，证明去中心化结构能有效应对规模扩张。

### 7. 优点
- **去中心化设计**：移除中心节点，消除单点故障，天然支持跨组织隐私保护与本地知识管控。
- **动态拓扑演化**：连接权重自适应调整与剪枝机制，使协作网络随任务持续优化，兼具灵活性与效率。
- **RAG 增强的持续学习**：通过检索记忆实现经验重用和自然专精，无需显式角色分配，方法简洁且符合在线学习场景。
- **任务路由的 DAG 保证**：避免循环依赖，拆分任务时约束信息传递，防止错误级联，设计严谨。
- **实验扎实全面**：涵盖多类任务、多种 LLM 基座、丰富的单/多智能体基线，消融和异质性分析增强说服力。

### 8. 不足与局限
- **大规模路由探索不足**：当前路由在较小候选池中选择，当智能体数量激增（如数百）时，如何高效发现最适智能体仍待研究。
- **异构性带来的协调开销**：异质团队在小规模下反而降低性能，表明不同模型/能力组合可能引入额外的协调成本，需进一步提高兼容性。
- **未讨论计算开销**：论文未给出 RAG 检索、记忆更新和 LLM 调用的具体算力消耗，实际部署成本不明确。
- **任务类型有限**：仅在数学、逻辑、工具使用三类基准上验证，缺少更复杂的开放域协作、实时动态环境或长周期任务评估。
- **隐私保护量化分析缺失**：虽定性声称设计能保障隐私，但未通过差分隐私或攻击模拟等手段量化评估信息泄露风险。
- **记忆容量与遗忘平衡**：固定容量记忆池可能在高吞吐、长生命周期场景下面临灾难性遗忘或检索噪声，文中未深入探讨容量配置的影响。

（完）
