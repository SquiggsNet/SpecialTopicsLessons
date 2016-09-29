"use strict";

function navigateHeadings(selectedElement)
{
    var headingNodes = document.getElementsByClassName("accordHeader");
    //var infoNodes = document.getElementsByClassName("info");
    var infoNodes = selectedElement.parentNode;
    var selectedInfo = selectedElement.parentNode.childNodes[3];

    if (selectedInfo.style.display === "none"){
        var selectState = true;
    }

    for (var i = 0; i < headingNodes.length; i++){
        headingNodes[i].style.backgroundColor = "blueviolet";
        headingNodes[i].style.color = "black";
        infoNodes.childNodes[3].style.display = "none";
    }

    if(selectState){
        selectedElement.style.backgroundColor = "indigo";
        selectedElement.style.color = "white";
        selectedInfo.style.display = "block";
    }
}

var headClick = document.getElementsByClassName("accordHeader");
for (var i=0; i<headClick.length; i++)
    headClick[i].addEventListener("click", function(){
        navigateHeadings(this)
    });

