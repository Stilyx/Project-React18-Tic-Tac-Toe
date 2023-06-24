import React, {useContext} from "react";

// Icons
import {MdRefresh} from "react-icons/md";

// Style
import "./TurnInfo.scss";

// Components
import Button from "../Button";
import XIcon from "../../assets/components/XIcon";
import OIcon from "../../assets/components/OIcon";

// Context
import {setTurnContext} from "../../context/SetTurn";
import {ResultContext} from "../../context/Result";

function TurnInfo() {
	const {currentPlayer} = useContext(setTurnContext);
	const {setRestartGame} = useContext(ResultContext);

	return (
		<div className='turn-info'>
			<div className='game-logo'>
				<XIcon iconClass='x-game-logo' />
				<OIcon iconClass='o-game-logo' />
			</div>
			<div className='turn'>
				{currentPlayer === "x" ? (
					<XIcon iconClass='turn-icons' />
				) : (
					<OIcon iconClass='turn-icons' />
				)}
				<p className='turnText'>TURN</p>
			</div>
			<Button
				buttonText={<MdRefresh />}
				buttonClass='refresh'
				handleClick={() => setRestartGame(true)}
			/>
		</div>
	);
}

export default TurnInfo;
