import React from "react";
import Candle from "../images/candle.png";
import Header from "./Header";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "../Sellitems.css";
import { ToastContainer } from "react-toastr";
import { ToastMessageAnimated } from "react-toastr";

function Sellitems() {
  let container;
  return (
    <div className="sellItems">
      <ToastContainer
        ref={(ref) => (container = ref)}
        className="toast-top-right"
      />
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-3 exploreHobbies__title mb-5 mt-5">
          <p>Sell Items</p>
        </div>
      </div>
      <div className="row ml-5 mr-5">
        <div className="col-md-4 ">
          <img src={Candle} className="sellItemsUploadImg" />
        </div>
        <div className="col-md-8 sellItems__margin_bottom">
          <div class="card sellItems__card__style ml-5 mb-5">
            <div className="card-body">
              <div className="row">
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
                  <input
                    type="text"
                    class="form-control discover_input_addTitle"
                    placeholder="Price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              <div className="row mt-5 mb-5">
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
                        <a href="#">Blue</a>
                      </li>
                      <li>
                        <a href="#">Multicolor</a>
                      </li>
                    </ul>
                  </div>
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
              <div className="row">
                <div className="col-md-3">
                  <p>Gallery</p>
                  <AddBoxIcon />
                </div>
                <div className="col-md-4"></div>
              </div>

              <div className="desc mt-2">
                <textarea
                  className="sellItems__prod_desc"
                  placeholder="    Product Description"></textarea>
              </div>
              <div className="post">
                <a href="">
                  <button
                    type="button"
                    className="hobbyfy__button_view ml-2 mt-2"
                    onClick={() =>
                      container.success(
                        `Your activity has been posted successfully `,
                        `Successfull`,
                        {
                          closeButton: true,
                          onCloseClick: true,
                          timeOut: 5000,
                        }
                      )
                    }>
                    Post
                  </button>
                </a>
                {/* <a
                  href="#"
                  class="btn btn-primary ml-2 mt-2 primary"
                  onClick={() =>
                    container.success(
                      `Your activity has been posted successfully `,
                      `Successfull`,
                      {
                        closeButton: true,
                        onCloseClick: true,
                        timeOut: 1000,
                      }
                    )
                  }>
                  Post
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellitems;
