import React, {Fragment} from "react";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import {getEntity} from "../../stores";
import Entity from "../entity/Entity";
import {ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon} from "@material-ui/icons"
import {getString} from "../../assets/data/strings";
import {kelvinToCelsius} from "../../utils/temperature";

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

interface ElementPhaseTransitionProps {
    element: string
}

const ElementPhaseTransition: React.FC<ElementPhaseTransitionProps> = (props) => {
    const {element} = props;

    const classes = useStyles();

    const entity = getEntity(element);

    const currentId = entity.Id;

    let celsius = getString('STRINGS.UI.UNITSUFFIXES.TEMPERATURE.CELSIUS');

    let transitionLeft = entity.lowTempTransitionTarget ? {
        name: entity.lowTempTransitionTarget,
        temp: kelvinToCelsius(entity.lowTemp).toFixed(2) + celsius
    } : null;
    let transitionRight = entity.highTempTransitionTarget ? {
        name: entity.highTempTransitionTarget,
        temp: kelvinToCelsius(entity.highTemp).toFixed(2) + celsius
    } : null;
    let transitionCurrent = {
        name: entity.Id,
        temp: null
    };

    return (
        <Fragment>
            <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                {
                    (transitionLeft) && (<Grid item container xs={2} justify={"center"} alignItems={"center"}>
                        <Entity elevation={0} size={4}
                                name={transitionLeft.name}
                                text={transitionLeft.temp.toString()}
                                href={`/details/${transitionLeft.name}`}/>
                    </Grid>)
                }
                {
                    (transitionLeft) && (
                        <Grid item container xs={1}>
                            <ArrowLeftIcon/>
                        </Grid>
                    )
                }
                <Grid item container xs={2} justify={"center"} alignItems={"center"}>
                    <Entity elevation={0} size={4}
                            name={currentId}
                            text={""}
                            href={`/details/${transitionCurrent.name}`}/>
                </Grid>
                {
                    (transitionRight) && (
                        <Grid item container xs={1}>
                            <ArrowRightIcon/>
                        </Grid>
                    )
                }
                {
                    (transitionRight) && (
                        <Fragment>
                            <Grid item container xs={2} justify={"center"} alignItems={"center"}>
                                <Entity elevation={0} size={4}
                                        name={transitionRight.name}
                                        text={transitionRight.temp.toString()}
                                        href={`/details/${transitionRight.name}`}/>
                            </Grid>
                        </Fragment>
                    )
                }
            </Grid>
        </Fragment>
    )

};
export default ElementPhaseTransition;
