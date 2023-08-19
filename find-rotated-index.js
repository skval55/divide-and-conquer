function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let rotatedIdx;

  while (leftIdx <= rightIdx) {
    // find the rotated index
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[middleIdx] < arr[middleIdx + 1] && arr[middleIdx] < arr[0]) {
      // check if not rotated index and if rotated index is on the left side
      rightIdx = middleIdx;
    } else if (arr[middleIdx] < arr[middleIdx + 1] && arr[middleIdx] > arr[0]) {
      // check if not rotated index and if rotated index is on the right side
      leftIdx = middleIdx;
    } else if (arr[middleIdx] > arr[middleIdx + 1]) {
      // is the rotated index
      rotatedIdx = middleIdx + 1;
      // check if first part of arr contains val
      if (arr[0] > val) {
        rightIdx = arr.length - 1;
        leftIdx = rotatedIdx;
      } else {
        // second part of arr contains val
        rightIdx = rotatedIdx;
        leftIdx = 0;
      }
      break;
    }
    console.log(leftIdx, rightIdx);
  }
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
