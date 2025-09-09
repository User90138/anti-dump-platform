import { SwapService } from '../services/SwapService';

export class TWAPJob {
  private swapService: SwapService;

  constructor() {
    this.swapService = new SwapService();
  }

  async execute(feeAmount: number, token: string, chain: string): Promise<void> {
    const interval = 1000 * 60 * 60; // 1 час
    const chunks = 10; // Разделить на 10 частей
    const amountPerChunk = feeAmount / chunks;

    for (let i = 0; i < chunks; i++) {
      await this.swapService.executeSwap(token, 'USDT', amountPerChunk, chain);
      // TODO: Реализовать TWAP с учётом рыночных условий
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
    console.log(`TWAP выполнен для ${feeAmount} ${token} в сети ${chain}`);
  }
}
