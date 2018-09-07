
$(function() {
    $('.header').mouseover(function() {
        $('.header-bottom').show();
        $('.header-bottom').css('margin-top','-5px');
        /*$(this).mousemove(function(event) {
            $('.header-top').css('bottom', event.pageX);
            $('.header-top').css('top', event.pageY);            
        }); */       
    })/*.mouseout(function() {
        $('.header-top').hide();
    });*/
});