import React from "react";
import { useDispatch } from "react-redux";
import "./TodoCard.css";

const MemeCard = ({ message }) => {
    const dispatch = useDispatch();
    const remove = () => dispatch({ type: "REMOVE", payload: message });

    return (
        <div className="TodoCard">
            <h3>{message}</h3>
            <button onClick={remove}>Remove</button>
        </div>
    );
};

export default MemeCard;