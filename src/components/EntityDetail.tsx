import React, {Fragment} from "react";
import {
    AppBar,
    Chip,
    Drawer,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    List,
    ListItem,
    Toolbar,
    Typography
} from "@material-ui/core";
import useStyles from "../useStyles";
import {FormattedHTMLMessage, useIntl} from "react-intl";
import {
    ArrowLeft as ArrowLeftIcon,
    ArrowRight as ArrowRightIcon,
    ExpandMore as ExpandMoreIcon
} from "@material-ui/icons";
import r from "../reducers"
import Helmet from "react-helmet";
import {useParams} from "react-router";
import image from "../data/image";
import entities from "../data/elements.json";
import {kelvinToCelsius} from "../utils/temperature";

let EntityDetail: React.FC = () => {
    let classes = useStyles();

    let {name} = useParams();
    let intl = useIntl();

    name = name || "";

    let data: any = entities.find((entity) => entity.Id === name);
    let src = image(data.Id);
    let tags: [any] = data.Tags;
    // console.log(data);

    const [state, dispatch] = React.useReducer(r.reducer, r.initialState);

    let transitionLeft = data.lowTempTransitionTarget ? {name: data.lowTempTransitionTarget, temp: data.lowTemp} : null;
    let transitionRight = data.highTempTransitionTarget ? {
        name: data.highTempTransitionTarget,
        temp: data.highTemp
    } : null;
    let transitionCurrent = {name: name, temp: null};

    const Transition: React.FC<any> = (props: { data: { name: string, temp?: number } | null }) => {
        if (props.data) {
            const {name, temp} = props.data;
            const src = image(name);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            let intl = useIntl();
            let celsius = intl.formatMessage({id: 'STRINGS.UI.UNITSUFFIXES.TEMPERATURE.CELSIUS'});

            let tempPart = temp ? (
                <Typography>
                    {kelvinToCelsius(temp).toFixed(2)}{celsius}
                </Typography>
            ) : null;

            return (
                <Fragment>
                    <a href={'/details/' + name}>
                        <img style={{maxWidth: 48, margin: "auto", display: "block"}}
                             src={src}
                             alt={name}
                        />
                    </a>
                    {tempPart}
                </Fragment>
            )
        }
        return null;
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="right"
        >
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{name}</title>
                <link rel="canonical" href="http://mysite.com/example"/>
            </Helmet>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <FormattedHTMLMessage id={(`STRINGS.ELEMENTS.` + name + `.NAME`).toUpperCase()}/>
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*<div className={classes.toolbar}/>*/}
            {/*<Divider/>*/}
            <List>
                <ListItem alignItems={"center"}>
                    <img style={{maxWidth: 256, margin: "auto", display: "block"}} src={src}
                         alt={'algae'} onClick={() => {
                        dispatch({type: 'increment'})
                    }}/>
                </ListItem>
                <ListItem>
                    <Typography variant="caption" display="block">
                        <FormattedHTMLMessage id={(`STRINGS.ELEMENTS.` + name + `.DESC`).toUpperCase()}
                                              defaultMessage={"信息缺失"}/>
                    </Typography>
                </ListItem>
                <ListItem className={classes.chip}>
                    {
                        tags.map((tag) => {
                            let label: string = ('STRINGS.MISC.TAGS.' + tag).toUpperCase();

                            return (<Chip key={tag} variant="outlined" size="small"
                                          label={intl.formatMessage({id: label})}/>)
                        })
                    }
                </ListItem>
            </List>


            <ExpansionPanel expanded={true}>
                <ExpansionPanelDetails style={{margin: "auto", justifyContent: "center"}}>
                    <div>
                        <Transition data={transitionLeft}/>
                    </div>
                    <div>
                        <ArrowLeftIcon/>
                    </div>
                    <div>
                        <Transition data={transitionCurrent}/>
                    </div>
                    <div>
                        <ArrowRightIcon/>
                    </div>
                    <div>
                        <Transition data={transitionRight}/>
                    </div>

                </ExpansionPanelDetails>
            </ExpansionPanel>
            {
                [1, 2, 3, 4, 5].map(index => {
                    return (
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Expansion Panel {index}</Typography>
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
