function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word
  let splitString = word.split("");
  console.log(splitString);
  //reverse new array
  let reverseString = splitString.reverse();
  console.log(reverseString);
  //turn into a string
  let reverseWord = reverseString.join("");
  //test Palindrome
  //this works but i have to change my returns to true or false to pass the test
  if (reverseWord === word) {
    return true;
  } else {
    return false
  };
}

/* 
  Add your pseudocode here

  step 1: copy the string into another variable
  step 2: flip the new variable
    cont: turn new string into array
    cont: reverse the array
    cont: convert back into string
  step 3: if statment for whether new variable matches the original string
  step 4: true or false for palindrone condition
*/

/*
  Add written explanation of your solution here

  My code takes the word or string passed into the function and creates a new array.
  I then take this new array and flip or reverse the array.
  then I take this and join the array into one string.
  Now that i have two strings i can test them in an if stament to check for a palindrome condition.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
