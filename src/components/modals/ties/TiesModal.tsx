import React, {useContext} from "react";

import Overlay from "../overlay/Overlay";
import Button from "../../Button";

// Styles

import "./TiesModal.scss";
import {ResultContext} from "../../../context/Result";
import {setTurnContext} from "../../../context/SetTurn";
import {ScoreBoardContext} from "../../../context/ScoreBoard";
import {useNavigate} from "react-router-dom";

// utils
import handleQuit from "../../../utils/handleQuit";
import {handleNext} from "../../../utils/handleNext";
import {GameModeContext} from "../../../context/GameMode";
import {SimbolSelectContext} from "../../../context/SimbolSelect";

function TiesModal() {
	const {setDraw, setIsWinner, setWhoWin, setRestartGame} = useContext(ResultContext);
	const {setOScore, setXScore, setTies} = useContext(ScoreBoardContext);
	const {setBoxes, setCurrentPlayer, setCpuTurn} = useContext(setTurnContext);
	const {setCpuSimbol, setStarterSimbol} = useContext(SimbolSelectContext);
	const {isVsCpu} = useContext(GameModeContext);

	const navigate = useNavigate();
	const handleQuitGame = () => {
		navigate("/");
		handleQuit({
			setOScore,
			setXScore,
			setTies,
			setDraw,
			setIsWinner,
			setBoxes,
			setWhoWin,
			setCurrentPlayer,
			setRestartGame,
			setStarterSimbol,
			setCpuSimbol
		});
	};

	const handleNextGame = () =>
		handleNext({setBoxes, setCurrentPlayer, setDraw, setIsWinner, setWhoWin, setCpuTurn, isVsCpu});

	return (
		<Overlay>
			<div className='ties-container'>
				<h1 className='tie-title'>ROUND TIED</h1>
				<div className='result-buttons'>
					<Button buttonText='QUIT' buttonClass='quit-button' handleClick={handleQuitGame} />
					<Button
						buttonText='NEXT ROUND'
						buttonClass='next-round-button'
						handleClick={handleNextGame}
					/>
				</div>
			</div>
		</Overlay>
	);
}

export default TiesModal;
