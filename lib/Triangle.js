class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    // <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">SVG</text>
    render() {
        return `<polygon points="150,20 50,180 250,180" style="${this.getColor()}" />`
    }
}