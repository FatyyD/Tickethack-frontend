let depart = document.querySelector('#search-departure').value;
let arrivee = document.querySelector('#search-arrival').value;
let date = document.querySelector('#search-date').value

document.querySelector('#search').addEventListener('click', function(){
    const Trip = [
        {
        departure: depart,
        arrival: arrivee,
        date: date
    }
    ];
       fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then(data => {
    for(let i = 0; i < data.length; i++) {
    console.log(data[i].departure);

   document.querySelector('#content-right').innerHTML += 
   ` <div class="cityContainer">
      <p class="name">${data.departure}</p>
    </div> ` 
    }
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
//     })

})