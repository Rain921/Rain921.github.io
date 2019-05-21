(function($){$.fn.animated=function(inEffect){
	 $this=$(this);
	 el=$this.offset().top;
	var windwHeight=$(window).height();
	var pageHeight;
	$this.css("opacity","0");
	windwHeight=$(window).height();
	pageHeight=$(window).scrollTop()+windwHeight*1.5;
	if(pageHeight>el){$this.addClass("animated");
	$this.addClass(inEffect).css("opacity","");
}
$(window).on('scroll',function(){
	pageHeight=$(window).scrollTop()+windwHeight*0.6;
	if(pageHeight>el){$this.addClass("animated");
	$this.addClass(inEffect).css("opacity","");}});};})(jQuery);