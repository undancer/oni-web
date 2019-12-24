import {AppBar, InputBase, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";
import {Search as SearchIcon} from "@material-ui/icons"

let Header: React.FC = () => {
    let classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
