import React, { useContext, useEffect } from 'react'
import { Task } from './Task'

import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
  const { tasks, getTasks } = useContext(GlobalContext)

  useEffect(() => {
    getTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <>
        <h3>Task List</h3>
          <ul className="list">
          {tasks.map(task => ( <Task key={task.id} task={task}/> ))}
          </ul>
      </>
    )
}
