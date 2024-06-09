const Shape = require("./Shape.js");

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    render() {
        return `<circle cx = "150" cy = "100" r = "80" fill="${this.getColor()}" />`
    }
}

module.exports = Circle;