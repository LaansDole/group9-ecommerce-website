// validate.js

function validateNameVendor() {
    const nameInput = document.querySelector('input[name="businessName"]');
    const nameError = document.querySelector('#nameError');
  
    const name = nameInput.value;
    if (name.length < 5) {
      nameError.textContent = 'Must be at least 5 characters long.';
      nameError.style.display = 'block';
    } else {
      nameError.style.display = 'none';
    }
  }
  
  function validateAddressVendor() {
    const addressInput = document.querySelector('input[name="businessAddress"]');
    const addressError = document.querySelector('#addressError');
  
    const address = addressInput.value;
    if (address.length < 5) {
      addressError.textContent = 'Must be at least 5 characters long.';
      addressError.style.display = 'block';
    } else {
      addressError.style.display = 'none';
    }
  }
  
  
  // Event listeners for input changes
  document.querySelector('input[name="businessName"]').addEventListener('input', validateNameVendor);
  document.querySelector('input[name="businessAddress"]').addEventListener('input', validateAddressVendor);
  
  