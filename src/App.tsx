import React from 'react';
import {CssBaseline} from "@material-ui/core";
import useStyles from "./useStyles";
import Header from "./Header";
import Detail from "./Detail";
import Content from "./Content";

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Content/>
            <Detail/>
        </div>
    );
};

export default App;
