import React from "react";
import Styles from "./Title.module.css";

const Title = ({ text }) => {
    return (
            <h1 className={Styles.title}>{text}</h1>
       );
}
export default Title;