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
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
//SOLUTION 1
  //return Math.round(arr.reduce((total, product) => total + product.price, 0)*100 )/ 100
  
  //SOLUTION 2
  return +(arr.reduce((total, product) => total + product.price, 0)).toFixed(2)
}

console.log(total(shoppingCart));