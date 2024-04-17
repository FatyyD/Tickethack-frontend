// let depart = document.querySelector('#search-departure');
// let arrivee = document.querySelector('#search-arrival');
// let date = document.querySelector('#search-date');

document.querySelector('#search').addEventListener('click', function(){
// console.log(depart.value);
// console.log(arrivee.value);
// console.log(date.value);
//     const Trip = [
//         {
//         departure: depart,
//         arrival: arrivee,
//         date: date
//     }
//     ];
let depart = document.querySelector('#search-departure').value;
let arrivee = document.querySelector('#search-arrival');
let date = document.querySelector('#search-date');

fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then( data => {
//  for(let i = 0; i < data.length; i++) {
    if(depart === data.departure)
        console.log(data);
    else
        console.log("plp");
 
//    document.querySelector('#content-right').innerHTML += 
//    ` <div class="cityContainer">
//       <p class="name">${data.departure}</p>
//     </div> ` 
//  }
 });

// console.log(depart)


//  fetch('http://localhost300/trips', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({trip}),
//  }).then(response => response.json())
// fetch('http://localhost:3000/trips')
//  .then(response => response.json())
//     .then(data => {
//         for(let i = 0; i < data.length; i++) {
//         if (data.departure) {
//            console.log(data.departure);
//           }
//         }
    })
