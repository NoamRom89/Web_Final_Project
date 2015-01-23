/**
 * Created by Noam Rom on 12/14/2014.
 */


window.onload = function () {
    var checkBoxPic = document.getElementById("CKstyle");
    checkBoxPic.addEventListener("click",showPic);
}

function showPic(){

    console.log("showPic");// First checking for the debugger

    var sqrObj = document.createElement("section");
    sqrObj.className = 'checkBox';

    sqrObj.addEventListener("click",function(){
        <!-- This function checks the class's name, for determine if it needs to color it in black or white -->
        if(this.className == "box blackBox"){
            this.className = "box";
        }
        else{
            this.className += " blackBox";
        }
    });
    document.getElementById("main3").appendChild(sqrObj);
}
/*

function addSquare(){

    console.log("addSquare");// First checking for the debugger
    counter++;

    var sqrObj = document.createElement("article");
    sqrObj.className = 'box';

    sqrObj.addEventListener("click",function(){
        <!-- This function checks the class's name, for determine if it needs to color it in black or white -->
        if(this.className == "box blackBox"){
            this.className = "box";
        }
        else{
            this.className += " blackBox";
        }
    });
    document.getElementById("main3").appendChild(sqrObj);
}

function removeSquare(){
    console.log("removeSquare");// First checking for the debugger

    if(counter > 0){
        counter--;

        var sqrObj = document.getElementsByClassName("box");
        sqrObj[sqrObj.length-1].remove();
    }
    else{
        alert("There are no more squares to drop");
    }
}

