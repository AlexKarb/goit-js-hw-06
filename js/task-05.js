//  <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
// 
// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его текущее 
// значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".



const ref = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector("#name-output"),
}


ref.input.addEventListener('input', () => ref.userName.textContent = ref.input.value);