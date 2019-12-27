import React from "react";
import {useIntl} from "react-intl";
import {Typography, TypographyProps} from "@material-ui/core";

interface EntityTextProps {
    id?: string
    value?: string
    html?: boolean
    defaultMessage?: string
}

const fix = (value: string = "") => {
    return value
        .replace(/<link=".*">/g, '')
        .replace(/<\/link>/g, '')
};

let EntityText: React.FC<EntityTextProps & TypographyProps> = (props) => {
    const intl = useIntl();
    let {id, value, html, defaultMessage, ...other} = props;
    if (id) {
        value = ((html === true) ? intl.formatHTMLMessage({
            id: id,
            defaultMessage: defaultMessage
        }) : intl.formatMessage({
            id: id,
            defaultMessage: defaultMessage
        })) as string;
    }
    value = fix(value);

    return (
        <>
            <Typography {...other} dangerouslySetInnerHTML={{__html: value}}/>
        </>
    )
};
export default EntityText;
