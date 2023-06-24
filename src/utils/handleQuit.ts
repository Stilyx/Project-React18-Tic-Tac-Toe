import {IHandleQuit} from "../interfaces/IHandleQuit";

const handleQuit = (props: IHandleQuit) => {
	props.setDraw(false);
	props.setIsWinner(false);
	props.setOScore(0);
	props.setXScore(0);
	props.setTies(0);
	props.setBoxes(Array(9).fill(""));
	props.setWhoWin("");
	props.setCurrentPlayer("x");
	props.setRestartGame(false);
	props.setStarterSimbol("x");
	props.setCpuSimbol("o");
};

export default handleQuit;
