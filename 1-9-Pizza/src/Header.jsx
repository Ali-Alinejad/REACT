import logoImg from "../src/assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Food Chart</h1>
      </div>
      <nav>
        <button> cart (0)</button>
      </nav>
    </header>
  );
}

export default Header;
