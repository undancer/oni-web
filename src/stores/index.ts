import _elements from "../data/elements.json";
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

let data = {
    elements: elements
};

export default data;
