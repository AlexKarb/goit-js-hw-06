function getRandomHexColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
};


const ref = {
  inputForNumberOfBox: document.querySelector("#controls > input"),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxForElem: document.querySelector('#boxes'),
};




function createBoxes(amount){
  amount = ref.inputForNumberOfBox.value;
  const boxsArray = [];

  for (let i = 1; i <= amount; i++){
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    boxsArray.push(box);
  };
  
  
  boxsArray.reduce((valueOfSize, box) => {
    valueOfSize += 10;
      
    box.style.width = String(valueOfSize) + "px";
    box.style.height = String(valueOfSize) + "px";
   

    return valueOfSize
  }, 20);
  

  return ref.boxForElem.append(...boxsArray);

};

function destroyBoxes() {
  ref.boxForElem.innerHTML = "";
}
 

ref.btnCreate.addEventListener('click', () => createBoxes());
ref.btnDestroy.addEventListener('click', () => destroyBoxes());



