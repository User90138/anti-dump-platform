import { BridgeAdapter } from '../adapters/BridgeAdapter';

export class BridgeService {
  private bridgeAdapter: BridgeAdapter;

  constructor() {
    this.bridgeAdapter = new BridgeAdapter();
  }

  async bridgeTokens(fromChain: string, toChain: string, amount: number, token: string): Promise<void> {
    await this.bridgeAdapter.bridgeTokens(fromChain, toChain, amount, token);
    // TODO: Добавить логирование и обработку ошибок
  }
}
