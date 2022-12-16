class Todo {
  id: string
  text: string

  constructor(todoText: string) {
    this.id = String(new Date().getTime())
    // this.id = new Date().toLocaleString()
    this.text = todoText
  }
}

export default Todo
