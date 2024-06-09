const inquirer = require("inquirer");
const colors = require("colors");
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
 * getText() prompt user to enter text with no more than 3 characters.
 * The system will repeatedly prompt the user until a valid input is received.
 * 
 * @returns {Promise<string>} The user's valid text input;
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

        textVal = res.text.toUpperCase().trim();
        if (textVal.length > 3) {
            console.log(`${colors.red(textVal)} has more than 3 characters!\n`);
        } else if(textVal == 0){
            console.log(`${colors.red("TEXT required")}\n`);
        }
        else
            isValid = true;
    }

    return textVal;
}

/**
 * getColor() prompt user to enter text with no more than 3 characters.
 * The system will repeatedly prompt the user until a valid input is received.
 * 
 * @returns {Promise<string>} The user's valid color input
 */
const getColor = async () => {
    let isValid = false;
    let colorVal = "";
    while (!isValid) {
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "color",
                message: "Enter a color keyword (OR a hexadecimal number): "
            }
        ]);

        colorVal = res.color.toLowerCase().trim();
        if(colorVal.length == 0){
            console.log(`${colors.red("COLOR required")}\n`);
        }
        else if (!isColorValid(colorVal)) {
            console.log(`${colors.red(colorVal)} is INVALID, please check your input\n`);
        } else
            isValid = true;
    }

    return colorVal;
};

/**
 * isColorValid() check if the provided color is valid
 * the function validates both hexadecimal color codes and CSS color keywords.
 * 
 * @param {string} color - The color value to validate. this can be a hexadecimal
 *                          color or a CSS color keyword.
 * @returns {boolean} - true if the color is valid, otherwise false;
 */
const isColorValid = (color) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if (color.charAt(0) === "#") return hexColorRegex.test(color);
    return COLOR_LIST.includes(color);
}
/**
 * Prompts the user to select their favorite shape from a list of choices.
 * 
 * @returns {Promise<string>} - A promise that resolves to the selected 
 *                              shape ("Circle", "Triangle", or "Square").
 */
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

/**
 * Writes the SVG file based on the provided data.
 * 
 * @param {Object} data - The data object containing information for generating the SVG file.
 */
const writeFile = (data) => {
    const exportSVG = new ExportSVG(data);
    exportSVG.writeSVGFile();
}

/**
 * Creates and returns a shape object based on the provided shape type and color.
 * 
 * @param {string} shapeType - The type of shape ("Circle", "Triangle", or "Square").
 * @param {string} shapeColor - The color of the shape.
 * @returns {Shape} - The instantiated shape object.
 */
const getShapeObject = (shapeType, shapeColor) => {
    if (shapeType === "Circle") return new Circle(shapeColor);
    if (shapeType === "Triangle") return new Triangle(shapeColor);
    return new Square(shapeColor);
}

/**
 * Orchestrates the process of getting user input, creating a shape object, and writing the SVG file.
 */
const driver = async () => {
    try {
        // Get user input for text and text color
        userInput.text = await getText();
        userInput.textColor = await getColor();

        // Get shape type and shape color
        const shapeType = await getShape();
        const shapeColor = await getColor();

        // Create shape object based on shape type and color
        userInput.shape = getShapeObject(shapeType, shapeColor);

        // write SVG file
        writeFile(userInput);
    }catch(err) {
        console.log("ERROR occurs\n", err);
    }
}

driver();