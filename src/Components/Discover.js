import React from "react";
import Header from "./Header";
import "../Discover.css";
import Candle from "../images/candle.png";
import User from "../images/user.png";
import Flower from "../images/flower.png";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import discoverCardData from "../data/discoverData";

function Discover() {
  return (
    <div className="discover">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-1 exploreHobbies__title mb-5 mt-5">
          <p>Discover</p>
        </div>
        <div className="col-md-4">
          <div class="input-group mb-3 mt-5">
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

      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-6 mb-3">
          {discoverCardData.map((item) => (
            <div class="card discover__card__style mb-5">
              <div class="row no-gutters">
                <div class="col-auto">
                  <img src={item.image} class="img-fluid discover_img" alt="" />
                </div>
                <div class="col ml-2">
                  <div class="card-block px-2">
                    <h4 class="card-title">
                      <img
                        src={item.userImg}
                        class="img-fluid discover__user_img ml-2 mr-2"
                        alt=""
                      />
                      {item.userName}{" "}
                    </h4>
                    <p class="card-text">
                      {item.category} - {item.activityName}{" "}
                    </p>
                    <p>{item.desc}</p>
                    <p>
                      <FavoriteBorderRoundedIcon /> <ModeCommentOutlinedIcon />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <div class="card discover__createPost">
            <div class="card-body">
              <h4 class="card-title title__color">Create Post</h4>
              <hr />
              <p class="card-text">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      class="card-img-top addHobbies__image mr-2"
                      src={User}
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      class="form-control discover_input_addTitle"
                      placeholder="Add a title"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="col-md-4">
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
                </div>
                <div className="row mb-3 ">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <textarea
                      className="discover__textArea mb-4"
                      placeholder="   What would you like to share ?"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-3">
                    <p>Upload Photo :</p>
                    <span> </span>
                  </div>
                  <div className="col-md-4">
                    <input type="file" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-2">
                    <a href="">
                      <button
                        type="button"
                        className="hobbyfy__button_view ml-2 mt-2">
                        Post
                      </button>
                    </a>
                    {/* <a href="#" class="btn btn-primary ml-2 mt-2">
                      Post
                    </a> */}
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

export default Discover;
