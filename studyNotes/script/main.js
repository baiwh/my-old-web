$(function(){
						
	$(".menu h1").click(function(){
		var $con=$(this).next();
		if($con.is(":hidden")){
			$(this).css("border","2px solid #3399FF")
				.next().slideDown("slow")
				.parents().siblings().children(".menu h1")
				.css("border","2px solid #ffffff")
				.next().slideUp("slow");
		} else{
			$(this).css("border","2px solid #ffffff")
				.next().slideUp("fast");
		}
	})
})