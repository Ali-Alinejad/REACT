import Header from "../components/header.jsx";
import CORE_CONCEPTS from "./data.js";
import bg from "../src/assets/config.png";
import CoreConcepts from "../components/corestyles.jsx";
import Btn1 from "../components/menubot.jsx";
function RUN() {
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
        <section class="BtnList">
          <h2>examples</h2>
          <menu>
            <Btn1 label="JSX"></Btn1>
            <Btn1 label="PHP"></Btn1>
            <Btn1 label="ASP"></Btn1>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default RUN;
