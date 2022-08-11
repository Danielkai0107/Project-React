import { HashLink as Link } from 'react-router-hash-link';
import { handleTopBtn } from '../../../lib/function';
const ShopIntro = () => {
  return (
    <article className="shopIntro">
      <section className="imgBox">
        <ul className="breadcrumbs">
          <li>
            <Link to="/Project-React/" onClick={handleTopBtn}>
              首頁
            </Link>
            <span></span>
          </li>
          <li>
            <Link to="/Project-React/productPage" onClick={handleTopBtn}>
              Minor Figures
            </Link>
            <span></span>
          </li>
          <li>
            <Link to="/Project-React/shopPage" onClick={handleTopBtn}>
              燕麥奶
            </Link>
          </li>
        </ul>
        <figure>
          <img src="./images/Shoppage/info/product-1.png" alt="" />
        </figure>
        <ul className="productImages">
          <li>
            <img src="./images/Shoppage/info/product-2.png" alt="" />
          </li>
          <li>
            <img src="./images/Shoppage/info/product-3.png" alt="" />
          </li>
          <li>
            <img src="./images/Shoppage/info/product-4.png" alt="" />
          </li>
        </ul>
      </section>
      <section className="introBox">
        <ul className="introBox__list">
          <li>
            <a href="#productInfo">商品資訊</a>
          </li>
          <li>
            <a href="#productIngredients">成分標示</a>
          </li>
          <li>
            <a href="#productEvaluation">客戶評價</a>
          </li>
        </ul>
        <figure>
          <img src="./images/Shoppage/info/product-2.png" alt="" />
          <img src="./images/Shoppage/info/intro-1.png" alt="" />
          <img src="./images/Shoppage/info/product-3.png" alt="" />
          <img src="./images/Shoppage/info/product-4.png" alt="" />
          <img
            id="productIngredients"
            src="./images/Shoppage/info/intro-2.png"
            alt=""
          />
        </figure>
      </section>
      <section className="evaluation" id="productEvaluation">
        <ul className="evaluation__total">
          <li className="evaluation__total__info">
            <h1>商品評價</h1>
            <h2>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              5.0
            </h2>
            <p>150則評論</p>
          </li>
          <li className="evaluation__total__downList">
            <label htmlFor="">排序</label>
            <select name="search" id="">
              <option value="search1">時間新到舊</option>
              <option value="search2">評價高到低</option>
              <option value="search3">有照片優先</option>
            </select>
          </li>
        </ul>
        <ul className="evaluation__items">
          <li className="evaluation__item">
            <section className="evaluation__item__title">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>accountname · 2022-05-22</p>
            </section>
            <section className="evaluation__item__content">
              <h2>商品：[Minor Figures 小人物] 咖啡大師-燕麥奶 </h2>
              <h1>很濃郁，味道不錯，加咖啡或茶都很適合～</h1>
            </section>
          </li>
          <li className="evaluation__item">
            <section className="evaluation__item__title">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>account123 · 2022-05-14</p>
            </section>
            <section className="evaluation__item__content">
              <h2>商品：[Minor Figures 小人物] 咖啡大師-燕麥奶 </h2>
              <h1>滑順好入口，值得再次回購！</h1>
            </section>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ShopIntro;
