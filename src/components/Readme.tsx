import React from "react";
import {AppBar, Drawer, Toolbar, Typography} from "@material-ui/core";
import useStyles from "../useStyles";

let Readme: React.FC = () => {

    let classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="right"
        >
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        README
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*<div className={classes.toolbar}/>*/}
            {/*<Divider/>*/}
        </Drawer>
    )
};
export default Readme;
