const swap = (chars, i, j) => {
  let temp = chars[i];
  chars[i] = chars[j];
  chars[j] = temp;
}

const getAnagrams = input => {
  const counter = [];
  const anagrams = [];
  let chars = input.split('');
  let i = null;

  for (i = 0; i < chars.length; i++) {
    counter[i] = 0;
  }

  anagrams.push(input);
  i = 0;

  while (i < chars.length) {
    if (counter[i] < i) {
      swap(chars, i % 2 === 1 ? counter[i] : 0, i);
      counter[i]++;
      i = 0;
      anagrams.push(chars.join(''));
    } else {
      counter[i] = 0;
      i++
    }
  }

  return anagrams;
}

console.log(getAnagrams('abc'));
