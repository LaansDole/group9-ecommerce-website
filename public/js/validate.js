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
  