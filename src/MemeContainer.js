import React from "react";
import MemeCard from "./MemeCard";
import { useSelector } from "react-redux";
import "./MemeContainer.css";

const MemeContainer = () => {
    const memes = useSelector(store => store.memes);
    const generateMemeCards = memes.map(({ topText, bottomText, imageUrl, textColor }) => <MemeCard 
                                                                                            topText={topText} 
                                                                                            bottomText={bottomText}
                                                                                            imageUrl={imageUrl}
                                                                                            textColor={textColor}
                                                                                          />);
    
    return (
        <div className="MemeContainer">
            {generateMemeCards}
        </div>
    );
};

export default MemeContainer;