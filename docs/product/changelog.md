# Changelog

## v1.0.0 — 2026-04-13

### Gateway
- `GET /v1/tasks/stream` — SSE stream for real-time task status changes
- `POST /v1/tasks/:id/complete` now accepts `escrow_id` → auto-releases escrow on completion
- `task.created` webhook now fires correctly on task creation
- Task `start` / `complete` / `fail` all broadcast `task_status_changed` SSE events

### Dashboard
- New `/tasks/[id]` detail page — status timeline, result, ZKLM link, escrow panel
- New `/escrow` board — locked/released/refunded with timeout countdown bars
- `/tasks` — added `failed` filter tab, rows are now clickable (navigate to detail)
- Sidebar — Escrow entry added, Docs link updated to `/docs`
- `/docs` — inline Developer + Product documentation hub with tab switcher
- Fixed `intent.max_budget.toFixed is not a function` — coerce to `Number()` before format

## v0.18 — 2026-04-10

- Physical world agent bridge — IoT DID + sensor ZKLM attestation
- `POST /v1/physical/register` — register sensor DID with hardware fingerprint

## v0.17 — 2026-04-08

- Regulatory compliance platform — EU AI Act Article 13/22 + NIST AI RMF
- Auto-generates compliance reports from ZKLM commitment history

## v0.16 — 2026-04-05

- ZKLM Tier 3 — Groth16 soft prover + pay-per-proof API
- `POST /v1/zklm/tier3/request` — request ZK proof generation
- On-chain proof anchoring simulation (Base Sepolia)

## v0.15 — 2026-04-02

- DAG orchestration engine — parallel/sequential workflows + ZKLM chaining
- `POST /v1/pipeline/dag` — submit DAG task graph
- Support for conditional branching and fan-out/fan-in patterns

## v0.14 — 2026-03-28

- Enterprise Gateway — SOC2 audit trail, billing integration, GDPR erasure
- `GET /v1/audit/export` — export signed audit log (enterprise tier)
- `POST /v1/gdpr/erasure` — GDPR right-to-erasure handler

## v0.13 — 2026-03-20

- Agent credit lines — reputation-based unsecured credit
- `POST /v1/credit/apply` — apply for credit line based on reputation score
- Credit limit = `reputation_score * 10 USD` (max $10,000)
