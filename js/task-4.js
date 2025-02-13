const form = document.querySelector(".login-form");

form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.elements.email.value.trim() === '' || form.elements.password.value.trim() === '') {
        alert("All form fields must be filled in");
    } else {
        const data = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value.trim(),
        };
        console.log(data);
        form.reset();
    }
})

