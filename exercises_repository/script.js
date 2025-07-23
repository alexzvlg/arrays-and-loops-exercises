// 06 - Repeat String
function repeatString(string, num){
    let stringHold = '';
    for(let i = 0; i < num; i++){
        stringHold = stringHold + string;
    }
    return stringHold;
}
console.log(repeatString('hey', 3));

console.log('');

// 07 - Reverse String
function reverseString(string){
    return string.split('').reverse().join('');
}
console.log(reverseString('hello there'));

console.log('');

// 08 - Remove From Array
function removeFromArray(array, ...nums){ // ... the three points are to make "nums" an iterable array of items. 
    
    // New array where where tu push the "array" numbers that will not be deleted.
    arrayRemoved = [];

    // This array method will push the selected numbers in "array" to the "arrayRemoved".
    // ForEach will itereate for every item in "array" looking for the items to push to "arrayRemoved".
    // "item" is the item that is going to be pushed if it is NOT include ("!nums") inside "...nums" array. Only the items in "array" that are not in "...nums" will be pushed to "arrayRemoved".
    array.forEach(item => {
        // If "item" is not include in "...nums", then...
        if(!nums.includes(item)){
            // ... it will be pushed to "arrayRemoved".
            arrayRemoved.push(item);
        }
    })
    return arrayRemoved;
    // This will return [1, 4] because those numbers working as "item" were not inside the "...nums" array, being pushed to "arrayRemoved", 'removing' the ones inside "...nums" (3 and 2).

}
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

console.log('');

// 09 - Sum All
function sumAll(numOne, numTwo){
    let arrayOfNum = [numOne, numTwo];

    arrayOfNum.reduce((total, number) => {
        total = numOne + numTwo;
    });

    return arrayOfNum;
}
console.log(sumAll(1, 4));