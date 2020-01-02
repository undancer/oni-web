import React from 'react';
import Content from "./components/Content";
import {
    AppBar,
    createStyles,
    CssBaseline,
    Drawer,
    fade,
    jssPreset,
    makeStyles,
    StylesProvider,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import Readme from "./components/Readme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {create} from "jss";
import DetailContainer from "./containers/detail/DetailContainer";
import NotFound from "./components/NotFound";
import {StateProvider} from "./modules/context";
import {createReducer, createState} from "./config";
import LocaleProvider from "./LocaleProvider";
import {createGenerateClassName} from '@material-ui/core/styles';

const drawerWidth = 420;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            // width: `calc(100% - ${drawerWidth}px)`,
            // marginRight: drawerWidth,
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            // flexGrow: 1,
            // backgroundColor: theme.palette.background.default,
            // padding: theme.spacing(2),
        },
        grow: {
            flexGrow: 1,
        },
        expansion: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
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
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectPanel: {
            margin: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center',
        },
        root2: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        version: {
            margin: theme.spacing(1 / 2),
            color: theme.palette.common.white,
        },
    }),
);


const App: React.FC = () => {
    let classes = useStyles();

//    let locale = navigator.language;
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const languages = ['en', 'ko', 'ru', 'zh-CN'];
    // @ts-ignore
    let lang: string = params.get('lang');
    if (languages.indexOf(lang) < 0) {
        lang = 'zh-CN'
    }

    const jss = create({
        plugins: [...jssPreset().plugins],
    });

    const version = process.env.REACT_APP_VERSION;

    const reducer = createReducer();

    const initialState = createState();

    const generateClassName = createGenerateClassName({
        seed: "oni",
        productionPrefix: "c",
        disableGlobal: true,
    });

    return (
        <StateProvider reducer={reducer} initialState={initialState}>
            <LocaleProvider lang={lang}>
                <StylesProvider jss={jss} generateClassName={generateClassName}>
                    <Router>
                        <div className={classes.root}>
                            <CssBaseline/>
                            <AppBar position="fixed" className={classes.appBar}>
                                <Toolbar>
                                    <Typography className={classes.title} variant="h6" noWrap>
                                        ONI WIKI
                                        <Typography className={classes.version} variant="caption" noWrap>
                                            v{version}
                                        </Typography>
                                    </Typography>

                                    {/*<Search/>*/}
                                </Toolbar>
                            </AppBar>

                            <main className={classes.content}>
                                <div className={classes.toolbar}/>
                                <Switch>
                                    <Route exact path="/">
                                        <Content>
                                        </Content>
                                    </Route>
                                    <Route path="/details/:name">
                                        {/*<EntityDetail/>*/}
                                        <Content>
                                        </Content>
                                    </Route>
                                    <Route>
                                        <NotFound/>
                                    </Route>
                                </Switch>
                            </main>

                            <Drawer
                                className={classes.drawer}
                                variant="permanent"
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                anchor="right"
                            >
                                <div className={classes.toolbar}/>
                                <Switch>
                                    <Route exact path="/">
                                        <Readme/>
                                    </Route>
                                    <Route path="/details/:name">
                                        {/*<EntityDetail/>*/}
                                        <DetailContainer/>
                                    </Route>
                                </Switch>
                            </Drawer>
                        </div>
                    </Router>
                </StylesProvider>
            </LocaleProvider>
        </StateProvider>
    );
};

export default App;
