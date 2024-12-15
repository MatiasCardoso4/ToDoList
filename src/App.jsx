import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState({
    title: "",
  });
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

  function addTodo(todo) {
    setTodos((prevState) => [...prevState, todo]);
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
          return <div key={i}>{todo}</div>;
        })}
      </section>
    </>
  );
}

export default App;
