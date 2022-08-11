import { HashLink as Link } from 'react-router-hash-link';
import { handleTopBtn } from '../../../../lib/function';
const NewItem = ({ item }) => {
  return (
    <li className="item">
      <figure className="title">
        <img src="./images/Homepage/art1/new/new-title.png" alt="" />
      </figure>
      <section className="item__productBox">
        <figure className="product__img">
          <img src={item.img} alt="" />
        </figure>
        <h1>
          {item.brand} {item.name}
        </h1>
        <p>NT${item.price}</p>
      </section>

      <Link to={'/Project-React/shopPage'} onClick={handleTopBtn}>
        <button>
          SHOP NOW<span></span>
        </button>
      </Link>
    </li>
  );
};

export default NewItem;
