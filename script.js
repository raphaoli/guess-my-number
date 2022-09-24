"use strict";

const body = document.querySelector("body");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".secret-number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const guessEl = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let score = 20;
let highscore = 0;
let genRandNum = Math.trunc(Math.random() * 20) + 1;

const displayMessage = (string) => (message.textContent = string);

scoreEl.textContent = score;

btnCheck.addEventListener("click", function () {
	const guess = Number(guessEl.value);

	if (!guess) {
		displayMessage("🔴 No number!");
	} else if (guess === genRandNum) {
		score > highscore ? (highscore = score) : -1;
		highscoreEl.textContent = highscore;
		secretNumber.textContent = genRandNum;
		body.style.backgroundColor = "#56aa3f";
		secretNumber.style.width = "10rem";
		displayMessage("🏅 Correct!");
	} else if (guess > 20 || guess < 1) {
		displayMessage("🔴 Invalid number!");
	} else if (score >= 1) {
		score--;
		scoreEl.textContent = score;
		displayMessage(guess > genRandNum ? "📈 Too high!" : "📉 Too low!");
		score === 0 ? displayMessage("🔴 You lost") : -1;
	}
});

btnAgain.addEventListener("click", function () {
	score = 20;
	genRandNum = Math.trunc(Math.random() * 20) + 1;
	scoreEl.textContent = score;
	displayMessage("Start guessing...");
	body.style.backgroundColor = "#201f20";
	secretNumber.style.width = "5rem";
	secretNumber.textContent = "?";
	guessEl.value = "";
});
