const formEl = document.querySelector(".login-form");



formEl.addEventListener('submit', (e) => {

    e.preventDefault()

    const { elements: { email, password } } = e.currentTarget;

    if (!email.value || !password.value){
      return  alert("Все поля должны быть заполнены!")
    }

    const userData = {
        email: email.value,
        password: password.value,
    }

    console.log(userData)
    e.currentTarget.reset();
    
});



