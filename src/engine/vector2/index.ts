export default class Vector2 {
    x:number = 0;
    y:number = 0;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public translateV(vector2: Vector2): Vector2 {
        this.x += vector2.x;
        this.y += vector2.y;
        
        return this;
    }

    public translate(x: number, y: number): Vector2 {
        this.x += x;
        this.y += y;
        
        return this;
    }

    public translateX(x: number): Vector2 {
        this.x += x;
        
        return this;
    }

    public translateY(y: number): Vector2 {
        this.y += y;
        
        return this;
    }
}