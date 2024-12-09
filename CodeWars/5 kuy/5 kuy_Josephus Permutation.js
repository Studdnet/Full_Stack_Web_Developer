// https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript?

function josephus(items, k) {
  if (items.length <= 1 || k == 1) {
    return items;
  }

  let arr = [...items];
  let newArr = [];
  let next = 0;

  while (arr.length > 0) {
    next = (next + k - 1) % arr.length;
    newArr.push(arr.splice(next, 1)[0]);
  }
  return newArr;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
