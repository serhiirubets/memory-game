import { Game } from './game';
const GAME_SIZE = 4; // Canvas with 4 X 4 size

const canvas = document.querySelector('#memory-canvas') as HTMLCanvasElement;
const game = new Game(GAME_SIZE, canvas);

game.start();
