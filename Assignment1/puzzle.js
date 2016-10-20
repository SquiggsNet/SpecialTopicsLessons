"use strict";

(function(){

    function gameCell(color, canClick)          //Create game cell object
    {
        this.color = color;
        this.isClickable = canClick;
    }

    var difficulty = document.getElementsByName("difficulty");
    for (var i=0;i<difficulty.length;i++){

        difficulty[i].onclick = CreateGame;
    }
    function CreateGame() {
        for (var i = 0; i < difficulty.length; i++) {
            if (difficulty[i].checked) {
                var selectedDifficulty = difficulty[i].value;
                break;
            }
        }

        if (selectedDifficulty == "six") {
            var gameBoard = new Array(6);
            for (var i = 0; i < gameBoard.length; i++) {
                gameBoard[i] = new Array(6);
            }

            for (var x = 0; x < gameBoard.length; x++)        //create board properties based off object
            {
                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellObj;
                    if ((x == 0 && y == 3) || (x == 0 && y == 4) || (x == 1 && y == 3) || (x == 4 && y == 1)) {         //blue cells that are given (not clickable)
                        cellObj = new gameCell("blue", "false");
                    } else if ((x == 3 && y == 2) || (x == 3 && y == 4) || (x == 5 && y == 2)) {                 //white cells that are given (not clickable)
                        cellObj = new gameCell("white", "false");
                    } else if ((x == 0 && y == 0) || (x == 1 && y == 2) || (x == 1 && y == 5) || (x == 2 && y == 1) || (x == 2 && y == 2) || (x == 2 && y == 4) || (x == 3 && y == 0) || (x == 3 && y == 3) || (x == 3 && y == 5) || (x == 4 && y == 2) || (x == 4 && y == 5) || (x == 5 && y == 0) || (x == 5 && y == 1) || (x == 5 && y == 4)) {
                        cellObj = new gameCell("blue", "true");                          //blue cells that are hidden (clickable)
                    } else {                                                              //white cells that are hidden (clickable
                        cellObj = new gameCell("white", "true");
                    }
                    gameBoard[x][y] = cellObj;
                }
            }

        } else if (selectedDifficulty == "eight") {

            var gameBoard = new Array(8);               //Create two dimensional array to contain cell objects
            for (var i = 0; i < gameBoard.length; i++) {
                gameBoard[i] = new Array(8);
            }

            for (var x = 0; x < gameBoard.length; x++)        //create board properties based off object
            {
                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellObj;
                    if ((x == 0 && y == 6) || (x == 2 && y == 4) || (x == 2 && y == 6) || (x == 3 && y == 0) || (x == 3 && y == 2) || (x == 4 && y == 4) || (x == 5 && y == 4) || (x == 6 && y == 0) || (x == 6 && y == 6)) {         //blue cells that are given (not clickable)
                        cellObj = new gameCell("blue", "false");
                    } else if ((x == 0 && y == 2) || (x == 1 && y == 7) || (x == 2 && y == 1) || (x == 2 && y == 2) || (x == 3 && y == 6) || (x == 5 && y == 1) || (x == 5 && y == 3) || (x == 7 && y == 1)) {                 //white cells that are given (not clickable)
                        cellObj = new gameCell("white", "false");
                    } else if ((x == 0 && y == 1) || (x == 0 && y == 3) || (x == 0 && y == 7) || (x == 1 && y == 1) || (x == 1 && y == 2) || (x == 1 && y == 4) || (x == 1 && y == 5) || (x == 2 && y == 0) || (x == 2 && y == 3) || (x == 3 && y == 5) || (x == 3 && y == 7) || (x == 4 && y == 1) || (x == 4 && y == 3) || (x == 4 && y == 6) || (x == 5 && y == 2) || (x == 5 && y == 5) || (x == 5 && y == 7) || (x == 6 && y == 1) || (x == 6 && y == 3) || (x == 7 && y == 0) || (x == 7 && y == 2) || (x == 7 && y == 5) || (x == 7 && y == 7)) {
                        cellObj = new gameCell("blue", "true");                          //blue cells that are hidden (clickable)
                    } else {                                                              //white cells that are hidden (clickable
                        cellObj = new gameCell("white", "true");
                    }
                    gameBoard[x][y] = cellObj;
                }
            }

        } else if (selectedDifficulty == "ten") {
            var gameBoard = new Array(10);               //Create two dimensional array to contain cell objects
            for (var i = 0; i < gameBoard.length; i++) {
                gameBoard[i] = new Array(10);
            }

            for (var x = 0; x < gameBoard.length; x++)        //create board properties based off object
            {
                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellObj;
                    if ((x == 0 && y == 2) || (x == 0 && y == 4) || (x == 1 && y == 2) || (x == 1 && y == 4) || (x == 2 && y == 5) || (x == 3 && y == 2) || (x == 4 && y == 1) || (x == 4 && y == 6) || (x == 4 && y == 8) || (x == 5 && y == 1) || (x == 5 && y == 3) || (x == 6 && y == 8) || (x == 7 && y == 8) || (x == 8 && y == 6) || (x == 9 && y == 9)) {         //blue cells that are given (not clickable)
                        cellObj = new gameCell("blue", "false");
                    } else if ((x == 0 && y == 6) || (x == 1 && y == 1) || (x == 1 && y == 7) || (x == 1 && y == 9) || (x == 3 && y == 7) || (x == 3 && y == 9) || (x == 6 && y == 5) || (x == 6 && y == 6) || (x == 7 && y == 3) || (x == 8 && y == 3)) {                 //white cells that are given (not clickable)
                        cellObj = new gameCell("white", "false");
                    } else if ((x == 0 && y == 5) || (x == 0 && y == 7) || (x == 0 && y == 9) || (x == 1 && y == 0) || (x == 1 && y == 6) || (x == 1 && y == 8) || (x == 2 && y == 1) || (x == 2 && y == 3) || (x == 2 && y == 7) || (x == 2 && y == 9) || (x == 3 && y == 0) || (x == 3 && y == 3) || (x == 3 && y == 6) || (x == 3 && y == 8) || (x == 4 && y == 2) || (x == 4 && y == 4) || (x == 5 && y == 5) || (x == 5 && y == 7) || (x == 5 && y == 9) || (x == 6 && y == 0) || (x == 6 && y == 3) || (x == 6 && y == 4) || (x == 6 && y == 7) || (x == 7 && y == 1) || (x == 7 && y == 2) || (x == 7 && y == 5) || (x == 7 && y == 6) || (x == 8 && y == 0) || (x == 8 && y == 1) || (x == 8 && y == 4) || (x == 8 && y == 9) || (x == 9 && y == 0) || (x == 9 && y == 3) || (x == 9 && y == 5) || (x == 9 && y == 7)) {
                        cellObj = new gameCell("blue", "true");                          //blue cells that are hidden (clickable)
                    } else {                                                              //white cells that are hidden (clickable
                        cellObj = new gameCell("white", "true");
                    }
                    gameBoard[x][y] = cellObj;
                }
            }
        }

        var tableCreation = document.getElementById('table');                       //locate table div
        var table = document.createElement("table");                                //create table elements and styles
        table.style.borderCollapse = "collapse";
        var tableBody = document.createElement("tbody");
        for (var x = 0; x < gameBoard.length; x++) {
            var row = document.createElement("tr");
            for (var y = 0; y < gameBoard.length; y++) {
                var cell = document.createElement("td");
                cell.style.border = "2px solid black";
                cell.style.width = "50px";
                cell.style.height = "50px";
                cell.style.textAlign = "center";
                cell.style.color = "red";
                if (gameBoard[x][y].isClickable == "true") {                            //apply backround color and event listener if applicable
                    cell.style.backgroundColor = "grey";
                    cell.onmousedown = colorSwap;
                } else {
                    cell.style.backgroundColor = gameBoard[x][y].color;
                }
                row.appendChild(cell);                                              //adding all elements together to create table
            }
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        if (tableCreation.childNodes[0] != null) {
            tableCreation.removeChild(tableCreation.childNodes[0]);
        }
        tableCreation.appendChild(table);


        table.oncontextmenu = function () {
            return false;
        }                                      //surpressing the right-click menu on the table

        function colorSwap(event) {

            if (event.button == 0) {                                                  //based on left click
                var currentCell = window.event.srcElement;
                if (currentCell.style.backgroundColor == "grey") {
                    currentCell.style.backgroundColor = "blue";
                } else if (currentCell.style.backgroundColor == "blue") {
                    currentCell.style.backgroundColor = "white";
                } else {
                    currentCell.style.backgroundColor = "grey";
                }
            } else if (event.button == 2) {                                            //based on right click
                var currentCell = window.event.srcElement;
                if (currentCell.style.backgroundColor == "grey") {
                    currentCell.style.backgroundColor = "white";
                } else if (currentCell.style.backgroundColor == "white") {
                    currentCell.style.backgroundColor = "blue";
                } else {
                    currentCell.style.backgroundColor = "grey";
                }
                return false;
            }
        }                                               //adjust cell color


        var puzzleCheck = document.getElementById("puzzleCheck");                   //creation of listener for puzzle checking button
        puzzleCheck.addEventListener("click", function () {
            var isMatch = true;
            var isGood = true;
            var feedback = document.getElementById("feedBack");

            var tableCheck = tableBody.childNodes;
            for (var x = 0; x < gameBoard.length; x++) {
                var rowCheck = tableCheck[x].childNodes;

                for (var y = 0; y < gameBoard[x].length; y++) {
                    var cellCheck = rowCheck[y];

                    if (cellCheck.style.backgroundColor != gameBoard[x][y].color) {              //checking for matching color
                        isMatch = false;
                    } else {
                        continue;
                    }
                    if (cellCheck.style.backgroundColor != "grey") {                            //checking user selected color
                        isGood = false;
                    }
                }
            }

            if (feedback.childNodes[0] != null) {
                feedback.removeChild(feedback.childNodes[0]);
            }

            if (isMatch) {                                                                            //display result of button checking
                feedback.appendChild(document.createTextNode("Puzzle is complete and correct."));
            } else if (isGood) {
                feedback.appendChild(document.createTextNode("So far so good."));
            } else {
                feedback.appendChild(document.createTextNode("Something is wrong."));
            }

        });

        var showIncorrect = document.getElementById("incorrect");                                   //create listener for help checkbox
        showIncorrect.addEventListener("click", function () {
            if (showIncorrect.checked) {                                                              //when checked show "x"
                var tableCheck = tableBody.childNodes;
                for (var x = 0; x < gameBoard.length; x++) {
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
            } else {                                                                                  //when uncked remove previous validation
                var tableCheck = tableBody.childNodes;
                for (var x = 0; x < gameBoard.length; x++) {
                    var rowCheck = tableCheck[x].childNodes;
                    for (var y = 0; y < gameBoard[x].length; y++) {
                        var cellCheck = rowCheck[y];
                        if (cellCheck.childNodes[0] != null) {
                            cellCheck.removeChild(cellCheck.childNodes[0]);
                        }
                    }
                }
            }
        });
    }

})();

