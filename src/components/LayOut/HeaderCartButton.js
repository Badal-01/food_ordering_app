import React, { Fragment, useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.item.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <i className="fas fa-shopping-cart"></i>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems} </span>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
