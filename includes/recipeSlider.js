/**
 * Created by Tom on 24/02/2015.
 */
$(document).ready(function(){
var images = $('ul.images li');
var lastElem = images.length-1;
var mask = $('.mask ul.images');
var imgWidth = images.width();
var target;


mask.css('width', imgWidth*(lastElem+1) +'px');

function sliderResponse(target) {
    mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
}

$('.next').click(function() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.prev').click(function() {
    target = $('ul.triggers li.selected').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});
function sliderTiming() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}
var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}
});