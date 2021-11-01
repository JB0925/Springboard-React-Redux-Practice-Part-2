const INITIAL_STATE = { memes: []};

const rootReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case "ADD":
            return {...state, memes: [...state.memes, payload]};
        case "REMOVE":
            return {...state, memes: state.memes.filter(m => m.topText !== payload.topText)};
        default:
            return state;
    };
};

export default rootReducer;