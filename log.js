const Login = () => {
    return (
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>log in</button>
            <button type="button" className="toggle-btn1" onClick={signin}>sign in</button>
          </div>
          <h1>Welcome !</h1>
          <p>Sign in to continue</p>
          <form id="log" className="input-group">
            <img src="user (2).png" width="20px" alt="User icon" />
            <input type="text" className="input-field" placeholder="enter Username" required />
            <br />
            <img src="lock.png" width="20px" alt="Lock icon" />
            <input type="password" className="input-field" placeholder="***********" required />
            <br />
            <button className="submit-btn" type="submit">Login</button>
          </form>
          <form id="sign" className="input-group">
            <img src="user (2).png" width="20px" alt="User icon" />
            <input type="text" className="input-field" placeholder=" Username" required />
            <br />
            <img src="user (2).png" width="20px" alt="User icon" />
            <input type="email" className="input-field" placeholder="email" required />
            <br />
            <img src="lock.png" width="20px" alt="Lock icon" />
            <input type="password" className="input-field" placeholder="***********" required />
            <br />
            <button className="submit-btn" type="submit">Signin</button>
          </form>
          <div className="social-icon">
            <img src="tw.png" alt="Twitter icon" />
            <img src="sea.png" alt="Search icon" />
            <img src="fb.png" alt="Facebook icon" />
          </div>
        </div>
      </div>
    );
  };
  