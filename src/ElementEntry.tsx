import React, {Fragment, MouseEvent} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {FormattedHTMLMessage} from "react-intl";
import useStyles from "./useStyles";
import e from "./reducers";
import {clickEntry} from "./actions";

interface ElementProps {
    name: string,
    src: any,
}

let ElementEntry: React.FC<ElementProps> = (props: ElementProps) => {

    const classes = useStyles();
    const {name, src} = props;
    const initialState: any = {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = React.useReducer(e.elementReducer, initialState);

    const handleClick = (event: MouseEvent) => clickEntry(name)(dispatch);

    return (
        <Fragment>
            <Grid item>
                <Paper className={classes.paper} onClick={handleClick}>
                    <img style={{maxWidth: 64}} src={src} alt={name}/>
                    <Typography variant="caption" display="block" gutterBottom>
                        <FormattedHTMLMessage id={`STRINGS.ELEMENTS.${name}.NAME`.toUpperCase()}/>
                    </Typography>
                </Paper>
            </Grid>
        </Fragment>
    )
};
export default ElementEntry;
