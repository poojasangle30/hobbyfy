import React from "react";
import Header from "./Header";
import Candle from "../images/candle.png";
import Origami from "../images/origami.png";
import Flower from "../images/flower.png";
import Calligraphy from "../images/calligraphy.png";
import Painting from "../images/painting.png";
import Baking from "../images/baking.png";

import hobbyCardData from "../data/hobbyData";

import "../ExploreHobbies.css";

function ExploreHobbies() {
  var dataRow1 = hobbyCardData.slice(0, 4);
  var dataRow2 = hobbyCardData.slice(4, 8);
  return (
    <div className="exploreHobbies">
      <Header />
      <div className="row remove__scrollbar ml-2">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Explore Hobbies</p>
        </div>
      </div>
      <div className="row  ml-2">
        <div className="col-md-2 ">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
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
        <div className="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control addHobbies__searchInput"
              placeholder="Search hobbies"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-warning signup_button_border">
            Add Hobbies
          </button>
        </div>
      </div>
      <div className="row remove__scrollbar mt-5 mb-5 ml-1">
        <div className="col-md-12 mb-5 explore__col_adjustment">
          {dataRow1.map((item) => (
            <div class="card explore__card__style">
              <img
                class="card-img-top explore__image"
                src={item.image}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">
                  {item.activityName} <span>{item.time}</span>
                </h4>
                <p class="card-text">Create super easy and cute candles</p>
                <a href="#" class="btn btn-primary">
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row remove__scrollbar mt-5 mb-5 ml-2">
        <div className="col-md-12 mb-5 explore__col_adjustment">
          {dataRow2.map((item) => (
            <div class="card explore__card__style">
              <img
                class="card-img-top explore__image"
                src={item.image}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">
                  {item.activityName} <span>{item.time}</span>
                </h4>
                <p class="card-text">Create super easy and cute candles</p>
                <a href="#" class="btn btn-primary">
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreHobbies;
