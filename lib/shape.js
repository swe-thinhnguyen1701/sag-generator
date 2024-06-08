class Shape {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    getColor() { return this.color; }

    getText() { return this.text; }

    render() { throw new Error("You must implement the method render"); }
}