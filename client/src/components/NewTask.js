import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const NewTask = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTask } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTask = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTask(newTask)
  }

    return (
        <div>
                <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="task"
            >Minutes to use <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter minutes..." />
        </div>
        <button className="btn">Add task</button>
      </form>
         
        </div>
    )
}
