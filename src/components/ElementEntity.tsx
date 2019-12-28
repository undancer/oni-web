import React, {MouseEvent} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import EntityImage from "./EntityImage";
import image from "../data/image";
import EntityText from "./EntityText";

const useStyles = makeStyles((theme: Theme) =>
    createStyles(
        {
            a: {
                color: theme.palette.text.primary,
                textDecoration: "none",
            },
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

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        history.push('/details/' + name);
    };

    return (
        <a href={'/details/' + name} onClick={handleClick} className={classes.a}>
            <Paper className={classes.paper}>
                <EntityImage size={8} src={src} alt={name}/>
                <EntityText
                    id={`${name}.name`.toLowerCase()}
                    variant="body2"
                    display="block"
                    gutterBottom
                />
            </Paper>
        </a>
    )
};
export default ElementEntity;
