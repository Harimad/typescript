import React from 'react'
import Todo from '../utils/todo'
import TodoItem from './TodoItem'
import style from '../style/Todos.module.css'

const Todos: React.FC<{
  items: Todo[]
  onRemoveTodo: (id: string) => void
}> = props => {
  return (
    <ul className={style.todos}>
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </ul>
  )
}

export default Todos
