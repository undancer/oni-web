import React, {Fragment} from "react";
import {Card, createStyles, makeStyles, Theme} from "@material-ui/core";
import EntityText from "../../components/EntityText";
import {useHistory} from "react-router-dom"
import image from "../../assets/data/image";

const useStyles = makeStyles(
    (theme: Theme) => createStyles<string, { size: number }>(
        {
            a: {
                color: theme.palette.text.primary,
                textDecoration: "none",
            },
            card: ({size}) => ({
                width: theme.spacing(size + 2),
                margin: theme.spacing(1 / 2),
                overflow: "inherit",
            }),
            image: ({size}) => ({
                width: theme.spacing(size + 2),
                height: theme.spacing(size + 2),
                maxWidth: theme.spacing(size),
                maxHeight: theme.spacing(size),
                objectFit: "scale-down",
                margin: theme.spacing(1),
            }),
            text: ({size}) => ({
                width: theme.spacing(size),
                height: theme.spacing(size * 2 / 4),
                margin: theme.spacing(0, 1, 1, 1),
                textAlign: "center",
                display: "block",
                fontSize: "0.75rem"
            }),
        }
    )
);

interface EntityProps {
    name: string
    text?: string
    size?: number
    elevation?: number
    href: string
}

const Entity: React.FC<EntityProps> = (props) => {
    let {name, text, size, href, elevation, ...others} = props;
    size = size || 1;
    const classes = useStyles({size});
    const history = useHistory();

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        if (event.currentTarget) {
            event.preventDefault();
            const {pathname, search} = event.currentTarget;
            history.push({pathname, search});
        }
    };

    const src = image(name);

    return (
        <Fragment>
            <Card elevation={elevation} className={classes.card}>
                <a href={href} onClick={handleClick} className={classes.a}>
                    <img src={src} alt={name} className={classes.image} {...others}/>
                    {
                        (text == null) && (<EntityText id={`${name}.name`.toLowerCase()}
                                                       variant={"body2"}
                                                       className={classes.text}
                        />)
                    }
                    {
                        (text != null) && (<EntityText value={text}
                                                       variant={"caption"}
                                                       className={classes.text}
                        />)
                    }
                </a>
            </Card>
        </Fragment>
    )
};
export default Entity;
