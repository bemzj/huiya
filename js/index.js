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
	// //产品轮播图
	// var proBanner1 = new Swiper('.swiper-container-new', {
	// 	pagination: '.swiper-pagination',
	// 	effect : 'fade',
	// 	loop:true,
	// 	onlyExternal : true,
	//
	// });
	//产品轮播图
	// var proBanner2 = new Swiper('.swiper-container-old', {
	// 	pagination: '.swiper-pagination',
	// 	loop:true,
	// 	slidesPerView: 3,
     //    paginationClickable: true,
     //    spaceBetween: 10,
	// 	nextButton: '.swiper-button-next',
    	// prevButton: '.swiper-button-prev',
	// 	onSlideNextEnd:function(swiper){
	// 		proBanner1.slideNext();
	// 	},
	// 	onSlidePrevEnd:function(swiper){
	// 		proBanner1.slidePrev();
	// 	},
    //
	// });
	// $(document).on('click','#prev1',function(){
	// 	proBanner1.slidePrev();
	// });
	// $(document).on('click','#next1',function(){
	// 	proBanner1.slidePrev();
	// })
        var proBanner2 = new Swiper('.swiper-container-old', {
            pagination: '.swiper-pagination',
            loop:true,
            slidesPerView: 3,

            paginationClickable:true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            onSlideChangeEnd: function(swiper){
               var $i=swiper.realIndex; //切换结束时，告诉我现在是第几个slide
               $('.swiper-container-new .swiper-slide').removeClass('active-nav');
               $('.swiper-container-new .swiper-slide').eq($i).addClass('active-nav');
            },
            onClick: function(swiper){
                var $i=swiper.realIndex;
                console.log($i);
            }
        })
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
