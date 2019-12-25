import React, {Fragment, MouseEvent} from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import {FormattedHTMLMessage} from "react-intl";
import e from "./reducers";
import {clickEntry} from "./actions";
import {useHistory} from "react-router-dom";
import useStyles from "./useStyles";


interface ElementProps {
    name: string,
    src: any,
}

let ElementEntity: React.FC<ElementProps> = (props: ElementProps) => {

    const classes = useStyles();
    const {name, src} = props;
    const initialState: any = {};
    const history = useHistory();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = React.useReducer(e.elementReducer, initialState);

    const handleClick = (event: MouseEvent) => {
        history.push("/d/" + name);
        clickEntry(name)(dispatch);
    };

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
export default ElementEntity;
