function repeatString(string, num) {
    let newString = "";

    for (let i = 1; i <= num; i++) {
       newString += string;
    }


    return console.log(newString);
}

repeatString('Hello', 22);
