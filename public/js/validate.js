// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


function validateUsername() {
    const usernameInput = document.querySelector('input[name="userName"]');
    const usernameError = document.querySelector('#userNameError');
  
    const username = usernameInput.value;
    if (username.length < 8) {
      usernameError.textContent = 'Must be at least 8 - 15 characters long.';
      usernameError.style.display = 'block';
    } else {
      usernameError.style.display = 'none';
    }
  }
  
  // Event listener for input change
  document.querySelector('input[name="userName"]').addEventListener('input', validateUsername);
  