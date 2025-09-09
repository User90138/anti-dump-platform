module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    ethereum: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
    // TODO: Добавить реальные ключи и URL для сетей
  },
};
