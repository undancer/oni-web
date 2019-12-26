import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import("./App"));

let Loading: React.FC = () => {
    console.log("loading...");
    return (<div>loading...</div>)
};

let Root = () => (
    <Suspense fallback={<Loading/>}>
        <App/>
    </Suspense>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
