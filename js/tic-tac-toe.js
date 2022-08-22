function isValidBoard(board) {
    // Expecting a 9 elements array as board
    if (board.length != 9) {
        return false;
    }

    // Only valid values for each board positon are -1 (O), 0 (empty), 1 (X)
    for (let i = 0; i < board.length; i ++) {
        if (board[i] != 0 && board[i] != 1 && board[i] != -1) {
            return false;
        } 
    }
    
    return true;
}

function didAnyoneWin(position1, position2, position3) {
    if (position1 == 0 || position2 == 0 || position3 == 0) {
        return false;
    } else {
        return position1 == position2 && position2 == position3;
    }
}

function checkBoard(board) {
    if (! isValidBoard(board)) {
        return {"error": "Board Not Valid"};
    }

    //horizontal rows
    for (let i = 0; i < board.length; i = i + 3) {
        player = board[i] == 1 ? "X":"O";
        if (didAnyoneWin(board[i], board[i+1], board[i+2])) {
            return {"result" : player + " Won!!!"}
        }   

        if(i == 0 && didAnyoneWin(board[0], board[4], board[8])) {
            return {"result" : player + " Won!!!"}
        }
    }
    //vertical columns
    for (let i = 0; i < 3; i++) {
        player = board[i] == 1 ? "X":"O";
        if (didAnyoneWin(board[i], board[i+3], board[i+6])) {
            return {"result" : player + " Won!!!"}
        }   

        if (i == 2 && didAnyoneWin(board[2], board[4], board[6])) {
            return {"result" : player + " Won!!!"}
        }
    }

    if (isTieGame(board)) {
        return {"result" : "Tie Game!"}
    } 
    
    return {"error" : 'game continues'}   
}

function isTieGame(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] == 0) {
            return false;
        } 
    }

    return true;
}


