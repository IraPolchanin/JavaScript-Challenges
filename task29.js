/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game');
// const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr) {
  return arr.filter(el => el.group === "food fruit")
}

//   SOLUTUIN 1

// function getRandomFruits(arr) {
//   const fruitArr = []
//   for (let i = 0; i < 9; i++) {
//     let randomInd = Math.floor(Math.random() * arr.length)
//     fruitArr.push(arr[randomInd])
//   }
//   return fruitArr
// }
//   SOLUTUIN 2
function getRandomFruits(arr) {
  return arr.sort(() => Math.random() - 0.5).slice(0,9)
}

// write your fetch request here 

fetch('./emoji.json')
  .then(resp => resp.json())
  .then(allEmoji => makeFruitArray(allEmoji))
  .then(allFruit => getRandomFruits(allFruit))
  .then(data => {
    data.forEach(emoji => {
      slotMachine.innerHTML += `<li>${emoji.htmlCode}</li>`;
    });
  })
  .catch(err => console.log(err));