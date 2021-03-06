import React, {Fragment, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Loading from "./Loading";

const App = lazy(() => import("./App"));

let Root = () => (
    <Fragment>
        <Suspense fallback={<Loading/>}>
            <App/>
        </Suspense>
    </Fragment>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
