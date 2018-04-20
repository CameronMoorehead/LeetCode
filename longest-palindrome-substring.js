const longestPalindrome = str => {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j <= str.length; j++) {
      let start = i;
      let end = j;
      let passedStr = str.slice(i, j);
      if (isPalindrome(passedStr)) {
        if (passedStr.length > longest.length) {
          longest = passedStr;
        }
      }
    }
  }
  return longest;
};

const isPalindrome = str => {
  let pivot = Math.floor(str.length /2);
  let i = 0;
  let j = str.length -1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome('aba'));
console.log(longestPalindrome('racecarbody'));
console.log(longestPalindrome('whatheeats'));
console.log(longestPalindrome('whatverhh'));
console.log(longestPalindrome('aaab'));

