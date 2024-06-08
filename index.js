const inquirer = require("inquirer");
const fs = require("fs");

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
    textColor: ""
}

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

const run = async () => {
    const text = await getText();
    const textColor = await getColor();
    console.log(text);
    console.log(textColor);
}

run();