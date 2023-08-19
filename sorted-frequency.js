function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let idxOfleftNum = null;

  while (leftIdx < rightIdx) {
    // finds first index of val
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] < val && arr[middleIdx + 1] < val) {
      // checks if left of first val
      leftIdx = middleIdx + 1;
    } else if (leftIdx === 0 && arr[leftIdx] === val) {
      // checks if arr starts with val and sends to next loop
      idxOfleftNum = leftIdx;
      rightIdx = arr.length - 1;
      break;
    } else if (
      (arr[middleIdx] > val && arr[middleIdx + 1] > val) ||
      (arr[middleIdx] === val && arr[middleIdx + 1] === val) ||
      (arr[middleIdx] === val && arr[middleIdx + 1] < val)
    ) {
      // checks if right of first index of val
      rightIdx = middleIdx;
    } else {
      // found index of first left val and sends to next loop
      idxOfleftNum = leftIdx + 1;
      rightIdx = arr.length - 1;
      break;
    }
  }
  while (leftIdx < rightIdx) {
    // finds last index of val
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (
      (arr[middleIdx] < val && arr[middleIdx + 1] < val) ||
      (arr[middleIdx] === val && arr[middleIdx + 1] === val)
    ) {
      // checks if left of last index of val
      leftIdx = middleIdx + 1;
    } else if (arr[middleIdx] > val && arr[middleIdx + 1] > val) {
      // checks if right of last index of val
      rightIdx = middleIdx;
    } else if (rightIdx === arr.length - 1 && arr[rightIdx] === val) {
      // checks if last val is end of arr and returns
      return rightIdx - idxOfleftNum;
    } else {
      // found index and returns frequency
      return rightIdx - 1 - idxOfleftNum;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
