
const checkbox = document.getElementById('check-box');
const basicPrice = document.getElementsByClassName('price')[0];//Can not have .innerHTML, innerText, or textContent. Just the index[0] of class
const proPrice = document.getElementsByClassName('price')[1];
const masterPrice = document.getElementsByClassName('price')[2];

console.log(basicPrice, proPrice, masterPrice);

checkbox.addEventListener('change', (e) => {

   if (e.target.checked) { 
      basicPrice.textContent = "19.99";
      proPrice.textContent = "24.99";
      masterPrice.textContent = "39.99";
   } else {
      basicPrice.innerText = "199.99";
      proPrice.innerText = "249.99";
      masterPrice.innerText = "399.99";
   }

});
// let x = 10;
// function monthly(a, b) {
//    return ((a * 100) / b).toFixed(2);
// }
// let result = monthly(basicPrice, x);
// console.log(basicPrice);
// console.log(result);
