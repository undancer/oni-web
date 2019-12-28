import _elements from "../data/elements.json";
import _buildings from "../data/buildings.json";
import _ from "underscore";

let elements = (state: string = "vacuum") => {
    console.log("elements");
    return _.filter(_elements, item => (
            (
                "vacuum" === state
                || state === item.State.toLowerCase()
            )
            && !_.include(item.Tags, 'Special')
        )
    );
};

let buildings = () => {
    console.log("buildings");
    return _.toArray(_buildings);
};

export let getData = (target: string) => {
    if (data[target] != null) {
        return data[target];
    }
    return [];
};

let data: any = {
    elements: elements,
    buildings: buildings,
};

export default data;
