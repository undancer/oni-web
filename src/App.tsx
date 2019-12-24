import React from 'react';
import Header from "./Header";
import Detail from "./Detail";
import Content from "./Content";
import {CssBaseline} from "@material-ui/core";
import Footer from "./Footer";
import useStyles from "./useStyles";

const App: React.FC = () => {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Content>
                <Footer/>
            </Content>
            <Detail/>
        </div>
    );
};

export default App;
