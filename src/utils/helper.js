export function mergeIntervals(intervals) {
  const result = [];
  const len = intervals.length;
  if (len === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < len) {
    const currentLeft = intervals[i][0];
    let currentRight = intervals[i][1];
    while (i < len - 1 && currentRight >= intervals[i + 1][0]) {
      i++;
      currentRight = Math.max(intervals[i][1], currentRight);
    }
    result.push([currentLeft, currentRight]);
    i++;
  }
  return result;
}

export const quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};
