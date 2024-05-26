import React from "react";
import styles from "./Logo.module.css";
import logo from "../../Assets/Group 1.png";

function Logo (){

    return (
        <img  src = {logo} alt = "logo" className={styles.logocontainer}/>
    )
}

export default Logo;