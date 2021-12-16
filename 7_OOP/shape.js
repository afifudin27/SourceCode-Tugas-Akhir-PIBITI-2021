class Shape{
    area(){
        return this.__area;
    }

    circumference(){
        return this.__circumfrence;
    }
}

class Rectangle extends Shape{
    constructor(lenght, wide){
        super();
        this.lenght = lenght;
        this.wide = wide;
        this.__area = this.lenght * this.wide;
        this.__circumfrence = 2 * (this.lenght + this.wide);
    }
}

class Triangle extends Shape{
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
        this.__area = this.base * this.height/2;
        this.__circumfrence = this.base + 2*Math.sqrt(Math.floor(this.base**2/2) * this.height**2);
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
        this.__area = Math.PI * Math.pow(this.radius, 2);
        this.__circumfrence = Math.PI * (this.radius*2);
    }
}

module.exports = {Rectangle, Triangle, Circle}
