import React from "react";

const AppContext = React.createContext<{
    state: {},
    dispatch: (action: any) => void
}>({
    state: {},
    dispatch: () => {
    },
});

interface StateProviderProps {
    initialState: any
    reducer: any
}

export const StateProvider: React.FC<StateProviderProps> = ({initialState, reducer, children}) => {
    let value: any = {};
    const [state, dispatch] = React.useReducer(reducer, initialState);
    Object.assign(value, {name: "init !!"});
    Object.assign(value, {state, dispatch});

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return React.useContext(AppContext);
};

export const useAppState: any = () => {
    return useAppContext().state
};

export const useAppDispatch = () => {
    return useAppContext().dispatch
};
