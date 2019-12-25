import {ElementAction, TYPE_CLICK_ENTRY} from "../actions";

const initialState = {count: 0};

const reducer = (state: { count: number }, action: any) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
};


const elementReducer = (state: any, action: ElementAction) => {
    switch (action.type) {
        case TYPE_CLICK_ENTRY:
            console.log(TYPE_CLICK_ENTRY);
            console.log(action);
            break;
        default:
            console.log(action.type);
            break;
    }
};


export default {
    initialState,
    reducer,
    elementReducer,
};
