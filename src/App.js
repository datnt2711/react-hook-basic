import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

function App() {
  const [name, setName] = useState("Dat eiii");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Valorant", type: "game" },
    { id: 2, name: "League of Legends", type: "game" },
    { id: 3, name: "Black Phone", type: "film" },
    { id: 4, name: "Black Adam", type: "film" },
  ]);

  const handleClickButton = () => {
    if (!address) {
      alert("empty input");
      return;
    }
    setName("NTD");
    let newTodo = {
      id: Math.floor(Math.random() * 101),
      name: address,
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world React Hook with {name}</h3>
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <button type="button" onClick={() => handleClickButton()}>
          Click me!
        </button>

        <div className="container">
          <Todo todos={todos} title="All todos" />
        </div>
        <div>
          <Todo
            todos={todos.filter((item) => item.type === "film")}
            title="Film todos"
          />
        </div>
        <div>
          <Todo
            todos={todos.filter((item) => item.type === "game")}
            title="Game todos"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
