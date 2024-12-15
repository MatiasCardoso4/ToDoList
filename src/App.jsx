import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "",
    },
  ]);
  const [todo, setTodo] = useState("");

  function handleForm(e) {
    e.preventDefault();
    const newTodo = {
      title: todo,
      id: new Date().getDate() * 3,
    };

    addTodo(newTodo);
  }

  function handleInput(e) {
    setTodo(e.target.value);
  }

  function addTodo(newTodo) {
    const todoExists = todos.some((todo) => todo.title === newTodo.title);
    if (todoExists) return;
    setTodos((prevState) => [...prevState, newTodo]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleForm}>
        <input type="text" onChange={handleInput} />
        <button>Add</button>
      </form>

      <section>
        {todos.map((todo, i) => {
          return <div key={i}>{todo.title}</div>;
        })}
      </section>
    </>
  );
}

export default App;
