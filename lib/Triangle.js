const Shape = require("./Shape.js");

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    /**
     * @override
     * @returns {string} SVG representation of a triangle
     */
    render() {
        return `<polygon points="150,20 50,180 250,180" fill="${this.getColor()}" />`
    }
}

module.exports = Triangle;