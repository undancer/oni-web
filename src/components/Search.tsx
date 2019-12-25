import React from "react";
import {Search as SearchIcon} from "@material-ui/icons";
import {InputBase} from "@material-ui/core";
import useStyles from "../useStyles";

let Search: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    );
};

export default Search;
