const Circle = require("../lib/Circle.js");
const Triangle = require("../lib/Triangle.js");
const Square = require("../lib/Square.js");

const triangle = new Triangle("darkgreen");

describe("Circle object", () => {
    let circle;

    beforeEach(() => {
        circle = new Circle("tomato");
    });

    it("should render the circle wth the correct properties", () => {
        expect(circle.render()).toEqual(`<circle cx = "150" cy = "100" r = "80" fill="tomato" />`);
    });

    it("should render the circle with a new color", () => {
        circle.setColor("gold");
        expect(circle.render()).toEqual(`<circle cx = "150" cy = "100" r = "80" fill="gold" />`);
    });
});

describe("Triangle object", () => {
    let triangle;

    beforeEach(() => {
        triangle = new Triangle("tomato");
    });

    it("should render the triangle wth the correct properties", () => {
        expect(triangle.render()).toEqual(`<polygon points="150,20 50,180 250,180" fill="tomato" />`);
    });
    
    it("should render the triangle with a new color", () => {
        triangle.setColor("pink");
        expect(triangle.render()).toEqual(`<polygon points="150,20 50,180 250,180" fill="pink" />`);
    });
});

describe("Square object", () => {
    let square;

    beforeEach(() => {
        square = new Square("darkslategrey");
    });

    it("should render the square wth the correct properties", () => {
        expect(square.render()).toEqual(`<polygon points="50,20 50,180 250,180 250,20" fill="darkslategrey" />`);
    });
    
    it("should render the square with a new color", () => {
        square.setColor("darkred");
        expect(square.render()).toEqual(`<polygon points="50,20 50,180 250,180 250,20" fill="darkred" />`);
    });
});