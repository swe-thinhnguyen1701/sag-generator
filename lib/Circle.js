class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    render() {
        return `<circle cx = "150" cy = "100" r = "80" fill="${super.getColor}" />`
    }
}