import React, {useContext} from "react";

// Styles
import "./ScoreBoard.scss";

// Context
import {ScoreBoardContext} from "../../context/ScoreBoard";
import {SimbolSelectContext} from "../../context/SimbolSelect";
import {GameModeContext} from "../../context/GameMode";

// LocalStorage
const gamemode = localStorage.getItem("gamemode");

function ScoreBoard() {
	const {ties, xScore, oScore} = useContext(ScoreBoardContext);
	const {starterSimbol} = useContext(SimbolSelectContext);
	const {isVsCpu} = useContext(GameModeContext);

	return (
		<div className='scoreBoard'>
			<div className='x-score'>
				{gamemode === "cpu" || isVsCpu ? (
					<p className='score-title'>X {starterSimbol === "x" ? "(You)" : "(CPU)"}</p>
				) : (
					<p className='score-title'>X {starterSimbol === "x" ? "(You)" : "(Player Two)"}</p>
				)}
				<p className='score-points'>{xScore}</p>
			</div>
			<div className='ties-score'>
				<p className='score-title'>Ties</p>
				<p className='score-points'>{ties}</p>
			</div>
			<div className='o-score'>
				{gamemode === "cpu" || isVsCpu ? (
					<p className='score-title'>O {starterSimbol === "o" ? "(You)" : "CPU"}</p>
				) : (
					<p className='score-title'>O {starterSimbol === "o" ? "(You)" : "(Player Two)"}</p>
				)}
				<p className='score-points'>{oScore}</p>
			</div>
		</div>
	);
}

export default ScoreBoard;
