
var data={
    banners:'',
    product:'',
    productList:'',
    productVideo:{
        "title":'芭莎岩石',
        "video":'http://ovy8sjkfb.bkt.clouddn.com/zls.mp4'
    }
};
var all=new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        $.get('json/banner.json',false,function(res){
            $this.banners=res.banner;
            setTimeout(function(){
                var banner = new Swiper('.swiper-container-banner', {
                    direction: 'horizontal',
                    autoplay : 5000,
                    loop:true,
                    autoplayDisableOnInteraction : false,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
                $('#prev').click(function(){
                	banner.swipePrev();
                });
                $('#next').click(function(){
                	banner.swipeNext();
                });
            },500)
        },"JSON");
        $.get('json/product.json',false,function (res) {
            $this.product=res;
            $this.productList=res.bsys.banner[0];

             // setTimeout(function(){
             //     //产品轮播图
             //     var proBanner2 = new Swiper('.swiper-container-old', {
             //         pagination: '.swiper-pagination',
             //         loop:true,
             //         slidesPerView: 3,
             //         spaceBetween: 10,
             //         nextButton: '.swiper-button-next',
             //         prevButton: '.swiper-button-prev',
             //         onSlideChangeEnd: function(swiper){
             //            var $i=swiper.activeIndex; //切换结束时，告诉我现在是第几个slide
             //            var $k=$i-3;
             //            $('.swiper-container-new .swiper-slide').removeClass('active-nav');
             //            $('.swiper-container-new .swiper-slide').eq($k).addClass('active-nav');
             //         }
             //     })
             //
             // },1100);
        },'JSON');

    },
    methods:{
        replaceBanner:function(jsonFile,index){
            var $this=this;
            $.get('json/product.json',false,function (res) {
                switch (jsonFile){
                    case "bsys":
                        $this.productList=res.bsys.banner[index];
                        break;
                    case "tys":
                        $this.productList=res.tys.banner[index];
                        break;
                    case "msnh":
                        $this.productList=res.msnh.banner[index];
                        break;
                    case "xdbw":
                        $this.productList=res.xdbw.banner[index];
                        break;
                    case "gyyx":
                        $this.productList=res.gyyx.banner[index];
                        break;
                    case "dsjh":
                        $this.productList=res.dsjh.banner[index];
                        break;
                }

                setTimeout(function(){

                    //产品轮播图
                    var proBanner2 = new Swiper('.swiper-container-old', {
                        pagination: '.swiper-pagination',
                        loop:true,
                        slidesPerView: 3,

                        spaceBetween: 10,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        onSlideChangeEnd: function(swiper){
                            var $i=swiper.activeIndex; //切换结束时，告诉我现在是第几个slide
                            var $k=$i-3;
                            $('.swiper-container-new .swiper-slide').removeClass('active-nav');
                            $('.swiper-container-new .swiper-slide').eq($k).addClass('active-nav');
                        }
                    })
                    $('.swiper-container-old .swiper-slide').on('click',function(){
                        var $i=$(this).index();
                        var $k=$i-3;
                        proBanner2.slideTo($k);
                        $('.swiper-container-new .swiper-slide').removeClass('active-nav');
                        $('.swiper-container-new .swiper-slide').eq($k).addClass('active-nav');
                    })
                },500);
            },'JSON')
        }
    }

});