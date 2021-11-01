import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import "./TodoContainer.css";
import { v4 as uuid } from "uuid";

const TodoContainer = () => {
    const todos = useSelector(store => store.todos);
    const generateTodoCards = todos.map(todo => <TodoCard message={todo} key={uuid()}/>);
                                                                                            
    
    return (
        <div className="TodoContainer">
            {generateTodoCards}
        </div>
    );
};

export default TodoContainer;