import { useState } from "react";
import "./App.css";

const QA = [
  {
    title: "who we worked ?",
    Answer: "well we try to catch some data from us object ",
  },
  {
    title: "who we Jug ?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing e",
  },
  {
    title: "who we Jug ?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing e",
  },
];

function App() {
  return (
    <>
      <Rendering Data={QA} />
    </>
  );
}

function Rendering({ Data }) {
  return (
    <div className="acc">
      {Data.map((e, index) => (
        <SStyles
          title={e.title}
          content={e.Answer}
          key={index}
          number={index + 1}
        />
      ))}
    </div>
  );
}

function SStyles({ title, content, number }) {
  const [onShow, setonShow] = useState(false);

  const handleClick = () => {
    setonShow((prev) => !prev);
  };

  return (
    <div className="main"  onClick={handleClick}>
      <h1>{number}</h1>
      <h1>{title}</h1>
      <p className="content-box">{onShow ? content : ""}</p>
    </div>
  );
}

export default App;
