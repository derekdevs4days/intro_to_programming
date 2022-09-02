let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr){
  return arr.reduce((a,c) => {
    if(c.length % 2 !== 0){
      a.push(c.length)
    }
    return a

  }, [])

}
console.log(oddLengths(arr))