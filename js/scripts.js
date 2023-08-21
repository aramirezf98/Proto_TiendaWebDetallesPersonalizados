jQuery('document').ready(function($){
    var btnMenu = $('.menu-icono'),
    menu = $('#navbarHeader');

    btnMenu.click(function(){
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
        
    });
});
