import Vector2 from "../../engine/vector2";
import GameObject from "../../engine/gameObject";
import Engine from "../../engine";
import Camera from "../../engine/camera";

export default class Player extends GameObject {
    speed = 4
    speedMultiplier = this.speed
    velocity = new Vector2(0, 0)
    rotation = 100
    camera = new Camera()

    constructor() {
        super('Player', './images/player.png');
        this.velocity = new Vector2(0, 0)
        this.color = '#5f5cff'
    }

    start() {
        this.position = new Vector2(20, 20);
    }
    
    update() {
        this.updateMovement();
        this.updateCollision();
        this.position.translateV(this.velocity);
        this.collision.updatePosition(this.position);
        this.camera.position = new Vector2(this.position.x, this.position.y);
    }

    updateCollision() {
        Engine.objects.forEach(object => {
            if(this.id === object.id) return;
            
            if(this.collision.checkLeftCollision(object.position)) {
                if(this.velocity.x > 0)
                    this.velocity = new Vector2(0, this.velocity.y) 
            }
            if(this.collision.checkRightCollision(object.position)) {
                if(this.velocity.x < 0)
                    this.velocity = new Vector2(0, this.velocity.y) 
            }
            if(this.collision.checkUpCollision(object.position)) {
                if(this.velocity.y > 0)
                    this.velocity = new Vector2(this.velocity.x, 0) 
                
            }
            if(this.collision.checkDownCollision(object.position)) {
                if(this.velocity.y < 0)
                    this.velocity = new Vector2(this.velocity.x, 0) 
            }
        })

       
    }

    updateMovement() {
        if(this.input.isKeyDown('ArrowUp')) {
            if (this.velocity.y > -this.speed)
                this.velocity.translateY(-1 * this.speedMultiplier)
        }
        if(this.input.isKeyDown('ArrowDown')) {
            if (this.velocity.y < this.speed)
                this.velocity.translateY(1 * this.speedMultiplier)
        }
        if(this.input.isKeyDown('ArrowLeft')) {
            if (this.velocity.x > -this.speed)
                this.velocity.translateX(-1 * this.speedMultiplier)
        }
        if(this.input.isKeyDown('ArrowRight')) {
            if (this.velocity.x < this.speed)
                this.velocity.translateX(1 * this.speedMultiplier)
        }

        if(this.input.isKeyUp('ArrowRight') && this.input.isKeyUp('ArrowLeft')) {
            this.velocity = new Vector2(0, this.velocity.y) 
        }
        if(this.input.isKeyUp('ArrowUp') && this.input.isKeyUp('ArrowDown')) {
            this.velocity = new Vector2(this.velocity.x, 0) 
        }
    }
}