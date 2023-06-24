import React, {useState, createContext} from "react";

// Interfaces
import {IGameMode} from "../interfaces/IGameMode";
import {IChildren} from "../interfaces/IChildren";

export const GameModeContext = createContext({} as IGameMode);

function GameModeProvider({children}: IChildren) {
	const [isVsPlayer, setIsVsPlayer] = useState<boolean>(false);
	const [isVsCpu, setIsVsCpu] = useState<boolean>(false);

	return (
		<GameModeContext.Provider value={{isVsPlayer, setIsVsPlayer, isVsCpu, setIsVsCpu}}>
			{children}
		</GameModeContext.Provider>
	);
}

export default GameModeProvider;
