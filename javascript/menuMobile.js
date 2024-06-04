function toggleMenu() {
    var menu = document.querySelector(".menu");
    if (menu) {
        console.log('Toggle menu');
        menu.classList.toggle("menu-open");
    } else {
        console.error('Menu element not found');
    }
}

function closeMenu() {
    var menu = document.querySelector(".menu");
    if (menu) {
        console.log('Close menu');
        menu.classList.remove("menu-open");
    } else {
        console.error('Menu element not found');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    var menuItems = document.querySelectorAll('.menu a');
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    } else {
        console.error('Menu items not found');
    }
});