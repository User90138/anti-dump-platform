# Anti-Dump Platform

Децентрализованная платформа для предотвращения дампа токенов через TWAP, свопы DEX/CEX и кросс-чейн мосты.

## Функции
- **Панель создателя**: Настройка процентов аирдропа/пула/сервиса, выбор валюты комиссии (USDT/BNB/USDC), подпись EIP-712 через MetaMask/WalletConnect.
- **Панель участника**: Заявка на токены, предварительный просмотр распределения (70%/25%/5%), квитанция.
- **Бэкенд**: Адаптеры для EVM (Ethereum, BNB Chain, Polygon, Base), Solana, CEX (Binance, KuCoin, Bybit, OKX); TWAP для продажи комиссий; Vault для API-ключей.
- **Контракты**: EVM (ClaimModule, FeeCollector, AdminModule) и Solana (Anchor-программы) для заявок, комиссий и настроек.
- **Мосты**: Поддержка Jupiter, Wormhole, Axelar для перевода стейблкоинов.

## Установка
1. Установить зависимости:
   - `npm install` в `frontend/` и `backend/`.
2. Развернуть контракты:
   - `npx hardhat run scripts/deploy.ts --network <network>`
3. Развернуть программы Solana:
   - `anchor build && anchor deploy`
4. Запустить бэкенд: `npm start` в `backend/`.
5. Запустить фронтенд: `npm start` в `frontend/`.
6. Настроить Vault для API-ключей.

## TODO
- Реализовать адаптеры для DEX (Uniswap, PancakeSwap) и CEX (Binance, KuCoin, Bybit, OKX).
- Разработать TWAP для продажи 5% комиссий.
- Интегрировать мосты (Jupiter, Wormhole, Axelar) и Vault (HashiCorp/AWS).
