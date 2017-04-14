$(function() {
    //the asterisk is important to prevent the background-image from being animated
    $("#welcome *").addClass("animated fadeInDown");
    
    //scroll spy
    $("body").scrollspy({
       target: ".navbar-fixed-top",
        offset: 60
    });
    
    //smoothly scroll when navigation bar is clicked--requires jQuery Easing plugin
    $(".page-scroll").bind("click", function(event) {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, "easeInOutExpo");
        event.preventDefault();
    });
    
    //for #scroll-to-top
    $(window).scroll(function() {
        if($(this).scrollTop()>300) {
            $("#scroll-to-top").fadeIn(700);
        }else {
            $("#scroll-to-top").fadeOut();
        }
    });
});