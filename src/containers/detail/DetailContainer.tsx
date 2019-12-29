import React, {Fragment} from "react";
import DetailBase from "./DetailBase";
import {useParams} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import ElementPhaseTransition from "./ElementPhaseTransition";
import DetailPanel from "./DetailPanel";
import {getEntity} from "../../stores";
import ElementTag from "./ElementTag";
import BuildingAttribute from "./BuildingAttribute";

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

            <DetailPanel type={"buildings"} value={type}>
                <BuildingAttribute element={name}/>
            </DetailPanel>

            <DetailPanel type={"buildings"} value={type}>
                test
            </DetailPanel>

            <DetailPanel type={"buildings"} value={type}>
                test
            </DetailPanel>

        </Fragment>
    )
};
export default DetailContainer;
