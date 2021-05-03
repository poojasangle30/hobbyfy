import React from "react";
import Header from "./Header";
import ExploreHobbies from "./ExploreHobbies";
import "../LandingPage.css";
import FreeTime from "../images/freeTime.png";
import ExploreHobbiesImg from "../images/exploreHobbies.png";
import LearnHobby from "../images/learnHobby.png";

function LandingPage() {
  return (
    <div className="">
      <div className="landingPage">
        <Header />
        <div className="center content__center margin-top-bottom-25">
          <p>Good Things for Good Moments</p>
        </div>
        <div class="row remove__scrollbar margin__top">
          <div class="col-md-4 margin__bottom-bottom">
            <img
              className="image__landingPage"
              data-aos="fade-right"
              src={FreeTime}
            />
            <p className="content_bottom">Having free time ?</p>
          </div>
          <div class="col-md-4 margin__bottom-bottom">
            <img className="image__landingPage" src={ExploreHobbiesImg} />
            <p className="content_bottom">Discover Hobbies</p>
          </div>
          <div class="col-md-4 margin__bottom-bottom">
            <img className="image__landingPage" src={LearnHobby} />
            <p className="content_bottom">Learn & own a hobby</p>
          </div>
        </div>
        <div class="row remove__scrollbar mt-5">
          <div class="col-md-4 margin__bottom-bottom">
            <p className="quote_bottom">Hobby is the </p>
            <p className="quote_bottom">joy of time</p>
            <a href="/addHobbies">
              <button type="button" className="hobbyfy__button_viewDetails">
                Explore
              </button>
            </a>

            {/* <img className="image__landingPage" src={Speed} /> */}
          </div>
          <div class="col-md-4 margin__bottom-quote">
            <p className="quote_bottom">Hobby is full</p>
            <p className="quote_bottom">of life skills</p>
            <a href="/discover">
              <button type="button" className="hobbyfy__button_viewDetails ">
                Discover
              </button>
            </a>
            {/* <img className="image__landingPage" src={Connection} /> */}
          </div>
          <div class="col-md-4 margin__bottom-bottom">
            <p className="quote_bottom">Buy handmade,</p>
            <p className="quote_bottom">Sell handmade</p>
            <a href="/buyItems">
              <button type="button" className="hobbyfy__button_viewDetails">
                Shop
              </button>
            </a>
            {/* <img className="image__landingPage" src={Time} /> */}
          </div>
        </div>
      </div>
      {/* <ExploreHobbies /> */}
    </div>
  );
}

export default LandingPage;
