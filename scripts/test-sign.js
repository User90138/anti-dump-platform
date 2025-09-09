const { ethers } = require("ethers");
const typedData = require("../shared/typedData/Campaign.json");

(async () => {
  const wallet = ethers.Wallet.createRandom();
  const domain = typedData.domain;
  const types = typedData.types;
  const message = {
    airdropPercent: 70,
    lpPercent: 25,
    servicePercent: 5,
    feeCurrency: "0x0000000000000000000000000000000000000000"
  };

  const sig = await wallet._signTypedData(domain, types, message);
  const recovered = ethers.utils.verifyTypedData(domain, types, message, sig);

  console.log("Wallet:", wallet.address);
  console.log("Signature:", sig);
  console.log("Recovered:", recovered);
})();
