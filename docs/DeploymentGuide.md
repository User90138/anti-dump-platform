# Руководство по деплою

## Требования
- Node.js v16+, Hardhat, Anchor, Solana CLI.
- Хранилище: HashiCorp Vault или AWS Secrets Manager.
- Ключи API для CEX (Binance, KuCoin, Bybit, OKX).

## Шаги
1. Установить зависимости:
   - `npm install` в `frontend/` и `backend/`.
2. Скомпилировать и развернуть контракты:
   - `npx hardhat compile`
   - `npx hardhat run scripts/deploy.ts --network <network>`
3. Собрать и развернуть программы Solana:
   - `anchor build`
   - `anchor deploy`
4. Запустить бэкенд: `npm start` в `backend/`.
5. Запустить фронтенд: `npm start` в `frontend/`.
6. Настроить мосты (Jupiter, Wormhole, Axelar) через `scripts/bridge.ts`.
7. Настроить Vault для хранения API-ключей.

## TODO
- Добавить конфигурации для CEX и Vault.
- Указать параметры деплоя для каждой сети.
