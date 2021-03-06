import HeartItem from './HeartItem';
import { brand2 } from '../../../lib/productDB';
const Heart = ({ heart }) => {
  return (
    <article className={heart ? 'HeartList visible' : 'HeartList'}>
      <span className="wave"></span>
      <h1>ζηζΆθ</h1>
      <ul className="HeartList__items">
        {brand2.map((item) => (
          <HeartItem item={item} />
        ))}
      </ul>
    </article>
  );
};

export default Heart;
