(function () {
    var burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
    const menu = document.querySelector('.contacts-menu');
    burgerItem.addEventListener('click', function() {
        menu.classList.add('contacts-menu-active');
    });
    document.querySelector('.header-sidebar-close').addEventListener('click', function() {
        menu.classList.remove('contacts-menu-active');
    });
}());