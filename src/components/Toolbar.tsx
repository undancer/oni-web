import React, {ChangeEventHandler} from "react";
import {createStyles, fade, FormControl, makeStyles, MenuItem, Select, Theme, Toolbar,} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewListIcon from "@material-ui/icons/ViewList";
import Search from "./Search";
import _ from "underscore";

let useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            toolbar: {
                // height: theme.spacing(4),
                width: "100%",
                // backgroundColor: theme.palette.error.main,
            },
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },

            grow: {
                flexGrow: 1,
            },
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.white, 0.25),
                },
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(1),
                    width: 'auto',
                },
            },
            searchIcon: {
                width: theme.spacing(7),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 7),
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: 120,
                    '&:focus': {
                        width: 200,
                    },
                },
            },
        }
    )
);

interface ToolbarProps {

}

const ToolbarC: React.FC<ToolbarProps> = (props) => {

    const classes = useStyles();

    const handleChange: ChangeEventHandler<{ value: unknown }> = (event) => {
    };

    const list = ['elements', 'buildings'];

    let value = _.first(list);

    return (
        <Toolbar className={classes.toolbar}>
            <div style={{width: 120}}/>
            <FormControl className={classes.formControl}>
                <Select value={value} onChange={handleChange} displayEmpty>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        list.map(item => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            )
                        )
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select value={value} onChange={handleChange} displayEmpty>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div className={classes.grow}/>
            <ToggleButtonGroup size={"small"}>
                <ToggleButton selected={true} value={"app"}>
                    <ViewComfyIcon/>
                </ToggleButton>
                <ToggleButton value={"list"}>
                    <ViewListIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
            <Search/>
        </Toolbar>
    )
};
export default ToolbarC;
