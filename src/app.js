/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function randomCard() {
  const topSuit = document.querySelector("#top-suit");
  const cardNum = document.querySelector("#num");
  const bottomSuit = document.querySelector("#bottom");
  const button = document.querySelector("#button");

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♦", "♥", "♠", "♣"];

  generateCard();
  function randomArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function generateCard() {
    let randomSuit = randomArray(suits);
    let randomNum = randomArray(numbers);

    cardNum.innerHTML = randomNum;
    topSuit.innerHTML = randomSuit;
    bottomSuit.innerHTML = randomSuit;
    if (randomSuit == suits[0] || randomSuit == suits[1]) {
      topSuit.style.color = "red";
      bottomSuit.style.color = "red";
      cardNum.style.color = "red";
    } else {
      topSuit.style.color = "black";
      bottomSuit.style.color = "black";
      cardNum.style.color = "black";
    }
  }

  button.addEventListener("click", generateCard);

  setInterval(function() {
    generateCard();
  }, 10000);
};
