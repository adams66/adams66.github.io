

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  

  var e = new Date();
  var w = e.getDay();
  var alpha = document.getElementById('math').innerHTML;
  var beta = document.getElementById('wind').innerHTML;
  var result = 35.74 + (0.6215 * alpha) + (35.75 + Math.pow(beta, 0.16)) + (0.4275 * alpha * Math.pow(beta, 0.16));

    if(w == 2){
      var element = document.getElementById("hope");
      element.classList.add("display");
   

     
   
    }

 else{
   
  }



document.getElementById("final").innerHTML = result.toFixed(2);
document.getElementById("time").innerHTML = e;



}



