import React from "react";
import {useIntl} from "react-intl";
import {fix} from "../utils/strings";

interface TargetSelectionProps {
    id: string
}

let TargetSelection: React.FC<TargetSelectionProps> = (props) => {

    const {id} = props;

    let intl = useIntl();

    let value = intl.formatMessage({id: ('STRINGS.UI.CODEX.CATEGORYNAMES.' + id).toUpperCase()});
    value = fix(value);

    return (
        <>
            {value}
        </>
    )
};
export default TargetSelection;
