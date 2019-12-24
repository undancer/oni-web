import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from "react-intl";
import * as serviceWorker from './serviceWorker';
import languages from "./config/strings";

let Root = () => {
    let messages: any = languages();
    let locale = navigator.language;

    // @ts-ignore
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <App/>
        </IntlProvider>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
