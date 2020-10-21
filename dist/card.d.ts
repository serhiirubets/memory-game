export declare class Card {
    private ctx;
    rowNumber: number;
    colNumber: number;
    height: number;
    width: number;
    image: HTMLImageElement;
    opened: boolean;
    x: number;
    y: number;
    readonly id: string;
    constructor(ctx: CanvasRenderingContext2D, rowNumber: number, colNumber: number, height: number, width: number, image: HTMLImageElement);
    show(): void;
    close(): void;
    render: () => void;
    drawImage(): void;
}
