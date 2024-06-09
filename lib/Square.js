const Shape = require("./Shape.js");

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    /**
     * @override
     * @returns {string} SVG representation of a square
     */
    render() {
        return `<polygon points="50,20 50,180 250,180 250,20" fill="${this.getColor()}" />`
    }
}

module.exports = Square;