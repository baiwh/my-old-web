$(function(){
	
	
	$(".noteA").hover(function(){
		$(this).children(".noteP").stop(true).fadeIn("slow");
		$(this).children(".noteImg").stop(true).animate({left:"150px"},"slow");
	},function(){
		$(this).children(".noteP").stop(true).fadeOut("fast");
		$(this).children(".noteImg").stop(true).animate({left:"380px"},"fast");
	});
	
})