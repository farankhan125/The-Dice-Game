function randomIndex1() {
    randomNum1 = Math.floor((Math.random() * 6) + 1)
    return "Images/dice" + randomNum1 + ".png"
}

function randomIndex2() {
    randomNum2 = Math.floor((Math.random() * 6) + 1)
    return "Images/dice" + randomNum2 + ".png"
}

function winner() {
    if (randomNum1 > randomNum2) {
        winner = "Player 1"
        document.querySelectorAll("div")[6].style.visibility = "visible";
        document.querySelector("h1").innerHTML = "CONGRATULATIONS, PLAYER 1 WON THE GAME!";
    } else if (randomNum1 < randomNum2) {
        winner = "Player 2"
        document.querySelectorAll("div")[8].style.visibility = "visible";
        document.querySelector("h1").innerHTML = "CONGRATULATIONS, PLAYER 2 WON THE GAME!";
    } else {
        winner = "Draw"
        document.querySelectorAll("div")[9].style.visibility = "visible";
        document.querySelector("h1").innerHTML = "GAME IS DRAW!";
    }
    return winner
}

document.getElementsByClassName("dicee1")[0].setAttribute("src", randomIndex1())
document.getElementsByClassName("dicee2")[0].setAttribute("src", randomIndex2())

winner()