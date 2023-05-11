// const hubNameSelect = document.getElementById('hubName');
//     const hubAddressInput = document.getElementById('hubAddress');
  
//     hubNameSelect.addEventListener('change', (event) => {
//       const hubName = event.target.value;
//       let hubAddress = '';
  
//       if (hubName === 'HCM') {
//         hubAddress = 'District 3, HCM city';
//       } else if (hubName === 'DN') {
//         hubAddress = 'Some address in DN city';
//       } else if (hubName === 'HN') {
//         hubAddress = 'Some address in HN city';
//       }
  
//       hubAddressInput.value = hubAddress;
//     });


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
