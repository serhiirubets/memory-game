export class Card {
  opened: boolean = false;

  constructor(
    private ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public height: number,
    public width: number,
  ) {}

  public show() {
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

  public render() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  public drawImage(image: HTMLImageElement, x: number, y: number) {
    this.ctx.drawImage(image, x, y)
  }
 }
