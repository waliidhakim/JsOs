export default class Settings extends App{
    constructor() {
      super({
        title: 'Settings',
        children: `
          <div class="settings">
            <div class="row">
              <div class="label">Background Color:</div>
              <div class="value">
                <select class="background-color">
                  <option value="white">White</option>
                  <option value="lightgray">Light Gray</option>
                  <option value="darkgray">Dark Gray</option>
                  <option value="black">Black</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="label">Font Size:</div>
              <div class="value">
                <select class="font-size">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        `
      });
  
      this.backgroundColorSelect = this.element.querySelector('.background-color');
      this.fontSizeSelect = this.element.querySelector('.font-size');
  
      this.backgroundColorSelect.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
      });
      this.fontSizeSelect.addEventListener('change', (event) => {
        document.body.style.fontSize = event.target.value + 'px';
      });
    }
  }
  