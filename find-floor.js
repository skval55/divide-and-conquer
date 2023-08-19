function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] < val && arr[middleIdx + 1] < val) {
      // checks if val is greater
      leftIdx = middleIdx + 1;
    } else if (arr[middleIdx] > val && arr[middleIdx + 1] > val) {
      // checks if val is less
      rightIdx = middleIdx - 1;
    } else {
      // returns found floor val
      return arr[middleIdx];
    }
  }
  return -1;
}

module.exports = findFloor;
