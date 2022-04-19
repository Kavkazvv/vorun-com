export default class Game {
    constructor() {
        this.turn = 'X';
        this.board = new Array(9).fill(null);
    }
    nextTurn() {
        return this.turn = this.turn === 'X' ? 'O' : 'X';
    }
    makeMove(index) {
        if(!this.board[index] || !this.isInProgress()) {
            this.board[index] = this.turn;
            if(this.findWinningCombination().length == 0) {
                this.nextTurn();
            }
        }
        return this.board;
    }
    findWinningCombination() {
        const winningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            
            [0,3,6],
            [1,4,7],
            [2,5,8],

            [0,4,8],
            [2,4,6]
        ];

        const ans = [];
        for(const [x, y, z] of winningCombination) {
            if(this.board[x] && this.board[x] == this.board[y] && this.board[y] == this.board[z]) {
                ans.push([x, y, z]);
            }
        }
        return ans;
    }
    isInProgress() {
        return this.findWinningCombination().length == 0 && this.board.includes(null);
    }
}