var Visva=function(){siteUrl='';var screenWidth=$(window).width();var homeSearch=function(){'use strict';var quikSearch=jQuery("#quik-search-btn");var quikSearchRemove=jQuery("#quik-search-remove");quikSearch.on('click',function(){jQuery('.dz-quik-search').fadeIn(500);jQuery('.dz-quik-search').addClass('On');});quikSearchRemove.on('click',function(){jQuery('.dz-quik-search').fadeOut(500);jQuery('.dz-quik-search').removeClass('On');});}
var onePageLayout=function(){'use strict';var headerHeight=parseInt($('.onepage').css('height'),10);$(".scroll").unbind().on('click',function(event)
{event.preventDefault();if(this.hash!==""){var hash=this.hash;var seactionPosition=$(hash).offset().top;var headerHeight=parseInt($('.onepage').css('height'),10);$('body').scrollspy({target:".navbar",offset:headerHeight+2});var scrollTopPosition=seactionPosition-(headerHeight);$('html, body').animate({scrollTop:scrollTopPosition},800,function(){});}});$('body').scrollspy({target:".navbar",offset:headerHeight+2});}
$(window).scroll(function(){var hT=$('#showdivv').offset().top,hH=$('#showdivv').outerHeight(),wH=$(window).height(),wS=$(this).scrollTop();if(wS>(hT+hH-wH)){$('.footerdown').slideDown(400);}else{$('.footerdown').slideUp(400);}});var handleResizeElement=function(){var headerTop=0;var headerNav=0;$('.header .sticky-header').removeClass('is-fixed');$('.header').removeAttr('style');if(jQuery('.header .top-bar').length>0&&screenWidth>991)
{headerTop=parseInt($('.header .top-bar').outerHeight());}
if(jQuery('.header').length>0)
{headerNav=parseInt($('.header').height());headerNav=(headerNav==0)?parseInt($('.header .main-bar').outerHeight()):headerNav;}
var headerHeight=headerNav+headerTop;jQuery('.header').css('height',headerHeight);}
var handleResizeElementOnResize=function(){var headerTop=0;var headerNav=0;$('.header .sticky-header').removeClass('is-fixed');$('.header').removeAttr('style');setTimeout(function(){if(jQuery('.header .top-bar').length>0&&screenWidth>991)
{headerTop=parseInt($('.header .top-bar').outerHeight());}
if(jQuery('.header').length>0)
{headerNav=parseInt($('.header').height());headerNav=(headerNav==0)?parseInt($('.header .main-bar').outerHeight()):headerNav;}
var headerHeight=headerNav+headerTop;jQuery('.header').css('height',headerHeight);},500);}
var dzTheme=function(){'use strict';var loadingImage='<img src="images/loading.gif">';jQuery('.dzload').each(function(){var dzsrc=siteUrl+$(this).attr('dzsrc');jQuery(this).hide(function(){jQuery(this).load(dzsrc,function(){jQuery(this).fadeIn('slow');});})});if(screenWidth<=991){jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click',function(e){if(jQuery(this).parent().hasClass('open'))
{jQuery(this).parent().removeClass('open');}
else{jQuery(this).parent().parent().find('li').removeClass('open');jQuery(this).parent().addClass('open');}});}
jQuery('.menu-btn, .openbtn').on('click',function(){jQuery('.contact-sidebar').addClass('active');});jQuery('.menu-close').on('click',function(){jQuery('.contact-sidebar').removeClass('active');jQuery('.menu-btn').removeClass('open');});}
var MagnificPopup=function(){'use strict';if(jQuery('.mfp-gallery').length>0)
{jQuery('.mfp-gallery').magnificPopup({delegate:'.mfp-link',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small></small>';}}});}
if(jQuery('.mfp-video').length>0)
{jQuery('.mfp-video').magnificPopup({type:'iframe',iframe:{markup:'<div class="mfp-iframe-scaler">'+
'<div class="mfp-close"></div>'+
'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
'<div class="mfp-title">Some caption</div>'+
'</div>'},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr('title');}}});}
if(jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length>0)
{$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}}
var scrollTop=function(){'use strict';var scrollTop=jQuery("button.scroltop");scrollTop.on('click',function(){jQuery("html, body").animate({scrollTop:0},1000);return false;})
jQuery(window).bind("scroll",function(){var scroll=jQuery(window).scrollTop();if(scroll>900){jQuery("button.scroltop").fadeIn(1000);}else{jQuery("button.scroltop").fadeOut(1000);}});}
var footerAlign=function(){'use strict';jQuery('.site-footer').css('display','block');jQuery('.site-footer').css('height','auto');var footerHeight=jQuery('.site-footer').outerHeight();jQuery('.footer-fixed > .page-wraper').css('padding-bottom',footerHeight);jQuery('.site-footer').css('height',footerHeight);}
var headerFix=function(){'use strict';jQuery(window).on('scroll',function(){if(jQuery('.sticky-header').length>0){var menu=jQuery('.sticky-header');if($(window).scrollTop()>menu.offset().top){menu.addClass('is-fixed');$('.site-header .container > .logo-header .logo').attr('src','images/logo/logo.png');$('.site-header .container > .logo-header .logo-2').attr('src','images/logo-2.png');$('.site-header .container > .logo-header .logo-3').attr('src','images/logo-3.png');}else{menu.removeClass('is-fixed');$('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','images/logo-white.png')}}});}
var masonryBox=function(){'use strict';if(jQuery('#masonry, .masonry').length>0)
{var self=jQuery("#masonry, .masonry");if(jQuery('.card-container').length>0)
{var gutterEnable=self.data('gutter');var gutter=(self.data('gutter')===undefined)?0:self.data('gutter');gutter=parseInt(gutter);var columnWidthValue=(self.attr('data-column-width')===undefined)?'':self.attr('data-column-width');if(columnWidthValue!=''){columnWidthValue=parseInt(columnWidthValue);}
self.imagesLoaded(function(){self.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container",});});}}
if(jQuery('.filters').length)
{jQuery(".filters li:first").addClass('active');jQuery(".filters").on("click","li",function(){jQuery('.filters li').removeClass('active');jQuery(this).addClass('active');var filterValue=$(this).attr("data-filter");self.isotope({filter:filterValue});});}}
var counter=function(){if(jQuery('.counter').length)
{jQuery('.counter').counterUp({delay:10,time:3000});}}
var handleVideo=function(){jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');}
var handleFilterMasonary=function(){if(jQuery('#image-gallery-mix').length){jQuery('.gallery-filter').find('li').each(function(){$(this).addClass('filter');});jQuery('#image-gallery-mix').mixItUp();};if(jQuery('.gallery-filter.masonary').length){jQuery('.gallery-filter.masonary').on('click','span',function(){var selector=$(this).parent().attr('data-filter');jQuery('.gallery-filter.masonary span').parent().removeClass('active');jQuery(this).parent().addClass('active');jQuery('#image-gallery-isotope').isotope({filter:selector});return false;});}}
var handleBannerResize=function(){$(".full-height").css("height",$(window).height());}
var reposition=function(){'use strict';var modal=jQuery(this),dialog=modal.find('.modal-dialog');modal.css('display','block');dialog.css("margin-top",Math.max(0,(jQuery(window).height()-dialog.height())/2));}
var handelResize=function(){jQuery(window).on('resize',function(){jQuery('.modal:visible').each(reposition);footerAlign();});}
var handleCountDown=function(WebsiteLaunchDate){if($(".countdown").length)
{$('.countdown').countdown({date:WebsiteLaunchDate+' 23:5'},function(){$('.countdown').text('we are live');});}}
var WebsiteLaunchDate=new Date();monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth()+1);WebsiteLaunchDate=WebsiteLaunchDate.getDate()+" "+monthNames[WebsiteLaunchDate.getMonth()]+" "+WebsiteLaunchDate.getFullYear();var lightGallery=function(){if(($('#lightgallery, .lightgallery').length>0)){$('#lightgallery, .lightgallery').lightGallery({selector:'.lightimg',loop:true,thumbnail:true,exThumbImage:'data-exthumbimage'});}}
var boxHover=function(){jQuery('.box-hover').on('mouseenter',function(){var selector=jQuery(this).parent().parent();selector.find('.box-hover').removeClass('active');jQuery(this).addClass('active');});}
var pointerEffect=function(){const pointer=document.createElement("div")
pointer.id="pointer-dot"
const ring=document.createElement("div")
ring.id="pointer-ring"
document.body.insertBefore(pointer,document.body.children[0])
document.body.insertBefore(ring,document.body.children[0])
let mouseX=-100
let mouseY=-100
let ringX=-100
let ringY=-100
let isHover=false
let mouseDown=false
const init_pointer=(options)=>{window.onmousemove=(mouse)=>{mouseX=(mouse.clientX!=undefined)?mouse.clientX:-100;mouseY=(mouse.clientY!=undefined)?mouse.clientY:-100;}
window.onmousedown=(mouse)=>{mouseDown=true}
window.onmouseup=(mouse)=>{mouseDown=false}
const trace=(a,b,n)=>{return(1-n)*a+n*b;}
window["trace"]=trace
const getOption=(option)=>{let defaultObj={pointerColor:"#750c7e",ringSize:15,ringClickSize:(options["ringSize"]||15)-5,}
if(options[option]==undefined){return defaultObj[option]}else{return options[option]}}
const render=()=>{if(mouseX!=undefined){ringX=trace(ringX,mouseX,0.2)
ringY=trace(ringY,mouseY,0.2)
if(document.querySelector(".p-action-click:hover")){pointer.style.borderColor=getOption("pointerColor")
isHover=true}else{pointer.style.borderColor="white"
isHover=false}
ring.style.borderColor=getOption("pointerColor")
if(mouseDown){ring.style.padding=getOption("ringClickSize")+"px"}else{ring.style.padding=getOption("ringSize")+"px"}
if(jQuery('#pointer-dot').hasClass('active'))
{pointer.style.transform=`translate(${mouseX}px, ${mouseY}px) scale(4)`}else{pointer.style.transform=`translate(${mouseX}px, ${mouseY}px)`}
ring.style.transform=`translate(${ringX-(mouseDown?getOption("ringClickSize"):getOption("ringSize"))}px, ${ringY-(mouseDown?getOption("ringClickSize"):getOption("ringSize"))}px)`
requestAnimationFrame(render)}}
requestAnimationFrame(render)}
jQuery('a').on('mouseenter',function(e){jQuery('#pointer-dot').addClass('active');});jQuery('a').on('mouseleave',function(e){jQuery('#pointer-dot').removeClass('active');});init_pointer({});}
var setResizeMargin=function(){if(($('.setResizeMargin').length>0)&&screenWidth>=1280){var containerSize=$('.container').width();var getMargin=(screenWidth-containerSize)/2;$('.setResizeMargin').css('margin-left',getMargin);}}
return{init:function(){boxHover();onePageLayout();dzTheme();homeSearch();handleResizeElement();MagnificPopup();scrollTop();footerAlign();headerFix();handleVideo();handleFilterMasonary();handleCountDown(WebsiteLaunchDate);handleBannerResize();handelResize();lightGallery();setResizeMargin();jQuery('.modal').on('show.bs.modal',reposition);},load:function(){counter();masonryBox();setResizeMargin();},resize:function(){screenWidth=$(window).width();dzTheme();setResizeMargin();setTimeout(function(){handleResizeElementOnResize();},500);}}}();jQuery(document).ready(function(){'use strict';Visva.init();AOS.init();$('a[data-toggle="tab"]').click(function(){$('a[data-toggle="tab"]').click(function(){$($(this).attr('href')).show().addClass('show active').siblings().hide();})});jQuery('.navicon').on('click',function(){$(this).toggleClass('open');});});jQuery(window).on('load',function(){'use strict';Visva.load();setTimeout(function(){jQuery('#loading-area').remove();},1500);});jQuery(window).on('resize',function(){'use strict';Visva.resize();});