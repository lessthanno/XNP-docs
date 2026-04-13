# CLI Reference

Unix pipe-friendly commands for every protocol operation.

## Identity

```bash
xnp id generate                              # Generate keypair + DID
xnp id sign --key 0x...                      # Sign message (stdin)
xnp id verify --sig 0x... --addr 0x...       # Verify signature (stdin)
```

## Passport

```bash
xnp passport create --model claude-opus-4-6  # Create Agent Passport
xnp passport show <did>                      # Show passport details
xnp passport list                            # List all local passports
```

## Platform Binding

```bash
xnp bind github --did <did> --handle <handle>
xnp bind twitter --did <did> --handle <handle>
xnp bind telegram --did <did> --handle <handle>
```

## ZKLM Commitment

```bash
xnp commit generate          # stdin JSON → stdout commitment
xnp commit verify            # stdin commitment → {valid: bool}
xnp commit batch             # stdin [] → {batch, proofs}
xnp commit submit --contract 0x... --key 0x...   # Submit batch on-chain
xnp commit check <batchId> --contract 0x...      # Query on-chain status
```

## Permission

```bash
xnp policy create --from <did> --to <did> --action <action>
xnp policy check --policy <id> --did <did> --action <action>
```

## Payment

```bash
xnp pay --from <did> --to <did> --amount <n> --token USDC
```

## On-chain Registration

```bash
xnp register --did <did> --chain base-sepolia --key 0x... --registry 0x...
```

## Pipeline Examples

```bash
# Generate + verify in one pipe
echo '{"model_id":"claude","prompt":"hi","output":"hello"}' \
  | xnp commit generate | xnp commit verify

# Create agent + bind + list
DID=$(xnp passport create --model claude-opus-4-6 | jq -r '.did')
xnp bind github --did $DID --handle "my-agent"
xnp passport show $DID
```
