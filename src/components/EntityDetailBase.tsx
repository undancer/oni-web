import React from "react";
import {Grid} from "@material-ui/core";
import EntityImage from "./EntityImage";
import EntityText from "./EntityText";
import image from "../data/image";

interface EntityDetailBaseProps {
    name: string
}

const EntityDetailBase: React.FC<EntityDetailBaseProps> = (props) => {
    const {name} = props;
    const src = image(name);

    return (
        <>
            <Grid item container justify={"center"}>
                <EntityImage size={16} src={src} alt={name}/>
            </Grid>
            <Grid item container justify={"center"}>
                <EntityText id={(name + `.DESC`).toLowerCase()}
                            defaultMessage={"信息缺失"}
                            variant="caption" display="block"
                            html={true}
                />
            </Grid>
        </>
    );
};
export default EntityDetailBase;
