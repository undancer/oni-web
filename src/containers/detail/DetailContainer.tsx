import React, {Fragment} from "react";
import Detail from "./Detail";
import DetailBase from "./DetailBase";
import {useParams} from "react-router-dom";
import png from "../../assets/images/icons/status_item_no_research_selected.png";
import {
    createStyles,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Theme
} from "@material-ui/core";
import ElementPhaseTransition from "./ElementPhaseTransition";
import DetailPanel from "./DetailPanel";
import {getEntity} from "../../stores";
import ElementTag from "./ElementTag";

const useStyles = makeStyles(
    (theme: Theme) => createStyles(
        {
            paper: {
                margin: theme.spacing(2, 2, 0, 2),
            },
            card: {
                // margin: theme.spacing(2)
            },
        }
    )
);

const DetailContainer: React.FC = () => {

    const classes = useStyles();

    const {name} = useParams<{ name: string }>();
    const {type} = getEntity(name);

    return (
        <Fragment>

            <DetailBase name={name}/>

            <DetailPanel elevation={0} type={"elements"} value={type}>
                <ElementTag element={name}/>
            </DetailPanel>

            <DetailPanel type={"elements"} value={type} title="PHASE TRANSITION">
                <ElementPhaseTransition element={name}/>
            </DetailPanel>

            <Paper className={classes.paper}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align={"left"}>
                                    <img width={16} src={png}/>
                                </TableCell>
                                <TableCell align={"right"}>
                                    test
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align={"left"}>
                                    <img width={16} src={png}/>
                                </TableCell>
                                <TableCell align={"right"}>
                                    test
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align={"left"}>
                                    <img width={16} src={png}/>
                                </TableCell>
                                <TableCell align={"right"}>
                                    test
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align={"left"}>
                                    <img width={16} src={png}/>
                                </TableCell>
                                <TableCell align={"right"}>
                                    test
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align={"left"}>
                                    <img width={16} src={png}/>
                                </TableCell>
                                <TableCell align={"right"}>
                                    test
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Detail/>

        </Fragment>
    )
};
export default DetailContainer;
