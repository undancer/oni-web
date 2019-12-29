import React, {Fragment} from "react";
import {createStyles, Grid, makeStyles, Paper, Theme, Typography} from "@material-ui/core";


const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            paper: {
                margin: theme.spacing(2, 2, 0, 2),
            },
            card: {
                // margin: theme.spacing(2)
            },
            title: {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 4,

            }
        }
    )
);

interface DetailPanelProps {
    title?: string
    type?: string
    value?: string
    elevation?: number
}

const DetailPanel: React.FC<DetailPanelProps> = (props) => {
    const classes = useStyles();
    const {title, type, value, elevation, children, ...others} = props;

    if (type && value) {
        if (type !== value) {
            return null;
        }
    }

    return (
        <Fragment>
            <Paper elevation={elevation} className={classes.paper}>
                <Grid container>
                    {
                        title && (
                            <Grid item container xs={12} justify={"center"} className={classes.title}>
                                <Typography variant={"subtitle2"}>{title}</Typography>
                            </Grid>
                        )
                    }
                    <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                        {children}
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
};
export default DetailPanel;
