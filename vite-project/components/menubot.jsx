import "./menubot.css";

export default function Btn1({ children, selected }) {
  return <button onClick={selected}>{children}</button>;
}
