// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


function validateInput(inputName, errorId) {
  const inputElement = document.querySelector(`input[name="${inputName}"]`);
  const errorElement = document.querySelector(`#${errorId}`);

  const inputValue = inputElement.value;
  if (inputValue.length < 5) {
    errorElement.textContent = 'Must be at least 5 characters long.';
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
}

document.querySelector('input[name="businessName"]').addEventListener('input', () => {
  validateInput('businessName', 'nameErrorVendor');
});

document.querySelector('input[name="businessAddress"]').addEventListener('input', () => {
  validateInput('businessAddress', 'addressErrorVendor');
});
  
  