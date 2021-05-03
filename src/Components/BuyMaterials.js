import React from "react";
import Header from "./Header";
import "../BuyMaterials.css";
import CandlePitcher from "../images/candlePitcher.png";
import Flower from "../images/flower.png";
import ShoppingCart from "../images/shoppingCart.png";

import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";

function BuyMaterials() {
  return (
    <div className="buyMaterials">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Buy Items</p>
        </div>
      </div>
      <div className="row ml-5 mr-5">
        <div className="col-md-6 mb-3">
          <div class="card buyMaterials__card__style">
            <img
              class="card-img-top buyMaterials__image"
              src={CandlePitcher}
              alt="Card image"
            />
            <div class="card-body">
              <h4 class="card-title">
                Candle Pitcher <span>Price: € 15</span>
              </h4>
              <div className="row">
                <div className="col-md-4">
                  <div class="dropdown">
                    <button
                      class="hobbyfy__button_selectCategory dropdown-toggle"
                      type="button"
                      data-toggle="dropdown">
                      Select Color
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">White</a>
                      </li>
                      <li>
                        <a href="#">Orange</a>
                      </li>
                      <li>
                        <a href="#">Yellow</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <p>
                    Select Quantity : <AddCircleOutlineRoundedIcon />{" "}
                    <span>
                      <input
                        className="buyMaterials_input_type mr-2"
                        type="number"
                        maxLength="1"
                        value="1"
                      />
                    </span>
                    <RemoveCircleOutlineRoundedIcon />
                    {/* <span></span> */}
                  </p>
                </div>
                <div className="col-md-2">
                  <a href="">
                    <button type="button" className="hobbyfy__button_view ml-2">
                      Add
                    </button>
                  </a>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p>
                    <b>Description</b>
                  </p>
                  <p>
                    These beautiful candles are perfect when you want to freshen
                    your space for guests, to relax, or just because you enjoy
                    the scent. The bold and solid beauty of these pillar candles
                    will add color to your home, business, or special event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card buyMaterials_shoppingCart">
            <div class="card-body">
              <h4 class="card-title title__color">Shopping Cart</h4>
              <hr />
              <p class="card-text text-center">
                <b>Your Cart is Empty</b>
              </p>
              <img
                class="card-img-top buyMaterials__cart_img"
                src={ShoppingCart}
                alt="Card image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyMaterials;
