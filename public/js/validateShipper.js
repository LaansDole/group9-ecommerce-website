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
  
  document.querySelector('input[name="name"]').addEventListener('input', () => {
    validateInput('name', 'nameErrorShipper');
  });
  