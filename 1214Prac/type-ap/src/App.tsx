import React, { useState } from 'react'
import Todos from './components/Todos'
import Todo from './utils/todo'
import InsertTodo from './components/InsertTodo'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (item: string) => {
    const newTodo = new Todo(item)

    setTodos(prevTodo => {
      return [...prevTodo, newTodo]
    })
  }

  const removeTodoHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <InsertTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  )
}

export default App
