import React, {useState} from "react";
import {createContext} from "react";

// Interfaces
import {ISimbolContext} from "../interfaces/ISimbolSelecotr";
import {IChildren} from "../interfaces/IChildren";

export const SimbolSelectContext = createContext({} as ISimbolContext);

const cpuLocalStorage = localStorage.getItem("starterLocalCpu");
const starterPlayerSimbol = localStorage.getItem("starterPlayerSimbol");

function SimbolSelectProvider({children}: IChildren) {
	const [starterSimbol, setStarterSimbol] = useState(starterPlayerSimbol || "x");
	const [cpuSimbol, setCpuSimbol] = useState(cpuLocalStorage || "o");
	return (
		<SimbolSelectContext.Provider
			value={{
				starterSimbol,
				setStarterSimbol,
				cpuSimbol,
				setCpuSimbol
			}}
		>
			{children}
		</SimbolSelectContext.Provider>
	);
}

export default SimbolSelectProvider;
