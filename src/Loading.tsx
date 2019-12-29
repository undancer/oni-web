import React from "react";
import {CircularProgress, Container, createStyles, Grid, makeStyles, Theme} from "@material-ui/core";

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
