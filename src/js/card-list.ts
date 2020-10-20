import { Card } from './card';
import {getRandomInteger} from './helpers';

const width = 200;
const height = 200;
const gap = 50;
const mainUrl = 'assets/img';

export class CardList {
  imageUrls: string[] = [];
  cards: Card[] = [];
  activeCardCount = 0;

  constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D, private cardAmount: number) {
    this.init();
  }

  private init() {
    this.generateImageUrls();
    this.addListeners();
  }

  private generateImageUrls() {
    const amount = this.cardAmount * 2;
    for (let i = 1; i <= amount; i++) {
      this.imageUrls.push(`${mainUrl}/${i}.jpg`);
      this.imageUrls.push(`${mainUrl}/${i}.jpg`);
    }
  }

  public render() {
    const urls = [...this.imageUrls];
    for (let i = 0; i < this.cardAmount; i++) {
      for (let j = 0; j < this.cardAmount; j++) {
        this.renderCard(urls, i, j);
      }
    }
  }

  private renderCard(urls: string[], i: number, j: number) {
    const x = i * width + i * gap;
    const y = j * height + j * gap;
    const image = new Image(width, height);
    const index = getRandomInteger(0, urls.length - 1);
    const url = urls[index];
    const card = new Card(this.ctx, x, y, width, height, image);

    this.cards.push(card);

    urls.splice(index, 1);
    image.src = url;

    image.addEventListener('load', () => {
      card.render();
    });
  }

  public onClick(e: MouseEvent) {
    const canvas = this.canvas;
    const elemLeft = canvas.offsetLeft + canvas.clientLeft;
    const elemTop = canvas.offsetTop + canvas.clientTop;
    const x = e.pageX - elemLeft;
    const y = e.pageY - elemTop;

    this.cards.forEach((card: Card) => {
      if (y > card.y && y < card.y + card.height
        && x > card.x && x < card.x + card.width) {
        if (this.activeCardCount >= 2) {
          this.activeCardCount = 0;
          this.closeActiveCards()
        }
        card.show();
        this.activeCardCount += 1;
      }
    });
  }

  private addListeners() {
    this.canvas.addEventListener('click', (e) => {
      this.onClick(e);
    })
  }

  private closeActiveCards() {
    this.cards.forEach(card => card.close());
  }
}
