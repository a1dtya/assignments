/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();

    let size = str.length;
    let count = 0;
    if(size == 0){
      return 0;
    }
    for( let i = 0; i< size; i++){
      if( str[i] == 'a' ||  str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' )
      {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;