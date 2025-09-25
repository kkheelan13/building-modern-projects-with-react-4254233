export default function TodoListItem({ todo, onCompletedClicked, onDeleteClicked }) {
  return (
    <>
      <h3>{todo.text}</h3>
      {todo.isComplete && <p>Complete!</p>}
      {todo.isComplete
        ? <button onClick={() => onDeleteClicked(todo.text)}>Delete Item</button>
        : <button onClick={() => onCompletedClicked(todo.text)}>Complete Item</button>
      }
    </>
  )
}