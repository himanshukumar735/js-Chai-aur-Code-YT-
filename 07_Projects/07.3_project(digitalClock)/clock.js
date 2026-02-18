const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

let date = new Date();
console.log(date.toLocaleTimeString());   //Whenever we refresh the page, we will get the updated time

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);
