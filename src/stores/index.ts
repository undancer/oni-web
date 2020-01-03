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
    )
        .sort((left, right) => left.Id.localeCompare(right.Id))
};

let buildings = () => {
    console.log("buildings");
    return _.filter(_buildings, item => item !== null)
        .sort((left, right) => left.Id.localeCompare(right.Id))
};

let data: any = {
    elements: elements(),
    buildings: buildings(),
};

let entities = new Array();

Object.entries(data).forEach(([key, value]) => {
    entities.push(...(value as []).map((item: any) => ({...item, type: key})))
});

export let getData = (target: string) => {
    return entities.filter(value => (value as { type: string }).type === target)
};

export let getEntity = (id: string) => {
    return entities.find((value, index) => {
        return (value as { Id: string }).Id === id
    });
};
