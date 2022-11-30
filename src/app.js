class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

module.exports = {
    Cube:Cube
}

class Triangle{
    constructor(length_1, length_2, length_3) {
        this.length_1 = length_1;
        this.length_2 = length_2;
        this.length_3 = length_3;
    }

    getSideLength_1 () {
        return this.length_1;
    }

    getSideLength_2 () {
        return this.length_2;
    }

    getSideLength_3 () {
        return this.length_3;
    }

    isEquilaterale (length_1, length_2, length_3) {
        return (this.length_1 === this.length_2 === this.length_3);
    }

    isIsoscele (length_1, length_2, length_3) {
        return (this.length_1 === this.length_2) || (this.length_1 === this.length_3) || (this.length_2 === this.length_3)
    }

    isRectangle () {
        const length_1 = 8;
        const length_2 = 10;
        const length_3 = 6;
        const isRightTriangle = (a, b, c) => {

            const con1 = (a*a) === (b*b) + (c*c);
            const con2 = (b*b) === (a*a) + (c*c);
            const con3 = (c*c) === (a*a) + (b*b);
            return con1 || con2 || con3;
    };
console.log(isRightTriangle(length_1, length_2, length_3));

    }
    
}

module.exports = {
    Triangle:Triangle
}