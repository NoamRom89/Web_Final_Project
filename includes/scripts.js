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
    var articleTitleIndex = Splitter("articleNum");
    var indexInJson = Splitter("recipeNum");
    console.log(indexInJson);

    $.getJSON("json/fienCookData.json",function(data){
        if (articleTitleIndex != null) {        // its a article page
            //Dynamic data for Vaccum cooking article - Only title
            $('#vaccumAarticleStyle h2').text(data.systemArticles.articleTitles[articleTitleIndex].title);

            // create article aside menu- dynamic
            var indexForArticle = 0;
            while (data.systemArticles.articleTitles[indexForArticle] != null){
                if(indexForArticle == articleTitleIndex){
                    $('#asideNavCenter1').append(
                        '<li class="currentArticleGreen"> <a href="articlePage.html?articleNum=' + indexForArticle + '">' + data.systemArticles.articleTitles[indexForArticle].title + '</a></li>'
                    );
                }else {
                    $('#asideNavCenter1').append(
                        '<li> <a href="articlePage.html?articleNum=' + indexForArticle + '">' + data.systemArticles.articleTitles[indexForArticle].title + '</a></li>'
                    );
                }
                indexForArticle ++;
            }


        }else {         // its a recipe page
            var i = 0;
            var tempIndex = parseInt(indexInJson);
            var indexForaside = 0;
            var nextPage = tempIndex + 1;
            var backPage = tempIndex - 1;
            // create aside menu - dynamic

                 while (data.recipes[indexForaside] != null) {
                     if(indexForaside == tempIndex){
                         $('#ulInnerRecipesTermo').append(
                             '<li><a href="recipePage.html?recipeNum=' + indexForaside + '" class="orange">' + data.recipes[indexForaside].title + '</a></li>'
                         );
                     }else {
                         $('#ulInnerRecipesTermo').append(
                             '<li><a href="recipePage.html?recipeNum=' + indexForaside + '">' + data.recipes[indexForaside].title + '</a></li>'
                         );
                     }
                     indexForaside++;

                 }
            // all the rest of the recipes

            $('#ulInnerRecipesTermo').append('<li><a href="#">דואט קנולי</a></li>')
            .append('<li><a href="#">גלילי ביסקוויט שוקולוד</a></li>')
                .append('<li><a href="#">בצק שמרים ללא גלוטן</a></li>')
                    .append('<li><a href="#">חזה עוף במרינדה</a></li>');


            //Dynamic data for Recipes - Only title,img,description and recipes

            $('.articleStyle h1').text(data.recipes[indexInJson].title);
            $('.articleStyle > img').attr("src", data.recipes[indexInJson].image);
            $('.articleStyle > p').text(data.recipes[indexInJson].description);
            for (i = 0; i < data.recipes[indexInJson].recipe.length; i++) {
                $('.articleStyleRecipes').append("<p>" + data.recipes[indexInJson].recipe[i] + "</p>");
            }
            // next and back pages bottom menu
            if (tempIndex == 0) {
                $('#backPage').html('<a href="recipePage.html?recipeNum=' + (tempIndex) + '">הקודם</a>');
                if (data.recipes[nextPage] != null) {
                    $('#nextPage').html('<a href="recipePage.html?recipeNum=' + (nextPage) + '">הבא</a>');
                } else {
                    $('#nextPage').html('<a href="recipePage.html?recipeNum=' + (tempIndex) + '">הבא</a>');
                }

            } else {
                $('#backPage').html('<a href="recipePage.html?recipeNum=' + (backPage) + '">הקודם</a>');

                if (data.recipes[nextPage] != null) {
                    $('#nextPage').html('<a href="recipePage.html?recipeNum=' + (nextPage) + '">הבא</a>');
                } else {
                    $('#nextPage').html('<a href="recipePage.html?recipeNum=' + (tempIndex) + '">הבא</a>');
                }
            }
        }
    });
});