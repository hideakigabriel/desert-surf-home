import "./App.css";
import "./Card.css";
import "./DiscountPopUp.css";
import Card from "./components/Card";
import ProductItem from "./components/ProductItem";
import DiscountPopUp from "./components/DiscountPopUp";
import CardCategories from "./components/CardCategories";

function App() {
  return (
    <>
      <div className="top-header">
        <div></div>
        <span>GANHE CHINELO NAS COMPRAS ACIMA DE R$699</span>
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
              <span id="#link-sale">SALE</span>
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
        <img
          src="https://hurley.com.br/cdn/shop/files/Banner_Phantom_Eco_Site_1500x.jpg?v=1698169717"
          alt="Hero Slide Banner"
        />
      </div>

      <section>
        <div className="collection-wrap">
          <ul className="card-list">
            <Card />
          </ul>
        </div>
      </section>

      <section className="container-wrap">
        <div className="hero-banner">
          <img src="https://pbs.twimg.com/media/EVmkGJkUUAAcpdx.jpg" alt="" />
        </div>
      </section>

      <section className="container-wrap">
        <div className="title-wrap">
          <h1 className="title">BERMUDAS</h1>
        </div>
        <div className="collection-wrap">
          <ul className="card-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ul>
        </div>
      </section>

      <section>
        <div className="collection-wrap">
          <ul className="card-list">
            <CardCategories />
          </ul>
        </div>
      </section>
      <DiscountPopUp/>
    </>
  );
}

export default App;
