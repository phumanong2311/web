jQuery(document).ready(function($){$('.sameheight').matchHeight();var headersticky=education_web_ajax_script.headersticky;if(headersticky==1){try{$(".headerone .header-inner").sticky({topSpacing:0});$(".stickytwo .logo_and_extra_holder").sticky({topSpacing:0});$(".headerfour .header-inner").sticky({topSpacing:0});}
catch(e){}}
$(window).load(function(){$('.preloader').delay(300).fadeOut('slow');})
var sidebarstick=education_web_ajax_script.sidebarstick;if(sidebarstick==1){try{$('.content-area').theiaStickySidebar({additionalMarginTop:30});$('.widget-area').theiaStickySidebar({additionalMarginTop:30});}
catch(e){}}
$('.search').click(function(){$('.ed-pop-up').toggleClass('active');});$('.search-overlay').click(function(){$('.ed-pop-up').removeClass('active');});$(".slider-one").owlCarousel({loop:true,autoplay:true,smartSpeed:800,autoplayTimeout:6000,autoplayHoverPause:true,center:false,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,items:1,responsive:{300:{nav:false,},480:{nav:false,},768:{nav:false,},1170:{nav:true,},}});$(".testimonial-carousel").owlCarousel({loop:true,autoplay:true,smartSpeed:700,center:false,margin:15,nav:false,dots:true,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:1,},1170:{items:2,},}});$(".clients-slider").owlCarousel({loop:true,autoplay:true,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:false,dots:false,responsive:{0:{items:1},300:{items:2,},480:{items:3,},768:{items:4,},1170:{items:5,},}});$(".academics-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$(".course-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$(".extraservices-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$(".extraservices-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$(".teammember-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$(".blogs-slider").owlCarousel({loop:true,autoplay:false,smartSpeed:500,autoplayTimeout:3000,margin:30,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:false,responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:2,},}});$("a[rel^='edugallery']").prettyPhoto({theme:'light_rounded',slideshow:5000,autoplay_slideshow:false,keyboard_shortcuts:true,deeplinking:false,default_width:500,default_height:344,});$('.number').counterUp({time:1000});$(".blog-slider").owlCarousel({loop:true,autoplay:true,smartSpeed:700,autoplayTimeout:4000,autoplayHoverPause:true,margin:30,nav:true,dots:false,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$('.service-excerpt h5').click(function(){$(this).next('.service-text').slideToggle();$(this).parents('.service-post').toggleClass('active');});$('.service-icon').click(function(){$(this).next('.service-excerpt').find('.service-text').slideToggle();$(this).parent('.service-post').toggleClass('active');});$("#footer").on('click','.goToTop',function(e){e.preventDefault();$('html,body').animate({scrollTop:0,},'slow');});$(window).on('scroll',function(){var fromTop=$(this).scrollTop();var display='none';if(fromTop>650){display='block';}
$('#scrollTop').css({'display':display});});$(".mobile-nav").click(function(){$(".nav-area").toggle();});});