//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=us&key=3ZTHD37XTXRRMEX3EHA6VKMTW&contentType=json
var key="3ZTHD37XTXRRMEX3EHA6VKMTW";
 async function weatherfun(){
    var city_name=document.getElementById("input").value;
    var city_length=city_name.length;
  //  console.log(city_name);
    var data=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_name}?unitGroup=metric&key=${key}&contentType=json`);
    if(data.status==400){
     document.querySelector(".validcityname").style.display="block";
     document.querySelector(".weather_box").style.display="none";
    }
    else{
        document.querySelector(".validcityname").style.display="none";
        document.querySelector(".weather_box").style.display="block";

    var data2 =await data.json();
    console.log(data2);
    var temp=Math.round(data2.currentConditions.temp);
    var city_name=data2.address.toUpperCase();
    document.getElementById("temp").innerHTML=temp+"<sup>o</sup>C";
    if(city_length==1||city_length==2||city_length==3){
    document.getElementById("city_name").innerHTML=city_name + ", "+data2.resolvedAddress;}
    else{
        document.getElementById("city_name").innerHTML=city_name;
    }
    document.querySelector(".humidityvalue").innerHTML=Math.round(data2.currentConditions.humidity)+"%";
    document.querySelector(".wind").innerHTML=innerHTML=Math.round(data2.currentConditions.windspeed)+"Km/h";
    var icon=data2.currentConditions.icon;
    if(icon=="clear-day"){
    document.querySelector(".icon").src="weather_Images/clear.png"}
   else if(icon=="Partially cloudy" ||icon=="cloudy"){
   document.querySelector(".icon").src="weather_Images/clouds.png"}
   else if(icon=="drizzle"){
   document.querySelector(".icon").src="weather_Images/drizzle.png"}
   else if(icon=="mist" ||icon=="partly-cloudy-day"){
   document.querySelector(".icon").src="weather_Images/mist.png"}
   else if(icon=="rain"){
   document.querySelector(".icon").src="weather_Images/rain.png"}
   else if(icon=="snow"){
   document.querySelector(".icon").src="weather_Images/snow.png"}

   }
 }