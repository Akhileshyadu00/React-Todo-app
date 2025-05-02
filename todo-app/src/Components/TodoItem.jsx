import React, { useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      editTodo(todo.id, editedText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-white p-2 rounded shadow">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-4 ml-4">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:text-blue-800"
          aria-label={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? "💾" : "✏️"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:text-red-800"
          aria-label="Delete"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
