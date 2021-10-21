


const ref = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector("#name-output"),
}


ref.input.addEventListener('input', () => ref.userName.textContent = ref.input.value);