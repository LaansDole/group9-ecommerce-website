const hubNameSelect = document.getElementById('hubName');
    const hubAddressInput = document.getElementById('hubAddress');
  
    hubNameSelect.addEventListener('change', (event) => {
      const hubName = event.target.value;
      let hubAddress = '';
  
      if (hubName === 'HCM') {
        hubAddress = 'District 3, HCM city';
      } else if (hubName === 'DN') {
        hubAddress = 'Some address in DN city';
      } else if (hubName === 'HN') {
        hubAddress = 'Some address in HN city';
      }
  
      hubAddressInput.value = hubAddress;
    });