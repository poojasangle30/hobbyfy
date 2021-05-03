import React from "react";
import Header from "./Header";
import "../MyHobbies.css";
import Candle from "../images/candle.png";
import Martha from "../images/Martha.jpg";
import Alena from "../images/Alena.jpg";
import Bharat from "../images/Bharat.jpg";

function MyHobbies() {
  return (
    <div className="myHobbies">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>My Hobbies</p>
        </div>
      </div>
      <div className="row  ml-5 mr-5">
        <div className="col-md-2">
          <div class="dropdown">
            <button
              class="hobbyfy__button_selectCategory dropdown-toggle"
              type="button"
              data-toggle="dropdown">
              Select Category
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Candle making</a>
              </li>
              <li>
                <a href="#">Origami</a>
              </li>
              <li>
                <a href="#">Flower Pressing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <a href="/activityDetail">
            <button type="button" className="hobbyfy__button_viewDetails ml-5">
              Add Hobbies
            </button>
          </a>
          {/* <a href="#" class="btn btn-primary ml-5">
            Add Hobbies
          </a> */}
        </div>
      </div>
      <div className="row ml-5 mr-5 mt-5">
        <div className="col-md-8 myHobbies__margin_bottom">
          <div className="row remove__scrollbar">
            <div className="col-md-4 mb-5">
              <div class="card explore__card__style">
                <img
                  class="card-img-top explore__image"
                  src={Candle}
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    Pineapple Candles{" "}
                    <span className="addHobbies__time">15 mins</span>
                  </h4>
                  <p class="card-text">Create super easy and cute candles</p>
                  <a href="/activityDetail">
                    <button
                      type="button"
                      className="hobbyfy__button_viewDetails">
                      View details
                    </button>
                  </a>
                  <a href="/activityDetail">
                    <button
                      type="button"
                      className="hobbyfy__button_viewDetails ml-5">
                      Remove
                    </button>
                  </a>
                  {/* <a href="#" class="btn btn-primary ml-5">
                    Remove
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card myHobbies_yourHobbies">
            <div class="card-body">
              <h4 class="card-title title__color">People with similar hobby</h4>
              <hr />
              <p class="card-text">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      class="card-img-top addHobbies__image mr-2"
                      src={Martha}
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-8 ml-5">
                    <span>Martha Scheerer</span>{" "}
                    <span className="float-right">Pineapple Candle</span>
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2 mt-2">
                        Add
                      </button>
                    </a>
                    {/* <a href="#" class="btn btn-primary ml-2 mt-2">
                      Add
                    </a> */}
                  </div>
                </div>
              </p>

              <hr></hr>
              <p class="card-text">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      class="card-img-top addHobbies__image mr-2"
                      src={Alena}
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-8 ml-5">
                    <span>Alenna Scheerer</span>{" "}
                    <span className="float-right">Feather Sketching</span>
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2 mt-2">
                        Add
                      </button>
                    </a>
                  </div>
                </div>
              </p>
              <hr></hr>
              <p class="card-text">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      class="card-img-top addHobbies__image mr-2"
                      src={Bharat}
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-8 ml-5">
                    <span>Bharat Scheerer</span>{" "}
                    <span className="float-right">Cinnamon Candle </span>
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2 mt-2">
                        Add
                      </button>
                    </a>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHobbies;
