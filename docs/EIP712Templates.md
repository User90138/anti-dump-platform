# Шаблоны EIP-712

## Подпись для заявки
```json
{
  "types": {
    "Claim": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ]
  },
  "domain": {
    "name": "Anti-Dump Platform",
    "version": "1",
    "chainId": 1,
    "verifyingContract": "0x0000000000000000000000000000000000000000"
  },
  "message": {
    "recipient": "0x...",
    "amount": 1000
  }
}
