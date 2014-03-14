(function() {

    'use strict';


    function header() {
        
        console.log('header js');

        $('#collapsibleMainMenu-Pages .dropdown').on('shown.bs.dropdown', function () {
            if(Modernizr.mq('only screen and (min-width: 768px)')) {
                $('content').css({marginTop:(getH($(this))+20)+'px'});
            }
        });
        $('#collapsibleMainMenu-Pages .dropdown').on('hide.bs.dropdown', function () {
            $('content').css({marginTop:0+'px'});
        });

        cloneRightSideMainMenu();
        collapseOtherContent();
        
    }
    function getH(el){
        var height = $(el).find('.dropdown-menu').height();
        return height;
    }

    function cloneRightSideMainMenu(){
        $('#collapsibleMainMenu-Search').html( $('.collapsibleMainMenu-Search').clone() );
        $('#collapsibleMainMenu-Basket').html( $('.collapsibleMainMenu-Basket').clone() );
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

    header();

}());