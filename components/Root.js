export default class Root {
    constructor() {
        this.state = {
            app: null
        };
    }

    render() {
        return `
        <div class="root">
          ${this.state.app ? this.state.app.render() : ''}
        </div>
      `;
    }

    setApp(app) {
        this.state.app = app;
        this.render();
    }
}

const root = new Root();
document.body.innerHTML = root.render();
