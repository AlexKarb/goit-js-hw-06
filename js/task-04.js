
const ref = {
    valueEl: document.querySelector("#value"),
    decrementBtn: document.querySelector('[data-action= "decrement"]'),
    incrementBtn: document.querySelector('[data-action= "increment"]'),
   
}


let counterValue = 0;


const decreaseValue = () => ref.valueEl.textContent = counterValue -= 1;
const increaseValue = () => ref.valueEl.textContent = counterValue += 1;



ref.decrementBtn.addEventListener('click', () => decreaseValue())
ref.incrementBtn.addEventListener('click', () => increaseValue())



