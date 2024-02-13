/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5
}

// function findTheWinner(obj) {
//   let maxValue = Math.max(...Object.values(obj));
//   let maxKey = Object.keys(obj).find(key => obj[key] === maxValue);
//   return `The winner is ${maxKey} with ${maxValue} votes!`
// }

function findTheWinner(obj) {
  let resultVal = 0;
  let resultKey = '';

  for (let key in obj) {
    if (obj[key] > resultVal) {
      resultVal = obj[key];
      resultKey = key;
    }
  }
  return `The winner is ${resultKey} with ${resultVal} votes!`
}

console.log(findTheWinner(gameNightFood));
console.log(findTheWinner({"🐈 cats": 19, "🐕 dogs": 17}));