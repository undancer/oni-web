import React, {Fragment} from "react";
import {getEntity} from "../../stores";
import {Chip, createStyles, makeStyles, Theme} from "@material-ui/core";
import {getString} from "../../assets/data/strings";

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            chip: {
                margin: theme.spacing(1 / 4),
            },
        }
    )
);

interface ElementTagProps {
    element: string
}

const ElementTag: React.FC<ElementTagProps> = (props) => {
    const classes = useStyles();
    const {element} = props;
    const entity = getEntity(element);
    const tags: [string] = entity.Tags;

    const children = tags.map(tag => {
            let label = getString(`STRINGS.MISC.TAGS.${tag}`.toUpperCase());
            return (
                <Chip key={tag} variant="outlined" size="small" label={label} className={classes.chip}/>
            )
        }
    );

    return (
        <Fragment>
            {children}
        </Fragment>
    )
};
export default ElementTag;


