;(function($, window, document, undefined) {
  
    'use strict';

    function init() {
        $('.alert').each(function(i, el){
            if( $(el).data('toggle') ) {
                $(el).find('.read-more').click(function(e){
                    $(this).hide();
                    $(el).closest('.alert').toggleClass('in');
                    e.preventDefault();
                });

            }
        });
    }

    init();

})(jQuery, window, document);