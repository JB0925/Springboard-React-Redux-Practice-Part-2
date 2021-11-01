import React, { useState } from "react";
import { useDispatch } from "react-redux";

const initialFormState = {
    topText: "",
    bottomText: "",
    imageUrl: "",
    textColor: ""
};

const useFormHandler = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (evt, func) => {
        evt.preventDefault();
        const action = {
            type: "ADD",
            payload: formData
        };
        dispatch(action);
        setFormData(formData => initialFormState);
    };
    return [formData, handleChange, handleSubmit];
};

export default useFormHandler;