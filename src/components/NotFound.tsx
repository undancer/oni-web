import React, {Fragment} from "react";
import {Container, createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import notFound from "../assets/images/icons/outhouseMessage.png";

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            grid: {
                minHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
            },
        }
    )
);
const NotFound: React.FC = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Container style={{width: "1024px"}}>
                <Grid container className={classes.grid}>
                    <img src={notFound}/>
                </Grid>
            </Container>
        </Fragment>
    )
};
export default NotFound;
