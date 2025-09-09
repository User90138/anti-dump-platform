import { DEXAdapter } from '../adapters/DEXAdapter';
import { CEXAdapter } from '../adapters/CEXAdapter';

export class SwapService {
  private dexAdapter: DEXAdapter;
  private cexAdapter: CEXAdapter;

  constructor() {
    this.dexAdapter = new DEXAdapter();
    this.cexAdapter = new CEXAdapter();
  }

  async executeSwap(tokenIn: string, tokenOut: string, amount: number, chain: string): Promise<void> {
    if (chain === 'binance' || chain === 'kucoin' || chain === 'bybit' || chain === 'okx') {
      await this.cexAdapter.swap(tokenIn, tokenOut, amount, chain);
    } else {
      await this.dexAdapter.swap(tokenIn, tokenOut, amount, chain);
    }
    // TODO: Добавить логику выбора между DEX и CEX на основе ликвидности
  }
}