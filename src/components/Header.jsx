import { useContext, useState } from "react";
import logo from "/img/logo/logoNoBackground.png";
import Login from "../pages/admin/Login";

function Header({ onLandingPage, onAdmin }) {
  // const logo = "./src/img/logo/logoNoBackground.png";

  // Login.Login()

  let whereSymbol = onLandingPage ? "#" : "/#";
  function verifyLogin() {
    let login = onAdmin ? "admin" : false;

    if (login) {
      return (
        <>
          <p>User: {login}</p>
        </>
      );
    } else {
      let loginImg = "img/sfx/login.png";

      return (
        <>
          <a href="/admin">
            <img src={loginImg} alt="" />
            <h4>Login</h4>
          </a>
        </>
      );
    }
  }

  const [menuClasseMostrar, setMenuClasseMostrar] = useState("");

  return (
    <>
      <header id="#">
        <a href={whereSymbol}>
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
            <h1>TOPMARK VEHICLE SOLUTIONS</h1>
          </div>
        </a>
        <span
          className="menuIcon"
          onClick={() => {
            console.log("Menu clicado");
            if (menuClasseMostrar == "") setMenuClasseMostrar("mostrarNav");
            else setMenuClasseMostrar("");
          }}
        ></span>
        <nav className={menuClasseMostrar}>
          <ul>
            <li>
              <a href={whereSymbol}>WELCOME</a>
            </li>
            <li>
              <a href="/showroom">SHOWROOM</a>
            </li>
            <li>
              <a href={whereSymbol + "aboutUs"}>ABOUT US</a>
            </li>
          </ul>
          <div className="conta">{verifyLogin()}</div>
        </nav>
      </header>
    </>
  );
}

export default Header;
