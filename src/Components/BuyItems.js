import React from "react";
import Header from "./Header";
import Candle from "../images/candle.png";
import Origami from "../images/origami.png";
import Flower from "../images/flower.png";
import Calligraphy from "../images/calligraphy.png";
import Painting from "../images/painting.png";
import Baking from "../images/baking.png";
import "../BuyItems.css";

import buyItemsCardData from "../data/BuyItemsData";

function BuyItems() {
  var dataRow1 = buyItemsCardData.slice(0, 4);
  var dataRow2 = buyItemsCardData.slice(4, 8);
  return (
    <div className="buyItems">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5 mr-2">
          <p>Buy Items</p>
        </div>
      </div>
      <div className="row ml-5 mr-5">
        <div className="col-md-12 buyItems__col_adjustment">
          {dataRow1.map((item) => (
            <div class="card buyItems_card_style">
              <img
                class="card-img-top explore__image"
                src={item.image}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">
                  {item.itemName}{" "}
                  <span className="addHobbies__time">{item.price}</span>
                </h4>
                {/* <p class="card-text">Create super easy and cute candles</p> */}
                <a href="/buyItemDetails">
                  <button type="button" className="hobbyfy__button_viewDetails">
                    View details
                  </button>
                </a>
                <a href="">
                  <button type="button" className="hobbyfy__button_view ml-5">
                    Buy
                  </button>
                </a>
                {/* <a href="#" class="btn btn-primary ml-5">
                  Buy
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row mt-5 ml-5 mr-5 ">
        <div className="col-md-12 buyItems__col_adjustment mb-5">
          {dataRow2.map((item) => (
            <div class="card buyItems_card_style">
              <img
                class="card-img-top explore__image"
                src={item.image}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">
                  {item.itemName} <span className="addHobbies__time">5€</span>
                </h4>
                <a href="/buyItemDetails">
                  <button type="button" className="hobbyfy__button_viewDetails">
                    View details
                  </button>
                </a>
                {/* <a href="/buyItemDetails" class="btn btn-primary">
                  View details
                </a> */}
                <a href="">
                  <button type="button" className="hobbyfy__button_view ml-5">
                    Buy
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyItems;
