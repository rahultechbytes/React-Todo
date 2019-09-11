const initialState = {
    todos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todos: [action.data, ...state.todos ]
            }
        }
        case "GET_TODOS": {
            return {
                ...state,
                todos: action.data
            }
        }
        case "DELETE_TODO": {
            const deleteTodo = state.todos.filter(item => action.data._id !== item._id);
            return {
                ...state,
                todos: deleteTodo
            }
        }
        default: {
            return state;
        }
    }
}
export default todoReducer;

