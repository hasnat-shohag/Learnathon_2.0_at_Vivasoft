const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    console.log("ok");
    const apiUrl = fetch('https://api.openweathermap.org/data/2.5/weather?q=mymensingh&appid=e56716788625688f1c86322b576b8a57&units=metric');
    
    apiUrl
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data.main);
    })
    .catch((err)=>{
        console.error(err);  
    })
});