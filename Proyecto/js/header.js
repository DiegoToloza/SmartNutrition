jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'), 
        menu = $('.navigation ul');

    menuBtn.click(function() {
        if(menu.hasClass('show') ){
            menu.removeClass('show');
            frameNoShow()
        }else{
            menu.addClass('show')
            frameShow()
        }
    });

    const ul = document.querySelector('.navigation')
    function frameShow(){
        const animacion = ul.animate([
            {height: "0px"},
            {height: "221px"},
        ],{
            easing: "linear",
            iterations: 1,
            duration: 250
        });

        return animacion.finished;
    }

    function frameNoShow(){
        const animacion = ul.animate([
            {height: "221px"},
            {height: "0px"}
        ],{
            easing: "linear",
            iterations: 1,
            duration: 250
        });
        return animacion.finished;
    }
});