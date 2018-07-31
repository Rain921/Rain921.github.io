
//ваплидация
 $('#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      email: {
        required: true,
        email: true
      }
     
    },
  });
 //up
 jQuery(window).scroll(function(){
         var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
 });
$("nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

 //menu mobile
/*
$('.navbar-toggle').click(function() {
    $('.navmobile .nav-open').fadeToggle();
  $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
  $('.hamburger').toggleClass('is-active');
  });*/
//menu mobile
      $(function() {
            $('.navbar-toggle, .navmobile').click(function() {

               $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
                $('.nav-open').fadeToggle();
                $('.nav-open').removeClass('nav-hide');
                $('.hamburger').toggleClass('is-active');
          });
           });


 $(".dropdown li a").hover(
    function () { $(this).addClass("activ") },   //при наведении курсора на элемент

    function () { $(this).removeClass("activ") } //при уводе курсора с элемента
);

$(document).ready(function(){
    $('[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 10 }, t);
    });
});
/*
//menu-sticky
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");

    }
    });*/
