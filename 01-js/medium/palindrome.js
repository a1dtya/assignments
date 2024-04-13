/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]/g, "").toLowerCase();
  let size = str.length;
  let strRev = str;
  if( size == 0 || size == 1){
    return true;
  }
  for( let i = 0; i<Math.floor(size/2); i++)
    if(str[i]!=strRev[size-i-1]){
      return false;
    }
  return true;
}

module.exports = isPalindrome;
