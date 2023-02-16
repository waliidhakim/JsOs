export default class Clock extends App {
    constructor() {
      super({
        title: 'Clock',
        children: `
          <div class="clock">
            <div class="display"></div>
          </div>
        `
      });
  
      this.display = this.element.querySelector('.display');
  
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  
    updateTime() {
      const now = new Date();
      this.display.innerHTML = `
        ${this.padTime(now.getHours())}:
        ${this.padTime(now.getMinutes())}:
        ${this.padTime(now.getSeconds())}
      `;
    }
  
    padTime(time) {
      return time.toString().padStart(2, '0');
    }
  }
  