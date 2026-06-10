# 日报 · 2026-06-10

- 生成时间：2026-06-10 22:30:31 UTC
- 当次推荐总数：8
- 精读区：6
- 速读区：2

## 今日简报（AI）
今日精读两篇高分论文，聚焦大模型后训练阶段的稳定性与高效微调：一篇揭示RL在SFT后失败的根本原因并提出恢复模型可塑性的方法，另一篇验证了LoRA+NEFTune在DeepSeek-R1-8B上的指令微调效果。

核心发现：SFT后的模型可塑性坍塌会导致RL训练崩溃，通过注入噪声和重放策略可稳健交接；组合低秩适配与噪声微调能显著提升推理模型的指令遵循能力，且成本极低。

建议读者优先关注大模型从对齐微调到强化学习阶段的训练韧性设计，普通开发可尝试LoRA+NEFTune方案快速指令化自有R1模型。

## 精读区
1. [When RL Fails after SFT: Rejuvenating Model Plasticity for Robust SFT-to-RL Handoff](/202606/10/2606.09932v1-when-rl-fails-after-sft-rejuvenating-model-plasticity-for-robust-sft-to-rl-handoff) （9.0/10）
2. [Instruction Finetuning DeepSeek-R1-8B Model Using LoRA and NEFTune](/202606/10/2606.10392v1-instruction-finetuning-deepseek-r1-8b-model-using-lora-and-neftune) （9.0/10）
3. [A Unified Multi-Modal Framework for Intelligent Financial Systems: Integrating Reinforcement Learning, High-Frequency Trading, and Game-Theoretic Approaches with Cross-Modal Sentiment Analysis](/202606/10/2606.10412v1-a-unified-multi-modal-framework-for-intelligent-financial-systems-integrating-reinforcement-learning-high-frequency-trading-and-game-theoretic-approaches-with-cross-modal-sentiment-analysis) （9.0/10）
4. [Beyond Semantic Organization: Memory as Execution State Management for Long-Horizon Agents](/202606/10/2606.06090v1-beyond-semantic-organization-memory-as-execution-state-management-for-long-horizon-agents) （8.0/10）
5. [Effective Reinforcement Learning for Agentic Search by Recycling Zero-Variance Queries During Training](/202606/10/2606.10709v1-effective-reinforcement-learning-for-agentic-search-by-recycling-zero-variance-queries-during-training) （8.0/10）
6. [Pushing the Limits of LLM Tool Calling via Experiential Knowledge Integration and Activation](/202606/10/2606.10875v1-pushing-the-limits-of-llm-tool-calling-via-experiential-knowledge-integration-and-activation) （8.0/10）

## 速读区
1. [DMF: A Deterministic Memory Framework for Conversational AI Agents](/202606/10/2606.03463v1-dmf-a-deterministic-memory-framework-for-conversational-ai-agents) （7.0/10）
2. [The Arbiter Agent: Continually Monitoring Multi-Agent Conversations to Detect Emergent Misalignment](/202606/10/2606.10747v1-the-arbiter-agent-continually-monitoring-multi-agent-conversations-to-detect-emergent-misalignment) （6.0/10）

---
使用键盘方向键可在日报/论文之间快速切换。
