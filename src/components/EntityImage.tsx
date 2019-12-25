import React, {Fragment} from "react";

interface EntityImageProps {
    name?: string,
    src: any,
    alt: string,
}

let EntityImage: React.FC<EntityImageProps & {
    className?: string;
}> = (props) => {
    let {src, alt} = props;
    return (
        <Fragment>
            <img src={src} alt={alt} {...props}/>
        </Fragment>
    )
};
export default EntityImage;
