document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#navbar ul');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
});
