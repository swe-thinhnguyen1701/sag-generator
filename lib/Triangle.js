const Shape = require("./Shape.js");

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    // <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">SVG</text>
    render() {
        return `<polygon points="150,20 50,180 250,180" fill="${this.getColor()}" />`
    }
}

module.exports = Triangle;