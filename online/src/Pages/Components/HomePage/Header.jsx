import { HashLink as Link } from 'react-router-hash-link';
function Header() {
  return (
    <header className="Homepage__header">
      <article className="container">
        <ul className="Homepage__header__content">
          <li className="Homepage__header__content__title">
            <h1>
              OAT MILK
              <br />
              YOUR NEW
              <br />
              LIFESTYLE
            </h1>
          </li>
          <li className="Homepage__header__content__btn">
            <Link to={'/productPage'}>
              <button>
                開始購物<span></span>
              </button>
            </Link>

            <figure>
              <img src="./images/header/header-product.png" alt="" />
            </figure>
          </li>
        </ul>
        <section className="Homepage__header__imgBox">
          <img src="./images/header/header__animation.svg" alt="" />
        </section>
      </article>
    </header>
  );
}

export default Header;
