(function() {

    'use strict';


    function header() {
        
        console.log('header js');

        // handle main nav top margin
        $('header > .navbar .dropdown').on('shown.bs.dropdown', function () {
            if(Modernizr.mq('only screen and (min-width: 768px)')) {
                $('.navbar:nth-child(2)').css({marginTop:(getElementH($(this))+20)+'px'});
                $('section.content, section.hero').css({marginTop:0+'px'});
            }
        });
        $('header > .navbar .dropdown').on('hide.bs.dropdown', function () {
            $('.navbar:nth-child(2)').css({marginTop:0+'px'});
            $('section.content, section.hero').css({marginTop:0+'px'});
        });

        // handle content top margin
        $('#collapsibleMainMenu-Pages .dropdown').on('shown.bs.dropdown', function () {
            if(Modernizr.mq('only screen and (min-width: 768px)')) {
                $('.navbar:nth-child(2)').css({marginTop:0+'px'});
                if( $('section.hero').length > 0 ) $('section.hero').css({marginTop:(getElementH($(this))+20)+'px'});
                else $('section.content').css({marginTop:(getElementH($(this))+20)+'px'});
            }
        });
        $('#collapsibleMainMenu-Pages .dropdown').on('hide.bs.dropdown', function () {
            $('section.content, section.hero, .navbar:nth-child(2)').css({marginTop:0+'px'});
        });

        // animated drop down
        /*$('.dropdown-toggle').click(function() { 
            $(this).next('.dropdown-menu').slideToggle(500, function(){
                $('content').css({marginTop:(getElementH($('#collapsibleMainMenu-Pages .dropdown'))+20)+'px'});
            }); 
        });*/

        cloneRightSideMainMenu();
        collapseOtherContent();
        collapsableMenuForMobile();
        initDropMenu();
        
    }
    
    // get element height
    function getElementH(el){
        var height = $(el).find('.dropdown-menu').height();
        return height;
    }
    
    function collapsableMenuForMobile(){
        if(Modernizr.mq('only screen and (max-width: 767px)')) {
            $('.list-group .dropdown-header > h6').each(function() {
                var _parent = $(this).parent();
                this.addEventListener('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _parent.nextUntil('.dropdown-header').toggle();
                    $(_parent).toggleClass('open');
                }, false);
            });  
        }

    }

    function cloneRightSideMainMenu(){
        $('#collapsibleMainMenu-Search').html( $('.collapsibleMainMenu-Search').clone() );
        $('#collapsibleMainMenu-Basket').html( $('.collapsibleMainMenu-Basket').clone() );
        $('#collapsibleMainMenu-Guide').html( $('.collapsibleMainMenu-Guide').clone() );
        
        var _el = $('#collapsibleMainMenu-Pages').find('.navbar-nav').eq(1).find('li').eq(3);
        //_el.append('<li>asdflkdsjaflkjsalkf</li>');
        console.log(_el);
    }

    
    function collapseOtherContent(){
        var _elDrop = $('header div[id*="collapsibleMainMenu"]');
        _elDrop.on('show.bs.collapse', function (e) {
           
            if( $('[id^="collapsibleMainMenu-"]').hasClass('in') ){
                $('[id^="collapsibleMainMenu-"]').removeClass('in').addClass('collapse');
                $('[href*="collapsibleMainMenu-"]').removeClass('active');
            }
            $('header .navbar-header').find('[href*="'+this.id+'"]').addClass('active');

        });
        _elDrop.on('shown.bs.collapse', function (e) {
           // drop code here
        });
        _elDrop.on('hidden.bs.collapse', function (e) {
            $('header .navbar-header').find('[href*="'+this.id+'"]').removeClass('active');
        });
    }

    // footer links
    function initDropMenu() {
        if(Modernizr.mq('only screen and (max-width: 767px)')) {
            var _activeEl;
            $('header .collapsibleMainMenu h2:not(.title)').each(function(i, el) {
                var _el = $(el);
                console.log(i, el);
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
    }
    
    header();

}());