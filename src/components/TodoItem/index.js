import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div className="todo-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
