import React from "react";
import './App.css';
import TodoForm from './TodoForm';
import TodoContainer from './TodoContainer';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
