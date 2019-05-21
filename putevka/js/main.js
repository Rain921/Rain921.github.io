$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});

var newClick = 0;
$(document).mouseup(function (e) {
    if ($(e.target).closest("#dateFrom").length != 0) {
        newClick++;
        if (newClick % 2 == 0) {
            $("#dateFrom").blur();
        }
    } else {
        newClick = 0;
    }

    if ($(".datepicker--cell").hasClass("-selected-")) {
        $(".-selected-").addClass("-disabled-");
    }
});


if ($('form1').length) {
    document.getElementById('form1').addEventListener('submit', function (evt) {
        var http = new XMLHttpRequest(),
            f = this;
        evt.preventDefault();
        http.open("POST", "mail.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("&name=" + f.name.value + "&phone=" + f.phone.value + "&commond=" + f.commond.value);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                f.name.value = '';
                f.phone.value = '';
                f.commond.value = '';
            }
        }
        http.onerror = function () {
            alert('Извините, данные не были переданы');
        }
    }, false);

}


// stickyfloat

if($('.js-stickyfloat').length){

        $('.js-stickyfloat').stick_in_parent();
         $('.js-stickyfloat').css({'top':0});
}






var $body = $('body');

$(function ($) {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $body.addClass('ios');
    } else {
        $body.addClass('web');
    };


    var app = {

        menuPlus: function () {

            $('#menu-plus').addClass('show');

        },

        menuClose: function () {

            $(this).removeClass('show');
            $('#menu-plus').removeClass('show');

        },

        plus: function (e) {
            var target = $(this),
                input = target.siblings('input')[0],
                value = parseFloat(input.value),
                numberLength = value.toString().length,
                dropdown,
                val,
                childCount;

            e.preventDefault();
            e.stopPropagation();


            if (value < +target.data('max')) {

                input.value = +input.value.slice(0, numberLength) + 1 + input.value.slice(numberLength);

                app.updateButtons(target.closest('.dropdown'));
            }

        },

        minus: function (e) {

            var target = $(this),
                input = target.siblings('input')[0],
                value = parseFloat(input.value),
                numberLength = value.toString().length;

            e.preventDefault();
            e.stopPropagation();


            if (value > +target.data('min')) {

                input.value = +input.value.slice(0, numberLength) - 1 + input.value.slice(numberLength);

                app.updateButtons(target.closest('.dropdown'));

            }

        },

        delete: function (e) {

            e.preventDefault();
            e.stopPropagation();

            var dropdown = $(this).closest('.dropdown')

            $(this).closest('li').remove();

            app.updateButtons(dropdown);

        },

        updateButtons: function (dropdown) {

            var val = dropdown.find('.input-with-plus__input').val();
            var childCount = dropdown.find('.child__input').length;

            if (childCount) {
                var cnt = parseFloat(val) + childCount;
                if (cnt > 1 && cnt < 5) cnt += " человека";
                else cnt += " человек";
                dropdown.children('.dropdown-toggle').find('.js-people').text(cnt);

            } else {
                var cnt = parseFloat(val);
                if (cnt == 1)
                    cnt += ' взрослый';
                else
                    cnt += ' взрослых';
                dropdown.children('.dropdown-toggle').find('.js-people').text(cnt);
                $('.input-with-plus__input').val(cnt);

            }

            if (childCount < 3) {

                dropdown.find('.add-child').show();
                dropdown.find('.add-child__select').show();

            } else {

                dropdown.find('.add-child').hide();
                dropdown.find('.add-child__select').hide();

            }
        },

        addChild: function (e) {

            var content = '<li class="child"><label class="child__label">Ребенок</label>';

            content += '<div class="child__content"><input type="text" class="child__input" value="' + this.value + '" disabled />';
            content += '</div><a href="#" class="delete"></a></li>';

            $(this).closest('li').before(content);

            $(this).val('');

            app.updateButtons($(this).closest('.dropdown'));

        },

        addCalendarBtn: function (el) {

            $(el).parent().addClass('show');

            setTimeout(function () {

                $('.ui-datepicker-group-first').append('<input type="checkbox" id="calendar_2days" class="d-none" checked/><label class="button-primary" for="calendar_2days">± 3 дня от даты вылета </label>');

            }, 150);

        },

        calendarClosed: function () {

            $(this).parent().removeClass('show');

        },

        checkAll: function () {

            var checked = this.checked;

            $(this).closest('ul').find('[type="checkbox"]:not(.check-all)').each(function () {
                this.checked = checked;
            });

        },

        init: function () {




            $('#menu-close').on('click', this.menuClose);
            $(document).on('click', '.plus', this.plus);
            $(document).on('click', '.minus', this.minus);
            $(document).on('click', '.delete', this.delete);

            $('.add-child__select').on('change', this.addChild);
            $('.check-all').on('change', this.checkAll);


            $('.filter__btn, .dropdown-menu').on('click', function (e) {

                if (e.target === this || e.target.tagName === 'LI') {

                    e.preventDefault();
                    e.stopPropagation();

                } else if (e.target.tagName === 'LABEL' || e.target.className === 'checkbox' || e.target.className === 'add-child__select') {

                    e.stopPropagation();

                }

            });




            // selects 
            if ($('.selectpicker').length) {
                $('.selectpicker').selectpicker({
                    size: 7,
                    dropupAuto: false
                });
            }
            if ($('.js-multiselect').length) {
                $('.js-multiselect').multiselect({
                    includeSelectAllOption: true,
                    selectAllText: 'Все курорты',
                    allSelectedText: 'Все курорты',
                    numberDisplayed: 1,
                    nonSelectedText: 'Ничего не выбрано',
                    selectAllNumber: false,
                    nSelectedTextStart: 'Выбрано ',
                    nSelectedTextEnd: ' курорта'
                });
            }

        }

    };

    app.init();

    /* placeholder*/
    $('input, textarea').each(function () {
        if (!$(this).is('#dateFrom')) {
            var placeholder = $(this).attr('placeholder');
            $(this).focus(function () {
                $(this).attr('placeholder', '');
            });
            $(this).focusout(function () {
                $(this).attr('placeholder', placeholder);
            });
        }
    });
    /* placeholder*/






    $('.js-checkbox-main .checkbox-text, .span-arrow').on('click', function(e){
        e.preventDefault();
        $(this).closest('.checkbox-list__main').toggleClass('active');

        if($('.js-stickyfloat').length){
            $('.js-stickyfloat').trigger("sticky_kit:recalc");
        }
        return false;
    });



     $(function () {
        $(".js-filters-all").click(function () {
            if (!$(this).is(":checked")){
                 $(".checkbox").removeAttr("checked");
                  $(".custom-checkbox").css('display', 'block');
                
            }
            else{
                $(".checkbox").attr("checked","checked");

            }
            
            
        });

    });
   

    /*scroll to top*/
    $('.js-top-click').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });


    /* search */
    $('.js-search').on('keydown', function () {
        if ($(this).val().length > 1) {
            $(this).closest('form').next('.wrapForListHotel2').show();
        }
    });
    $(document).on('click touchstart', function (event) {
        if ($(event.target).closest(".search_header").length) {
            return false;
        } else {
            $("#wrapForListHotel2").hide();
        }
    });
    /* search */


    // scrolllock

    var y_offsetWhenScrollDisabled = 0;
    var offset;
    $body = $('body');

    $(window).scroll(function () {
        y_offsetWhenScrollDisabled = $(window).scrollTop();
    });

    function lockScroll() {
        offset = y_offsetWhenScrollDisabled;
        $body.addClass('scrollDisabled');
        $('html').css('margin-top', -y_offsetWhenScrollDisabled);
    }

    function unlockScroll() {
        $body.removeClass('scrollDisabled');
        $('html').css('margin-top', 0);
        $('html, body').animate({
            scrollTop: offset
        }, 0);
    }

    // header navigator

    if ($('.js-burger').length) {
        $('.js-burger').on('click', function () {
            lockScroll();
            $('header').addClass('open-nav');
            $('.js-nav').fadeIn(300);
            $('.js-overlay').fadeIn(300);
        });
    }

    if ($('.js-cross').length) {
        $('.js-cross').on('click', function () {
            unlockScroll();
            $('.js-overlay').fadeOut(600);
            $('.js-nav').fadeOut(600, function () {
                $('.js-nav').removeAttr('dislay')
            });
            $('header').removeClass('open-nav');
        });
    }


if ($(".js-filter-btn").length) {
    $(".js-filter-btn").click(function () {
        var $this = $(this),
            siebar = $('.side-bar'),
            overlay = $('.js-overlay-filter'),
            close_btn = $('.side-bar').find('.close-side');
            lockScroll();
        siebar.addClass("shown");
        overlay.addClass("shown");
        
       
    })
}


 $('.close-side').click(function () {
            $('.side-bar').removeClass('shown');
            $('.js-overlay-filter').removeClass('shown');
            unlockScroll();
        });

$('.js-overlay-filter').click(function () {
            $('.side-bar').removeClass('shown');
            $('.js-overlay-filter').removeClass('shown');
            unlockScroll();
        });






    if ($('#dateFrom').length) {
        $("#dateFrom").datepicker({
            numberOfMonths: 2,
            minDate: new Date(),
            firstDay: 1,
            duration: 0,
            dateFormat: 'd.mm.yy',
            dayNamesMin: [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            monthNames: [
                'января',
                'февраля',
                'марта',
                'апреля',
                'мая',
                'июня',
                'июля',
                'августа',
                'сентября',
                'октября',
                'ноября',
                'декабря'
            ],
            beforeShow: this.addCalendarBtn,
            onChangeMonthYear: this.addCalendarBtn,
            onClose: this.calendarClosed
        });
    }

}(jQuery));


if ($('.js-pagination__list').length) {
    $('.pagination__link').on('click', function (e) {
        e.preventDefault();
        $('.pagination__item').removeClass('active');
        $(this).parent('.pagination__item').addClass('active');
    })
}



if ($(".js-mob-curort").length) {
    $(".js-mob-curort").owlCarousel({
        navText: [],
        nav: true,
        dots: false,
        loop: true,
        items: 1

    });
}



  




// ---------------------------------------------------- //
// SLIDER GALLERY
// ---------------------------------------------------- //
var sliderGallery = function() {

    /*** Vars ***/
    var gallery = '.js-procedure-slider',
        slider = false;

    /*** Init ***/
    var init = function() {

        manage(); // On load (1*)

        $(window).on('resize', function(){ // On resize (2*)
            waitForFinalEvent(function(){
                manage();
            }, 200, "sliderGallery");
        });

    };

    /*** Manage slider ***/
    var manage = function() {


        if( window.innerWidth > 767 && !slider ) { // If mobile and slider not built yet = build
            build();
        }
        else if( window.innerWidth < 768 && slider ) { // Not mobile but slider built = destroy
            destroy();
        }

    };

    /*** Build slider ***/
    var build = function() {
        slider = $(gallery).addClass('owl-carousel'); // Add owl slider class (3*)
        slider.owlCarousel({ 
            dots: false,
            loop: true,
            items: 1,
            nav: true,
             onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter //When the translation of the stage has 
        });
    };

    /*** Destroy slider ***/
    var destroy = function() {
        slider.trigger('destroy.owl.carousel'); // Trigger destroy event (4*)
        slider = false; // Reinit slider variable
        $(gallery).removeClass('owl-carousel'); // Remove owl slider class (3*)
    };  

    /*** Public methods***/
    return {
        init: init
    };

}();

// ---------------------------------------------------- //
// PREVENT MULTIPLE CALLS
// ---------------------------------------------------- //
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();
sliderGallery.init();




    function counter(event) {
       var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index - 1;     // Position of the current item
      
      // it loop is true then reset counter from 1
      if(item > items) {
        item = item - items;
      } 
    if (item <= 0) {
        item = item + items;
    }
      $('#counter').html(item +" / "+ items);
    }


    $('.js-more-link').on('click',function () {
        $(this).closest('.js-more-content').addClass('open');
        $(this).hide();
        return false;
    });

if ($(".js-slider").length) {
    $(".js-slider").owlCarousel({
        navText: [],
        nav: true,
        loop: true,
        dots: false,
        items: 2,
        responsive: {
            640: {

                items: 2
            },
            0: {

                items: 1
            }
        }


    });
}

if ($(".carousel-js").length) {
    $(".carousel-js").owlCarousel({
      
    loop:true,
     nav: true,
     margin:10,
     mergeFit:true,
    items:4,
     responsive: {
        0: {

                items: 1
            },
            1000: {
                items: 4
            },
            700: {
                items: 3
            },
            470: {
                items: 2
            }
            
        }
       


    });
}








function carousel3() {
    if ($(".js-premial").length) {

        var owlPost = $(".js-premial");
        if (window.innerWidth > 992) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.trigger('destroy.owl.carousel');
                owlPost.removeClass('owl-carousel');
            }
        } else if (window.innerWidth < 992) {
            owlPost.addClass('owl-carousel');
            setTimeout(function () {

                owlPost.owlCarousel({
                    loop: true,
                    margin: 30,
                    responsiveClass: true,
                    dots: false,
                    navText: [],
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        680: {
                            items: 2
                        },
                        1100: {
                            items: 2
                        }
                    }
                });
            }, 10)
        }

    }
}

function carousel4() {
    if ($(".js-carousel").length) {
        var $owlCarousel4 = $(".js-carousel");
        if (window.innerWidth >= 992) {
            if (typeof $owlCarousel4.data('owl.carousel') != 'undefined') {
                $owlCarousel4.trigger('destroy.owl.carousel');
            }
            $owlCarousel4.removeClass('owl-carousel');
        } else if (window.innerWidth < 992) {

            $owlCarousel4.addClass('owl-carousel');
            $owlCarousel4.owlCarousel({
                navText: [],
                nav: true,
                dots: false,
                loop: true,
                items: 4,
                responsive: {


                    992: {

                        items: 4
                    },

                    768: {

                        items: 3
                    },
                    540: {

                        items: 2
                    },
                    0: {

                        items: 1
                    }
                }

            });
        }

    }
}

function carousel5() {
    if ($(".js-curort").length) {
        var $owlCurort = $(".js-curort");
        if (window.innerWidth >= 992) {
            if (typeof $owlCurort.data('owl.carousel') != 'undefined') {
                $owlCurort.trigger('destroy.owl.carousel');
            }
            $owlCurort.removeClass('owl-carousel');
        } else if (window.innerWidth < 992) {
            $owlCurort.addClass('owl-carousel');

            $owlCurort.owlCarousel({
                navText: [],
                nav: true,
                dots: false,
                loop: true,
                items: 1

            });
        }

    }
}






carousel3();
carousel4();
carousel5();
$(window).resize(function () {
    carousel3()
    carousel4()
    carousel5();
    
});




if ($('.js-equal-desktop').length && window.innerWidth >= 768) {
    $('.js-equal-desktop').equalHeights();
}
if ($('.js-equal-mob').length && window.innerWidth < 768) {
    $('.js-equal-mob').equalHeights();
}

if ($('.why-block').length && window.innerWidth < 768) {
    $('.why-block').matchHeight();
}


//up
$(document).ready(function(){
    $('[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 0 }, t);
    });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//popup
 $(function() {
            $('.js-popup').click(function() {

               $('html').toggleClass('overflow');
               $('.overlay-js').fadeToggle();    
          });
           });
 // Закрыть попап 
$('.js-closepop').click(function() { 
     $('html').toggleClass('overflow');

  $('.overlay-js').fadeOut();
});
$('.popup-item-js').click(function() { 
    return false;
    });
