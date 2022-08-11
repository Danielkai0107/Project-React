import { useState } from 'react';

const Login = () => {
  const [fade, setFade] = useState('false');
  const handleFadeBtn = () => {
    setFade(!fade);
  };
  return (
    <main className="Login">
      <article className="Login__img">
        <figure className={fade ? 'login-img fadeIn' : 'login-img fadeOut'}>
          <img src="./images/login/pic-1.png" alt="" />
        </figure>
        <figure className={fade ? 'sign-img' : 'sign-img fadeUp'}>
          <img src="./images/login/pic-2.png" alt="" />
        </figure>
      </article>
      <article className="Login__content">
        <section className={fade ? 'account fade' : 'account fadeOut'}>
          <h1>登入會員</h1>
          <section className="account__input">
            <label htmlFor="">手機號碼</label>
            <input type="text" placeholder="請輸入手機號碼" />
            <label htmlFor="">密碼</label>
            <input type="password" placeholder="請輸入密碼" />
            <span></span>
          </section>
          <ul className="account__forget">
            <li className="forget">
              <input
                className="forget__input"
                type="checkbox"
                name=""
                id="remember"
              />
              <label className="forget__label" htmlFor="remember"></label>
              <span>記住我</span>
            </li>
            <li>忘記密碼?</li>
          </ul>
          <button className="account__btn">登入</button>
          <section className="account__hr"></section>
          <ul className="account__icon">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
          <section className="account__signUp">
            <span onClick={handleFadeBtn}>註冊會員</span>
          </section>
        </section>
        <section className={fade ? 'signUp' : 'signUp fadeUp'}>
          <h1>註冊會員</h1>
          <section className="signUp__input">
            <label htmlFor="">姓名</label>
            <input type="text" placeholder="請輸入姓名" />
            <label htmlFor="">信箱</label>
            <input type="text" placeholder="請輸入信箱" />
            <label htmlFor="">手機號碼</label>
            <form>
              <input type="text" placeholder="請輸入手機號碼" />
              <button>發送驗證碼</button>
            </form>
            <label htmlFor="">驗證碼</label>
            <input type="text" placeholder="請輸入驗證碼" />
            <label htmlFor="">密碼</label>
            <form>
              <input type="password" placeholder="請輸入密碼" />
              <span></span>
            </form>
            <label htmlFor="">驗證密碼</label>
            <form>
              <input type="password" placeholder="請再次輸入密碼" />
              <span></span>
            </form>
          </section>
          <button className="signUp__btn">註冊</button>
          <h3 className="signUp__back">
            我有帳號了 ! <span onClick={handleFadeBtn}>登入</span>
          </h3>
          <section className="signUp__hr"></section>
          <ul className="signUp__icon">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Login;
