import Rock from "../prefabs/Rock";
import Player from "../prefabs/Player";
import { DeltaTime } from "./deltaTime";
import GameObject from "./gameObject";
import Window from "./window";
import Vector2 from "./vector2";

interface EngineOptions {

}

export default class Engine {
    window = {} as Window;
    options = {} as EngineOptions;
    player = new Player();
    static deltaTime?: DeltaTime = undefined;

    static objects: Array<GameObject> = [];

    constructor(canvas: HTMLCanvasElement, options: EngineOptions) {
        this.window = new Window(canvas);
        this.options = options;
        this.init();
    }

    static getDeltaTime () {
        this.deltaTime = this.deltaTime ?? new DeltaTime();

        return this.deltaTime;
    }

    private init () {
        console.log('\n\n\x1b[31m[Engine] Engine initialized\n\n');

        setInterval(() => {
            this.update()
        }, 0);

        Engine.addObject(this.player);
        const rock = Engine.addObject(new Rock());
        rock.position = new Vector2(400, 400);
    }

    clamp(value, min, max){
        if(value < min) return min;
        else if(value > max) return max;
        return value;
    }

    private update () {
        this.window.update()
        const canvas = this.window.getCanvas();
        var camX = this.clamp(-this.player.camera.position.x + canvas.width / 2 - 50, 0, 10000 - canvas.width);
        var camY = this.clamp(-this.player.camera.position.y + canvas.height / 2, 0, 10000 - canvas.height);
        this.window.getContext().translate(camX, camY);
        requestAnimationFrame(() => Engine.updateObjects())
    }

    static updateObjects () {
        this.objects.forEach(object => {
            object.update();
            object.draw(this.deltaTime?.get());
        })
    }

    static addObject (object: GameObject) {
        this.objects.push(object);

        return object;
    }
}