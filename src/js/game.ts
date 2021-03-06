import { CardList } from './card-list';

export class Game {
  ctx!: CanvasRenderingContext2D;

  constructor(private cardAmount: number, private canvas: HTMLCanvasElement) {
    this.preInit();
  }

  private preInit(): void {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public start(): void {
    const cardList = new CardList(this.canvas, this.ctx, this.cardAmount);
    cardList.render();
  }
}
