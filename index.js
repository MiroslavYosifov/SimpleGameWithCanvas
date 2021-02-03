import { Game } from './game.js';

class Main {
    handleEvent (e) {
        new Game(e).render();
    }
};

document.addEventListener("DOMContentLoaded", new Main());