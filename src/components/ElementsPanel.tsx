import React from "react";
import {createStyles, Grid, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {FormattedMessage} from "react-intl";
import ElementEntity from "./ElementEntity";


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
                  justify={"center"}
                  className={classes.toolbar2}
            >
                <Select
                    // labelId="demo-simple-select-outlined-label"
                    // id="demo-simple-select-outlined"
                    value={state}
                    onChange={handleChange}
                    // labelWidth={labelWidth}
                >
                    {
                        states.map(state => (
                            <MenuItem key={state} value={state}>
                                <FormattedMessage id={(`STRINGS.ELEMENTS.STATE.` + state).toUpperCase()}/>
                            </MenuItem>
                        ))
                    }
                </Select>
            </Grid>

            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={1}
            >

                {
                    entities.map(entity => <ElementEntity key={entity.Id} name={entity.Id}/>)
                }

            </Grid>
        </>
    );
};
export default ElementsPanel;
