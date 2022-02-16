const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const display = document.querySelector(".display");
//****************?Events part */

button.addEventListener("click", howMuchNumber);

//***************?functions part */

function howMuchNumber() {
  let howMuch = input.value;
  let numberArrays = [];

  for (let i = 0; i < howMuch; i++) {
    let sixRandomNumbers = createRandomNumber();
    numberArrays.push(sixRandomNumbers);
  }

  randomNumbersToLocalStorage("lottoNumberPackage", numberArrays);
  displayBall();
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

function displayBall() {
  const data = JSON.parse(localStorage.getItem("lottoNumberPackage"));
  console.log(data);
  let dataNew = data.map(function (e) {
    // e : ilk array, i = index
    // <div class="col ball d-flex justify-content-center align-items-center">
    //   5
    // </div>;

    temporaryData = "";
    for (let i = 0; i < 6; i++) {
      temporaryData += `<div class="col ball d-flex justify-content-center align-items-center">${e[i]}</div>`;
      //   return `<div class="col ball d-flex justify-content-center align-items-center">${e[i]}</div>`;
    }
    return temporaryData;
  });
  dataNew = dataNew.join("");
  display.innerHTML = dataNew;
}
