"use strict";

(function(){

    var gameBoard = new Array(6);
    for(var i=0; i<gameBoard.length; i++){
        gameBoard[i] = new Array(6);
    }

    function gameCell(color, canClick)
    {
        this.color = color;
        this.isClickable = canClick;
    }

    for(var x=0; x<gameBoard.length;x++)
    {
        for(var y=0; y<gameBoard[x].length;y++)
        {
            var cellObj;
            if((x==0&&y==3)||(x==0&&y==4)||(x==1&&y==3)||(x==4&&y==1)){
                cellObj = new gameCell("blue","false");
            }else if((x==3&&y==2)||(x==3&&y==4)||(x==5&&y==2)){
                cellObj = new gameCell("white","false");
            }else if((x==0&&y==0)||(x==1&&y==2)||(x==1&&y==5)||(x==2&&y==1)||(x==2&&y==2)||(x==2&&y==4)||(x==3&&y==0)||(x==3&&y==3)||(x==3&&y==5)||(x==4&&y==2)||(x==4&&y==5)||(x==5&&y==0)||(x==5&&y==1)||(x==5&&y==4)){
                cellObj = new gameCell("blue","true");
            }else{
                cellObj = new gameCell("white","true");
            }
            gameBoard[x][y]=cellObj;
        }
    }

    var tableCreation = document.getElementById('table');
    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    var tableBody = document.createElement("tbody");
    for(var x=0;x<6;x++){
        var row = document.createElement("tr");
        for(var y=0;y<6;y++){
            var cell = document.createElement("td");
            cell.style.border = "2px solid black";
            cell.style.width = "50px";
            cell.style.height = "50px";
            cell.style.textAlign = "center";
            cell.style.color = "red";
            if(gameBoard[x][y].isClickable=="true"){
                cell.style.backgroundColor = "grey";
                cell.onmousedown = reverseColor;
            }else{
                cell.style.backgroundColor = gameBoard[x][y].color;
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    tableCreation.appendChild(table);

    table.oncontextmenu = function() {
        return false;
    }

    function reverseColor(event){

        if(event.button == 0){
            var currentCell = window.event.srcElement;
            if(currentCell.style.backgroundColor=="grey"){
                currentCell.style.backgroundColor = "blue";
            }else if(currentCell.style.backgroundColor=="blue"){
                currentCell.style.backgroundColor = "white";
            }else{
                currentCell.style.backgroundColor = "grey";
            }
        }else if(event.button == 2){
            var currentCell = window.event.srcElement;
            if(currentCell.style.backgroundColor=="grey"){
                currentCell.style.backgroundColor = "white";
            }else if(currentCell.style.backgroundColor=="white"){
                currentCell.style.backgroundColor = "blue";
            }else{
                currentCell.style.backgroundColor = "grey";
            }
            return false;
        }
    }


    var puzzleCheck = document.getElementById("puzzleCheck");
    puzzleCheck.addEventListener("click", function(){
        var isMatch = true;
        var isGood = true;
        var feedback = document.getElementById("feedBack");

        var tableCheck = tableBody.childNodes;
        for(var x=0; x<gameBoard.length;x++) {
            var rowCheck = tableCheck[x].childNodes;

            for (var y = 0; y < gameBoard[x].length; y++) {
                var cellCheck = rowCheck[y];

                if (cellCheck.style.backgroundColor != gameBoard[x][y].color) {
                    isMatch = false;
                }else{
                    continue;
                }
                if (cellCheck.style.backgroundColor != "grey") {
                    isGood = false;
                }
            }
        }

        if (feedback.childNodes[0] != null){
            feedback.removeChild(feedback.childNodes[0]);
        }

        if(isMatch){
            feedback.appendChild(document.createTextNode("Puzzle is complete and correct."));
        }else if(isGood){
            feedback.appendChild(document.createTextNode("So far so good."));
        }else{
            feedback.appendChild(document.createTextNode("Something is wrong."));
        }

    });

    var showIncorrect = document.getElementById("incorrect");
    showIncorrect.addEventListener("click",function(){
        if(showIncorrect.checked){
            var tableCheck = tableBody.childNodes;
            for(var x=0; x<gameBoard.length;x++) {
                var rowCheck = tableCheck[x].childNodes;
                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellCheck = rowCheck[y];
                    if (cellCheck.style.backgroundColor == gameBoard[x][y].color) {
                        continue;
                    }
                    if (cellCheck.style.backgroundColor != "grey") {
                        cellCheck.appendChild(document.createTextNode("X"));
                        continue;
                    }
                }
            }
        }else{
            var tableCheck = tableBody.childNodes;
            for(var x=0; x<gameBoard.length;x++) {
                var rowCheck = tableCheck[x].childNodes;
                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellCheck = rowCheck[y];
                    if (cellCheck.childNodes[0] != null){
                        cellCheck.removeChild(cellCheck.childNodes[0]);
                    }
                }
            }
        }
    });

})();

