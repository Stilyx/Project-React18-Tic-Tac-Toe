import React from "react";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";

// Style
import "./Home.scss";

// Components
import Button from "../components/Button";
import OIcon from "../assets/components/OIcon";
import XIcon from "../assets/components/XIcon";
import SimbolSelector from "../components/simbolSelector/SimbolSelector";

// Context
import {GameModeContext} from "../context/GameMode";
import {setTurnContext} from "../context/SetTurn";
import {SimbolSelectContext} from "../context/SimbolSelect";

function Home() {
	const {setIsVsPlayer, setIsVsCpu} = useContext(GameModeContext);
	const {setCpuTurn, setCurrentPlayer, setPlayerTurn} = useContext(setTurnContext);
	const {starterSimbol, setCpuSimbol} = useContext(SimbolSelectContext);

	const navigate = useNavigate();

	const handleVsPlayer = () => {
		localStorage.setItem("gamemode", "player");
		setIsVsPlayer(true);
		setIsVsCpu(false);
		setCurrentPlayer("x");
		navigate("/game");
	};

	const handleVsCpu = () => {
		localStorage.setItem("gamemode", "cpu");
		setIsVsPlayer(false);
		setIsVsCpu(true);
		setCurrentPlayer("x");
		if (starterSimbol === "x") {
			setPlayerTurn(true);
			setCpuSimbol("o");
		}

		if (starterSimbol === "o") {
			setCpuTurn(true);
			setCpuSimbol("x");
		}

		navigate("/game");
	};

	return (
		<div className='home'>
			<div className='logo'>
				<OIcon iconClass='o-logo' />
				<XIcon iconClass='x-logo' />
			</div>
			<SimbolSelector
				xSimbol={<XIcon iconClass='display-gray-color' />}
				oSimbol={<OIcon iconClass='display-gray-color' />}
			/>
			<div className='cpu-or-player'>
				<Button
					buttonClass='cpu-button'
					buttonText='NEW GAME (VS CPU)'
					handleClick={() => handleVsCpu()}
				/>

				<Button
					buttonClass='player-button'
					buttonText='NEW GAME (VS PLAYER)'
					handleClick={() => handleVsPlayer()}
				/>
			</div>
		</div>
	);
}

export default Home;
