var scrollh;
//轮播图


//文档初始化
$(function(){
	//导航下来
	$('.navs').mouseover(function(){
		$(this).find('.twoNav').stop().slideDown();
		$(this).children('a').css('color','#b7dddf');
	});
	$('.navs').mouseleave(function(){
		$(this).find('.twoNav').stop().slideUp();
		$(this).children('a').css('color','#333333');
	});
	//弹出
	var scrollhh;
	$('.know a').click(function(){
		scrollhh = scrollh;
		$('#content').stop().slideUp(400);
		$('#popWindow').stop().animate({top:'0%'},400);
	});
	$('#popWindow').click(function(){		
		$('#content').stop().slideDown(400,function(){
			$(document).scrollTop(scrollhh);
			$('#popWindow').stop().animate({top:'100%'},400);
			$('#popWindow').scrollTop(0);
		});	
	});
		
	setInterval(function(){
		$('#hands').animate({bottom:'10%',opacity:'0'},800,function(){
			$(this).css('bottom','0%');
			$(this).css('opacity','1.0');
		})
	},800);

});
//窗口大小改变时
$(window).resize(function(){
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
$(window).scroll(function(){
	//记录滚动条位置
	scrollh = $(document).scrollTop();
	//视频播放按钮垂直居中
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
//
function videoPaly(url){

    $(".video_box").animate({top:0,opacity:1}).find("video").attr("src",url)[0].play();
}

$(".video_box .video_close").on("click",function(){
    $(".video_box").animate({top:'-100%',opacity:0}).find("video")[0].pause();
})
