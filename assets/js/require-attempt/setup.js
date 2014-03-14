/**
 * @name RequireJS Setup
 * @desc Responsible for setting up requirejs, 
 *      then loading the main app
 */

require.config({
  baseUrl: "./assets/js",
  paths: {
      'matchMedia': 'tsr-js/polyfills/matchMedia',
      'matchMediaListener': 'tsr-js/polyfills/matchMedia.addListener',
      'debouncing': 'tsr-js/libs/jquery.debouncing',
      'bstabs': 'bootstrap-js/tab',
      'bstooltip': 'bootstrap-js/tooltip',
      'bspopover': 'bootstrap-js/popover',
      'common': 'vendor/common',
      'blendingimg': 'vendor/paintbrush',
      'responsiveimg': 'srcset.min',
      'tsrcore': 'tsr-js/tsr-core',
      'listing': "ee-js/ee-frontpage-boxes-col",
      'carousel': "ee-js/ee-carousel-listing",
      'social': "ee-js/socialcount.min",
      'slider': "tsr-js/libs/jquery.flexslider",
      'videowidth': "ee-js/jquery.fitvid",
      'vimeoapi': "ee-js/froogaloop",
      'rating': "ee-js/bootstrap-rating-input",
      'equalheight': "tsr-js/tsr-productAndService-listing",
      'forms': "tsr-js/tsr-forms",
      'primarycarousel': "tsr-js/tsr-communication-primary"
  },

  shim: {
    'bspopover': {
      deps: ['bstooltip'],
      exports: 'popover'
    },
    'blendingimg': {
      deps: ['common'],
      exports: 'blending'
    },
    'listing': {deps: [ 'tsr-js/libs/jquery.debouncing' ]},
    'equalheight': {deps: [ 'tsr-js/libs/jquery.debouncing' ]},
    'primarycarousel': {
      deps: [ 'tsr-js/libs/jquery.debouncing', 'slider' ],
      exports: 'primary'
    },
    'slider': {deps: [ 'videowidth', 'vimeoapi' ]},
  }

});

define('app', [
    "matchMedia",
    "matchMediaListener",
    "blendingimg",
    'bstabs',
    "bspopover",
    "responsiveimg",
    "tsrcore",
    "equalheight"
    
], function(matchMedia, matchMediaListener, blending, bstabs, bspopover, responsiveimg, equalheight, tsrcore) {

  $('[data-toggle="popover"]').popover();
  $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
  });

});
