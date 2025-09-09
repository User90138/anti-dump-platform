# Архитектура проекта Anti-Dump Platform

## Обзор
Платформа для предотвращения дампа токенов через TWAP, свопы на DEX/CEX и кросс-чейн мосты.

## Компоненты
- **Фронтенд**: React-интерфейс с панелями для создателей (настройка процентов, валюты, подпись EIP-712) и участников (заявки, предварительный просмотр, квитанции).
- **Бэкенд**: Node.js с TypeScript, API для заявок, статистики и предварительного просмотра.
- **Контракты**: Solidity-контракты для EVM (ClaimModule, FeeCollector, AdminModule) с поддержкой мульти-подписи.
- **Solana**: Программы Anchor для заявок и сбора комиссий.
- **Адаптеры**: Поддержка EVM (Ethereum, BNB Chain, Polygon, Base), Solana, CEX (Binance, KuCoin, Bybit, OKX).
- **Хранилище**: Безопасное хранение API-ключей через HashiCorp Vault или AWS Secrets Manager.
- **TWAP**: Движок для продажи 5% комиссий без влияния на цену.

## TODO
- Реализовать подписи EIP-712.
- Интегрировать DEX (Uniswap, PancakeSwap), CEX и мосты (Jupiter, Wormhole, Axelar).
- Настроить Vault и TWAP.
