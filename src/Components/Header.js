import React from "react";
import "../Header.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="row ml-1 mr-5">
        <nav class="navbar">
          {/* <div class=""> */}

          <div className="col-md-4">
            <div class="navbar-header">
              <a class="navbar-brand header__left" href="./">
                HOBBYFY
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <ul class="nav justify-content-center">
              <li>
                <a href="./addHobbies">Explore</a>
              </li>
              <li>
                <a href="./discover">Discover</a>
              </li>
              <li class="dropdown">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  data-testid="shop">
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/buyItems">Buy Items</a>
                  </li>
                  <li>
                    <a href="/sellItems">Sell Items</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Profile
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/myHobbies">My Hobbies</a>
                  </li>
                  <li>
                    <a href="/friends">Friends</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul class="nav navbar-right">
              <li>
                <a href="./signup">
                  <span
                    class="glyphicon glyphicon-user"
                    onClick={() => history.push("./signup")}></span>{" "}
                  Sign Up
                </a>
              </li>
              <li>
                <a href="./login">
                  <span class="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
