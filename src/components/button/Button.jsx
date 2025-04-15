import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", color = "primary", className="" }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${styles.button} ${styles[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;