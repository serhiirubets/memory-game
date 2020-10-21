import { Game } from './game';

const canvas = document.querySelector('#memory-canvas') as HTMLCanvasElement;
const game = new Game(4, canvas);

game.start();
