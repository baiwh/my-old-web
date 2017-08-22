function showImg(index){
	$(".rollImg").children("div").eq(index)
	.stop(true,true).fadeIn("slow")
	.siblings().fadeOut();
}

$(function(){
	var $imgroll=$(".page div");

	var len=$imgroll.length;
	var index =0;
	var adTimer=null;
//	移入移出鼠标
	$imgroll.mousemove(function(){
		index=$imgroll.index(this);
		showImg(index);
	}).eq(0).mouseover();
//	移入停止
	$(".rollImg").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showImg(index);
			$(".page div").eq(index).addClass("pagehov").siblings().removeClass("pagehov");
			index++;
			if(index==len){
				index=0;
			}
		},3000);
	}).trigger("mouseleave");
	
	
})



//几何区效果
$(function(){
	$(".life").hover(function(){
		$(".geoLife").stop(true).fadeIn("slow");
	},function(){
		$(".geoLife").stop(true).fadeOut(10);
	});
	
	$(".study").hover(function(){
		$(".geoStudy").stop(true).fadeIn("slow");
	},function(){
		$(".geoStudy").stop(true).fadeOut(10);
	});
	
	$(".more").hover(function(){
		$(".geoMore").stop(true).fadeIn("slow");
	},function(){
		$(".geoMore").stop(true).fadeOut(10);
	});
	
	
//	studyNotes的效果
	$(".sCon a").hover(function(){
		$(this).parent().children(".bf").stop().animate({left:"95px"},"slow");
		$(this).parent().children(".af").stop().animate({left:"35px"},"slow");
	},function(){
		$(this).parent().children(".bf").stop().animate({left:"65px"},"slow");
		$(this).parent().children(".af").stop().animate({left:"65px"},"slow");
	})
	
	
//选项卡	
	//选择项
	var $tit=$("div.tit ul li");
	$tit.hover(function(){
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
//		以此为初值索引
		var index=$tit.index(this);
		$("div.eCon>div").eq(index).show().siblings().hide();
	})

//图片上出字
	$(".show").hover(function(){
		$(this).stop().children("a").fadeIn();
	},function(){
		$(this).stop().children("a").fadeOut("fast");
	})
	
	
//返回顶部
	
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#top").show();
		}else{
			$("#top").hide();
		}
	})
	$("#top").click(function(){
		$("body,html").animate({"scrollTop":"0"},200);
	});
	
// 图片
	$(".imgs img").mouseover(function(){
		$(this).stop().animate({"top":"-10px"},"fast");
	}).mouseout(function(){
		$(this).stop().animate({"top":"0"});
	});
	$(".prev").click(function(){
		$(".imgs").stop().animate({"left":"0"});
	})
	$(".next").click(function(){
		$(".imgs").stop().animate({"left":"-1000"});
	})
})
