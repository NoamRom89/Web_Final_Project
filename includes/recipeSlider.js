/**
 * Created by Tom on 24/02/2015.
 */
$(document).ready(function(){
var triggers = $('ul.recipeTrigger>li');
var images = $('ul.imagesRecipe li');
var lastElem = triggers.length-1;
var mask = $('.maskRecipe ul.imagesRecipe');
var imgWidth = images.width();
var target;

triggers.first().addClass('selected');
mask.css('width', imgWidth*(lastElem+1) +'px');

function sliderResponse(target) {
    mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    triggers.removeClass('selected').eq(target).addClass('selected');
}

triggers.click(function() {
    if ( !$(this).hasClass('selected') ) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
    }
});
$('.next').click(function() {
    target = $('ul.recipeTrigger li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.prev').click(function() {
    target = $('ul.recipeTrigger li.selected').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});
function sliderTiming() {
    target = $('ul.recipeTrigger li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}
var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}
});