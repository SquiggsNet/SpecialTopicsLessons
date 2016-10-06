"use strict";

function changeDivPriority(selectedElement) {
    //access by id
    var divNodes = document.getElementsByClassName("divSwap");

    if (selectedElement == divNodes[0]) {
        divNodes[0].style.zIndex = 2;
        divNodes[0].style.opacity = 0.5;
        divNodes[1].style.zIndex = 3;
        divNodes[1].style.opacity = 1;
    } else if (selectedElement == divNodes[1]) {
        divNodes[0].style.zIndex = 3;
        divNodes[0].style.opacity = 1;
        divNodes[1].style.zIndex = 2;
        divNodes[1].style.opacity = 0.5;
    }
}

var divClick = document.getElementsByClassName("divSwap");
for (var i=0; i<divClick.length; i++)
divClick[i].addEventListener("dblclick", function(){
    changeDivPriority(this)
});
