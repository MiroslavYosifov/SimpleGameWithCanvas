let card = document.querySelector('[data-flip-card]');
let cardFront = document.querySelector('[data-flip-card-front-side]');
let cardBack = document.querySelector('[data-flip-card-back-side]');
let isSwitched = false;

document.getElementById('btn').addEventListener('click', flipCard);

function flipCard (e) {

    card.classList.add('is-switched');
    
    if(!isSwitched) {
        card.classList.add('is-switched');
        cardFront.classList.remove('is-active');
        cardBack.classList.add('is-active');
        isSwitched = true;
    } else {
        card.classList.remove('is-switched');
        cardBack.classList.remove('is-active');
        cardFront.classList.add('is-active');
        isSwitched = false;
    }
}