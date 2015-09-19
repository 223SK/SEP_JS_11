var board = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]; // this is 5 arrays: the board one, and 4 arrays within it.
board[][];
var boardDimension = 4; // 4 x 4
var score = 0;

function runGame(){
    insertRandomTile();
    renderBoard();
    colorBoard();
}

function insertRandomTile(){
    while(true){
        var i = Math.round(Math.random()*3);
        var j = Math.round(Math.random()*3);
        if(board[i][j] === 0){
            var tileType = Math.round(Math.random()*3);
            if(tileType <= 2) // higher chance of a 2 than a 4
                board[i][j] = 2;
            else
                board[i][j] = 4;
            return;
        }
    }
}

function renderBoard(){
    for(var i = 0; i < boardDimension; i++){
        for(var j = 0; j < boardDimension; j++){
            var cellID = "row"+i+"col"+j;
            if(board[i][j]!== 0){
                document.getElementById(cellID).innerHTML = board[i][j];
            }
            else{
                document.getElementById(cellID).innerHTML = "";
            }
        }
    }
}

function colorBoard(){
    for(var i = 0; i < boardDimension; i++){
        for(var j = 0; j < boardDimension; j++){
            var cellID = "row"+i+"col"+j;
            if(board[i][j] == 2){
                document.getElementById(cellID).style.background = "#f0e5da";
            }
            else if(board[i][j] == 4){
                document.getElementById(cellID).style.background = "#ede2c8";
            }
            else if(board[i][j] == 8){
                document.getElementById(cellID).style.background = "#feb578";
            }
            else if(board[i][j] == 16){
                document.getElementById(cellID).style.background = "#ff9962";
            }
            else if(board[i][j] == 30){
                document.getElementById(cellID).style.background = "#ff8060";
            }
            else if(board[i][j] == 64){
                document.getElementById(cellID).style.background = "#ff613c";
            }
            else if(board[i][j] == 128){
                document.getElementById(cellID).style.background = "#efd26d";
            }
            else if(board[i][j] == 256){
                document.getElementById(cellID).style.background = "#efd15c";
            }
            else if(board[i][j] == 512){
                document.getElementById(cellID).style.background = "#efcd4a";
            }
            else if(board[i][j] == 1024){
                document.getElementById(cellID).style.background = "#f0ca36";
            }
            else if(board[i][j] == 2048){
                document.getElementById(cellID).style.background = "#eeca00";
            }
            else{
                document.getElementById(cellID).style.background = "#ccc0b3";
            }
        }
    }
}

function keyPress(e) {
    console.log("Key pressed: ", e);
    var moveMade = 0;
    if (e.keyCode == 37) {
        moveMade = moveLeft();
    }
    else if (e.keyCode == 38) {
        moveMade = moveUp();
    }
    else if (e.keyCode == 39) {
        moveMade = moveLeft();
    }
    else if (e.keyCode == 40) {
        moveMade = moveDown();
    }
    else {
        console.log("unrecognized key");
    }
    if (moveMade) { // only redraw if necessary
        console.log("Move made");
        insertRandomTile();
        renderBoard();
        colorBoard();
    }
}

function moveLeft() {
    console.log("attempting left");
    var moveMade = 0;
    for (var row = 0; row < boardDimension; row++) {
        for (var col = 0; col < boardDimension; col++) {
            if (board[row][col] > 0){
                for (var i = col; i > 0; i--){
                    if (board[row][i-1] === 0) {
                        board[row][i-1] = board[row][i];
                        board[row][i] = 0;
                        moveMade = 1;
                    } else if (board[row][i-1] === board[row][i]){
                        board[row][i-1] = board[row][i-1] * 2;
                        board[row][i] = 0;
                        moveMade = 1;
                    }
                }
            }
        }
    }
    return moveMade;
}

function moveUp(){

}

function moveRight(){

}

function moveDown(){
    console.log("attempting down");
    var moveMade = 0;
    for (var row = boardDimension - 1; row >= 0 ; row--) {
        for (var col = 0; col < boardDimension; col++) {
            if (board[row][col] > 0){
                for (var i = row; i < boardDimension-1; i++){
                    if (board[i+1][col] === 0) {
                        board[i+1][col] = board[i][col];
                        board[i][col] = 0;
                        moveMade = 1;
                    } else if (board[i+1][col] === board[i][col]){
                        board[i+1][col] = board[i+1][col] * 2;
                        board[i][col] = 0;
                        moveMade = 1;
                    }
                }
            }
        }
    }
    return moveMade;
}
