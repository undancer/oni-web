import React, {Fragment} from "react";
import {Card, CardContent, createStyles, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import image from "../../assets/data/image";

const useStyles = makeStyles(
    (theme: Theme) => createStyles<string, {}>(
        {
            a: {},
            paper: {
                margin: theme.spacing(2, 2, 0, 2),
            },
            card: {
                // minWidth: 275,
                // minHeight: 300,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        }
    )
);

interface DetailProps {

}

const Detail: React.FC<DetailProps> = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    let {name} = useParams();
    name = name || "";

    const src = image(name);

    return (
        <Fragment>
            <Paper className={classes.paper}>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={src}/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Fragment>
    )
};
export default Detail;
