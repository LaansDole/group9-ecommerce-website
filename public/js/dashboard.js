const orderDetails = document.querySelector('.ord-details');
const showOverlayBtn = document.getElementById('show-overlay');
const hideOverlayBtn = document.getElementById('hide-overlay');

function showOverlay() {
    orderDetails.classList.add('active');
}

function hideOverlay() {
    orderDetails.classList.remove('active');
}


showOverlayBtn.addEventListener('click', showOverlay);
hideOverlayBtn.addEventListener('click', hideOverlay);