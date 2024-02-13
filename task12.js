/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce"
]

function removeDupesFromArray(arr) {
  // solution1
  // return [...new Set(arr)]

   // solution2

  // const removedDupObj = {};
  // return arr.filter(item => {
  //   if (!removedDupObj[item]) {
  //     removedDupObj[item] = true;
  //     return true
  //   }
  //   return false
  // })

  const removedDup = [];

  // solution3 
  // for (let item of arr) {
  //   if (!removedDup.includes(item)) {
  //     removedDup.push(item)
  //   }
  // }
  // return removedDup;

  // solution4
  // arr.forEach(item => !removedDup.includes(item) ? removedDup.push(item) : null)
  // return removedDup;


  return arr.filter(item => {
    if (!removedDup.includes(item)) {
      removedDup.push(item);
      return true
    }
    return false
  })


}
console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray(["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]));