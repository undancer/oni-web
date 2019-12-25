import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "../useStyles";
//import Search from "./Search";

let Header: React.FC = () => {
    let classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography>
                {/*<Search/>*/}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
