export const createState = () => {
    return {
        type: ['elements', 'buildings']
    }
};

export const createReducer = () => {

    console.log("createReducer?");

    return (state: any, action: any) => {

        console.log("reducer?");

        return {...state};
    }

};
