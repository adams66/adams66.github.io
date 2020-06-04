

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  
 // var alpha = document.getElementById("math").value;
  //var wind = doucment.getElementById("wind").value;
  //var result = 35.74 + (0.6215 * alpha) + (35.75 + Math.pow(wind, 0.16)) + (0.4275 * alpha * Math.pow(wind, 0.16));
  
  
  var e = new Date();
    var w = e.getDay();

    if(w == 2){
      var element = document.getElementById("hope");
      element.classList.add("display");
   

     
   
    }

 else{
   
  }



document.getElementById("time").innerHTML = e;



}





