import axios from 'axios';
import { BASE_URL } from '../constants/urlConstants';


// Add Todos -------------------------------------------------------->
export const addTodoToState = (data) => {
    return {
        type: "ADD_TODO",
        data
    }
}

export const addTodos = (description) => dispatch => {
    axios({
        method: "post",
        url: `${BASE_URL}/`,
        data: { description },
        config: { headers: { 'Content-Type': 'application/json' } }
    }).then((res) => {
        dispatch(addTodoToState(res.data))
    }).catch(err => {
        console.log("error: ", err);
    });
}

// Get Todos -------------------------------------------------->
export const getTodosfromState = (data) => {
    return {
        type: "GET_TODOS",
        data
    }
}
export const getTodos = () => dispatch => {
    axios({
        method: "get",
        url: `${BASE_URL}/`,
        config: { headers: { 'Content-Type': 'application/json' } }
    }).then((res) => {
        dispatch(getTodosfromState(res.data))
    }).catch(err => {
        console.log("error: ", err);
    });
}

// Delete TODO ----------------------------------->
export const deleteTodofromState = (data) => {
    return {
        type: "DELETE_TODO",
        data
    }
}

export const deleteTodo = (todoId) => dispatch => {
    axios({
        method: "delete",
        url: `${BASE_URL}/${todoId}`,
        config: { headers: { 'Content-Type': 'application/json' } }
    }).then(res => {
        dispatch(deleteTodofromState(res.data))
    }).catch(err => {
        console.log("error: ", err);
    })
}

