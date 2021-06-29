let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let body = document.getElementById("body");

menu.addEventListener('click', function() {
    nav.classList.toggle('nav_active');
    menu.classList.toggle('menu_active');
    body.classList.toggle('body_active');
});
