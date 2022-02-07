const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];

function zipList(list1, list2) {
  const arr = [];
  let arrCount = 0;
  let i = 0;
  while (i < list1.length) {
    arr[arrCount] = list1[i];
    arr[arrCount + 1] = list2[i];
    arrCount += 2;
    i++;
  }
  return arr;
}

function zipListTheSimpleWay(list1, list2) {
  const zip = _.zip(list1, list2);
  return _.flatten(zip);
}

console.log(zipList(l1, l2));
console.log(zipListTheSimpleWay(l1, l2));
