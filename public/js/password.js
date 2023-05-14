const signupForm = document.querySelector('#signupForm');
const loginForm = document.querySelector('#loginForm');

const setErrorMessage = message => {
    const errorMessageContainer = document.querySelector('.error');
    errorMessageContainer.innerText = message;
    errorMessageContainer.style.display = 'block';
};

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const passwordValue = form.querySelector('#password').value.trim();

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    if (passwordValue === "" ||
        !lower.test(passwordValue) ||
        !upper.test(passwordValue) ||
        !number.test(passwordValue) ||
        !special.test(passwordValue) ||
        !length.test(passwordValue)) {

        setErrorMessage('Invalid Password');
    } else {
        window.alert('Success! Please go back and login again!');
        form.submit();
    }

    const usernameValue = form.querySelector('#userName').value.trim();

    if (usernameValue == "" && passwordValue == "") {
        window.alert('Please fill out all the required fields correctly');
    }
});

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const passwordValue = form.querySelector('#password').value.trim();

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    if (passwordValue === "" ||
        !lower.test(passwordValue) ||
        !upper.test(passwordValue) ||
        !number.test(passwordValue) ||
        !special.test(passwordValue) ||
        !length.test(passwordValue)) {

        setErrorMessage('Invalid Password');
    } else {
        form.submit();
    }

    const usernameValue = form.querySelector('#userName').value.trim();

    if (usernameValue == "" && passwordValue == "") {
        window.alert('Please fill out all the required fields correctly');
    }
});

