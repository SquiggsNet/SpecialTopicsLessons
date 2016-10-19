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
    var tableBody = document.createElement("tbody");
    var color = "grey";
    for(var x=0;x<6;x++){
        var row = document.createElement("tr");
        for(var y=0;y<6;y++){
            var cell = document.createElement("td");
            if(gameBoard[x][y].isClickable=="true"){
                cell.style.backgroundColor = "grey";
                cell.addEventListener('click',changeColor);
            }else{
                cell.style.backgroundColor = gameBoard[x][y].color;
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    tableCreation.appendChild(table);

    function changeColor(){
        var currentCell = window.event.srcElement;
        if(currentCell.style.backgroundColor=="grey"){
            currentCell.style.backgroundColor = "blue";
        }else if(currentCell.style.backgroundColor=="blue"){
            currentCell.style.backgroundColor = "white";
        }else{
            currentCell.style.backgroundColor = "grey";
        }
    }

    puzzleCheck = document.getElementById("puzzleCheck");
    puzzleCheck.addEventListener("click", function(){
        for(var x=0; x<gameBoard.length;x++) {
            for (var y = 0; y < gameBoard[x].length; y++) {

            }
        }
    });
})();