function toggleMenu() {
    var menu = document.querySelector(".menu");
    if (menu) {
        console.log('Toggle menu');
        menu.classList.toggle("menu-open");

        // Adiciona um evento de clique para fechar o menu quando o usuário clicar fora
        if (menu.classList.contains("menu-open")) {
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
}

function closeMenu() {
    var menu = document.querySelector(".menu");
    if (menu) {
        console.log('Close menu');
        menu.classList.remove("menu-open");
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Função que verifica se o clique foi fora do menu
function closeMenuOnClickOutside(event) {
    var menu = document.querySelector(".menu");
    var burgerIcon = document.getElementById("burguer");
    if (menu && !menu.contains(event.target) && !burgerIcon.contains(event.target)) {
        closeMenu();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    var menuItems = document.querySelectorAll('.menu a');
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }
});
