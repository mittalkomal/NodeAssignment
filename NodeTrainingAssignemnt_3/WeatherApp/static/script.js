
$(()=>{
    let city = $('#city')
    let btn = $('#btn')
    let apiKey="6ea237fbb513c6b19b5ccff9e26e3a5d"
    
    $('#reset').click(()=>
    {
        $(".weatherContainer").empty();
    }) 
    
    
 btn.click((ev)=>{
     if(city.val().length<=0)
     alert('Please enter a city')
     else {
         let url=`http://api.openweathermap.org/data/2.5/weather?q=${city.val()}&units=imperial&appid=${apiKey}`
        $.post(url,(data)=>{
            console.log(data)
           let temp=data.main.temp
           let maxTemp= data.main.temp_max
           let minTemp= data.main.temp_min
           let condition= data.weather[0].main
           let name=data.name
           let time=data.timezone
           time= getExactTime(time)
           createWeatherCard(temp,minTemp,maxTemp,condition,name,time)
        }).fail((jqXHR)=>{
            alert('“City does not exist”')
        })
        city.val('')
        }
    }) 
    
    function createWeatherCard(temp,minTemp,maxTemp,condition,name,time)
    {  
     $(".weatherContainer").append('<div class="container1">'
        +'<div class="background">'
        +'<div class="Circle1"></div>'
         + '<div class="Circle2"></div>'
          +'<div class="Circle3"></div>'
          +'<div class="content">'
           +' <h1 class="Condition">'+ condition+'</h1>'
            +'<h5 class="Temp">'+ temp+  '<span id="F"> &#8457;</span></h5>'
            +'<h3 class="temp_minmax"> Min Temp -'+ minTemp+  '<span id="F"> &#8457;</span></h3>'
            +'<h3 class="temp_minmax"> Max Temp -'+ maxTemp+  '<span id="F"> &#8457;</span></h3>'
            +'<h1 class="Time">'+time+'</h1>'
            +'<h1 class="Location"><i class="material-icons locationIcon">place</i>'+name+' </h1>'
          +'</div>'
        +'</div>'); 

} 

function getExactTime(time)
{
currentDate = new Date()
localTime = currentDate.getTime()
localOffset = currentDate.getTimezoneOffset() * 60000
utc = localTime + localOffset
var convertedTime = utc + (1000 * time)
date = new Date(convertedTime)
console.log(date)
var time= date.getHours()+":"+ date.getMinutes();
return time
}
        
        

    
})

