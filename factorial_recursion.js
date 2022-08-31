function factorial(n) {
  if( n === 1){
    return 1;
  }
  return n * factorial(n - 1);
}

let argument = Number(prompt("What factorial did you want to find?"))
console.log(factorial(argument))
