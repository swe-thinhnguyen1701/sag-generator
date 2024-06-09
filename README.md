# SVG generator
SVG gnerator will help you to create a simple shape, such as square, circle, and triangle, and it automatically exports a svg file once you finish all the prompting questions.

## Achievement
1. SVG generator can help user to create a custom svg file based on user's input.
2. SVG generator can handle any exceptions effectively, such as empty input, leading and trailing space input, or invalid input.

## Exceptions
```
WHEN user enters nothing.
THEN system will display an error message on console.
```
![empty input](./images/empty-text-exception.png)

```
WHEN user enters more than 3 characters.
THEN system will display user's input with an error message.
```
![input with more than 3 characters](./images/long-text-exception.png)

```
WHEN user add leading and/or trailing space in their input.
THEN system will trim and display error message if it has more than 3 characters. Otherwise, it will pass.
```
![leading and/or trailing space input](./images/spacing-text-exception.png)

```
WHEN user provides an invalid color keyword or hex color value
THEN system will display user's input with an error message.
```
![invalid color input](./images/color-exception.png)

## Tests
To run test, you can copy the following command

```
npm run test
```

![test cases](./images/shapes-test.png)

## Valid Input
```
WHEN all inputs are valid
THEN the system will display a success message on console.
```
![All inputs are valid](./images/valid-input.png)

## Demo
[![Play to watch](image.png)](https://youtu.be/xIYeMUGIZ2Y)