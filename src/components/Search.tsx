import React from "react";
import {Search as SearchIcon} from "@material-ui/icons";
import {createStyles, fade, Input, InputBase, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            width: theme.spacing(2),
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
            padding: theme.spacing(1, 1, 1, 1 + 2),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 120,
                '&:focus': {
                    width: 320,
                },
            },
        },
    }),
);

let Search: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
            {/*<Input*/}
            {/*    placeholder="Search…"*/}
            {/*    classes={{*/}
            {/*        root: classes.inputRoot,*/}
            {/*        input: classes.inputInput,*/}
            {/*    }}*/}
            {/*    inputProps={{'aria-label': 'search'}}*/}
            {/*/>*/}
        </div>
    );
};

export default Search;
