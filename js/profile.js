$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var asideLeft = $("#aside-container .aside-content");
    var windowWidth = $(window).width();

    if (scrollTop > 1 && windowWidth > 767) {
        asideLeft.addClass('sticky');
        asideLeft.css("top", scrollTop);
    } else {
        asideLeft.removeClass('sticky');
        asideLeft.css("top", '');
    }
});