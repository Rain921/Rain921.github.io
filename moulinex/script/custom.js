var compareLink = "/compare?category_id=";

$(document).on('click', '.close-comp', function(){
	var cnt = getCookie('cnt');
    if(typeof(cnt) == 'undefined'){
		cnt = 0;
	}
	cnt = Number(cnt);
    cnt--;
    document.cookie = "cnt=" + cnt+ "; path=/";
	if (cnt == 0) {
        $('.head_compare').addClass('btn_block');
    }
	$(".cnt").text(cnt);
	
	var id = $(this).parents('.accordion-compare-selected').attr('data-id');
	
	removeFromCompareMenu(id);
	
	checkCategoryId();
	
	var _el_btn = $('.hide-options a.compare[data-id="'+id+'"]');
	_el_btn.parent().parent().removeClass('compare');
    _el_btn.removeClass('dell_block');
    _el_btn.addClass('add_compare');
	_el_btn.text($('.mess25').attr('data-text'));

	
});

$(document).ready(function () {
    var cnt = getCookie('cnt');
	if(typeof(cnt) == 'undefined'){
		cnt = 0;
	}
	cnt = Number(cnt);
    /*if (cnt >= 3) {
        $('.add_compare').addClass('btn_block');
    }*/
    if (cnt == 0) {
        $('.head_compare').addClass('btn_block');
    }      
    $('.populap__tabs-tovar').find('.dell_block').parent().parent().addClass('compare');    

  
    // $('.moby__menu .moby__menu-language li.active a').click(function() {
    //     if($(".moby__menu .moby__menu-language li.active a").text() == 'ua') {
    //         document.location.href='/ru/';
    //     } else {
    //         document.location.href='/ua/';
    //     }
    //     return false;
    // });
    
	$('.cnt').text(cnt);
    $('.compare.red_btn').mousedown(function() {
        $(".cnt").addClass("animation");
    }); 
    
    
    
    $('.compare.red_btn').mouseup(function() {
       setTimeout( function() {
        $(".cnt").removeClass("animation");
       }, 1000);
    });
	
	
	var id1detail = getCookie('id1detail');
    var id2detail = getCookie('id2detail');
    var id3detail = getCookie('id3detail');
	
	var id4detail = getCookie('id4detail');
    var id5detail = getCookie('id5detail');
    var id6detail = getCookie('id6detail');
	
	var id7detail = getCookie('id7detail');
    var id8detail = getCookie('id8detail');
    var id9detail = getCookie('id9detail');
	
	if(id1detail != null && typeof id1detail != "undefined" && id1detail != "dell"){
		var _obj = JSON.parse(id1detail);
		setCompareMenu(_obj);
	}
	if(id2detail != null && typeof id2detail != "undefined" && id2detail != "dell"){
		var _obj = JSON.parse(id2detail);
		setCompareMenu(_obj);
	}
	
	if(id3detail != null && typeof id3detail != "undefined" && id3detail != "dell"){
		var _obj = JSON.parse(id3detail);
		setCompareMenu(_obj);
	}
	
	if(id4detail != null && typeof id4detail != "undefined" && id4detail != "dell"){
		var _obj = JSON.parse(id4detail);
		setCompareMenu(_obj);
	}
	
	if(id5detail != null && typeof id5detail != "undefined" && id5detail != "dell"){
		var _obj = JSON.parse(id5detail);
		setCompareMenu(_obj);
	}
	
	if(id6detail != null && typeof id6detail != "undefined" && id6detail != "dell"){
		var _obj = JSON.parse(id6detail);
		setCompareMenu(_obj);
	}
	
	if(id7detail != null && typeof id7detail != "undefined" && id7detail != "dell"){
		var _obj = JSON.parse(id7detail);
		setCompareMenu(_obj);
	}
	
	if(id8detail != null && typeof id8detail != "undefined" && id8detail != "dell"){
		var _obj = JSON.parse(id8detail);
		setCompareMenu(_obj);
	}
	
	if(id9detail != null && typeof id9detail != "undefined" && id9detail != "dell"){
		var _obj = JSON.parse(id9detail);
		setCompareMenu(_obj);
	}
	
	
	var id1 = getCookie('id1');
    var id2 = getCookie('id2');
    var id3 = getCookie('id3');
	
	var id4 = getCookie('id4');
    var id5 = getCookie('id5');
    var id6 = getCookie('id6');
	
	var id7 = getCookie('id7');
    var id8 = getCookie('id8');
    var id9 = getCookie('id9');
	
	if(id1 != null && typeof id1 != "undefined" && id1 != "dell"){
		var _element = $('.compare[data-id="'+id1+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	if(id2 != null && typeof id2 != "undefined" && id2 != "dell"){
		var _element = $('.compare[data-id="'+id2+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id3 != null && typeof id3 != "undefined" && id3 != "dell"){
		var _element = $('.compare[data-id="'+id3+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id4 != null && typeof id4 != "undefined" && id4 != "dell"){
		var _element = $('.compare[data-id="'+id4+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id5 != null && typeof id5 != "undefined" && id5 != "dell"){
		var _element = $('.compare[data-id="'+id5+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id6 != null && typeof id6 != "undefined" && id6 != "dell"){
		var _element = $('.compare[data-id="'+id6+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id7 != null && typeof id7 != "undefined" && id7 != "dell"){
		var _element = $('.compare[data-id="'+id7+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id8 != null && typeof id8 != "undefined" && id8 != "dell"){
		var _element = $('.compare[data-id="'+id8+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	if(id9 != null && typeof id9 != "undefined" && id9 != "dell"){
		var _element = $('.compare[data-id="'+id9+'"]');
		_element.removeClass('add_compare');      
		_element.closest('.populap__tabs-tovar').addClass('compare');    
		_element.addClass('dell_block');
		_element.text($('.mess26').attr('data-text'));
	}
	
	checkCategoryId();
	if(cnt >= 9){
		setDisable();
	}
	
	
	
	
    //console.log(cnt);

 }); 
 
 
 function setDisableCategory(category){
	$('li[data-category="'+category+'"] a.compare').not('.dell_block').addClass('btn_block'); 
 }
 function setAvaibleCategory(category){
	$('li[data-category="'+category+'"] a.compare').removeClass('btn_block'); 
 }
 
 function setDisable(){
	$('a.compare').not('.dell_block').addClass('btn_block'); 
 }
 function setAvaible(){
	$('a.compare').removeClass('btn_block'); 
 }
 
 function setCompareMenu(_obj){
	 var _category = _obj.category;
	 var _img = _obj.img;
     var _price = _obj.price;
	 var _name = _obj.name
	 
	
	 var _cnt = Number($('.accordion-compare-wr[data-category="'+_category+'"] .count-m').eq(0).text())+1;
	 console.log(_cnt);
	 $('.accordion-compare-wr[data-category="'+_category+'"] .count-m').text(_cnt);
	 var _html = '<div class="accordion-compare-selected" data-id="'+_obj.id+'"><img src="'+_img+'" alt=""><div class="comp-r"><a class="close-comp" style="cursor:pointer">&#10006;</a><a href="">'+_name+'</a><div class="comp-price">'+_price+'</div></div></div>';
	 $('.accordion-compare-wr[data-category="'+_category+'"] .accordion-compare-item').append(_html);
 }
 
 function checkCategoryId(){
	var id1detail = getCookie('id1detail');
    var id2detail = getCookie('id2detail');
    var id3detail = getCookie('id3detail');
	
	var id4detail = getCookie('id4detail');
    var id5detail = getCookie('id5detail');
    var id6detail = getCookie('id6detail');
	
	var id7detail = getCookie('id7detail');
    var id8detail = getCookie('id8detail');
    var id9detail = getCookie('id9detail');
	 
	 
	 var arrObj = [];
	arrObj.push(id1detail);
	arrObj.push(id2detail);
	arrObj.push(id3detail);
	arrObj.push(id4detail);
	arrObj.push(id5detail);
	arrObj.push(id6detail);
	arrObj.push(id7detail);
	arrObj.push(id8detail);
	arrObj.push(id9detail);
	
	var categoriesObj = {};
	for(var i=0; i<arrObj.length; i++){
		if(arrObj[i] == 'dell'){
			continue;
		}else{
			
			if(typeof arrObj[i] != 'undefined'){
				var obj = JSON.parse(arrObj[i]);
				if(typeof categoriesObj[obj.category] == 'undefined'){
					categoriesObj[obj.category]={};
					categoriesObj[obj.category]=1;
				}else{
					categoriesObj[obj.category] += 1;
					if(categoriesObj[obj.category] >= 3){
						setDisableCategory(obj.category);
					}else{
						setAvaibleCategory(obj.category);
					}
					
	
					if (categoriesObj[obj.category] >= 2 && $('.catbtn_'+obj.category).length == 0) {
						 if($('.mess33').length > 0){
							 var msgCompare = $('.mess33').date('text');
						 }else{
							 var msgCompare = "Сравнить";
						 }
						 var _btn = '<div class="red-btn"><a href="'+compareLink+obj.category+'" class="red_btn catbtn_'+obj.category+'">'+msgCompare+'</a></div>';
						 $('.accordion-compare-wr[data-category="' + obj.category + '"]').append(_btn);
					}	
					
				}
			}	
		}
	}
	
	var _keys = Object.keys(categoriesObj);
	console.log(_keys);
	for(var i=0; i<_keys.length; i++){
		
		console.log(categoriesObj[_keys[i]]);
		if(categoriesObj[_keys[i]] <= 1 && $('.catbtn_'+_keys[i]).length > 0){
			$('.catbtn_'+_keys[i]).remove();
		}
	}
	 
 }
 
 function addCompareToMenu(id){
	 var _element = $('.compare[data-id="'+id+'"]').parents('.populap__tabs-tovar');
	 var _category = _element.attr('data-category');
	 var _img = _element.find('.img img').attr('src');
	 var _price = _element.find('.price').text();
	 var _name = _element.find('.name').text();
	 
	 var _obj = {};
	 _obj['id']=id;
	 _obj['img']=_img;
	 _obj['price']=_price;
	 _obj['category']=_category;
	 _obj['name']=_name;
	 
	 _obj = JSON.stringify(_obj);
	 
	 
	
	var id1detail = getCookie('id1detail');
    var id2detail = getCookie('id2detail');
    var id3detail = getCookie('id3detail');
	
	var id4detail = getCookie('id4detail');
    var id5detail = getCookie('id5detail');
    var id6detail = getCookie('id6detail');
	
	var id7detail = getCookie('id7detail');
    var id8detail = getCookie('id8detail');
    var id9detail = getCookie('id9detail');
	
	
	
	 if (id1detail == null || typeof id1detail === "undefined" || id1detail == "dell") {
        document.cookie = "id1detail=" + _obj + "; path=/";
    } else if (id2detail == null || typeof id2detail === "undefined" || id2detail == "dell") {
        document.cookie = "id2detail=" + _obj + "; path=/";
    } else if (id3detail == null || typeof id3detail === "undefined" || id3detail == "dell") {
        document.cookie = "id3detail=" + _obj + "; path=/";
    } else if (id4detail == null || typeof id4detail === "undefined" || id4detail == "dell") {
        document.cookie = "id4detail=" + _obj + "; path=/";
    } else if (id5detail == null || typeof id5detail === "undefined" || id5detail == "dell") {
        document.cookie = "id5detail=" + _obj + "; path=/";
    } else if (id6detail == null || typeof id6detail === "undefined" || id6detail == "dell") {
        document.cookie = "id6detail=" + _obj + "; path=/";
    } else if (id7detail == null || typeof id7detail === "undefined" || id7detail == "dell") {
        document.cookie = "id7detail=" + _obj + "; path=/";
    } else if (id8detail == null || typeof id8detail === "undefined" || id8detail == "dell") {
        document.cookie = "id8detail=" + _obj + "; path=/";
    } else if (id9detail == null || typeof id9detail === "undefined" || id9detail == "dell") {
        document.cookie = "id9detail=" + _obj + "; path=/";
    }  
	

	 var _cnt = Number($('.accordion-compare-wr[data-category="'+_category+'"] .count-m').eq(0).text())+1;
	 $('.accordion-compare-wr[data-category="'+_category+'"] .count-m').text(_cnt);
	 var _html = '<div class="accordion-compare-selected" data-id="'+id+'"><img src="'+_img+'" alt=""><div class="comp-r"><a class="close-comp"  style="cursor:pointer">&#10006;</a><a href="">'+_name+'</a><div class="comp-price">'+_price+'</div></div></div>';
     $('.accordion-compare-wr[data-category="'+_category+'"] .accordion-compare-item').append(_html);
     if (_cnt >= 2 && $('.catbtn_'+_category).length == 0) {
		 
		 if($('.mess33').length > 0){
			 var msgCompare = $('.mess33').date('text');
		 }else{
			 var msgCompare = "Сравнить";
		 }
         var _btn = '<div class="red-btn"><a href="'+compareLink+_category+'" class="red_btn catbtn_'+_category+'">'+msgCompare+'</a></div>';
         $('.accordion-compare-wr[data-category="' + _category + '"]').append(_btn);
     }
 }
 
 function removeFromCompareMenu(id){
	 
	var id1 = getCookie('id1');
    var id2 = getCookie('id2');
    var id3 = getCookie('id3');
	
	var id4 = getCookie('id4');
    var id5 = getCookie('id5');
    var id6 = getCookie('id6');
	
	var id7 = getCookie('id7');
    var id8 = getCookie('id8');
    var id9 = getCookie('id9');
    if (id === id1) {
        document.cookie = "id1=dell; path=/";
        document.cookie = "id1detail=dell; path=/";
    } else if (id === id2) {
        document.cookie = "id2=dell; path=/";
        document.cookie = "id2detail=dell;path=/";
    } else if (id === id3) {
        document.cookie = "id3=dell; path=/";
		document.cookie = "id3detail=dell; path=/";
    }else if (id === id4) {
        document.cookie = "id4=dell; path=/";
		document.cookie = "id4detail=dell; path=/";
    }else if (id === id5) {
        document.cookie = "id5=dell; path=/";
		document.cookie = "id5detail=dell; path=/";
    }else if (id === id6) {
        document.cookie = "id6=dell; path=/";
		document.cookie = "id6detail=dell; path=/";
    }else if (id === id7) {
        document.cookie = "id7=dell; path=/";
		document.cookie = "id7detail=dell; path=/";
    }else if (id === id8) {
        document.cookie = "id8=dell; path=/";
		document.cookie = "id8detail=dell; path=/";
    }else if (id === id9) {
        document.cookie = "id9=dell; path=/";
		document.cookie = "id9detail=dell; path=/";
    }
	 
	 var _element = $('.compare[data-id="'+id+'"]').parents('.populap__tabs-tovar');
	 var _category = _element.attr('data-category');
	 $('.accordion-compare-selected[data-id="'+id+'"]').remove();
	 var _cnt = Number($('.accordion-compare-wr[data-category="'+_category+'"] .count-m').eq(0).text())-1;
	 $('.accordion-compare-wr[data-category="'+_category+'"] .count-m').text(_cnt);
 }
 
$(document).on('click', '.add_compare', function () {  
console.log('ssssssssssssssssssss');

    $(this).removeClass('add_compare');      
    $(this).closest('.populap__tabs-tovar').addClass('compare');    
    $(this).addClass('dell_block');
    $(this).text($('.mess26').attr('data-text'));
    var cnt = getCookie('cnt');
	
	if(typeof(cnt) == 'undefined'){
		cnt = 0;
	}
	cnt = Number(cnt);
    cnt++;
	if(cnt >= 9){
		setDisable();
	}else{
		setAvaible();
	}
	
    document.cookie = "cnt=" + cnt+ "; path=/";
    $(".cnt").text(cnt); 
    /*f (cnt >= 3) {
        $('.add_compare').addClass('btn_block');
    }*/
    if (cnt > 0) {
        $('.head_compare').removeClass('btn_block');
    }
    if (cnt == 0) {
        $('.head_compare').addClass('btn_block');
    }
    var id1 = getCookie('id1');
    var id2 = getCookie('id2');
    var id3 = getCookie('id3');
	
	var id4 = getCookie('id4');
    var id5 = getCookie('id5');
    var id6 = getCookie('id6');
	
	var id7 = getCookie('id7');
    var id8 = getCookie('id8');
    var id9 = getCookie('id9');
	
    var id = $(this).attr('data-id');
	addCompareToMenu(id);
    if (id1 == null || typeof id1 === "undefined" || id1 == "dell") {
        document.cookie = "id1=" + id + "; path=/";
    } else if (id2 == null || typeof id2 === "undefined" || id2 == "dell") {
        document.cookie = "id2=" + id + "; path=/";
    } else if (id3 == null || typeof id3 === "undefined" || id3 == "dell") {
        document.cookie = "id3=" + id + "; path=/";
    } else if (id4 == null || typeof id4 === "undefined" || id4 == "dell") {
        document.cookie = "id4=" + id + "; path=/";
    } else if (id5 == null || typeof id5 === "undefined" || id5 == "dell") {
        document.cookie = "id5=" + id + "; path=/";
    } else if (id6 == null || typeof id6 === "undefined" || id6 == "dell") {
        document.cookie = "id6=" + id + "; path=/";
    } else if (id7 == null || typeof id7 === "undefined" || id7 == "dell") {
        document.cookie = "id7=" + id + "; path=/";
    } else if (id8== null || typeof id8 === "undefined" || id8 == "dell") {
        document.cookie = "id8=" + id + "; path=/";
    } else if (id9 == null || typeof id9 === "undefined" || id9 == "dell") {
        document.cookie = "id9=" + id + "; path=/";
    } 
	
	checkCategoryId();

});

$(document).on('click', '.dell_block', function () {        
    $(this).parent().parent().removeClass('compare');
    $(this).removeClass('dell_block');
    $(this).addClass('add_compare');    
    
    $(this).text($('.mess25').attr('data-text'));
	var cnt = getCookie('cnt');
    if(typeof(cnt) == 'undefined'){
		cnt = 0;
	}
	cnt = Number(cnt);
    cnt--;
	if(cnt >= 9){
		setDisable();
	}else{
		setAvaible();
	}
    document.cookie = "cnt=" + cnt+ "; path=/";
    if (cnt == 0) {
        $('.head_compare').addClass('btn_block');
    }
    /*if (cnt < 3) {
        $('.add_compare').removeClass('btn_block');
    }*/

    $(".cnt").text(cnt);
    var id = $(this).attr('data-id');
	removeFromCompareMenu(id);
    
	
	checkCategoryId();
    
    //console.log(cnt);

       
});




function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


// $(document).on('change', '.sort-ch', function () {
//      $(".sort-ch").not(this).prop("checked", false);
// });

// $(document).on('change', '.check-filter', function () {

//    $(".sort-content").removeClass('open');
//     var filter ={};
//     for(var i=0; i<$(".check-filter:checkbox:checked").length;i++ ){
//         if(typeof(filter[$(".check-filter:checkbox:checked").eq(i).attr('name')])=="undefined"){
//             filter[$(".check-filter:checkbox:checked").eq(i).attr('name')]={}
//             filter[$(".check-filter:checkbox:checked").eq(i).attr('name')]=$(".check-filter:checkbox:checked").eq(i).val();
//         }else{
//             filter[$(".check-filter:checkbox:checked").eq(i).attr('name')]=filter[$(".check-filter:checkbox:checked").eq(i).attr('name')]+','+$(".check-filter:checkbox:checked").eq(i).val();
//         }

//     }

//     $.ajax({
//         url: "/product/find",
//         method: "POST",
//         dataType: 'html',
//         data: {
//             name: 'text',
//             obj: filter,
//             "_csrf-frontend": $("input[name='_csrf-frontend']").val(),

//         },
//         error: function () {

//         },
//         success: function (res) {
//             $('.category__content-list').html(res);

//         },
//         complete: function () {
//             __isAjax = false;
//             _return = false;
//         }
//     });

// });


// $(document).on('click', '.product-select', function () {
//     var id = $(this).attr('data-id');
//     var old = getCookie('interes_prod');
//     if ( old == null || typeof old === "undefined") {
//         document.cookie = "interes_prod=" + id+ "; path=/";
//     } else {
//         var prod = old + ',' + id;
//         document.cookie = "interes_prod=" + prod+ "; path=/";
//     }
// });

// $('.popup_offers').css("display", "none");
// $(function() {
//     $('.popap_offers_btn').on('click', function(e)  {
//         var id = $(this).attr('data-id');
//         $.ajax({
//             url: "/site/offers",
//             method: "POST",
//             dataType: 'html',
//             data: {
//                 id: id,
//                 "_csrf-frontend": $("input[name='_csrf-frontend']").val(),
//             },
//             error: function () {
//             },
//             success: function (res) {
//                 $('.popup_list').html(res);
//             },
//             complete: function () {
//                 __isAjax = false;
//                 _return = false;
//             }
//         });
//         $('.popup_offers').fadeIn(350);
//         e.preventDefault();
//         $('body').addClass('overflow');
//     });
//     $('[data-popup-close]').on('click', function(e)  {

//         $('.popup_offers').fadeOut(350);
//         $('body').removeClass('overflow');
//         e.preventDefault();
//     });
// });


// $(document).ready(function () {

// $('.popap_shops_btn').on('click', function(e)  {
//     var id = $(this).attr('data-id');
//     $.ajax({
//         url: "/site/shops-widget",
//         method: "POST",
//         dataType: 'html',
//         data: {
//             id: id,
//             "_csrf-frontend": $("input[name='_csrf-frontend']").val(),
//         },
//         error: function () {
//         },
//         success: function (res) {
//             $('.popup_list').html(res);
//         },
//         complete: function () {
//             __isAjax = false;
//             _return = false;
//         }
//     });
//     $('.popup_offers').fadeIn(350);
//     e.preventDefault();
//     $('body').addClass('overflow');
// });

// });







$(document).ready(function() {
    
    $('[data-fancybox="video"]').fancybox({
        youtube : {
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        },
        afterShow: function( instance, slide ) {

            $('.main__slider-f').slick('slickGoTo', slide.index);
            console.log(slide.index);
		}
    });


    $( ".main-menu-l" ).on( "click", function(event) {

        event.preventDefault();

        let $wrap = $('.left-menu');
        let $dark = $('.darknes');


        let wrapPos = $('.main-menu-i').offset();
        console.log(wrapPos.left);
        $wrap.width(wrapPos.left + 380 + 'px');

        $wrap.addClass('active');
        $dark.addClass('active');
        $('body').addClass('popup-open1');

    });

    $( ".main-menu-l-close" ).on( "click", function(event) {

        event.preventDefault();

        let $wrap = $('.left-menu');
        let $dark = $('.darknes');

        $wrap.removeClass('active');
        $dark.removeClass('active');
        $('body').removeClass('popup-open1');

    });

    
    $( ".compare-js" ).on( "click", function(event) {

        event.preventDefault();

        let $wrap = $('.compare-list');
        let $dark = $('.darknes');


        let wrapPos = $(this).offset();
        console.log(wrapPos.left);
        $wrap.css({'left': wrapPos.left + 122 + 'px'});

        $wrap.addClass('active');
        $dark.addClass('active');
        $('body').addClass('popup-open1');

    });

    $( ".darknes" ).on( "click", function(event) {

        event.preventDefault();

        let $wrap = $('.left-menu');

        if ( $wrap.hasClass('active') ) {
            $wrap.removeClass('active');
        }

        if ( $('.compare-list').hasClass('active') ) {
            $('.compare-list').removeClass('active');
        }

        
        $('body').removeClass('popup-open1');
        $(this).removeClass('active');

    });

    $( ".left-menu-ttl" ).on( "click", function(event) {

        event.preventDefault();

        let $this = $(this);

       
        
        $('.left-menu-ttl').not($this).next().slideUp();
        $('.left-menu-ttl').removeClass('active');

        
        if ( $this.next().is(":hidden") ) {
            
            $this.addClass('active');

            $this.next().slideToggle( "slow", function() {

            });
        } else {
            $this.next().slideToggle( "slow", function() {

            });
            $this.removeClass('active');
        }
        
        return false;
    });
/*
    $( ".accordion-compare-ttl" ).on( "click", function(event) {

        event.preventDefault();

        let $this = $(this);

       
        
        $('.accordion-compare-ttl').not($this).next().slideUp();
        $('.accordion-compare-ttl').removeClass('active');


        if ( !$this.hasClass('active') ) {
            $this.addClass('active');
            $this.next().slideToggle( "slow", function() {
                // Animation complete.
            });
        } else {
        }
        return false;
    });*/

    // $( ".compare.red_btn" ).on( "click", function(event) {

    //     event.preventDefault();

    //     $('.header__right .compare span').addClass('animation');
    //     setTimeout (function(){
            
    //         $(".header__right .compare span").removeClass("animation");
    //      }, 1500);
    // });
    

});
