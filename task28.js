
/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

//const url = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';

const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr) {
  return arr.filter(el => el.group === 'animal bug' || el.group === 'plant flower')
}

fetch('./emoji.json')
  .then(response => response.json())
  .then(allData => clearTheGarden(allData))
  .then((data) => {
    // data = clearTheGarden(data)
    data.forEach(emoji => {
      flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
    });
  })
  .catch(err => console.log(err));



