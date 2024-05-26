import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";
function Navbar(){

    return (
        <nav className={styles.navbar}> 
            <Logo/>
            <Search/>
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;