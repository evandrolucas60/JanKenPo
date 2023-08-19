let userScore = 0;
let computerScore=0;
const cpu_move = document.querySelector(".cpu-img");
const user_move = document.querySelector(".user-img");
const userScore_span = document.getElementById("user-score");
const computerScore_Score_span = document.getElementById("computer-score");
const soreBoard_div = document.querySelector(".score-boar");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//gera os movimentos do CPU
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    if (choices[randomNumber] === "r") {
        var rockImg = "./img/GorillaRock.png";
        cpu_move.src = rockImg;
    }
    if (choices[randomNumber] === "p") {
        var paperImg = "./img/GorillaPaper.png";
        cpu_move.src = paperImg;
    }
    if (choices[randomNumber] === "s" ) {
        var scissorsImg = "./img/GorillaScissors.png";
        cpu_move.src = scissorsImg;
    }

    return choices[randomNumber];
}


function convertToWord(letter) {
    if (letter === "r") {
        return "Pedra"
    }
    if (letter === "p") {
        return "Papel"
    }

    return "Tesoura"
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_Score_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "CPU".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} vence ${convertToWord(computerChoice)}${smallCompWord} Você Venceu!!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_Score_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "CPU".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} perde ${convertToWord(computerChoice)}${smallCompWord} Você perdeu!!`
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "CPU".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} igual ${convertToWord(computerChoice)}${smallCompWord} empatou!!`
}



function game(userChoice) {
    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice, computerChoice);  
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

    const myTimeout = setTimeout(myGreeting, 5000);

    function myGreeting() {
        var standbyCpU = "./img/alexkidd-gen_janken_gorilla.gif";
        cpu_move.src = standbyCpU;
}

}

//Captura a jogada do player
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();