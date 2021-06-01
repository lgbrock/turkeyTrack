import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Task = ({task}) => {
   const { deleteTask } = useContext(GlobalContext)
    
    const sign = task.amount < 0 ? '-' : '+'

    return (
        <li className={task.amount < 0 ? 'minus' : 'plus'}>
            {task.text}<span>{sign}{Math.abs(task.amount)}</span><button onClick={() => deleteTask(task._id)} className="delete-btn">x</button>
        </li>
    )
}
