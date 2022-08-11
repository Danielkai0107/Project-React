const Cart = ({
  price,
  handleDecreaseNumber,
  handleIncreaseNumber,
  number,
}) => {
  return (
    <li className="cart">
      <figure className="cart__img">
        <img src="./images/Shopcart/cart/product-1.png" alt="" />
      </figure>
      <section className="cart__title">
        <p>CALIFA FARMS</p>
        <p>咖啡師燕麥奶</p>
      </section>
      <form className="cart__btn">
        <span onClick={handleDecreaseNumber}></span>
        <span>{number}</span>
        <span onClick={handleIncreaseNumber}></span>
      </form>
      <h2 className="cart__price">
        NT${price}
        <span>元</span>
      </h2>
      <span className="cart__delete"></span>
    </li>
  );
};

export default Cart;
