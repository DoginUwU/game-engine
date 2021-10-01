import Vector2 from "../../engine/vector2";
import GameObject from "../../engine/gameObject";

export default class Rock extends GameObject {

    constructor() {
        super('Rock', './images/rock.png');
    }

    start() {
        this.position = new Vector2(300, 300);
        this.collision.updatePosition(this.position);
    }
    
    update() {
        
    }
}