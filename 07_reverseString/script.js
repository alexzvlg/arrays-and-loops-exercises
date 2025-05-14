// Method number 1:
function reverseString(string) {
    let newString = "";

    newString = string.split("").reverse().join("");

    return console.log(newString);
}
reverseString("Hello there!");



// Method number 2:
function reverseStringTWo(string) {
    let newString = "";

    for (let i = string.length; i >= 0; i--) {
        newString += string[i];
    }

    return console.log(newString);
}
reverseStringTWo("Hello, how are you?");