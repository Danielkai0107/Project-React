import { HashLink as Link } from 'react-router-hash-link';
import { handleTopBtn } from '../../../lib/function';

const Item = ({ textStyle, product, handleSetData }) => {
  return (
    <li>
      <figure>
        <img src={product.intro__img} alt="" />
      </figure>
      <h3>{product.brand}</h3>
      <Link
        className={textStyle}
        to="/Project-React/shopPage"
        onClick={handleTopBtn}
      >
        {product.name}
      </Link>
    </li>
  );
};

export default Item;
