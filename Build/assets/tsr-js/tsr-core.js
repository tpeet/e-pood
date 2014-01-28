


/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */

/**
 * inject - Utility functions - Kenneth Illman
 */

;(function(document,$) {

    window.inject = window.inject || {};


    inject.tsr = function() {

         //inject.alertTest();
         inject.toggleDnD();


    };


/* - - - ALERT TEST - - - */


    inject.alertTest = function () {

      alert('yoyo');

    };

  
/* - - - TOGGLE DRAG N DROP  - BUTTON CLICK - - - */


    inject.toggleDnD = function () {

        $('body').append('<a href="#" class="toggleDnD" style="display:block; position:fixed; bottom:20px; right:20px; background:#333; color:#fff;" >Toggle</a>');        

        var toggleDnD = $('.toggleDnD'); // Temp
        
        toggleDnD.on('click', function(){

          var el = $(this);
         
            inject.alertTest();
          
        });



    };


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */ 


/* - - - READY - - - */ 


    $(document).on('ready', function(){

        //inject.init();
      
    });

/* - - - SCROLL - - - */

    $(document).on('scroll', function(){

            
    });

/* - - - RESIZE - - - */

    $(window).on('resize', function(){

                  
    });

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */ 

})(document,jQuery);




// ============================================================
// JAVASCRIPT - (main.js)
// ============================================================

/*

(function(document) {



})(document);


var thisSet,
tsRwdContainer = {

  settings: {
    numArticles: 5,
    trottle: 300,
    win: $(window),
    parent: $(".parent"),
    parentWidth: $(".parent").width()
  },

  init: function() {
    thisSet = this.settings;
    this.bindResize();
  },




        resizeHandler : function() {
          var triggerEvent,
            resizedw = function() {
                view.breakpoints.checkBreakPoints($(document).width())
            };
          
          $(window).resize(function() {
              clearTimeout(triggerEvent);
              triggerEvent = setTimeout(function() {
                  resizedw();
              }, 100);
          });
        },


  bindResize: function() {
    thisSet.win.on("resize", function() {
      tsRwdContainer.getMoreArticles(thisSet.numArticles);

        element.each(function () {

            var el = $(this);
            var w = el.width();
            elementWidth += w;

        });

        if (elementWidth >= parentWidth){

        }


    });
  },

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

}; */



/* Drop this in the console 


$.getScript('http://clients.ottoboni.se/Frontend/tsr-inject.js'); 
$.getScript('http://clients.ottoboni.se/Frontend/rapid.js'); 

http://suprb.com/apps/nested/



var iframe = document.getElementById("ifr").contentWindow;

iframe.$(".toggle_div").bind("change", function () {
    $("#ifr").css({
        height: iframe.$("body").outerHeight()
    });
});


  // function to load a given css file 

 loadCSS = function(href) {
     var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
     $("head").append(cssLink); 
 };

// function to load a given js file 
 
 loadJS = function(src) {
     var jsLink = $("<script type='text/javascript' src='"+src+"'>");
     $("head").append(jsLink); 
 }; 
  
 // load the css file 
 loadCSS("style.css");
 // load the js file 
 loadJS("one.js"); */




