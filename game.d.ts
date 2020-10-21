export declare class Game {
    private cardAmount;
    private canvas;
    ctx: CanvasRenderingContext2D;
    constructor(cardAmount: number, canvas: HTMLCanvasElement);
    private preInit;
    start(): void;
}
