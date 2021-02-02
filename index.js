import { Game } from './game.js';

class Main {
    handleEvent (e) {
        new Game(e).render();
        console.log(e);
    }
};

document.addEventListener("DOMContentLoaded", new Main());