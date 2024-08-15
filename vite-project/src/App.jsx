const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import bg from "../src/assets/config.png";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(reactDescriptions.length)]} React
        concepts you will need for almost any app you are going to build!
      </p>
      <h2>OPS Just For A Test</h2>
    </header>
  );
}
function CoreConcepts(props) {
  return (
    <li>
      <img src="111"></img>
      <h2>{props.Title}</h2>
      <p>{props.matn}</p>
    </li>
  );
}

function RUN() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts Title=" khar" matn=" khiardajsdnjkandjasd" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default RUN;
