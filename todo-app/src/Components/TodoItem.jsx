import React, {useState} from 'react'

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo })  {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
  
    const handleEdit = () => {
      if (isEditing) {
        editTodo(todo.id, editedText);
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <li className="flex items-center justify-between bg-gray-200 p-2 rounded">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {isEditing ? (
            <input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border rounded px-2"
            />
          ) : (
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:underline"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </li>
    );
  };

export default TodoItem
