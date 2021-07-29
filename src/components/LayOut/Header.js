import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../Assests/meal2.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOOD MARKET</h1>
        <div className={classes.btn}>
          <HeaderCartButton onClick={props.onShowCard} />
        </div>
      </header>
      <main>
        <img className={classes["main-img"]} src={mealsImage} alt="Meals" />
      </main>
    </Fragment>
  );
};
export default Header;
