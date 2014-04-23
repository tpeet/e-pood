console.log('scripts js loaded');

$(document).ready(function() {


  // CALL FRONTPAGE MORE
  $('.js-listedmenu').hideMaxListItems({ 'max': 4, 'speed':500, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

  $('.js-placeholder-offers').hideMaxAItems({ 'max':8, 'speed':2000, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

  // FRONTPAGE ADJUSTED SIZE FLASH TEXT
  // http://stackoverflow.com/questions/4165836/javascript-scale-text-to-fit-in-fixed-div
  // $( '.js-filltext' ).each(function ( i, box ) {

  //     var width = $( box ).width(),
  //         html = '<span style="white-space:nowrap">',
  //         line = $( box ).wrapInner( html ).children()[ 0 ],
  //         n = 100;
      
  //     $( box ).css( 'font-size', '100px' );

  //     $(box).css('font-size', Math.floor( width/$(line).width()*100 ));
  //     $( box ).text( $( line ).text() );
  // });


  // Color select. Messy until desicions are made how to present colors
  $(function() {
    var accEl = $('.ee-product-colors li.acc');

    accEl.on('click', function(){

        var el = $(this);
        var color = el.attr('data-color-theme');
        var section = $(this).closest(".tsr-product-image");

        if (section.hasClass(color)) {
           section.removeClass(color);
            $('.ee-product-colors li.acc').removeClass('active');
        }
        else {
            section.removeClass('acc-1').removeClass('acc-2').removeClass('acc-3').removeClass('acc-4').removeClass('acc-5').removeClass('acc-6').removeClass('acc-7').removeClass('acc-8');
            $('.ee-product-colors li.acc').removeClass('active');
            section.addClass(color);
            el.addClass('active');
        }
        return false;
        
    });
  });


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


});


function handleClick()
{
    this.value = (this.value == 'Veel valikud' ? 'Vähem valikuid' : 'Veel valikud!');
}
document.getElementById('jsFiltersMoreText').onclick=handleClick;



$('.js-slidetoggle').click(function(e) {
  $(this).parents().next('.js-togglable').slideToggle('slow');
  e.preventDefault();
});

// Sliding commenting
//*********************
$('.js-togglable').hide();
$('.js-slidetoggle').click(function(e) {
  $(this).parents().next('.js-togglable').slideDown('slow');
  $('.js-slideclose').slideUp();
  e.preventDefault();
});
