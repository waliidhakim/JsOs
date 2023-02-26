export function App(appElement) {
    const buttons = appElement.querySelectorAll('#btn');
    const appButtons = [...document.querySelectorAll('.icon'), ...document.querySelectorAll('.minim-icon')];
    const calculator = document.querySelector('.calculator');
    const clock = document.querySelector('.clock');
    const tictactoe = document.querySelector('.tictactoe');
    const settings = document.querySelector('.settings');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('maximize')) {
                appElement.classList.toggle('maximized');
            } else if (button.classList.contains('minimize')) {
                appElement.classList.add('minimized');
            } else if (button.classList.contains('close')) {
                appElement.classList.add('closed');
            }
        });
    });
    appButtons.forEach(appButton => {
        appButton.addEventListener('click', () => {
            if (appButton.id.includes('calculator-icon') && !appButton.id.includes('visible')) {
                calculator.classList.add('visible')
                calculator.classList.remove('minimized')
                calculator.classList.remove('closed')
            }
            if (appButton.id.includes('clock-icon')) {
                clock.classList.add('visible')
                clock.classList.remove('minimized')
                clock.classList.remove('closed')
            }
            if (appButton.id.includes('tictactoe-icon')) {
                tictactoe.classList.add('visible')
                tictactoe.classList.remove('minimized')
                tictactoe.classList.remove('closed')
            }
            if (appButton.id.includes('settings-icon')) {
                settings.classList.add('visible')
                settings.classList.remove('minimized')
                settings.classList.remove('closed')
            }
        })
    })
}
