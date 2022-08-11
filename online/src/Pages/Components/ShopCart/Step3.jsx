const Step3 = ({ handleStepBtn, step, total }) => {
  return (
    <article className={step == 3 ? 'step3' : 'step3 hidden'}>
      <ul className="step3__timebar">
        <li></li>
        <hr />
        <li></li>
        <hr />
        <li></li>
      </ul>
      <section className="step3__transport">
        <h1>訂購完成 !</h1>
        <p>訂單資訊已發送至您的信箱 !</p>
        <figure className="complete">
          <img src="./images/Shopcart/steps/complete.png" alt="" />
        </figure>
        <ul className="finalBox">
          <li>
            <p>
              已收到訂單<span></span>
            </p>
            <p>2022/05/22 星期二</p>
            <p>NT${total}</p>
          </li>
          <li className="check">
            查看訂單<span></span>
          </li>
        </ul>
      </section>
      <button className="step3__connect" value={1} onClick={handleStepBtn}>
        返回首頁
      </button>
    </article>
  );
};

export default Step3;
