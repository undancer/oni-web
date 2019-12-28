import React from "react";
import {Grid} from "@material-ui/core";
import EntityStateTransition from "./EntityStateTransition";
import {ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon} from "@material-ui/icons";

interface ElementPhaseTransitionPanelProps {
    data: any
}

let ElementPhaseTransitionPanel: React.FC<ElementPhaseTransitionPanelProps> = (props) => {

    const {data} = props;

    let transitionLeft = data.lowTempTransitionTarget ? {
        name: data.lowTempTransitionTarget,
        temp: data.lowTemp
    } : null;
    let transitionRight = data.highTempTransitionTarget ? {
        name: data.highTempTransitionTarget,
        temp: data.highTemp
    } : null;
    let transitionCurrent = {
        name: data.Id,
        temp: null
    };

    return (
        <>
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
        </>
    )
};
export default ElementPhaseTransitionPanel;
