$(function(){
//	搜索栏获取焦点清空内容
	$(".inp").focus(function(){
		var txtValue=$(this).val();
		if(txtValue=="搜索功能待完善"){
			$(this).val("");
		}
	}).blur(function(){
		var txtValue=$(this).val();
		if(txtValue==""){
			$(this).val("搜索功能待完善");
		}
	});
	
	$(".searchButton").click(function(){
		alert("等我学完后端和数据库。。你再来试试北？");
	})

//	导航栏鼠标悬浮
	//life
	$(".mainNav li").hover(function(){
		$(this).find("#sub").stop(true).slideDown("slow");
	},function(){
		$(this).find("#sub").stop(true).slideUp("fast");
	})
	
	//more
	$(".mainNav li").siblings().hover(function(){
		$(this).find("#subM").stop(true).fadeIn("fast");
	},function(){
		$(this).find("#subM").stop(true).fadeOut("slow");
	})
	


})


//回到首页五秒消失
function hide(){
	var box=document.getElementById("subImg");
	box.style.display='none';
	}
setTimeout("hide()",2000);


