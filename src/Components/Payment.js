import React from "react";
import "../Payment.css";
import PaymentImg from "../images/payment.png";
import Header from "./Header";

function Payment() {
  return (
    <div className="payment">
      <Header />
      <div className="row  margin_top_bottom ml-5 mr-5">
        <div className="col-md-6 text-center">
          <img className="image_payment " src={PaymentImg} />
        </div>
        <div className="col-md-6 payment__margin_bottom">
          <div className="card payment_card__style">
            <h4 className="card-title text-center card_title_style">
              Payment Details
            </h4>
            <div className="card-body text-center">
              <div className="form-group text-center">
                <input
                  type="email"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Cardholder Name"
                />
                <input
                  type="password"
                  name="name"
                  className="form-control signup_margin_top_bottom"
                  id="name"
                  placeholder="Card Number"
                />
                <input
                  type="date"
                  name="name"
                  className="form-control signup_margin_top_bottom payment_exp_date"
                  id="name"
                  placeholder="Expiry Date"
                />{" "}
                <span>
                  {" "}
                  <input
                    type="number"
                    name="name"
                    className="form-control signup_margin_top_bottom payment_exp_date"
                    id="name"
                    placeholder="CVV"
                  />
                </span>
                <p>Payment Amount: €15</p>
              </div>
              <a href="">
                <button type="button" className="hobbyfy__button_view">
                  Pay
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
