import React ,{useState}from 'react'
import './login.css'
import logo from '../assets/react-logo.png'
import facebook from '../assets/facebook-logo-png-23.png'
import gmail from '../assets/pngwing.com.png'
import twitter from '../assets/twitter-icon-73.png'

const Login = () => {
    const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
    <div className="login_page">
    {/* // -------------------------Header-Logo------------------------ */}
   <div className="header">
      <div>
        <img src={logo} alt="logo" className='logo-react' />
      </div>
      <div className='header-title'>
      <h3>Join The Journey With Educase India Private Limited</h3>
      </div>
    </div>
    {/* // ----------------------------Login-Form------------------------ */}

    <div className="form">
    <div
      className={login && "form_active"}
      onClick={() => setLogin(true)}
    >
      Login
    </div>
    <div
      className={!login && "form_active"}
      onClick={() => setLogin(false)}
    >
      Signup
    </div>
  </div>
  <form>
    {!login && <input type="text" placeholder="Enter name" required />}
    <input type="email" placeholder="Email Address"  required/>
    <input type="password" placeholder="Password" required />
    <button type="submit">{login ? "LOGIN" : "SIGNUP"}</button>
  </form>
  {login && <h4 className='forgot_pass'>Forgot Password?</h4>}
  {<p className='login_with'>or {login ? "login" : "signup"} with</p>}
  
  {/* --------------------------Login-With Icons------------------- */}


  <div className="icons">
        <div className="icon">
          <img src={gmail} alt="google" />
        </div>
        <div className="icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      {/* -------------------------------Terms & Conditions------------------- */}
      <p className='create-acc'>
        Don't have an Account? <b className='create-new-acc'>Create new now!</b>
      </p>
      <span className='terms'>
        By signing up, you are agree with our <b className='terms_condition'>Term & Conditions</b>
      </span>
    

  </div>
  </div>
  </>
  )
}

export default Login