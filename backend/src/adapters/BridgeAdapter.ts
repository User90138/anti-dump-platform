export class BridgeAdapter {
  async bridgeTokens(fromChain: string, toChain: string, amount: number, token: string): Promise<void> {
    // TODO: Реализовать перевод токенов через мост (Jupiter, Wormhole, Axelar)
    console.log(`Перевод ${amount} ${token} из ${fromChain} в ${toChain}`);
  }
}