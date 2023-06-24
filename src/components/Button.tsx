import React from "react";

// Interfaces
import {IButton} from "../interfaces/IButton";

const Button = ({buttonText, buttonClass, handleClick}: IButton) => {
	return (
		<button className={buttonClass} onClick={handleClick}>
			{buttonText}
		</button>
	);
};

export default Button;
