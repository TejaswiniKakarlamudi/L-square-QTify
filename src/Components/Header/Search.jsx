import React  from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../Assets/Search icon.svg"

function Search({placeholder}){
    const handleSubmit = (e)=>{
        e.preventDefault();
    };

    return(
        <form className={styles.wrapper} onSubmit = {handleSubmit}>
            <input className={styles.search} placeholder={placeholder} type="text"required/>
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}

export default Search;

