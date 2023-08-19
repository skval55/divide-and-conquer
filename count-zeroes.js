function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let leftMidIdx = Math.floor((leftIdx + rightIdx) / 2);
    let rigthMidIdx = leftMidIdx + 1;

    if (arr[leftMidIdx] === 1 && arr[rigthMidIdx] === 1) {
      // checks if are 1s(left of 0s)
      leftIdx = rigthMidIdx;
    } else if (rightIdx === 0) {
      // checks if all 0s
      return arr.length;
    } else if (arr[leftMidIdx] === 0 && arr[rigthMidIdx] === 0) {
      // checks if right of first 0
      rightIdx = leftMidIdx;
    } else {
      // returns num of 0s
      return arr.length - rigthMidIdx;
    }
  }
  return -1;
}

module.exports = countZeroes;
