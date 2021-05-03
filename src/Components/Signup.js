import React from "react";
import Header from "./Header";
import "../Signup.css";
import SignUp from "../images/signup.png";

function Signup() {
  return (
    <div className="signup remove__scrollbar">
      <Header />
      <div className="row  margin_top_bottom">
        <div className="col-md-6 text-center">
          <img className="image_signUp " src={SignUp} />
        </div>
        <div className="col-md-6 mt-4">
          <div className="card card__style">
            <h4 className="card-title text-center card_title_style">Sign Up</h4>
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
                    placeholder="Confirm password"
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
                />
                <input
                  type="password"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Confirm password"
                />
              </div> */}

              <a href="/login">
                <button
                  type="button"
                  className="hobbyfy__button_viewDetails mb-3 mt-2">
                  Sign Up
                </button>
              </a>

              <p className="card-text ">
                Already have an account? <a href="/login">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
