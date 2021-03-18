import { useState } from "react";
import { Card } from "./components/Card/Card";
import { InputBox } from "./components/InputBox/InputBox";
import { TodosBox } from "./components/Todos/TodosBox/TodosBox";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: "12345",
      text: "Test",
    },
  ]);

  const onAdd = (text) => {
    setTodos([...todos, { id: Math.random(), text: text }]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="header-text">My Todos!</h1>
      <Card>
        <InputBox onAdd={onAdd} />
        <TodosBox todos={todos} onDelete={onDelete} />
      </Card>
    </div>
  );
};

export default App;
