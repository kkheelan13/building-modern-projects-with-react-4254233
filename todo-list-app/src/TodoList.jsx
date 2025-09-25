import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({ completedTodos, incompleteTodos, onDeleteClicked, onCompletedClicked, onCreateClicked }) {
  return (
    <>
    <h1>My Todos</h1>
    <NewTodoForm onCreateClicked={onCreateClicked}/>

    <h3>Complete:</h3>
    {completedTodos.map((item, index) => (
      <TodoListItem todo={item} key={index} onDeleteClicked={onDeleteClicked}/>
    ))}
    <h3>Incomplete:</h3>
    {incompleteTodos.map((item, index) => (
      <TodoListItem todo={item} key={index} onCompletedClicked={onCompletedClicked}/>
    ))}
    </>
  )
}