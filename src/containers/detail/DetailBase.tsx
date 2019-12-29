import React, {Fragment} from "react";
import image from "../../assets/data/image";
import {Card, CardContent, createStyles, Grid, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import {getString} from "../../assets/data/strings";
import {fix} from "../../utils/strings";
import Helmet from "react-helmet";

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            paper: {
                margin: theme.spacing(2, 2, 0, 2),
            },
            card: {
                // margin: theme.spacing(2)
            },
            image: {
                width: theme.spacing(16),
                height: theme.spacing(16),
                objectFit: "scale-down",
            },
            text: {
                fontSize: "0.8rem",
            }
        }
    )
);

interface DetailBaseProps {
    name: string
}

const DetailBase: React.FC<DetailBaseProps> = (props) => {
    const classes = useStyles();

    const {name} = props;
    const src = image(name);

    let title: string = fix(getString((name + '.NAME').toLowerCase()));

    let effect: string = (getString((name + '.EFFECT').toLowerCase()));
    if (effect) {
        effect = effect.split('\n')
            .filter(line => line && line.trim() !== '')
            .join("<br />")
        effect = fix(effect);

    }

    let desc: string = (getString((name + '.DESC').toLowerCase()));
    if (desc) {
        desc = desc.split('\n')
            .filter(line => line && line.trim() !== '')
            .join("<br />")
        desc = fix(desc);
    }

    let text = [effect, desc]
        .filter(line => line && line.trim() !== '')
        .join("<br />");

    return (
        <Fragment>
            <Helmet>
                <title> ONI.WIKI | {title}</title>
            </Helmet>
            <Paper elevation={0} className={classes.paper}>
                <Card elevation={0} className={classes.card}>
                    <CardContent>
                        <Grid container alignItems={"center"} justify={"center"}>
                            <img src={src} className={classes.image}/>
                        </Grid>
                        <Typography variant={"subtitle1"}
                            // gutterBottom
                                    dangerouslySetInnerHTML={{__html: title}}/>
                        <Typography variant={"body1"}
                                    className={classes.text}
                            // gutterBottom
                                    dangerouslySetInnerHTML={{__html: text}}/>
                    </CardContent>
                </Card>
            </Paper>
        </Fragment>
    );
};
export default DetailBase;
