import React from "react";
import {createStyles, Grid, makeStyles, MenuItem, Select, Theme, Typography,} from "@material-ui/core";
import {getData} from "../stores";
import ElementsPanel from "./ElementsPanel";
import BuildingsPanel from "./BuildingsPanel";
import TargetSelection from "./TargetSelection";
import _ from "underscore";


let useStyles = makeStyles((theme: Theme) => createStyles({
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2),
        },
        toolbar2: {
            margin: theme.spacing(2),
        },
    })
);

let Content: React.FC = (props: any) => {
    const classes = useStyles();
    const version = process.env.REACT_APP_VERSION;

    const targets = ["elements", "buildings"];

    //elements buildings
    const [target, setTarget] = React.useState(_.first(targets));

    const entities = getData(target);

    let Panel;
    if (target === "elements") {
        Panel = ElementsPanel;
    } else if (target === "buildings") {
        Panel = BuildingsPanel;
    } else {
        Panel = ElementsPanel;
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTarget(event.target.value as string);
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

            {/*<Toolbar></Toolbar>*/}

            <Grid container
                  direction="row"
                  justify={"center"}
                  className={classes.toolbar2}
            >
                <Select
                    // labelId="demo-simple-select-outlined-label"
                    // id="demo-simple-select-outlined"
                    value={target}
                    onChange={handleChange}
                    // labelWidth={labelWidth}
                >
                    {
                        targets.map(target => (
                            <MenuItem key={target} value={target}>
                                <TargetSelection id={target}/>
                            </MenuItem>
                        ))
                    }
                </Select>
            </Grid>


            <Panel data={entities}/>

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
