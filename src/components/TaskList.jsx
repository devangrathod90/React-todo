import React from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ todos, handleEdit, handleDelete, handleCheckbox, showFinished }) => {
  return (
    <div className="todos-section w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Your Todos</h2>
      <div className="todos w-full">
        {todos.length === 0 && (
          <div className="m-5 text-center text-lg">No Todos to display</div>
        )}
        {todos.map(
          (item) =>
            (showFinished || !item.isCompleted) && (
              <div
                key={item.id}
                className="todo flex justify-between items-center p-4 border-b-2 mb-3"
              >
                <div className="flex items-center gap-5">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div
                    className={
                      item.isCompleted ? "line-through text-lg" : "text-lg"
                    }
                  >
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-lg font-bold text-white rounded-md mx-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-lg font-bold text-white rounded-md mx-1"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TaskList;
