import React  from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../Assets/Search icon.svg"
// import PropTypes from "prop-types";
function Search(){
    const handleSubmit = (e)=>{
        e.preventDefault();
    };

    return(
        <form className={styles.wrapper} onSubmit = {handleSubmit}>
            <input className={styles.search} placeholder='search' type="text" required/>
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}
// {placeholder}
// Search.propTypes = {
//     placeholder: PropTypes.string.isRequired
// };
export default Search;

