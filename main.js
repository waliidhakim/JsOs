import { App } from './components/app.js'

document.addEventListener('DOMContentLoaded', () => {
    const calculatorApp = document.querySelector('.calculator');
    new App(calculatorApp, 'calculator');

    const clockApp = document.querySelector('.clock');
    new App(clockApp, 'clock');

    const ticTacToeApp = document.querySelector('.tictactoe');
    new App(ticTacToeApp, 'tic-tac-toe');

    const settingsApp = document.querySelector('.settings');
    new App(settingsApp, 'settings');

});
