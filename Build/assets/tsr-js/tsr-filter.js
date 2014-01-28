
/*
FILTER
*/ 


;(function(document,$) {


    window.tsrFilter = window.tsrFilter || {};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Init
/////////////////////////////////////////////////////////////////////////////////////////////////////////


    tsrFilter.tsrInit = function() {
       
         tsrFilter.tsrFilterNav.filterInit();
         
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Equal heights
/////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Thanks Paul Irish
	$.fn.setAllToMaxHeight = function(){
		return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
	}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Equal heights
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    tsrFilter.tsrEqualHeights = function () {


	    $('.tsr-section-template').each(function () {

	      	$('p' , this).css('height', 'auto').setAllToMaxHeight()﻿;

	    });

    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Click
/////////////////////////////////////////////////////////////////////////////////////////////////////////

     tsrFilter.tsrFilterNav =  {

            filterInit: function() {
                  
                    // enquire.js
enquire.register("screen and (min-width:768px)", {

    setup: function () {

        //console.log('tsrFilter setup');
        tsrFilter.tsrFilterNav.sortTopClick();
        tsrFilter.tsrFilterNav.filterTopClick();

    },
    match: function () {

        tsrFilter.tsrFilterNav.filterDesktopInit();
        //console.log('tsrFilter match');

    },
    unmatch: function () {

        //console.log('tsrFilter unmatch');

    }

}, true);


            }, // objectInit

            sortTopClickFilterReset: function() {

            },

            sortTopClick: function() {
                    
                $('.tsr-sortList .tsr-top-level > a').on('click',function () {
        
                    var el          = $(this);
                    var elParent    = $(this).parent();

                    var elFilter      = $(this).closest('.tsr-section-filter').find('.tsr-filterList .tsr-top-level');

       
                        if(elParent.hasClass('is-expanded')){

                            el.parent().removeClass('is-expanded');
                            

                        } else {


                            if(elFilter.hasClass('is-expanded')){

                                $(this).closest('.tsr-section-filter').css('overflow', 'visible').css('padding-bottom', 0);
                                elFilter.removeClass('is-expanded');
                                el.parent().addClass('is-expanded');

                            } else {

                                $('.tsr-section-filter .tsr-top-level').removeClass('is-expanded');
                                el.parent().addClass('is-expanded');
                                $(this).closest('.tsr-section-filter').css('overflow', 'visible');

                            }
   
                        } 



                    return false;
                });

            },  // filterTopClick 


/* - - - Mobile - - - */

            filterTopClick: function() {
                    
              $('.tsr-filterList .tsr-top-level > a').on('click',function () {
        
                    var el              = $(this);
                    var elPParent       = $(this).closest('.tsr-section-filter');
                    var elParent        = $(this).parent()
                    var targetHeight    = elParent.find('.tsr-filter-wrapper').outerHeight();
                            
            

                           // if this one is expanded
                           if(elParent.hasClass('is-expanded')){

                                // Animate contract accordingly
                                elPParent.animate({
                                    paddingBottom: 0 ,
                                }, 350, function() {

                                    // Reset after anmation done
                                    elParent.removeClass('is-expanded');
                                    $(this).closest('.tsr-section-filter').css('overflow', 'visible');

                                });
      
                            } else {
                                
                                elPParent.css('overflow', '');
                                $('.tsr-sortList .tsr-top-level').removeClass('is-expanded');
                                $(this).closest('.tsr-section-filter').css('overflow', 'hidden');
                                elParent.addClass('is-expanded');

                                // Animate expand  accordingly
                                elPParent.animate({
                                    paddingBottom: targetHeight,
                                }, 350);

                            }
     

                    return false;
                });

            }, // filteClick


            filterMobileClickReset: function() {
                   
            }, // filterMobileClickReset



            filterDestroy: function() {
                
                //console.log('yoyo');
                $('.tsr-section-filter .tsr-top-level').removeClass('is-expanded');
                $('.tsr-section-filter').css('overflow', 'visible').css('padding-bottom', 0);

            }, // filterDestroy



/* - - - Desktop - - - */

            filterDesktopInit: function() {

                    $('.tsr-section-filter').each(function () {
                        $('.tsr-filterList .tsr-second-level' , this).css('height', 'auto').setAllToMaxHeight()﻿;
                    });

            }, // filterDesktopInit


            filterDesktopClickReset: function() {
                
            }, // filterDesktopClickReset


            filterDesktopDestroy: function() {
                $('.tsr-section-filter').each(function () {
                    $('.tsr-filterList .tsr-second-level' , this).css('height', 'auto');
                });
            } // filterMobileDestroy

     }; // tsrFilter.tsrObject END

  

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Ready
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).on('ready', function(){

        tsrFilter.tsrInit();
      
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Resize
/////////////////////////////////////////////////////////////////////////////////////////////////////////


	// jquery.debouncing.js, thanks Paul Irish

    $(window).smartresize(function(){
  		tsrFilter.tsrEqualHeights();
	});


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

})(document,jQuery);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// END
/////////////////////////////////////////////////////////////////////////////////////////////////////////

