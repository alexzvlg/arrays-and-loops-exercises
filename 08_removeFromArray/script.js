// First solution:
function removeFromArray(values, ...index) {
    
    let newIndex = [];
    values.forEach((value) => {
        if (!index.includes(value)) {
            newIndex.push(value);
        }
    })

    return console.log(newIndex);
}
removeFromArray([1, 2, 3, 4, 5], 1, 3, 5);

// Second solution:
function removeFromArrayTwo(valuesTwo, ...indexTwo) {
    return console.log(valuesTwo.filter(valueTwo => !indexTwo.includes(valueTwo)));
}
removeFromArrayTwo([1, 2, 3, 4, 5], 1, 5);