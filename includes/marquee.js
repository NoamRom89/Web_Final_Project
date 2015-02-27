/**
 * Created by Tom on 27/02/2015.
 */
$(document).ready(function() {
    function marquee(a, b) {
        var width = b.width();
        var start_pos = a.width();
        var end_pos = -width;

        function scroll() {
            if (b.position().left <= -width) {
                b.css('left', start_pos);
                scroll();
            }
            else {
                time = (parseInt(b.position().left, 10) - end_pos) *
                (14000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
                b.animate({
                    'left': -width
                }, time, 'linear', function () {
                    scroll();
                });
            }
        }

        b.css({
            'width': width,
            'left': start_pos
        });
        scroll(a, b);

        b.mouseenter(function () {     // Marquee pause on mouse over
            b.stop();
            b.clearQueue();
        });
        b.mouseleave(function () {
            scroll(a, b);
        });

    }

        marquee($('#marqueeDisplay'), $('#marqueeText'));

});