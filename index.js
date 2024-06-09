const inquirer = require("inquirer");
const ExportSVG = require("./lib/ExportSVG.js");
const Circle = require("./lib/Circle.js");
const Square = require("./lib/Square.js");
const Triangle = require("./lib/Triangle.js");

// VALID color keywords from CSS
const COLOR_LIST = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet",
    "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral",
    "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
    "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki",
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred",
    "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
    "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green",
    "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory",
    "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue",
    "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime",
    "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
    "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace",
    "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod",
    "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
    "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell",
    "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise",
    "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];
const userInput = {
    text: "",
    textColor: "",
    shape: null
}

/**
 * getText() prompt user to enter their text with no more than 3 characters.
 * The system will keep asking users until they recieve correct answer with 
 * no morethan 3 characters
 * 
 * @returns user text input
 */
const getText = async () => {
    let textVal = "";
    let isValid = false;
    while (!isValid) {
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "Enter text no more than 3 characters: "
            }
        ]);

        textVal = res.text;
        if (textVal.length > 3) {
            console.log(`Your input (${textVal}) has more than 3 characters`);
        }else
            isValid = true;
    }

    return textVal;
}

/**
 * 
 * @returns 
 */
const getColor = async () => {
    let isValid = false;
    let colorVal = "";
    while(!isValid){
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "color",
                message: "Enter a color keyword (OR a hexadecimal number): "
            }
        ]);

        colorVal = res.color;
        if(!isColorValid(colorVal)){
            console.log("COLOR is invalid, please check your input");
        }else
            isValid = true;
    }

    return colorVal;
};

const isColorValid = (color) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if(color.charAt(0) === "#") return hexColorRegex.test(color);
    return COLOR_LIST.includes(color);
}

const getShape = async () => {
    const res = await inquirer.prompt([
        {
            type: "list",
            name: "shape",
            choices: ["Circle", "Triangle", "Square"],
            message: "Select your favorite shape"
        }
    ]);

    return res.shape;
}

const writeFile = (data) => {
    const exportSVG = new ExportSVG(data);
    exportSVG.writeSVGFile();
}

const getShapeObject = (shapeType, shapeColor) => {
    if(shapeType === "Circle") return new Circle(shapeColor);
    if(shapeType === "Triangle") return new Triangle(shapeColor);
    return new Square(shapeColor);
}

const driver = async () => {
    userInput.text = await getText();
    userInput.textColor = await getColor();
    const shapeType = await getShape();
    const shapeColor = await getColor();
    userInput.shape = getShapeObject(shapeType, shapeColor);
    writeFile(userInput);
}

driver();