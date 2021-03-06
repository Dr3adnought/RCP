/*
Our page will prompt the user for one of the colors of the rainbow and will show that color hex code in an alert
When the user enters a color that’s not one of rainbow colors, our page will alert them with a message (“Not a rainbow color”)
BONUS 1: Change the body background color to the chosen color
BONUS 2: When the user enters the word “random”, our page will generate them a random valid color hex code
*/

// 1. Prompt the user for a color of the rainbow
// 2. Show that colors HEX code, in an alert
// 3. 

function changeBackground(color) {
    document.body.style.background = color;
}

let inputColor = prompt("Please enter a color from the rainbow: ");

let color = inputColor.toLowerCase().trim();

let msg = "The HEX color code for that color is: "
let randomMessage = "Oh, you'd rather I choose... ok, here ya go => your random color is: "

changeBackground(color);

switch (color) {
    case 'red':
        alert(msg + "#F90000");
        break;
    case 'orange':
        alert(msg + "#F97D00");
        break;
    case 'yellow':
        alert(msg + "#F9F900");
        break;
    case 'green':
        alert(msg + "#00F900");
        break;
    case 'blue':
        alert(msg + "#0000FA");
        break;
    case 'indigo':
        alert(msg + "#4B0082");
        break;
    case 'violet':
        alert(msg + "#7F00FF")
        break;

    case 'random':
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        alert(randomMessage + randomColor.toUpperCase())
        break;


        // Generate a random valid color hex code
        // HEX colors, like all other computer colors, start with RGB
        // How does that break down?
        // - starts with a #
        // - 6 characters after the #
        // - each of the 6 char's are 0 1 2 3 4 5 6 7 8 9 A B C D E F
        // - three sets of 2 characters
        // - each RGB has a range of 0-255, so 256^3 or 16,777,216
        // - each letter is determined by hex divisor
        // - i.e 160 / 16 = 10, which is 9 on hex, so first number would be 9
        // - if was 165 / 16, would be 10.3125, so broken up to 10 (9) and .3125 (or 2).
        // - so first two numbers would be 92

    default:
        alert("Sorry, that is not a rainbow color!")
        break;         
}