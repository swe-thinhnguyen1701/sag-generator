const fs = require("fs"); 
const colors = require("colors");
const Circle = require("./Circle.js");
const Square = require("./Square.js");
const Triangle = require("./Triangle.js");

const shapeObjArr = [Circle, Triangle, Square];
const DESTINATION = "./output/logo.svg";
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

// data{ text, textColor, shape}
class ExportSVG {

    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.shape = data.shape;
    }

    /**
     * writeSVGFile writes the generated SVG data to a file.
     * 
     * This method retrieves the SVG content using the "getSVGData" method and writes
     * it to a file at the specified destination. If an error occurs during the write
     * operation, it display an error to the console. Otherwise, it logs a success message.
     */
    writeSVGFile() {
        const data = this.getSVGData();
        fs.writeFile(DESTINATION, data, err => {
            err ? console.log(`${colors.red("ERROR!!!!")}\n\n`, err) : console.log(`${colors.green("Generated logo.svg")}`);
        });
    }

    /**
     * getShapeIndex will return an index value corresponding to the given shape type.
     * 
     * @param {Shape} shape - The shape object for which the index value is to be determined.
     * @throws {Error} if the shape is not Circle, Triangle, or Square.
     * @returns {number} index of the shape in the shapeObjArr array.
     */
    getShapeIndex(shape) {
        for(let i = 0; i < shapeObjArr.length; i++){
            if(shape instanceof shapeObjArr[i])
                return i;
        }
        throw new Error("Unknown shape type");
    }

    /**
     * getSVGData generates the SVG content as a string based on the shape and text properties.
     * 
     * @returns {string} the content of data as a string
     */
    getSVGData() {
        const shapeIdx = this.getShapeIndex(this.shape);
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n
                ${this.shape.render()}\n
                <text x="${SHAPE_TEXT_POSITIONS[shapeIdx].x}" y="${SHAPE_TEXT_POSITIONS[shapeIdx].y}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n
            </svg>
        `
    }
}

module.exports = ExportSVG;