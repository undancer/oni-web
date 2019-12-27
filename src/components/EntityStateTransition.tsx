import React, {Fragment, MouseEvent} from "react";
import image from "../data/image";
import {useIntl} from "react-intl";
import {Typography} from "@material-ui/core";
import {kelvinToCelsius} from "../utils/temperature";
import {withRouter} from "react-router-dom";
import EntityImage from "./EntityImage";

const EntityStateTransition: React.FC<any> = (props: { data: { name: string, temp?: number } | null } & { history: any }) => {
    if (props.data) {
        const {name, temp} = props.data;
        const {history} = props;
        const src = image(name);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let intl = useIntl();
        let celsius = intl.formatMessage({id: 'STRINGS.UI.UNITSUFFIXES.TEMPERATURE.CELSIUS'});

        let tempPart = temp ? (
            <Typography>
                {kelvinToCelsius(temp).toFixed(2)}{celsius}
            </Typography>
        ) : null;

        const handleClick = (event: MouseEvent) => {
            event.preventDefault();
            history.push("/details/" + name);
        };

        return (
            <Fragment>
                <a href={'/details/' + name} onClick={handleClick}>
                    <EntityImage src={src} alt={name} size={4}/>
                </a>
                <Typography variant={"caption"}>
                    {tempPart}
                </Typography>
            </Fragment>
        )
    }
    return null;
};

export default withRouter(EntityStateTransition);
