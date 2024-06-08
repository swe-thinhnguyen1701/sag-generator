class Square extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    // <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>
    render() {
        return `<polygon points="50,20 50,180 250,180 250,20" style="${super.getColor()}" />`
    }
}