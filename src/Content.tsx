import React, {MouseEventHandler} from "react";
import {Breadcrumbs, Drawer, Grid, Link, Typography,} from "@material-ui/core";
import useStyles from "./useStyles";
import Toolbar from "./Toolbar";
import elements from "./image/elements";
import ElementEntry from "./ElementEntry";

let Content: React.FC = (props: any) => {
    const classes = useStyles();

    const handleClick1: MouseEventHandler<any> = (event) => {
        event.defaultPrevented = false;
    };

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

            <Drawer/>

            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={1}>
                {

                    Object.keys(elements).map(name => {
                        // @ts-ignore
                        let src = elements[name];
                        return (
                            <ElementEntry key={name} name={name} src={src}/>
                        )
                    })
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
