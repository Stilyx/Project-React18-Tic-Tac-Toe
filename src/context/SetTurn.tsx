import React, {useState, createContext} from "react";

// Interfaces
import {ISetTurn} from "../interfaces/ISetTurn";
import {IChildren} from "../interfaces/IChildren";

export const setTurnContext = createContext({} as ISetTurn);
const starterSimbol = localStorage.getItem("starterPlayerSimbol");

const SetTurnProvider = ({children}: IChildren): JSX.Element => {
	const emptyBoxes = Array(9).fill("");
	const [boxes, setBoxes] = useState(emptyBoxes);
	const [currentPlayer, setCurrentPlayer] = useState("x");
	const [playerTurn, setPlayerTurn] = useState<boolean>(false);
	const [cpuTurn, setCpuTurn] = useState<boolean>(starterSimbol === "x" ? false : true);

	return (
		<setTurnContext.Provider
			value={{
				boxes,
				setBoxes,
				currentPlayer,
				setCurrentPlayer,
				cpuTurn,
				setCpuTurn,
				playerTurn,
				setPlayerTurn
			}}
		>
			{children}
		</setTurnContext.Provider>
	);
};

export default SetTurnProvider;
