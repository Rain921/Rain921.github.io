
$(function() {
    $('.header').mouseover(function() {
        $('.header-bottom').show();
        $('.header-bottom').css('margin-top','8px');
        $('.header-bottom').addClass('bottom-img');
        $('.header-top').addClass('top-img');
        /*$(this).mousemove(function(event) {
            $('.header-top').css('bottom', event.pageX);
            $('.header-top').css('top', event.pageY);            
        }); */       
    })/*.mouseout(function() {
        $('.header-bottom').css('margin-top','-55px');
    });*/
});