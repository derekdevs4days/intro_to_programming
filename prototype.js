let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj)

console.log(`Original ${myProtoObj}`)
console.log(`Prototype ${newObj}`)