---
title: "CLARIFY: Contrastive Preference Reinforcement Learning for Untangling Ambiguous Queries"
title_zh: CLARIFY：用于解缠模糊查询的对比偏好强化学习
authors: "Ni Mu, Hao Hu, Xiao Hu, Yiqin Yang, Bo XU, Qing-Shan Jia"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=vOCPctm3nb"
tags: ["query:fla"]
score: 8.0
evidence: 基于对比学习的离线偏好RL，提升人机对齐中偏好查询效率。
tldr: 针对偏好强化学习中人类难以标记清晰偏好的问题，提出CLARIFY方法，通过对比学习构建轨迹嵌入空间，使相似轨迹分离以提高查询明确性。实验表明，该方法在奖励预测和策略学习上均优于现有基线，为高效人机对齐提供了新途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1579, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1553, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1586, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 831, \"height\": 311, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 724, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1694, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vocpctm3nb/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1641, \"height\": 747, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1783, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 857, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 668, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 833, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 648, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 888, \"height\": 496, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 434, \"height\": 239, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1050, \"height\": 1036, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vocpctm3nb/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1076, \"height\": 1828, \"label\": \"Table\"}]"
motivation: 人类在偏好比较中难以标记不确定偏好，限制了偏好强化学习的实际应用。
method: 提出CLARIFY，一种离线偏好RL方法，通过对比学习轨迹嵌入空间，使明确区分的轨迹段在空间中分离，辅助选择更无歧义的查询。
result: 在多个控制任务上超越基线方法，提升了查询效率和策略性能。
conclusion: CLARIFY通过对比学习有效缓解模糊反馈，提高了偏好RL的标签效率和实际可用性。
---

## Abstract
Preference-based reinforcement learning (PbRL) bypasses explicit reward engineering by inferring reward functions from human preference comparisons, enabling better alignment with human intentions. However, humans often struggle to label a clear preference between similar segments, reducing label efficiency and limiting PbRL’s real-world applicability. To address this, we propose an offline PbRL method: Contrastive LeArning for ResolvIng Ambiguous Feedback (CLARIFY), which learns a trajectory embedding space that incorporates preference information, ensuring clearly distinguished segments are spaced apart, thus facilitating the selection of more unambiguous queries. Extensive experiments demonstrate that CLARIFY outperforms baselines in both non-ideal teachers and real human feedback settings. Our approach not only selects more distinguished queries but also learns meaningful trajectory embeddings.

---

## 论文详细总结（自动生成）

好的，以下是基于所提供论文内容的结构化中文总结。

### 1. 论文的核心问题与整体含义

*   **核心问题**：在基于偏好的强化学习（PbRL）中，当要求人类在两条高度相似的轨迹片段之间进行偏好比较时，他们常常难以给出明确的判断，从而导致**模糊查询**。这种模糊性降低了标签效率，限制了PbRL在现实世界中的应用。
*   **研究目标**：本文旨在解决离线PbRL场景下的模糊查询问题。
*   **整体含义**：提出一种新方法，通过学习一个包含偏好信息的轨迹嵌入空间，使得在该空间中清晰可辨的片段被拉远，模糊的片段被拉近，从而能够主动选择出那些更易于人类给出明确偏好的查询，提升整体学习和对齐效率。

### 2. 论文提出的方法论

论文提出的方法名为**CLARIFY**（Contrastive LeArning for ResolvIng Ambiguous Feedback），其核心思想和技术细节如下：

*   **核心思想**：利用对比学习来训练一个轨迹嵌入空间，将偏好信息（更好、更差、无法区分）编码到轨迹片段的向量表示中。基于此嵌入空间，通过拒绝采样策略筛选出更可能无歧义的查询对以供人类标注。
*   **关键技术细节**：
    *   **轨迹编码器**：采用双向决策变换器（Bidirectional Decision Transformer, BDT）架构，将任意长度的轨迹片段 \(\tau\) 映射为固定维度的嵌入向量 \(z = f_{\phi}(\tau)\)。
    *   **对比学习损失函数**：设计了两个互补的对比损失来优化嵌入空间。
        1.  **歧义损失 \(L_{amb}\)**：最大化明确偏好对（\(p \in \{0, 1\}\)）的嵌入距离，同时最小化模糊偏好对（\(p = \text{no cop}\)）的嵌入距离。这直接实现了片段的分离与聚合。
        2.  **四边形损失 \(L_{quad}\)**：利用明确偏好对构造“四边形”关系，鼓励更好片段之间的嵌入距离与更差片段之间的嵌入距离之和，小于更好与更差片段之间的交叉距离。此举旨在防止表征坍缩，并利用成对查询将数据量从 \(O(n)\) 提升到 \(O(n^2)\)，减轻过拟合。
    *   **查询选择**：基于学习到的嵌入空间，采用**拒绝采样**方法。它首先估算清晰对和模糊对嵌入距离的概率密度，然后构建一个新的采样分布，该分布更侧重于清晰对距离大于模糊对距离的区域，从而以更高概率选中无歧义的查询。
*   **算法流程**：
    1.  **预训练**：使用随机采样的一批查询，预训练轨迹编码器 \(f_{\phi}\) 和偏好奖励模型 \(\hat{r}_{\psi}\)。
    2.  **迭代训练**：循环执行以下步骤，直到达到总反馈数量：
        *   基于当前编码器的嵌入空间，使用拒绝采样策略选择一批无歧义查询。
        *   将新查询加入偏好数据集 \(D_p\) 并更新奖励模型。
        *   使用更新后的 \(D_p\) 重新训练编码器（优化组合损失）。
    3.  **策略学习**：使用训练好的奖励模型为离线数据集 \(D\) 标注奖励，再用标准离线RL算法（本文使用IQL）训练最终策略。

### 3. 实验设计

*   **数据集与场景**：
    *   使用了来自Metaworld（7个复杂机器人操作任务）和DMControl（2个复杂运动任务）的离线数据集，这些数据集被证明比D4RL对奖励学习更敏感。
*   **Benchmark 与对比方法**：
    *   **Baseline 方法**：对比了多种先进的离线PbRL方法，包括：
        *   **MR**：基于马尔可夫奖励模型（MLP）的基准方法。
        *   **PT**：基于Transformer的偏好奖励模型。
        *   **OPRL**：使用奖励集成的最大分歧查询选择方法。
        *   **OPPO**：直接在嵌入空间优化策略的方法。
        *   **LiRE**：使用成列（Listwise）比较增强反馈的方法。
        *   **IQL（oracle）**：使用真实奖励训练的IQL，作为性能上限。
*   **非理想教师模型**：为模拟人类不确定性，设计了一个脚本教师。当两个片段真实奖励之和的差异小于一个阈值（由跳过程率 \(\epsilon\) 控制）时，教师会跳过该查询，标记为无法比较（no cop）。

### 4. 资源与算力

*   **未明确说明**：论文正文及附录中，**没有**明确提及实现该方法所使用的具体GPU型号、数量或总训练时长。这是实验报告中的一个信息缺失。

### 5. 实验数量与充分性

*   **实验数量**：实验设计较为全面，主要包括以下几组：
    *   **基准测试实验**：在2种不同的跳过程率（\(\epsilon = 0.5, 0.7\)）下，对9个任务、7种方法（含CLARIFY和IQL上限）进行了性能比较，每个实验使用6个随机种子。
    *   **人类评估实验**：进行了两组人类实验，分别验证了：1）非理想教师模型的合理性（不同奖励差异下的人类标签质量）；2）CLARIFY所选查询与OPRL所选查询在真人标注下的清晰度与准确率。
    *   **消融实验**：验证了不同损失函数（\(L_{amb}\) 和 \(L_{quad}\)）的贡献、查询选择机制、以及在不同查询数量下的效率。
*   **充分性与公平性**：实验设计是充分且客观的。它涵盖了多个复杂任务、多种前沿 baseline、两种反馈噪声水平，并且通过真实人类实验和详细的消融研究来多维度地验证了方法的有效性，反驳了仅依赖脚本教师的局限性。

### 6. 论文的主要结论与发现

*   CLARIFY在非理想教师和真实人类反馈的设定下，其策略性能均优于现有的离线PbRL方法。
*   CLARIFY能显著提高所选查询中无歧义查询的比例，这一点同时被脚本教师和人类实验所证实。
*   CLARIFY学习到的轨迹嵌入空间具有意义，其中高分片段与低分片段可以形成清晰的簇，中间状态平滑过渡。
*   所提出的四边形损失 \(L_{quad}\) 与歧义损失 \(L_{amb}\) 的组合是方法成功的关键，二者起到了协同和互补作用。

### 7. 优点

*   **创新性问题**：首次系统性地形式化并提出在离线PbRL中解决模糊查询问题的方法。
*   **精巧的方法设计**：将对比学习创造性地应用于偏好关系建模，设计的三组损失函数（重建、歧义、四边形）目标明确且互补，有其理论分析支持。
*   **实验验证充分**：不仅有脚本教师和真实人类实验的交叉验证，还有深入的可视化和消融研究，论证链条完整。
*   **实际应用价值**：为提高基于人类反馈的强化学习（包括LLM对齐）的标签效率和实用性提供了新思路。

### 8. 不足与局限

*   **计算资源报告缺失**：未披露训练所需的算力成本，降低了复现和评估其资源需求的准确性。
*   **实验覆盖范围有限**：
    *   虽然使用了真人标签，但标注者可能是论文作者，可能存在认知偏差。
    *   实验场景仅限于连续控制，未在离散动作空间或高维输入（如图像）任务上进行验证。
    *   未与基于主动学习或信息增益的查询选择方法进行直接比较。
*   **方法局限**：
    *   方法的有效性依赖于预训练阶段能获得一定比例的明确和模糊查询，在极端稀疏或完全随机的初始查询下性能未知。
    *   四边形损失 \(L_{quad}\) 的设计隐含着“更好”或“更差”的片段在嵌入空间中应各自归为一簇的假设，对于存在多种不同最优策略或高度多模态的任务，此假设可能不成立。

（完）
