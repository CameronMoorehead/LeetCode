// Determine whether an integer is a palindrome.
// Do this without extra space.

// Number => Boolean
// 101 => true
// 0 => true
// 555 => true
// 551 => false

const isPalindrome = x => {
  // const num = Math.abs(x);
  const stringifyNumber = x.toString();
  const numberArray = stringifyNumber.split('');
  if (numberArray.length === 1) {
    return true;
  }
  console.log(numberArray);
  let i = 0;
  let j = numberArray.length -1;
  while (i < j) {
    if (numberArray[i] !== numberArray[j]) {
      console.log(numberArray[i], numberArray[j]);
      return false;
    }
    i++;
    j--;
  }
  return true;
};
