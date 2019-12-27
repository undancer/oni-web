import React, {Fragment, MouseEvent} from "react";
import image from "../data/image";
import {useIntl} from "react-intl";
import {useHistory} from "react-router-dom";
import EntityImage from "./EntityImage";
import EntityText from "./EntityText";
import {kelvinToCelsius} from "../utils/temperature";

interface EntityStateTransitionProps {
    data?: EntityStateTransitionDataProps
}

interface EntityStateTransitionDataProps {
    name: string
    temp?: number
}

const EntityStateTransition: React.FC<EntityStateTransitionProps | any> = (props) => {
    if (props.data) {
        const {name, temp} = props.data;
        const src = image(name);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let intl = useIntl();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let history = useHistory();
        let celsius = intl.formatMessage({id: 'STRINGS.UI.UNITSUFFIXES.TEMPERATURE.CELSIUS'});

        let tempPart = null;

        if (temp) {
            let value = kelvinToCelsius(temp).toFixed(2) + celsius;
            tempPart = (
                <EntityText variant={"caption"}
                            value={value}
                />
            )
        }

        const handleClick = (event: MouseEvent) => {
            event.preventDefault();
            history.push("/details/" + name);
        };

        return (
            <Fragment>
                <a href={'/details/' + name} onClick={handleClick}>
                    <EntityImage src={src} alt={name} size={4}/>
                </a>
                {tempPart}
            </Fragment>
        )
    }
    return null;
};

export default EntityStateTransition;
