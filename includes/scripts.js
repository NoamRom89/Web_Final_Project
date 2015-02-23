/**
 * Created by Noam Rom on 12/14/2014.
 */

$(document).ready(function(){
    $.getJSON("json/fienCookData.json",function(data){
        
        //Dynamic data for Vaccum cooking article - Only title
        $('#vaccumAarticleStyle h2').text(data.systemArticles.titles.vaccumArticleTitle);


        //Dynamic data for Recipes - Only title,img,description and recipes
        var i=0;
        var indexInJson = -1;
        var location = window.location.pathname;
        var index = location.lastIndexOf('/') + 1;
        location = location.substr(index);
        console.log(location);

        switch(location){
            case "fullRiceRecipe.html":
                indexInJson = 0;
                break;
            case "vodkaWatermellon.html":
                indexInJson = 1;
                break;
            case "coldCoffe.html":
                indexInJson = 2;
                break;
        }

        if(indexInJson != -1){
            $('.articleStyle h1').text(data.recipes[indexInJson].title);
            $('.articleStyle > img').attr("src",data.recipes[indexInJson].image);
            $('.articleStyle > p').text(data.recipes[indexInJson].description);
            for(i = 0;i < data.recipes[indexInJson].recipe.length; i++  ){
                $('.articleStyleRecipes').append("<p>"+ data.recipes[indexInJson].recipe[i] +"</p>");
            }
        }


    });
});