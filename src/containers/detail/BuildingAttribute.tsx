import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import png from "../../assets/images/icons/status_item_no_research_selected.png";
import sizePng from "../../assets/images/icons/status_item_size_requirement.png";
import {getEntity} from "../../stores";

const size = 24;

interface BuildingAttributeProps {
    element: string
}

const BuildingAttribute: React.FC<BuildingAttributeProps> = (props) => {

    const {element} = props;
    const entity = getEntity(element);
    const {WidthInCells, HeightInCells} = entity;

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell align={"left"}>
                            <img width={size} src={sizePng}/>
                        </TableCell>
                        <TableCell align={"right"}>
                            {WidthInCells} x {HeightInCells}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"left"}>
                            <img width={size} src={png}/>
                        </TableCell>
                        <TableCell align={"right"}>
                            test
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default BuildingAttribute;
