const { name } = require("ejs");

const form = document.getElementById('form');
const username = document.getElementById('userName');
const password = document.getElementById('password');
const name = document.getElementById('name');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const userNameValue = username.value.trim(); 
    const passwordValue = password.value.trim(); 
    const nameValue = name.value.trim(); 
    const addressValue = address.value.trim(); 
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#\$%\^&\*])");
    const length = new RegExp("(?=.{8,})");


    if(userNameValue === ''){
        setError(username, 'Username is require')
    }else{
        setSuccess(username)
    }
    if(nameValue === ''){
        setError(name, 'Name is require')
    }else{
        setSuccess(name)
    }    
    if(addressValue === ''){
        setError(address, 'Address is require')
    }else{
        setSuccess(address)
    }
    //Password validation
    //lower case validation
    if (lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }
    //upper case validation
    if (upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }
    
    //number case validation
    if (number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }
    //special case validation
    if (special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }
    //length case validation
    if (length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    }
};
