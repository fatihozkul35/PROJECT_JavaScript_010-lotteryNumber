const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const displayBalls = document.querySelector(".displayBalls");
const displayLotterys = document.querySelector(".displayLotterys");
const text = document.querySelector(".text");
//****************?Events part */

button.addEventListener("click", howMuchNumber);

//***************?functions part */

function howMuchNumber() {
  let howMuch = input.value;
  displayBalls.innerHTML = "";
  displayLotterys.innerHTML = "";
  text.innerHTML = "";
  if (isNaN(howMuch) || howMuch === "") {
    const warning = document.querySelector(".warning");
    warning.innerHTML = "Please enter a number...🤬";
    setTimeout(function () {
      warning.innerHTML = "";
    }, 2000);
    input.value = "";
  } else {
    input.value = "";
    let numberArrays = [];

    for (let i = 0; i < howMuch; i++) {
      let sixRandomNumbers = createRandomNumber();
      numberArrays.push(sixRandomNumbers);
    }
    randomNumbersToLocalStorage("lottoNumberPackage", numberArrays);
    setTimeout(displayBall(), 10000);
    displayLotteryNumbers();
  }
}

function createRandomNumber() {
  let numberArray = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 50);
    numberArray.push(number);
  }
  return numberArray;
}

function randomNumbersToLocalStorage(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}

function displayLotteryNumbers() {
  const data = JSON.parse(localStorage.getItem("lottoNumberPackage"));
  let dataNew = data.map(function (e) {
    return `<div class="col ball d-flex justify-content-center align-items-center">${e}</div>`;
  });
  dataNew = dataNew.join("");
  displayLotterys.innerHTML = dataNew;
}

function displayBall() {
  const dataAt = createRandomNumber();
  let dataNew = dataAt.map(function (e) {
    return `<div class="col ball d-flex justify-content-center align-items-center">${e}</div>`;
  });
  dataNew = dataNew.join("");
  displayBalls.innerHTML = dataNew;
  displayBallSpin();
}
const randomDerece = [
  "rotateX(7200deg)",
  "rotateX(14380deg)",
  "rotateX(3600deg)",
];
function displayBallSpin() {
  document.getElementById("test").style.transform =
    randomDerece[Math.floor(Math.random() * 3)];
  document.getElementById("test").style.transition = "transform 2s";
  setTimeout(function () {
    text.innerHTML = "how many did you know";
  }, 5000);
}
