"use strict";
const username = document.querySelector("#username");
const apikey = "sadc5YaKUOoD27sZOtFjHg==jIAJwcSjZf3LG0WR";

function submits() {
  const city = username.value;
  document.querySelector(".region").classList.remove("hidden");
  document.querySelector(".cache").classList.remove("hidden");
  document.querySelector(".capital").classList.remove("hidden");

  document.querySelector(".tourists").classList.remove("hidden");

  document.querySelector(".pop").classList.remove("hidden");
  document.querySelector(".flag").classList.remove("hidden");
  document.querySelector(".flag").style.transition = "2s";

  fetch(`https://api.api-ninjas.com/v1/country?name=${city}`, {
    headers: { "X-Api-Key": apikey },
  })
    .then((abcv) => abcv.json())
    .then((data) => {
      const render = data[0].iso2;
      document.querySelector(
        ".flag"
      ).style.backgroundImage = `url('https://flagsapi.com/${render}/shiny/64.png')`;
      const capital = data[0].capital;
      const cache = data[0].currency.name;
      const region = data[0].region;
      const tourists = data[0].tourists;
      const pop = data[0].population;

      document.querySelector(".region").value = "⛪region:  " + region;
      document.querySelector(".cache").value = "💰Cache:  " + cache;
      document.querySelector(".pop").value =
        "🏠population:  " + pop / 1000 + "M";
      document.querySelector(".tourists").value = "✈️tourists:  " + tourists;
      document.querySelector(".capital").value = "🌆capital:  " + capital;

      console.log(render);
    })
    .catch((error) => {
      document.querySelector(".flag").style.backgroundColor = "black";
      document.querySelector(".flag").textContent = "wrong!!";
      console.log("Error:", error);
    });
}
