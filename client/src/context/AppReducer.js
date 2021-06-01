// Way to change your state and send it down to your application

export default (state, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'TASK_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}