
$( document ).ready(function() {
	
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 4000,
  
});
$('.slider-review').not('.slick-initialized').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows:true,
  prevArrow: '<div data-role="none" class="card-slider__btn card-slider__btn--prev" aria-label="Previous" tabindex="0" role="button" /></div>',
  nextArrow: '<div data-role="none" class="card-slider__btn card-slider__btn--next" aria-label="Next" tabindex="0" role="button" /></div>',
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
     {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    
  ]
  
});

 
 
          
});

   


   
   $(document).ready(function(){
    $('#time').timepicker({});
    $.timepicker.regional['ru'] = {
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Мин.',
        secondText: 'Секунды',
        millisecText: 'Миллисекунды',
        timezoneText: 'Часовой пояс',
        currentText: 'Сейчас',
        closeText: 'Закрыть',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };
    $.timepicker.setDefaults($.timepicker.regional['ru']);
    $('#rest_example_1').datetimepicker({
        altField: "#alt_example_1_alt",
        hourMin: (new Date()).getHours() < 14 ? 9 : 14,
        hourMax: 17,
        maxDate: 1,
        minDate: 1
    });
});
 

 //menu mobile
      $(function() {
            $('.navbar-toggle, .navmobile').click(function() {

               $('.navbar-toggle,html').toggleClass('navbar-on, overflow');
                $('.nav-open').fadeToggle();
                $('.nav-open').removeClass('nav-hide');
                $('.hamburger').toggleClass('is-active');
          });
     
          });


//validation
    var locationURL = window.location.search;
  if (locationURL == "sample-page") {
    var validationName = "Обязательно для заполнения ";
    var validationNameMax = "От 2 до 16 букв";
    var validationPhone = "Введите корректный номер";
    var validationEmail = "Введите корректный E-mail";
  }
  else  {
    var validationName = "Обязательно для заполнения ";
    var validationNameMax = "От 2 до 16 букв";
    var validationPhone = "Введите корректный номер";
    var validationEmail = "Введите корректный E-mail";
    var validationDate = "Выберете дату";
    var validationTime = "Выберете время";
  }

 
 $('form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      trip: {
        required: true,
      },
      time: {
        required: true,
      },
      phone: {
        required: true
      }
    },
    messages: {
      name: {
        required: validationName,
        minlength: validationNameMax,
        maxlength: validationNameMax
      },
     trip: {
        required: validationDate,
      },
      time: {
        required: validationTime,
      },
      phone: {
        required: validationPhone
      }
    }

  });

 $(function($){
  $('[name="phone"]').mask("+38(999) 999-9999");
});



 

   
