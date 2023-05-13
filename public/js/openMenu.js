/*Menu bar ob mobile device */
window.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('#menu-icon');
    var navbar = document.querySelector('#navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });
});
