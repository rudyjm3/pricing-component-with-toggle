
const checkbox = document.getElementById('check-box');
let prices = document.querySelectorAll('.price');

console.log(checkbox);
console.log(prices);

checkbox.addEventListener('change', (e) => {

   if (e.target.checked) {
      alert ("Toggle is in checked position"); 
      console.log("Toggle is in checked position");
   } else {
      alert("Not checked");
      console.log("Not checked");
   }

});

