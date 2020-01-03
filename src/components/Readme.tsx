import React, {Fragment} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
);


let Readme: React.FC = () => {

    let classes = useStyles();

    return (
        <Fragment>
            README
        </Fragment>
    )
};
export default Readme;
