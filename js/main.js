const bgFixed = function(){
    var height = $(".content").height();
    var ancho = $(".content").width();

    $(".header-fixed").css("height",height+"px");
    $(".header-fixed").css("width",ancho+"px");
    $("#about").css("margin-top",height+"px");
};

$(document).ready(function(){
    bgFixed();

    $("#callback").on("click", function(){
        $(this).toggleClass("callbackOpened");
        $('.callback__modal').toggleClass("d-block");
    });

    $('.toggle').toggles({
        drag: true, // allow dragging the toggle between positions
        click: true, // allow clicking on the toggle
        text: {
            on: 'English', // text for the ON position English
            off: 'Русский' // and off
        },
        on: true, // is the toggle ON on init
        animate: 250, // animation time (ms)
        width: 100, // width used if not set in css
        height: 30, // height if not set in css
    });
    english();

    $('.toggle').on('toggle', function(e, active) {
        if (active) {
            english();
        } else {
            russian();
        }});
});// end $(document).ready

$(window).resize(function(){
    bgFixed();
});

$( ".content" ).scroll(function() {
    if ($('.line').visible(true,true)) {
        $(".background").css("background", "linear-gradient(#2ecc71, #16a085)");
    }

    if ($('.show1').visible(false,true)) {
        $('.show1').addClass("animated slideInLeft opacity-1");
        $('.show1').removeClass("hidden");
        $(".background").css("background", "linear-gradient(#ecf0f1, #7f8c8d)");
    }

    if ($('.show2').visible(true,true)) {
        $('.show2').addClass("animated slideInRight opacity-1");
    }

    if ($('.show3').visible(true,true)) {
        $('.show3').addClass("animated slideInLeft opacity-1");
        $(".background").css("background", "linear-gradient(#1abc9c, #16a085)");
    }

    if ($('.show4').visible(true,true)) {
        $('.show4').addClass("animated slideInRight opacity-1");
        $(".background").css("background", "linear-gradient(#9b59b6, #34495e)");
    }

    if ($('.show5').visible(true,true)) {
        $('.show5').addClass("animated slideInRight opacity-1");
        $(".background").css("background", "linear-gradient(#7f8c8d,#e74c3c)");
    }

});


function english(){
    $(".russian").hide();
    $(".english").show();
}

function russian(){
    $(".english").hide();
    $(".russian").show();
}
