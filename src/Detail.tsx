import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Chip,
    Divider,
    Drawer,
    ExpansionPanel,
    ExpansionPanelDetails,
    List,
    ListItem,
    Typography
} from "@material-ui/core";
import useStyles from "./useStyles";
import {FormattedHTMLMessage} from "react-intl";
import elements from "./image/elements";

let Detail: React.FC = () => {
    let classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="right"
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem>
                    <Card style={{margin: 8, justifyContent: "center"}}>
                        <CardHeader>
                            <Typography variant="caption" display="block" gutterBottom>
                                <FormattedHTMLMessage id={`STRINGS.ELEMENTS.CUPRITE.NAME`.toUpperCase()}/>
                            </Typography>
                        </CardHeader>
                        <CardContent>
                            <img style={{maxWidth: 256, margin: "auto", display: "block"}} src={elements.cuprite}
                                 alt={'algae'}/>
                            <Typography variant="caption" display="block">
                                <FormattedHTMLMessage id={`STRINGS.ELEMENTS.CUPRITE.DESC`.toUpperCase()}/>
                            </Typography>
                            <ListItem className={classes.chip} style={{justifyContent: "center"}}>
                                <Chip variant="outlined" size="small" label="Basic"/>
                                <Chip variant="outlined" size="small" label="Basic"/>
                                <Chip variant="outlined" size="small" label="Basic"/>
                            </ListItem>
                        </CardContent>
                    </Card>
                </ListItem>
                <ListItem>
                    <div>
                        <ExpansionPanel expanded={false}>
                            <ExpansionPanelDetails>
                                <Typography>E1</Typography>
                                <Typography>E2</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={false}>
                            <ExpansionPanelDetails>
                                <Typography>E1</Typography>
                                <Typography>E2</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={true}>
                            <ExpansionPanelDetails>
                                <Typography>E1</Typography>
                                <Typography>E2</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </ListItem>
            </List>

        </Drawer>
    )
};
export default Detail;
