import { HashLink as Link } from 'react-router-hash-link';
import { handleTopBtn } from '../../../../lib/function';
const HotItem = () => {
  return (
    <li className="item">
      <figure className="item__img">
        <img src="./images/Homepage/art1/hot/hot-product.png" alt="" />
      </figure>
      <section className="item__content">
        <h1>Minor Figures 燕麥奶 (6入)</h1>
        <div className="text">
          <h2>
            <span>24%</span> NT$999
          </h2>
          <p>
            NT$1314
            <Link to={'/Project-React/shopPage'} onClick={handleTopBtn}>
              <span></span>
            </Link>
          </p>
        </div>
      </section>
    </li>
  );
};

export default HotItem;
