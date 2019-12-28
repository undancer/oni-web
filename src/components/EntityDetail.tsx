import React from "react";
import {
    AppBar,
    createStyles,
    Drawer,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    ListItem,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import useStyles from "../useStyles";
import {
    ArrowLeft as ArrowLeftIcon,
    ArrowRight as ArrowRightIcon,
    ExpandMore as ExpandMoreIcon
} from "@material-ui/icons";
import Helmet from "react-helmet";
import {useParams} from "react-router";
import image from "../data/image";
import entities from "../data/elements.json";
import EntityStateTransition from "./EntityStateTransition";
import EntityImage from "./EntityImage";
import clsx from "clsx";
import EntityText from "./EntityText";
import EntityTag from "./EntityTag";

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

    let data: any = entities.find((entity) => entity.Id === name);
    let src = image(data.Id);
    let tags: [any] = data.Tags;

    // const [state, dispatch] = React.useReducer(r.reducer, r.initialState);

    let transitionLeft = data.lowTempTransitionTarget ? {
        name: data.lowTempTransitionTarget,
        temp: data.lowTemp
    } : null;
    let transitionRight = data.highTempTransitionTarget ? {
        name: data.highTempTransitionTarget,
        temp: data.highTemp
    } : null;
    let transitionCurrent = {
        name: name,
        temp: null
    };

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
                    <EntityText id={(`STRINGS.ELEMENTS.` + name + `.NAME`).toUpperCase()}
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
                <Grid item container justify={"center"}>
                    <EntityImage size={16} src={src} alt={name}/>
                </Grid>
                <Grid item container justify={"center"}>
                    <EntityText id={(`STRINGS.ELEMENTS.` + name + `.DESC`).toUpperCase()}
                                defaultMessage={"信息缺失"}
                                variant="caption" display="block"
                                html={true}
                    />
                </Grid>
                <Grid item container justify={"center"}>
                    <ListItem className={self.chip}>
                        {
                            tags.map(tag =>
                                <EntityTag key={tag} id={('STRINGS.MISC.TAGS.' + tag).toUpperCase()}/>
                            )
                        }
                    </ListItem>
                </Grid>
                <Grid item container justify="center">
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center"
                    >
                        <Grid item>
                            <EntityStateTransition data={transitionLeft}/>
                        </Grid>

                        <Grid item>
                            <ArrowLeftIcon/>
                        </Grid>

                        <Grid item>
                            <EntityStateTransition data={transitionCurrent}/>
                        </Grid>

                        <Grid item>
                            <ArrowRightIcon/>
                        </Grid>

                        <Grid item>
                            <EntityStateTransition data={transitionRight}/>
                        </Grid>
                    </Grid>

                </Grid>
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
