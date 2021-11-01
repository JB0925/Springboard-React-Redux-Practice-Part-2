import React from "react";
import useFormHandler from "./hooks";
import "./MemeForm.css";

const MemeForm = () => {
    const [formData, handleChange, handleSubmit] = useFormHandler();

    return (
        <div className="MemeForm">
            <h2>Add a Meme</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="topText">Top Text</label>
                <input
                    id="topText"
                    type="text"
                    name="topText"
                    value={formData.topText}
                    placeholder="Enter the Top Text"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="bottomText">Bottom Text</label>
                <input
                    id="bottomText"
                    type="text"
                    name="bottomText"
                    value={formData.bottomText}
                    placeholder="Enter the Bottom Text"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="imageUrl">Image Url</label>
                <input
                    id="imageUrl"
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    placeholder="Enter the Image URL"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="textColor">Text Color</label>
                <input
                    id="textColor"
                    type="text"
                    name="textColor"
                    value={formData.textColor}
                    placeholder="Enter the Text Color"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MemeForm;