import { utils } from "ethers";
// В TypeScript включи "resolveJsonModule": true в tsconfig.json
const typedData = require("../../../shared/typedData/Campaign.json");

export function recoverSignerFromCampaignSignature(signature: string, campaign: any, opts?: { chainId?: number, verifyingContract?: string }): string {
  const domain = {
    ...typedData.domain,
    chainId: Number(opts?.chainId ?? process.env.CHAIN_ID ?? typedData.domain.chainId),
    verifyingContract: opts?.verifyingContract ?? process.env.VERIFYING_CONTRACT ?? typedData.domain.verifyingContract
  };

  const recovered = utils.verifyTypedData(domain, typedData.types, {
    airdropPercent: campaign.airdropPercent,
    lpPercent: campaign.lpPercent,
    servicePercent: campaign.servicePercent,
    feeCurrency: campaign.feeCurrency
  }, signature);

  return recovered.toLowerCase();
}
