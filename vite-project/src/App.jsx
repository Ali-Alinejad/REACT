import Header from "../components/header.jsx";
import CORE_CONCEPTS from "./data.js";
import bg from "../src/assets/config.png";
import CoreConcepts from "../components/corestyles.jsx";
import Btn1 from "../components/menubot.jsx";
let khar = "khar manam khar manam";
function RUN() {
  function handleSelect(name) {
    console.log("select" + name);
  }

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
        <section className="BtnList">
          <h2>examples</h2>
          <menu>
            <Btn1 selected={() => handleSelect("php")}>php</Btn1>
            <Btn1 selected={() => handleSelect("jsx")}>jsx</Btn1>
            <Btn1 selected={() => handleSelect("asp")}>asp</Btn1>
          </menu>
          <div className="Show">{khar}</div>
        </section>
      </main>
    </div>
  );
}

export default RUN;
