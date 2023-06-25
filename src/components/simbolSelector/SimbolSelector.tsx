import React, {useContext, useEffect} from "react";

import "./SimbolSelector.scss";

// Context
import {SimbolSelectContext} from "../../context/SimbolSelect";

//Interfaces
import {ISimbolSelector} from "../../interfaces/ISimbolSelector";

function SimbolSelector({xSimbol, oSimbol}: ISimbolSelector) {
	const {setStarterSimbol, starterSimbol, setCpuSimbol} = useContext(SimbolSelectContext);

	useEffect(() => {
		if (starterSimbol === "x") {
			localStorage.setItem("starterPlayerSimbol", "x");
			localStorage.setItem("starterLocalCpu", "o");

			setCpuSimbol("o");
		}
		if (starterSimbol === "o") {
			localStorage.setItem("starterPlayerSimbol", "o");
			localStorage.setItem("starterLocalCpu", "x");

			setCpuSimbol("x");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [starterSimbol]);

	return (
		<div className='simbol-select-container'>
			<p className='player-one-alert'>PICK PLAYER 1’S MARK</p>
			<div className='player-select'>
				<input
					type='radio'
					name='simbol-select'
					id='x'
					defaultChecked={true}
					value='x'
					onChange={e => setStarterSimbol("x")}
				/>
				<label htmlFor='x'>{xSimbol}</label>

				<input
					type='radio'
					name='simbol-select'
					id='o'
					value='o'
					onChange={e => setStarterSimbol("o")}
				/>
				<label htmlFor='o'>{oSimbol}</label>
			</div>
			<p className='start-alert'>REMEMBER : X GOES FIRST</p>
		</div>
	);
}

export default SimbolSelector;
