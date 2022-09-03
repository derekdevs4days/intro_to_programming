let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex){
 return arr.filter(x => regex.test(x))
}
console.log(allMatches(words, /lab/))