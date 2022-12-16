import React from 'react'
import { useState } from 'react'
import style from '../style/InserTodo.module.css'

const InsertTodo: React.FC<{ onAddTodo: (item: string) => void }> = props => {
  const [text, setText] = useState('')

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() !== '') {
      props.onAddTodo(text)
      setText('')
    }
  }

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <div>
      <form onSubmit={submitHandler} className={style.form}>
        <h3>할일 추가</h3>
        <input type="text" value={text || ''} onChange={changeHandler} />
        <button>추가</button>
      </form>
    </div>
  )
}

export default InsertTodo
