import {Dispatch} from "react";


export const TYPE_CLICK_ENTITY = 'CLICK_ENTITY';

export interface ElementAction {
    type: string,
    name: string,
}

export let clickEntry = (name: string) => {
    return (dispatch: Dispatch<ElementAction>) => {
        dispatch({type: TYPE_CLICK_ENTITY, name: name});
    }
};
