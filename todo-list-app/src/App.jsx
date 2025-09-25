import './App.css'
import TodoList from './TodoList'
import { useState } from 'react'

function App() {
  const [completedTodos,setCompletedTodos] = useState([
    { text: "Take out garbage", isComplete: true},
    { text: "Make dinner", isComplete: true}
  ]);
  const [inCompleteTodos,setInCompleteTodos] = useState([
    { text: "Paint it out!", isComplete: false},
    
  ]);

  const onDeleteClicked = (text) => {
    setCompletedTodos(completedTodos.filter((t)=> t.text !==text ))
  }

  const onCreateClicked = (text) => {
    setInCompleteTodos(t => [...t, {text: text, isComplete: false}])
  }

  const onCompletedClicked = (text) => {
    setInCompleteTodos(inCompleteTodos.filter(t => t.text!== text))
    setCompletedTodos([...completedTodos, { ...inCompleteTodos.find(t => t.text === text), isComplete: true}])
  }

  return (
    <TodoList 
      completedTodos={completedTodos} 
      incompleteTodos={inCompleteTodos}
      onDeleteClicked={onDeleteClicked}
      onCompletedClicked={onCompletedClicked}
      onCreateClicked={onCreateClicked}
    />
  )
}

export default App
