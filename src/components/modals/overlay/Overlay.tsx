import React from "react";

// Styles
import "./Overlay.scss";

// Interfaces
import {IChildren} from "../../../interfaces/IChildren";

function Overlay({children}: IChildren) {
	return <div className='overlay'>{children}</div>;
}

export default Overlay;
