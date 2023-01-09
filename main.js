var menu = document.querySelector('nav ul');
var menubar = document.querySelector('nav .menu-icon');
var iconMenu = docu.querySelector('nav .menu-icon img');

menubar.addeventlistemer('click' , function(){
    menu.classList.toggle('active');
})