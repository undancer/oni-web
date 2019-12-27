import React from "react";
import {CircularProgress} from "@material-ui/core";

let Loading: React.FC = () => {
    console.log("loading...");
    return (
        <div>
            loading...
            <CircularProgress/>
        </div>
    );
};

export default Loading;
