/* eslint-disable no-unused-vars */
import Card from "../Card/Card.jsx";
import styles from "./FeaturedProducts.module.scss";
import React from "react";



const FeaturedProducts = () => {

   
    return(
      <div className={styles["featured-products"]}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    )
}

export default FeaturedProducts