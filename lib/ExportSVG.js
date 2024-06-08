const fs = require("fs");

const SHAPE_TEXT = [
    // cx = "150" cy = "100"
    // x="150" y="145" font-size="60
    {
        x: 150,
        y: 100,
        r: 80
    },
    {
        x: 150,
        y: 145,
    },
    {
        
    }
]

// data{ text, textColor, Shape}
class ExportSVG extends fs {

    constructor(data) {
        this.data = data;
    }

    exportSVGFile () {

    }
}