function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bntForChangeColor = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");



bntForChangeColor.addEventListener('click', () => {

  document.body.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = getRandomHexColor()

})

