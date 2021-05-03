import React from "react";
import Header from "./Header";
import Brush from "../images/makeupbrush.jpg";
import PaintBrush from "../images/paint_brush.jpg";

import "../Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      {/* <div class="carousel-item">
        <img src={Brush} alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Header />

            <img
              class="d-block w-100 carousel__image"
              src={Brush}
              alt="First slide"
            />
          </div>
          {/* <div class="carousel-item">
            <img class="d-block w-100" src={PaintBrush} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Brush} alt="Third slide" />
          </div> */}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
