import Vector2 from "../vector2";

export default class Window {
    canvas = {} as HTMLCanvasElement;
    context = {} as CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = this.canvas.getContext('2d');
        if(!context) throw ('\x1b[31m[ERROR] Context not found... Canvas exists?');
        this.context = context;

        this.init()
    }

    private init() {
        const canvas = this.canvas;
        
        this.fixCanvasSize(canvas);
        window.addEventListener('resize', () => this.fixCanvasSize(canvas), true);
    }

    private fixCanvasSize(canvas) {
        canvas.width  = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    update() {
        this.context.setTransform(1,0,0,1,0,0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    
    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }

    public fillRect(position: Vector2, width: number, height: number, color: string) {
        this.context.fillStyle = color;
        this.context.fillRect(position.x, position.y, width, height);
        return this.context;
    }

    public drawImage(image: HTMLImageElement, position: Vector2, width: number, height: number) {
        this.context.drawImage(image, position.x, position.y, width, height);
    }
}