import React from "react";
import {createStyles, Grid, ListItem, makeStyles, Theme} from "@material-ui/core";
import EntityTag from "./EntityTag";


let useStyles = makeStyles((theme: Theme) =>
    createStyles({
            heading: {},
            detail: {
                padding: theme.spacing(2)
                // margin: theme.spacing(1, 2)
            },
            chip: {
                '& > *': {
                    margin: theme.spacing(1 / 2),
                },
                flexWrap: "wrap",
                justifyContent: "center",
            },
        }
    )
);

interface EntityTagsPanelProps {
    data: any
}

const EntityTagsPanel: React.FC<EntityTagsPanelProps> = (props) => {

    const classes = useStyles();

    const {data} = props;
    const tags: [any] = data.Tags;

    return (
        <>
            <Grid item container justify={"center"}>
                <ListItem className={classes.chip}>
                    {
                        tags && tags.map(tag =>
                            <EntityTag key={tag} id={('STRINGS.MISC.TAGS.' + tag).toUpperCase()}/>
                        )
                    }
                </ListItem>
            </Grid>
        </>
    );
};
export default EntityTagsPanel;
