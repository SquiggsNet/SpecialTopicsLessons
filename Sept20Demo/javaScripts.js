"use strict";

function changeColor(selectedElement)
{
    //use this keyword to pass in the element that triggered the event
    //alert('test');
    //selectedElement.innerHTML = "AP DIV";

    //traverse through the dom the hard yucky ugly way.
    // var headingNode = document.body.childNodes[1].childNodes[1];
    // headingNode.innerHTML = "AP DIV";

    //access all elements of the same type
    // var paragraphNodes = document.getElementsByTagName("p");
    // for(var i=0;i<paragraphNodes.length;i++)
    // {
    //     paragraphNodes[i].innerHTML = "CHANGED PARAGRAPH TEXT";
    // }

    //access all elements of the same class
    // var nodes = document.getElementsByClassName("foo");
    // for(var i=0;i<nodes.length;i++)
    // {
    //     nodes[i].innerHTML = "CLASS CHANGED TEXT";
    // }

    //access a parent node and remove it
    var headingNode = document.getElementById("bar");
    var parentNode = headingNode.parentNode;//should be header
    var grandParentNode = parentNode.parentNode;//should be body
    var articleNode = grandParentNode.childNodes[3];
    articleNode.remove();
}