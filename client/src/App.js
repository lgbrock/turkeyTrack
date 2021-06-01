import React from 'react'
import { Header } from './components/Header'
import { Minutes } from './components/Minutes'
import { Bank } from './components/Bank'
import { TaskList } from './components/TaskList'
import { NewTask } from './components/NewTask'

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Minutes />
        <Bank />
        <TaskList />
        <NewTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
