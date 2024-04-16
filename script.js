document.querySelector('#btn').addEventListener('click', function(){
    const user = {
        departure: document.querySelector('#search-departure').value,
        arrival: document.querySelector('#search-arrival').value,
        date: document.querySelector('#search-date').value,
       };

 fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user}),
 }).then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('.html');
          }
    })
})