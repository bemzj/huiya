
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

//          setTimeout(function(){
//              var viewSwiper = new Swiper('.view .swiper-container', {
//                  nextButton: '.arrow-left',
//                  prevButton: '.arrow-right',
//                  onInit:function(){
//                      $('.view img').css({"opacity":1});
//                  },
//                  onSlideChangeStart: function() {
//                      updateNavPosition()
//                  }
//              });
//
//              $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
//                  e.preventDefault()
//                  if (viewSwiper.activeIndex == 0) {
//                      viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
//                      return
//                  }
//                  viewSwiper.swipePrev()
//              })
//              $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
//                  e.preventDefault()
//                  if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
//                      viewSwiper.swipeTo(0, 1000);
//                      return
//                  }
//                  viewSwiper.swipeNext()
//              })
//
//              var previewSwiper = new Swiper('.preview .swiper-container', {
//                  visibilityFullFit: true,
//                  slidesPerView: 'auto',
//                  onlyExternal: true,
//                  onSlideClick: function() {
//                      viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
//                  }
//              })
//
//
//              function updateNavPosition() {
//                  $('.preview .active-nav').removeClass('active-nav');
//                  var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
//                  if (!activeNav.hasClass('swiper-slide-visible')) {
//                      if (activeNav.index() > previewSwiper.activeIndex) {
//                          var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
//                          previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
//                      } else {
//                          previewSwiper.swipeTo(activeNav.index())
//                      }
//                  }
//              }
//              var preview=$('.preview');
//              var sww=preview.find('.swiper-wrapper').width()+38;
//              preview.find('.swiper-container').css({"width":sww+"px"});
//          },500);
        },'JSON')

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

                    var viewSwiper = new Swiper('.view .swiper-container', {
                        width : window.innerWidth,
                        nextButton: '.arrow-left',
                        prevButton: '.arrow-right',
                        onInit:function(){
                            $('.view img').css({"opacity":1});
                        },
                        onSlideChangeStart: function() {
                            updateNavPosition()
                        }
                    });

                    $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
                        e.preventDefault();
                        if (viewSwiper.activeIndex == 0) {
                            viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
                            return
                        }
                        viewSwiper.swipePrev()
                    })
                    $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
                        e.preventDefault()
                        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                            viewSwiper.swipeTo(0, 1000);
                            return
                        }
                        viewSwiper.swipeNext()
                    })

                    var previewSwiper = new Swiper('.preview .swiper-container', {
                        visibilityFullFit: true,
                        slidesPerView: 'auto',
                        onlyExternal: true,
                        onSlideClick: function() {
                            viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
                        }
                    })


                    function updateNavPosition() {
                        $('.preview .active-nav').removeClass('active-nav');
                        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
                        if (!activeNav.hasClass('swiper-slide-visible')) {
                            if (activeNav.index() > previewSwiper.activeIndex) {
                                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
                            } else {
                                previewSwiper.swipeTo(activeNav.index())
                            }
                        }
                    }
                    var preview=$('.preview');
                    var sww=preview.find('.swiper-wrapper').width()+38;
                    preview.find('.swiper-container').css({"width":sww+"px"});
                },500);
            },'JSON')
        }
    }

});