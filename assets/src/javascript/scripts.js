'use strict';
;
(function($){
    $('.phone__img').slick({
        dots: false,
        arrows:false
    });



    $(document).ready( function () {
        //Foundation init
        $(document).foundation();

    });
    $( ".header-navigation" ).on( "click", function() {
        $(this).toggleClass( "toggle" );

    });

})(jQuery);


