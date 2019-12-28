import React from 'react';
import Header from "./components/Header";
import EntityDetail from "./components/detail/EntityDetail";
import Content from "./components/Content";
import {CssBaseline, jssPreset, StylesProvider} from "@material-ui/core";
import Footer from "./components/Footer";
import useStyles from "./useStyles";
import {Route, Switch} from "react-router";
import Readme from "./components/Readme";
import {BrowserRouter as Router} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {strings} from "./assets/data/strings";
import {create} from "jss";

const App: React.FC = () => {
    let classes = useStyles();

    let locale = navigator.language;
    let messages: any = strings(locale);

    const jss = create({
        plugins: [...jssPreset().plugins],
    });

    return (
        <IntlProvider locale={locale} messages={messages}>
            <StylesProvider jss={jss}>
                <Router>
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
                </Router>
            </StylesProvider>
        </IntlProvider>
    );
};

export default App;
