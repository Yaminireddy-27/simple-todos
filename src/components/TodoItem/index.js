// Write your code here
import './index.css'

const TodoItem = props => {
  const {listDetails, deleteUser} = props
  const {title, id} = listDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="todo-item">
      <p className="todo">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
