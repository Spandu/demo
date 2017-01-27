"use strict";
var directRTL =  'rtl'


function is_mobile_device () {
  if ( ( $(window).width()<767) || (navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/) ) ) {
    return true;
  } else {
    return false;
  }
}

/**/
/* fix mobile hover */
/**/
$('*').on( "hover", function (){});

/**/
/*  Tabs  */
/**/
$(".container-tabs.active").show();
$(".tabs .tabs-btn").on( 'click', function() {
  var idBtn = ($(this).attr("data-tabs-id"))
  var containerList = $(".tabs .container-tabs");
  var f = $(".tabs [data-tabs-id=cont-"+idBtn+"]");

  $(f).addClass("active").siblings(".container-tabs").removeClass('active');
  $(".container-tabs").fadeOut( 0 );
  $(".container-tabs.active").fadeIn( 300 );
  $(this).addClass("active").siblings(".tabs-btn").removeClass('active');
});

/**/
/*  toogles  */
/**/
$('.toggles .active').next().show();
$(".toggles .content-title").on( 'click', function(){
  $(this).toggleClass('active');
  $(this).next().stop().slideToggle(500); 
})

/**/
/* accordions */
/**/
$('.accordions .active').next().show();
$(".accordions .content-title").on( 'click', function(){

    $(this).addClass('active').siblings("div").removeClass('active');
    $(this).siblings('.content').slideUp(500);
    $(this).next().stop().slideDown(500);
})

/**/
/*  Skill bar  */
/**/
$(window).scroll(progress_bar_loader);
progress_bar_loader ();

function progress_bar_loader (){
  if (!is_mobile_device()){
      $('.skill-bar-progress').each(function(){
        var el = this;
        if (is_visible(el)){
          if ($(el).attr("processed")!="true"){
            $(el).css("width","0%");
            $(el).attr("processed","true");
            var val = parseInt($(el).attr("data-value"), 10);
            var fill = 0;
            var speed = val/100; 
            var timer = setInterval(function (){
              if (fill<val){
                fill += 1;
                $(el).css("width",String(fill)+"%");
                var ind = $(el).parent().parent().find(".skill-bar-perc");
                $(ind).text(fill+"%");
              }
            },(10/speed));      
          }
        }
      });
    } else {
      $(".skill-bar-progress").each(function(){
        var el = this;
        var fill = $(el).attr("data-value");
        var ind = $(el).parent().parent().find(".skill-bar-perc");
        $(el).css('width',fill+'%');
        $(ind).text(fill+"%");
      });   
  }
}
function is_visible (el){
  var w_h = $(window).height();
  var dif = $(el).offset().top - $(window).scrollTop();
  if ((dif > 0) && (dif<w_h)){
    return true;
  } else {
    return false;
  }
}

/**/
/* sticky menu */
/**/
function sticky() {
  var orgElementPos = $('.sticky-wrapper').offset();
  var orgElementTop = orgElementPos.top;

  if ( !($('.mobile_menu_switcher').length) ) {
    add_button_menu ();
  }

  if ( !is_mobile_device() && (window.innerWidth > 768)) {
    if ( $(".tp-banner").length || $(".row_bg").length ) {
    	double_menu ();
    } else {
      if ($(window).scrollTop() > (orgElementTop)) {
        $('.sticky-menu').addClass('scrolling');
        //element should always have same top position and width.
      } else {
        if ( !$('body.pc').length ) { 
          $('body').addClass('pc');
        }
        // not scrolled past the menu; only show the original position.
        $('.sticky-menu').removeClass('scrolling');
      }
    }
  }
  if ( is_mobile_device() && (window.innerWidth < 768)) {
    $(".second-nav").remove();
  }
  width_sticky ();
}

function width_sticky () {
  if ( $("body").hasClass("boxed") ) {
    var width_body = $("body").innerWidth();
    $("body.boxed .sticky-menu").css({"width":width_body+"px"});
  } else {
    $("body .sticky-menu").css({"width":"100%","left":"0"});
  }
}

if ( $(".main-nav").hasClass("switch-menu")  ) {
  menu_bar();
}
set_sticky_wrapper_height ();
function set_sticky_wrapper_height () {
  if ( (!$(".tp-banner").length) && (!$(".row_bg").length) && !(is_mobile_device()) ) {
    $('.sticky-wrapper').css({
      'height' : $('.sticky-menu').innerHeight()
    })
  }
}
function add_button_menu() {
  var v = $('nav.main-nav>ul').find("li");
  for (var p=0;p<$('nav.main-nav>ul').find("li").length;p++) {
    $(v[p]).attr('id','menu-item-'+p);
  }
  $('nav.main-nav').append("<i class='mobile_menu_switcher'></i>");
  $('nav.main-nav>ul ul').each(function(){
    var x = document.createElement('li');
    $(x).attr("class","back");
    x.innerHTML = "<a href='#'>back</a>";
    this.insertBefore( x, this.firstElementChild );
  })
  $('nav.main-nav>ul').each(function(){
    var n = document.createElement("li");
    n.innerHTML = "Menu";
    $(n).attr("class","header-menu");
    this.insertBefore( n, this.firstElementChild );
  })
  $('nav.main-nav li').each(function(){
    if ( $(this).children("ul").length > 0 ) {
      $(this).append("<span class='button_open'></span>");
    };
  })
}
function double_menu () {
	var element = $('.tp-banner').length > 0 ? $('.tp-banner') : $('.row_bg');
	var heightElement = element.offset().top + element.innerHeight();

	if ( !($('.second-nav').length) ) {
		create_double_nav();
	}
	set_setting_sticky(heightElement)
}
function create_double_nav () {
	$('.sticky-menu').addClass("double-menu")
	var clone_menu = $('.sticky-menu').clone().addClass('second-nav scrolling');
	$('header').append(clone_menu);
  if ( $(".second-nav .main-nav").hasClass("switch-menu") ) {
    $(".second-nav .main-nav").removeClass("switch-menu");
    $(".second-nav .main-nav .menu-bar").remove();
  }
	$('.sticky-menu').css({
		"position" : "absolute",
		"top" : "0"
	})
	clone_menu.css({
		"transform" : "translateY(-100%)",
		"position" : "fixed",
		"top" : "0",
		"left" : "0"
	})
}
function set_setting_sticky (heightElement) {
	if( $(window).scrollTop() > heightElement ) {
		$('.sticky-menu.second-nav').css({ "transform": "translateY(0)" })
	}	else {
		$('.sticky-menu.second-nav').css({ "transform": "translateY(-100%)" })
	}
}
function menu_bar () {
  $(".menu-bar").on( 'click', function(){
    $(".main-nav.switch-menu").toggleClass("items-visible");
  })
}


/**/
/* scroll-top */
/**/
function scroll_top (){
  $("body").append("<div id='scroll-top'><i class='fa fa-angle-up'></i></div>")
  $('#scroll-top').on( 'click', function() {
      $('html, body').animate({scrollTop: 0});
      return false;
  });
  if( $(window).scrollTop() > 700 ) {
    $('#scroll-top').fadeIn();
  } else {
    $('#scroll-top').fadeOut();
  } 
  $(window).scroll(function(){
    if( $(window).scrollTop() > 700 ) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    } 
  })
 
}
/**/
/* open search */
/**/
open_search();
function open_search(){
  $(".search-open").on( 'click', function(e){
    $(".header-top-panel form").toggleClass("open"); 
    e.stopPropagation();
  })
}

$(window).scroll( function(){
  sticky ();
})
/**/
/* page ready */
/**/
$(document).ready(function() {
  sticky ();

  scroll_top ();
  
  });

$(window).resize(function() {
  sticky ();
  set_sticky_wrapper_height ();

});



jQuery(window).load(function (){
	mobile_menu_controller_init ();
  /**/
  /* scroll down */
  /**/
  $('.scroll-down').on( 'click', function() {
    $('html, body').animate({scrollTop: $('#home').offset().top},{duration: 1500, easing: "easeInOutExpo"});
    return false;
  });
});

/**/
/* mobile menu */
/**/
function mobile_menu_controller_init (){
  window.mobile_nav = {
    "is_mobile_menu" : false,
    "nav_obj" : jQuery(".sticky-wrapper .main-nav>ul").clone(),
    "level" : 1,
    "current_id" : false,
    "next_id" : false,
    "prev_id" : "",
    "animation_params" : {
      "vertical_start" : 300,
      "vertical_end" : 0,
      "horizontal_start" : 0,
      "horizontal_end" : 270,
      "speed" : 300
    }
  }
  if ( false ){
    set_mobile_menu();
  }
  else{
    mobile_menu_controller();
    jQuery(window).resize( function (){
      mobile_menu_controller();
    });
  }
  mobile_nav_switcher_init ();
}

function mobile_nav_switcher_init (){
  var nav_container = jQuery("nav.main-nav"); 
  jQuery(document).on("click", "nav.main-nav.mobile_nav .mobile_menu_switcher", function (){
    var nav = get_current_nav_level();
    var cls = "opened";
    if ( nav_container.hasClass(cls) ){
      nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_start + "px","opacity":0}, window.mobile_nav.animation_params.speed, function (){
        nav_container.removeClass(cls);
      })
    }
    else{
      nav_container.addClass(cls);
      nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_end + "px","opacity":1}, window.mobile_nav.animation_params.speed );
    }
  }); 
}

function mobile_nav_handlers_init (){
  jQuery("nav.main-nav.mobile_nav .button_open").on( "click", function (e){
    var el = jQuery(this);
    var next_id = el.closest("li").attr("id");
    var current_nav_level = get_current_nav_level();
    var next_nav_level = get_next_nav_level( next_id );
    current_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
      current_nav_level.remove();
      jQuery("nav.main-nav").append(next_nav_level);
      next_nav_level.css( { "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
      next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
      window.mobile_nav.current_id = next_id;
      window.mobile_nav.level ++;
      mobile_nav_handlers_init ();
    });
  }); 
  jQuery("nav.main-nav.mobile_nav .back>a").on("click", function (){
    var current_nav_level = get_current_nav_level();
    var next_nav_level = get_prev_nav_level();
    current_nav_level.animate( { "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
      current_nav_level.remove();
      jQuery("nav.main-nav").append(next_nav_level);
      next_nav_level.css( { "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
      next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
      window.mobile_nav.level --;
      mobile_nav_handlers_init ();
    });   
  });
}

function get_current_nav_level (){
  var r = window.mobile_nav.level < 2 ? jQuery( "nav.main-nav>ul" ) : jQuery( "nav.main-nav ul" );
  r.find("ul").remove();
  return r; 
}

function get_next_nav_level ( next_id ){
  var r = window.mobile_nav.nav_obj.find( "#" + next_id ).children("ul").first().clone();
  r.find("ul").remove();
  return r;
}

function get_prev_nav_level (){
  var r = {};
  if ( window.mobile_nav.level > 2 ){
    r = window.mobile_nav.nav_obj.find( "#" + window.mobile_nav.current_id ).parent("ul").parent("li");
    window.mobile_nav.current_id = r.attr("id");
    r = r.children("ul").first();
  }
  else{
    r = window.mobile_nav.nav_obj;
    window.mobile_nav.current_id = false;
  }
  r = r.clone();
  r.find("ul").remove();
  return r;
}

function mobile_menu_controller (){
  if ( is_mobile() && !window.mobile_nav.is_mobile_menu ){
    set_mobile_menu ();
    
  }
  else if ( !is_mobile() && window.mobile_nav.is_mobile_menu ){
    reset_mobile_menu ();
  }
}

function set_mobile_menu (){
  var nav = get_current_nav_level();
  $("nav.main-nav").addClass("mobile_nav");
  $(".sticky-menu").addClass("mobile");
  $(".sticky-menu").removeClass("scrolling");
  nav.css( { "margin-top":window.mobile_nav.animation_params.vertical_start+"px" } );
  window.mobile_nav.is_mobile_menu = true;
  mobile_nav_handlers_init ();
}

function reset_mobile_menu (){
  
  var nav = get_current_nav_level();
  $("nav.main-nav").removeClass("mobile_nav opened");
  $(".sticky-menu").removeClass("mobile");
  nav.removeAttr("style");
  window.mobile_nav.is_mobile_menu = false;
  nav.remove();
  reset_mobile_nav_params ();
}

function reset_mobile_nav_params (){
  jQuery("nav.main-nav").append(window.mobile_nav.nav_obj.clone());
  window.mobile_nav.level = 1;
  window.mobile_nav.current_id = false;
  window.mobile_nav.next_id = false;
}

/* \mobile menu */

function is_mobile (){
	if ( ( $(window).width()<980) || (navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/) ) ) {
    return true;
  } else {
    return false;
  }
}
