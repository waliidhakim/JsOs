export default class TicTacToe extends App{
    constructor() {
      super({
        title: 'Tic Tac Toe',
        children: `
          <div class="tic-tac-toe">
            <table>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        `
      });
  
      this.table = this.element.querySelector('table');
      this.cells = this.table.querySelectorAll('td');
  
      this.table.addEventListener('click', (event) => {
        const cell = event.target;
        if (cell.tagName === 'TD' && !cell.textContent) {
          cell.textContent = 'X';
          this.checkForWin();
          this.computerMove();
        }
      });
    }
  
    checkForWin() {
      // code to check for a win
    }
  
    computerMove() {
      // code to make a computer move
    }
  }
  