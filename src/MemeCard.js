import React from "react";
import { useDispatch } from "react-redux";
import "./MemeCard.css";

const MemeCard = ({ topText, bottomText, imageUrl, textColor }) => {
    const dispatch = useDispatch();
    const sugar = {
        topText,
        bottomText,
        imageUrl,
        textColor
    };
    const remove = () => dispatch({ type: "REMOVE", payload: sugar });

    const style = {
        color: textColor
    };

    return (
        <div className="MemeCard">
            <div className="MemeCard-data">
                <h2 className="MemeCard-topText" style={style}>{topText}</h2>
                <img src={imageUrl} alt="meme" />
                <h2 className="MemeCard-bottomText" style={style}>{bottomText}</h2>
            </div>
            <button onClick={remove}>Remove</button>
        </div>
    );
};

export default MemeCard;