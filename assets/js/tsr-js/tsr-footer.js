
/*
TSR - FOOTER
*/ 


;(function(document,$) {


    window.tsrFooter = window.tsrFooter || {};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Init
/////////////////////////////////////////////////////////////////////////////////////////////////////////


    tsrFooter.tsrInit = function() {
       
        tsrFooter.tsrItemCount();
        tsrFooter.tsrFooterNav.footerInit();
         
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Equal heights
/////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Thanks Paul Irish
	$.fn.setAllToMaxHeight = function(){
		return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
	}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Item count
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    tsrFooter.tsrItemCount = function () {


        $('.tsr-footer-sm .tsr-container').each(function () {

            var el = $(this);
            var elCount =  el.children().size();
            el.parent().addClass('tsr-count-' + elCount);

        });

    };
 
 /////////////////////////////////////////////////////////////////////////////////////////////////////////
////// TSR - Footer navigation mobile and desktop
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    
     tsrFooter.tsrFooterNav =  {

            footerInit: function() {
                  
                    // enquire.js
                    enquire.register("screen and (min-width:768px)", {
              
                            setup : function() {
                                
                               $('.tsr-footer-links  menu > li > menu').parent().addClass('has-sub');
                               tsrFooter.tsrFooterNav.footerMobileClick();
                               tsrFooter.tsrFooterNav.footerToTop();

                            },
                            match : function() {
                                
                                tsrFooter.tsrFooterNav.footerMobileDestroy();
                                tsrFooter.tsrFooterNav.footerEqualHeights();
                                     
                            },
                            unmatch : function() {

                                tsrFooter.tsrFooterNav.footerDesktopDestroy();
                                tsrFooter.tsrFooterNav.footerMobileClick();

                            }

                    }, true); // True -> makes the "matched" work for ie8

            }, // mainInit


            footerToTop: function() {
                   
                $('.tsr-btn-toTop').on('click',function () {
                   $('html, body').animate({ scrollTop: 0 }, 'fast');  
                    return false;
                });
       
            }, // footerToTop

            footerEqualHeights: function() {
                   
                    $('.tsr-footer-links  .tsr-nav-top-level > li:lt(4)').not('.tsr-extra-links').css('height', 'auto').setAllToMaxHeight()﻿;

            }, // footerToTop


            footerDesktopDestroy: function(el,elParent) {

                 $('.tsr-footer-links  .tsr-nav-top-level > li').not('.tsr-extra-links').css('height', 'auto');
                   
            }, // footerDesktopDestroy

            footerMobileDestroy: function(el,elParent) {

                $('.tsr-footer-links a').off('click');
                   
            }, // footerMobileDestroy



            footerMobileClick: function() {
           
                    // Toggle menu mobile
                    $('.tsr-footer-links .has-sub > a').on('click',function () {
                        
                        var el = $(this);
                        var elParent = $(this).parent();

                        if(elParent.hasClass('is-expanded')){

                            // Remove class
                            el.parent().removeClass('is-expanded');

                        } else {
                            
                            // Add class
                            el.parent().addClass('is-expanded');

                        }
                        return false;
                    });

            } // footerMobileClick

     }; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Load
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(window).on('load', function(){
      
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Ready
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).on('ready', function(){

        tsrFooter.tsrInit();
      
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Scroll
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).on('scroll', function(){
            
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Resize
/////////////////////////////////////////////////////////////////////////////////////////////////////////


	// jquery.debouncing.js, thanks Paul Irish

    $(window).smartresize(function(){
  		//tsrFooter.tsrEqualHeights();
	});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

})(document,jQuery);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// END
/////////////////////////////////////////////////////////////////////////////////////////////////////////

