import _elements from "../data/elements.json";
import _ from "underscore";

let elements = (state: string = "vacuum") => {
    console.log("elements");
    return _.filter(_elements, item => {
        return "vacuum" === state || state === item.State.toLowerCase();
    });
    // return _.where(_elements, {"State": ""});
};

let data = {
    elements: elements
};

export default data;
