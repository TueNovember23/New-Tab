let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function placeMarker(cellIndex) {
    if (!gameEnded && board[cellIndex] === '') {
        board[cellIndex] = 'X';
        document.getElementsByClassName('cell')[cellIndex].innerText = 'X';
        if (checkWinner()) {
            document.getElementById('winner').innerText = `Người chơi X thắng!`;
            gameEnded = true;
            return;
        } else if (checkDraw()) {
            document.getElementById('winner').innerText = `Hòa!`;
            gameEnded = true;
            return;
        }
        let bestMove = findBestMove();
        board[bestMove] = 'O';
        document.getElementsByClassName('cell')[bestMove].innerText = 'O';
        if (checkWinner()) {
            document.getElementById('winner').innerText = `Bot O thắng!`;
            gameEnded = true;
        } else if (checkDraw()) {
            document.getElementById('winner').innerText = `Hòa!`;
            gameEnded = true;
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function findBestMove() {
    let bestVal = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            let moveVal = minimax(board, 0, false);
            board[i] = '';
            if (moveVal > bestVal) {
                bestVal = moveVal;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

function minimax(board, depth, isMaximizing) {
    if (checkWinner()) {
        return isMaximizing ? -1 : 1;
    }
    if (checkDraw()) {
        return 0;
    }
    if (isMaximizing) {
        let bestVal = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                bestVal = Math.max(bestVal, minimax(board, depth + 1, false));
                board[i] = '';
            }
        }
        return bestVal;
    } else {
        let bestVal = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                bestVal = Math.min(bestVal, minimax(board, depth + 1, true));
                board[i] = '';
            }
        }
        return bestVal;
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('winner').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    gameEnded = false;
}
