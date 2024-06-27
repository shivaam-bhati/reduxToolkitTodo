import { useState } from 'react'
import AddTodo from './components/AppTodo'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Redux
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
