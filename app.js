
function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
let array = [1, 2, 4, 6, 3, 7, 8];
let uniqueArray = [...new Set(array)];
let missingNumber = findMissingNumber(uniqueArray);
console.log(`Missing number: ${missingNumber}`);





function limitNumberWithinRange(num, min, max){
    let MIN = min ?? 1;
    let MAX = max ?? 20;
    let parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
  }
  
  alert(
    limitNumberWithinRange(  prompt("enter a number")   )
  )

  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false