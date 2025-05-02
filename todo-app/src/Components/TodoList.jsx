import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => (
  <ul className="mt-4 space-y-2">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ))}
  </ul>
);

export default TodoList;
