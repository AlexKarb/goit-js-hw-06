
const inputEl = document.querySelector('#validation-input')
const inputLengthOfSymbol = Number(inputEl.dataset.length);


function addStyleValid() {
    return  inputEl.classList.contains('invalid') ? inputEl.classList.replace( "invalid", "valid") : inputEl.classList.add("valid");
}
 
function addStyleInvalid() {
    return  inputEl.classList.contains('valid') ? inputEl.classList.replace("valid", "invalid") : inputEl.classList.add("invalid");
}



inputEl.addEventListener('blur', () => {
    
    const usersLengthOfSymbols = inputEl.value.length;
    
    return usersLengthOfSymbols === inputLengthOfSymbol ? addStyleValid() : addStyleInvalid();
    })



