// HIDE MAX LIST ITEMS JQUERY PLUGIN ADJUSTED
// Version: 1.34
// Author: www.joshuawinn.com
// Usage: Free and Open Source. WTFPL: http://sam.zoy.org/wtfpl/
(function($){
$.fn.extend({ 
hideMaxListItems: function(options) 
{
	// DEFAULT VALUES
	var defaults = {
		max: 3,
		speed: 1000,
		moreText:'Näita rohkem',
		lessText:'Näita vähem',
		moreHTML:'<p class="tsr-btn-view-all maxlist-more visible-xs visible-sm"><span></span></p>', // requires class and child <a>
	};
	var options =  $.extend(defaults, options);

	// DESKTOP VIEW UL FOLD
   var listElementsLg = $(".js-listedmenu-lg").find("li:gt("+ defaults.max +")");
  $(listElementsLg).addClass('js-more').hide();

  $(".js-morebutton").click(function (e) {
      var $this = $(this);
      $this.children('span').text($this.text() == defaults.moreText ? defaults.lessText : defaults.moreText).parents().find(".js-more").slideToggle();
      e.preventDefault();
  });

	// FOR EACH MATCHED ELEMENT
	return this.each(function() {
		var op = options;
		var totalListItems = $(this).children("li").length;
		var speedPerLI;
		
		// Get animation speed per LI; Divide the total speed by num of LIs. 
		// Avoid dividing by 0 and make it at least 1 for small numbers.
		if ( totalListItems > 0 && op.speed > 0  ) { 
			speedPerLI = Math.round( op.speed / totalListItems );
			if ( speedPerLI < 1 ) { speedPerLI = 1; }
		} else { 
			speedPerLI = 0; 
		}
		
		// If list has more than the "max" option
		if ( (totalListItems > 0) && (totalListItems > op.max) )
		{
			// Initial Page Load: Hide each LI element over the max
			$(this).children("li").each(function(index) {
				if ( (index+1) > op.max ) {
					$(this).hide(0);
					$(this).addClass('maxlist-hidden ');
				}
			});
			// Replace [COUNT] in "moreText" or "lessText" with number of items beyond max
			var howManyMore = totalListItems - op.max;
			var newMoreText = op.moreText;
			var newLessText = op.lessText;
			
			if (howManyMore > 0){
				newMoreText = newMoreText.replace("[COUNT]", howManyMore);
				newLessText = newLessText.replace("[COUNT]", howManyMore);
			}
			// Add "Read More" button
			$(this).after(op.moreHTML);
			// Add "Read More" text
			$(this).next(".maxlist-more").children("span").text(newMoreText);
			
			// Click events on "Read More" button: Slide up and down
			$(this).next(".maxlist-more").children("span").click(function(e)
			{
				// Get array of children past the maximum option 
				var listElements = $(this).parent().prev("ul, ol").children("li"); 
				listElements = listElements.slice(op.max);
				
				// Sequentially slideToggle the list items
				// For more info on this awesome function: http://goo.gl/dW0nM
				if ( $(this).text() == newMoreText ){
					$(this).text(newLessText);
					var i = 0; 
					(function() { $(listElements[i++] || []).slideToggle(speedPerLI,arguments.callee); })();
				} 
				else {			
					$(this).text(newMoreText);
					var i = listElements.length - 1; 
					(function() { $(listElements[i--] || []).slideToggle(speedPerLI,arguments.callee); })();
				}
				
				// Prevent Default Click Behavior (Scrolling)
				e.preventDefault();
			});
		}
	});
}
});
})(jQuery); // End jQuery Plugin

