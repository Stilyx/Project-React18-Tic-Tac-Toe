import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

// Styles
import "./WinModal.scss";

// Components
import Overlay from "../overlay/Overlay";
import XIcon from "../../../assets/components/XIcon";
import OIcon from "../../../assets/components/OIcon";
import Button from "../../Button";

// Interfaces
import {IWinModal} from "../../../interfaces/IWinModal";
import {ResultContext} from "../../../context/Result";
import {setTurnContext} from "../../../context/SetTurn";

// Utils
import {handleNext} from "../../../utils/handleNext";
import handleQuit from "../../../utils/handleQuit";
import {ScoreBoardContext} from "../../../context/ScoreBoard";
import {GameModeContext} from "../../../context/GameMode";
import {SimbolSelectContext} from "../../../context/SimbolSelect";

function WinModal({whoWin, starterSimbol}: IWinModal): JSX.Element {
	const {setDraw, setIsWinner, setWhoWin, setRestartGame} = useContext(ResultContext);
	const {setBoxes, setCurrentPlayer, setCpuTurn} = useContext(setTurnContext);
	const {setOScore, setXScore, setTies} = useContext(ScoreBoardContext);
	const {isVsCpu} = useContext(GameModeContext);
	const {setStarterSimbol, setCpuSimbol} = useContext(SimbolSelectContext);
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
			<div className='win-container'>
				<p className='result'>{whoWin === starterSimbol ? "YOU WON!" : "OH NO, YOU LOST…"}</p>
				<div className='who-takes-round'>
					{whoWin === "x" ? (
						<XIcon iconClass='result-x-icon' />
					) : (
						<OIcon iconClass='result-o-icon' />
					)}
					<p className={whoWin === "x" ? "result-x-text" : "result-o-text"}>TAKES THE ROUND</p>
				</div>
				<div className='result-buttons'>
					<Button buttonText='QUIT' buttonClass='quit-button' handleClick={handleQuitGame} />
					<Button
						buttonText='NEXT ROUND'
						buttonClass='next-round-button'
						handleClick={() => handleNextGame()}
					/>
				</div>
			</div>
		</Overlay>
	);
}

export default WinModal;
