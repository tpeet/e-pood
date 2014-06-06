(function() {

    'use strict';

    function footer() {

        // footer links
        if(Modernizr.mq('only screen and (max-width: 767px)')) {
            var _activeEl;
            $('footer h2').each(function(i, el) {
                var _el = $(el);
				_el.click(function(e){

                    $(this).toggleClass('active');
                    $(this).next().toggleClass('active');

                    if( ( _activeEl ) && _activeEl[0] != $(this)[0]) {
                        _activeEl.removeClass('active');
                        _activeEl.next().removeClass('active');    
                    }
                    _activeEl = $(this);
					e.preventDefault();
				});
            });  
        }
        // social block
		$('.social-block .media > a , footer .list-group > .list-group-item > a').each(function(i, el){
			var _link = $(el).attr('href');
			$(el).parent().click(function(){
                document.location.href=_link;
			});
		});
    }

    footer();
    
}());