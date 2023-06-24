import React, {useContext} from "react";

// Styles
import "./Game.scss";

// Components
import TurnInfo from "../components/turnInfo/TurnInfo";
import Boxes from "../components/boxes/Boxes";
import ScoreBoard from "../components/scoreBoard/ScoreBoard";
import WinModal from "../components/modals/winModal/WinModal";
import TiesModal from "../components/modals/ties/TiesModal";
import RestartGame from "../components/modals/restartModal/RestartGame";

// Context
import {ResultContext} from "../context/Result";
import {SimbolSelectContext} from "../context/SimbolSelect";

function Game() {
	const {starterSimbol} = useContext(SimbolSelectContext);
	const {isWinner, draw, whoWin, restartGame} = useContext(ResultContext);
	return (
		<div className='game'>
			<TurnInfo />
			<Boxes />
			<ScoreBoard />
			{isWinner ? <WinModal whoWin={whoWin} starterSimbol={starterSimbol} /> : ""}
			{draw ? <TiesModal /> : ""}
			{restartGame ? <RestartGame /> : ""}
		</div>
	);
}

export default Game;
