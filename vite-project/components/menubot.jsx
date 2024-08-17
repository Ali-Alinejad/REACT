import "./MenuBot.css";

export default function Btn1({ children, selected, isSelect }) {
  return (
    <button className={isSelect ? "active" : undefined} onClick={selected}>
      {children}
    </button>
  );
}
