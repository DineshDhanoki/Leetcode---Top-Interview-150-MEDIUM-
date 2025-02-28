function insert(intervals, newInterval) {
  const result = [];
  let i = 0;

  /* Adding all the intervals that end before new intervals starts  */
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  /*     Merging overlapping intervals */
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  /*     Add remaining intervals */
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
}
