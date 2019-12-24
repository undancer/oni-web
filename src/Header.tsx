import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";

let Header: React.FC = () => {
    let classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Permanent drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
