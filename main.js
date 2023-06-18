let player_1 = document.querySelector('.player-1');
let player_2 = document.querySelector('.player-2');

const new_game = document.querySelector('.new-game');
const throw_cube = document.querySelector('.throw-cube');
const leave = document.querySelector('.leave');

let total_score = document.querySelectorAll('.total-score');
let current_score = document.querySelectorAll('.current-score');
let img = document.querySelector('.cube');

let isPlayer1 = true;


throw_cube.addEventListener('click', () => {
    if (total_score[0].innerHTML <= 10 && total_score[1].innerHTML <= 10) {
        let random = Math.trunc(Math.random() * 6) + 1;
        img.src = `img/dice${random}.png`
        if (isPlayer1) {
            if (random == 1) {
                current_score[0].innerHTML = 0;
                isPlayer1 = false;
                player_1.classList.toggle('hidden')
                player_2.classList.toggle('hidden')
            } else {
                current_score[0].innerHTML = parseInt(current_score[0].innerHTML) + random;
            }   
        } else {
            if (random == 1) {
                current_score[1].innerHTML = 0;
                isPlayer1 = true;
                player_1.classList.toggle('hidden')
                player_2.classList.toggle('hidden')
        } else {
            current_score[1].innerHTML = parseInt(current_score[1].innerHTML) + random;
        }
}}})

leave.addEventListener('click', () => {
    if (total_score[0].innerHTML <= 10 && total_score[1].innerHTML <= 10) {
        if (isPlayer1) {
            total_score[0].innerHTML = parseInt(total_score[0].innerHTML) + parseInt(current_score[0].innerHTML);
            current_score[0].innerHTML = 0;
            if (total_score[0].innerHTML >= 10) {
                player_1.classList.add('win')
                player_2.classList.add('lose')
            }
            isPlayer1 = false;
            player_1.classList.toggle('hidden')
            player_2.classList.toggle('hidden')
        } else {
            total_score[1].innerHTML = parseInt(total_score[1].innerHTML) + parseInt(current_score[1].innerHTML);
            current_score[1].innerHTML = 0;
            if (total_score[1].innerHTML >= 10) {
                player_2.classList.add('win')
                player_1.classList.add('lose')
            }
            isPlayer1 = true;
            player_1.classList.toggle('hidden')
            player_2.classList.toggle('hidden')
        }
}})

new_game.addEventListener('click', () => {
    total_score[0].innerHTML = 0;
    total_score[1].innerHTML = 0;
    current_score[0].innerHTML = 0;
    current_score[1].innerHTML = 0;
    isPlayer1 = true;

    if(!player_2.classList.contains('hidden')) {
        player_1.classList.remove('hidden');
        player_2.classList.add('hidden');
    }

    if(player_1.classList.contains('win')) {
        player_1.classList.remove('win');
    } else if (player_1.classList.contains('lose')){
        player_1.classList.remove('lose');
    }

    if (player_2.classList.contains('win')) {
        player_2.classList.remove('win');
    } else if (player_2.classList.contains('lose')){
        player_2.classList.remove('lose');
    }
})
