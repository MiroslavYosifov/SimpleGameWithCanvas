let card = document.querySelector('[data-flip-card]');
let cardFront = document.querySelector('[data-flip-card-front-side]');
let cardBack = document.querySelector('[data-flip-card-back-side]');
let isSwitched = false;

document.getElementById('btn').addEventListener('click', flipCard);

function flipCard (e) {

    card.classList.add('is-switched');
    
    if(!isSwitched) {
        card.classList.add('is-switched');
        isSwitched = true;
    } else {
        card.classList.remove('is-switched');
        isSwitched = false;
    }
}

