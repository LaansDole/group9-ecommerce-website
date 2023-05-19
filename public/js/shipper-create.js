// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs




const hubNameSelect = document.getElementById('hubName');
const hubAddressInput = document.getElementById('hubAddress');

hubNameSelect.addEventListener('change', (event) => {
  const hubName = event.target.value;
  let hubAddress = '';

  if (hubName === 'GHTK') {
    hubAddress = 'GHTK Ho Chi Minh City';
  } else if (hubName === 'aha-move') {
    hubAddress = 'Ahamove in Da Nang city';
  } else if (hubName === 'viettel') {
    hubAddress = 'Viettel in Ha Noi city';
  } else if (hubName === 'ghn') {
    hubAddress = 'Giao hang nhanh in Da lat city';
  }

  // add check to ensure hubName is selected before setting hubAddress
  if (hubName !== '') {
    hubAddressInput.value = hubAddress;
  } else {
    hubAddressInput.value = '';
  }
});
