import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Bank = () => {
  const { tasks } = useContext(GlobalContext)

  const amounts = tasks.map(transaction => transaction.amount);

  const minutesUsed = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const minutesLeft = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Minutes Used</h4>
          <p className="money plus">{minutesUsed}</p>
        </div>
        <div>
          <h4>Minutes Left</h4>
          <p className="money minus">{minutesLeft}</p>
        </div>
      </div>
    )
}
