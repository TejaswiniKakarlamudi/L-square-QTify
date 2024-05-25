import React from "react";
import styles from "./Button.module.css";
function Button({children}) {

    const handleClick = () => {
        console.log("clicked button");
    };

    return (
        <button className={styles.button} onClick={handleClick}>{children}</button>
    );
}

export default Button;