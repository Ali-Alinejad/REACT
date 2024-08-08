"use strict";
const username = document.querySelector(".username");
const apikey = "sadc5YaKUOoD27sZOtFjHg==jIAJwcSjZf3LG0WR";

function submits() {
  const city = username.value;
  const req = new XMLHttpRequest();
  req.open("GET", `https://api.api-ninjas.com/v1/country?name=${city}`);
  req.setRequestHeader("X-Api-Key", apikey);
  req.send();
  document.querySelector(".flag").style.transition = "2s";
  document.querySelector(".flag").classList.remove("hidden");

  req.addEventListener("load", function () {
    const data = JSON.parse(req.responseText);

    const capital = data[0].capital;
    const cache = data[0].currency.name;
    const region = data[0].region;
    const torist = data[0].tourists;
    const a = data[0].population;
    console.log(capital, region);
  });
}
