

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  

    var e = new Date();
    var w = e.getDay();

    if(w == 3){
    var myElement = document.querySelector("#banner");
    myElement.style.height = "200px";
    myElement.style.margin = "25px";
     
   
    }

 else{
   
  }



document.getElementById("time").innerHTML = e;



}


