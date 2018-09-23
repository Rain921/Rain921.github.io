$(window).on('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});

/* Клик по фильтру*/
$('#filter-wrapper,#filter-content').on('click', function() {
    $('#filter-content', this).fadeToggle();
    $('.filter-design__arrow', this).toggleClass('filter-design__arrow--active');
    return false;
});
/* настройки скролбара*/
$(".filter-design,.filter-design__content").mCustomScrollbar({
    theme: "dark",
    scrollInertia: 0,
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() { $(this).attr('placeholder', ''); });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/
    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });
    /* components */
    /*$(document).ready(function() {
    slickSlider();
	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 936) {
			slickSlider();
		}
	});
	});*/

    if ($('.styled').length) {
        $('.styled').styler();
    };
    if ($('.fancybox').length) {
        $('.fancybox').fancybox({
            margin: 10,
            padding: 10
        });
    };

    if ($('.product-slider').length) {
        $('.product-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<img src="img/icons/arrows-left.svg" data-role="none" class="arrows-slider__L" aria-label="Previous" tabindex="0" role="button" />',
			nextArrow: '<img src="img/icons/arrows-right.svg" data-role="none" class="arrows-slider__R" aria-label="Next" tabindex="0" role="button" />',
            responsive: [{
           
                    breakpoint: 936,
                    settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
 
                },
                {
                    breakpoint: 641,
                       settings: {
				slidesToShow: 1,
				slidesToScroll: 1
					}
                }
            ]
        });
    };
    if ($('.scroll').length) {
        $(".scroll").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            advanced: { autoExpandHorizontalScroll: true }
        });
    };



    /* components */


});
var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);