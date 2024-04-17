document.querySelector('#search').addEventListener('click', function(){
    // console.log(depart.value);
    // console.log(arrivee.value);
    // console.log(date.value);
let depart = document.querySelector('#search-departure').value
let arrivee = document.querySelector('#search-arrival').value
let date = document.querySelector('#search-date');
        const Trip = [
            {
            departure: depart,
            arrival: arrivee,
            date: date
        }
        ];
        
    
    
    fetch(`http://localhost:3000/trips/${depart}/${arrivee}`)
     .then(response => response.json())
     .then( data => {
        // console.log(data);
        document.querySelector('#content-right').innerHTML = ''

     for(let i = 0; i < data.trips.length; i++) {
        // console.log("dd");
        // console.log(data.trips[i].departure);

        if(depart === data.trips[i].departure){
           document.querySelector('#content-right').innerHTML += 
        `<div id="listTrip">
            <p id="infoTrip">${data.trips[i].departure} > ${data.trips[i].arrival} € </p>
            <button class="bookButton">Book</button>
            </div>`
     }
            // console.log(data.trips[i].departure);
        else{
            console.log("plp");
      }
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
        })
    