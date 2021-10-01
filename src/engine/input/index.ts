interface IEvent {
    type: 'keydown' | 'keyup';
    key: string;
    func: Function;
}

export default class Input {
    keyMap: {[key: string]: boolean} = {};

    constructor() {
        this.init();
    }

    init () {
        window.addEventListener('keydown', (e) => {
            this.keyMap[e.key] = true;
        });
        window.addEventListener('keyup', (e) => {
            this.keyMap[e.key] = false;
        });
    }

    isKeyDown(key: string) {
        return this.keyMap[key];
    }

    isKeyUp(key: string) {
        return !this.keyMap[key];
    }
}