class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.getArea = function(w,h){
    return this.h * this.w
}

class Square extends Rectangle {
    constructor(s){
        console.log(s)
        super(s, s)
    }

}

const square = new Square(3, 4)
console.log(square.getArea())

