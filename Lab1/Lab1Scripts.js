"use strict";

function changeDivPriority(selectedElement)
{
    //access by id
    var firstDivNode = document.getElementById("step1A");
    var secondDivNode = document.getElementById("step1B");

    if (selectedElement==firstDivNode){
        firstDivNode.style.zIndex = -1;
        firstDivNode.style.opacity = 0.5;
        secondDivNode.style.zIndex = 1;
        secondDivNode.style.opacity = 1;
    }else if(selectedElement==secondDivNode){
        firstDivNode.style.zIndex = 1;
        firstDivNode.style.opacity = 1;
        secondDivNode.style.zIndex = -1;
        secondDivNode.style.opacity = 0.5;
    }



}