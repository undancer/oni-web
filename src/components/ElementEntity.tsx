import React, {MouseEvent} from "react";
import {createStyles, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import {FormattedHTMLMessage} from "react-intl";
import {useHistory} from "react-router-dom";
import EntityImage from "./EntityImage";
import image from "../data/image";

const useStyles = makeStyles((theme: Theme) =>
    createStyles(
        {
            paper: {
                width: theme.spacing(8 + 1 * 2),
                height: theme.spacing(15),
                padding: theme.spacing(1),
                margin: theme.spacing(1 / 2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
                wordBreak: 'break-all'
            },
        }
    )
);


interface ElementProps {
    name: string,
}

let ElementEntity: React.FC<ElementProps> = (props: ElementProps) => {

    const classes = useStyles();
    const {name} = props;
    const history = useHistory();

    const src = image(name);

    const handleClick = (event: MouseEvent) => {
        history.push("/details/" + name);
    };

    return (
        <>
            <Paper className={classes.paper} onClick={handleClick}>
                <EntityImage size={8} src={src} alt={name}/>
                <Typography variant="body2" display="block" gutterBottom>
                    <FormattedHTMLMessage id={`STRINGS.ELEMENTS.${name}.NAME`.toUpperCase()}/>
                </Typography>
            </Paper>
        </>
    )
};
export default ElementEntity;
