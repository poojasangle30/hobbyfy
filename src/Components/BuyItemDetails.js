import React from "react";
import Header from "./Header";
import "../BuyItemDetails.css";
import OrigamiFlowers from "../images/OrigamiFlowers.jpg";
import Flower from "../images/flower.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShoppingCart from "../images/shoppingCart.png";

import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";

function BuyItemDetails() {
  return (
    <div className="buyItemDetails">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Item Details</p>
        </div>
      </div>
      <div className="row ml-5 mr-5">
        <div className="col-md-6 mb-3">
          <div class="card buyItemDetails__card__style">
            <img
              class="card-img-top buyItemDetails__image"
              src={OrigamiFlowers}
              alt="Card image"
            />
            <div class="card-body">
              <h4 class="card-title">
                Origami Flowers <span>Price: € 15</span>
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
                        <a href="#">Multicolor</a>
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
                        className="buyItemDetails_input_type mr-2"
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
                  {/* <a href="#" class="btn btn-primary ml-2">
                    Add
                  </a> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p>
                    <b>Description</b>
                  </p>
                  <p>
                    This traditional origami flower is unique in that it has
                    eight petals. These origami flowers have little stems at the
                    back and would make a great flower for a man's shirt at a
                    wedding or dance.
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
        {/* <div className="col-md-6">
          <div class="card buyItemDetails_shoppingCart">
            <div class="card-body">
              <h4 class="card-title title__color">Shopping Cart</h4>
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
                  <a href="#" class="btn btn-primary ml-2">
                    View
                  </a>
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
                  <a href="#" class="btn btn-primary ml-2">
                    View
                  </a>
                </span>
              </p>
              <hr></hr>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BuyItemDetails;
