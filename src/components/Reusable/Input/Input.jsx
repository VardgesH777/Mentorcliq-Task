import React from "react";

import "./styles.scss"

const Input = ({handleChange = () => {}, name, value, placeholder}) => {
    return (
        <input type="text"
               onChange={(e) => handleChange({name, value: e.target.value} )}
               placeholder={placeholder}
               value={value}
        />
    )
};

export default Input;
