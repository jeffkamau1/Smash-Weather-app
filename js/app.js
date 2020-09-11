var button = document.querySelector('.button ');
var inputValue = document.querySelector('.inputValue') ;
var name = document.querySelector('.name');
var error = document.querySelector('.error');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var windspeed = document.querySelector('.windspeed');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=71b036dfb9d4dafa5fbfa07ed4aa28d4')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var humidityVal = data['main']['humidity'];
        var pressureVal = data['main']['pressure'];
        var windspeedVal = data['wind']['speed'];
        var descValue = data['weather'][0]['description'];
        var tempInCelcius = Math.round(tempValue-273.15,2);
       
        
        desc.innerHTML = "Desc: "+descValue;
        name.innerHTML = nameValue;
        temp.innerHTML = "Temp: "+tempInCelcius+" DegreeCelcius";
        humidity.innerHTML= "Humidity: "+humidityVal+"%";
        pressure.innerHTML= "Pressure: "+pressureVal;
        windspeed.innerHTML= "Windspeed: "+windspeedVal+"m/sec";
        
        
    })
    
.catch(error => alert("You seem to have put an invalid input"));

})
var item = document.querySelector(".button");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   item.setAttribute("style", "background-color:cadetblue;")
}

function func1()
{  
   item.setAttribute("style", "background-color:default;")
}



