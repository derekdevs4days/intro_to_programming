function isNotANumber(num) {
  let strNum = String(num);
  if(strNum === "NaN"){
    return true;
  }else {
    return false
  }
}
console.log(isNotANumber(18))
console.log(isNotANumber(115))
console.log(isNotANumber(NaN))