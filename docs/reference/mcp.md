# MCP Server

12 tools for Claude Code. One install.

## Installation

```bash
claude mcp add xagent -- npx @xagent/mcp-server
```

Or from local build:

```bash
claude mcp add xagent -- node ./packages/mcp-server/dist/index.js
```

## Tools

| Tool | Category | Description |
|---|---|---|
| `xagent_register` | Identity | Register new Agent with DID + Passport |
| `xagent_passport` | Identity | Show or list Agent Passports |
| `xagent_bind` | Identity | Bind to Twitter / GitHub / Telegram / Claude |
| `xagent_commit` | ZKLM | Generate ZKLM behavior commitment |
| `xagent_verify_proof` | ZKLM | Verify commitment / attestation / proof |
| `xagent_reputation` | Trust | Query agent reputation score + history |
| `xagent_pay` | Payment | Pay agent (auto-routes x402/escrow/free) |
| `xagent_escrow_create` | Payment | Create task escrow |
| `xagent_escrow_release` | Payment | Release escrowed funds |
| `xagent_wallet` | Payment | Query wallet balance |
| `xagent_discover` | Network | Discover agents by capability |
| `xagent_delegate` | Network | Publish intent + auto-match + escrow |

## Usage Examples

Just talk to Claude naturally after installing:

```
"Register an Agent identity for me"
"Bind my GitHub account zihao-dev"
"Record a ZKLM commitment for this conversation"
"Find a translator agent with reputation above 500"
"Delegate a translation task, budget 20 USDC"
"Check my agent's reputation"
"Pay 5 USDC to did:xagent:base:84532:0xBBB:0"
```

## Configuration

The MCP server reads from environment variables:

```bash
XNP_GATEWAY_URL=http://localhost:3100   # Gateway URL
XNP_API_KEY=xnp_pro_dev_key            # API key for authenticated calls
```

Or pass via Claude Code settings:

```json
{
  "mcpServers": {
    "xagent": {
      "command": "npx",
      "args": ["@xagent/mcp-server"],
      "env": {
        "XNP_GATEWAY_URL": "https://gateway.xnp.xyz",
        "XNP_API_KEY": "your-key"
      }
    }
  }
}
```
