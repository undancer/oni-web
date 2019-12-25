import React from "react";
import {
    AppBar,
    Chip,
    Divider,
    Drawer,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    List,
    ListItem,
    Toolbar,
    Typography
} from "@material-ui/core";
import useStyles from "./useStyles";
import {FormattedHTMLMessage} from "react-intl";
import elements from "./image/elements";
import {ExpandMore as ExpandMoreIcon} from "@material-ui/icons";
import r from "./reducers"
import Helmet from "react-helmet";

let Detail: React.FC = () => {
    let classes = useStyles();

    // @ts-ignore
    const [state, dispatch] = React.useReducer(r.reducer, r.initialState);

    console.log(state.count);

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
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example"/>
            </Helmet>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem alignItems={"center"}>
                    <img style={{maxWidth: 256, margin: "auto", display: "block"}} src={elements.cuprite}
                         alt={'algae'} onClick={() => {
                        dispatch({type: 'increment'})
                    }}/>
                </ListItem>
                <ListItem>
                    <Typography variant="caption" display="block">
                        <FormattedHTMLMessage id={`STRINGS.ELEMENTS.CUPRITE.DESC`.toUpperCase()}/>
                    </Typography>
                </ListItem>
                <ListItem className={classes.chip} style={{justifyContent: "center"}}>
                    <Chip variant="outlined" size="small" label="Basic"/>
                    <Chip variant="outlined" size="small" label="Basic"/>
                    <Chip variant="outlined" size="small" label="Basic"/>
                </ListItem>
            </List>
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
export default Detail;
