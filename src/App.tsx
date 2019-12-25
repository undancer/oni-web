import React from 'react';
import Header from "./components/Header";
import EntityDetail from "./components/EntityDetail";
import Content from "./components/Content";
import {CssBaseline} from "@material-ui/core";
import Footer from "./components/Footer";
import useStyles from "./useStyles";
import {Route, Switch} from "react-router";
import Readme from "./components/Readme";

const App: React.FC = () => {
    let classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Content>
                <Footer/>
            </Content>
            <Switch>
                <Route exact path="/">
                    <Readme/>
                </Route>
                <Route path="/details/:name">
                    <EntityDetail/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
