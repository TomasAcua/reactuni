import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onclick, type = "button", color = "primary", className="" }) => {
    return (
        <button
            onClick={onclick}
            type={type}
            className={`${styles.button} ${styles[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;