const initialState = {
  searches: [],
};

export const searchesReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, searches: action.payload };
        default: 
            return state;
    }
};