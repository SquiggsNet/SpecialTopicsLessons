"use strict";
var i = 0;

function shuffleVisuals(){

    var divNodes = document.getElementsByClassName("visualCue");
    divNodes[i].style.display = "inline";
    divNodes[i].style.zIndex = "-1";
    i++;
    if(i>2){
        i=0;
        divNodes[i].style.zIndex = "1";
    }else{
        divNodes[i].style.zIndex = "1";
    }

}



function startTimer()
{
    setTimeout(shuffleVisuals(), 30);
}

var startButton = document.getElementById("startShow");
startButton.addEventListener("click", function(){
    startTimer(this);
});





//http://stackoverflow.com/questions/13975891/change-image-in-html-page-every-few-seconds