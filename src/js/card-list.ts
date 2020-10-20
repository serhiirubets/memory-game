import { Card } from './card';
import {getRandomInteger} from './helpers';

const width = 200;
const height = 200;
const gap = 50;
const mainUrl = 'assets/img';

export class CardList {
  imageUrls: string[] = [];

  constructor(private ctx: CanvasRenderingContext2D, private cardAmount: number) {
    this.init();
  }

  private init() {
    this.generateImageUrls();
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
        const card = new Card(this.ctx);
        const x = i * width + i * gap;
        const y = j * height + j * gap;
        // card.render(x, y, width, height);
        const image = new Image(width, height);
        const index = getRandomInteger(0, urls.length - 1);
        const url = urls[index];
        urls.splice(index, 1);
        image.src = url;
        image.addEventListener('load', () => {
          card.drawImage(image, x, y);
        });
      }
    }
  }
}
