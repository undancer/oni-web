import _elements from "../assets/data/elements.json";
import _buildings from "../assets/data/buildings.json";
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

export let getEntity = (id: string) => {

    let result: any = null;

    Object.entries(data).forEach(([key, value]) => {
        if (result == null) {
            // @ts-ignore
            let _data: [any] = value();
            let _result = _data.find((entity) => entity.Id === id);
            if (_result != null) {
                result = {..._result, type: key}
            }
        }
    });

    return result;

};

let data: any = {
    elements: elements,
    buildings: buildings,
};

export default data;
