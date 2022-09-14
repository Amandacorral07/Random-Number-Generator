const number = document.querySelector(".number")
const button1 = document.querySelector(".generate")
const button2 = document.querySelector(".second")
const button3 = document.querySelector(".third")

const generateNumberOneToTen = () => {
  // Generate number between 1 and 10 
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
}

const generateNumberOneToOnehundred = () => {
  // Generate number between 1 and 100 
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
}
const generateNumberOneToOnethousand = () => {
  // Generate number between 1 and 100 
  const randomNumber = Math.floor(Math.random() * 1000 + 1);
  number.innerHTML = randomNumber;
}

button1.addEventListener('click', generateNumberOneToTen)

button2.addEventListener('click', generateNumberOneToOnehundred)

button3.addEventListener('click', generateNumberOneToOnethousand)

// console.log(rand);