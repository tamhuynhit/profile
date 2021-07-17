$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var asideLeft = $("#aside-container .aside-content");
    var windowWidth = $(window).width();

    if (scrollTop > 1 && windowWidth > 767) {
        asideLeft.addClass("sticky");
        asideLeft.css("top", scrollTop);
    } else {
        asideLeft.removeClass('sticky');
        asideLeft.css("top", '');
    }
});

$(document).ready(function() {
    function drawTimeline(timeline, from, to) {
        var fromY = from.position().top + from.outerHeight() + parseInt(from.css('margin-top')) - 2
        var toY = to.position().top + parseInt(to.css('margin-top'))

        timeline.css("top", fromY).height(toY - fromY + 6)
    }

    function drawTimelines() {
        drawTimeline($("#timeline1"), $("#dot1"), $("#dot2"))
    }

    $(window).on('resize', function() {
        drawTimelines()
    });

    drawTimelines()
});