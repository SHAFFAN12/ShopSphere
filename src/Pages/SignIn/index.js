import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
import Logo from "../../Assets/logo.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, [])

  return (
    <section className="section signInPage">
      <div className="shape-bottom">
        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"
          style={{ enableBackground: 'new 0 0 1921 819.8' }}><path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg> </div>
      <div className='container'>
        <div className="box card p-3 shadow border-0">
          <div className='text-center'>
            <img src={Logo} alt='' className="w-50"/>
          </div>
          <form className="mt-3">
          <h2>Sign In</h2>
            <div className='form-group'>
              <TextField id="outlined-email-input" label="Email" type="email" required  className='w-100'/>
            </div>
            <div className='form-group'>
              <TextField id="outlined-password-input" label="Password" type="password" required className='w-100'/>
            </div>

            <a className="border-effect cursor">Forgot Password?</a>
            <Button className="btn-blue btn-lg btn-big w-100 mt-3 mb-3">Sign In</Button>

            <p>Not Registered? <Link to="/signUp">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
