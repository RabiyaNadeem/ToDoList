import React, { useState } from "react";
import "./todo.css";
import TodoList from "./TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInput(event.target.value);
  };


  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };


  const deleteitems = (id) => {
    console.log("deleted");

    setItems((oldItems)=>
    {
      return oldItems.filter((arrElem,index)=>
      {
        return index!==id;
      })
    });
  };
  

  return (
    <div className="main_div">
      <div className="center">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add an item"
          value={input}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((item, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                item={item}
                onSelect={deleteitems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
