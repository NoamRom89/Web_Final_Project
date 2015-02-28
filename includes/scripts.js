/**
 * Created by Noam Rom on 12/14/2014.
 */

$(document).ready(function(){
    /* Split the url that came in "get" method and return the request value by his name*/
    var Splitter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };

    var indexInJson = Splitter("recipeNum");
    console.log(indexInJson);

    $.getJSON("json/fienCookData.json",function(data){
        
        //Dynamic data for Vaccum cooking article - Only title
        $('#vaccumAarticleStyle h2').text(data.systemArticles.titles.vaccumArticleTitle);


        //Dynamic data for Recipes - Only title,img,description and recipes
        var i=0;

            $('.articleStyle h1').text(data.recipes[indexInJson].title);
            $('.articleStyle > img').attr("src",data.recipes[indexInJson].image);
            $('.articleStyle > p').text(data.recipes[indexInJson].description);
            for(i = 0;i < data.recipes[indexInJson].recipe.length; i++  ){
                $('.articleStyleRecipes').append("<p>"+ data.recipes[indexInJson].recipe[i] +"</p>");
            }

    });
});