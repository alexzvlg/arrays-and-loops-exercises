// 1. Perform an operation only on the even numbers.
// 2. Transform those numbers by multiplying them by 3.
// 3. Add the result up from the previous transformation.

const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function sumOfTripledEvens(array) {
  
    return array.map((num) => num * 3).filter((numTwo) => numTwo % 2 == 0).reduce((total, current) => {
        return total + current;
    });
    
}
console.log(`My solution result: ${sumOfTripledEvens(arrayOfNums)}`);


// Example used on TOP page using a for loop
function sumOfTripledEvens2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
console.log(`Example on TOP page result: ${sumOfTripledEvens2(arrayOfNums)}`)