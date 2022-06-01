import React from 'react'
import './SecondStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Second = () => {
  return (
    <div>

<div class="container" >
          <div class="col-lg-12 row main-page" >
            <div class="col-lg-6 white-bg">
              <div class="logo">
                <figure>
                  <a href="index.html">
                    <img src="images/Logo.png" alt="logo"/>
                  </a>
                </figure>
              </div>
              <div class="white-center">
                <h2>Sign up for an account</h2>
                <p>Send, spend and save smarter</p>
                <button class="sign-google">
                  <img src="images/google.png" alt="logo"/>
                  Sign In with Google
                </button>
                <p class="beaf">Or with email</p>
                <input type="text" name="username" placeholder="Username or email" class="mt-3 mb-3" />
                <input type="password" name="pwd" placeholder="Password" />

                <div class="remember-btn">
                    <label>
                      <input type="radio" name="remember" />
                      Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button class="sign-in">Sign In</button>
                <p class="sign-up">Already have an account? <a href="#">Sign In</a></p>
              </div>
              <div class="main-bottom">
                <div class="privacy"><a href="#">Privacy Policy</a></div>
                <div class="copyright"><p>Copyright 2022</p></div>
              </div>
            </div>

            <div class="col-lg-6 blue-bg">
              <div class="white-center">
                <div class="right-img">
                  <figure>
                    <img src="images/balance.png" alt="logo"/>
                  </figure>
                </div>
                <div className="center-img">
                  <figure>
                    <img src="images/modal.png" alt="logo"/>
                  </figure>
                </div>
                <div className="left-img">
                  <figure>
                    <img src="images/Frame.png" alt="logo"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>






    </div>
  )
}

export default Second