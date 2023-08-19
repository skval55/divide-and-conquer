function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the rotated index
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[middleIdx] < arr[middleIdx + 1] && arr[middleIdx] < arr[0]) {
      // check if not rotated index and if rotated index is on the left side
      rightIdx = middleIdx;
    } else if (leftIdx === middleIdx) {
      // check if arr rotation starts at 0
      return 0;
    } else if (arr[middleIdx] < arr[middleIdx + 1] && arr[middleIdx] > arr[0]) {
      // check if not rotated index and if rotated index is on the right side
      leftIdx = middleIdx;
    } else if (arr[middleIdx] > arr[middleIdx + 1]) {
      // is the rotated index
      return middleIdx + 1;
    }
  }
}

module.exports = findRotationCount;
