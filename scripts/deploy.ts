import { ethers } from 'hardhat';

async function main() {
  const signers = ['0x123...', '0x456...']; // TODO: Указать реальные адреса подписантов
  const FeeCollector = await ethers.getContractFactory('FeeCollector');
  const feeCollector = await FeeCollector.deploy(signers, 2);
  await feeCollector.deployed();
  console.log('FeeCollector deployed to:', feeCollector.address);

  const lpPool = '0x789...'; // TODO: Указать адрес пула ликвидности
  const ClaimModule = await ethers.getContractFactory('ClaimModule');
  const claimModule = await ClaimModule.deploy(feeCollector.address, lpPool);
  await claimModule.deployed();
  console.log('ClaimModule deployed to:', claimModule.address);

  const AdminModule = await ethers.getContractFactory('AdminModule');
  const adminModule = await AdminModule.deploy();
  await adminModule.deployed();
  console.log('AdminModule deployed to:', adminModule.address);

  // TODO: Настроить контракты для сетей Ethereum, BNB Chain, Polygon, Base
}

main().catch((error) => {
  console.error('Ошибка деплоя:', error);
  process.exit(1);
});
