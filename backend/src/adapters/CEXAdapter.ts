import { VaultService } from '../services/VaultService';

export class CEXAdapter {
  private vaultService: VaultService;

  constructor() {
    this.vaultService = new VaultService();
  }

  async swap(tokenIn: string, tokenOut: string, amount: number, exchange: string): Promise<void> {
    const apiKey = await this.vaultService.getApiKey(exchange);
    // TODO: Реализовать своп через CEX (Binance, KuCoin, Bybit, OKX) с использованием API-ключа
    console.log(`Своп ${amount} ${tokenIn} на ${tokenOut} на ${exchange} с ключом ${apiKey}`);
  }
}
