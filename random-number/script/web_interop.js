class Notifier {
    constructor() {
        this._listeners = [];
    }

    addListener(listener) {
        if (this._listeners.includes(listener)) return;

        this._listeners.push(listener);
    }

    removeListener(listener) {
        const index = array.indexOf(listener);

        const listenerExists = index > -1;

        if (!listenerExists) return;


        this._listeners.splice(index, 1);
    }

    notify(event) {
        if (this._listeners.length < 1) return;

        this._listeners.forEach(listener => listener(event));
    }
}
 
var RandomNumberButton = class extends Notifier {
    constructor() {
        super();

        this.buttonElement = document.createElement('button');
        this.buttonElement.innerText = 'Get random number';
        this.buttonElement.style.backgroundColor = "#99ccff";

        window.addEventListener('click', (e) => {
            if (e.target != this.buttonElement) return;

            const randomNumber = Math.ceil(Math.random() * 1000);
            const event = new JsIneropEvent(randomNumber)

            this.notify(event);

        })
    }
}

var JsIneropEvent = class {
    constructor(value) {
        this.value = value;
    }
}