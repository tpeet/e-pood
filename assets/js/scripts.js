$(document).ready(function() {

BindSlideToggle();
cloneRightSideMainMenu();

if (!Modernizr.svg) {
  $(".navbar-brand img").attr("src", "images/elion-logo.png");
}

  // CALL FRONTPAGE MORE
  $('.js-listedmenu').hideMaxListItems({ 'max': 4, 'speed':500, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

  $('.js-placeholder-offers').hideMaxAItems({ 'max':8, 'speed':2000, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

// COLLAPSE TABS
// https://github.com/okendoken/bootstrap-tabcollapse
  $('#TabsResponsive').tabCollapse();

  // FILTER COLOR CHANGE
  $('#content-placeholder-filter > div > ul > li > a').click(function(e){
    if ($(this).attr('class') != 'disabled'){
      $(this).addClass('disabled');
      $('a').not(this).removeClass('disabled');
    }
    else {
      $(this).removeClass('disabled');
    }
    e.preventDefault();
  });


  // SLIDER SCRIPT
  $("#js-priceslider").slider({
    tooltip: 'hide'
  });
  $("#js-priceslider").on('slide', function(slideEvt) {
  $(".js-pricesliderValMin").text(slideEvt.value[0]);
  $(".js-pricesliderValMax").text(slideEvt.value[1]);
});


  // TAG FONT RESIZE
  function TagsFontResize() {

   if ($(".flashText-flash-normal").length) {
    $(".flashText-flash-normal").bigtext({
     maxfontsize: 22,
     childSelector: '> .ee-big'
    });
   }

   if ($(".flashText-ribbon").length) {
    $(".flashText-ribbon").bigtext({
     maxfontsize: 18
    });
   }
  }

$('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
      });

// Alerts logic
   $('#alertbtn').click(function() {
      if ( !$('#alert1').is( '.in' ) ) {
         $('#alert1').addClass('in');
      }
   });

    $('#alertbtn2').click(function() {
      if ( !$('#alert2').is( '.in' ) ) { 
         $('#alert2').addClass('in');
      }
   });

   $('#successbtn').click(function() {
      if ( !$('#success1').is( '.in' ) ) {
         $('#success1').addClass('in');

         setTimeout(function() {
            $('#success1').removeClass('in');
         }, 3200);
      }
   });

   $('#infobtn').click(function() {
      if ( !$('#your-uniq-ID-123').is( '.in' ) ) {
         $('#your-uniq-ID-123').addClass('in');

         setTimeout(function() {
            $('#your-uniq-ID-123').removeClass('in');
         }, 4800);
      }
   });



// Sliding commenting
//*********************
// $('.js-togglable').hide();
// $('.js-slidetoggle').click(function(e) {
//   $(this).parents().next('.js-togglable').slideDown('slow');
//   $('.js-slideclose').slideUp();
//   e.preventDefault();
// });

}); // end document ready

function BindSlideToggle() {
 $('.js-slidetoggle').click(function (e) {
  $(this).parents().next('.js-togglable').slideToggle('slow');
  e.preventDefault();
 });
}


function cloneRightSideMainMenu(){
    $('#collapsibleMainMenu-Search').html( $('.collapsibleMainMenu-Search').clone() );
    $('#collapsibleMainMenu-Basket').html( $('.collapsibleMainMenu-Basket').clone() );
    $('#collapsibleMainMenu-Guide').html( $('.collapsibleMainMenu-Guide').clone() );
    
    var _el = $('#collapsibleMainMenu-Pages').find('.navbar-nav').eq(1).find('li').eq(3);
}

(function (cash) {
 $.fn.textfill = function (options) {
  return this.each(function () {
   var text = $(this).html();
   var oldFontSize = parseInt($(this).css("font-size"));
   var contentFontSizes = [];
   $(this).find('*').each(function (i, e) {
    contentFontSizes[i] = parseInt($(this).css("font-size"));
   });
   $(this).html('');
   var container = $('<span />').html(text).appendTo($(this));
   var min = 1, max = 200, fontSize;
   do {
    fontSize = (max + min) / 2;
    container.css('fontSize', fontSize);
    container.find('*').each(function (i, e) {
     $(this).css("font-size", fontSize);
    });
    var multiplier = $(this).height() / container.height();
    if (multiplier == 1) { min = max = fontSize }
    if (multiplier > 1) { min = fontSize }
    if (multiplier < 1) { max = fontSize }
   } while ((max - min) > 1);
   fontSize = min;
   coef = fontSize / oldFontSize;
   if ($(this).width() < container.width()) {
    min = 1;
    do {
     fontSize = (max + min) / 2;
     container.css('fontSize', fontSize);
     container.find('*').each(function (i, e) {
      $(this).css("font-size", fontSize);
     });
     var multiplier = $(this).width() / container.width();
     if (multiplier == 1) { min = max = fontSize }
     if (multiplier > 1) { min = fontSize }
     if (multiplier < 1) { max = fontSize }
    } while ((max - min) > 1);
    fontSize = min;
    coef = fontSize / oldFontSize;
   }
   container.remove();
   $(this).html(text);
   var minFontSize = options.minFontPixels;
   var maxFontSize = options.maxFontPixels;
   var newFontSize = minFontSize && (minFontSize > fontSize) ?
    minFontSize :
      maxFontSize && (maxFontSize < fontSize) ?
    maxFontSize :
      fontSize;

   coef = minFontSize && (minFontSize > fontSize) ?
      minFontSize / oldFontSize :
      maxFontSize && (maxFontSize < fontSize) ?
      maxFontSize / oldFontSize :
      coef;
   $(this).find('*').each(function (i, e) {
    $(this).css("font-size", newFontSize);
   });
   $(this).css('fontSize', newFontSize);
  });
 };
})(jQuery);
