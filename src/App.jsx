import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";  

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    if (t) {
      setTodo(t.todo);
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      saveToLS();
    }
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    if (todo.length > 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      saveToLS();
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      saveToLS();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="todo-app flex flex-col items-center min-h-screen p-4">
        <TaskInput
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
          toggleFinished={toggleFinished}
          showFinished={showFinished}
        />
        <TaskList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheckbox={handleCheckbox}
          showFinished={showFinished}
        />
      </div>
    </>
  );
};

export default App;
