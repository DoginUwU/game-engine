import { engine } from "../../index";
import Vector2 from "../vector2";
import Input from "../input";
import Collision from "../collision";

export default abstract class GameObject {
    id = 0;
    name = '';
    image = '';
    visible = true;
    opacity = 1;

    width = 100;
    height = 100;
    color = '#000000';

    position = new Vector2();
    rotation = 0
    input = new Input();
    collision = new Collision(this.width, this.height, this.position);

    constructor(name: string, image: string) {
        this.id = parseInt((Math.random() * (1000000 - 0) + 0).toString());
        this.name = name;
        this.visible = true;
        this.opacity = 1;

        this.init();
    }

    init () {
        this.start();
    }

    public draw (deltaTime?: number) {
        /*const image = new Image()
        image.src = this.image;
        if (this.visible)
            engine.window.drawImage(image, this.position, this.width, this.height) */
        if (this.visible)
            engine.window.fillRect(this.position, this.width, this.height, this.color)
    }

    abstract start();
    abstract update(deltaTime?: number);
}