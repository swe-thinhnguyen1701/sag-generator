const fs = require("fs");

/**
 * [0]: text position in circle
 * [1]: text position in triangle
 * [2]: text position in square
 */
const SHAPE_TEXT_POSITIONS = [
    {
        x: 150,
        y: 125,
    },
    {
        x: 150,
        y: 145,
    },
    {
        x: 150,
        y: 120
    }
];
const DESTINATION = "./output/logo.svg";

// data{ text, textColor, Shape}
class ExportSVG {

    constructor(data) {
        this.data = data;
    }

    exportSVGFile() {
        const data = this.getSVGData();
        fs.writeFile(DESTINATION, data, err => {
            err ? console.log("ERROR!!!!\n\n", err) : console.log("Generated logo.svg");
        });
    }

    getShapeIndex(shape) {
        if (shape instanceof Circle) return 0;
        if (shape instanceof Triangle) return 1;
        if (shape instanceof Square) return 2;
        throw new Error("Unknown shape type");
    }

    getSVGData() {
        const shapeIdx = this.getShapeIndex(this.data.shape);
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n
                \t${data.shape.ender()}\n
                \t<text x="${SHAPE_TEXT_POSITIONS[shapeIdx].x}" y="${SHAPE_TEXT_POSITIONS[shapeIdx].y}" font-size="60" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>\n
            </svg>
        `
    }
}