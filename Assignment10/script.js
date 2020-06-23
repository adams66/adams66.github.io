

function hamburger(){
document.getElementById("menu").classList.toggle("change");
document.getElementById("beta").classList.toggle("change-nav");

}

function myFunction(){  

  var e = new Date();
  var w = e.getDay();


document.getElementById("time").innerHTML = e;



}





const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let image = document.createElement('img')
      p.setAttribute('style', 'white-space: pre;');

       x = towns[i].name;
       console.log(x);
   
      if(x == "Preston" || x=="Fish Haven" || x=="Soda Springs"){

        if(x=="Preston"){
     h2.textContent = towns[i].name;
     p.textContent =  towns[i].motto;
     p2.textContent = "Yearfounded: " + towns[i].yearFounded; 
     p3.textContent = "Population: " + towns[i].currentPopulation;
     p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
 

     
     card.appendChild(h2);
     card.appendChild(p);
     card.appendChild(p2);
     card.appendChild(p3);
     card.appendChild(p4);
     card.appendChild(image);
     document.querySelector('div.cards').appendChild(card);
        }


       else if(x=="Fish Haven"){
     h2.textContent = towns[i].name;
     p.textContent =  towns[i].motto;
     p2.textContent = "Yearfounded: " + towns[i].yearFounded; 
     p3.textContent = "Population: " + towns[i].currentPopulation;
     p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
     

     
     card.appendChild(h2);
     card.appendChild(p);
     card.appendChild(p2);
     card.appendChild(p3);
     card.appendChild(p4);
     card.appendChild(image);
     document.querySelector('div.cards2').appendChild(card);
        }

        else{
          h2.textContent = towns[i].name;
          p.textContent =  towns[i].motto;
          p2.textContent = "Yearfounded: " + towns[i].yearFounded; 
          p3.textContent = "Population: " + towns[i].currentPopulation;
          p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
          
     
          
          card.appendChild(h2);
          card.appendChild(p);
          card.appendChild(p2);
          card.appendChild(p3);
          card.appendChild(p4);
          card.appendChild(image);
          document.querySelector('div.cards3').appendChild(card);


             }

             
            }
   
            else{
              
            }

  
    }

  });



