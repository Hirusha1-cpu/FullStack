$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('i').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('i').removeClass('fa-pause');
            $('#carouselButton').children('i').addClass('fa-play');
        } else if ($('#carouselButton').children('i').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('i').removeClass('fa-play');
            $('#carouselButton').children('i').addClass('fa-pause');
        }
    });
});