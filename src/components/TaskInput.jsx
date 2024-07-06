import React from 'react';

const TaskInput = ({ todo, setTodo, handleAdd, toggleFinished, showFinished }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="input-section w-full max-w-lg flex flex-col items-center">
      <input
        onChange={handleChange}
        value={todo}
        type="text"
        className="border-4 border-black rounded-xl p-3 w-full mb-4 text-lg"
        placeholder="Enter your todo"
      />
      <button
        onClick={handleAdd}
        disabled={todo.length <= 3}
        className="bg-violet-800 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-lg font-bold text-white w-full mb-4"
        type="submit"
      >
        Submit
      </button>
      <div className="flex items-center mb-4">
        <input
          className="mr-2"
          id="show"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label className="text-lg" htmlFor="show">
          Show Finished
        </label>
      </div>
      <div className="h-[1px] bg-black opacity-15 w-full mb-4"></div>
    </div>
  );
};

export default TaskInput;
