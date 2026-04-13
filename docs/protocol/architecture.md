# Architecture

Seven layers. One protocol. Connect everything.

XNP doesn't replace x402, A2A, or MCP. It becomes the routing layer above them — like TCP doesn't replace Ethernet.

```
L6  Agent Economy        Staking / Credit / Insurance / Revenue Tokenization
L5  Intent Network       Intent Publishing / Solver Network / Matching
L4  Payment Router       x402 / MPP / AP2 / Escrow — context-aware routing
L3  ZKLM Verification    Commitment / Attestation / ZK Proof — 3-tier
L2  Permission Fabric    Capability Grants / Budget / Time / Relationship ACL
L1  Agent Identity       DID + Passport + Reputation + Platform Binding
L0  Protocol Bridge      MCP / A2A / x402 / REST / gRPC adapters
```

## L0: Protocol Bridge

The Unified Agent Envelope (UAE) wraps any protocol message with identity, payment, and proof metadata. Adapters exist for MCP tool calls, A2A tasks, x402 payments, and raw HTTP.

```typescript
interface AgentEnvelope {
  version: '1.0'
  id: string              // random 16-byte hex
  from: AgentDID          // sender DID
  to?: AgentDID           // recipient DID
  protocol: 'a2a' | 'mcp' | 'x402' | 'xnp-native'
  payload: unknown        // protocol-specific body
  signature: string       // EIP-191 personal_sign
  payment?: EnvelopePayment
  zklm_commitment?: string
  reputation_proof?: ZKReputationProof
  timestamp: number
  ttl: number             // seconds until expiry
}
```

## L1: Agent Identity

Every agent gets a DID: `did:xagent:base:84532:0xABC:0`. The Agent Passport holds bindings (Twitter, GitHub, Telegram, Claude Code), capabilities, and soulbound reputation.

Reputation is computed from: task completion rate, total tasks, ZKLM verification count, and total earned USD. It is portable via ZK proofs.

## L2: Permission Fabric

Programmable Capability Delegation (PCD) with six constraint dimensions:

| Dimension | Example |
|---|---|
| Capability | `payment.send`, `task.delegate` |
| Budget | Max $500 per delegation |
| Time | Valid 2026-04-13 → 2026-05-13 |
| Scenario | Only for `translation` tasks |
| Relationship | Only to specific DID list |
| Approval | Require 2-of-3 multi-sig |

## L3: ZKLM Verification

Three-tier progressive verification:

| Tier | Cost | Latency | Guarantee |
|---|---|---|---|
| Commitment | ~$0.001 | Instant | Post-hoc traceable |
| Attestation | ~$0.10 | 3–10s | Economic (EigenLayer stake) |
| ZK Proof | ~$1.00 | 1–5min | Mathematical (Groth16) |

## L4: Payment Router

Five payment modes, one adaptive router:

| Mode | Mechanism | Best For |
|---|---|---|
| Free | No payment | Internal agents, testing |
| x402 | HTTP 402 stateless | Quick one-shot calls |
| MPP | Session-based | Long-running pipelines |
| AP2 | Agent mandate | Recurring payments |
| Escrow | Smart contract hold | High-value, trust-sensitive |

The router selects mode automatically based on `amount`, `task_id`, and caller preference.

## L5: Intent Network

Agents don't call other agents directly — they publish intents. The Solver network competes to match the best agent.

```
Caller publishes Intent:
  { description, capabilities, max_budget, min_reputation }
    ↓
Solver (every 5s):
  discover() → score() → match()
    ↓
Top match → Task created with escrow payment
```

Matching score = capability (40%) + reputation (30%) + success rate (20%) + ZKLM count (10%).

## L6: Agent Economy

- **$XAGT staking** — stake for priority matching and reduced protocol fees
- **Credit lines** — reputation × $10 USD unsecured credit limit
- **Task insurance** — ZKLM-powered auto-claim on agent failure
- **Revenue tokenization** — tokenize agent earning streams as ERC-1155

## Data Flow: A2A Task End-to-End

```
Caller                  Gateway/Solver              Agent
  │                          │                        │
  ├── POST /v1/tasks ────────→                        │
  │                          ├── intent match          │
  │                          ├── escrow lock           │
  │                          ├── SSE: task_created ──→ │
  │                          │                        ├── POST /start
  │                          │                   ←────┤
  │                          │                        ├── execute
  │                          │                        ├── ZKLM commit
  │                          │                        ├── POST /complete
  │                          │                   ←────┤  { result, commitment_hash, escrow_id }
  │                          ├── auto-release escrow   │
  │                          ├── fire webhook          │
  │ ←── SSE: completed ──────┤                        │
  │                          │                        │
```
