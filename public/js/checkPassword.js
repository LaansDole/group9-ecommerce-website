// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data) {
  //regular expression patter in js
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#\$%\^&\*])");
  const length = new RegExp("(?=.{8,})");

  //lower case validation
  if (lower.test(data)) {
    lowerCase.classList.add('valid');
  } else {
    lowerCase.classList.remove('valid');
  }
  //upper case validation
  if (upper.test(data)) {
    upperCase.classList.add('valid');
  } else {
    upperCase.classList.remove('valid');
  }

  //number case validation
  if (number.test(data)) {
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
  }
  //special case validation
  if (special.test(data)) {
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
  }
  //length case validation
  if (length.test(data)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
  }
}

//show hide password
toggleEye.onclick = function () {
  var pswrd = document.getElementById("password");
  if (pswrd) {
    if (pswrd.type == "password") {
      pswrd.setAttribute("type", "text");
      toggleEye.classList.add('hide');
    } else {
      pswrd.setAttribute("type", "password");
      toggleEye.classList.remove('hide');
    }
  } else {
    console.error("Could not find password input element.");
  }
}

