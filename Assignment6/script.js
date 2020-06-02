

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  

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


