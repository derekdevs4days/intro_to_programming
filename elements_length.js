let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lenArr = arr.map(el => el.length).filter(el => el % 2 !== 0)
  return lenArr;
}

console.log(oddLengths(arr))