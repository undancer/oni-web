import React from "react";
import {createStyles, Grid, makeStyles, Theme, Typography,} from "@material-ui/core";
import ElementEntity from "./ElementEntity";
import entities from "../data/elements.json";
import image from "../data/image";


let useStyles = makeStyles((theme: Theme) => createStyles({
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2),
        },
    })
);

let Content: React.FC = (props: any) => {
    const classes = useStyles();
    const version = process.env.REACT_APP_VERSION;

    // const handleClick1: MouseEventHandler<any> = (event) => {
    //     event.defaultPrevented = false;
    // };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>

            {/*<Breadcrumbs aria-label="breadcrumb">*/}
            {/*    <Link color="inherit" href="/" onClick={handleClick1}>*/}
            {/*        Material-UI*/}
            {/*    </Link>*/}
            {/*    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick1}>*/}
            {/*        Core*/}
            {/*    </Link>*/}
            {/*    <Typography color="textPrimary">Breadcrumb</Typography>*/}
            {/*</Breadcrumbs>*/}

            {/*<Toolbar></Toolbar>*/}

            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
                spacing={1}
            >
                <Typography variant={"body2"}>
                    version: {version}
                </Typography>
            </Grid>

            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={1}
            >

                {
                    entities.map(
                        entity =>
                            <ElementEntity key={entity.Id} name={entity.Id} src={image(entity.Id)}/>
                    )
                }

            </Grid>

            {/*<Typography paragraph>*/}
            {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
            {/*    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
            {/*    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
            {/*    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed*/}
            {/*    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In*/}
            {/*    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et*/}
            {/*    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin*/}
            {/*    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas*/}
            {/*    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.*/}
            {/*</Typography>*/}
            {props.children}
        </main>
    )
};
export default Content;
