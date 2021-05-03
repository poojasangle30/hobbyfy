import React from "react";
import Header from "./Header";
import "../ActivityDetail.css";
import Candle from "../images/candle.png";

function ActivityDetail() {
  return (
    <div className="activityDetail">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Activity Detail</p>
        </div>
      </div>
      <div className="row ml-2 remove__scrollbar ml-5 mr-5">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4 mr-2">
              <img
                class="card-img-top explore__image"
                src={Candle}
                alt="Card image"
              />
            </div>
            <div className="col-md-5">
              <div class="card activity_detail__card">
                <div class="card-body">
                  <h4 class="card-title">
                    <span className="font-weight-bold font__size">
                      Pineapple Candles
                    </span>
                    <span className="ml-5 actDetail_title__color">
                      Candle making
                    </span>{" "}
                    <span className="time">15 mins</span>
                  </h4>
                  <p class="card-text ">
                    Making candles at home is so satisfyingly simple. With this
                    activity create super easy and cute candles.
                  </p>
                  <h4 class="card-title font-weight-bold font__size">
                    Materials Required
                  </h4>
                  <p class="card-text">
                    Soy wax flakes, candle wax pitcher, candle wicks, 6 oz.
                    glass jars, candle wax colorant, pineapple fragrance oil,
                    black paint, green paint, paint brush, hot glue gun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 ">
            {/* <div className=" exploreHobbies__title mb-5 mt-5">
              <p>Activity Detail</p>
            </div> */}
            <div className="col-md-10 ">
              <div class="card activity_process_card">
                <div class="card-body">
                  <p className=" exploreHobbies__title ">Activity Process</p>
                  <h4 class="card-title">
                    <span className="font-weight-bold font__size">Step 1:</span>
                  </h4>
                  <p class="card-text ">
                    Use a drop of hot glue to attach the candle wicks to the
                    center of the bottom of the glass jars.
                  </p>
                  <h4 class="card-title font-weight-bold font__size">
                    Step 2:
                  </h4>
                  <p class="card-text">
                    In the candle pitcher, over low-medium heat, melt four cups
                    of soy wax flakes, stirring frequently.
                  </p>
                  <h4 class="card-title font-weight-bold font__size">
                    Step 3:
                  </h4>
                  <p class="card-text">
                    Add 3 blocks of yellow wax colorant along with 20-30 drops
                    of pineapple fragrance oil.
                  </p>
                  <h4 class="card-title font-weight-bold font__size">
                    Step 4:
                  </h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div class="card buy_items_card">
            <div class="card-body">
              <h4 class="card-title">
                <span className="font-weight-bold font__size actDetail_color">
                  Buy Items
                </span>
              </h4>
              <p class="card-text ">
                <div class="input-group mb-5 mt-5">
                  <input
                    type="text"
                    class="form-control addHobbies__searchInput"
                    placeholder="Search Items"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </div>
                </div>
              </p>

              <p class="card-text">
                <span>
                  {" "}
                  <img
                    class="card-img-top addHobbies__image mr-2"
                    src={Candle}
                    alt="Card image"
                  />
                </span>
                <span>Candle Pitcher</span>
                <span>
                  <span className="ml-5">
                    <b>€ 5</b>
                  </span>
                  <a href="/buyMaterials">
                    <button type="button" className="hobbyfy__button_view ml-5">
                      Buy
                    </button>
                  </a>
                  {/* <a href="/buyMaterials" class="btn btn-primary ml-5">
                    Buy
                  </a> */}
                </span>
              </p>
              <hr></hr>
              <p class="card-text">
                <span>
                  {" "}
                  <img
                    class="card-img-top addHobbies__image mr-2"
                    src={Candle}
                    alt="Card image"
                  />
                </span>
                Candle Wicks{" "}
                <span className="ml-5">
                  <b>€ 5</b>
                </span>
                <span>
                  <a href="/buyMaterials">
                    <button type="button" className="hobbyfy__button_view ml-5">
                      Buy
                    </button>
                  </a>
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

export default ActivityDetail;
