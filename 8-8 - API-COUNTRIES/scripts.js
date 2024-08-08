"use strict";
const username = document.querySelector(".username");
const apikey = "sadc5YaKUOoD27sZOtFjHg==jIAJwcSjZf3LG0WR";

function submits() {



  
  document.querySelector(".region").classList.remove("hidden");
 document.querySelector(".cache").classList.remove("hidden");
  document.querySelector(".capital").classList.remove("hidden");
  document.querySelector(".torist").classList.remove("hidden");
   document.querySelector(".pop").classList.remove("hidden");
  
  const city = username.value;




  const req = new XMLHttpRequest();
  req.open("GET", `https://api.api-ninjas.com/v1/country?name=${city}`);
  req.setRequestHeader("X-Api-Key", apikey);
  req.send();
  document.querySelector(".flag").classList.remove("hidden");
  document.querySelector(".flag").style.transition = "2s";
  req.addEventListener("load", function () {
    const data = JSON.parse(req.responseText);
    
    const render = data[0].iso2;
    document.querySelector(".flag").style.backgroundImage= `url('https://flagsapi.com/${render}/shiny/64.png')`;;
    const capital = data[0].capital;
    const cache = data[0].currency.name;
    const region = data[0].region;
    const torist = data[0].tourists;
    const pop = data[0].population;
    console.log(render);
 
  });
}
