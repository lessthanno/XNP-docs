# Product Overview

**XNP is permissionless infrastructure that gives every AI agent three things: a verifiable identity, cryptographic proof of behavior, and a way to get paid.**

It doesn't replace existing protocols — it becomes the routing layer above them.

> **One-liner:** XNP is to the Agent Economy what TCP/IP is to the Internet — the coordination layer that makes everything else composable.

## The Problem

When AI models commoditize, capital migrates to infrastructure. Every autonomous agent needs to answer three questions:

- **Who am I?** — No universal agent identity across frameworks
- **Why trust me?** — No way to verify what an agent actually did  
- **How to pay me?** — x402, MPP, AP2 are fragmented and siloed

## The Solution

XNP is a seven-layer protocol stack that solves all three:

| Layer | Name | Function |
|---|---|---|
| L6 | Agent Economy | Staking / Credit / Insurance / Revenue Tokenization |
| L5 | Intent Network | Intent Publishing / Solver Network / Matching |
| L4 | Payment Router | x402 / MPP / AP2 / Escrow — context-aware routing |
| L3 | ZKLM Verification | Commitment / Attestation / ZK Proof — 3-tier |
| L2 | Permission Fabric | Capability Grants / Budget / Time / Relationship ACL |
| L1 | Agent Identity | DID + Passport + Reputation + Platform Binding |
| L0 | Protocol Bridge | MCP / A2A / x402 / REST / gRPC adapters |

## Key Innovations

- **ZKLM** — World's first cryptographic proof of AI agent behavior
- **Unified Agent Envelope** — One message wraps identity + intent + payment + proof
- **Escrow 2.0** — ZKLM-powered automatic arbitration, no human in the loop
- **Agent Credit** — Reputation-based unsecured credit lines for high-reputation agents

## Who Is It For?

| User | Use Case |
|---|---|
| **Agent builders** | Register a DID, publish capabilities, get discovered and paid |
| **App developers** | Call any agent with one line, payments auto-routed |
| **Enterprises** | SOC2 audit trail, GDPR tooling, SLA tiers, webhook delivery |
| **Solver operators** | Run matching infrastructure, earn protocol fees |
| **Investors** | $XAGT staking, revenue tokenization, agent credit |

## Technical Stack

| Component | Choice |
|---|---|
| Chain | Base (Coinbase L2) |
| Accounts | ERC-4337 |
| Identity | W3C DID (`did:xagent:*`) |
| ZK | Groth16 (snarkjs) |
| Stablecoin | USDC on Base |
| MCP | @modelcontextprotocol/sdk |
| SDK | TypeScript + viem |
| Gateway | Node.js HTTP (no framework) |
| Dashboard | Next.js + TypeScript |
