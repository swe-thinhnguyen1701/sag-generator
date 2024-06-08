const fs = require("fs");

const SHAPE_TEXT = [
    // cx = "150" cy = "100"
    {
        x: 150,
        y: 100,
        r: 80
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