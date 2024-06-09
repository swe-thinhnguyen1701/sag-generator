const Shape = require("./Shape.js");

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    
    /**
     * @override
     * @returns {string} SVG representation of a circle
     */
    render() {
        return `<circle cx = "150" cy = "100" r = "80" fill="${this.getColor()}" />`
    }
}

module.exports = Circle;