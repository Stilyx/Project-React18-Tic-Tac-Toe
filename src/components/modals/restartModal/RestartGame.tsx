import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

// Styles
import "./RestartGame.scss";

// Components
import Overlay from "../overlay/Overlay";
import Button from "../../Button";

// Context
import {SimbolSelectContext} from "../../../context/SimbolSelect";
import {ResultContext} from "../../../context/Result";
import {setTurnContext} from "../../../context/SetTurn";
import {ScoreBoardContext} from "../../../context/ScoreBoard";

// Utils
import handleQuit from "../../../utils/handleQuit";

function RestartGame() {
	const {setTies, setOScore, setXScore} = useContext(ScoreBoardContext);
	const {setIsWinner, setWhoWin, setDraw, setRestartGame} = useContext(ResultContext);
	const {setBoxes, setCurrentPlayer} = useContext(setTurnContext);
	const {setStarterSimbol, setCpuSimbol} = useContext(SimbolSelectContext);
	const navigate = useNavigate();

	const resetGame = () => {
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
	return (
		<Overlay>
			<div className='restart-container'>
				<h1 className='restart-title'>RESTART GAME?</h1>
				<div className='result-buttons'>
					<Button
						buttonText='NO, CANCEL'
						buttonClass='resume-button'
						handleClick={() => setRestartGame(false)}
					/>
					<Button buttonText='YES, RESTART' buttonClass='quit-to-home' handleClick={resetGame} />
				</div>
			</div>
		</Overlay>
	);
}

export default RestartGame;
