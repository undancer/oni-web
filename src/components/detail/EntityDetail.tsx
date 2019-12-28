import React from "react";
import {
    AppBar,
    createStyles,
    Drawer,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import useStyles from "../../useStyles";
import {ExpandMore as ExpandMoreIcon} from "@material-ui/icons";
import Helmet from "react-helmet";
import {useParams} from "react-router";
import clsx from "clsx";
import EntityText from "../EntityText";
import {getEntity} from "../../stores";
import EntityDetailBase from "./EntityDetailBase";
import ElementPhaseTransitionPanel from "./ElementPhaseTransitionPanel";
import EntityTagsPanel from "./EntityTagsPanel";

let useStylesSelf = makeStyles((theme: Theme) =>
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

let EntityDetail: React.FC = () => {
    let classes = useStyles();
    let self = useStylesSelf();

    let {name} = useParams();

    name = name || "";

    let entity = getEntity(name);

    let data: any = entity;

    return (
        <Drawer
            className={clsx(classes.drawer)}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="right"
        >
            <AppBar position="sticky">
                <Toolbar>
                    <EntityText id={(name + `.NAME`).toLowerCase()}
                                variant="h6"
                                className={classes.title}/>
                </Toolbar>
            </AppBar>
            {/*<div className={classes.toolbar}/>*/}
            {/*<Divider/>*/}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{name}</title>
                <link rel="canonical" href="http://mysite.com/example"/>
            </Helmet>
            <Grid container className={self.detail}>

                <EntityDetailBase name={name}/>

                {
                    data.type === "elements" && (<EntityTagsPanel data={data}/>)
                }

                {
                    data.type === "elements" && (<ElementPhaseTransitionPanel data={data}/>)
                }

            </Grid>
            {
                [1, 2, 3, 4, 5].map(index => {
                    return (
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={self.heading}>Expansion Panel {index}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus
                                    ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })
            }
        </Drawer>
    )
};
export default EntityDetail;
