import Vector2 from "../vector2";
import Scale from "../scale";

export default class Collision {
    position = new Vector2();
    scale = new Scale();

    constructor(width = 20, height = 20, position: Vector2) {
        this.scale = new Scale(width, height);
        this.position = position;
    }

    updatePosition(position) {
        this.position = position;
    }

    checkLeftCollision(pos: Vector2) {
        return this.checkCollision(pos) &&
        this.position.x + this.scale.width >= pos.x &&
        this.position.x <= pos.x;
        
    }
    checkRightCollision(pos: Vector2) {
        return this.checkCollision(pos) &&
        this.position.x - this.scale.width <= pos.x &&
        this.position.x >= pos.x;
    }

    checkUpCollision(pos: Vector2) {
        return this.checkCollision(pos) &&
        this.position.y + this.scale.height >= pos.y &&
        this.position.y <= pos.y;
    }

    checkDownCollision(pos: Vector2) {
        return this.checkCollision(pos) &&
        this.position.y - this.scale.height <= pos.y &&
        this.position.y >= pos.y;
    }
    

    checkCollision(pos: Vector2) {
        return this.position.x <= pos.x + this.scale.width &&
        this.position.x >= pos.x - this.scale.width &&
        this.position.y <= pos.y + this.scale.height &&
        this.position.y >= pos.y - this.scale.height;
    }
}