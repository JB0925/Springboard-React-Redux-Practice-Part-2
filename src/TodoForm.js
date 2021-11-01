import React from "react";
import useFormHandler from "./hooks";
import "./TodoForm.css";

const MemeForm = () => {
    const [formData, handleChange, handleSubmit] = useFormHandler();

    return (
        <div className="TodoForm">
            <h2>Add a Todo</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTodo">Top Text</label>
                <input
                    id="newTodo"
                    type="text"
                    name="newTodo"
                    value={formData.newTodo}
                    placeholder="Enter a New Todo"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MemeForm;