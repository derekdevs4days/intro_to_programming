function getNums(prompt){
  let rlSync = require('readline-sync');
  let num = Number(rlSync.question(prompt));
  return num;
}

let firstNum = getNums('Enter the first number: ');
let secondNum = getNums('Enter the second number: ');
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)