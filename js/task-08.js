const refs = {
    form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if(!email.value || !password.value){
        alert("Всі поля повинні бути заповнені");
        return;
    }
    const formData = {
        email: email.value,
        password: password.value,
        };
        console.log(formData);
        event.currentTarget.reset();
};