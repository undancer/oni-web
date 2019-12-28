import React from "react";
import {Grid} from "@material-ui/core";
import EntityImage from "../EntityImage";
import EntityText from "../EntityText";
import image from "../../assets/data/image";
import {getString} from "../../assets/data/strings";

interface EntityDetailBaseProps {
    name: string
}

const EntityDetailBase: React.FC<EntityDetailBaseProps> = (props) => {
    const {name} = props;
    const src = image(name);

    const effect = getString((name + '.EFFECT').toLowerCase());
    const desc = getString((name + '.DESC').toLowerCase());

    return (
        <>
            <Grid item container justify={"center"}>
                <EntityImage size={16} src={src} alt={name}/>
            </Grid>
            {
                effect && (
                    <Grid item container justify={"center"}>
                        <EntityText value={effect.toString()}
                                    variant="caption" display="block"
                                    html={true}
                        />
                    </Grid>
                )
            }
            {
                desc && (
                    <Grid item container justify={"center"}>
                        <EntityText value={desc.toString()}
                                    defaultMessage={"信息缺失"}
                                    variant="caption" display="block"
                                    html={true}
                        />
                    </Grid>
                )
            }
        </>
    );
};
export default EntityDetailBase;
