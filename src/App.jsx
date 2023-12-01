import "./App.css";
import "./Card.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="top-header">
        <div></div>
        <span>BLACK NOVEMBER COM ATÉ 70% OFF</span>
        <div></div>
      </div>
      <header>
        <a href="http://" className="header-logo">
          <img
            src="./public/logo.png"
            alt="Desert Surf Logo"
            className="desert-logo"
          />
        </a>
        <nav>
          <ul className="header-navigation">
            <li>
              <a href="http://"></a>MASCULINO
            </li>
            <li>
              <a href="http://"></a>FEMININO
            </li>
            <li>
              <a href="http://"></a>SURF & PRAIA
            </li>
            <li>
              <a href="http://"></a>MUNDO DESERT SURF
            </li>
            <li>
              <a href="http://"></a>OFERTAS
            </li>
          </ul>
        </nav>

        <div className="menu-wrapper">
          <span className="menu-wrapper-icon">
            <img src="./public/search-icon.svg" alt="Search icon" />
          </span>
          <span className="menu-wrapper-icon">
            <img src="./public/user-icon.svg" alt="User icon" />
          </span>
          <span className="menu-wrapper-icon">
            <img src="cart-icon.svg" alt="Cart icon" />
          </span>
        </div>
      </header>

      <div className="hero-banner">
        <img src="./public/hero-banner.jpg" alt="Hero Slide Banner" />
      </div>

      <section>
        <div className="collection-wrap">
          <ul className="card-list">
            <Card />
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;