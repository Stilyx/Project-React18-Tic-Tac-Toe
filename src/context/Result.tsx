import React, {useState, createContext} from "react";

// Interfaces

import {IResult} from "../interfaces/IResult";
import {IChildren} from "../interfaces/IChildren";

export const ResultContext = createContext({} as IResult);

function ResultProvider({children}: IChildren) {
	const [whoWin, setWhoWin] = useState<string>("");
	const [draw, setDraw] = useState<boolean>(false);
	const [isWinner, setIsWinner] = useState<boolean>(false);
	const [restartGame, setRestartGame] = useState(false);
	return (
		<ResultContext.Provider
			value={{whoWin, setWhoWin, draw, setDraw, isWinner, setIsWinner, restartGame, setRestartGame}}
		>
			{children}
		</ResultContext.Provider>
	);
}

export default ResultProvider;
