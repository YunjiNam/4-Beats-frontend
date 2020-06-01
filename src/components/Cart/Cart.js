import React, { Component } from "react";
import CartLists from "./CartLists/CartLists";
import "./Cart.scss";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
    };
  }

  render() {
    return (
      <div className={`Cart ${this.props.showCart ? "" : "cartOpen"}`}>
        <div className="cartProducts">
          <div className="cartHeader">
            <div className="titleLable">Cart</div>
            <div className="colorLabel">Color</div>
            <div className="quantityLabel">Quantity</div>
            <button
              className={`headerClose ${this.props.showCart ? "" : "cartOpen"}`}
              onClick={() => this.props.clickHandler()}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <ul className="cartProductsList">
            <CartLists />
          </ul>
        </div>
        <div className="cartSummary">
          <div className="notice">
            <span>Enjoy free shipping on all products</span>
          </div>
          <div className="items">
            <h5>Subtotal (Tax included)</h5>
            <span>₩ 95,000</span>
          </div>
          <div className="buyBtn">
            <WhiteBorderButton text="paymont" link="/" />
          </div>
        </div>
      </div>
    );
  }
}
