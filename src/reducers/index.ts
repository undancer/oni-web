const initialState = {count: 0};

const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
};

export default {
    initialState,
    reducer
};
