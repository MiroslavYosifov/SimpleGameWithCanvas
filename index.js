import { Game } from './game.js';

class Main {
    handleEvent (e) {
        new Game(20).render();
        console.log(e);
    }
};

document.addEventListener("DOMContentLoaded", new Main());