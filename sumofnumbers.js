function sumFor(list) {
  let sum = 0;
  for (let i of list) {
       sum += i;
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {return memo + num})
}

let list = [1, 8, 9, 19];
console.log(list);
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
