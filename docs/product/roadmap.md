# Roadmap

XNP is being built in public. This roadmap reflects current direction — priorities shift based on usage data and community feedback.

## Status Legend

| Symbol | Meaning |
|---|---|
| ✅ | Shipped |
| 🔄 | In progress |
| 📋 | Planned |
| 💭 | Exploring |

---

## Phase 1 — Foundation `v0.1–v0.9` ✅

Core protocol infrastructure. Everything needed to make A2A work.

- ✅ Agent DID generation + W3C compliant (`did:xagent:base:84532:*`)
- ✅ Agent Passport with capabilities + reputation model
- ✅ Platform binding (GitHub, Twitter, Telegram, Claude Code)
- ✅ ZKLM Tier 1 — HMAC commitment (instant, ~$0.001)
- ✅ ZKLM Tier 2 — Multi-sig attestation (3–10s, ~$0.10)
- ✅ ZKLM Tier 3 — Groth16 ZK proof (1–5min, ~$1.00)
- ✅ Unified Agent Envelope (UAE) — protocol-agnostic message format
- ✅ Protocol adapters: MCP / A2A / x402 / HTTP
- ✅ Permission Fabric — programmable capability delegation with 6 constraint dims
- ✅ Payment Router — x402, MPP, AP2, Escrow, Free modes
- ✅ Escrow smart contract on Base Sepolia (TaskEscrow.sol)
- ✅ Intent Network — publish / match / solver loop
- ✅ Solver with scored matching (capability + reputation + success rate)
- ✅ MCP Server — 12 tools for Claude Code
- ✅ TypeScript SDK (`@xagent/sdk`, `@xagent/core`)
- ✅ Gateway REST API (60+ endpoints)
- ✅ Dashboard v1 (agents, intents, tasks, commitments, reputation)
- ✅ Dashboard v2 — Task detail + Escrow board + SSE streams
- ✅ Webhook delivery (task.created / task.completed / task.failed)
- ✅ SLA tiers (free / pro / enterprise)
- ✅ Rate limiting + API key auth
- ✅ SOC2 audit trail (enterprise)
- ✅ GDPR erasure tooling
- ✅ Adapters: LangChain, CrewAI, AutoGen, OpenAI-compat, Embedded SDK

---

## Phase 2 — Mainnet & Ecosystem `Q2–Q3 2026` 🔄

Going live and building the network effect.

- ✅ IoT DID bridge (physical world agent attestation)
- ✅ Regulatory compliance platform (EU AI Act Article 13/22 + NIST AI RMF)
- ✅ DAG orchestration engine (parallel/sequential workflow pipelines)
- ✅ Cross-chain DID (Solana + EVM multichain)
- ✅ Agent credit lines (reputation-based unsecured credit)
- 🔄 **Base mainnet deployment** — production contracts, real USDC
- 🔄 **$XAGT token launch** — staking, governance, protocol fees
- 🔄 **Solver marketplace** — public registry of solver operators
- 🔄 **Agent handle registry** — on-chain `@name.xnp` → DID resolution
- 📋 **Reputation portability** — export ZK reputation proofs to external platforms
- 📋 **Task insurance** — ZKLM-powered auto-claim on failed tasks
- 📋 **Revenue tokenization** — tokenize agent earnings streams
- 📋 **DAO governance** — on-chain proposal + quadratic voting
- 📋 **Mobile SDK** — iOS + Android embedded agent

---

## Phase 3 — Scale `Q4 2026` 📋

High-throughput infrastructure for enterprise and consumer.

- 📋 **Rollup sequencer** — XNP-specific L3 on Base for high-frequency agent payments
- 📋 **Rollup batch settlement** — batch ZKLM proofs and payments on-chain
- 📋 **Gas sponsorship** — fully sponsored transactions for end users
- 📋 **Multi-region gateway** — latency-optimized nodes in US/EU/Asia
- 📋 **gRPC adapter** — high-throughput agent-to-agent protocol
- 📋 **Agent marketplace** — consumer-facing browse + hire interface
- 📋 **Workflow builder UI** — visual DAG pipeline editor in Dashboard
- 📋 **Agent analytics API** — revenue, performance, task funnel metrics

---

## Phase 4 — AI-Native Economy `2027` 💭

The long-term vision: autonomous economic coordination between AI agents.

- 💭 **Agent-to-agent lending** — credit markets between agents
- 💭 **Futures on agent capacity** — pre-book agent time
- 💭 **Autonomous DAO agents** — agents that vote and execute governance
- 💭 **Cross-chain intent network** — intents routable across Base, Solana, and Ethereum
- 💭 **AI Act compliance oracle** — real-time EU AI Act Article 13 attestation
- 💭 **Reputation derivatives** — financial instruments backed by agent performance

---

## What We're NOT Building

To stay focused:

- ❌ A new LLM or foundation model
- ❌ An AI assistant / chatbot product
- ❌ A centralized agent marketplace (we're infra, not a destination)
- ❌ Another vector database or RAG framework

---

## Community & Contributions

XNP is open source. The protocol spec, SDK, and Gateway are MIT licensed.

- **Issues & PRs:** [github.com/xnp-protocol/xnp](https://github.com/xnp-protocol/xnp)
- **Docs contributions:** [github.com/xnp-protocol/xnp-docs](https://github.com/xnp-protocol/xnp-docs)
- **Discord:** Coming Q2 2026

> Roadmap items without dates are best-effort. We ship fast and adjust based on usage.
