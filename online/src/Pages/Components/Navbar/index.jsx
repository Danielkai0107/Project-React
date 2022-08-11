import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { handleTopBtn } from '../../../lib/function';
import AsideBrand from './AsideBrand';
import Heart from './Heart';

function Navbar() {
  const [brand, setBrand] = useState(0);
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart);
  };
  function handleAsideBrand(num) {
    setBrand(num);
  }
  return (
    <nav className="navbar">
      <article className="container">
        <section className="navbar__menu">
          <Link
            className="navbar__menu__logo"
            to="/Project-React#HomePage"
            onClick={handleTopBtn}
          ></Link>
          <ul className="navbar__menu__list">
            <li className="brandList">
              <a>品牌分類</a>
              <section className="brand">
                <ul className="brand__list">
                  <li>
                    <Link to="/productPage#OATLY">OATLY | 瑞典</Link>
                    <span className="img1"></span>
                  </li>
                  <li>
                    <Link to="/productPage#CALIFIA">CALIFIA FARMS | 美國</Link>
                    <span className="img2"></span>
                  </li>
                  <li>
                    <Link to="/productPage#MINOR">MINOR FIGURES | 英國</Link>
                    <span className="img3"></span>
                  </li>
                  <li>
                    <Link to="/productPage#OATSIDE">OATSIDE | 新加坡</Link>
                    <span className="img4"></span>
                  </li>
                </ul>
                <figure className="brand__imgBox">
                  <img
                    src="./Project-React/images/navbar/brand/brand-init.png"
                    alt=""
                  />
                </figure>
              </section>
            </li>
            <li>
              <Link to="/Project-React#HOT">熱銷排行</Link>
            </li>
            <li>
              <Link to="/Project-React#NEW">最新商品</Link>
            </li>
            <li>
              <Link to="/Project-React#SALE">優惠情報</Link>
            </li>
            <li>
              <a href="https://danielkai0107.github.io/Scroll-animation/">
                風格體驗
              </a>
            </li>
            <li className="search">
              <input type="text" placeholder="Search" />
              <span></span>
            </li>
          </ul>
        </section>

        <ul className="navbar__icon">
          <li>
            <span onClick={handleHeart}></span>
          </li>
          <li>
            <Link
              to="/shopcart"
              onClick={() => {
                handleAsideBrand(0);
              }}
            ></Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => {
                handleAsideBrand(0);
              }}
            ></Link>
          </li>
          <li className="phone-btn">
            <span
              onClick={() => {
                handleAsideBrand(1);
              }}
            ></span>
          </li>
        </ul>
        <AsideBrand handleAsideBrand={handleAsideBrand} brand={brand} />
        <Heart heart={heart} />
      </article>
    </nav>
  );
}

export default Navbar;
