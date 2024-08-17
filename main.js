var country;  // global var
  
document.getElementById('weatherIcon').style.display = "none";
  document.getElementById('weatherClear').style.display = "none";
  document.getElementById('weatherhumidity').style.display = "none";
  document.getElementById('weatherRain').style.display="none";
  
function weather() {
 

  function fetchweather(e) {
  /// is funciton me main data print bhi krwa skta hu
    
  document.getElementById('weatherIcon').style.display = "none";
  document.getElementById('weatherClear').style.display = "none";
  document.getElementById('weatherhumidity').style.display = "none";
  document.getElementById('weatherRain').style.display="none";
  document.getElementsByClassName('container')[0].style.background = "";
   document.getElementsByClassName('container')[0].style.background = "";
 document.getElementsByClassName('container')[0].style.color = ""



  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=c8b41bf810889a2ede9d4bb797daceb6`).then((res) => { 
  
    return res.json()     // c8b41bf810889a2ede9d4bb797daceb6
  }).then((data) => {

    console.log(data)
    let location = document.getElementById('location')
    /// heading or country ko update kr rha hu
      country = `${data.sys.country}`
    location.innerText=e.toUpperCase();
      document.getElementById('temperature').innerText = `${data.main.temp} °C ` ;

     document.getElementById('weatherCondi').innerText =`${data.weather[0].main}`
              
            let iconUpdate = `${data.weather[0].main}`
              console.log(iconUpdate)
        if(iconUpdate === 'Clouds'){
          document.getElementsByClassName('container')[0].style.background = "url('../media/back/cloud.jpeg')";
                document.getElementById('weatherIcon').style.display = "block"
          
         }
        if(iconUpdate === "Clear"){
        document.getElementById('weatherClear').style.display = "block"
        } 
        if(iconUpdate ==="Humidity"){
          document.getElementById('weatherhumidity').style.display='block'
          document.getElementsByClassName('container')[0].style.background = "url('../media/back/humidity.jpg')"
        }
          if(iconUpdate ==="Rain"){
            document.getElementById('weatherRain').style.display="block";
            document.getElementsByClassName('container')[0].style.background = "url('../media/back/rain.jpg')"
         document.getElementsByClassName('container')[0].style.color = "white"
         
        }
        document.getElementById("description").innerText = `${data.sys.country}`
        
      
         
                

    
     
  })
       


  
  }  ///  fetchweather function



  document.getElementById("locationInput").addEventListener('input', inputsearch)  //  input :- is keyword s humko value bhi milti hai or click event bhi hota hai 
  function inputsearch() {
    let getInput =document.getElementById('locationInput').value

  fetchweather(getInput)

 
        }

        



 













} // funciton weather
weather()