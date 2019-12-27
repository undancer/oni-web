import React from "react";
import {Chip} from "@material-ui/core";
import {useIntl} from "react-intl";
import {fix} from "../utils/strings";

interface EntityTagProps {
    id: string
}

let EntityTag: React.FC<EntityTagProps> = (props) => {

    let intl = useIntl();
    let label = intl.formatMessage({id: props.id});
    label = fix(label);

    return (
        <>
            <Chip variant="outlined" size="small"
                  label={label}/>
        </>
    )
};
export default EntityTag;
