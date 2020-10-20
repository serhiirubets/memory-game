export class Card {
  opened: boolean = false;

  constructor(
    private ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public height: number,
    public width: number,
    public image: HTMLImageElement,
  ) {}

  public show() {
    this.opened = true;
    this.drawImage()
  }

  public close() {
    this.opened = false;
    this.render();
  }

  public render() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  public drawImage() {
    // this.ctx.setTransform(1,0,0,-1,0, 200)
    this.ctx.drawImage(this.image, this.x, this.y)
  }
 }
