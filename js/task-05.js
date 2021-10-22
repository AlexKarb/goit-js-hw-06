
const ref = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector("#name-output"),
}


ref.input.addEventListener('input', () => 
  !ref.input.value ? ref.userName.textContent = "Anonymous" : ref.userName.textContent = ref.input.value
 );