// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


const signupForm = document.querySelector('#signupForm');
const loginForm = document.querySelector('#loginForm');

const setErrorMessage = message => {
    const errorMessageContainer = document.querySelector('.error');
    errorMessageContainer.innerText = message;
    errorMessageContainer.style.display = 'block';
};

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const passwordValue = signupForm.querySelector('#password').value.trim();

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
        signupForm.submit();
    }

    const usernameValue = signupForm.querySelector('#userName').value.trim();

    if (usernameValue == "" && passwordValue == "") {
        window.alert('Please fill out all the required fields correctly');
    }
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const passwordValue = loginForm.querySelector('#password').value.trim();

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
        loginForm.submit();
    }

    const usernameValue = loginForm.querySelector('#userName').value.trim();

    if (usernameValue == "" && passwordValue == "") {
        window.alert('Please fill out all the required fields correctly');
    }
});

