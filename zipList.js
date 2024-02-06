function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList([1, 2, 3], ['one', 'two', 'three']));
console.log(zipListTheSimpleWay([1, 2, 3], ['one', 'two', 'three']));
