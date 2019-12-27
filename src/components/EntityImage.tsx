import React, {Fragment} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

interface EntityImageProps {
    name?: string,
    size?: number,
    src: any,
    alt: string,
}

let useStyles = makeStyles((theme: Theme) =>
    createStyles({
            image: (props: { size: number }) => ({
                maxWidth: theme.spacing(props.size),
                maxHeight: theme.spacing(props.size),
            }),
        }
    )
);

let EntityImage: React.FC<EntityImageProps & {
    className?: string;
}> = (props) => {
    let {src, alt, size} = props;
    size = size || 1;
    let classes = useStyles({size});
    return (
        <Fragment>
            <img src={src} alt={alt} className={classes.image} {...props}/>
        </Fragment>
    )
};
export default EntityImage;
