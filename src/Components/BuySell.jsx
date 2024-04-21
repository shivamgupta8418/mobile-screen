import React from "react";
import BTC from "./BTC";
import styles from "./BuySell.module.css";

const BuySell = () => {
  return (
    <div className={styles.parent}>
      <BTC text="Buy" color="blue" />
      <BTC text="Sell" color="pink" />
    </div>
  );
};

export default BuySell;
