export class DeltaTime {
    lastUpdate = Date.now();
    deltaTime = 0;

    constructor() {
        this.lastUpdate = Date.now();
        this.update();
    }

    get() {
        return this.deltaTime;
    }

    update () {
        setInterval(() => {
            this.deltaTime = this.tick();
        }, 0)
    }

    tick () {
        const now = Date.now();
        const deltaTime = now - this.lastUpdate;
        this.lastUpdate = now;

        return deltaTime;
    }
}