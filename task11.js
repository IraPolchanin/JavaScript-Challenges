/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  const preparedStr = str.toLowerCase().split(' ').join('');
  
       // solution1
  const result = {};
  for (let key of preparedStr) {
    if (!result[key]) {
      result[key] = 1
    } else {
      result[key]++
    }
  }
  return result
  
        // solution2
  // return [...preparedStr].reduce((key, value) => {
  //   key[value] = (key[value] || 0) + 1
  //   return key
  // }, {})
}

console.log(countChars("Peggy porth"));