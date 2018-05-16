let findMaxSumNonAdjacent = arr => {
  if (arr.length < 1) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }

  const results = [];
  results.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    result.push(Math.max(a[i], results[i - 1]));
    if (i - 2 >= 0) {
      result[i] = Math.max(result[i], a[i] + result[i - 2]);
    }
  }

  return results[arr.length -1];
}
