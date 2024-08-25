//Generating a Random Number Between 1 & 6
function randomNumber() {
    var randomNum;
    randomNum = Math.random();
    randomNum = randomNum * 6;
    randomNum = Math.floor(randomNum) + 1;
    return randomNum;
}
//Image Changing function for player 1
function action1(n) {
    if (n === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    else if (n === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    else if (n === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    else if (n === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    else if (n === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    else if (n == 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
}
// Image Changing fucntion for Player 2
function action2(n) {
    if (n === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if (n === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if (n === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if (n === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if (n === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else if (n == 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}
//Display the Winner
function result(a, b) {
    if (a > b) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (a < b) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
// main program
var num1 = randomNumber();
var num2 = randomNumber();
action1(num1);
action2(num2);
result(num1, num2);







