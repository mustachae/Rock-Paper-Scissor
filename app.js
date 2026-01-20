let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msg2 = document.querySelector("#msg2");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = (userChoice,compChoice) => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "black"; 
    msg2.innerText = `Your Choice : ${userChoice} \n Computer Choice : ${compChoice}`; 
}

const whoWin = (userWin,userChoice,compChoice) => {
    if(userWin === true){
               userScore++;
               userscore.innerText = `${userScore}`;
               msg.innerText = "You Win!";
               msg.style.backgroundColor = "green";
               msg2.innerText = `Your Choice : ${userChoice} \n Computer Choice : ${compChoice}`;
            } else {
               compScore++;
               compscore.innerText = `${compScore}`;
               msg.innerText = "Computer Win!";
               msg.style.backgroundColor = "red";
               msg2.innerText = `Your Choice : ${userChoice} \n Computer Choice : ${compChoice}`;
            }
}

 const playGame = (userChoice) => {
    const compChoice = genCompChoice(); //Generate computer choice

    let userWin = true;
    if(userChoice === compChoice){
        drawGame(userChoice,compChoice); //Draw Game
    } else {
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false : true;
            whoWin(userWin,userChoice,compChoice);
        }

        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "rock"? true : false;
            whoWin(userWin,userChoice,compChoice);
        }

        else if(userChoice === "scissors"){
            //rock,paper
            userWin = compChoice === "paper"? true : false;
            whoWin(userWin,userChoice,compChoice);
        }
    }
 }

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});