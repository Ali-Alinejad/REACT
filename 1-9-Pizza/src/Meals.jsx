import { useEffect } from "react";
import { useState } from "react";

function Meals() {
  const [Load, setLoad] = useState([]);
  useEffect(function () {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals");
      if (!res.ok) {
        //--
        console.log("ok");
      }
      const meals = await res.json();
      setLoad(meals);
    }
    console.log("j");
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {Load.map((m) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;
