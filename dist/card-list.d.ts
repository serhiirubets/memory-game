import { Card } from './card';
export declare class CardList {
    private canvas;
    private ctx;
    private cardAmount;
    imageUrls: string[];
    cards: Card[];
    activeCardCount: number;
    prevActiveCard: Card | null;
    currentActiveCard: Card | null;
    winnerCardIds: string[];
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, cardAmount: number);
    render(): void;
    onClick: (e: MouseEvent) => void;
    private init;
    private generateImageUrls;
    private renderCard;
    private addListeners;
    private resetActiveCardsState;
    private closeActiveCards;
    private compare;
    private setWinnerCards;
    private gameOver;
}
