const numberOverlapping = arr => {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }

  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  console.log(arr)

  let overlaps = 0;

  for (let i = 0; i < arr.length -1; i++) {
    if (isOverlapping(arr[i], arr[i + 1])) {
      console.log(arr[i], arr[i +1])
      overlaps++
      i++
    }
  }

  return overlaps;
}

const isOverlapping = (arr1, arr2) => {
  if (arr1[0] <= arr2[0]) {
    if (arr1[1] <= arr2[1]) {
      return true;
    }
  }
  return false;
};

const ex1 = [ [1,2], [2,3], [3,4], [1,3] ];
console.log(numberOverlapping(ex1))
