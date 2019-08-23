import React from 'react';
import classes from './SearchFooter.module.css';

const SearchFooter = (props) => {

    return(
        <div className={classes.SearchFooter}>
            <h1 className={classes.Header}>{props.header}</h1>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type={"text"} className={classes.Search} placeholder={'Search by Category'}/>
        </div>

    );

};

export default SearchFooter;
