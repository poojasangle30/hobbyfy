import React from "react";
import Header from "./Header";
import "../AddHobbies.css";
import Candle from "../images/candle.png";
import Origami from "../images/origami.png";
import Flower from "../images/flower.png";
import Calligraphy from "../images/calligraphy.png";
import Painting from "../images/painting.png";
import Baking from "../images/baking.png";

import hobbyCardData from "../data/hobbyData";

function AddHobbies() {
  var dataRow1 = hobbyCardData.slice(0, 3);
  var dataRow2 = hobbyCardData.slice(3, 6);
  return (
    <div className="addHobbies">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Hobbies</p>
        </div>
      </div>
      <div className="row  ml-5 mr-5">
        <div className="col-md-2 ">
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
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control addHobbies__searchInput"
              placeholder="Search hobbies"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary addHobbies_search_button"
                type="button">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ml-5 mr-5 mt-5">
        <div className="col-md-9">
          <div className="row remove__scrollbar">
            <div className="col-md-12 mb-5 addHobbies__col_adjustment">
              {dataRow1.map((item) => (
                <div class="card explore__card__style">
                  <img
                    class="card-img-top explore__image"
                    src={item.image}
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      {item.activityName}{" "}
                      <span className="addHobbies__time ">{item.time}</span>
                    </h4>
                    <p class="card-text">{item.desc}</p>
                    <a href="/activityDetail">
                      <button
                        type="button"
                        className="hobbyfy__button_viewDetails">
                        View details
                      </button>
                    </a>
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2">
                        Add
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row remove__scrollbar">
            <div className="col-md-12 mb-5 addHobbies__col_adjustment">
              {dataRow2.map((item) => (
                <div class="card explore__card__style">
                  <img
                    class="card-img-top explore__image"
                    src={item.image}
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      {item.activityName}{" "}
                      <span className="addHobbies__time">{item.time}</span>
                    </h4>
                    <p class="card-text">{item.desc}</p>
                    <a href="/activityDetail">
                      <button
                        type="button"
                        className="hobbyfy__button_viewDetails">
                        View details
                      </button>
                    </a>
                    {/* <a href="/activityDetail" class="btn btn-primary">
                      View details
                    </a> */}
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2">
                        Add
                      </button>
                    </a>
                    {/* <a href="#" class="btn btn-primary ml-5">
                      Add
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card addHobbies_yourHobbies">
            <div class="card-body">
              <h4 class="card-title title__color">Your Hobbies</h4>
              <hr />
              <p class="card-text">
                <span>
                  {" "}
                  <img
                    class="card-img-top addHobbies__image mr-2"
                    src={Flower}
                    alt="Card image"
                  />
                </span>
                Pineapple Candles{" "}
                <span>
                  <a href="/activityDetail">
                    <button
                      type="button"
                      className=" hobbyfy__button_view ml-2">
                      View
                    </button>
                  </a>
                  {/* <a href="#" class="btn btn-primary ml-2">
                    View
                  </a> */}
                </span>
              </p>
              <hr></hr>
              <p class="card-text">
                <span>
                  {" "}
                  <img
                    class="card-img-top addHobbies__image mr-2"
                    src={Flower}
                    alt="Card image"
                  />
                </span>
                Pineapple Candles{" "}
                <span>
                  <a href="/activityDetail">
                    <button
                      type="button"
                      className=" hobbyfy__button_view ml-2">
                      View
                    </button>
                  </a>
                  {/* <a href="#" class="btn btn-outline-warning ml-2"></a> */}
                </span>
              </p>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHobbies;
