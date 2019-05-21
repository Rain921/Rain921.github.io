$(window).load(function() {
        $body.removeClass('loaded');
});
var navItems = $('.js-nav li');
var $body = $('body'),
    $win = $(window),
        $lockmenu = false,
        $index;
$(function() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $body.addClass('ios');
    } else {
        $body.addClass('web');
    };


    $('body').on('click', '.js-img-block',function(){
        setTimeout(function() {
            $('.js-work').animate({right: 0}, 300);
            $('.js-overlay').fadeIn(200);
        },10);
        var img = $(this).find('img').attr('src');

        var bg = $(this).find('.js-img').attr('style', 'url');
        var header = $(this).find('.brown-header').text();
        var headerSpan = $(this).find('.white-header').text();
        var content = $(this).find('.img-block__text').html();

        $('.js-work').find('.js-img').css('background', 'url(' + img + ')');
        $('.js-work').find('.how-work-brown').text(header);
        $('.js-work').find('.how-work-white').text(headerSpan);
        $('.js-work').find('.js-text').html(content);
        lockScroll();
    });




    
    /* fullpage */
    var isFullpage = false,
        $totalSlides, directionScroll, iscroll,$top= 0;


    function createFullPage() {
        $('#fullpage').fullpage({
            slidesNavigation: true,
            responsiveWidth: 768,
            responsiveHeight: 651,
            scrollingSpeed: 300,
            fitToSection: false,
            scrollOverflowOptions: {
                probeType: 3
            },
            afterLoad: function(anchorLink, index) {
                var activeSection = $('section').eq(index - 1);

                var progressBar = index * 100 / $('.section').length;
                $('.js-progress-bar').css('height', progressBar + '%');
                var pageNumber = index;

                if (!$('.js-nav').is('.init-nav')) {
                    $top = -33.33 * (pageNumber-1);
                    $('.js-nav-item').removeClass('active');
                    $('.js-nav-item').eq(index - 2).addClass('prev-to-active');
                    $('.js-nav-item').eq(index ).addClass('next-to-active');
                    $('.js-nav')
                        .addClass('init-nav')
                        .animate({
                            top: $top
                        },0,function(){
                            $('.js-nav-item').eq(index - 1).addClass('active');
                            if (index < 10) {
                                $('.js-nav-item').eq(index - 1).find('span').text('0' + pageNumber);
                            } else {
                                $('.js-nav-item').eq(index - 1).find('span').text(pageNumber);
                            }

                        });

                }
                if (index < 10) {
                    $('.js-nav-item.active').find('span').text('0' + pageNumber);
                } else {
                    $('.js-nav-item.active').find('span').text(pageNumber);
                }

                setTimeout(function() {
                    if (index < 10) {
                        $('.js-slides-current .first-digit').html('0');
                        $('.js-slides-current .main-digit').html(index);
                    } else {
                        $('.js-slides-current .first-digit').html(Math.floor(index / 10));
                        $('.js-slides-current .main-digit').html(0);
                    }

                        $('.js-slides-current .first-digit, .js-slides-current .main-digit').addClass('in-active-prev');
                        
                },200);

                
                    if (window.innerWidth < 768 && $lockmenu == true) {
                        $('.js-nav-item').removeClass('active');
                        $('.js-nav-item').find('span').html();
                        
                        $('.js-nav-item').eq($index).addClass('active');

                        // var $count = $index+1;
                        // console.log($index)
                        // if ($index < 9) {
                        //     $('.js-nav-item').eq($index).find('span').html('0' + $count + '');
                        // } else {
                        //     $('.js-nav-item').eq($index).find('span').html($count);
                        // }
                    }  
                $('.js-slides-total').html($('.section').length);
                isFullpage = true;
                $totalSlides = $('.section').length;
                
                if (index == $totalSlides) {
                    $('.js-next-slide').fadeOut();
                    $('.js-up').fadeIn();
                } else {
                    $('.js-next-slide').fadeIn();
                    $('.js-up').fadeOut();
                }


                activeSection.addClass('slide-show visited-slide');


                if (index == $totalSlides) {
                    $('.js-next-slide').fadeOut();
                    $('.js-up').fadeIn();
                } else {
                    $('.js-next-slide').fadeIn();
                    $('.js-up').fadeOut();
                }

            },
            onLeave: function(index, nextIndex, direction) {

                if($('section').eq(index-1).find('#vmap').length && $('.tooltip').is(':visible')) {
                    $('.tooltip').hide();
                }


                directionScroll = direction;
                var $activeSection = $('section').eq(index - 1),
                $nextSlide = $('section').eq(nextIndex - 1);

                if ($nextSlide.hasClass('box-offers')) {
                    setTimeout(function() {
                        $('.box-offers__menu-list li.first').trigger('click');
                    }, 1500);
                }

                $activeSection.removeClass('slide-show');

                if (window.innerWidth > 768) {


                    if ($activeSection.find('.road-map').length > 0) {

                        $activeSection.find('.road-map__item').each(function() {

                            $(this).removeClass('animated animated-active');
                        });
                    }

                }
                var iscroll = $nextSlide.find('.fp-scrollable').data('iscrollInstance');


                if (direction == 'down') {
                 
                    $(navItems)
                        .removeClass('active next-to-active prev-to-active')
                            .find('span').html(" ");
                        $(navItems).eq(nextIndex -2).addClass('prev-to-active');
                        $(navItems).eq(nextIndex).addClass('next-to-active');

                        $(navItems).eq(nextIndex-1).addClass('active');
                    if (index < 10) {

                    } else {
                        $('.js-slides-current').html(index);
                    }
                    if (nextIndex < 10) {
                        $('.js-slides-prev').html('0' + nextIndex + '');
                    } else {
                        $('.js-slides-prev').html(nextIndex);
                    }
                    $('.js-slides-current').addClass('in-active-next').removeClass('in-active-prev');
                    $('.js-slides-prev').addClass('in-active-next').removeClass('in-active-prev');


                    $('.js-nav').removeClass('slide-down slide-up').addClass('slide-up');

                    $top -= 33;
                    $('.js-nav').animate({top:$top},500);


                    $('.in-active-next .main-digit').slideDown(0);
                } else {
                        $(navItems)
                    .removeClass('active next-to-active prev-to-active')
                        .find('span').html(" ");
                    $(navItems).eq(nextIndex -2).addClass('prev-to-active');
                    $(navItems).eq(nextIndex).addClass('next-to-active');

                    $(navItems).eq(nextIndex-1).addClass('active');
                    // $('.js-slides-current').addClass('in-active-prev').removeClass('in-active-next');
                    // $('.js-slides-prev').addClass('in-active-prev').removeClass('in-active-next');

                    $('.js-nav').removeClass('slide-down');
                    $('.js-nav').removeClass('slide-up');
                    $('.js-nav').addClass('slide-down');


                    $top += 33;
                    $('.js-nav').animate({top:$top}, 500);
                }
                    $('.js-slides-current .first-digit, .js-slides-current  .main-digit').removeClass('in-active-prev');
            }
        });
    }

    /* fullpage init */
    if ($('#fullpage').length) {
        createFullPage();
    }

    function iOSversion() {

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            if (!!window.indexedDB) { return 'iOS 8 and up'; }
            if (!!window.SpeechSynthesisUtterance) { return 'iOS 7'; }
            if (!!window.webkitAudioContext) { return 'iOS 6'; }
            if (!!window.matchMedia) { return 'iOS 5'; }
            if (!!window.history && 'pushState' in window.history) { return 'iOS 4'; }
            return 'iOS 3 or earlier';
        }

        return 'Not an iOS device';
    }

    /* fullpage init */
    var iosVer = iOSversion();

    if (iosVer === 'iOS 7') {
        fullpage_api.destroy('all');
    }

    $('.js-arrow-anchor').on('click', function() {
        $.fn.fullpage.moveSectionDown();
        return false;
    });

    /* arrow down*/
    $('.js-next-slide').on('click', function() {
        if (window.innerHeight > 650) {
            $.fn.fullpage.moveSectionDown();
        }
        return false;
    });
    /* arrow down*/

    /* arrow up*/
    $('.js-up').on('click', function() {
        $top = -33;
        $.fn.fullpage.moveTo(1);

        console.log($top);
        
        return false;
    });
    /* arrow up*/

    /* fullpage */

    /* placeholder*/
    $(".input__field").each(function() {
        if ($(this).val() == "") {
            $(this).closest('.box-field__input').removeClass("input--filled");
        } else {
            $(this).closest('.box-field__input').addClass("input--filled");
        }
    });
    $(".input__field").focus(function() {
        $(this).closest('.box-field__input').addClass("input--filled");
    });
    $(".input__field").blur(function() {
        if ($(this).val() == "") {
            $(this).closest('.box-field__input').removeClass("input--filled");
        }
    });
    /* placeholder*/





var animation = true;

/* open menu */
var menu = document.getElementById("menu"),
    menuInner = $('.box-menu__inner');
$('.js-hambrg-menu').on('click', function() {
    if ($('.web').length && window.innerWidth > 767 || $('.ios').length && window.innerWidth > 1365) {
        animation = false;
    }
    $body.addClass('open-menu');
    $('#menu').addClass('open');

    TweenLite.to(menu, 0.8, {
        y: '0%',
        ease: Power2.easeInOut
    });
    TweenLite.to(menuInner, 0.8, {
        y: '0%',
        ease: Power2.easeInOut
    });

    lockScroll();
    return false;
});
/* open menu */


/* close menu */
$('.js-close-menu').on('click', function() {
    $('#menu').removeClass('open');
    TweenLite.to(menu, 0.6, {
        y: '-110%',
        ease: Power2.easeInOut
    });

    TweenLite.to(menuInner, 0.6, {
        y: '100%',
        ease: Power2.easeInOut
    });
    $('#menu').one(transitionEvent, function(event) {
        unlockScroll();
        $body.removeClass('open-menu');
        if ($('.web').length && window.innerWidth > 767 || $('.ios').length && window.innerWidth > 767) {
            animation = true;
            addAnim();
        }
    });
    return false;
});
/* close menu */

/* navigation */
$('.main-nav__item').on('click', function(e) {

    $('#menu').removeClass('open');
        $lockmenu =  true;  
    $index = $(this).index();
    unlockScroll();
    if (window.innerWidth < 768 || window.innerHeight < 651) {

        var offset = $("[data-anchor=" + $(e.target).attr('href').slice(1) + "]").offset().top - 30;

        setTimeout(function() {

            $('html, body').animate({
                scrollTop: offset
            }, 500);
        }, 500);
        return false
    }

});
/* navigation */

/* mask phone*/
if ($('.js-mask-tel').length) {
    $('.js-mask-tel').mask('+9-(999)-999-99-99');
}
/* mask phone*/

});

    var y_offsetWhenScrollDisabled = 0, offset =0;

    $win.scroll(function() {
        y_offsetWhenScrollDisabled = $win.scrollTop();
        if(y_offsetWhenScrollDisabled > 0) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    })

    function lockScroll() {
        offset = y_offsetWhenScrollDisabled;
        $('html').addClass('scrollDisabled');
        $('html').css('margin-top', -y_offsetWhenScrollDisabled);
    }

    function unlockScroll() {
        $('html').removeClass('scrollDisabled');
        $('html').css('margin-top', '');
        $('html, body').animate({
            scrollTop: offset
        }, 0);
    }
/* detected css transition end*/
function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent();
/* detected css transition end*/

// modernizr

Modernizr.addTest('backgroundclip',function() {
    var div = document.createElement('div');
    if ('backgroundClip' in div.style) return true;
    'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val) {
        if (val+'BackgroundClip' in div.style) return true;
    });
});

try { Typekit.load(); } catch(e) {}


$('.js-nav').on('click', 'a', function(e){
    var index = navItems.index(this);


    $('.js-nav li').closest('li').removeClass('active');
    $('.js-nav li').closest('li').removeClass('next-to-active');
    $('.js-nav li').closest('li').removeClass('prev-to-active');
    $('.main-nav__link span').html(" ");


    var prev = $(this).closest('li').prev();

    prev.addClass('prev-to-active');
    var next = $(this).closest('li').next();
    next.addClass('next-to-active');


    var $this = this;

    if(index < 10){
        $(this).find('span').html("0" + (index + 1));
    }else{
        $(this).find('span').html(index + 1);
    }

    $(this).closest('li').addClass('active');
});

if($('.js-phone').length){
    $('.js-phone').on('click', function(){
        lockScroll();
        $('.js-overlay').fadeIn(400);
        $('.js-call').stop().animate({left:0}, 500);
    });
}

if($('.reserve.button').length){
    $('.reserve.button').on('click', function(){
        $('.js-overlay').fadeIn(600);
        $('.js-book').stop().animate({left:0}, 1000);

    });
}

if($('.js-back').length){
    $('.js-back').on('click', function(){
        $('.js-overlay').fadeOut(600);
        $('.js-call').stop().animate({left:-1000} ,1000);
        $('.js-work').stop().animate({right:-10000}, 500);
        $('.js-book').stop().animate({left:-1000} ,1000);
    });
}

if($('.js-overlay').length){
    $('.js-overlay').on('click', function(){
        $('.js-overlay').fadeOut(600);
        $('.js-call').stop().animate({left:-1000} ,1000);
        $('.js-work').stop().animate({right:-10000}, 500);
        $('.js-book').stop().animate({left:-1000} ,1000);
    });
}

if($('.js-burger').length){
    $('.js-burger').on('click', function(){
        //if (window.innerWidth < 768 || window.innerHeight < 651) {
            lockScroll();
        //}
        $('.js-overlay').fadeIn(200);
        $('.js-main-nav').fadeIn(400);
    });
}

if($('.js-cross').length){
    $('.js-cross').on('click', function(){
        //if (window.innerWidth < 768 || window.innerHeight < 651) {
            unlockScroll()
    $lockmenu = false;
        //}
        $('.js-overlay').fadeOut(400);
        $('.js-main-nav').fadeOut(200);

    });
}

if($(window).width() <= 767){
    if($('.main-nav__link').length){
        $('.main-nav__link').on('click', function(){
            unlockScroll();

            $('.js-overlay').fadeOut(400);
            $('.js-main-nav').slideUp(400);
           $top = 0;
        });
    }
}


// second-screen popup



 // mob slider section 2



if($('.js-main_2').length) {
        $('.js-main_2').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            centerMode : false,
            mobileFirst: true,
            responsive: [
            {
                  breakpoint: 479,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },

                {
                  breakpoint: 1140,
                  settings: "unslick"
                }

            ]
        });
}
    $(window).resize(function() {
        if (window.innerWidth < 1141 && $('.js-main_2').length) {
            $('.js-main_2').slick('refresh');
        }
    })

    if($('.js-main_5').length) {
        var $slider =$('.js-main_5').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode : false,
            arrows: false,
            responsive: [
            {
                  breakpoint: 479,
                  settings: {
                    slidesToShow: 1,

                    slidesToScroll: 1,

                  }
                },
             {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,

                    slidesToScroll: 1,

                  }
                },

                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                  }
                },

                {
                  breakpoint: 1140,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                  }
                }

            ]
        });
    $('.js-far__btn ').on('click', function(e){
       e.preventDefault();
        $slider .slick("slickNext");
    });

    }





$(window).resize(function() {
         if ($('.js-main_5').length && ($(window).width() < 1140)) {
             $('.js-main_5').slick('resize');
         }

    });






if($('.js-work-slider').length) {
        $('.js-work-slider').slick({
            fade:true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode : false,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>'

        });
    }








$('#frinchise-slider').slick({
    fade: true,
    speed: 1500,
    breakpoint: [
        {
            breakpoint: 767,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
});

// map

$(document).ready(function() {
    var reserve = {
        kr: ["Красноярский край"],
        sa: ["Республика Саха (Якутия)"],
        kn: ["Калининградская область"],
        // pr: ["Приморский край"],
        // sh: ["Сахалинская область"],
        zb: ["Забайкальский край"]
    };
    var available = {
        vn: ["Воронежская область"],
        pz: ["Пензенская область"],
        sm: ["Смоленская область"],
        ks: ["Краснодарский край"],
        ta: ["Республика Татарстан"],
        mc: ["Москва и Московская область"],
        tm: ["Томская область"],
        ml: ["Республика Марий Эл"],
        yr: ["Ярославская область"],
        tu: ["Тюменская область"],
        sv: ["Свердловская область"],
        ro: ["Ростовская область"],
        bs: ["Республика Башкортостан"]
    };


    initVectorMap(reserve,available);
    regionsSelectBox(reserve,available,russiaRegions);

});


function regionsSelectBox(reserve,available,russiaRegions) {
    var regions = russiaRegions.pathes;
    var regionsArr = [];
    for (iso in regions) {
        regionsArr.push(regions[iso].name);
    }
    var sortedRegions = regionsArr.sort();
    var reserveCount = 0;



    for (iso in sortedRegions) {
        var option = '<option value="'+ sortedRegions[iso] +'">'+ sortedRegions[iso] +'</option>';
        $('#js-regions-multiple').append(option);
    }

    for (iso in reserve) {
        var option = $('option[value="'+ reserve[iso] +'"]');
        option.attr('disabled', 'disabled');
        ++reserveCount;
    }

    if (reserve && sortedRegions) {
        var availableCount = parseInt(sortedRegions.length) - parseInt(reserveCount);
        $('.regions-count').html(availableCount +' '+ declOfNum(availableCount, ['регион', 'региона', 'регионов']));
    }
    if (parseInt(sortedRegions.length) == parseInt(reserveCount)) {
        $('.regions-count').parent().html('Нет доступных регионов для бронирования');
    }
}




function initVectorMap(reserve, available) {
    var c = reserve;
    var b = available;

    colorRegion = "#6f675d";
    reserveColor = "#dfcba0";
    availableColor = "#dfcba0";
    //reserveColor = "#f0e4ce";
    reserveRegions = {};
    availableRegions = {};
    regionsSelectable: true;



    for (iso in c) {
        reserveRegions[iso] = reserveColor
    }
    for (iso in b) {
        reserveRegions[iso] = availableColor
    }
    var a = true;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        a = false
    }

    $("#vmap").vectorMap({
        map: "russia",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 2,
        regionsSelectable: true,
        regionsSelectableOne: true,
        color: colorRegion,
        colors: reserveRegions,
        showTooltip: a,
        regionsSelectable: true,
        hoverColor:"#f0e4ce",
        selectedColor: '#f0e4ce',
        scaleColors:["#f0e4ce","#f0e4ce"],
        onRegionClick: function(f, h, i) {
            var g, e, d, k;

            var l = "Хотите предварительно бесплатно забронировать регион?";
            var k = "Регион недоступен для бронирования.<br><br> Эксклюзивный партнер";
            var j = "Регион предварительно забронирован.<br><br> Хотите бесплатно перебронировать регион?";
            $(".tooltip .name").html(i);
            $("#modal-reserve .caption span").html(i);
            $("#modal-reserve #new_city_reserve").val(i);
            if (h in c) {
                $(".tooltip .anons").html(j);
                $(".tooltip .reserve").html("Перебронировать").show()
            } else {
                if (h in b) {
                    $(".tooltip .anons").html(k);
                    $(".tooltip .reserve").hide()
                } else {
                    $(".tooltip .anons").html(l);
                    $(".tooltip .reserve").html("Забронировать").show()
                }
            }

        }
    });

    $(".close-button").on("click", function() {
        $(this).parent(".tooltip").hide();
    })
};

if (window.innerWidth > 768) {
    $("#vmap").on("click touchstart", ' path', function(n) {
        g = $(this).closest('#vmap').offset();
        k = $(this).offset().left + $(this).outerWidth();
        d = $(this).offset().top;
        e = (n.pageX - g.left);
        var m = k + $(".tooltip").outerWidth();
        if (m > 225) {
            $(".tooltip").css("top", d);
            $(".tooltip").css("left", k);
        } else {
            $(".tooltip").css("top", d);
            $(".tooltip").css("left", $(this).offset().left - $(".tooltip").outerWidth())
        }
        $(".tooltip").fadeIn(500);
    });
} else {
    $("#vmap").on("click touchstart", ' path', function(n) {
        var mapMobileTop = $('#vmap').offset().top;
        var mapMobileHeight =  $('#vmap').height();
        var bodyWidht = $('body').width();
        $(".tooltip").fadeIn(500);
        $('.tooltip').css({
            'top': mapMobileTop + (mapMobileHeight / 1.25),
            'left': 50 + '%',
            'right': 'auto'
        });

    });
}


// bookin popup


if($('.reserve').length){
    $('.reserve').on('click', function(){
        lockScroll();
        var name = $(this).parents('.tooltip').find('.name').html();
        $('.js-overlay').fadeIn(600);
        $('.js-region').html('"'+ name + '"');
        $('.js-book').animate({left:0}, 1000);
    });
}



$('#frinchise-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.js-frinchise-shutter-animation').css('animation-name', 'none');
    setTimeout(function() {
        $('.js-frinchise-shutter-animation').css('animation-name', 'frinchise-shutter');
    }, 10);
});

$('#frinchise-slider').on('afterChange', function(event, slick, currentSlide) {
    $('.js-frinchise-shutter-animation').css('animation-name', 'none');

    setTimeout(function() {
        $('.js-frinchise-shutter-animation').css('animation-name', 'frinchise-shutter-reverse');
    }, 10);
});



$('#offers-slider').slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }
    ]
});

if ($('.box-offers__menu-list').length) {
    $('#achievements-slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });
}

$('.know-more__btn').click(function() {
    $('.js-overlay').fadeIn(600);
    $('.js-call').animate({left: 0}, 700);
});

$('.learn-more-wrapper').on('click', function() {
    var curPageHeight = $('.box-core-values').height();
    var curPageTopPos = $('.box-core-values').offset().top;

    if (window.innerWidth >= 768) {
        $('.js-next-slide').trigger('click');
    } else {
        $("html, body").animate({ scrollTop: curPageHeight + curPageTopPos }, 600);
    }
});

function beforeChange(event, slick, currentSlide, nextSlide) {
    slick.pauseChange(); // example desired function call
    setTimeout(function() {
        slick.completeChange(); // example desired function call
    }, 2000);
}


$(window).on('resize', function() {
    if (window.innerWidth > 768 && window.innerHeight > 650) {
        $('.js-main-nav').css('display','');
    }
});

$('.box-offers__menu-list li').click(function() {
    $('.box-offers__menu-list li').removeClass('active');
    $(this).addClass('active');
});

$('.box-offers__menu-list li').click(function() {
    var $el = $(this),
        offerVal1 = $(this).data('offers-1'),
        offerVal2 = $(this).data('offers-2'),
        offerVal3 = $(this).data('offers-3'),
        offerVal4 = $(this).data('offers-4'),
        offerVal5 = $(this).data('offers-5'),
        offerVal6 = $(this).data('offers-6');

    setTimeout(function() {
        $('.box-offers-slider-item-block__value[data-offer-1] .js-val').text(offerVal1 + ' <span>т.р.</span>');
        $('.box-offers-slider-item-block__value[data-offer-2] .js-val').text(offerVal2 + ' <span>т.р.</span>');
        if (!$el.is('#tab-5')){
            $('.box-offers-slider-item-block__value[data-offer-3] .js-val').text(offerVal3 + ' <span>тыс.</span>').removeClass('val-small');
            $('.box-offers-slider-item-block__value[data-offer-3] span').show();
        } else {
            $('.box-offers-slider-item-block__value[data-offer-3] span').hide();
            $('.box-offers-slider-item-block__value[data-offer-3] .js-val').show().text(offerVal3).addClass('val-small');
        } 
        $('.box-offers-slider-item-block__value[data-offer-4] .js-val').text(offerVal4 + ' <span>%</span>');
        $('.box-offers-slider-item-block__value[data-offer-5] .js-val').text(offerVal5 + ' <span>мес.</span>');
        $('.box-offers-slider-item-block__value[data-offer-6] .js-val').text(offerVal6 + ' <span>т.р.</span>');
        $('.box-offers-slider-item-block__value[data-offer-1] .js-val').spincrement({
            from: offerVal1,
            to: offerVal1,
            duration: 700,
            decimalPlaces: 0
        });

        $('.box-offers-slider-item-block__value[data-offer-2] .js-val').spincrement({
            from: offerVal2,
            to: offerVal2,
            duration: 700,
            decimalPlaces: 0
        });
        if (!$el.is('#tab-5')){

            $('.box-offers-slider-item-block__value[data-offer-3] .js-val').spincrement({
                from: offerVal3,
                to: offerVal3,
                duration: 700,
                decimalPlaces: 0
            });
        } 

        $('.box-offers-slider-item-block__value[data-offer-4] .js-val').spincrement({
            from: offerVal4,
            to: offerVal4,
            duration: 700,
            decimalPlaces: 1
        });

        $('.box-offers-slider-item-block__value[data-offer-5] .js-val').spincrement({
            from: offerVal5,
            to: offerVal5,
            duration: 700,
            decimalPlaces: 0
        });
        $('.box-offers-slider-item-block__value[data-offer-6] .js-val').spincrement({
            from: offerVal6,
            to: offerVal6,
            duration: 700,
            decimalPlaces: 0
        });
    }, 200);
});



// Gant diagrmma

if ($('.progress__line').length) {
    var start;
    var finish;
    var width;
    var left;
    var line = $('.diagramm__line');
    for(var i = 0; i < line.length; i++) {

        start = $(line[i]).find('.progress__line').attr('data-start');
        finish = $(line[i]).find('.progress__line').attr('data-finish');
        width = (finish - start) * 5 + "%";
        left = start * 5 + "%";

        $(line[i]).find('.progress__line').animate({width:width}, 2000);
        $(line[i]).find('.progress__line').css('left', left);
    }
}


if ($('.box-offers__menu-list').length && $('.box-offers__menu-list li').hasClass('active')) {
    setTimeout(function() {
        $('.box-offers__menu-list li.first').trigger('click');
    }, 1700);
};

if($('.js-achivments').length){
    $('.js-achivments').on('click', function(){
        lockScroll();

        $('.js-overlay').fadeIn(600);
        $('.js-diagramm').addClass('open');
        $('.js-diagramm').stop().animate({left:0},1000);
    });
}


if($('.js-back').length){
    $('.js-back').on('click', function(){
        unlockScroll();
        $('.js-overlay').fadeOut(600);
        $('.js-diagramm').remove('open');
        $('.js-diagramm').stop().animate({left:-10000},1000);
    });
}


// validation

$("#contact-form").validate({
    rules: {
        name: {
            required: true
        },
       
        email: {
            required: true,
            email: true
        },
        message: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        name: {
            required: 'Обязательное поле'
        },
        message:{
            required: 'Мин.длина 6',
            minlength: 'Мин.длина 6'
        },
        email: 'Недопустимый e-mail'
    },
    success: function(label) {
        var needParent = $(label).parent()[0].className;
        if(needParent == 'email-lable'){
            label.remove();
        }
        label.html('').removeClass('error').addClass('ok');
        setTimeout(function(){
            label.fadeOut(500);
        }, 4000);
    },
    submitHandler: function(form) {
        var fname = $("#formname").val();
        var femail = $("#formemail").val();
        var fmessage = $("#formmessage").val();
        var fsubmit = $("#formsubmit").val();
        //console.log(fname+' '+femail+' '+fmessage+' '+fsubmit);
        $.ajax({
            url: 'mail.php',
            type: "POST",
            data: {name:fname,email:femail,message:fmessage,send:fsubmit},
            success: function(res){
                if(res){
                    $('.reset').val('');
                    $('.answer').html("<p>Ваше сообщение успешно отправлено. <br>Вскоре мы с вами свяжемся<p>");
                    $('.answer').slideDown();
                    setTimeout(function(){
                        $('.answer').slideUp();
                    },4000);
                }else{
                    alert("Error");
                }
            },
            error: function(){
                alert("error");
            }
        });
        return false;
    }
});

$('.contact-form__submit').click(function(){
    setTimeout(function(){
        $('.box-contacts__bottom label').remove();
    },4000);
});

$('.box-contacts__bottom input').focusout(function(){
    setTimeout(function(){
        $('.contact-form__inputs label').remove();
    },4000);
});

$('.popup-content input').focusout(function(){
    setTimeout(function(){
        $('.popup-content label').remove();
    },4000);
});

$("#collback-submit").click(function(){
    setTimeout(function(){
        $('.popup-content label').remove();
    },4000);
});

$("#call-us").validate({
    rules: {
        name: {
            required: true
        },
       
        phone: {
            required: true,
            maxlength: 11,
            phoneUS: true
        }
    },
    messages: {
        name: {
            required: 'Обязательное поле',
            minlength: 'Мин. длина: 3'
        },
       
        phone: {
            required: 'Обязательное поле',
            maxlength: "Макс. Длина 11",
            phoneUS: 'В данное поле можно вводить только цифры'
        }
    },
    success: function(label) {
        label.html('').removeClass('error').addClass('ok');
        setTimeout(function(){
            label.remove(500);
        }, 4000);
    },
    submitHandler: function(form) {
        var cname = $("#collback-name").val();
        var cphone = $("#collback-phone").val();
        var csubmit = $("#collback-submit").val();
        $.ajax({
            url: 'mail.php',
            type: "POST",
            data: {name:cname,phone:cphone,callback:csubmit},
            success: function(res){
                if(res){
                    $('.reset').val('');
                    $('.respond').html("<p>Ваше сообщение успешно отправлено. <br>Вскоре мы с вами свяжемся<p>");
                    $('.respond').slideDown();
                    setTimeout(function(){
                        $('.respond').slideUp();
                    },4000);
                }else{
                    $('.respond').html("<p class='error'>Введите ваше имя и телефон <br>И мы ва объязательно передзвоним<p>");
                    $('.respond').slideDown();
                    setTimeout(function(){
                        $('.respond').slideUp();
                    },4000);
                }
            },
            error: function(){
                alert("error");
            }
        });
        return false;
    }
});