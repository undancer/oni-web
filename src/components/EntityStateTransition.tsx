import React, {Fragment, MouseEvent} from "react";
import image from "../assets/data/image";
import {useIntl} from "react-intl";
import {useHistory} from "react-router-dom";
import EntityImage from "./EntityImage";
import EntityText from "./EntityText";
import {kelvinToCelsius} from "../utils/temperature";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

interface EntityStateTransitionProps {
    data?: EntityStateTransitionDataProps
}

interface EntityStateTransitionDataProps {
    name: string
    temp?: number
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    a: {
        color: theme.palette.text.primary,
        textDecoration: "none",
    },
    paper: () => ({
        width: theme.spacing(6),
        height: theme.spacing(6 + 1),
        padding: theme.spacing(0, 1),
        // display: 'flex',
        '& > a': {
            textDecoration: 'none',
        },
    }),

}));

const EntityStateTransition: React.FC<EntityStateTransitionProps | any> = (props) => {
    if (props.data) {
        const {name, temp} = props.data;
        const src = image(name);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let intl = useIntl();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let history = useHistory();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const classes = useStyles();
        let celsius = intl.formatMessage({id: 'STRINGS.UI.UNITSUFFIXES.TEMPERATURE.CELSIUS'});

        let tempPart = null;

        if (temp) {
            let value = kelvinToCelsius(temp).toFixed(2) + celsius;
            tempPart = (
                <EntityText variant={"caption"}
                            value={value}
                />
            )
        }

        const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            history.push('/details/' + name);
        };

        return (
            <Fragment>
                <a href={'/details/' + name} onClick={handleClick} className={classes.a}>
                    <Paper className={classes.paper} elevation={0}>
                        <EntityImage src={src} alt={name} size={4}/>
                        {tempPart}
                    </Paper>
                </a>
            </Fragment>
        )
    }
    return null;
};

export default EntityStateTransition;
