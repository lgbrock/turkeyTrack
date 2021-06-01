import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Minutes = () => {
    const { tasks } = useContext(GlobalContext)

    const amounts = tasks.map(task => task.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <>
            <h4>Minutes Left in the Day</h4>
            <h1>{total}</h1>
        </>
    )
}
