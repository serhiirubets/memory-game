const gap = 50;

export class Card {
  opened = false;
  x: number;
  y: number;
  readonly id: string;

  constructor(
    private ctx: CanvasRenderingContext2D,
    public rowNumber: number,
    public colNumber: number,
    public height: number,
    public width: number,
    public image: HTMLImageElement,
  ) {
    this.x = rowNumber * width + rowNumber * gap;
    this.y = colNumber * height + colNumber * gap;
    this.id = `${rowNumber}-${colNumber}`;
  }

  public show() {
    this.opened = true;
    this.drawImage();
  }

  public close() {
    this.opened = false;
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.render();
  }

  public render = () => {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  public drawImage() {
    // this.ctx.setTransform(1,0,0,-1,0, 200)
    this.ctx.drawImage(this.image, this.x, this.y);
  }
}
