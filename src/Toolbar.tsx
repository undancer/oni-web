import React from "react";
import {
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
} from "@material-ui/core";
import useStyles from "./useStyles";
import {
    Directions as DirectionsIcon,
    FormatAlignCenter as FormatAlignCenterIcon,
    FormatAlignJustify as FormatAlignJustifyIcon,
    FormatAlignLeft as FormatAlignLeftIcon,
    FormatAlignRight as FormatAlignRightIcon,
    Menu as MenuIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

let Toolbar: React.FC = (props: any) => {

    const classes = useStyles();
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as number);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [alignment, setAlignment] = React.useState('left');

    const handleChange2 = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const children = [
        <ToggleButton key={1} value="left">
            <FormatAlignLeftIcon/>
        </ToggleButton>,
        <ToggleButton key={2} value="center">
            <FormatAlignCenterIcon/>
        </ToggleButton>,
        <ToggleButton key={3} value="right">
            <FormatAlignRightIcon/>
        </ToggleButton>,
        <ToggleButton key={4} value="justify" disabled>
            <FormatAlignJustifyIcon/>
        </ToggleButton>,
    ];

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={handleChange1}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange2}>
                            {children}
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item>
                        <Paper component="form" className={classes.root2}>
                            <IconButton className={classes.iconButton} aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Google Maps"
                                inputProps={{'aria-label': 'search google maps'}}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical"/>
                            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                <DirectionsIcon/>
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    )
};
export default Toolbar;
