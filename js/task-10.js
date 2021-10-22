function getRandomHexColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
};


const ref = {
  inputForNumberOfBox: document.querySelector("#controls > input"),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxForElem: document.querySelector('#boxes'),
};

 let valueOfSize = 30;



function createBoxes(amount){
  amount = ref.inputForNumberOfBox.value;
  const boxsArray = [];
  
  for (let i = 1; i <= amount; i++){

  const box = document.createElement("div");
  
    box.style.width = String(valueOfSize) + "px";
    box.style.height = String(valueOfSize) + "px";
    box.style.backgroundColor = getRandomHexColor();
  
    boxsArray.push(box);

  valueOfSize += 10;
  };
 
  return ref.boxForElem.append(...boxsArray);

};

function destroyBoxes() {
  ref.boxForElem.innerHTML = "";
  valueOfSize = 30;
}
 

ref.btnCreate.addEventListener('click', () => createBoxes());
ref.btnDestroy.addEventListener('click', () => destroyBoxes());



