import './Navbar.css'

function navbar() {
  let nav = document.querySelector("nav");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
  return (
    <>
      <nav>
        <img className="LogoPng" src="./pic/FlagFlaggyLogo.png" />
        <div className="nav-content">
          <div className="logo">
            <a href="./">Idk man</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="bier">products</a>
            </li>
            <li>
              <a href="#">mosted rated</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="register" className="Formbutton">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="home"></section>
    </>
  );
}
export default navbar
