// Allows the ability to create actions throughout the server

import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer.js'
import axios from 'axios'



// Initial State Object
const initialState = {
    tasks: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    async function getTasks() {
        try {
            const res = await axios.get('/api/v1/tasks')

            dispatch({
                type: 'GET_TASKS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.error
            })
        }
    }


    async function deleteTask(id) {
        try {
          await axios.delete(`/api/v1/tasks/${id}`);
    
          dispatch({
            type: 'DELETE_TASKS',
            payload: id
          });
        } catch (err) {
          dispatch({
            type: 'TASK_ERROR',
            payload: err.response.data.error
          });
        }
      }

    async function addTask(task) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/tasks', task, config)
            
            dispatch({
                type: 'ADD_TASK',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.data.error
            })
        }
    }
    
    // How we invoke our reducers and access them in other components
    return (<GlobalContext.Provider value={{
        tasks: state.tasks,
        error: state.error,
        loading: state.loading,
        getTasks,
        deleteTask,
        addTask
    }}>
        {children}
    </GlobalContext.Provider>)
}