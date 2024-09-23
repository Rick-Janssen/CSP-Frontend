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
        <img class="LogoPng" src="./pic/FlagFlaggyLogo.png" />
        <div class="nav-content">
          <div class="logo">
            <a href="./">Idk man</a>
          </div>
          <ul class="nav-links">
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
              <a href="register" class="Formbutton">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section class="home"></section>
    </>
  );
}
export default navbar
