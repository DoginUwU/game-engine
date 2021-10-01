export default class Scale {
    width = 0.0;
    height = 0.0;

    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }

    public scaleV(scale: Scale): Scale {
        this.width += scale.width;
        this.height += scale.height;
        
        return this;
    }

    public scale(width: number, height: number): Scale {
        this.width = width;
        this.height = height;
        
        return this;
    }

    public scaleW(width: number): Scale {
        this.width = width;
        
        return this;
    }

    public scaleH(height: number): Scale {
        this.height = height;
        
        return this;
    }
}