import React, {useState, createContext} from "react";

// Interfaces
import {IChildren} from "../interfaces/IChildren";
import {IScoreBoard} from "../interfaces/IScoreBoard";

export const ScoreBoardContext = createContext({} as IScoreBoard);

function ScoreBoardProvider({children}: IChildren) {
	const [xScore, setXScore] = useState<number>(0);
	const [oScore, setOScore] = useState<number>(0);
	const [ties, setTies] = useState<number>(0);
	return (
		<ScoreBoardContext.Provider value={{xScore, setXScore, oScore, setOScore, ties, setTies}}>
			{children}
		</ScoreBoardContext.Provider>
	);
}

export default ScoreBoardProvider;
