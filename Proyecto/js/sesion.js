jQuery('document').ready(function($){

    var btnReg = $('.form .titles .sign-up');
    var btnIS = $('.form .titles .sign-in');
    var menuReg = $('.form .sign-up');
    var menuIS = $('.form .sign-in');

    btnReg.click(function() {
        if(btnReg.hasClass('no-active') ){
            btnReg.removeClass('no-active')
            btnIS.addClass('no-active')
            menuReg.addClass('active')
            menuIS.removeClass('active')
        }
    });

    btnIS.click(function() {
        if(btnIS.hasClass('no-active') ){
            btnReg.addClass('no-active')
            btnIS.removeClass('no-active')
            menuReg.removeClass('active')
            menuIS.addClass('active')
        }
    });

});