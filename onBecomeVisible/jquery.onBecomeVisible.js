(function($){
    $.belowViewport = function(elem){
        var port = $(window).scrollTop() + $(window).height();
        return port <= $(elem).offset().top;
    }
    $.fn.onBecomeVisible = function( fn ){
        var obj = this;
        $(window).scroll( function() {
            obj.each( function() {
                if(!$.belowViewport(this) && !$(this).data('scrollEventFired')){
                    $(this).data('scrollEventFired', true);
                    fn(this);
                }
            });
        });
        return this;
     }
})(jQuery);