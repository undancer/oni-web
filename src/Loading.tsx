import React from "react";
import {CircularProgress, Container, createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            grid: {
                minHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }
        }
    )
);

let Loading: React.FC = () => {
    console.log("loading...");
    const classes = useStyles();
    nProgress.configure({
        showSpinner: false
    });

    React.useEffect(() => {
        nProgress.start();
        return () => {
            nProgress.done(true);
        }
    }, []);

    // return (<Skeleton variant="circle" width={210} height={118}/>);

    return (
        <Container>
            <Grid container direction={"column"} className={classes.grid}>
                <Grid item>
                    <CircularProgress/>
                </Grid>
                <Grid item>
                    loading...
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loading;
