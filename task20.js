const shoppingCart = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
    onSale: false
  },
  {
    item: "🍬",
    price: .89,
    type: "sweet",
    onSale: false
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
    onSale: false
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
    onSale: true
  },
]


/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

// const savory = shoppingCart.filter(el => el.type === 'savory')
// console.log(savory)

function totalSavory(arr) {
  return arr
    .reduce((acc, curr) => curr.type === 'savory'
      ? acc + curr.price
      : acc
      , 0)
}

console.log(totalSavory(shoppingCart));

