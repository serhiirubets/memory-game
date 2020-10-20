export class Card {
  opened: boolean = false;

  constructor(private ctx: CanvasRenderingContext2D) {}

  public show() {
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

  public render(x: number, y: number, width: number, height: number) {
    this.ctx.fillRect(x, y, width, height);
  }

  public drawImage(image: HTMLImageElement, x: number, y: number) {
    this.ctx.drawImage(image, x, y)
  }
 }
