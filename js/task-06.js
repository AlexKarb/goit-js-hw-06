
const inputEl = document.querySelector('#validation-input')
const inputLengthOfSymbol = Number(inputEl.dataset.length);


function addStyleValid() {
    if (inputEl.classList.contains('invalid')) {
        inputEl.classList.replace( "invalid", "valid")
    } else {
        inputEl.classList.add("valid")
    }
  }
 
function addStyleInvalid() {
    if ( inputEl.classList.contains('valid')) {
        inputEl.classList.replace("valid", "invalid")
    } else {
        inputEl.classList.add("invalid")
    }
}



inputEl.addEventListener('blur', () => {
    
    const usersLengthOfSymbols = inputEl.value.length;
    
    if (usersLengthOfSymbols === inputLengthOfSymbol) {
        return addStyleValid();
    }
        return addStyleInvalid();
}
)



