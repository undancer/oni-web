import React from "react";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import Entity from "../containers/entity/Entity";


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

let ElementsPanel: React.FC<{ data: any }> = (props) => {

    const {data} = props;

    const classes = useStyles();

    const [state, setState] = React.useState("vacuum");

    const states = ["vacuum", "gas", "liquid", "solid"];

    const entities: [any] = data(state);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setState(event.target.value as string);
    };

    return (
        <>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={1}
            >

                {
                    entities.map(({Id}) => <Entity key={Id} name={Id} href={"/details/" + Id} size={8}/>)
                }

            </Grid>
        </>
    );
};
export default ElementsPanel;

