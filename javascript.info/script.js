// 1. Translate border-left-width to borderLeftWidth.
function camelize(word) {
    return word.split("-").map((wrd) => wrd.charAt(0).toUpperCase() + wrd.slice(1)).join("");
}
console.log("Translate solution:");
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

console.log("");

// 2. Filter range.
let arr = [5, 3, 8, 1,];
function filterRange(arr, a, b) {
    return arr.filter((num) => {
        if(num >= a && num <= b){
            return num;
        }
    })
}
let filtered = filterRange(arr, 1, 4);
console.log("Filter range solution:");
console.log(filtered);
console.log(arr);

console.log("");

// 3. Filter range "in place".
let arrTwo = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        } 
    }
}
console.log("Filter range 'in place' solution:");
filterRangeInPlace(arrTwo, 1, 4);
console.log(arrTwo);

console.log("");

// 4. Sort in decreasing order
let arrThree = [5, 2, 1, -10, 8];
arrThree.sort().reverse();
console.log("Sort in decreasing order solution:");
console.log(arrThree);

console.log("");

// 5. Copy and sort array
let arrFour = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    return arr.slice(0).sort()
}
let sorted = copySorted(arrFour);
console.log("Copy and sort array solution:");
console.log(`Sorted: ${sorted}`);
console.log(`Not sorted: ${arrFour}`);

console.log("");

// 6. Shuffle an array
let arrFive = [1, 2, 3];
function shuffle(arr) {
   return arr.sort(() => {
    return Math.random() - 0.5;
   });
}
console.log("Shuffle an array solution:");
console.log(shuffle(arrFive));
console.log(shuffle(arrFive));
console.log(shuffle(arrFive));

console.log("");

// 7. Filter unique array members
function unique(arr) {
    return arr.filter((word, index) => {
        return arr.indexOf(word) === index;
    })
}
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
console.log("Filter unique array members solution:");
console.log(unique(strings));