import { Card } from './card';
import { getRandomInteger } from './helpers';

const width = 200;
const height = 200;
const mainUrl = 'assets/img';

export class CardList {
  imageUrls: string[] = [];
  cards: Card[] = [];
  activeCardCount = 0;
  prevActiveCard: Card | null = null;
  currentActiveCard: Card | null = null;
  winnerCardIds: string[] = [];

  constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D, private cardAmount: number) {
    this.init();
  }

  public render(): void {
    const urls = [...this.imageUrls];
    for (let i = 0; i < this.cardAmount; i++) {
      for (let j = 0; j < this.cardAmount; j++) {
        this.renderCard(urls, i, j);
      }
    }
  }

  public onClick = (e: MouseEvent): void => {
    const canvas = this.canvas;
    const elemLeft = canvas.offsetLeft + canvas.clientLeft;
    const elemTop = canvas.offsetTop + canvas.clientTop;
    const x = e.pageX - elemLeft;
    const y = e.pageY - elemTop;

    this.cards.forEach((card: Card) => {
      if (y > card.y && y < card.y + card.height && x > card.x && x < card.x + card.width) {
        if (this.winnerCardIds.includes(card.id) || this.prevActiveCard?.id === card.id) {
          return;
        }
        this.activeCardCount += 1;
        if (this.activeCardCount > 2) {
          this.closeActiveCards();
          this.activeCardCount = 1;
        }
        this.compare(card);
        card.show();
      }
    });
  };

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

  private renderCard(urls: string[], i: number, j: number) {
    const image = new Image(width, height);
    const index = getRandomInteger(0, urls.length - 1);
    const url = urls[index];
    const card = new Card(this.ctx, i, j, width, height, image);

    this.cards.push(card);

    urls.splice(index, 1);
    image.src = url;

    image.addEventListener('load', card.render);
  }

  private addListeners() {
    this.canvas.addEventListener('click', this.onClick);
  }

  private resetActiveCardsState() {
    this.activeCardCount = 0;
    this.prevActiveCard = null;
    this.currentActiveCard = null;
  }

  private closeActiveCards() {
    this.prevActiveCard?.close();
    this.currentActiveCard?.close();
    this.resetActiveCardsState();
  }

  private compare(card: Card) {
    if (!this.prevActiveCard) {
      this.prevActiveCard = card;
      return;
    }

    this.currentActiveCard = card;

    if (this.prevActiveCard.image.src === card.image.src) {
      this.setWinnerCards();
    }
  }

  private setWinnerCards() {
    this.winnerCardIds.push(this.prevActiveCard?.id as string, this.currentActiveCard?.id as string);
    this.resetActiveCardsState();

    if (this.winnerCardIds.length === this.cardAmount * 2) {
      this.gameOver();
    }
  }

  private gameOver() {
    alert('Congratulation, you won');
  }
}
