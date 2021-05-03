import React from "react";
import Header from "./Header";
import LoginImage from "../images/login.png";
import "../Login.css";
function Login() {
  return (
    <div className="login">
      <Header />
      <div className="row remove__scrollbar ">
        <div className="col-md-6 text-center login__margin_top_bottom">
          <img className="image_signUp " src={LoginImage} />
        </div>
        <div className="col-md-6 login__margin_top_bottom">
          <div className="card card__style">
            <h4 className="card-title text-center card_title_style">Log In</h4>
            <div className="card-body text-center">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="name"
                    className="form-control signup_margin_top_bottom"
                    id="name"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <input
                    type="password"
                    name="name"
                    className="form-control signup_margin_top_bottom"
                    id="name"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              {/* <div className="form-group text-center">
                <input
                  type="email"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Password"
                  required
                />
              </div> */}
              {/* <a href="">
                <button type="button" className="hobbyfy__button_view ml-2">
                  Add
                </button>
              </a> */}
              <a href="/addHobbies">
                <button
                  type="button"
                  className="hobbyfy__button_view  signup_margin_top_bottom mb-2">
                  Log In
                </button>
              </a>

              <br></br>
              {/* <a href="">Forgot Password ?</a> */}
              <p>
                <a href="">Forgot Password ?</a>
              </p>
              <p className="card-text ">
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
