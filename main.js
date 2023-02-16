import Root from './components/root.js';
import Calculator from './components/calculator.js';
import Clock from './components/clock.js';
import Settings from './components/settings.js';
import TicTacToe from './components/TicTacToe.js';

console.log('hello world')
const root = new Root({
    components: [
        new Calculator(),
        new Clock(),
        new TicTacToe(),
        new Settings()
    ]
});

const appsContainer = document.getElementById('app');

const calculatorButton = document.getElementById('calculator-button');
const clockButton = document.getElementById('clock-button');
const ticTacToeButton = document.getElementById('tic-tac-toe-button');
const settingsButton = document.getElementById('settings-button');

calculatorButton.addEventListener('click', () => {
    const calculator = new Calculator();
    appsContainer.innerHTML = '';
    appsContainer.appendChild(calculator.element);
    console.log('calculator clicked')
});

clockButton.addEventListener('click', () => {
    const clock = new Clock();
    appsContainer.innerHTML = '';
    appsContainer.appendChild(clock.element);
});

ticTacToeButton.addEventListener('click', () => {
    const ticTacToe = new TicTacToe();
    appsContainer.innerHTML = '';
    appsContainer.appendChild(ticTacToe.element);
});

settingsButton.addEventListener('click', () => {
    const settings = new Settings();
    appsContainer.innerHTML = '';
    appsContainer.appendChild(settings.element);
});

root.render();
