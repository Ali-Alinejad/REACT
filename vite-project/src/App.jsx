import Header from "../components/header.jsx";
import CORE_CONCEPTS from "./data.js";
import bg from "../src/assets/config.png";
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function RUN() {
  console.log(CORE_CONCEPTS);
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default RUN;
