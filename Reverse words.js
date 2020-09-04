{/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/}

function reverseWords(str) {
  let tempArray = [];
  let newWords = str.split(' ');
  console.log(newWords);
  for(let i = 0; i < newWords.length; i++){
        tempArray.push(newWords[i].split('').reverse().join(''));   

 }
  return tempArray.join(' ');
}
