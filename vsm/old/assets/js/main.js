

  //   var path = document.querySelector('#topLined');
  // var len = Math.round(path.getTotalLength() );
  // alert("Длина пути - " + len);

var image = document.getElementsByClassName('par-i');
new simpleParallax(image, {
    scale: 1.1,
    orientation: 'up',
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

(function($) {

    $(function() {

    

      $('#up').click(function() {

        $('html, body').animate({scrollTop: 0},500);

        return false;

      })

    

    })

    })(jQuery)

    var btn = $('#up');



$(window).scroll(function() {

  if ($(window).scrollTop() > 3000) {

    btn.addClass('show');

  } else {

    btn.removeClass('show');

  }

});

btn.on('click', function(e) {

    e.preventDefault();

    $('html, body').animate({scrollTop:0}, '300');

});

$(window).scroll(function() {
  var height = $(window).scrollTop();
   /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 100){
  $('header').addClass('header-fixed');
  } else{
  /*Если меньше 100px удаляем класс для header*/
  $('header').removeClass('header-fixed');
  }
  });

$(document).ready(function() {



  $('.menu-btn').on('click', function(e) {

      e.preventDefault();

      

      if ( !$('body').hasClass('mobopen') ) {
        $('#Group_6_Copy').attr('transform', 'translate(68.916) rotate(180)');
      } else {
        $('#Group_6_Copy').attr('transform', 'translate(28.916) rotate(180)');
      }

          
  $('body').toggleClass('mobopen');
  $('html').toggleClass('mobopen');
  $('.mob-m').toggleClass('on');
    })

});


  

$('.drop').on( "click", function(event) {

  event.preventDefault();

  let $this = $(this).find('.drop-menu');


 
  
  $('.drop-menu').not($this).slideUp();
  $('.drop-menu').removeClass('active');

  
  if ( $this.is(":hidden") ) {
      
      $this.addClass('active');

      $this.slideToggle( "slow", function() {

      });
  } else {
      $this.slideToggle( "slow", function() {

      });
      $this.removeClass('active');
  }
  
  return false;
});
$(document).mouseup(function (e) {
  var container = $(".team--item.show");
  if (container.has(e.target).length === 0){
    container.removeClass('show');
  }
});

$('.link--show').on( "click", function(event) {

  event.preventDefault();

  let $this = $(this).closest('.team--item');


 $('.team--item').removeClass('show');

  $this.addClass('show');
  $this.removeClass('off');
  
  return false;
});

$('.link--hide').on( "click", function(event) {

  event.preventDefault();

  let $this = $(this).closest('.team--item');


  $this.removeClass('show');
  $this.addClass('off');


  
  return false;
});


$(document).ready(function() {

  

  var swiperDeals = new Swiper('.deal--slider .swiper-container', {
      slidesPerView: 'auto',
       loop: true,
      // spaceBetween: 30,
      freeMode: true,
      //  centeredSlides: true,
      navigation: {
        nextEl: '.navarr--next.navarr',
        prevEl: '.navarr--prev.navarr',
      },
      // pagination: {
      //     el: '.swiper-pagination',
      //     type: 'progressbar',
      // },
      // scrollbar: {
      //     el: '.swiper-scrollbar',
      //     hide: !1,
      //     draggable: true,
      //     snapOnRelease: !1,
      //     dragSize: 100
      // },
  });
$(".portfolio--slide").each(function(index, element){
    var $this = $(this);
    $this.addClass("load-" + index);

});
  $(".portfolio--item").each(function(index, element){
    var $this = $(this);
    let $item = $this.addClass("instance-" + index);
    let $cl = $this.find('.portfolio--show');

    $cl.on( "click", function() {

      $('.load-' + index).addClass('show').show();
      
      $('.portfolio--slider').addClass('show').show();
      
      
    });

});


$('.portfolio--back').on( "click", function() {

  $('.portfolio--slide').removeClass('show').hide();
  
  $('.portfolio--slider').removeClass('show').show();
  
  
});

  var mySwiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
          if(screenWidth < 1023 && mySwiper == undefined) {            
            var mySwiper = new Swiper('.portfolio--slider .swiper-container', {
              slidesPerView: '1',
              loop: true,
              effect: 'fade',
              // spaceBetween: 30,
              // freeMode: true,
              //  centeredSlides: true,
              navigation: {
                nextEl: '.navarr--next.navarr',
                prevEl: '.navarr--prev.navarr',
              },
              // pagination: {
              //     el: '.swiper-pagination',
              //     type: 'progressbar',
              // },
              // scrollbar: {
              //     el: '.swiper-scrollbar',
              //     hide: !1,
              //     draggable: true,
              //     snapOnRelease: !1,
              //     dragSize: 100
              // },
          });
        } else if (screenWidth > 1024 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;     
        }        
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function(){
        initSwiper();        
    });

  

  $('.form-op a').each(function() {
    $(this).on("click", function(event){
      event.preventDefault();
  
      $('.recommendation--wr').show(0);
      $('.sdel .about-counter').addClass('onform');
      $('html').addClass('onform');
    });
  });


  $( ".recommendation--close" ).hover(
    function() {
      $(this).find('#Rectangle').attr('fill-opacity', '1');
    }, function() {
      $(this).find('#Rectangle').attr('fill-opacity', '0.181017889');
    }
  );

  $( ".portfolio--back" ).hover(
    function() {
      $(this).find('#Rectangle').attr('fill-opacity', '1');
    }, function() {
      $(this).find('#Rectangle').attr('fill-opacity', '0.27');
    }
  );

  $('.recommendation--close').on("click", function(event){
    event.preventDefault();

    $('.recommendation--wr').hide();
    $('.sdel .about-counter').removeClass('onform');
      $('html').removeClass('onform');
  });

  $('.scrbl').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
            scrollTop: $(dest).offset().top 
        }, 500
        );
    }
    return false;
});




});