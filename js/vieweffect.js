(function( $ ){
   $.fn.viewEffect = function(options) {
      var defaults = {
         'limit' : -100,
         'time'  : 1000
      };
      var settings = $.extend( {}, defaults, options );
      $(window).on("load resize scroll",function(e){
         return this.each(function() {
            var bottom_of_object = this.offset().top + this.outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
               this.animate({'opacity':'1'},settings.time);
            }
         });
      });
   };
})( jQuery );
