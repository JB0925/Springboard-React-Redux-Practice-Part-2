const INITIAL_STATE = { todos: []};

const rootReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case "ADD":
            return {...state, todos: [...state.todos, payload]};
        case "REMOVE":
            return {...state, todos: state.todos.filter(todo => todo !== payload)};
        default:
            return state;
    };
};

export default rootReducer;