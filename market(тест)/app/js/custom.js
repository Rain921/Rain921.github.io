$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(document).ready(function () {
	$('.core-menu li').click(function() {
		
		$(this).removeClass('active');
		if ($('.core-menu .dropdown').css("display") == "none") {
			$(this).children('ul').slideDown('fast');
			$(this).removeClass('active');
			$(this).toggleClass('active');
		} else $('ul', this).slideUp('fast');
		
		return false;
	});
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.core-menu li').length && $('.core-menu .dropdown').css("display") == "block") {
			$('.core-menu .dropdown').slideUp('fast');
		}
		e.stopPropagation();
	});

	productSlider();
	$(window).resize(function () {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1100) {
			productSlider();
		}
	});

		var $windowWidth = $(window).width();
		if ($windowWidth < 992) {
			$('.js-tab-widget').addClass('js-tab-mobil');
		}
	$(window).resize(function () {
		var $windowWidth = $(window).width();
		if ($windowWidth < 992) {
			$('.js-tab-widget').addClass('js-tab-mobil');
		}
		if ($windowWidth > 992) {
			$('.js-tab-widget').removeClass('js-tab-mobil');
		}

	});

	function productSlider() {
		$('.product-first').not('.slick-initialized').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#product-two'
		});
		$('#product-two').not('.slick-initialized').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-first',
			dots: false,
			arrows: true,
			centerPadding: '10px',
			prevArrow: '<img src="/img/icons/back.svg" data-role="none" class="product-slider__L" aria-label="Previous" tabindex="0" role="button" />',
			nextArrow: '<img src="/img/icons/right-arrow.svg" data-role="none"class="product-slider__R" aria-label="Next" tabindex="0" role="button" />',
			focusOnSelect: true,
			responsive: [{
				breakpoint: 741,
				settings: {
					vertical: false,
					centermode: true,
					centerPadding: '0',
					verticalSwiping: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 450,
				settings: {
					vertical: false,
					centermode: true,
					centerPadding: '0',
					verticalSwiping: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	}

	
	(function (document, window, $, undefined) {
		'use strict';

		var $tabWidget = $('.js-tab-widget');

		var setupTabs = function ($tab, $allTabs, $tabPanels, $tabListItems, i) {
			$tab
				.attr({
					'id': 'tab-link-' + i,
					'tabindex': '-1',
					'role': 'tab',
					'aria-selected': 'false',
					'aria-controls': 'tab-panel-' + i
				});

			if (i === 0) {
				$tab
					.attr({
						'tabindex': '0',
						'aria-selected': 'true',
						'aria-describedby': 'tab-widget-description'
					})
					.addClass('tab-widget__link--active');
			}

			$tab.on('click', function (e) {
				e.preventDefault();

				tabClick($(this), $allTabs, $tabPanels, i);
			});

			$tab.on('focus', function (e) {
				tabClick($(this), $allTabs, $tabPanels, i);
			});

			$tab.on('keydown', function (e) {
				tabKeydown($(this), $allTabs, $tabPanels, $tabListItems, i, e);
			});
		};

		var setupTabPanels = function (tabPanel, i) {
			tabPanel
				.attr({
					'id': 'tab-panel-' + i,
					'role': 'tabpanel',
					'aria-hidden': 'true',
					'aria-labelledby': 'tab-link-' + i
				});

			if (i === 0) {
				tabPanel
					.attr('aria-hidden', 'false')
					.addClass('tab-widget__tab-content--active');
			}
		};

		var tabClick = function ($thisTab, $allTabs, $tabPanels, i) {
			$allTabs
				.attr({
					'tabindex': -1,
					'aria-selected': 'false'
				})
				.removeAttr('aria-describedby')
				.removeClass('tab-widget__link--active');

			$thisTab
				.attr({
					'tabindex': 0,
					'aria-selected': 'true',
					'aria-describedby': 'tab-widget-description'
				})
				.addClass('tab-widget__link--active');

			$tabPanels
				.attr('aria-hidden', 'true')
				.removeClass('tab-widget__tab-content--active');

			$tabPanels.eq(i)
				.attr('aria-hidden', 'false')
				.addClass('tab-widget__tab-content--active');
		};

		var tabKeydown = function ($thisTab, $allTabs, $tabPanels, $tabListItems, i, e) {
			var keyCode = e.which,
				$nextTab = $thisTab.parent().next().is('li') ? $thisTab.parent().next().find('a') : false,
				$previousTab = $thisTab.parent().prev().is('li') ? $thisTab.parent().prev().find('a') : false,
				$firstTab = $thisTab.parent().parent().find('li:first').find('a'),
				$lastTab = $thisTab.parent().parent().find('li:last').find('a');

			switch (keyCode) {
				// Left/Up
				case 37:
				case 38:
					e.preventDefault();
					e.stopPropagation();

					if (!$previousTab) {
						$lastTab.focus();
					} else {
						$previousTab.focus();
					}

					break;

				// Right/Down
				case 39:
				case 40:
					e.preventDefault();
					e.stopPropagation();

					if (!$nextTab) {
						$firstTab.focus();
					} else {
						$nextTab.focus();
					}

					break;

				// Home
				case 36:
					e.preventDefault();
					e.stopPropagation();

					$firstTab.focus();

					break;

				// End
				case 35:
					e.preventDefault();
					e.stopPropagation();

					$lastTab.focus();

					break;

				// Enter/Space
				case 13:
				case 32:
					e.preventDefault();
					e.stopPropagation();

					break;
			}
		};

		$tabWidget.each(function () {
			var $this = $(this),
				$tabList = $this.find('> ul'),
				$tabListItems = $tabList.find('li'),
				$allTabs = $tabListItems.find('a'),
				$tabPanels = $this.find('> div > div');

			$tabList.attr('role', 'tablist');
			$tabListItems.attr('role', 'presentation');

			$allTabs.each(function (i) {
				setupTabs($(this), $allTabs, $tabPanels, $tabListItems, i);
			});

			$tabPanels.each(function (i) {
				setupTabPanels($(this), i);
			});
		});

		$('html').addClass('js').removeClass('no-js');

	})(document, window, jQuery);
	$('label button').click(function () {
		
		$('label').find('input[type="search"]').focus();
	});

	$('#sub-btn').click(function () {

		$('.subsscribe').find('input[type="text"]').focus();
	});
	$('button.btn2').click(function () {

		$('label').find('#search2').focus();
	});
	//menu-sticky
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('header .header-middle').addClass("sticky");
		}
		else {
			$('header .header-middle').removeClass("sticky");

		}
	});
	//menu mobile

	$('.navbar-toggle').click(function () {
		$('.navmobile .nav-open').fadeToggle();
		$('.navbar-toggle,html').toggleClass('navbar-on, overflow');
		$('.hamburger').toggleClass('is-active');
	});
	

	/*$(".hamburger-menu").click(function () {
		$(".burger-1, .burger-2, .burger-3").toggleClass("open");
		$(".core-menu").slideToggle("fast");
	});*/
});
$(window).bind('load', handler);
$(window).bind('resize', handler);

