import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from "react-intl";
import * as serviceWorker from './serviceWorker';
import languages from "./config/strings";
import {BrowserRouter as Router,} from "react-router-dom";
import {jssPreset, StylesProvider} from '@material-ui/core';
import {create} from 'jss';

let Root = () => {
    let messages: any = languages();
    let locale = navigator.language;

    const jss = create({
        plugins: [...jssPreset().plugins],
    });

    return (
        <Suspense fallback={() => {
            console.log("fallback");
            return (
                <div>Loading...</div>
            );
        }
        }>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <StylesProvider jss={jss}>
                    <Router>
                        <App/>
                    </Router>
                </StylesProvider>
            </IntlProvider>
        </Suspense>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
