import {
    SET_TODOS,
} from '../types/todos'

const initialState = {
    todos: []
}

export default function todosReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case SET_TODOS:
            return {
                todos: action.todos
            }
        default:
            return state
    }
}