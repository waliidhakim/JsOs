export default class Calculator {
    constructor() {
      super({
        title: 'Calculator',
        children: `
          <div class="calculator">
            <div class="display"></div>
            <div class="buttons">
              <div class="row">
                <div class="cell">1</div>
                <div class="cell">2</div>
                <div class="cell">3</div>
                <div class="cell">+</div>
              </div>
              <div class="row">
                <div class="cell">4</div>
                <div class="cell">5</div>
                <div class="cell">6</div>
                <div class="cell">-</div>
              </div>
              <div class="row">
                <div class="cell">7</div>
                <div class="cell">8</div>
                <div class="cell">9</div>
                <div class="cell">*</div>
              </div>
              <div class="row">
                <div class="cell">C</div>
                <div class="cell">0</div>
                <div class="cell">=</div>
                <div class="cell">/</div>
              </div>
            </div>
          </div>
        `
      });
  
      this.display = this.element.querySelector('.display');
      this.buttons = this.element.querySelectorAll('.cell');
  
      this.buttons.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.innerHTML;
          if (value === 'C') {
            this.display.innerHTML = '';
          } else if (value === '=') {
            try {
              this.display.innerHTML = eval(this.display.innerHTML);
            } catch (error) {
              this.display.innerHTML = 'Error';
            }
          } else {
            this.display.innerHTML += value;
          } 
        });
      });
    }
  }