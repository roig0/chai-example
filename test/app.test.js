const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function(){
    it('1. The side length of the Triangle', function(done){
        let t1 = new Triangle(2,2,2);
        expect(t1.getSideLength()).to.equal(150);
        done();
    });

    it('2. If the Triangle is Equilaterale', function(done) {
        let t2 = new Triangle(2,2,2);
        expect(t2.isEquilaterale(2,2,2)).to.equal(true)
        done();
    })

    it('3. If the Triangle is Isoscele', function(done) {
        let t3 = new Triangle (3,3,4);
        expect(t3.isIsoscele(3,3,4)).to.equal(true)
        done();
    })

    it('4. If the Trangle is Rectangle', function(done) {
        let t4 = new Trangle (8, 10, 6);
        expect(t4.isRectangle()).to.equal(true)
        done();
    })
});