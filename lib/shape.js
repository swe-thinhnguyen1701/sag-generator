class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() { return this.color; }

    render() { throw new Error("You must implement the method render"); }
}

module.exports = Shape;