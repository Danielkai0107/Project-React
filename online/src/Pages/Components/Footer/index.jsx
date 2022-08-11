const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer__wave">
        <img src="./images/footer/wave.svg" alt="" />
      </figure>
      <article className="join">
        <section className="join__title">
          <span></span>
          <ul>
            <li>
              <h1>現在加入會員, 首購享9折優惠</h1>
            </li>
            <li>
              <a href="">了解詳情</a>
            </li>
          </ul>
        </section>
        <section className="join__content">
          <ul>
            <li>立即加入</li>
            <li>
              <input type="text" placeholder="請輸入電郵地址" />
              <button>送出</button>
            </li>
          </ul>
        </section>
      </article>

      <article className="menu">
        <figure className="menu__logo">
          <img src="./images/footer/Logo.svg" alt="" />
        </figure>
        <section className="menu__list">
          <ul>
            <h3>商店資訊</h3>
            <li>關於我們</li>
            <li>FAQs</li>
            <li>客服資訊</li>
          </ul>
          <ul>
            <h3>更多消息</h3>
            <li>徵才專區</li>
            <li>隱私權條款 </li>
          </ul>
          <ul>
            <h3>追蹤Milky Bar</h3>
            <li className="icon">
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </section>
      </article>
      <article className="copyright">
        <p>© 2022 Milky Bar, all rights reserved.</p>
      </article>
    </footer>
  );
};

export default Footer;
