function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*40,y*40,40,40);
    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(x*40,y*40,40,40)

}


let board= [];
for(let  r =0 ;r<20;r++){
    board[r]=[];
    for(let  c = 0;c<20;c++){
        board[r][c]='red';
    }
}

function  drawBoard(){
    for(let r =0 ;r<20;r++){
        for( let c = 0;c<20;c++){
            drawSquare(c,r,board[r][c])
        }
    }
}
drawBoard()
