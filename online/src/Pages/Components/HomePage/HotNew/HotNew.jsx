import HotItem from './HotItem';
import NewItem from './NewItem';
import { brand4 } from '../../../../lib/productDB';

const HotNew = () => {
  return (
    <article className="art1" id="HOT">
      <figure className="art1--wave">
        <img src="./images/Homepage/art1/wave-1.svg" alt="" />
      </figure>
      <section className="hot">
        <figure className="hot__title">
          <img src="./images/Homepage/art1/hot/title-1.svg" alt="" />
        </figure>
        <ul className="hot__items">
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
          <HotItem />
        </ul>
      </section>
      <section className="new" id="NEW">
        <figure className="new__title">
          <img src="./images/Homepage/art1/new/title-2.svg" alt="" />
        </figure>
        <ul className="new__items">
          {brand4.map((item) => (
            <NewItem item={item} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default HotNew;
