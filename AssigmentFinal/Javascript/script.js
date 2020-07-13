

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  

  let d = new Date();
  let n = d.getDay()



  document.getElementById("time").innerHTML = d;



}


const current = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d513094f73f4a16ef93c028c18bd04a9';



fetch(current).then(function (response) {

	return response.json();
}).then(function (data) {
 
  let result1 =  ((data.list[0].main.temp) * (9/5) - 459.67).toFixed(0);
  let result2 =  ((data.list[0].main.temp_max) * (9/5) - 459.67).toFixed(0);

    let result3 = data.list[0].main.humidity;
    let result4 = data.list[0].wind.speed;

  document.getElementById('value1').innerHTML = result1 + "&#176" + "F" ;
  document.getElementById('value2').innerHTML = result2 + "&#176" + "F" ;
  document.getElementById('value3').innerHTML = result3 + "%";
  document.getElementById('value4').innerHTML = result4 +" mph";
  
}).catch(function (err) {
	
	console.warn('Something went wrong.', err);
});




let weekDay = ["Sun","Mon", "Tues", "Wed","Thurs","Fri", "Sat", " Sun"];
for(var i = 1; i <=5; i++){
  var a = new Date;
  var b = a.getDay();
  var c = b + i;
  var convert = i.toString();
  var final = "t" + convert;

  if(c > 6){
    var d = c - 6;
    var e = weekDay[d];
    document.getElementById(final).innerHTML = e;
  }

  else{
    document.getElementById(final).innerHTML = weekDay[c];
  }


}


  const current_beta = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&%20exclude=minutely,hourly&appid=d513094f73f4a16ef93c028c18bd04a9';


  fetch(current_beta).then(function (response) {

    return response.json();
  }).then(function (data) {
    for(var i = 0; i <5; i++){
      
      var result = (data.daily[i].temp.max * (9/5) - 459.67).toFixed(0);
      var icon = data.daily[i].weather[0].icon;
      var url = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
      var imgE = document.createElement("img");
      imgE.setAttribute("src", url);
      document.getElementById("b" + i ).appendChild(imgE)
      console.log(icon);

      var convert = i.toString();

      
      var b ="a" + (convert);
     
      document.getElementById(b).innerHTML = result +  "&#176" + "F";
      
     
    }
   
      
  }).catch(function (err) {

    
    
    console.warn('Something went wrong.', err);
  });
  
  
  