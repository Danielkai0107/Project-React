const Sale = () => {
  return (
    <article className="art2" id="SALE">
      <figure className="art2--wave">
        <img src="./images/Homepage/art2/wave-2.svg" alt="" />
      </figure>
      <ul className="sale">
        <li className="sale__title">
          <figure className="sale__title__logo">
            <img
              src="./images/Homepage/art2/title-3.svg"
              alt=""
            />
          </figure>
          <button>
            查看詳情<span></span>
          </button>
        </li>
        <li className="sale__imgBox">
          <p>
            絕佳的濃郁度
            <br />
            100%植物成分
          </p>
          <figure className="sale__imgBox__img">
            <img
              src="./images/Homepage/art2/sale-product.png"
              alt=""
            />
          </figure>
        </li>
      </ul>
    </article>
  );
};

export default Sale;
